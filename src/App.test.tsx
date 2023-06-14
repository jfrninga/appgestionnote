import { expect } from 'chai';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('renders NoteForm and NoteList when no note is selected', () => {
        const { getByText, getByPlaceholderText } = render(<App />);
        expect(getByText('Note Manager')).to.exist;
        expect(getByPlaceholderText('Title')).to.exist;
        expect(getByPlaceholderText('Note')).to.exist;
        expect(getByPlaceholderText('Comment')).to.exist;
        expect(getByText('Add Note')).to.exist;
    });

});
