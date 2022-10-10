import type { LaunchDTO } from '../../types/dto';

/**
 * Get launch image
 * @param {LaunchDTO} launch - launch from which to get the image
 * @returns {string|undefined|null} image
 */
export const getLaunchImage = (launch: LaunchDTO) => {
  return launch.image ?? launch.image_url ?? launch.img_url;
};
