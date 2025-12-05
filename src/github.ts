import { GitHubUserSchema, type GitHubUser } from "./schema";
import chalk from "chalk";

export async function getGithubUser(user: string): Promise<GitHubUser> {
    const response = await fetch(`https://api.github.com/users/${user}`)
    const data = await response.json()

    if (!response.ok) {
        throw new Error(chalk.red(`Failed to fetch GitHub user: ${response.statusText}`))
    }

    return GitHubUserSchema.parse(data)
}