import {BrowserWindow} from "electron";
import WindowMain from "@/services/main/WindowMain";
import MinecraftMain from "@/services/main/MinecraftMain";

export default (windows: BrowserWindow) => {

    WindowMain.main(windows)
    MinecraftMain.main(windows)
}