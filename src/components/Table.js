import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem } from '../redux/actions';

class Table extends Component {
  delectItem = ({ target }) => {
    const { name } = target;
    const { dispatch } = this.props;
    dispatch(removeItem(Number(name)));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          {expenses.map((exp) => (
            <tbody key={ exp.id }>
              <tr>
                <td>{ exp.description }</td>
                <td>{ exp.tag }</td>
                <td>{ exp.method }</td>
                <td>{ Number(exp.value).toFixed(2) }</td>
                <td>{ exp.exchangeRates[exp.currency].name }</td>
                <td>{Number(exp.exchangeRates[exp.currency].ask).toFixed(2)}</td>
                <td>
                  {
                    Number(exp.exchangeRates[exp.currency]
                      .ask * exp.value).toFixed(2)
                  }
                </td>
                <td>BRL</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ this.delectItem }
                    name={ exp.id }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()),
}.isRequired;

export default connect(mapStateToProps)(Table);
