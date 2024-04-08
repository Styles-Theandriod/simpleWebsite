import axios from 'axios'
import { useEffect, useState } from 'react';

function RequestExample() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3000/database/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }, []);
  return (
    <div>
        <h1>User List</h1>
        {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}, Email: {user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default RequestExample