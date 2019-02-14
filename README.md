# Pronoy's Portfolio
Simple Electron App that displays my portfolio

Here you can download the app for any platform, simply paste this code in your terminal under the project scope:
```npm install```
</br>
Mac: ```electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icon.icns --prune=true --out=release-builds```
</br>
Linux: ```electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icon.png --prune=true --out=release-builds```
</br>
Windows:```electron-packager . --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons.ico --prune=true --out=release-builds```
