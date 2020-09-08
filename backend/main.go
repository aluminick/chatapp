package main

import (
	"fmt"
	"net"
	"os"
)

func main() {
	interfaces, err := net.Interfaces()

	if err != nil {
		fmt.Println(err.Error())
		os.Exit(1)
	}
	fmt.Println(interfaces)
}
