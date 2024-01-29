import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('@/components/Cart'), { ssr: false });
export default function Page() {
  return (
    <>
      <section className="container">
        <div className="page-container">
          <NoSSR />
        </div>
      </section>
    </>
  );
}
