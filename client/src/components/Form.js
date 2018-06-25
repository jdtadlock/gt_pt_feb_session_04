import React from 'react';

const Form = props => (
  <form>
    <input type="text" name="title" value={props.title} onChange={props.handleChange} />
    <input type="text" name="details" value={props.details} onChange={props.handleChange} />
    <button onClick={props.createNote}>Submit</button>
  </form>
);

export default Form;