package handshake

import (
	"fmt"
	"io"
)

type Handshake struct {
	Pstr		string
	InfoHash	[20]byte
	PeerID		[20]byte	
}

func New(infoHash, peerID [20]byte) *Handshake {
	return &Handshake{
		Pstr:		"BitTorrent protocol",
		InfoHash:	infoHash,
		PeerID:		peerID,
	}
} 

func (h *Handshake) Serialize() []byte {
	buf := make([]byte, len(h.Pstr)+49)
	buf[0] = byte(len(h.Pstr))
	curr := 1
	curr += copy(buf[curr:], h.Pstr)
	curr += copy(buf[curr:], make([]byte, 8))
	curr += copy(buf[curr:], h.InfoHash[:])
	curr += copy(buf[curr:], h.PeerID[:])
	return buf
}

func Read(r io.Reader) (*Handshake, error) {
	lengthBuf := make([]byte, 1)
	_, err := io.ReadFull(r, lengthBuf)
	if err != nil {
		return nil, err
	}
	pstrlen := int(lengthBuf[0])

	if pstrlen == 0 {
		err := fmt.Errorf("pstrlen cannot be 0")
		return nil, err
	}
	
	handshakeBuf := make([]byte, 48+pstrlen)
	_, err = io.ReadFull(r, handshakeBuf)
	if err != nil {
		return nil, err
	}
	
	var infoHash, peerID [20]byte
	
	copy(infoHash[:], handshakeBuf[pstrlen+8:pstrlen+8+20])
	copy(peerID[:], handshakeBuf[pstrlen+8+20:])

	h := Handshake {
		Pstr:		string(handshakeBuf[0:pstrlen]),
		InfoHash:	infoHash,
		PeerID:		peerID,	
	}
	
	return &h, nil
}











































