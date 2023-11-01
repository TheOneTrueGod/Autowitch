import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'
import { Box } from '@mui/material';
import { PageWrapper } from './PageWrapper';


const MainMenu = () => {
  return (
    <PageWrapper>
      <Box display="flex" flexDirection="column" gap="8px">
        <Link to="/game">
          <Button variant="contained">
            New Game
          </Button>
        </Link>
        <Link to="/game">
          <Button variant="contained">
            Continue
          </Button>
        </Link>
      </Box>
    </PageWrapper >
  );
};

export default MainMenu;
