const { app, BrowserWindow } = require('electron')
 

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1920,
    height: 1080,
    backgroundColor: '#424242',
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
//   win.maximize()
}
app.whenReady().then(createWindow)
