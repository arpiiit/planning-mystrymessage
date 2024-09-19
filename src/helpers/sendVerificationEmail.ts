import {resend} from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponce } from "@/types/ApiResponce";


export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponce>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Plannig message | Verification Code',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return {success: true, message:'Verification email send succesfully'}
    } catch (emailError) {
        console.error("Error sending verification email",emailError);
        return {success: false, message:'Failed to send verification email'}
    }
}