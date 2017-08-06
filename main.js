const { app, BrowserWindow, ipcMain } = require("electron");

let mainWindow = null;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 400
  });
  mainWindow.loadURL("file://" + __dirname + "/index.html");

  ipcMain.on("hello", (event, arg) => {
    console.log(arg);
  });
});
