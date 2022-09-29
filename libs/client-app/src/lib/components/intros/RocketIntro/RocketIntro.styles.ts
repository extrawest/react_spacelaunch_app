import type { SxProps } from '@mui/material';

const wrapper: SxProps = {
  alignItems: 'center',
  textAlign: 'center',
};

const title: SxProps = {
  mb: 1.25,
};

const subtitle: SxProps = {
  mb: 2.5,
  fontWeight: 400,
};

const date: SxProps = {
  mb: 5,
  fontWeight: 800,
};

export const styles = { wrapper, title, subtitle, date };
