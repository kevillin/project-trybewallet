import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <>
        <div>Header</div>
        <h3 data-testid="email-field">{ email }</h3>
        <h2 data-testid="total-field">
          {expenses.length === 0 ? '0' : (
            expenses.reduce((acc, curr) => (
              acc + Number(curr.value)
              * Number(curr.exchangeRates[curr.currency].ask)), 0).toFixed(2)
          )}

        </h2>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
