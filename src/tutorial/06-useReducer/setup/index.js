import React, { useState, useReducer } from 'react';
import Modal from './Modal';
// import { data } from '../../../data';

const reducer = (stateBeforeUpdate, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const newUsers = [...stateBeforeUpdate.users, action.payload];
      return { ...stateBeforeUpdate, users: newUsers, isModalOpen: true, modalContent: 'User Added.' };
    // the updated state has been returned here
    default:
      return stateBeforeUpdate;
  }
};

const initState = {
  users: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [updatedState, dispatchAction] = useReducer(reducer, initState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newUser = { id: new Date().getTime().toString(), name };
      dispatchAction({ type: 'ADD_USER', payload: newUser });
      setName('');
    }
  };

  return (
    <>
      <h1>Add User with Reducer</h1>
      {updatedState.isModalOpen && <Modal modalContent={updatedState.modalContent} />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="btn--white">
          Add user
        </button>
      </form>

      {updatedState.users.map((user) => {
        // console.log('New User', user);
        const { id, name } = user;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
