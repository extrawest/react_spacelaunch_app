import type { SxProps } from '@mui/material';

const wrapper: SxProps = {
  pb: { md: 10, sm: 8, xs: 6 },
};

const contentWrapper: SxProps = {
  maxWidth: 1460,
  mx: 'auto',
  mt: -14.75,
  mb: { md: 10, sm: 8, xs: 6 },
  px: 1.25,
};

const content: SxProps = {
  width: '100%',
  px: { lg: 16, md: 12, sm: 8, xs: 4 },
  py: { lg: 12.5, md: 10, sm: 7.5, xs: 5 },
  borderRadius: 0,
  boxShadow: 0,
};

export const styles = { wrapper, contentWrapper, content };
