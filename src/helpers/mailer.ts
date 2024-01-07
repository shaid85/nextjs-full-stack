import User from '@/models/user.model'
import nodemailer from 'nodemailer'
import bcryptjs from 'bcryptjs';

export const sendEmail = async ({email, emailType, userId}:any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId, {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000})
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
        }

        var transport = nodemailer.createTransport({
            // host: "smtp.gmail.com",
            // port: 587,
            // secure: false,
            // auth: {
            //   user: "fxpipsmaker6@gmail.com",
            //   pass: "rkje cavy tybc ockb"
            // }
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "a5b5638b1ab4b4",
              pass: "41a8e48226af30"
            }
          });

          const mailOptions = {
            from: 'fxpipsmaker6@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/${emailType === "VERIFY" ? 'verifyemail' : 'resetpassword'}?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/${emailType === "VERIFY" ? 'verifyemail' : 'resetpassword'}?token=${hashedToken}
            </p>`
          }

          const mailresponse = await transport.sendMail(mailOptions)

          return mailresponse;

    } catch (error:any) {
        throw new Error(error.message)
    }
}