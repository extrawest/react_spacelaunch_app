import type { FC } from 'react';

import { Stack, Typography } from '@mui/material';

import { styles } from './DetailsColumn.styles';
import type { DetailsColumnProps } from './DetailsColumn.types';

export const DetailsColumn: FC<DetailsColumnProps> = ({
  icon,
  title,
  details,
}) => {
  return (
    <Stack
      spacing={2.5}
      sx={styles.wrapper}
    >
      {icon}
      <Typography variant="subtitle1">{title}</Typography>
      <Stack spacing={1.25}>
        {details.map((detail) => (
          <div key={detail.label}>
            <Typography variant="body1">{detail.label}</Typography>
            <Typography
              variant="body1"
              sx={styles.detailValue}
            >
              {detail.value}
            </Typography>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};
