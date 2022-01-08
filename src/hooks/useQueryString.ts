import { useLocation } from 'react-router-dom';
import queryString, { ParsedQuery } from 'query-string';

export const useQueryString = <T extends ParsedQuery>() => {
  const location = useLocation();
  return queryString.parse(location.search) as T;
};
