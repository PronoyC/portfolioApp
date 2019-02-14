//Necessary imports
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//Create window variable
let window = null;

// Wait until the app is ready
app.once('ready', () => {

    // Create a new window
    window = new BrowserWindow({
        //Set basic background colour
        backgroundColor: "#FFFFFF",

        //Icon for app
        icon: __dirname + '/assets/icon.png',

        //Fancy title bar for OS X
        titleBarStyle: 'hiddenInset',

        //Wait until app is fully loaded to show
        show: false
    });

    //Set maximum window size
    window.maximize();

    // Load a URL in the window to the local index.html path
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Show window when page is ready
    window.once('ready-to-show', () => {
        window.show();
    });
});