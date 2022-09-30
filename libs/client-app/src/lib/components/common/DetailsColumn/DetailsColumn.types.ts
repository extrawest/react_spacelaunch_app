import type { ReactNode } from 'react';

export interface DetailsColumnProps {
  icon: ReactNode;
  title: string;
  details: DetailParams[];
}

export interface DetailParams {
  label: string;
  value: string | number;
}
