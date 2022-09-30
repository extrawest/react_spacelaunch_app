import i18next from 'i18next';

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
      label: i18next.t('rocket:rocket_name_property'),
      value: getValue(rocket.name),
    },
    {
      label: i18next.t('rocket:rocket_family_property'),
      value: getValue(rocket.family),
    },
    {
      label: i18next.t('rocket:rocket_variant_property'),
      value: getValue(rocket.variant),
    },
    {
      label: i18next.t('rocket:rocket_full_name_property'),
      value: getValue(rocket.full_name),
    },
    {
      label: i18next.t('rocket:rocket_alias_property'),
      value: getValue(rocket.alias),
    },
  ];

  return details;
};

export const getSpecificationsDetails = (rocket: RocketDTO) => {
  const details: DetailParams[] = [
    {
      label: i18next.t('rocket:rocket_min_stage_property'),
      value: getValue(rocket.min_stage),
    },
    {
      label: i18next.t('rocket:rocket_max_stage_property'),
      value: getValue(rocket.max_stage),
    },
    {
      label: i18next.t('rocket:rocket_length_property'),
      value: getValue(rocket.length, `${rocket.length} m`),
    },
    {
      label: i18next.t('rocket:rocket_diameter_property'),
      value: getValue(rocket.diameter, `${rocket.diameter} m`),
    },
    {
      label: i18next.t('rocket:rocket_launch_mass_property'),
      value: getValue(rocket.launch_mass, `${rocket.launch_mass} T`),
    },
    {
      label: i18next.t('rocket:rocket_thrust_property'),
      value: getValue(rocket.to_thrust, `${rocket.to_thrust} kN`),
    },
    {
      label: i18next.t('rocket:rocket_apogee_property'),
      value: getValue(rocket.apogee, `${rocket.apogee} km`),
    },
  ];

  return details;
};

export const getPayloadCapacityDetails = (rocket: RocketDTO) => {
  const details: DetailParams[] = [
    {
      label: i18next.t('rocket:rocket_launch_cost_property'),
      value: getValue(null),
    },
    {
      label: i18next.t('rocket:rocket_leo_orbit_property'),
      value: getValue(rocket.leo_capacity, `${rocket.leo_capacity} kg`),
    },
    {
      label: i18next.t('rocket:rocket_geo_orbit_property'),
      value: getValue(rocket.gto_capacity, `${rocket.gto_capacity} kg`),
    },
    {
      label: i18next.t('rocket_direct_geostationary_property'),
      value: getValue(null),
    },
    {
      label: i18next.t('rocket_sun_sync_capacity_property'),
      value: getValue(null),
    },
  ];

  return details;
};
