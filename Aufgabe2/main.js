const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
    win = new BrowserWindow({ width: 800, height: 600 })
    //win.loadFile('login.html')
    
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'login.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.webContents.openDevTools()
    Menu.setApplicationMenu(null)

    win.on('closed', () => {
        win = null
    })
}
  
app.on('ready', createWindow)

function aMethod(){
    console.log("Yep!")
}
