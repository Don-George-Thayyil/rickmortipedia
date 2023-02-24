import { useQuery, gql } from "@apollo/client";

const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      name
      air_date
      characters {
        name
        id
      }
    }
  }
`;

const useEpisode = (id) => {
  const { error, data, loading } = useQuery(GET_EPISODE, {
    variables: {
      id: id,
    },
  });
  return { error, data, loading };
};

export default useEpisode;
