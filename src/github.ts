import { GitHubUserSchema, type GitHubUser } from "./schema";
import chalk from "chalk";

export async function getGithubUser(user: string): Promise<GitHubUser> {
    try {
        const response = await fetch(`https://api.github.com/users/${user}`)
        
        if (!response.ok) { // check response status first
            throw new Error(chalk.red(`[+] Failed to fetch GitHub user: ${response.statusText}`))
        }
        
        const data = await response.json()
        return GitHubUserSchema.parse(data)
    } catch (error) { // Catch json parsing and network errors :D
        if (error instanceof Error) {
            throw error
        }
        throw new Error(chalk.red(`[+] Failed to fetch GitHub user: ${String(error)}`))
    }
}