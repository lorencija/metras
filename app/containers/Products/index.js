import React from 'react';
import Main from '../../components/layout/main';
import LeftSide from '../../components/layout/left_side';
import RightSide from '../../components/layout/right_side';
import Row from '../../components/layout/row';

export default function Products() {
  return (
    <>
      <Main>
        <Row>
          <h1>produktai</h1>
        </Row>
        <Row>
          <LeftSide> kategorijos</LeftSide>
          <RightSide> produktai</RightSide>
        </Row>
      </Main>
    </>
  );
}
