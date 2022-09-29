import type { FC } from 'react';
import YouTube from 'react-youtube';

import { Box } from '@mui/material';

import { styles } from './YouTubeVideo.styles';
import type { YouTubeVideoProps } from './YouTubeVideo.types';

export const YouTubeVideo: FC<YouTubeVideoProps> = ({ videoId }) => {
  return (
    <Box sx={styles.wrapper}>
      <YouTube videoId={videoId} />
    </Box>
  );
};
