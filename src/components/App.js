import React from 'react';
import styled from 'styled-components';
import { Container as ReactContainer, Row, Col } from 'reactstrap';

import Rose from '../img/layout/rose.png';

import { Theme } from './styled';

import { Navigation } from './global';
import { About } from './pages';

const Container = styled(ReactContainer)`
  background: ${({ theme: { colors } }) => colors.primary.light};
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  border-radius: 5px;
  border: 1px solid white;
`;

const Content = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function App() {
  return (
    <Theme>
      <Container fluid>
        <Row>
          <Col xs={{ size: 3, offset: 2 }}>
            <Image src={Rose} alt='' />
          </Col>
          <Content xs='5'>
            <Navigation />
            <About />
          </Content>
        </Row>
      </Container>
    </Theme>
  );
}

export default App;
