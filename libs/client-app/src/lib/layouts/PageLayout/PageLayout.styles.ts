import type { SxProps } from '@mui/material';

const wrapper: SxProps = {
  pb: 10,
};

const contentWrapper: SxProps = {
  maxWidth: 1460,
  mx: 'auto',
  mt: -14.75,
  mb: 10,
  px: 1.25,
};

const content: SxProps = {
  width: '100%',
  px: 16,
  py: 12.5,
  borderRadius: 0,
  boxShadow: 0,
};

export const styles = { wrapper, contentWrapper, content };
