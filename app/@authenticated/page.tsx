'use client';

import { useEffect, useState } from 'react';

export default function UserPage() {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      setUser(data);
      console.log(data)
    }
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}
