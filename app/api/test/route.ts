import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json({ message: 'Hello World' })
    // return new Response('DEMO World');

    // const responseData = { message: 'Hello fdsfsd' };
    // const jsonResponse = JSON.stringify(responseData);

    // return new Response(jsonResponse, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });
}
