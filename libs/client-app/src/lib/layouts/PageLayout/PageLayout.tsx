import type { FC, PropsWithChildren } from 'react';

import { Box, Paper, Stack } from '@mui/material';

import { Footer, Header } from '../../components/ui';
import { styles } from './PageLayout.styles';
import type { PageLayoutProps } from './PageLayout.types';

export const PageLayout: FC<PropsWithChildren<PageLayoutProps>> = ({
  hasBackHome,
  intro,
  children,
}) => {
  return (
    <Box sx={styles.wrapper}>
      <Header hasBackHome={hasBackHome} />
      {intro}
      {children && (
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.content}>
            <Stack spacing={{ md: 12.5, sm: 10, xs: 7.5 }}>{children}</Stack>
          </Paper>
        </Box>
      )}
      <Footer />
    </Box>
  );
};
