import type { LaunchDTO } from '../../types/dto';
import { getLaunchImage } from './getLaunchImage';

describe('[util]: getLaunchImage', () => {
  const launch: LaunchDTO = {
    id: '',
    url: '',
    slug: '',
    name: '',
    status: { id: 0, name: '' },
    net: new Date(),
    window_end: new Date(),
    window_start: new Date(),
    inhold: false,
    tbddate: false,
    tbdtime: false,
    holdreason: '',
    failreason: '',
    rocket: {
      configuration: {
        id: 0,
        launch_library_id: 0,
        url: '',
        name: '',
        description: '',
        family: '',
        full_name: '',
        min_stage: 0,
        max_stage: 0,
        length: 0,
        diameter: 0,
        maiden_flight: '',
        launch_mass: 0,
        to_thrust: 0,
        wiki_url: '',
      },
      launcher_stage: [],
    },
    vidURLs: [],
    infoURLs: [],
  };
  const imageUrl = 'https://example.com';

  test('Should return image property', () => {
    launch.image = imageUrl;
    expect(getLaunchImage(launch)).toBe(imageUrl);
  });

  test('Should return image_url property', () => {
    launch.image_url = imageUrl;
    expect(getLaunchImage(launch)).toBe(imageUrl);
  });

  test('Should return img_url property', () => {
    launch.img_url = imageUrl;
    expect(getLaunchImage(launch)).toBe(imageUrl);
  });

  test("Shouldn't return image", () => {
    expect(getLaunchImage(launch)).toBeUndefined();
  });

  afterEach(() => {
    launch.image = undefined;
    launch.image_url = undefined;
    launch.img_url = undefined;
  });
});
