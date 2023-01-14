import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './tests/helpers/renderWith';
import App from './App';

describe('testa se está funcionando', () => {
  test('Verifica se a tela home é renderizada corretamente', () => {
    renderWithRouterAndRedux(<App />);

    const getFirstTitleElement = screen.getByRole('heading', { level: 1, name: /hello/i });
    const getLoginElement = screen.getByRole('heading', { level: 1, name: /login/i });
    const getInputUser = screen.getByTestId('email-input');
    const getInputPassword = screen.getByTestId('password-input');

    expect(getFirstTitleElement).toBeInTheDocument();
    expect(getLoginElement).toBeInTheDocument();
    expect(getInputUser).toBeInTheDocument();
    expect(getInputPassword).toBeInTheDocument();
  });

  test('Verifica os inputs da tela Home', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { pathname } = history.location;

    const getInputUser = screen.getByTestId('email-input');
    const getInputPassword = screen.getByTestId('password-input');
    const getLoginButton = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(getInputUser, 'user@user.com');
    expect(getInputUser.value).toBe('user@user.com');

    userEvent.type(getInputPassword, '123456');
    expect(getInputPassword.value).toBe('123456');

    expect(getLoginButton).toBeInTheDocument();

    userEvent.click(getLoginButton);

    history.push('/carteira');

    expect(pathname).toBe('/carteira');
  });
});
