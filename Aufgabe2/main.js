const { app, BrowserWindow, Menu } = require('electron')

let win

function createWindow () {
    win = new BrowserWindow({ width: 800, height: 600 })
    win.loadFile('login.html')
    
    //win.webContents.openDevTools()
    Menu.setApplicationMenu(null)

    win.on('closed', () => {
        win = null
    })
}
  
app.on('ready', createWindow)

function aMethod(){
    console.log("Yep!")
}
