import { useTranslation } from 'react-i18next';

import { Container, SvgIcon, Typography } from '@mui/material';

import { LogoIcon } from '../../../assets/icons';
import { styles } from './Footer.styles';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container
      component="footer"
      sx={styles.container}
    >
      <SvgIcon sx={styles.logo}>
        <LogoIcon />
      </SvgIcon>

      <Typography variant="body2">
        {t('copyright', { year: new Date().getFullYear() })}
      </Typography>
    </Container>
  );
};
