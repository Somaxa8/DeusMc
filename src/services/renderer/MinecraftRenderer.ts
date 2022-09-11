import consola from "consola";


export default class MinecraftRenderer {

    static install() {
        //@ts-ignore
        window.ipc.send("install-minecraft")
    }

    static installProgress() {
        //@ts-ignore
        window.ipc.on("install-progress", (args) => {
            console.log(args)
        })
    }

    static launch() {
        //@ts-ignore
        window.ipc.send("launch-minecraft")
    }

    static isInstalled(): boolean {
        //@ts-ignore
        return window.ipc.sendSync("is-installed")
    }

}