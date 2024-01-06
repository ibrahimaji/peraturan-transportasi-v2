/* eslint-disable */

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
import { Checkbox } from '../ui/checkbox';
import { toast } from '../ui/use-toast';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Document = {
  id: string
  nama: string
  jenisPeraturan: string
  kategori: string
  link: string
};

const handleDelete = async (data: any) => {
  const res = await fetch(`/api/peraturan/${data}`, { method: 'DELETE', cache: 'no-store' });
  if (res.ok) {
    toast({
      description: 'Berhasil menghapus peraturan',
    });
    window.location.reload();
  } else {
    toast({
      description: 'Terjadi kegagalan',
    });
  }
};

export const columns: ColumnDef<Document>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected()
          || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={
          (value) => row.toggleSelected(!!value)
        }
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
    accessorKey: 'id',
    header: 'ID',

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
          <DropdownMenuContent className="flex flex-col gap-3 items-center justify-center">
            <DropdownMenuLabel>Action</DropdownMenuLabel>
            <Button>
              <Link href={dokumen.link} target="_blank" className="ml-[8px]">
                Kunjungi
              </Link>
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const columnsAdmin: ColumnDef<Document>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected()
          || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={
          (value) => row.toggleSelected(!!value)
        }
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
    accessorKey: 'id',
    header: 'ID',

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
          <DropdownMenuContent className="flex flex-col gap-3 items-center justify-center">
            <DropdownMenuLabel>Action</DropdownMenuLabel>
            <Button>
              <Link href={dokumen.link} className="ml-[8px]">
                Kunjungi
              </Link>
            </Button>
            <Button variant="destructive">
              <p className="ml-[8px]" onClick={() => handleDelete(dokumen.id)}>
                Hapus
              </p>
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
