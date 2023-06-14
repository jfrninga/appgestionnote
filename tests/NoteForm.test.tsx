import { render, screen, fireEvent } from '@testing-library/react';
import { expect } from 'chai';
import NoteForm from '../src/components/NoteForm';
import React from 'react';

describe('NoteForm', () => {
    it('renders form fields correctly', () => {
        render(<NoteForm onAddNote={() => { }} />);

        expect(screen.getByPlaceholderText('Title')).to.exist;
        expect(screen.getByPlaceholderText('Note')).to.exist;
        expect(screen.getByPlaceholderText('Comment')).to.exist;
        expect(screen.getByText('Add Note')).to.exist;
    });

});

