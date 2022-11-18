import { gql } from "@apollo/client"

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
export default GET_ACTIVE_ITEMS
