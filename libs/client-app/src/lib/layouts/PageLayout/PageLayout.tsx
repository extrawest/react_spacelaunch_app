import type { FC, PropsWithChildren } from 'react';

import { Box, Paper } from '@mui/material';

import { HomeIntroImage } from '../../assets/images';
import { Footer, Header, Intro } from '../../components/ui';
import { styles } from './PageLayout.styles';
import type { PageLayoutProps } from './PageLayout.types';

export const PageLayout: FC<PropsWithChildren<PageLayoutProps>> = ({
  hasBackHome,
  introChildren,
  children,
}) => {
  return (
    <Box sx={styles.wrapper}>
      <Header hasBackHome={hasBackHome} />
      <Intro bgimage={HomeIntroImage}>{introChildren}</Intro>
      <Paper sx={styles.content}>{children}</Paper>
      <Footer />
    </Box>
  );
};
