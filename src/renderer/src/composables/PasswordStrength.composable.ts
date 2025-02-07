export function PasswordStrength(length: number, charset: string) {
    var strength = Math.log2(charset.length) * length;
    if (strength == -Infinity) {
        return 0;
    }
    return strength;
}