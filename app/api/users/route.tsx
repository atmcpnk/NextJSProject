import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

// GET - getting data 
// POST - creating data
// PUT - updating data

export function GET(request: NextRequest){
    return NextResponse.json([
        {id: 1, name: 'john'},
        {id: 2, name: 'doe'},
        {id: 3, name: 'jane'},
        {id: 4, name: 'smith'},
    ]);
}

export async function POST( request: NextRequest ) {
   const body = await request.json();
   // Validate
   // if invalid, return 400 error
   // else, return the data
   const validation = schema.safeParse(body);
   if(!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400});
   return NextResponse.json({ id: 1, name: body.name }, { status: 201});
}