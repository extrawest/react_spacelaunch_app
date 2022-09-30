import type { FC } from 'react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Typography } from '@mui/material';

import { EventIntroImage } from '../../../assets/images';
import { NamespacesEnum } from '../../../types/enums';
import { formatDate } from '../../../utils';
import { CustomButton, CustomChip } from '../../common';
import { Intro } from '../../ui';
import { styles } from './EventIntro.styles';
import type { EventIntroProps } from './EventIntro.types';

export const EventIntro: FC<EventIntroProps> = ({ event }) => {
  const { t } = useTranslation([NamespacesEnum.Event]);

  const handleOpenSite = useCallback(() => {
    // Todo: replace with link
    alert('open');
  }, []);

  return (
    <Intro
      bgimage={event.feature_image ?? EventIntroImage}
      hasGradient
    >
      <Stack sx={styles.wrapper}>
        <Typography
          variant="h1"
          sx={styles.title}
        >
          {event.name}
        </Typography>
        <CustomChip label={formatDate(event.date)} />
        <Typography
          variant="body2"
          sx={styles.description}
        >
          {event.description}
        </Typography>
        <CustomButton onClick={handleOpenSite}>
          {t('event:read_on_site')}
        </CustomButton>
      </Stack>
    </Intro>
  );
};
