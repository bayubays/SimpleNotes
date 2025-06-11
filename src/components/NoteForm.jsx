import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(), // unique id
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    addNote(newNote);
    setTitle('');
    setBody('');
  };

  const handleTitleChange = (e) => {
    if (e.target.value.length <= 50) {
      setTitle(e.target.value);
    }
  };

  return (
    <div className="note-form-container">
      <form onSubmit={handleSubmit} className="note-input">
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Isi catatan"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Tambah Catatan</button>
        <p>{50 - title.length} karakter tersisa</p>
      </form>
    </div>
  );
}

export default NoteForm;