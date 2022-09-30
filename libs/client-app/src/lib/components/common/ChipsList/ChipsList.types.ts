import type { CustomChipProps } from '../CustomChip/CustomChip.types';

export interface ChipsListProps {
  chips: CustomChipProps[];
  gap: number;
  gradient?: CustomChipProps['gradient'];
}
