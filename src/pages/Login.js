import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    userInput: '',
    userPassword: '',
    buttonDisabled: true,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      const liberaBotaoNumber = 5;
      const { userPassword, userInput } = this.state;
      const isDisable = userPassword.length > liberaBotaoNumber;
      const regex = /\S+@\S+\.\S+/.test(userInput);
      const condFinalBotao = isDisable && regex;
      this.setState({ buttonDisabled: !condFinalBotao });
    });
  };

  enviaDadoRedux = () => {
    const { history, email } = this.props;
    const { userInput } = this.state;
    email(userInput);
    history.push('/carteira');
  };

  render() {
    const { userInput, userPassword, buttonDisabled } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <forms>
          <input
            value={ userInput }
            onChange={ this.handleChange }
            data-testid="email-input"
            type="email"
            name="userInput"
          />
          <input
            value={ userPassword }
            onChange={ this.handleChange }
            data-testid="password-input"
            type="password"
            name="userPassword"
          />
          <button
            type="submit"
            onChange={ this.handleChange }
            disabled={ buttonDisabled }
            onClick={ this.enviaDadoRedux }
          >
            Entrar
          </button>
        </forms>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  email: (userInput) => dispatch(getUser(userInput)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
