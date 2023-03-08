import React from 'React';
import { Provider } from 'react-redux';
// import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { SectionType } from '../types';
import Section from '../client/components/Section';

describe('Unit testing React components', () => {
  describe('Section', () => {
    let section;
    const props: SectionType = {
      databaseId: 'test',
      header: 'cool header',
      bullets: 'a nice bullet point'
    }

    beforeAll(() => {
      section = render(<Section {...props} />);
    })
  })
})