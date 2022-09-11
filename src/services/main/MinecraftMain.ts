import {BrowserWindow, ipcMain, IpcMainEvent, IpcMainInvokeEvent} from "electron";
import MinecraftService from "@/services/MinecraftService";
import InstallationProgress from "@/models/InstallationProgress";

export default class MinecraftMain {

    static main(windows: BrowserWindow) {

        ipcMain.on("is-installed", async (event: IpcMainEvent) => {
            event.returnValue = await MinecraftService.isInstalled()
        })

        ipcMain.on("install-minecraft", async (event: IpcMainEvent) => {
            await MinecraftService.install(event)
        })

        ipcMain.on("launch-minecraft", async (event: IpcMainEvent) => {
            await MinecraftService.launch()
        })

    }

}