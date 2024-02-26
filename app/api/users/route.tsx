import { NextRequest, NextResponse } from 'next/server';

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