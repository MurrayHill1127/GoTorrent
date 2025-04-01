#ifndef NCURSES_LIB_H
#define NCURSES_LIB_H

#include <ncurses.h>

// UI 控制
void init_ui();
void close_ui();
void display_welcome();
void show_message(const char *message);

// 菜单
int display_menu(const char *title, const char **options, int num_options);

// 输入
char *get_user_input(const char *prompt);

// 进度条
void update_progress(int percentage);

// 日志
void log_message(const char *message);

// 工具
void delay(int milliseconds);

#endif

