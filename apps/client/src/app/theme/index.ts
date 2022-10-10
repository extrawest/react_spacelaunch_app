import { createTheme } from '@mui/material';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500-italic.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import { FontsEnum } from '@vladyslav.haiduk_react/client-app';
import {
  joinFonts,
  pctToFloat,
  pxToRem,
} from '@vladyslav.haiduk_react/shared/utils';

export const theme = createTheme({
  typography: {
    fontFamily: joinFonts(
      FontsEnum.Montserrat,
      FontsEnum.Roboto,
      FontsEnum.Default
    ),
  },
  palette: {
    primary: {
      main: '#4A00E0',
    },
    secondary: {
      main: '#8E2DE2',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#C0C0C0',
      colorful: '#F1EBFF',
    },
    background: {
      paper: '#1C2056',
      default: '#181B48',
    },
  },
});

theme.typography.h1 = {
  fontFamily: joinFonts(FontsEnum.Montserrat, FontsEnum.Default),
  fontSize: pxToRem(76),
  fontWeight: 800,
  fontStyle: 'normal',
  lineHeight: pctToFloat(121),
  color: theme.palette.text.colorful,
  [theme.breakpoints.down('lg')]: {
    fontSize: pxToRem(68),
  },
  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(56),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: pxToRem(48),
  },
};

theme.typography.h2 = {
  fontFamily: joinFonts(FontsEnum.Montserrat, FontsEnum.Default),
  fontSize: pxToRem(54),
  fontWeight: 800,
  fontStyle: 'normal',
  lineHeight: pctToFloat(119),
  color: theme.palette.text.colorful,
  [theme.breakpoints.down('lg')]: {
    fontSize: pxToRem(46),
  },
  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(38),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: pxToRem(30),
  },
};

theme.typography.subtitle1 = {
  fontFamily: joinFonts(FontsEnum.Montserrat, FontsEnum.Default),
  fontSize: pxToRem(26),
  fontWeight: 700,
  fontStyle: 'normal',
  lineHeight: pctToFloat(146),
  color: theme.palette.text.colorful,
  [theme.breakpoints.down('lg')]: {
    fontSize: pxToRem(24),
  },
  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(26),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: pxToRem(22),
  },
};

theme.typography.body1 = {
  fontFamily: joinFonts(FontsEnum.Roboto, FontsEnum.Default),
  fontSize: pxToRem(17),
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: pctToFloat(165),
  color: theme.palette.text.primary,
  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(16),
  },
};

theme.typography.body2 = {
  fontFamily: joinFonts(FontsEnum.Roboto, FontsEnum.Default),
  fontSize: pxToRem(17),
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: pctToFloat(165),
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(16),
  },
};

theme.typography.button = {
  fontFamily: joinFonts(FontsEnum.Montserrat, FontsEnum.Default),
  fontSize: pxToRem(20),
  fontWeight: 700,
  fontStyle: 'normal',
  lineHeight: pctToFloat(100),
  color: theme.palette.text.colorful,
  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(18),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: pxToRem(16),
  },
};

theme.typography.caption = {
  fontFamily: joinFonts(FontsEnum.Montserrat, FontsEnum.Default),
  fontSize: pxToRem(18),
  fontWeight: 500,
  fontStyle: 'italic',
  lineHeight: pctToFloat(100),
  color: theme.palette.text.colorful,
  textTransform: 'uppercase',
  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(16),
  },
};

theme.components = {
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: `${theme.spacing(1.25)} !important`,
        paddingRight: `${theme.spacing(1.25)} !important`,
      },
    },
  },
};
