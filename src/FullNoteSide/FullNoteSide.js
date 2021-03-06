import React from 'react';
import NotefulContext from '../NotefulContext'

export default class FolderList extends React.Component {

  static contextType = NotefulContext;

  render() {
    const { folders, notes } = this.context;
    // console.log(this.context);
    // console.log(this.props.match.params.noteId);
    const noteObj = notes.find((note) => parseInt(note.id) === parseInt(this.props.match.params.noteId))
    // console.log(noteObj);
    const folderId = noteObj.folder_id;

    const folderName = folders.find((folder) => parseInt(folder.id) === parseInt(folderId))

    return (
      <div className='NotePageNav'>
        <button
          onClick={() => this.props.history.goBack()}
          className='NotePageNav__back-button'
        > Back
      </button>
        <h2
        className='NotePageNav__folder-name'
        >{folderName.folder_name}</h2>
      </div >
    )
  }
}

FolderList.defaultProps ={
  tag: 'a',
}
