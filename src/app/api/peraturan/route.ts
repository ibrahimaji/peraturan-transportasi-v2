import prisma from '@/db/utils/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const dokumen = await prisma.dokumen.findMany();
    return NextResponse.json(dokumen);
  } catch (error) {
    return NextResponse.json({ error: 'error' });
  }
}
