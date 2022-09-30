import type { Nullable } from '@vladyslav.haiduk_react/shared/types';

import type { RocketDTO } from '../../../types/dto';
import type { DetailParams } from '../../common';

const getValue = (
  value: Nullable<DetailParams['value']>,
  formatted?: string
) => {
  return value ? formatted ?? value : '-';
};

export const getFamilyDetails = (rocket: RocketDTO) => {
  const details: DetailParams[] = [
    {
      label: 'Name',
      value: getValue(rocket.name),
    },
    {
      label: 'Family',
      value: getValue(rocket.family),
    },
    {
      label: 'Variant',
      value: getValue(rocket.variant),
    },
    {
      label: 'Full Name',
      value: getValue(rocket.full_name),
    },
    {
      label: 'Alias',
      value: getValue(rocket.alias),
    },
  ];

  return details;
};

export const getSpecificationsDetails = (rocket: RocketDTO) => {
  const details: DetailParams[] = [
    {
      label: 'Minimum Stage',
      value: getValue(rocket.min_stage),
    },
    {
      label: 'Max Stage',
      value: getValue(rocket.max_stage),
    },
    {
      label: 'Length',
      value: getValue(rocket.length, `${rocket.length} m`),
    },
    {
      label: 'Diameter',
      value: getValue(rocket.diameter, `${rocket.diameter} m`),
    },
    {
      label: 'Launch Mass',
      value: getValue(rocket.launch_mass, `${rocket.launch_mass} T`),
    },
    {
      label: 'Thrust',
      value: getValue(rocket.to_thrust, `${rocket.to_thrust} kN`),
    },
    {
      label: 'Apogee (Sub-Orbital)',
      value: getValue(rocket.apogee, `${rocket.apogee} km`),
    },
  ];

  return details;
};

export const getPayloadCapacityDetails = (rocket: RocketDTO) => {
  const details: DetailParams[] = [
    {
      label: 'Launch Cost',
      value: getValue(null),
    },
    {
      label: 'Low Earth Orbit',
      value: getValue(rocket.leo_capacity, `${rocket.leo_capacity} kg`),
    },
    {
      label: 'Geostationary Transfer Orbit',
      value: getValue(rocket.gto_capacity, `${rocket.gto_capacity} kg`),
    },
    {
      label: 'Direct Geostationary',
      value: getValue(null),
    },
    {
      label: 'Sun-Synchronous Capacity',
      value: getValue(null),
    },
  ];

  return details;
};
