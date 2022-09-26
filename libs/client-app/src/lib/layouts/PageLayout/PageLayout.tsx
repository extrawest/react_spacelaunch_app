import type { FC, PropsWithChildren } from 'react';

import { Box, Paper } from '@mui/material';

import { Footer, Header } from '../../components/ui';
import { styles } from './PageLayout.styles';
import type { PageLayoutProps } from './PageLayout.types';

export const PageLayout: FC<PropsWithChildren<PageLayoutProps>> = ({
  hasBackHome,
  children,
}) => {
  return (
    <Box sx={styles.wrapper}>
      <Header hasBackHome={hasBackHome} />
      <Paper sx={styles.content}>{children}</Paper>
      <Footer />
    </Box>
  );
};
