import consola from "consola";
import {TaskContext} from "@xmcl/task";
import Task = Electron.CrossProcessExports.Task;

export default class InstallationTask implements TaskContext {

    onStart(task: Task<any>) {
        consola.debug(task)
    }

    onUpdate(task: Task<any>, chunkSize: number) {
        // @ts-ignore
        consola.info("Progress:", task.progress, "Total:", task.total)
    }

    onFailed(task: Task<any>, error: any) {
        consola.debug(error)
    }

    onSucceed(task: Task<any>, result: any) {
        consola.debug(result)
    }

    onPaused(task: Task<any>) {
        consola.debug(task)
    }

    onResumed(task: Task<any>) {
        consola.debug(task)
    }

    onCancelled(task: Task<any>) {
        consola.debug(task)
    }
}