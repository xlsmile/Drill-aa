import React, { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const newitem = { id: new Date().getTime().toString(), name, email };
      setList((list) => {
        return [...list, newitem];
      });
      setName('');
      setEmail('');
    }
  };

  return (
    <article>
      <h1>React Form Controls</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button>Submit</button>
      </form>
      {list.map((listitem) => {
        const { id, name, email } = listitem;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        );
      })}
    </article>
  );
};

export default ControlledInputs;
