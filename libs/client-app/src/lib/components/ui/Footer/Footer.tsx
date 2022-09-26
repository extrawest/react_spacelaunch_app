import { useTranslation } from 'react-i18next';

import { Container, SvgIcon, Typography } from '@mui/material';

import { LogoSvgImage } from '../../../assets/images';
import { styles } from './Footer.styles';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container
      component="footer"
      sx={styles.container}
    >
      <SvgIcon sx={styles.logo}>
        <LogoSvgImage />
      </SvgIcon>

      <Typography variant="body2">{t('copyright')}</Typography>
    </Container>
  );
};
