package tests

import (
	"testing"
	"os/exec"
)

func TestDownloadTorrent(t *testing.T) {
	cmd := exec.Command("../main", "download", "test/sample.torrent")
	output, err := cmd.CombinedOutput()
	if err != nil {
		t.Fatalf("Download failed: %v\nOutput: %s", err, output)
	}
}

