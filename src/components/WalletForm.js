import React, { Component } from 'react';
// import fetchAPI from './fetchAPI';

class WalletForm extends Component {
  state = {
    // coins: {},
  };

  async componentDidMount() {
    await this.puxaAPI();
  }

  puxaAPI = async () => {
    // const API = await fetchAPI();
    // this.setState({ coins: API });
  };

  render() {
    // const { coins } = this.state;
    return (
      <div>
        <h1>WalletForm</h1>
        <div>
          <label htmlFor="value-input">
            <input data-testid="value-input" id="value-input" />
          </label>
          <label htmlFor="description-input">
            <input data-testid="description-input" id="description-input" />
          </label>
          <select data-testid="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de Crédito</option>
            <option value="debito">Cartão de Débito</option>
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

export default WalletForm;
