import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id:$id) {
        name
        image
        gender
        status
        origin{
          name
        }
        species
        location{
          name
        }
        episode{
          name
          id
        }
    }
  }
`;

const useCharacter = (id) => {
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: {
        id:id
    }
  });
  return { error, data, loading };
};

export default useCharacter;
