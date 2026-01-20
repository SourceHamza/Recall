import bcrypt from "bcrypt"

const saltRounds = 10

export async function hashPassword(plaintextpassword: string) {
    try {

        const hashedPassword = await bcrypt.hash(plaintextpassword, saltRounds)

        return hashedPassword
    }
    catch (e) {
        console.log("error Hashing password ", e)
        throw new Error('Failed to hash password');
    }
}