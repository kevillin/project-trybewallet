import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  // state = {
  //   totalDespesas: 0,
  //   valorTotal: '',
  // };

  // componentDidMount() {
  //   this.mudaValorTotal();
  // }

  // mudaValorTotal = () => {
  //   const { totalDespesas, valorTotal } = this.state;
  //   this.setState({ valorTotal: totalDespesas });
  // };

  render() {
    const { email } = this.props;
    // const { valorTotal } = this.state;
    return (
      <>
        <div>Header</div>
        <h3 data-testid="email-field">{ email }</h3>
        <input name="valorTotal" type="number" data-testid="total-field" value="0" />
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
