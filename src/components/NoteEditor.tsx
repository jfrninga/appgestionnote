import { useState } from 'react';

const NoteEditor = ({ note, onUpdateNote, onDeleteNote }) => {
    const [title, setTitle] = useState(note.title);
    const [noteValue, setNoteValue] = useState(note.note);
    const [comment, setComment] = useState(note.comment);

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedNote = {
            ...note,
            title,
            note: parseFloat(noteValue),
            comment,
        };

        onUpdateNote(updatedNote);
    };

    const handleDelete = () => {
        onDeleteNote(note.id);
    };

    return (
        <div className="note-editor">
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    value={noteValue}
                    onChange={(e) => setNoteValue(e.target.value)}
                />
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button type="submit">Update</button>
            </form>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default NoteEditor;
