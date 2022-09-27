import { NamespacesEnum } from '../../types/enums';
import commonNs from './common.json';
import eventNs from './event.json';
import homeNs from './home.json';
import launchNs from './launch.json';
import notFoundNs from './not-found.json';
import rocketNs from './rocket.json';

export const enResource = {
  [NamespacesEnum.Common]: commonNs,
  [NamespacesEnum.Home]: homeNs,
  [NamespacesEnum.Launch]: launchNs,
  [NamespacesEnum.Rocket]: rocketNs,
  [NamespacesEnum.Event]: eventNs,
  [NamespacesEnum.NotFound]: notFoundNs,
};
