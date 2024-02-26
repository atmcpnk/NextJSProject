import { NextRequest, NextResponse } from "next/server";

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