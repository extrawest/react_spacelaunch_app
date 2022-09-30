import type { CustomChipProps } from '../../components/common';
import type { RocketDTO } from '../../types/dto';

export const getRocketChips = (rocket: RocketDTO) => {
  const {
    launch_service_provider: {
      successful_launches,
      pending_launches,
      failed_launches,
    },
    family,
  } = rocket;

  const chips: CustomChipProps[] = [
    {
      label: pending_launches > 0 ? 'Active' : 'Inactive',
      gradient: true,
    },
    {
      label:
        successful_launches + pending_launches + failed_launches > 1
          ? 'Reusable'
          : 'Non reusable',
      gradient: true,
    },
    {
      label: family,
    },
  ];

  return chips;
};
