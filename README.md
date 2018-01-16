# say-slack
## description
Say posted data via `say` command on macOS

## installation

It runs on mac OS only, Node.js and git is required.

```
cd ~/Documents
git clone https://github.com/vanx2/say-slack.git
cd say-slack
npm install
sed -e "s@/Users/van/Documents/scripts/saySlack/@`pwd`@" org.van.sayslack.plist > /Library/LaunchDaemons/org.me.sayslack.plist
```

