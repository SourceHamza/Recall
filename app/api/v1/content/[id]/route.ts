import { connectDB } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import ContentModel from "@/app/models/Content"
import { Types } from "mongoose";
import getUserId from "@/app/lib/auth";


export async function GET(req:NextRequest,{params} : { 
    params : { 
        id : string
    }
} ) {
    try { 
        await connectDB()
        const contentId = await params.id
        const result = await ContentModel.findById({ 
            _id : Types.ObjectId.createFromHexString(contentId)
        })
    
        NextResponse.json({ 
            content : result
        })

    }catch(e) { 
        NextResponse.json({
            message : e

        })
    }
    

}



export async function DELETE(req: NextRequest, { params }: {
    params : { 
        id : string 
    }
}) {
    try {
        const userId = Types.ObjectId.createFromHexString(getUserId(req))
        await connectDB()
        const contentId = await params.id
        const result = await ContentModel.deleteOne({
            _id: Types.ObjectId.createFromHexString(contentId),
            userId
        })

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { error: "Content not found or unauthorized" },
                { status: 404 }
            )
        }

        return NextResponse.json({
            message: "Deleted Content"
        })

    } catch (e) {
        console.log(e)
    }
} 