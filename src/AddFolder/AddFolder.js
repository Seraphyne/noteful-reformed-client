import React, { Component } from "react";
import NotefulContext from "../NotefulContext.js";
import PropTypes from 'prop-types';

export default class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }

  static contextType = NotefulContext;

  handleSubmit(event) {
    event.preventDefault();
    this.props.resetFunction();
    this.context.post({ folder_name: this.nameInput.current.value }, "folders");
  }

  render() {
    if (this.props.active) {
      return (
        <section className='AddFolder'>
          <form onSubmit={event => this.handleSubmit(event)} className='Noteful-form'>
            <h2 className='center'>Create a Folder</h2>
            <label 
            htmlFor="add-folder" 
            >Add Folder
            </label>

            <input 
            name="add-folder" 
            id="add-folder" 
            type="text" 
            ref={this.nameInput} 
            placeholder={'Folder Name'} 
            required />

            <button 
            type="submit" 
            value="Submit" 
            id="add-folder-submit" 
            className='buttons'>
              Submit
            </button>
          </form>
        </section>
      );
    }
    return <></>
  };
}

AddFolder.propTypes = {
  active: PropTypes.bool.isRequired,
  resetFunction: PropTypes.func.isRequired
};
