import { Document, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Document[]> {
  // Fetch data from your API here.
  const res = await fetch('http://localhost:3000/api/peraturan', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

export default async function TablePage() {
  const data = await getData();

  return (
    <div className="container py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
