import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container">
      <div className="page-container">
        <main className="flex h-full flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-semibold">404 страница не найдена</h2>
          <p>Не удалось найти страницу</p>
          <Link href="/" className="blue__btn block">
            На главную
          </Link>
        </main>
      </div>
    </section>
  );
}
