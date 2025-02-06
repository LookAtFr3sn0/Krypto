export function GeneratePassword(length: number, charset: string) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(crypto.getRandomValues(new Uint16Array(1))[0] / 65536 * charset.length));
    }
    return password;
}