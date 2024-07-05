import { execute, list } from "./commands";
import { program } from "./program";

program
    .command("list")
    .description("list all algorithms")
    .action(list);

program
    .command("execute")
    .description("execute algorithms")
    .argument("<name>", "algorithms name.")
    .action(execute);

program.parse(); 