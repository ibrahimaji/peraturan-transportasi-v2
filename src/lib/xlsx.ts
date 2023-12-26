import xlsx, { IJsonSheet } from 'json-as-xlsx';
import { Document } from '@/components/table/columns';

async function getData(): Promise<Document[]> {
  // Fetch data from your API here.
  const res = await fetch('http://localhost:3000/api/peraturan', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}
export async function downloadToExcel() {
  const data = await getData();
  const columns: IJsonSheet[] = [
    {
      sheet: 'Dokumen',
      columns: [
        { label: 'Nama', value: 'nama' },
        { label: 'Jenis Peraturan', value: 'jenisPeraturan' },
        { label: 'Kategori', value: 'kategori' },
      ],
      content: data,
    },
  ];
  const settings = {
    fileName: 'Peraturan Transportasi',
  };
  xlsx(columns, settings);
}
