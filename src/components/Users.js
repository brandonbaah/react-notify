import React from 'react';
import { Link } from "react-router-dom";

const Users = ({ users }) => {
  return (
    <div>
      { users.map((user) => (
        <div key={user.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
            <p className="card-text">{user.company}</p>
            <button>
              <Link to={{pathname: `/user/${user.id}`, state: { user: user.id }}}>View User</Link>
            </button>
          </div>
        </div>
      )) } 
    </div>
  )
};

export default Users;