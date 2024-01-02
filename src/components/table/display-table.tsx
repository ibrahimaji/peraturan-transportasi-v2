/* eslint-disable */
import { API_URL } from '@/config/apiUrl';
import { getSession } from '@auth0/nextjs-auth0';
import { Document, columns, columnsAdmin } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Document[]> {
  // Fetch data from your API here.
  const res = await fetch(`${API_URL}/api/peraturan`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

export default async function TablePage() {
  const session = await getSession();
  const data = await getData();

  return (
    <div className="container py-10">
      {session ? (
        <DataTable columns={columnsAdmin} data={data} />
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
}
