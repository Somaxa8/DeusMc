const { contextBridge, ipcRenderer, clipboard } = require('electron')

const validChannels = [
    "hide-app", "minimize-app", "close-app",
    "install-minecraft", "install-progress", "launch-minecraft",
    "is-installed",
]
contextBridge.exposeInMainWorld(
    'ipc', {
        invoke: (channel, data) => {
            if (validChannels.includes(channel)) {
                return ipcRenderer.invoke(channel, data)
            }
        },
        send: (channel, data) => {
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data)
            }
        },
        sendSync: (channel, data) => {
            if (validChannels.includes(channel)) {
                return ipcRenderer.sendSync(channel)
            }
        },
        on: (channel, func) => {
            if (validChannels.includes(channel)) {
                // Strip event as it includes `sender` and is a security risk
                ipcRenderer.on(channel, (event, ...args) => func(...args))
            }
        },
    },
);