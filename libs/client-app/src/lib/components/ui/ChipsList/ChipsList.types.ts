import type { CustomChipProps } from '../../common';

export interface ChipsListProps {
  chips: CustomChipProps[];
  gap?: number;
  gradient?: CustomChipProps['gradient'];
}
