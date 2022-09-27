import type { SxProps, Theme } from '@mui/material';

export type StylesWithOptions<T> = (options: T) => SxProps;

export type StylesWithOptionsAndTheme<T> = (options: T) => SxProps<Theme>;
