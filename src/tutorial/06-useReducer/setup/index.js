import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

const reducer = (state, action) => {
  if (action.type === 'TESTING') {
    return { ...state, users: data, isModalOpen: true, modalContent: 'Modal is Open!' };
  }
  return state;
};

const defaultState = {
  id: new Date().getTime().toString(),
  users: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: 'TESTING' });
    } else {
    }
  };

  return (
    <>
      <h1>Use Reducer</h1>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="btn--white">
          Add user
        </button>
      </form>
      {state.users.map((user) => {
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
