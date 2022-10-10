import type { FC } from 'react';

import { Stack } from '@mui/material';

import { undefinedGuard } from '@vladyslav.haiduk_react/shared/types';

import { CustomChip } from '../../common/CustomChip/CustomChip';
import { styles } from './ChipsList.styles';
import type { ChipsListProps } from './ChipsList.types';

export const ChipsList: FC<ChipsListProps> = ({ chips, gap, gradient }) => {
  return (
    <Stack
      direction="row"
      gap={gap}
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
