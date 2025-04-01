package message

import (
	"bytes"
	"testing"
)

func TestMessageEncodeDecode(t *testing.T) {
	msg := NewHave(42)
	encoded := msg.Serialize()

	decoded, err := Read(bytes.NewReader(encoded))
	if err != nil {
		t.Fatalf("Failed to decode message: %v", err)
	}

	if decoded.ID != MsgHave {
		t.Errorf("Expected ID %d, got %d", MsgHave, decoded.ID)
	}
	if index, _ := ParseHave(decoded); index != 42 {
		t.Errorf("Expected index 42, got %d", index)
	}
}

