'use client';

import { FormSection } from '@/components/dashboard/form-section';
import { Hero } from '@/components/dashboard/hero';
import TablePage from '@/components/table/display-table';

export default function Page() {
  return (
    <div className="mt-24">
      <Hero />
      <TablePage />
      <FormSection />
    </div>
  );
}
