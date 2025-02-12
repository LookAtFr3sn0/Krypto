# Krypton

My second attempt at a secure and random password generator, this time written in TypeScript.
Krypton is a password generator build using Electron. It uses Node.js's crypto module to generate cryptographically secure random numbers to generate a password. Though the library is supposedly cryptographically secure, a quick cryptanalysis showed there might be slight bias in the generated numbers, at least in my implementation. Further analysis is needed.
