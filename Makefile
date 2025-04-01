CC = gcc
CFLAGS = -Wall -g -fPIC
LDFLAGS = -shared
LIB_NAME = libncurseslib.so
SRC_DIR = ncurses_c
OBJ_DIR = obj
BUILD_DIR = lib

SRCS = $(wildcard $(SRC_DIR)/*.c)
OBJS = $(SRCS:$(SRC_DIR)/%.c=$(OBJ_DIR)/%.o)

$(BUILD_DIR)/$(LIB_NAME): $(OBJS)
	@echo "Building shared library..."
	$(CC) $(LDFLAGS) -o $@ $^

$(OBJ_DIR)/%.o: $(SRC_DIR)/%.c
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	rm -rf $(OBJ_DIR)/*.o $(BUILD_DIR)/$(LIB_NAME)

$(OBJ_DIR):
	mkdir -p $(OBJ_DIR)

$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

.PHONY: clean

