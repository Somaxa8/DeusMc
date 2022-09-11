import { getVersionList, MinecraftVersion, installTask } from "@xmcl/installer";
import {Version, launch} from "@xmcl/core";
import {existsSync} from "fs";
import consola from "consola";
import PathTool from "@/services/tools/PathTool";
import Task = Electron.CrossProcessExports.Task;
import {TaskContext} from "@xmcl/task";
import {IpcMainEvent} from "electron";
import InstallationProgress from "@/models/InstallationProgress";

export default class MinecraftService {

    static async install(event: IpcMainEvent) {
        const list: MinecraftVersion[] = (await getVersionList()).versions
        const minecraftVersion = list[0];

        consola.info("Installing", minecraftVersion.id, "...")

        const installAllTask = installTask(minecraftVersion, PathTool.deusmcVersions + `/${minecraftVersion.id}`);
        await installAllTask.startAndWait({
            onStart(task: Task<any>) {
            },
            onUpdate(task: Task<any>, chunkSize: number) {
                // @ts-ignore
                // consola.info("Progress:", task.progress, "Total:", task.total)
                // @ts-ignore
                event.reply("install-progress", new InstallationProgress(true, task.progress, task.total, `Installing ${task.name}`))
            },
            onFailed(task: Task<any>, error: any) {
                consola.debug(error)
            },
            onSucceed(task: Task<any>, result: any) {
                // @ts-ignore
                event.reply("install-progress", new InstallationProgress(false, 0, 0, "Finish"))
            },
            onPaused(task: Task<any>) {
                consola.debug(task)
            },
            onResumed(task: Task<any>) {
                consola.debug(task)
            },
            onCancelled(task: Task<any>) {
                consola.debug(task)
            }
        } as TaskContext)

        consola.info("Installed", minecraftVersion.id)
    }

    static async launch() {
        const list: MinecraftVersion[] = (await getVersionList()).versions
        const minecraftVersion = list[0];
        consola.info("Launching", minecraftVersion.id, "...")

        const resolvedVersion = await Version.parse(PathTool.deusmcVersions + `/${minecraftVersion.id}`, minecraftVersion.id)
        consola.info("Resolved", resolvedVersion.id)

        const version = minecraftVersion.id
        const javaPath = "/var/home/somaxa8/.sdkman/candidates/java/current/bin/java"
        const gamePath = PathTool.deusmcVersions + `/${minecraftVersion.id}`
        await launch({ gamePath, javaPath, version, extraExecOption: { detached: true } })
    }

    static async isInstalled() {
        const list: MinecraftVersion[] = (await getVersionList()).versions
        const minecraftVersion = list[0];

        const isInstalled = existsSync(PathTool.deusmcVersions + `/${minecraftVersion.id}`)

        consola.debug(isInstalled ? "Minecraft is installed" : "Minecraft is not installed")

        return isInstalled
    }

}