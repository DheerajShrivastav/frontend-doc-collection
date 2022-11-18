# NextJS NFT Marketplace with TheGraph


## 1. Git clone the contracts repo

In it's own terminal / command line, run: 

```
git clone https://github.com/DheerajShrivastav/frontend-doc-collection.git
cd frontend-doc-collection
yarn
```

## 2. Deploy to goerli 

After installing dependencies, deploy your contracts to goerli:

```
yarn hardhat deploy --network goerli
```

## 3. Deploy your subgraph

```
cd ..
git clone https://github.com/DheerajShrivastav/graph-doc-collection.git
cd graph-doc-collection
yarn
```


Then, make a `.env` file and place your temporary query URL into it as .


## 4. Start your UI

Make sure that:
- In your `networkMapping.json` you have an entry for `DocCollection` on the goerli network. 
- You have a `NEXT_PUBLIC_SUBGRAPH_URL` in your `.env` file. 

```
yarn dev
```

