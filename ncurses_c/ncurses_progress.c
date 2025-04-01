#include "ncurses_progress.h"
#include <unistd.h>

void update_progress(int percentage) {
    mvprintw(20, 10, "Progress: %d%%", percentage);
    refresh();
    usleep(50000);
}

