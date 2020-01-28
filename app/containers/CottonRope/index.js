import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { setCottonRope, addToCart } from './actions';
import reducer from './reducer';
import Main from '../../components/layout/main';
import Row from '../../components/layout/row';
import Image from '../../images/covers/medvilnines_virves.jpg';
import Style from './style.css';

function CottonRope({ rope, set, add }) {
  useInjectReducer({ key: 'cottonRope', reducer });
  set(rope);
  const handleClick = id => {
    add(id);
  };
  return (
    <>
      <Main>
        <>
          <Row>
            <img
              src={Image}
              alt="medvilnines virves"
              width="100%"
              className={Style.border}
            />
          </Row>
          <Row>
            <div className={Style.conteiner}>
              {rope.map(item => (
                <div key={item.id}>
                  <div className={Style.image}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className={Style.card_image}
                    />
                  </div>
                  <div>
                    <span>{item.title}</span>
                    <p>{item.desc}</p>
                    <p>
                      <b>Price: {item.price} Eur</b>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleClick(item.id)}
                    className={Style.button}
                  >
                    Į krepšelį
                  </button>
                </div>
              ))}
            </div>
          </Row>
        </>
      </Main>
    </>
  );
}

const mapStateToProps = state => ({ ...state.cottonRope });

function mapDispatchToProps(dispatch) {
  return {
    set: rope => dispatch(setCottonRope(rope)),
    add: id => dispatch(addToCart(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

CottonRope.propTypes = {
  rope: PropTypes.array,
  set: PropTypes.func,
  add: PropTypes.func,
};

CottonRope.defaultProps = {
  rope: [],
};

export default compose(withConnect)(CottonRope);
