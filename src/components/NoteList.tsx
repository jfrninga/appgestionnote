import { useState } from 'react';
import Note from './Note';

const NoteList = ({ notes }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.note.toString().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleSearch} className="input-search" />
      {filteredNotes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          note={note.note}
          comment={note.comment}
          createdAt={note.createdAt}
        />
      ))}
    </div>
  );
};

export default NoteList;
