import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubmitBlock from '../component';

let mockUserRequestState = {};

jest.mock('react-redux', () => ({
  useSelector: (cb) => cb(mockUserRequestState),
}));

const props = {
  isSubmitting: false,
  formClass: '',
  submitSelector: (state) => state,
  buttonText: 'Test',
  buttonAddedStyles: {},
};

describe('SubmitBlock', () => {
  it('renders a button with given text on idle state', () => {
    mockUserRequestState = {
      loading: false,
      error: false,
    };

    render(<SubmitBlock {...props} />);

    expect(screen.getByRole('button')).toHaveTextContent('Test');
  });

  it('renders a loader while being in submit state', () => {
    mockUserRequestState = {
      loading: true,
      error: false,
    };

    render(<SubmitBlock {...props} isSubmitting />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders a text under the button according to submit result', () => {
    mockUserRequestState = {
      loading: false,
      error: true,
    };

    const { unmount } = render(<SubmitBlock {...props} />);

    expect(screen.getByRole('heading')).toHaveStyle('color: red');

    unmount()
    mockUserRequestState = {
      loading: false,
      error: false,
    };

    render(<SubmitBlock {...props} />);

    expect(screen.getByRole('heading')).toHaveStyle('color: olive');
  });
});
