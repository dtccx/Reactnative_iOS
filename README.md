# Reactnative_iOS
develop a simple ios frontend with react native

# If you are new fish, read this to install environment
(1). Install latest Xcode  
(2). Install HomeBlew（OS系统上的一个安装包管理器，安装后可以方便后续安装包的安装。）  
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"  
(3). Install Node.js （服务端的JavaScript运行环境）  
下载地址：https://nodejs.org/download/  
Make sure that /usr/local/bin is in your $PATH.  
(4). (Optional)Install WatchMan（React修改source文件的一个工具）  
终端命令：  
brew install watchman  
(5). Install Flow: 一个JavaScript 的静态类型检查器。  
终端命令：  
brew install flow  
(6). Install React Native CLI: 用来开发React Native的命令行工具  
终端命令：  
npm install -g react-native-cli  
(7). Create project  
react-native init XXXXXX
(8). Run with iOS virtual machine   
react-native run-ios

(9). Dependency
npm install react-native-flexbox-grid

(10). Extra
Run on Android device.  
Step 1: Install Android SDK
```
brew cask install android-sdk
```

Step 2: Install required SDK  
```
sdkmanager "platforms;android-23" "build-tools;23.0.1" "add-ons;addon-google_apis-google-23"
```

Step 3: Test installation
```
react-native run-android
```

Cause I didnt have Android device, so I havent test it in Android, I am pretty sure it will work. And I will update if having chance.  

# Design Idea:
1.  Use flexbox to create square grid
  How to wrap flexbox into different lines?
  Here is the solution: use flexbox-grid model to create row and column flexbox   
  use Text to extend the line's width.(the way that i think, cause there is no variable for width)  
2.  Add button into the grid to control the color
3.  Use this.state to change render color with one click


# Result
[](img/1.png)
[](img/2.png)
[](img/3.png)
