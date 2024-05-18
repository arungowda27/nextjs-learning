import React from 'react'

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json()
  return (
    <div>
      <ul>
        {users.map((el: User) => <li key={el.id}>{el.name}</li>)}
      </ul>
    </div>
  )
}

export default UsersPage