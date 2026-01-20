import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export default function getUserId(req : NextRequest) {

    const authHeader = req.headers.get('authorization')

    if (!authHeader || !authHeader.startsWith('Bearer ')) { 
        throw new Error('No token provided') 
        
    }
    const secret = process.env.JWT_SECRET!

    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token,secret ) as {userId : string   }
    return decoded.userId
    
    

}