import type { SxProps } from '@mui/material';

const wrapper: SxProps = {
  alignItems: 'center',
  textAlign: 'center',
};

const title: SxProps = {
  mb: 2.5,
};

const subtitle: SxProps = {
  mb: 5,
};

const timer: SxProps = {
  px: { md: 8.75, sm: 6.5, xs: 4.25 },
  py: { md: 6.25, sm: 5, xs: 3.75 },
  bgcolor: 'primary.main',
};

export const styles = { wrapper, title, subtitle, timer };
