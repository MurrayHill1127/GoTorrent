#include "ncurses_logger.h"
#include <stdio.h>

void log_message(const char *message) {
    FILE *file = fopen("log.txt", "a");
    if (file) {
        fprintf(file, "%s\n", message);
        fclose(file);
    }
}

