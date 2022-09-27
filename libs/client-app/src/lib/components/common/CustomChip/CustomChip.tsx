import type { FC } from 'react';

import { Chip } from '@mui/material';

import { styles } from './CustomChip.styles';
import type { CustomChipProps } from './CustomChip.types';

export const CustomChip: FC<CustomChipProps> = ({
  label,
  gradient = false,
}) => {
  return (
    <Chip
      label={label}
      sx={styles.chip({ gradient })}
    />
  );
};
