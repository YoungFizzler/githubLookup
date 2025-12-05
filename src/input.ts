import chalk from "chalk";

export function getUser(): string {
    const user = prompt(chalk.yellow("[+] Enter a GitHub Username:"))
    if (!user) {
        console.error(chalk.red("[+] You must enter a valid username..."))
        process.exit(1)
    }
    return user
}