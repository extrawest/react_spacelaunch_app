import type { FC } from 'react';

import { Button as MuiButton } from '@mui/material';

import { styles } from './CustomButton.styles';
import type { CustomButtonProps } from './CustomButton.types';

export const CustomButton: FC<CustomButtonProps> = ({ children }) => {
  return (
    <MuiButton
      variant="contained"
      sx={styles.button}
    >
      {children}
    </MuiButton>
  );
};
