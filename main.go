package main

import (
	"log"
	"os"

	"GoTorrent/torrentfile"
)

func main() {
	inPath := os.Args[1]
	outPath := os.Args[2]

	tf, err := torrentfile.Open(inPath)
	if err != nil {
		log.Fatal(err)
	}
	
	err = tf.DownloadToFile(outPath)
	if err != nil {
		log.Fatal(err)
	}
}

/*
package main

import "C"
import (
	"fmt"
	"unsafe"
)

func main() {
	C.init_ui()
	defer C.close_ui()

	C.display_welcome()

	input := C.get_user_input(C.CString("Enter your name:"))
	defer C.free(unsafe.Pointer(input))

	C.show_message(C.CString("Hello, " + C.GoString(input)))

	for i := 0; i <= 100; i += 10 {
		C.update_progress(C.int(i))
	}

	options := []string{"Start", "Pause", "Quit"}
	cOptions := make([]*C.char, len(options))
	for i, option := range options {
		cOptions[i] = C.CString(option)
	}
	defer func() {
		for _, cOption := range cOptions {
			C.free(unsafe.Pointer(cOption))
		}
	}()

	choice := C.display_menu(C.CString("Select an option:"), &cOptions[0], C.int(len(options)))
	fmt.Printf("Selected option: %d\n", choice)
}
*/
