export function PasswordStrength(length: number, charset: string) {
    return Math.log2(charset.length ** length)
}