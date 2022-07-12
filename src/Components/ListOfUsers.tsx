import React from 'react';
import { DELETE_USER } from '../GraphQL/Mutations';
import { GET_ALL_USERS } from '../GraphQL/Queries';
import { useMutation, useQuery } from '@apollo/client';

function ListOfUsers() {
  const { data, loading } = useQuery(GET_ALL_USERS);

  const [deleteUser, { error }] = useMutation(DELETE_USER);

  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div>
              {user.name} / {user.username}
              <button
                onClick={() => {
                  deleteUser({ variables: { id: user.id } });
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default ListOfUsers;
