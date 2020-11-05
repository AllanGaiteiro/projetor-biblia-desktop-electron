const BibliaApp = require('./app')
const {app, BrowserWindow} = require('electron')

function createWindow() {

    let win = new BrowserWindow(
        {width:1200, 
         height:600,
         webPreferences:{nodeIntegration:true}}
    )
    // win.webContents.openDevTools()
    
    win.loadURL('http://localhost:1000/')
    
    win.focus();

    
}

app.whenReady().then(createWindow)

