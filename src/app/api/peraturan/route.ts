import prisma from '@/db/utils/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const dokumen = await prisma.dokumen.findMany();
    return NextResponse.json(dokumen);
  } catch (error) {
    return NextResponse.json({ error: 'error' });
  }
}

export async function POST(req: NextRequest) {
  const { nama, jenisPeraturan, kategori, link } = await req.json();
  try {
    const dokumen = await prisma.dokumen.create({
      data: {
        nama,
        jenisPeraturan,
        kategori,
        link,
      }
    });
    return NextResponse.json(dokumen)
  } catch (error) {
    return NextResponse.json(error);
  }
}
