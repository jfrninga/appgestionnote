import { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newNote = {
            id: Date.now(),
            title,
            note: parseFloat(note),
            comment,
            createdAt: new Date().toLocaleString(),
        };

        onAddNote(newNote);
        setTitle('');
        setNote('');
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit} className='container-form'>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <textarea
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NoteForm;