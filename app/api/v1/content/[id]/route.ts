import { connectDB } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import ContentModel from "@/app/models/Content"




export async function GET(req:NextRequest,{params} : { 
    params : { 
        id : string
    }
} ) {
    try { 
        await connectDB()
        const contentId = await params.id
        const result = await ContentModel.findById({ 
            _id : contentId
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
        await connectDB()
        const contentId = await params.id
        const result = await ContentModel.deleteOne({
            _id: contentId,
            userId: "someuserid"
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