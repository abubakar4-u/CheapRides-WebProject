import {RIDES_URL} from '../constants';
import {apiSlice} from './apiSlice';

export const ridesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRides: builder.query({
          query: () => ({
            url: RIDES_URL,
          }),
          keepUnusedDataFor: 5  
        })
    }), 
});

export const { useGetRidesQuery } = ridesApiSlice;
