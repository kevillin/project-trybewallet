import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPICoins } from '../redux/actions/index';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPICoins());
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <h1>WalletForm</h1>
        <div>
          <label htmlFor="value-input">
            Valor das Despesas
            <input data-testid="value-input" id="value-input" />
          </label>
          <label htmlFor="description-input">
            Descrição das Despesas
            <input data-testid="description-input" id="description-input" />
          </label>
          <select data-testid="currency-input">
            {currencies.map((curr, index) => (
              <option key={ index }>{curr}</option>
            ))}
          </select>
          <select data-testid="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
          <select data-testid="tag-input">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currencies: state.wallet.currencies,
  };
};

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
};
