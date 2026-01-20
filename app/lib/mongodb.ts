import mongoose from "mongoose";

declare global {
    var mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<any> | null;
    };
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

const mongoURI = process.env.MONGO_URI


export async function connectDB() {
    try {

        if (cached.conn) {
            return cached.conn
        }
        
        if (cached.promise) {
            cached.conn = await cached.promise
            return cached.conn
        }


        if (!mongoURI) {
            throw new Error(
                'MONGODB_URI not defined '
            )
        }

        cached.promise = mongoose.connect(mongoURI)
        cached.conn = await cached.promise
        console.log('MongoDB Connected successfully');
        return cached.conn
    }
    catch (error) {
        console.log(error);
    }

} 