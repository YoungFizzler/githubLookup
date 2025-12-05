import chalk from "chalk";
import { getUser } from "./input.ts";
import { getGithubUser } from "./github.ts";
import type { GitHubUser } from "./schema.ts";

const user: string = getUser();
const githubUser: GitHubUser = await getGithubUser(user);

console.log(chalk.green(`${githubUser.name} has ${githubUser.followers} followers`))