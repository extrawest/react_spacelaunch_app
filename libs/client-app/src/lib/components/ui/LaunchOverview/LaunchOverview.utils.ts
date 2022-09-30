import { stringGuard } from '@vladyslav.haiduk_react/shared/types';

import type { LaunchDTO } from '../../../types/dto';
import type { CustomChipProps } from '../../common';

export const getLaunchChips = (launch: LaunchDTO) => {
  const list: CustomChipProps[] = [];

  list.push({
    label: launch.pad.name,
    gradient: true,
  });

  list.push({
    label: stringGuard(launch.mission.orbit)
      ? launch.mission.orbit
      : launch.mission.orbit.name,
    gradient: true,
  });

  if (launch.probability) {
    list.push({
      label: `Probability: ${launch.probability}%`,
      gradient: true,
    });
  }

  list.push({
    label: launch.pad.location.name,
  });

  return list;
};
