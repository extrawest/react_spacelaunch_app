import type { FC } from 'react';

import { Box, Typography } from '@mui/material';

import { styles } from './PropertyValue.styles';
import type { PropertyValueProps } from './PropertyValue.types';

export const PropertyValue: FC<PropertyValueProps> = ({
  property,
  children,
}) => {
  return (
    <Typography variant="body1">
      <Box
        component="span"
        sx={styles.property}
      >
        {property}:
      </Box>
      &nbsp;
      {children}
    </Typography>
  );
};
