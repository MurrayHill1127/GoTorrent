#include "ncurses_menu.h"
#include <ncurses.h>
#include <stdlib.h>
#include <string.h>

#define MAX_OPTIONS 10

void print_menu_frame(int width, int height) {
    for (int x = 0; x < width; x++) {
        mvprintw(3, x + 5, "-");
        mvprintw(4 + height, x + 5, "-");
    }
    for (int y = 0; y < height; y++) {
        mvprintw(4 + y, 5, "|");
        mvprintw(4 + y, 5 + width - 1, "|");
    }
}

void print_help() {
    mvprintw(LINES - 2, 5, "Use Arrow Keys to navigate, ENTER to select, q to quit.");
}

int display_menu(const char *title, const char **options, int num_options) {
    int highlight = 0;
    int choice = -1;
    int ch;
    
    initscr();
    clear();
    noecho();
    cbreak();
    keypad(stdscr, TRUE);
    curs_set(0);
    
    if (has_colors()) {
        start_color();
        init_pair(1, COLOR_YELLOW, COLOR_BLACK);
        init_pair(2, COLOR_RED, COLOR_BLACK);
    }
    
    while (1) {
        clear();
        attron(COLOR_PAIR(1));
        mvprintw(2, (COLS - strlen(title)) / 2, "%s", title);
        attroff(COLOR_PAIR(1));
        
        print_menu_frame(30, num_options + 2);
        print_help();
        
        for (int i = 0; i < num_options; i++) {
            if (i == highlight) {
                attron(A_REVERSE);
            }
            mvprintw(5 + i, 10, "%s", options[i]);
            attroff(A_REVERSE);
        }

        ch = getch();
        switch (ch) {
            case KEY_UP:
                highlight = (highlight - 1 + num_options) % num_options;
                break;
            case KEY_DOWN:
                highlight = (highlight + 1) % num_options;
                break;
            case 'q':
                mvprintw(LINES - 3, 5, "Are you sure you want to quit? (y/n)");
                refresh();
                if (getch() == 'y') {
                    endwin();
                    return -1;
                }
                break;
            case 10:
                choice = highlight;
                endwin();
                return choice;
        }
    }
}

void add_menu_option(const char **options, int *num_options, const char *new_option) {
    if (*num_options >= MAX_OPTIONS) {
        return;
    }
    options[*num_options] = strdup(new_option);
    (*num_options)++;
}

void remove_menu_option(const char **options, int *num_options, int index) {
    if (index < 0 || index >= *num_options) {
        return;
    }
    free((void *)options[index]);
    for (int i = index; i < *num_options - 1; i++) {
        options[i] = options[i + 1];
    }
    (*num_options)--;
}

