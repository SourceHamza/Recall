import { NextRequest, NextResponse } from "next/server";
import UserModel from "@/app/models/User"
import { hashPassword } from "@/app/lib/passwordhash";
import { connectDB } from "@/app/lib/mongodb";


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        await connectDB()
        const data = await req.json()

        const { username, password } = data


        const hashedPassword = await hashPassword(password)

        await UserModel.create({
            username,
            password: hashedPassword
        })

        return NextResponse.json({
            message: "User Created Successfully "
        })

    } catch (e) {
        return NextResponse.json({
            "error" : e
        })
    }

}