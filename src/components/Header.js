import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <div>Header</div>
        <h3 data-testid="email-field">{email}</h3>
        <h2 data-testid="total-field">0</h2>
        <select data-testid="header-currency-field">
          <option value="brl">BRL</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
