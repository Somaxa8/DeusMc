import SystemTool from "@/services/tools/SystemTool";

export default class PathTool {
    static readonly deusmcConfig = SystemTool.config + "/deusmc"
    static readonly deusmcVersions = SystemTool.config + "/deusmc/versions"
}