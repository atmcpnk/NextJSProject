import React from 'react'

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    { next: { revalidate: 10} });
  const users: User[] = await res.json()

  return (
    <>
    <h1>users</h1>
    <ul className='text-black'>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default UsersPage