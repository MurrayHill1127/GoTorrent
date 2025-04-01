package bitfield

import (
	"testing"
)

func TestBitfield(t *testing.T) {
	bf := Bitfield([]byte{0b10100000}) // 只设置了 0 和 2 号位

	if !bf.HasPiece(0) {
		t.Errorf("Expected piece 0 to be set")
	}
	if bf.HasPiece(1) {
		t.Errorf("Expected piece 1 to be unset")
	}
	if !bf.HasPiece(2) {
		t.Errorf("Expected piece 2 to be set")
	}
	if bf.HasPiece(3) {
		t.Errorf("Expected piece 3 to be unset")
	}
}

