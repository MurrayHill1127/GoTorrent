package torrentfile

import (
	"testing"
)

func TestParseTorrent(t *testing.T) {
	torrent, err := Open("testdata/sample.torrent")
	if err != nil {
		t.Fatalf("Failed to open torrent: %v", err)
	}

	if torrent.Announce != "http://tracker.example.com/announce" {
		t.Errorf("Expected tracker URL to be http://tracker.example.com, got %s", torrent.Announce)
	}

	if len(torrent.PieceHashes) == 0 {
		t.Fatal("Expected at least one piece hash")
	}
}

