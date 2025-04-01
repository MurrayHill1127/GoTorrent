# GoTorrent, a BitTorrent Client written in Go.

## How to install

### 1. Install Go

Before you can run GoTorrent, you need to install Golang.

#### On Linux (Debian/Ubuntu)

```sh
sudo apt update
sudo apt install -y golang
```

### 2. Install ncurses library (Optional)

GoTorrent includes an ncurses-based terminal UI. You need to install the `ncurses` library before compiling the project.

#### On Linux (Debian/Ubuntu)

```sh
sudo apt update 
sudo apt install -y libncurses5-dev libncursesw5-dev
```

## How to use

### Use GoTorrent-Core (Recommended)

We include an example torrent file under `/test` and you can try it following the below instruction:

```sh
go run main.go example/debian-mac-12.7.0-amd64-netinst.iso.torrent ./debian.iso
```

### Use GoTorrent-UI (Testing, Unstable)

#### Use GoTorrent-Cli-Based-UI

```sh
make clean
make

go run main.go
```

#### Use GoTorrent-Web-Based-UI

You can directly click the /webui/index.html in GUI environment.

Or you can operate in terminal like this:

```sh
firefox webui/index.html //or any browser you like
```
