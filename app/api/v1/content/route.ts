import { connectDB } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import ContentModel from "@/app/models/Content"

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        await connectDB()

        const data = await req.json()

        // user id needed to verify the user 
        const username = data.username

        const content = await ContentModel.find({ username }, {
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

        const data = await req.json()
        const { title, type, link } = data

        await ContentModel.create({
            title,
            type,
            link,
            // userID 
        })

        return NextResponse.json({ 
            message : "ADDED"
        })


    } catch (e) {
        console.log(e)
    }
}

