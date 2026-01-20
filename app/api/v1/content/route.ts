import { connectDB } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import ContentModel from "@/app/models/Content"
import getUserId from "@/app/lib/auth";
import { Types } from "mongoose";

export async function GET(req: NextRequest, res: NextResponse) {
    try {

        const userId = Types.ObjectId.createFromHexString(getUserId(req)) 
        await connectDB()
        

        const content = await ContentModel.find({ userId }, {
            title: 1,
            type: 1,
            link: 1
        })

        return NextResponse.json({
            content
        })
    } catch (e) {
        console.log(e)
    }
}


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        await connectDB() 
        
        const userIdString  = getUserId(req)

        const data = await req.json()
        const { title, type, link } = data
        
        await ContentModel.create({
            title,
            type,
            link,
            userId : Types.ObjectId.createFromHexString(userIdString)
        })

        return NextResponse.json({ 
            message : "ADDED"
        })


    } catch (e) {
        console.log(e)
    }
}

