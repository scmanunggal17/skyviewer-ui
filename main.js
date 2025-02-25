import { app, BrowserWindow, ipcMain } from "electron";
import { exec } from "node:child_process";
import { error } from "node:console";
import path from "node:path";
import { stderr, stdout } from "node:process";

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    // minHeight: 400,
    // minWidth: 500,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(app.getAppPath(), "preload.cjs"),
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

ipcMain.on("set-location", (event, latitude, longitude) => {
  // Validate parameters to prevent command injection
  if (!/^-?\d+(\.\d+)?$/.test(latitude) || !/^-?\d+(\.\d+)?$/.test(longitude)) {
    console.error("Invalid parameters");
    return;
  }

  // const command = `sudo readsb-set-location ${latitude} ${longitude}`;
  const command = `echo ${latitude}, ${longitude}`;

  setTimeout(() => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
      console.log(`Stdout: ${stdout}`);
    });
  }, 50);
});
