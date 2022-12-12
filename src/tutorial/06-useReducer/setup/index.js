import React, { useState } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

const Index = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);
  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setModal(true);
      // setUsers((users) => {
      //   return [...users, { id: new Date().getTime().toString(), name }];
      // });
      setUsers([...users, { id: new Date().getTime().toString(), name }]);
      setName('');
    } else {
      setModal(true);
    }
  };

  return (
    <>
      <h1>Use Reducer</h1>
      {modal && <Modal />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="btn--white">
          Add user
        </button>
      </form>
      {users.map((user) => {
        const { id, name } = user;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
