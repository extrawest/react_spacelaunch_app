import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import type { FC } from 'react';
import { useMemo } from 'react';

import { Box } from '@mui/material';

import { Spinner } from '../Spinner/Spinner';
import { styles } from './Map.styles';
import type { MapProps } from './Map.types';

export const Map: FC<MapProps> = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NX_GOOGLE_MAPS_API_KEY as string,
  });

  const center = useMemo(() => ({ lat, lng }), [lat, lng]);

  return (
    <Box sx={styles.wrapper}>
      {isLoaded ? (
        <GoogleMap
          zoom={5}
          center={center}
          options={{
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
          }}
        >
          <MarkerF position={center} />
        </GoogleMap>
      ) : (
        <Spinner />
      )}
    </Box>
  );
};
