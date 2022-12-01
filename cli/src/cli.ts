
const program = require("commander")
import { build } from "./build"
import pkg from "../package.json"

export async function mainCli() {
    program
        .name("DeviceScript")
        .description("build and run DeviceScript program https://aka.ms/devicescript")
        .version(pkg.version)
        .option("-v, --verbose", "more logging")

    program
        .command("build", { isDefault: true })
        .description("build a DeviceScript file")
        .option("-w, --watch", "watch file changes and rebuild automatically")
        .option("-l, --library", "build library")
        .option("--no-verify", "don't verify resulting bytecode")
        .option("-o", "--out-dir", "output directory, default is 'built'")
        .arguments("<file.ts>")
        .action(build)

    program.parse(process.argv)
}

if (require.main === module) mainCli()
