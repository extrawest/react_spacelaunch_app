import type { Nullable } from '@vladyslav.haiduk_react/shared/types';

export type RocketDTO = RocketDTONamespace.RootObject;

namespace RocketDTONamespace {
  export interface LaunchServiceProvider {
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

  export interface RootObject {
    id: number;
    launch_library_id: number;
    url: string;
    name: string;
    description: string;
    family: string;
    full_name: string;
    launch_service_provider?: Nullable<LaunchServiceProvider>;
    variant?: Nullable<string>;
    alias?: Nullable<string>;
    min_stage: number;
    max_stage: number;
    length: number;
    diameter: number;
    maiden_flight: string;
    launch_mass: number;
    leo_capacity?: Nullable<number>;
    gto_capacity?: Nullable<number>;
    to_thrust: number;
    apogee?: Nullable<number>;
    vehicle_range?: any;
    image_url?: Nullable<string>;
    info_url?: Nullable<string>;
    wiki_url: string;
  }
}
