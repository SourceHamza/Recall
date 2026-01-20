import { NextRequest, NextResponse } from "next/server";
import UserModel from "@/app/models/User"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { connectDB } from "@/app/lib/mongodb";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        await connectDB()

        const data = await req.json()

        const { username, password } = data

        const user = await UserModel.findOne({
            username,
        })

        if(!user || !user.username || !user.password) { 
            return NextResponse.json( { 
                message : "Invalid creds , user object does not exist"
            })
        } 

        const match = await bcrypt.compare(password, user?.password)

        const secret = process.env.JWT_SECRET
        if (!secret) { 
            throw new Error("JWT_SECRET is not defined")
        }
        if (match) {

            const token = await jwt.sign({ 
                userId: user?._id.toString(), username: user?.username
            } , secret)

            return NextResponse.json({
                message: "User Signed in", 
                token : token 
            })
            
            
        }
        
        return NextResponse.json({ 
            message : "User password Incorrect."
        })

    } catch (e) {
        return NextResponse.json({
            "error": e
        })
    }
}


