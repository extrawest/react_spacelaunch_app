import type { LaunchDTO } from '../types/dto';

export const getLaunchImage = (launch: LaunchDTO) => {
  return launch.image ?? launch.image_url ?? launch.img_url;
};
