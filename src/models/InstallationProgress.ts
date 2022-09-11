export default class InstallationProgress {

    constructor(inProgress: boolean, progress: number, total: number, message: string) {
        this.inProgress = inProgress
        this.progress = progress
        this.total = total
        this.message = message
        this.percentage = Math.round((progress / total) * 100)
    }

    inProgress: boolean = false
    percentage!: number
    progress!: number
    total!: number
    message!: string
}