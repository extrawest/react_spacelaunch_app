import type { Nullable } from '@vladyslav.haiduk_react/shared/types';

import type { RocketDTO } from './rocket';

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

  interface Launcher {
    id: number;
    url: string;
    details: string;
    flight_proven: boolean;
    serial_number: string;
    status: string;
    image_url?: Nullable<string>;
    successful_landings: number;
    attempted_landings: number;
    flights: number;
    last_launch_date?: Nullable<Date>;
    first_launch_date?: Nullable<Date>;
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
    reused?: Nullable<boolean>;
    launcher_flight_number: number;
    launcher: Launcher;
    landing: Landing;
    previous_flight_date?: Nullable<Date>;
    turn_around_time_days: number;
    previous_flight?: Nullable<PreviousFlight>;
  }

  export interface AstronautType {
    id: number;
    name: string;
  }

  export interface AstronautStatus {
    id: number;
    name: string;
  }

  export interface AstronautAgency {
    id: number;
    url: string;
    name: string;
    type: string;
  }

  export interface Astronaut {
    id: number;
    url: string;
    name: string;
    type: AstronautType;
    status: AstronautStatus;
    agency: AstronautAgency;
    date_of_birth: string;
    date_of_death?: any;
    nationality: string;
    twitter: string;
    instagram: string;
    bio: string;
    profile_image: string;
    wiki: string;
    last_flight?: Date;
    first_flight?: Date;
  }

  export interface LaunchCrew {
    id: number;
    role: string;
    astronaut: Astronaut;
  }

  export interface Type3 {
    id: number;
    name: string;
  }

  export interface LandingCrewAstronautStatus {
    id: number;
    name: string;
  }

  export interface LandingCrewAstronautAgency {
    id: number;
    url: string;
    name: string;
    type: string;
  }

  export interface LandingCrewAstronaut {
    id: number;
    url: string;
    name: string;
    type: Type3;
    status: LandingCrewAstronautStatus;
    agency: LandingCrewAstronautAgency;
    date_of_birth: string;
    date_of_death?: any;
    nationality: string;
    twitter: string;
    instagram: string;
    bio: string;
    profile_image: string;
    wiki: string;
    last_flight?: Date;
    first_flight?: Date;
  }

  export interface LandingCrew {
    id: number;
    role: string;
    astronaut: LandingCrewAstronaut;
  }

  export interface SpacecraftStatus {
    id: number;
    name: string;
  }

  export interface SpacecraftType {
    id: number;
    name: string;
  }

  export interface SpacecraftAgency {
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
    parent?: any;
    image_url: string;
  }

  export interface SpacecraftConfig {
    id: number;
    url: string;
    name: string;
    type: SpacecraftType;
    agency: SpacecraftAgency;
    in_use: boolean;
    capability: string;
    history: string;
    details: string;
    maiden_flight: string;
    height: number;
    diameter: number;
    human_rated: boolean;
    crew_capacity: number;
    payload_capacity: number;
    flight_life: string;
    image_url: string;
    nation_url?: any;
    wiki_link: string;
    info_link: string;
  }

  export interface Spacecraft {
    id: number;
    url: string;
    name: string;
    serial_number: string;
    status: SpacecraftStatus;
    description: string;
    spacecraft_config: SpacecraftConfig;
  }

  export interface SpacecraftStage {
    id: number;
    url: string;
    mission_end?: any;
    destination: string;
    launch_crew: LaunchCrew[];
    onboard_crew: any[];
    landing_crew: LandingCrew[];
    spacecraft: Spacecraft;
    docking_events: any[];
  }

  interface Rocket {
    id?: Nullable<number>;
    configuration: RocketDTO;
    launcher_stage: LauncherStage[];
    spacecraft_stage?: Nullable<SpacecraftStage>;
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
    agency_id?: Nullable<number>;
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

  export interface LaunchProgramAgency {
    id: number;
    url: string;
    name: string;
    type: string;
  }

  export interface LaunchProgram {
    id: number;
    url: string;
    name: string;
    description: string;
    agencies: LaunchProgramAgency[];
    image_url: string;
    start_date: Date;
    end_date?: Nullable<Date>;
    info_url: string;
    wiki_url: string;
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
    mission?: Nullable<Mission>;
    pad?: Nullable<Pad>;
    infoURLs: string[];
    vidURLs: string[];
    image_url?: Nullable<string>;
    infographic_url?: string;
    webcast_live?: Nullable<boolean>;
    image?: Nullable<string>;
    infographic?: any;
    program?: Nullable<LaunchProgram[]>;
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
