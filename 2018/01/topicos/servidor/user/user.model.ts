import mongoose from 'mongoose'

export interface User extends mongoose.Document{
    nome:string,
    email:string,
    password:string,
    telefone:string
}

const userSchema = new mongoose.Schema({
    nome:{
        type:String
    },
    email:{
        type : String,
        unique: true
    },
    password:{
        type:String,
        select: false
    },
    telefone:{
        type:String
    }
})


export const User = mongoose.model<User>('User',userSchema)
