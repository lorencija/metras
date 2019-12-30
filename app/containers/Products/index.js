import React from 'react';
import Main from '../../components/layout/main';
import LeftSide from '../../components/layout/left_side';
import RightSide from '../../components/layout/right_side';
import Row from '../../components/layout/row';
import Style from './style.css';
// import Cover from '../../images/covers/products.jpg';

export default function Products() {
  return (
    <>
      <Main>
        {/* <Row>
          <img src={Cover} alt="dried plants" width="100%" />
        </Row> */}
        <Row>
          <LeftSide>
            <h3>Namams</h3>
            <p>Kilimai</p>
            <hr />
            <p>Padekliukai</p>
            <br />
            <h3>Vaikams</h3>
            <p>Kaldrytės</p>
            <hr />
            <p>Kramtukai</p>
            <hr />
            <p>Pufai</p>
            <hr />
            <p>Žaislai</p>
          </LeftSide>
          <RightSide>
            <div className={Style.conteiner}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>3</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </RightSide>
        </Row>
      </Main>
    </>
  );
}
