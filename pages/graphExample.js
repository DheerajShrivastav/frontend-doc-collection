import { useQuery, gql } from "@apollo/client";

const GET_ACTIVE_ITEMS = gql`
{
    activeItems(first: 5) {
        id
        owner
        docAddress
        tokenId
        title
      }
}
`
export default function GraphExample(){
    const { loading, error, data } = useQuery(GET_ACTIVE_ITEMS)
    console.log(data)
    return <div>Hi</div>
}