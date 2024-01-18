import React from 'react'

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',{ cache: 'no-store'});
  const users: User[] = await res.json()

  return (
    <>
    <h1 className='text-black'>Users</h1>
    <p className='text-black'>{new Date().toLocaleTimeString()}</p>
    <ul className='text-black'>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default UsersPage