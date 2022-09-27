import type { FC, PropsWithChildren } from 'react';

import { Box, Container } from '@mui/material';

import { styles } from './Intro.styles';
import type { IntroProps } from './Intro.types';

export const Intro: FC<PropsWithChildren<IntroProps>> = ({
  bgimage,
  children,
}) => {
  return (
    <Box sx={styles.wrapper({ image: bgimage })}>
      <Container>{children}</Container>
    </Box>
  );
};
