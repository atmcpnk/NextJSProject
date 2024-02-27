import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
    request: NextRequest, 
    { params }: { params: { id: number} }) {
        // Fetch data from a db
        // If note found, return 404 error,
        // else return the data
        if (params.id > 10)
            return NextResponse.json({ error: 'user not found'}, { status: 404})
        return NextResponse.json({ id: 1, name: 'john'});
}

export async function PUT(
    request: NextRequest, 
    { params }: { params: { id: number} }){
    // Validate the request body
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
    // if invalid, return 400 error
        return NextResponse.json(validation.error.errors, { status: 400});
    // else, Fetch the user with the given id from the db
    if (params.id > 10)
    // if doesn't exist, return 404 error
        return NextResponse.json({ error: 'User not found'}, { status: 404});
    // update the user with the given id
    // Return the updated user
    return NextResponse.json({ id: 1, name: body.name});
}

export function DELETE(request: NextRequest, 
    { params }: { params: { id: number} }){
        // Fetch user from db 
        // if not found, return 404 error
        if (params.id > 10)
            return NextResponse.json({error: 'User not found'}, { status: 404});
        return NextResponse.json({});
        // delete the user
        // return 200 status
    }