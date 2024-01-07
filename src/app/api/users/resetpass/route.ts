import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';


connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {token,password} = reqBody
        console.log(reqBody);

        const user = await User.findOne({forgotPasswordToken: token, forgotPasswordTokenExpiry: {$gt: Date.now()}})

        if (!user) {
            return NextResponse.json({error:"Invalid token"},{status: 400})
        }

       //hash password
       const salt = await bcryptjs.genSalt(10)
       const hashPassword = await bcryptjs.hash(password, salt)
        // user.isVerified = true;
        user.password = hashPassword
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({
            message: "Password reset successfully",
            success: true,
        })
        
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}