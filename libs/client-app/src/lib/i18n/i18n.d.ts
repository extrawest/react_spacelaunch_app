import { NamespacesEnum } from '../types/enums';
import { enResource } from './en';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof NamespacesEnum.Common;
    resources: typeof enResource;
  }
}
