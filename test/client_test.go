package client

import (
	"testing"
)

func TestNewClient(t *testing.T) {
	peer := Peer{IP: "127.0.0.1", Port: 6881}
	client, err := New(peer, [20]byte{}, [20]byte{})

	if err != nil {
		t.Fatalf("Failed to create client: %v", err)
	}
	if client == nil {
		t.Fatal("Client should not be nil")
	}
}

