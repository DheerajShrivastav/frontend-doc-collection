import styles from "../styles/Home.module.css"
import { useMoralisQuery, useMoralis } from "react-moralis"
import DOCBox from "../components/DOCBox"
import networkMapping from "../constants/networkMapping.json"
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries"
import { useQuery } from "@apollo/client"

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "31337" 
    const collectionAddress = networkMapping[chainString].DocCollection[1]

    const { loading, error, data: uploadedDocs } = useQuery(GET_ACTIVE_ITEMS)

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Recently uploaded</h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled ? (
                    loading || !uploadedDocs ? (
                        <div>Loading...</div>
                    ) : (
                        uploadedDocs.activeItems.map((doc) => {
                            console.log(doc)
                            const { title, docAddress, tokenId, owner } = doc
                            return (
                                <DOCBox
                                    title={title}
                                    docAddress={docAddress}
                                    tokenId={tokenId}
                                    collectionAddress={collectionAddress}
                                    owner={owner}
                                    key={`${docAddress}${tokenId}`}
                                />
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
