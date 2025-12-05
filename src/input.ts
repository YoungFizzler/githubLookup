import chalk from "chalk";

export function getUser(): string {
    try {
        const user = prompt(chalk.yellow("[+] Enter a GitHub Username:"))
        if (!user) {
            throw new Error(chalk.red("[+] You must enter a valid username..."))
        }
        return user
    } catch (error) {
        if (error instanceof Error) {
            throw error
        }
        throw new Error(chalk.red(`[+] Failed to get username: ${String(error)}`))
    }
}