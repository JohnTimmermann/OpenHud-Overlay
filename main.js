const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    transparent: true,
    frame: false,
    fullscreen: true,
    alwaysOnTop: true,
    // resizable: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      // devTools: true,
    },
  });

  // mainWindow.loadFile(path.join(__dirname, "static", "index.html"));
  mainWindow.loadURL("http://localhost:3000/hud");

  // Enable pass-through for mouse clicks on transparent parts
  mainWindow.setIgnoreMouseEvents(true, { forward: true });
});
