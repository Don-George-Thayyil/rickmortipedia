import { useQuery, gql } from "@apollo/client";


const GET_CHARACTERS = gql`
query SearchCharacters($name:String!,$page:Int!,$gender:String!,$status:String!,$species:String!) {
  characters(filter: { name:$name, gender:$gender, status:$status, species:$species }, page:$page ) {
    info{
      pages
    }
    results {
      name
      image
      id
    }
  }
}
`;





const useCharacters = (name,page,gender,status,species) => {
  const { error, data, loading } = useQuery(GET_CHARACTERS,{variables:{name:name,page:page,gender:gender,status:status,species:species}});
  return { error, data, loading };
};



export default useCharacters;
