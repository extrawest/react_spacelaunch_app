export type EventDTO = EventDTONamespace.RootObject;

namespace EventDTONamespace {
  export interface Type {
    id: number;
    name: string;
  }

  export interface LaunchStatus {
    id: number;
    name: string;
  }

  export interface Launch {
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
    image: string;
  }

  export interface SpacestationStatus {
    id: number;
    name: string;
  }

  export interface Spacestation {
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
    location: string;
    news_url?: any;
    video_url: string;
    feature_image?: string | null;
    date: Date;
    launches: Launch[];
    expeditions: any[];
    spacestations: Spacestation[];
  }
}
