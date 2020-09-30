import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Folder(props) {
  return (
    <div className='NoteListNav'>
      <ul className='NoteListNav__list'>
        <li className='NoteListNav__folder-link'>
          <Link to={`/folder/${props.id}`}>
            <div className='NoteListNav__folder-link'>
              <h3 className='link'>{props.name}</h3>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

Folder.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}