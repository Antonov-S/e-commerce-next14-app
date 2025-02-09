import algoliasearch from "algoliasearch";

console.log("Algolia App ID:", process.env.NEXT_PUBLIC_ALGOLIA_ID);
console.log("Algolia Search Key:", process.env.NEXT_PUBLIC_ALGOLIA_SEARCH);

export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH!
);
