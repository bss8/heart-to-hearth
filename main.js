const { app, BrowserWindow } = require('electron')
 

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1920,
    height: 1080,
    backgroundColor: '#297481',
    icon: 'src/resources/img/campfire.ico',
    webPreferences: {
      nodeIntegration: true
    }
  })
  // win.removeMenu();
  // and load the index.html of the app.
  win.loadFile('index.html');
  
}
app.whenReady().then(createWindow)
