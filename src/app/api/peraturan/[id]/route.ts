import prisma from '@/db/utils/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }) {
  const { id } = params;
  try {
    const dokumen = await prisma.dokumen.findFirst({
      where: {
        id
      }
    });
    return NextResponse.json(dokumen);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
export async function DELETE(req: NextRequest, { params }) {
  const { id } = params;
  try {
    const findDokumen = await prisma.dokumen.findFirst({
      where: {
        id,
      }
    });
    if (!findDokumen) {
      return NextResponse.json(
        {
          message: "Dokumen tidak ditemukan",
        },
        {
          status: 404
        }
      );
    }
    const deleteDokumen = await prisma.dokumen.delete({ where: { id } });
    return NextResponse.json(
      { data: deleteDokumen, message: "Sukses menghapus dokumen" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error)
  }
}
