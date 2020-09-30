import React, { Component } from "react";
import NotefulContext from "../NotefulContext.js";
import PropTypes from 'prop-types';

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.bodyInput = React.createRef();
    this.folderIdInput = React.createRef();
  }

  static contextType = NotefulContext;

  handleSubmit(event) {
    event.preventDefault();
    this.props.resetFunction();
    this.context.post({
      note_name: this.nameInput.current.value,
      folder_id: this.folderIdInput.current.value,
      content: this.bodyInput.current.value
    }, "notes");
  }

  mapFolders = () => {
    const folders = this.context.folders.map((folder, idx) => {
      return (
        <option key={idx} value={folder.id}>{folder.folder_name}</option>
      )
    })
    return folders;
  }

  render() {
    if (this.props.active) {
      return (
        <section className='AddNote'>
          <form onSubmit={event => this.handleSubmit(event)} className='Noteful-form_ADD'>
            <h2 className='center'>Create a Note</h2>
            <label htmlFor='note-name-input'>
              Name
            </label>
            <input 
              name="note-name" 
              id="note-name" 
              type="text" 
              ref={this.nameInput} 
              placeholder={'Note Name'} 
              required>
            </input>

            <label htmlFor='note-content-input'>
              Content
            </label>
            <input 
              name="note-body" 
              id="note-body" 
              type="text" 
              ref={this.bodyInput} 
              placeholder={'Note Content'} 
              required>
            </input>

            <h2 className='center'>Choose a Folder</h2>
            <select 
              id="select-folder" 
              name="select-folder" 
              ref={this.folderIdInput}
            >
              {this.mapFolders()}
            </select>

            <button 
              type="submit" 
              className='Noteful-form buttons'
              id="add-note-submit" 
            >
              Add Note
            </button>

          </form>
        </section>
      );
    }
    return <></>
  };
}

AddNote.propTypes = {
  active: PropTypes.bool.isRequired,
  folderId: PropTypes.string.isRequired,
  resetFunction: PropTypes.func.isRequired
}