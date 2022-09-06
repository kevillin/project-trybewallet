import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPICoins, requestExpenses } from '../redux/actions/index';
import fetchCoins from '../services/fetchAPI';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPICoins());
  }

  handleChange = ({ target: { name, value } }) => {
    const { expenses } = this.props;
    this.setState({
      [name]: value,
      id: expenses.length,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    this.setState({}, async () => {
      const API = await fetchCoins();
      this.setState({ exchangeRates: API }, () => {
        dispatch(requestExpenses(this.state));
      });
      this.setState({
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      });
    });
  };

  render() {
    const { currencies } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    return (
      <div>
        <h1>WalletForm</h1>
        <form onSubmit={ this.submitForm }>
          <label htmlFor="value-input">
            Valor das Despesas
            <input
              onChange={ this.handleChange }
              data-testid="value-input"
              id="value-input"
              name="value"
              value={ value }
            />
          </label>
          <label htmlFor="description-input">
            Descrição das Despesas
            <input
              data-testid="description-input"
              id="description-input"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <select
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencies.map((curr, index) => (
              <option key={ index }>{curr}</option>
            ))}
          </select>
          <select
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          <select
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <button type="submit">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
