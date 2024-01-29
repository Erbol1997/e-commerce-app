import { CategorySkeleton, Sidebar } from '@/components';
import { fetchCategories } from '@/lib/data';
import { Suspense } from 'react';

export default async function layout({ children }: { children: React.ReactNode }) {
  const categories = await fetchCategories();
  return (
    <section className="container">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1 border rounded-md border-border-color h-fit">
            <Suspense fallback={<CategorySkeleton />}>
              <Sidebar categories={categories} />
            </Suspense>
          </div>
          <div className="md:col-span-3">{children}</div>
        </div>
      </div>
    </section>
  );
}
