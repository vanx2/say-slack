# say-slack
## description
Say posted data via `say` command on macOS

## installation

It runs on mac OS only, Node.js is required.

1. Open terminal
Open terminal.app.

1. Change directory
Change directory to you want to install
```
cd ~/Documents
```

1. Download the script

If git command is ready:
```
git clone https://github.com/vanx2/say-slack.git
```
not ready:
```
curl -O https://codeload.github.com/vanx2/say-slack/zip/master
unzip master
```

1. Initialize
install `qs` module and set plist to run forever as daemon
```
cd say-slack*
npm install
sed -e "s@/Users/van/Documents/scripts/saySlack/@`pwd`@" org.van.sayslack.plist > /Library/LaunchDaemons/org.me.sayslack.plist
```
