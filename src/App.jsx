import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { getInitialData } from './utils';

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes((prevNotes) => 
      prevNotes.map(note => 
        note.id === id ? { ...note, archived: true } : note
      )
    );
  };

  const unarchiveNote = (id) => {
    setNotes((prevNotes) => 
      prevNotes.map(note => 
        note.id === id ? { ...note, archived: false } : note
      )
    );
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) && !note.archived
  );

  const archivedNotes = notes.filter(note => note.archived);

  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>NOTES BAYS</h1>
        <input
          type="text"
          className="note-search"
          placeholder="Cari catatan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      
      <NoteForm addNote={addNote} />
      
      <h2>Catatan Aktif</h2>
      <NoteList 
        notes={filteredNotes} 
        deleteNote={deleteNote} 
        archiveNote={archiveNote} 
      />
      {filteredNotes.length === 0 && <p>Tidak ada catatan aktif</p>}
      
      <h2>Catatan Arsip</h2>
      <NoteList 
        notes={archivedNotes} 
        deleteNote={deleteNote} 
        archiveNote={unarchiveNote} 
        isArchived={true} 
      />
      {archivedNotes.length === 0 && <p>Tidak ada catatan arsip</p>}
    </div>
  );
}

export default App;