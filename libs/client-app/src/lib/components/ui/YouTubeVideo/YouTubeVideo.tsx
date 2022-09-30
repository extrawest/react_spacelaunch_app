import type { FC } from 'react';
import YouTube from 'react-youtube';

import { Box } from '@mui/material';

import { getUrlSearchParam } from '@vladyslav.haiduk_react/shared/utils';

import { styles } from './YouTubeVideo.styles';
import type { YouTubeVideoProps } from './YouTubeVideo.types';

export const YouTubeVideo: FC<YouTubeVideoProps> = ({ url }) => {
  const videoId = getUrlSearchParam(url, 'v');

  if (!videoId) {
    return null;
  }

  return (
    <Box sx={styles.wrapper}>
      <YouTube videoId={videoId} />
    </Box>
  );
};
