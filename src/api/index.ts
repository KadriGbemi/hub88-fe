import { gql } from '@apollo/client';

export const GET_ALL_COUNTRIES = gql`
  query GetCountries {
    countries {
      name,
      code
    }
  }
`;

export const GET_COUNTRIES_BY_CODE = gql`
  query GetCountries($code: String) {
    countries(filter: { code: { eq: $code }}){
      name,
      code
    }
  }
`;