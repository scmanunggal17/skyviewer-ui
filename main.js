import { app, BrowserWindow } from "electron";
import path from "node:path";

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    // minHeight: 400,
    // minWidth: 500,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      //   preload: path.join(app.getAppPath(), "src/electron/preload.cjs"),
    },
  });

  mainWindow.maximize();
  mainWindow.loadFile("src/index.html");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
