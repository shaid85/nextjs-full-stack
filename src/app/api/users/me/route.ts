import { connect } from '@/dbConfig/dbConfig';
import { getDataFromToken } from '@/helpers/getDataFromToken';
import User from '@/models/user.model';
import { NextRequest, NextResponse } from 'next/server';

connect()

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request)
        const user = await User.findOne({_id:userId}).select("-password")
        return NextResponse.json({
            message: "User found",
            data: user,
            status: true,
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message},
            {status: 400})
    }
}