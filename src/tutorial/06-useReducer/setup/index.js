import React, { useState, useReducer } from 'react';
import { reducer } from './reducer';
import Modal from './Modal';

const initState = {
  users: [],
  modalOpen: false,
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
    } else {
      dispatchAction({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatchAction({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      <h1>Add User with Reducer</h1>
      {updatedState.modalOpen && <Modal modalContent={updatedState.modalContent} closeModal={closeModal} />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="btn--white">
          Add user
        </button>
      </form>
      {updatedState.users.map((user) => {
        const { id, name } = user;
        return (
          <div className="item" key={id}>
            <h4>User Name: {name}</h4>
            <button onClick={() => dispatchAction({ type: 'REMOVE_USER', payload: id })}>Remove user</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
