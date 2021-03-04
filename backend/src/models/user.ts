import { Model } from './model';

export interface GeoLocation {
  lat: number;
  lng: number;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User extends Model {
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
