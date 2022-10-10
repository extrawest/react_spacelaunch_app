import type { FC } from 'react';
import { useMemo, useRef } from 'react';

import { useMediaQuery, useTheme } from '@mui/material';
import { Button, Stack, Typography } from '@mui/material';

import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  boolGuard,
  undefinedGuard,
} from '@vladyslav.haiduk_react/shared/types';
import { range } from '@vladyslav.haiduk_react/shared/utils';

import { LeftArrowIcon, RightArrowIcon } from '../../../assets/icons';
import { EventCard } from './EventCard/EventCard';
import { EventCardSkeleton } from './EventCardSkeleton/EventCardSkeleton';
import { styles } from './EventsCarousel.styles';
import type { EventsCarouselProps } from './EventsCarousel.types';

export const EventsCarousel: FC<EventsCarouselProps> = ({
  title,
  events,
  loading,
}) => {
  const theme = useTheme();
  const widthLessLg = useMediaQuery(theme.breakpoints.down('lg'));
  const widthLessMd = useMediaQuery(theme.breakpoints.down('md'));

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const slidesPerView = useMemo(() => {
    if (widthLessMd) return 1;
    if (widthLessLg) return 2;
    return 3;
  }, [widthLessLg, widthLessMd]);

  const hiddenNavigation = loading || !events || events.length <= slidesPerView;

  return (
    <Stack spacing={5}>
      <Stack
        direction="row"
        sx={styles.head}
      >
        <Typography variant="h2">{title}</Typography>
        <Stack
          direction="row"
          spacing={{ md: 3.75, sm: 2.25, xs: 1 }}
          sx={styles.nav({ hidden: hiddenNavigation })}
        >
          <Button
            ref={prevRef}
            sx={styles.navButton}
          >
            <LeftArrowIcon />
          </Button>
          <Button
            ref={nextRef}
            sx={styles.navButton}
          >
            <RightArrowIcon />
          </Button>
        </Stack>
      </Stack>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        onInit={(swiper) => {
          if (
            !undefinedGuard(swiper.params.navigation) &&
            !boolGuard(swiper.params.navigation)
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {loading
          ? range(slidesPerView).map((i) => (
              <SwiperSlide key={i}>
                <EventCardSkeleton />
              </SwiperSlide>
            ))
          : events?.map((event) => (
              <SwiperSlide key={event.id}>
                <EventCard event={event} />
              </SwiperSlide>
            ))}
      </Swiper>
    </Stack>
  );
};
