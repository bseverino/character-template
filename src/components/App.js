import React from 'react';
import styled from 'styled-components';

import { Theme, Wrapper, Box } from './styled';

import { Sidebar, Navigation } from './global';
import { About } from './pages';

function App() {
  return (
    <Theme>
      <Wrapper>
        <Box>
          <Sidebar />
          <div>
            <Navigation />
            <About />
          </div>
        </Box>
      </Wrapper>
    </Theme>
  );
}

export default App;
