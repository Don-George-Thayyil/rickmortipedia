import { useQuery, gql } from "@apollo/client";

const GET_EPISODES = gql`
  query GetName($name: String!, $page: Int!) {
    episodes(filter: { name: $name }, page: $page) {
      info {
        pages
      }
      results {
        name
        air_date
        id
      }
    }
  }
`;

const useEpisodes = (name, page) => {
  const { error, data, loading } = useQuery(GET_EPISODES, {
    variables: { name: name, page: page },
  });
  return { error, data, loading };
};

export default useEpisodes;
