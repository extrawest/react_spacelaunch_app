import type { Nullable } from '@vladyslav.haiduk_react/shared/types';

export type LaunchDTO = LaunchDTONamespace.RootObject;

namespace LaunchDTONamespace {
  interface Status {
    id: number;
    name: string;
    abbrev?: Nullable<string>;
    description?: Nullable<string>;
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
    total_launch_count?: Nullable<number>;
    consecutive_successful_launches?: Nullable<number>;
    successful_launches: number;
    failed_launches: number;
    pending_launches: number;
    consecutive_successful_landings?: Nullable<number>;
    successful_landings?: Nullable<number>;
    failed_landings?: Nullable<number>;
    attempted_landings?: Nullable<number>;
    info_url: string;
    wiki_url: string;
    logo_url: string;
    image_url: string;
    nation_url: string;
  }

  interface RocketManufacturer {
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
    total_launch_count: number;
    consecutive_successful_launches: number;
    successful_launches: number;
    failed_launches: number;
    pending_launches: number;
    consecutive_successful_landings: number;
    successful_landings: number;
    failed_landings: number;
    attempted_landings: number;
    info_url: string;
    wiki_url: string;
    logo_url: string;
    image_url: string;
    nation_url: string;
  }

  interface RocketProgramAgency {
    id: number;
    url: string;
    name: string;
    type: string;
  }

  interface RocketProgram {
    id: number;
    url: string;
    name: string;
    description: string;
    agencies: RocketProgramAgency[];
    image_url: string;
    start_date: Date;
    end_date?: Nullable<Date>;
    info_url: string;
    wiki_url: string;
  }

  interface RocketConfiguration {
    id: number;
    launch_library_id: number;
    url: string;
    name: string;
    description: string;
    family: string;
    full_name: string;
    launch_service_provider?: Nullable<LaunchServiceProvider>;
    manufacturer: RocketManufacturer;
    program: RocketProgram[];
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
    info_url?: Nullable<string>;
    wiki_url: string;
    total_launch_count?: Nullable<number>;
    consecutive_successful_launches?: Nullable<number>;
    successful_launches?: Nullable<number>;
    failed_launches?: Nullable<number>;
    pending_launches?: Nullable<number>;
  }

  interface Launcher {
    id: number;
    url: string;
    details: string;
    flight_proven: boolean;
    serial_number: string;
    status: string;
    image_url: string;
    successful_landings: number;
    attempted_landings: number;
    flights: number;
    last_launch_date: Date;
    first_launch_date: Date;
  }

  interface Location {
    id: number;
    name: string;
    abbrev: string;
    description: string;
    location?: any;
    successful_landings: number;
  }

  interface Type {
    id: number;
    name: string;
    abbrev: string;
    description: string;
  }

  interface Landing {
    id: number;
    attempt: boolean;
    success?: any;
    description: string;
    location: Location;
    type: Type;
  }

  interface PreviousFlight {
    id: string;
    name: string;
  }

  interface LauncherStage {
    id: number;
    type: string;
    reused?: any;
    launcher_flight_number: number;
    launcher: Launcher;
    landing: Landing;
    previous_flight_date: Date;
    turn_around_time_days: number;
    previous_flight: PreviousFlight;
  }

  interface Rocket {
    id?: Nullable<number>;
    configuration: RocketConfiguration;
    launcher_stage: LauncherStage[];
    spacecraft_stage?: any;
  }

  interface Orbit {
    id: number;
    name: string;
    abbrev: string;
  }

  interface Mission {
    id: number;
    launch_library_id?: any;
    name: string;
    description: string;
    launch_designator?: any;
    type: string;
    orbit: Orbit | string;
    orbit_abbrev?: Nullable<string>;
  }

  interface PadLocation {
    id: number;
    url?: Nullable<string>;
    name: string;
    country_code: string;
    map_image?: Nullable<string>;
    total_launch_count?: Nullable<number>;
    total_landing_count?: Nullable<number>;
  }

  interface Pad {
    id: number;
    url?: Nullable<string>;
    agency_id: number;
    name: string;
    info_url?: Nullable<string>;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: PadLocation;
    map_image?: Nullable<string>;
    total_launch_count?: Nullable<number>;
  }

  export interface RootObject {
    id: string;
    url: string;
    launch_library_id?: any;
    slug: string;
    name: string;
    img_url?: Nullable<string>;
    status: Status;
    net: Date;
    window_end: Date;
    window_start: Date;
    inhold: boolean;
    tbdtime: boolean;
    tbddate: boolean;
    probability?: Nullable<number>;
    holdreason: string;
    failreason: string;
    hashtag?: string;
    launch_service_provider?: Nullable<LaunchServiceProvider>;
    rocket: Rocket;
    mission: Mission;
    pad: Pad;
    infoURLs: string[];
    vidURLs: string[];
    image_url?: Nullable<string>;
    infographic_url?: string;
    webcast_live?: Nullable<boolean>;
    image?: Nullable<string>;
    infographic?: any;
    program?: any[];
    orbital_launch_attempt_count?: Nullable<number>;
    location_launch_attempt_count?: Nullable<number>;
    pad_launch_attempt_count?: Nullable<number>;
    agency_launch_attempt_count?: Nullable<number>;
    orbital_launch_attempt_count_year?: Nullable<number>;
    location_launch_attempt_count_year?: Nullable<number>;
    pad_launch_attempt_count_year?: Nullable<number>;
    agency_launch_attempt_count_year?: Nullable<number>;
  }
}
