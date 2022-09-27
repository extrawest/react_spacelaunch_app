import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouteLink } from 'react-router-dom';

import { AppBar, Container, Link, SvgIcon, Toolbar } from '@mui/material';

import { LeftArrowIcon, LogoIcon } from '../../../assets/icons';
import { RoutesEnum } from '../../../types/enums';
import { styles } from './Header.styles';
import type { HeaderProps } from './Header.types';

export const Header: FC<HeaderProps> = ({ hasBackHome }) => {
  const { t } = useTranslation();

  return (
    <AppBar sx={styles.wrapper}>
      <Container>
        <Toolbar sx={styles.content}>
          {hasBackHome && (
            <Link
              component={RouteLink}
              to={RoutesEnum.Home}
              variant="subtitle1"
              underline="none"
              sx={styles.homeLink}
            >
              <SvgIcon>
                <LeftArrowIcon />
              </SvgIcon>
              {t('back_home')}
            </Link>
          )}

          <SvgIcon
            sx={styles.logo({
              centered: !hasBackHome,
            })}
          >
            <LogoIcon />
          </SvgIcon>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
