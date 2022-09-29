import type { RocketDTO } from '../../../types/dto';
import { api } from '../api';

const rocketsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRocketById: build.query<RocketDTO, RocketDTO['id']>({
      query: (id) => `config/launcher/${id}`,
    }),
  }),
});

export const { useGetRocketByIdQuery } = rocketsApi;
