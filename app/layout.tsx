import './globals.css';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import { checkUserRole } from '@/lib/auth';

export default function Layout({
  children,
  authenticated,
  unauthenticated,
  analytics,
}: {
  children: React.ReactNode;
  authenticated: React.ReactNode;
  unauthenticated: React.ReactNode;
  analytics: React.ReactNode;
}) {
  const role = checkUserRole()

  return (
    <html lang="ja">
      <body>
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">ダッシュボード</h1>
      </header>
      <main className="flex flex-1 flex-col md:flex-row p-4 gap-4">
        <section className="flex-grow md:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">メインコンテンツ</h2>
          <Suspense fallback={<Loader />}>
            {children}
          </Suspense>
        </section>
        <aside className="flex flex-col md:w-1/4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">ユーザー情報</h2>
            <Suspense fallback={<Loader />}>
              {
                role === 'user' ? authenticated: unauthenticated}
            </Suspense>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">アナリティクス</h2>
            <Suspense fallback={<Loader />}>
              {analytics}
            </Suspense>
          </div>
        </aside>
      </main>
    </div>
      </body>
    </html>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
    </div>
  );
}

