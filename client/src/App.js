import React, { Component } from 'react';

import axios from 'axios';

import Form from './components/Form';

class App extends Component {
  state = {
    notes: [],
    title: '',
    details: ''
  }

  componentDidMount = () => {
    this.getNotes();
  }  

  getNotes() {
    axios.get('/api/notes').then(res => {
      this.setState({
        notes: [...res.data]
      });
    });
  }
  
  handleChange = event => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  createNote = event => {
    event.preventDefault();

    // title and details
    axios.post('/api/notes', {
      title: this.state.title,
      details: this.state.details
    }).then(res => {
      console.log(res.data);
      this.setState({title: '', details: ''});
      this.getNotes();
    });
  }

  render() {
    return (
      <div>
        <h1>Note App</h1>

        <Form 
          title={this.state.title}
          details={this.state.details} 
          createNote={this.createNote}
          handleChange={this.handleChange} />

        {this.state.notes.map(note => 
          <div key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.details}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
