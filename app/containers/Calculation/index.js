import React from 'react';
import Main from '../../components/layout/main';
import Row from '../../components/layout/row';
import Image from '../../images/covers/kilimas.jpg';
import Style from './style.css';
import LeftSide from '../../components/layout/left_side';
import RightSide from '../../components/layout/right_side';

export default function Contacts() {
  return (
    <>
      <Main>
        <Row>
          <LeftSide>
            <img
              src={Image}
              alt="carpet"
              width="300px"
              className={Style.border}
            />
          </LeftSide>
          <RightSide>
            <h1 className={Style.center}>Kilimų skaičiuoklė</h1>
            <hr className={Style.line} />
            <p className={Style.center}>dfdsfsf</p>
          </RightSide>
        </Row>
      </Main>
    </>
  );
}
