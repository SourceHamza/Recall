import { model, Schema } from "mongoose";

const ContentSchema = new Schema({
    title : {type: String } , 
    type : {type: String } , 
    link : {type : String}, 
    userId : {type: Schema.Types.ObjectId, ref: 'User' ,required : true}
})


const ContentModel = model("Content" , ContentSchema)

export default ContentModel