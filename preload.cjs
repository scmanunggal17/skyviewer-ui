const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("NodeFn", {
  setLocation: (lat, lon) => {
    ipcRenderer.send("set-location", lat, lon);
  },
});
