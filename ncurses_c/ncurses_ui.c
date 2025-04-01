#include "ncurses_ui.h"
#include <ncurses.h>

void init_ui() {
    initscr();
    cbreak();
    noecho();
    keypad(stdscr, TRUE);
    curs_set(0);
}

void close_ui() {
    endwin();
}

void display_welcome() {
    clear();
    mvprintw(5, 10, "Welcome to the ncurses-based UI!");
    refresh();
    getch();
}

void show_message(const char *message) {
    clear();
    mvprintw(10, 10, "%s", message);
    refresh();
    getch();
}

