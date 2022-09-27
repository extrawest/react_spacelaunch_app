export interface NormalizedLaunchDTO {
  id: LaunchDTO['id'];
  name: LaunchDTO['name'];
  image: LaunchDTO['image_url'];
  date: LaunchDTO['window_start'];
}

export type LaunchDTO = LaunchDTONamespace.RootObject;

namespace LaunchDTONamespace {
  interface Status {
    id: number;
    name: string;
  }

  interface LaunchServiceProvider {
    id: number;
    url: string;
    name: string;
    featured: boolean;
    type: string;
    country_code: string;
    abbrev: string;
    description: string;
    administrator: string;
    founding_year: string;
    launchers: string;
    spacecraft: string;
    launch_library_url: string;
    successful_launches: number;
    failed_launches: number;
    pending_launches: number;
    info_url: string;
    wiki_url: string;
    logo_url: string;
    image_url: string;
    nation_url: string;
  }

  interface RocketConfiguration {
    id: number;
    launch_library_id: number;
    url: string;
    name: string;
    description: string;
    family: string;
    full_name: string;
    launch_service_provider: LaunchServiceProvider;
    variant: string;
    alias: string;
    min_stage: number;
    max_stage: number;
    length: number;
    diameter: number;
    maiden_flight: string;
    launch_mass: number;
    leo_capacity: number;
    gto_capacity: number;
    to_thrust: number;
    apogee: number;
    vehicle_range?: any;
    image_url: string;
    info_url?: any;
    wiki_url: string;
  }

  interface Rocket {
    configuration: RocketConfiguration;
    launcher_stage: any[];
    spacecraft_stage?: any;
  }

  interface Mission {
    id: number;
    launch_library_id?: any;
    name: string;
    description: string;
    type: string;
    orbit: string;
    orbit_abbrev: string;
  }

  interface PadLocation {
    id: number;
    name: string;
    country_code: string;
  }

  interface Pad {
    id: number;
    agency_id: number;
    name: string;
    info_url?: any;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: PadLocation;
  }

  export interface RootObject {
    id: string;
    url: string;
    launch_library_id?: any;
    slug: string;
    name: string;
    img_url?: string | null;
    status: Status;
    net: Date;
    window_end: Date;
    window_start: Date;
    inhold: boolean;
    tbdtime: boolean;
    tbddate: boolean;
    probability?: any;
    holdreason: string;
    failreason: string;
    hashtag?: any;
    rocket: Rocket;
    mission: Mission;
    pad: Pad;
    infoURLs: any[];
    vidURLs: any[];
    image_url?: any;
    infographic_url?: any;
  }
}
