import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { setCartItem } from './actions';
import reducer from './reducer';
import Main from '../../components/layout/main';

function Cart({ items, set }) {
  useInjectReducer({ key: 'addedItems', reducer });
  set(items);
  console.log(items);
  return (
    <>
      <Main>
        <h1>Jūsų krepšelyje yra:</h1>
      </Main>
    </>
  );
}

const mapStateToProps = state => ({ ...state.addedItems });
function mapDispatchToProps(dispatch) {
  return {
    set: items => dispatch(setCartItem(items)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
Cart.propTypes = {
  items: PropTypes.array,
  set: PropTypes.func,
};
export default compose(withConnect)(Cart);
