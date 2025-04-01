#include "ncurses_input.h"
#include <stdlib.h>
#include <string.h>

char *get_user_input(const char *prompt) {
    char *input = (char *)malloc(256);
    echo();
    mvprintw(15, 10, "%s", prompt);
    getnstr(input, 255);
    noecho();
    return input;
}

