'use client';

import Link from 'next/link';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Document = {
  id: string
  nama: string
  jenisPeraturan: string
  kategori: string
  link: string
};

export const columns: ColumnDef<Document>[] = [
  {
    accessorKey: 'nama',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nama
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'jenisPeraturan',
    header: 'Jenis Peraturan',
  },
  {
    accessorKey: 'kategori',
    header: 'Kategori',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const dokumen = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Action</DropdownMenuLabel>
            <Link href={dokumen.link} className="ml-[8px]">
              Unduh
            </Link>

          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
