export default class WindowRenderer {

    static hide() {
        // @ts-ignore
        window.ipc.send("hide-app")
    }

    static minimize() {
        // @ts-ignore
        window.ipc.send("minimize-app")
    }

    static close() {
        // @ts-ignore
        window.ipc.send("close-app")
    }

}