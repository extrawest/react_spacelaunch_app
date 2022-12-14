import type { FC } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouteLink } from 'react-router-dom';

import { AppBar, Container, Link, SvgIcon, Toolbar } from '@mui/material';

import { useEventListener } from '@vladyslav.haiduk_react/shared/hooks';

import { LeftArrowIcon, LogoIcon } from '../../../assets/icons';
import { RoutesObj } from '../../../types/constants';
import { styles } from './Header.styles';
import type { HeaderProps } from './Header.types';

export const Header: FC<HeaderProps> = ({ hasBackHome }) => {
  const { t } = useTranslation();

  const [small, setSmall] = useState(false);

  useEventListener('scroll', () => {
    setSmall(window.scrollY > 100);
  });

  return (
    <AppBar sx={styles.wrapper}>
      <Container>
        <Toolbar sx={styles.content({ small })}>
          {hasBackHome && (
            <Link
              component={RouteLink}
              to={RoutesObj.Home}
              variant="subtitle1"
              underline="none"
              sx={styles.homeLink}
            >
              <LeftArrowIcon />
              {t('back_home')}
            </Link>
          )}

          <SvgIcon
            sx={styles.logo({
              centered: !hasBackHome,
              small,
            })}
          >
            <LogoIcon />
          </SvgIcon>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
