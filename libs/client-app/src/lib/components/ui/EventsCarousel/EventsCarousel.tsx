import type { FC } from 'react';
import { useRef } from 'react';

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

const SLIDES_PER_VIEW = 3;

export const EventsCarousel: FC<EventsCarouselProps> = ({
  title,
  events,
  loading,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const showNavigation =
    !loading && events?.length && events.length > SLIDES_PER_VIEW;

  return (
    <Stack spacing={5}>
      <Stack
        direction="row"
        sx={styles.head}
      >
        <Typography variant="h2">{title}</Typography>
        {showNavigation && (
          <Stack
            direction="row"
            spacing={3.75}
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
        )}
      </Stack>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={SLIDES_PER_VIEW}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            !boolGuard(swiper.params.navigation) &&
            !undefinedGuard(swiper.params.navigation)
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {loading
          ? range(SLIDES_PER_VIEW).map((i) => (
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
