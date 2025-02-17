import { app, BrowserWindow, screen } from "electron";
import path from "node:path";

const createWindow = () => {
  const win = new BrowserWindow({
    height: 500,
    width: 480,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      //   preload: path.join(app.getAppPath(), "src/electron/preload.cjs"),
    },
  });

  win.loadFile("src/index.html");
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
