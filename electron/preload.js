const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronApi', {
  getAppVersion: () => ipcRenderer.invoke('app:get-version'),

  // aquí exponerás funciones seguras (imprimir, acceso FS, etc.)
});
