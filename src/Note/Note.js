import React from 'react';
import { Link } from 'react-router-dom'
import NotefulContext from '../NotefulContext'
import format from 'date-fns/format'
import PropTypes from 'prop-types'

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  static defaultProps = {
    onDeleteNote: () => { },

  }
  static contextType = NotefulContext;

  handleClickDelete = e => {
    e.preventDefault();
    const noteId = this.props.id;

    this.props.history.push('/');
    this.context.deleteNote(noteId);
  }

  render() {
    const modified = this.props.dateMod
    return (
      <div className='Note'>
      <li
        onClick={() => console.log(this.props.name)}
        className="Note__title">
        <Link to={`/note/${this.props.id}`}>
          <div>
            <h3>{this.props.name}</h3>
          </div>
        </Link>
        <div className='Note__dates'>
        <div className='Note__dates-modified'>
          <p>Last Modified: {format(new Date(modified), 'MM/dd/yyyy')}</p>
        </div>
        </div>
        <div>
          <button
            type="button"
            onClick={this.handleClickDelete}
            className="Note__delete"
          >
            Delete
          </button>
        </div>
      </li>
      </div>
    )
  }
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dateMod: PropTypes.string.isRequired
}