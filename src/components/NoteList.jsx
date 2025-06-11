import React from 'react';
import { showFormattedDate } from '../utils';

function NoteList({ notes, deleteNote, archiveNote, isArchived }) {
  return (
    <div className="notes-list">
      {notes.map(note => (
        <div key={note.id} className="note-item">
          <div className="note-item__content">
            <h2 className="note-item__title">{note.title}</h2>
            <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
            <p className="note-item__body">{note.body}</p>
          </div>
          <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => deleteNote(note.id)}>Hapus</button>
            <button className="note-item__archive-button" onClick={() => archiveNote(note.id)}>
              {isArchived ? 'Kembalikan' : 'Arsipkan'}
            </button>
          </div>
        </div>
      ))}
      {notes.length === 0 && <p className="notes-list__empty-message">Tidak ada catatan</p>}
    </div>
  );
}

export default NoteList;