
import { NextResponse } from "next/server";

export async function GET() {

    return NextResponse.json({hasAccess: true});

}


// app.get('/personal_information', function (req, res) {
//     if (!req.session.siwe) {
//         res.status(401).json({ message: 'You have to first sign_in' });
//         return;
//     }
//     console.log("User is authenticated!");
//     res.setHeader('Content-Type', 'text/plain');
//     res.send(`You are authenticated and your address is: ${req.session.siwe.address}`);
// });