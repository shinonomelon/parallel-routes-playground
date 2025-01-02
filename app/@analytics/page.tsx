'use client';

import { useEffect, useState } from 'react';

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAnalytics() {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
      const data = await response.json();
      setAnalytics(data);
    }
    fetchAnalytics();
  }, []);

  return (
    <div>
      <p className="mb-4">最新のアナリティクスデータです：</p>
      <ul className="list-disc pl-4 space-y-2">
        {analytics.map((item) => (
          <li key={item.id}>
            <strong>{item.name}:</strong> {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
