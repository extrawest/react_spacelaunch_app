import type { Nullable } from '@vladyslav.haiduk_react/shared/types';

export type EventDTO = EventDTONamespace.RootObject;

namespace EventDTONamespace {
  interface Type {
    id: number;
    name: string;
  }

  interface LaunchStatus {
    id: number;
    name: string;
  }

  interface Launch {
    id: string;
    url: string;
    launch_library_id: number;
    slug: string;
    name: string;
    status: LaunchStatus;
    net: Date;
    window_end: Date;
    window_start: Date;
    mission: string;
    mission_type: string;
    pad: string;
    location: string;
    landing?: any;
    landing_success?: any;
    launcher?: any;
    orbit: string;
    image?: Nullable<string>;
  }

  interface SpacestationStatus {
    id: number;
    name: string;
  }

  interface Spacestation {
    id: number;
    url: string;
    name: string;
    status: SpacestationStatus;
    founded: string;
    description: string;
    orbit: string;
    image_url: string;
  }

  export interface RootObject {
    id: number;
    url: string;
    name: string;
    type: Type;
    description: string;
    location?: Nullable<string>;
    news_url?: Nullable<string>;
    video_url?: Nullable<string>;
    feature_image?: Nullable<string>;
    date: Date;
    launches: Launch[];
    expeditions: any[];
    spacestations: Spacestation[];
  }
}
