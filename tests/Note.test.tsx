import { expect } from 'chai';
import { render } from '@testing-library/react';
import Note from '../src/components/Note';
import React from 'react';

describe('Note', () => {
    test('renders note data', () => {
        const noteData = {
            title: 'Test Title',
            note: 5,
            comment: 'Test Comment',
            createdAt: '2022-01-01',
        };
        const { getByText } = render(<Note {...noteData} />);
        expect(getByText('Title: Test Title')).to.exist;
        expect(getByText('Comment: Test Comment')).to.exist;
        expect(getByText('Created at: 2022-01-01')).to.exist;
        expect(getByText('Note: 5')).to.exist;
    });


});
