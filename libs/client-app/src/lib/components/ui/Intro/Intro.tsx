import type { FC, PropsWithChildren } from 'react';

import { Box, Container } from '@mui/material';

import { styles } from './Intro.styles';
import type { IntroProps } from './Intro.types';

export const Intro: FC<PropsWithChildren<IntroProps>> = ({
  bgimage,
  hasGradient,
  children,
}) => {
  return (
    <Box
      sx={styles.wrapper({ image: bgimage, gradient: Boolean(hasGradient) })}
    >
      <Container>{children}</Container>
    </Box>
  );
};
