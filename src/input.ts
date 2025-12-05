import chalk from "chalk";

export function getUser(): string {
    const user = prompt("Enter a GitHub Username:")
    if (!user) {
        console.error("You must enter a valid username...")
        process.exit(1)
    }
    return user
}