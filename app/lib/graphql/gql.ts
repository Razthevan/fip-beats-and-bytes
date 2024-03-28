/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetWebRadios {\n    brand(id: FIP) {\n      id\n      title\n      baseline\n      description\n      websiteUrl\n      liveStream\n      playerUrl\n      webRadios {\n        id\n        title\n        description\n        playerUrl\n      }\n    }\n  }\n": types.GetWebRadiosDocument,
    "\n  query GetTrack($station: StationsEnum!) {\n    live(station: $station) {\n      song {\n        start\n        end\n        track {\n          title\n          mainArtists\n        }\n      }\n    }\n  }\n": types.GetTrackDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetWebRadios {\n    brand(id: FIP) {\n      id\n      title\n      baseline\n      description\n      websiteUrl\n      liveStream\n      playerUrl\n      webRadios {\n        id\n        title\n        description\n        playerUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetWebRadios {\n    brand(id: FIP) {\n      id\n      title\n      baseline\n      description\n      websiteUrl\n      liveStream\n      playerUrl\n      webRadios {\n        id\n        title\n        description\n        playerUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTrack($station: StationsEnum!) {\n    live(station: $station) {\n      song {\n        start\n        end\n        track {\n          title\n          mainArtists\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTrack($station: StationsEnum!) {\n    live(station: $station) {\n      song {\n        start\n        end\n        track {\n          title\n          mainArtists\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;