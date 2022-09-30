import type { FC } from 'react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Grid } from '@mui/material';

import { DocsIcon, LaunchIcon, RocketIcon } from '../../../assets/icons';
import { NamespacesEnum } from '../../../types/enums';
import { DetailsColumn } from '../../common';
import type { RocketDetailsProps } from './RocketDetails.types';
import {
  getFamilyDetails,
  getSpecificationsDetails,
  getPayloadCapacityDetails,
} from './RocketDetails.utils';

export const RocketDetails: FC<RocketDetailsProps> = ({ rocket }) => {
  const { t } = useTranslation([NamespacesEnum.Rocket]);

  const familyDetails = useMemo(() => getFamilyDetails(rocket), [rocket]);

  const specificationsDetails = useMemo(
    () => getSpecificationsDetails(rocket),
    [rocket]
  );

  const payloadCapacityDetails = useMemo(
    () => getPayloadCapacityDetails(rocket),
    [rocket]
  );

  return (
    <div>
      <Grid
        container
        columnSpacing={2}
      >
        <Grid
          item
          lg={4}
        >
          <DetailsColumn
            icon={<RocketIcon />}
            title={t('rocket:family_details_title')}
            details={familyDetails}
          />
        </Grid>
        <Grid
          item
          lg={4}
        >
          <DetailsColumn
            icon={<DocsIcon />}
            title={t('rocket:specifications_details_title')}
            details={specificationsDetails}
          />
        </Grid>
        <Grid
          item
          lg={4}
        >
          <DetailsColumn
            icon={<LaunchIcon />}
            title={t('rocket:payload_capacity_details_title')}
            details={payloadCapacityDetails}
          />
        </Grid>
      </Grid>
    </div>
  );
};
