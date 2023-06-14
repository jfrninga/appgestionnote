import { useState, useEffect } from 'react';
import NoteList from '../src/components/NoteList';
import NoteForm from '../src/components/NoteForm';
import NoteEditor from '../src/components/NoteEditor';
import './App.css';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: 1,
			title: 'Test Note',
			note: 5,
			comment: 'Test Comment',
			createdAt: new Date().toLocaleString(),
		},
	]);
	const [selectedNote, setSelectedNote] = useState(null);

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem('notes'));
		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [notes]);

	const addNote = (newNote) => {
		setNotes([...notes, newNote]);
	};

	const updateNote = (updatedNote) => {
		const updatedNotes = notes.map((note) =>
			note.id === updatedNote.id ? updatedNote : note
		);
		setNotes(updatedNotes);
		setSelectedNote(null);
	};

	const deleteNote = (noteId) => {
		const updatedNotes = notes.filter((note) => note.id !== noteId);
		setNotes(updatedNotes);
		setSelectedNote(null);
	};

	const handleNoteClick = (note) => {
		setSelectedNote(note);
	};

	return (
		<div>
			<h1>Note Manager</h1>
			{selectedNote ? (
				<NoteEditor
					note={selectedNote}
					onUpdateNote={updateNote}
					onDeleteNote={deleteNote}
				/>
			) : (
				<div>
					<NoteForm onAddNote={addNote} />
					<NoteList notes={notes} onNoteClick={handleNoteClick} />
				</div>
			)}
		</div>
	);
};

export default App;
