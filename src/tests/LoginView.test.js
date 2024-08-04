import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { test, expect } from '@jest/globals';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { LoginView } from 'src/sections/login';

import { store } from '../store';

// Eliminar las importaciones no utilizadas
// import { useDispatch } from 'react-redux';
// import { startEmailPassword } from 'src/store/auth/thunks';

const renderWithProvider = (ui) => render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );

test('Should render LoginView Component with the correct elements', () => {
  renderWithProvider(<LoginView />);

  expect(screen.getByText(/Sign in to Minimal/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  expect(screen.getByText(/Forgot password?/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
});

test('should render the initial fields as empty', () => {
  renderWithProvider(<LoginView />);

  expect(screen.getByLabelText(/Email address/i).value).toBe('');
  expect(screen.getByLabelText(/Password/i).value).toBe('');
});
