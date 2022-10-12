import type { CustomChipProps } from '../../components/common';
import type { RocketDTO } from '../../types/dto';

export const getRocketChips = (rocket: RocketDTO) => {
  const { launch_service_provider, family } = rocket;

  const chips: CustomChipProps[] = [];

  if (launch_service_provider?.pending_launches) {
    chips.push({
      label:
        launch_service_provider.pending_launches > 0 ? 'Active' : 'Inactive',
      gradient: true,
    });
  }

  if (
    launch_service_provider?.successful_launches &&
    launch_service_provider?.pending_launches &&
    launch_service_provider?.failed_launches
  ) {
    chips.push({
      label:
        launch_service_provider.successful_launches +
          launch_service_provider.pending_launches +
          launch_service_provider.failed_launches >
        1
          ? 'Reusable'
          : 'Non reusable',
      gradient: true,
    });
  }

  if (family) {
    chips.push({
      label: family,
    });
  }

  return chips;
};
