import { Box } from '@mui/material';
import React from 'react';
import themeConstants from '../theme/themeConstants';

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box height="90vh" sx={{ color: `${themeConstants.color.highlight}` }}>
      <h2>Autowitch</h2>
      <Box height="700px" width="800px" sx={{ border: `1px solid ${themeConstants.color.secondary}`, borderRadius: "8px", padding:`${themeConstants.spacing[4]}` }}>
        {children}
      </Box>
    </Box>
  )
}