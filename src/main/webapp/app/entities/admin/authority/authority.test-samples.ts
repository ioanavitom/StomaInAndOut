import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'c55a0d74-5d03-45f8-b92d-625c54583ad6',
};

export const sampleWithPartialData: IAuthority = {
  name: '828651bf-d94e-41d7-947b-03d87fe6f403',
};

export const sampleWithFullData: IAuthority = {
  name: 'c976abe5-897d-4d6f-8219-d458f2258d7a',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
