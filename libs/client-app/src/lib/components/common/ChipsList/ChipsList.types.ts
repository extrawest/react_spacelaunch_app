import type { CustomChipProps } from '../CustomChip/CustomChip.types';

export interface ChipsListProps {
  chips: CustomChipProps[];
  gradient?: CustomChipProps['gradient'];
}
