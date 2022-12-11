import React, { useState } from 'react';

const ControlledInputs = () => {
  const [person, setPerson] = useState({ name: '', age: '', email: '' });
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.age && person.email) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setList([...list, newPerson]);
      setPerson({ name: '', age: '', email: '' });
    }
  };

  return (
    <article>
      <h1>React Multiple Inputs</h1>
      <form className="form">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={person.name} onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" value={person.age} onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={person.email} onChange={handleInputChange} />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {list.map((listitem) => {
        const { id, name, email, age } = listitem;
        return (
          <div className="item" key={id}>
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        );
      })}
    </article>
  );
};

export default ControlledInputs;
