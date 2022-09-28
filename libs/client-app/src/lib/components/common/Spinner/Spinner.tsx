import { Box, CircularProgress } from '@mui/material';

import { styles } from './Spinner.styles';

export const Spinner = () => {
  return (
    <Box sx={styles.wrapper}>
      <CircularProgress
        color="primary"
        size={75}
        thickness={4.5}
      />
    </Box>
  );
};
