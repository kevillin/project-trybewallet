import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import getWallet from '../redux/reducers/wallet';

class WalletForm extends Component {
  render() {
    // const { currencies } = this.props;
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
            {/* {
              currencies.map((moeda, index) => (
                <option key={ index } value={ moeda }>{ moeda }</option>
              ))
            } */}
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

// const mapStateToProps = ({ wallet }) => ({
//   currencies: wallet.currencies,
// });

export default WalletForm;

// WalletForm.propTypes = {
//   currencies: PropTypes.arrayOf.isRequired,
// };
