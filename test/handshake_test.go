package handshake

import (
	"bytes"
	"testing"
)

func TestHandshakeEncodeDecode(t *testing.T) {
	infoHash := [20]byte{1, 2, 3}
	peerID := [20]byte{4, 5, 6}
	req := New(infoHash, peerID)

	encoded := req.Serialize()
	decoded, err := Read(bytes.NewReader(encoded))
	if err != nil {
		t.Fatalf("Failed to decode handshake: %v", err)
	}

	if decoded.InfoHash != infoHash {
		t.Errorf("Expected infoHash %v, got %v", infoHash, decoded.InfoHash)
	}
	if decoded.PeerID != peerID {
		t.Errorf("Expected peerID %v, got %v", peerID, decoded.PeerID)
	}
}

