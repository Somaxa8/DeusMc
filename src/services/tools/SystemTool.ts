import {env, execPath} from "process";
import {homedir} from "os";

export default class SystemTool {

    static readonly isFlatpak = execPath === "/app/bin/deusmc/deusmc-launcher"
    static readonly flatpakHome = env.XDG_DATA_HOME?.replace("/data", "") || homedir()
    static readonly home = this.isFlatpak ? this.flatpakHome : homedir()
    static readonly config = env.XDG_CONFIG_HOME || env.HOME + "/.config"

}