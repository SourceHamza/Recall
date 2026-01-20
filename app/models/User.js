import { model, Schema , models } from "mongoose";

const UserSchema = new Schema({
    username : {type : String , unique : true , require: true  }, 
    password : String
})


const UserModel = models.User || model("User" , UserSchema)

export default UserModel