import type { FC } from 'react';

import { Stack } from '@mui/material';

import { undefinedGuard } from '@vladyslav.haiduk_react/shared/types';

import { CustomChip } from '../CustomChip/CustomChip';
import { styles } from './ChipsList.styles';
import type { ChipsListProps } from './ChipsList.types';

export const ChipsList: FC<ChipsListProps> = ({ chips, gradient }) => {
  return (
    <Stack
      direction="row"
      sx={styles.wrapper}
    >
      {chips.map((chipProps) => {
        const props = undefinedGuard(gradient)
          ? chipProps
          : { ...chipProps, gradient };

        return (
          <CustomChip
            key={props.label}
            {...props}
          />
        );
      })}
    </Stack>
  );
};
