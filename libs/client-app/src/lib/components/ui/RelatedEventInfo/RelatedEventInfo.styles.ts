import type { SxProps } from '@mui/material';

const title: SxProps = {
  textAlign: 'center',
};

const infoWrapper: SxProps = {
  flexDirection: 'row',
  gap: 2.5,
};

const imgWrapper: SxProps = {
  flex: 1,
  maxHeight: 324,
  '& > img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

const content: SxProps = {
  flex: 1,
  alignItems: 'flex-start',
};

const contentTitle: SxProps = {
  mb: 2,
};

const propsWrapper: SxProps = {
  mt: 3.75,
  mb: 2.5,
};

export const styles = {
  title,
  infoWrapper,
  imgWrapper,
  content,
  contentTitle,
  propsWrapper,
};
