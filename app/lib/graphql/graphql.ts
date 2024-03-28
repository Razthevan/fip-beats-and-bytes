/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/**  A blank step is a step without diffusion */
export type BlankStep = Step & {
  __typename?: 'BlankStep';
  /**  Step within the current step */
  children?: Maybe<Array<Maybe<Step>>>;
  /**  End time of the step */
  end?: Maybe<Scalars['Int']['output']>;
  /**  The unique identifier of a step */
  id: Scalars['ID']['output'];
  /**  Start time of the step */
  start?: Maybe<Scalars['Int']['output']>;
  /**  Step's title */
  title?: Maybe<Scalars['String']['output']>;
};

/**  A Brand is a web or broadcast radio station.  */
export type Brand = {
  __typename?: 'Brand';
  /**  Brand's baseline */
  baseline?: Maybe<Scalars['String']['output']>;
  /**  Brand's description */
  description?: Maybe<Scalars['String']['output']>;
  /**  The unique identifier of a brand  */
  id: Scalars['ID']['output'];
  /**  live stream */
  liveStream?: Maybe<Scalars['String']['output']>;
  /**  List of available local radios */
  localRadios?: Maybe<Array<Maybe<LocalRadio>>>;
  /**  Player URL */
  playerUrl?: Maybe<Scalars['String']['output']>;
  /**  Brand's title  */
  title: Scalars['String']['output'];
  /**  List of available webradios */
  webRadios?: Maybe<Array<Maybe<WebRadio>>>;
  /**  Brand's website URL */
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

/**  An Diffusion is an occurence of a radio Show on a given Station. */
export type Diffusion = {
  __typename?: 'Diffusion';
  /**  The unique identifier of an diffusion */
  id: Scalars['ID']['output'];
  /**  Diffusion's expiration (expired if the first podcastEpisode is expired) */
  isStreamable?: Maybe<Scalars['Boolean']['output']>;
  /**  Personnalities associates to a Diffusion */
  personalitiesConnection?: Maybe<DiffusionPersonalitiesConnection>;
  /**  List of associated podcats */
  podcastEpisode?: Maybe<PodcastEpisode>;
  /**  Diffusion's publication date (this field can be null if the diffusion has not been published) */
  published_date?: Maybe<Scalars['String']['output']>;
  /**  Show */
  show?: Maybe<Show>;
  /**  Diffusion's standFirst */
  standFirst?: Maybe<Scalars['String']['output']>;
  /**  Diffusion's taxonomies */
  taxonomiesConnection?: Maybe<DiffusionTaxonomiesConnection>;
  /**  Diffusion's title */
  title: Scalars['String']['output'];
  /**  Transcription of the diffusion. This is a experimental feature */
  transcript?: Maybe<Transcript>;
  /**  Website's URL of the Diffusion */
  url?: Maybe<Scalars['String']['output']>;
};

export type DiffusionEdge = {
  __typename?: 'DiffusionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Diffusion>;
};

export type DiffusionPersonalitiesConnection = {
  __typename?: 'DiffusionPersonalitiesConnection';
  edges?: Maybe<Array<Maybe<DiffusionPersonalitiesEdge>>>;
};

export type DiffusionPersonalitiesEdge = {
  __typename?: 'DiffusionPersonalitiesEdge';
  info?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Personality>;
  relation?: Maybe<Scalars['String']['output']>;
};

/**  A diffusion step is a step with an diffusion */
export type DiffusionStep = Step & {
  __typename?: 'DiffusionStep';
  /**  Step within the current step */
  children?: Maybe<Array<Maybe<Step>>>;
  diffusion?: Maybe<Diffusion>;
  /**  End time of the step */
  end?: Maybe<Scalars['Int']['output']>;
  /**  The unique identifier of a step */
  id: Scalars['ID']['output'];
  /**  Start time of the step */
  start?: Maybe<Scalars['Int']['output']>;
};

export type DiffusionTaxonomiesConnection = {
  __typename?: 'DiffusionTaxonomiesConnection';
  edges?: Maybe<Array<Maybe<DiffusionTaxonomiesEdge>>>;
};

export type DiffusionTaxonomiesEdge = {
  __typename?: 'DiffusionTaxonomiesEdge';
  info?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Taxonomy>;
  relation?: Maybe<Scalars['String']['output']>;
};

export type Diffusions = {
  __typename?: 'Diffusions';
  edges?: Maybe<Array<Maybe<DiffusionEdge>>>;
};

/**  Paginated grid wrapper with page info */
export type GridEdge = {
  __typename?: 'GridEdge';
  /**  Cursor for the next page */
  cursor?: Maybe<Scalars['String']['output']>;
  /**  Current Grid page */
  node?: Maybe<GridPage>;
};

/**  Paginated Grid */
export type GridPage = {
  __typename?: 'GridPage';
  /**  Array of grid Step items */
  steps?: Maybe<Array<Maybe<Step>>>;
};

/**  This object contains a show, a program and a song */
export type Live = {
  __typename?: 'Live';
  /**  A station program in show */
  program?: Maybe<Step>;
  /**  A station show */
  show?: Maybe<Step>;
  /**  A station song in program */
  song?: Maybe<TrackStep>;
};

/**  This object contains a local radio: a local radio is a radio covering a restricted geographical area and belongs to a network as France Bleu or FIP.  */
export type LocalRadio = {
  __typename?: 'LocalRadio';
  /**  Local radio's description */
  description?: Maybe<Scalars['String']['output']>;
  /**  The unique identifier of a local radio */
  id: Scalars['ID']['output'];
  /**  live stream */
  liveStream?: Maybe<Scalars['String']['output']>;
  /**  Player URL */
  playerUrl?: Maybe<Scalars['String']['output']>;
  /**  Local radio's title */
  title: Scalars['String']['output'];
};

/**  A Personality is an individual or an organisation. */
export type Personality = {
  __typename?: 'Personality';
  /**  The unique identifier of a personality */
  id: Scalars['ID']['output'];
  /**  Personality's name */
  name: Scalars['String']['output'];
};

/**  An object referencing links to a podcast */
export type Podcast = {
  __typename?: 'Podcast';
  /**  Link to iTunes */
  itunes?: Maybe<Scalars['String']['output']>;
  /**  Link to the RSS stream */
  rss: Scalars['String']['output'];
};

/**  A PodcastEpisode is a media file in a given format / resolution. */
export type PodcastEpisode = {
  __typename?: 'PodcastEpisode';
  /**  PodcastEpisode's creation date */
  created: Scalars['Int']['output'];
  /**  The diffusion associate to the manifestation */
  diffusion?: Maybe<Diffusion>;
  /**  PodcastEpisode's duration */
  duration?: Maybe<Scalars['Int']['output']>;
  /**  The unique identifier of a manifestation */
  id: Scalars['ID']['output'];
  /**  Player's URL for the PodcastEpisode */
  playerUrl?: Maybe<Scalars['String']['output']>;
  /**  PodcastEpisode's title */
  title: Scalars['String']['output'];
  /**  PodcastEpisode's URL */
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /**  Get a specific station */
  brand?: Maybe<Brand>;
  /**  Get the list of stations available */
  brands?: Maybe<Array<Maybe<Brand>>>;
  /**  Get diffusions from specific Station's id with optionnal taxonomies filters */
  diffusions?: Maybe<Diffusions>;
  /**  Get diffusions from specific Show url */
  diffusionsOfShowByUrl?: Maybe<Diffusions>;
  /**  Get the program schedule of a specific station */
  grid?: Maybe<Array<Maybe<Step>>>;
  live?: Maybe<Live>;
  /**  Get a paginated Grid for a specific station */
  paginatedGrid?: Maybe<GridEdge>;
  /**  Get a specific show by ID */
  show?: Maybe<Show>;
  /**  Get a specific show by url */
  showByUrl?: Maybe<Show>;
  /**  Get list of shows for a specific Station */
  shows?: Maybe<Shows>;
  /**  Get a list of taxonomies */
  taxonomies?: Maybe<Taxonomies>;
};


export type QueryBrandArgs = {
  id: StationsEnum;
};


export type QueryDiffusionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  station: StationsEnum;
  subsubthemes?: InputMaybe<Array<Scalars['String']['input']>>;
  subthemes?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  themes?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryDiffusionsOfShowByUrlArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  url: Scalars['String']['input'];
};


export type QueryGridArgs = {
  end?: InputMaybe<Scalars['Int']['input']>;
  includeTracks?: InputMaybe<Scalars['Boolean']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  station: StationsEnum;
};


export type QueryLiveArgs = {
  station: StationsEnum;
};


export type QueryPaginatedGridArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<Scalars['Int']['input']>;
  includeTracks?: InputMaybe<Scalars['Boolean']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  station: StationsEnum;
};


export type QueryShowArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShowByUrlArgs = {
  url: Scalars['String']['input'];
};


export type QueryShowsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  station: StationsEnum;
};


export type QueryTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  paths?: InputMaybe<Array<Scalars['String']['input']>>;
  source?: InputMaybe<TaxonomySourceEnum>;
  types?: InputMaybe<Array<TaxonomyTypeEnum>>;
};

/**  A segment is a part of a whisper transcript  */
export type Segment = {
  __typename?: 'Segment';
  /**  The speaker of the segment  */
  speaker?: Maybe<Scalars['String']['output']>;
  /**  The start time of the segment  */
  start?: Maybe<Scalars['Float']['output']>;
  /**  The text of the segment  */
  text?: Maybe<Scalars['String']['output']>;
  /**  The type of the segment  */
  type?: Maybe<Scalars['String']['output']>;
};

/**  A radio show */
export type Show = {
  __typename?: 'Show';
  /**  Diffusions associates to a Show */
  diffusionsConnection?: Maybe<ShowDiffusionsConnection>;
  /**  The unique identifier of a Show */
  id: Scalars['ID']['output'];
  /**  Personnalities associates to a Show */
  personalitiesConnection?: Maybe<ShowPersonalitiesConnection>;
  /**  Links to the show's podcast */
  podcast?: Maybe<Podcast>;
  /**  Show's standFirst */
  standFirst?: Maybe<Scalars['String']['output']>;
  /**  Taxonomies associates to a Show */
  taxonomiesConnection?: Maybe<ShowTaxonomiesConnection>;
  /**  Show's title */
  title: Scalars['String']['output'];
  /**  Website's URL of the Concept */
  url?: Maybe<Scalars['String']['output']>;
};

export type ShowDiffusionsConnection = {
  __typename?: 'ShowDiffusionsConnection';
  edges?: Maybe<Array<Maybe<ShowDiffusionsEdge>>>;
};

export type ShowDiffusionsEdge = {
  __typename?: 'ShowDiffusionsEdge';
  node?: Maybe<Diffusion>;
};

export type ShowEdge = {
  __typename?: 'ShowEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Show>;
};

export type ShowPersonalitiesConnection = {
  __typename?: 'ShowPersonalitiesConnection';
  edges?: Maybe<Array<Maybe<ShowPersonalitiesEdge>>>;
};

export type ShowPersonalitiesEdge = {
  __typename?: 'ShowPersonalitiesEdge';
  info?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Personality>;
  relation?: Maybe<Scalars['String']['output']>;
};

export type ShowTaxonomiesConnection = {
  __typename?: 'ShowTaxonomiesConnection';
  edges?: Maybe<Array<Maybe<ShowTaxonomiesEdge>>>;
};

export type ShowTaxonomiesEdge = {
  __typename?: 'ShowTaxonomiesEdge';
  info?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Taxonomy>;
  relation?: Maybe<Scalars['String']['output']>;
};

export type Shows = {
  __typename?: 'Shows';
  edges?: Maybe<Array<Maybe<ShowEdge>>>;
};

/** List of Radio France brands, local radios and webradios */
export enum StationsEnum {
  Elsass = 'ELSASS',
  Fip = 'FIP',
  FipBordeaux = 'FIP_BORDEAUX',
  FipElectro = 'FIP_ELECTRO',
  FipGroove = 'FIP_GROOVE',
  FipHipHop = 'FIP_HIP_HOP',
  FipJazz = 'FIP_JAZZ',
  FipMetal = 'FIP_METAL',
  FipNantes = 'FIP_NANTES',
  FipNouveautes = 'FIP_NOUVEAUTES',
  FipPop = 'FIP_POP',
  FipReggae = 'FIP_REGGAE',
  FipRock = 'FIP_ROCK',
  FipStrasbourg = 'FIP_STRASBOURG',
  FipWorld = 'FIP_WORLD',
  Formation = 'FORMATION',
  Francebleu = 'FRANCEBLEU',
  FrancebleuAlsace = 'FRANCEBLEU_ALSACE',
  FrancebleuArmorique = 'FRANCEBLEU_ARMORIQUE',
  FrancebleuAuxerre = 'FRANCEBLEU_AUXERRE',
  FrancebleuAzur = 'FRANCEBLEU_AZUR',
  FrancebleuBearn = 'FRANCEBLEU_BEARN',
  FrancebleuBelfortMontbeliard = 'FRANCEBLEU_BELFORT_MONTBELIARD',
  FrancebleuBerry = 'FRANCEBLEU_BERRY',
  FrancebleuBesancon = 'FRANCEBLEU_BESANCON',
  FrancebleuBourgogne = 'FRANCEBLEU_BOURGOGNE',
  FrancebleuBreizhIzel = 'FRANCEBLEU_BREIZH_IZEL',
  FrancebleuChampagneArdenne = 'FRANCEBLEU_CHAMPAGNE_ARDENNE',
  FrancebleuCotentin = 'FRANCEBLEU_COTENTIN',
  FrancebleuCreuse = 'FRANCEBLEU_CREUSE',
  FrancebleuDromeArdeche = 'FRANCEBLEU_DROME_ARDECHE',
  FrancebleuGardLozere = 'FRANCEBLEU_GARD_LOZERE',
  FrancebleuGascogne = 'FRANCEBLEU_GASCOGNE',
  FrancebleuGironde = 'FRANCEBLEU_GIRONDE',
  FrancebleuHerault = 'FRANCEBLEU_HERAULT',
  FrancebleuIsere = 'FRANCEBLEU_ISERE',
  FrancebleuLaRochelle = 'FRANCEBLEU_LA_ROCHELLE',
  FrancebleuLimousin = 'FRANCEBLEU_LIMOUSIN',
  FrancebleuLoireOcean = 'FRANCEBLEU_LOIRE_OCEAN',
  FrancebleuLorraineNord = 'FRANCEBLEU_LORRAINE_NORD',
  FrancebleuMaine = 'FRANCEBLEU_MAINE',
  FrancebleuMayenne = 'FRANCEBLEU_MAYENNE',
  FrancebleuNord = 'FRANCEBLEU_NORD',
  FrancebleuNormandieCaen = 'FRANCEBLEU_NORMANDIE_CAEN',
  FrancebleuNormandieRouen = 'FRANCEBLEU_NORMANDIE_ROUEN',
  FrancebleuOrleans = 'FRANCEBLEU_ORLEANS',
  FrancebleuParis = 'FRANCEBLEU_PARIS',
  FrancebleuPaysBasque = 'FRANCEBLEU_PAYS_BASQUE',
  FrancebleuPaysDeSavoie = 'FRANCEBLEU_PAYS_DE_SAVOIE',
  FrancebleuPaysDAuvergne = 'FRANCEBLEU_PAYS_D_AUVERGNE',
  FrancebleuPerigord = 'FRANCEBLEU_PERIGORD',
  FrancebleuPicardie = 'FRANCEBLEU_PICARDIE',
  FrancebleuPoitou = 'FRANCEBLEU_POITOU',
  FrancebleuProvence = 'FRANCEBLEU_PROVENCE',
  FrancebleuRcfm = 'FRANCEBLEU_RCFM',
  FrancebleuRoussillon = 'FRANCEBLEU_ROUSSILLON',
  FrancebleuSaintEtienneLoire = 'FRANCEBLEU_SAINT_ETIENNE_LOIRE',
  FrancebleuSurLorraine = 'FRANCEBLEU_SUR_LORRAINE',
  FrancebleuToulouse = 'FRANCEBLEU_TOULOUSE',
  FrancebleuTouraine = 'FRANCEBLEU_TOURAINE',
  FrancebleuVaucluse = 'FRANCEBLEU_VAUCLUSE',
  Franceculture = 'FRANCECULTURE',
  Franceinfo = 'FRANCEINFO',
  Franceinter = 'FRANCEINTER',
  Francemusic = 'FRANCEMUSIC',
  Francemusique = 'FRANCEMUSIQUE',
  FrancemusiqueClassiqueEasy = 'FRANCEMUSIQUE_CLASSIQUE_EASY',
  FrancemusiqueClassiquePlus = 'FRANCEMUSIQUE_CLASSIQUE_PLUS',
  FrancemusiqueConcertRf = 'FRANCEMUSIQUE_CONCERT_RF',
  FrancemusiqueLaBaroque = 'FRANCEMUSIQUE_LA_BAROQUE',
  FrancemusiqueLaBo = 'FRANCEMUSIQUE_LA_BO',
  FrancemusiqueLaContemporaine = 'FRANCEMUSIQUE_LA_CONTEMPORAINE',
  FrancemusiqueLaJazz = 'FRANCEMUSIQUE_LA_JAZZ',
  FrancemusiqueOcoraMonde = 'FRANCEMUSIQUE_OCORA_MONDE',
  FrancemusiqueOpera = 'FRANCEMUSIQUE_OPERA',
  Mouv = 'MOUV',
  Mouv_100Mix = 'MOUV_100MIX',
  MouvClassics = 'MOUV_CLASSICS',
  MouvDancehall = 'MOUV_DANCEHALL',
  MouvRapfr = 'MOUV_RAPFR',
  MouvRapus = 'MOUV_RAPUS',
  MouvRnb = 'MOUV_RNB'
}

/**  A Step represents a period of time on a given radio Station. */
export type Step = {
  /**  End time of the step */
  end?: Maybe<Scalars['Int']['output']>;
  /**  The unique identifier of a step */
  id: Scalars['ID']['output'];
  /**  Start time of the step */
  start?: Maybe<Scalars['Int']['output']>;
};

export type Taxonomies = {
  __typename?: 'Taxonomies';
  edges?: Maybe<Array<Maybe<TaxonomyEdge>>>;
};

/**  A taxonomy can be a tag, a category... */
export type Taxonomy = {
  __typename?: 'Taxonomy';
  /**  Taxonomy's ID */
  id: Scalars['ID']['output'];
  /**  Taxonomy's path */
  path: Scalars['String']['output'];
  /**  Taxonomy's standFirst */
  standFirst?: Maybe<Scalars['String']['output']>;
  /**  Taxonomy's title */
  title?: Maybe<Scalars['String']['output']>;
  /**  Taxonomy's type */
  type?: Maybe<Scalars['String']['output']>;
};

export type TaxonomyEdge = {
  __typename?: 'TaxonomyEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Taxonomy>;
};

export enum TaxonomySourceEnum {
  Francebleu = 'FRANCEBLEU',
  Unified = 'UNIFIED'
}

export enum TaxonomyTypeEnum {
  Tag = 'TAG',
  Theme = 'THEME'
}

/**  A Track represents an audio track. */
export type Track = {
  __typename?: 'Track';
  /**  Track's album title */
  albumTitle?: Maybe<Scalars['String']['output']>;
  /**  Track's authors */
  authors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**  Track's composers */
  composers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**  Track's disc Number */
  discNumber?: Maybe<Scalars['Int']['output']>;
  /**  Track's ID */
  id: Scalars['ID']['output'];
  /**  Track's artists */
  label?: Maybe<Scalars['String']['output']>;
  /**  Track's main artists */
  mainArtists?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**  Track's performers */
  performers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**  Track's production date */
  productionDate?: Maybe<Scalars['Int']['output']>;
  /**  Track's title */
  title: Scalars['String']['output'];
  /**  Track's number */
  trackNumber?: Maybe<Scalars['Int']['output']>;
};

/**  A track step is a step with a song/track */
export type TrackStep = Step & {
  __typename?: 'TrackStep';
  /**  End time of the step */
  end?: Maybe<Scalars['Int']['output']>;
  /**  The unique identifier of a step */
  id: Scalars['ID']['output'];
  /**  Start time of the step */
  start?: Maybe<Scalars['Int']['output']>;
  /**  Song */
  track?: Maybe<Track>;
};

/**  A transcript is a speech to text representation of a manifestation  */
export type Transcript = {
  __typename?: 'Transcript';
  /**  The magnetotheque ID of the transcript  */
  magnetothequeId: Scalars['String']['output'];
  /**  The segments associated with the transcript provided by the speech to text service */
  segments?: Maybe<Array<Maybe<Segment>>>;
  /**  The transcript text without any formatting  */
  text?: Maybe<Scalars['String']['output']>;
};

/**  This object contains a webradio: a webradio is a continuous stream of programs defined by the grid.  */
export type WebRadio = {
  __typename?: 'WebRadio';
  /**  Webradio's description */
  description?: Maybe<Scalars['String']['output']>;
  /**  The unique identifier of a webradio */
  id: Scalars['ID']['output'];
  /**  live stream */
  liveStream?: Maybe<Scalars['String']['output']>;
  /**  Player URL */
  playerUrl?: Maybe<Scalars['String']['output']>;
  /**  Webradio's title */
  title: Scalars['String']['output'];
};

export type GetWebRadiosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWebRadiosQuery = { __typename?: 'Query', brand?: { __typename?: 'Brand', id: string, title: string, baseline?: string | null, description?: string | null, websiteUrl?: string | null, liveStream?: string | null, playerUrl?: string | null, webRadios?: Array<{ __typename?: 'WebRadio', id: string, title: string, description?: string | null, playerUrl?: string | null } | null> | null } | null };

export type GetTrackQueryVariables = Exact<{
  station: StationsEnum;
}>;


export type GetTrackQuery = { __typename?: 'Query', live?: { __typename?: 'Live', song?: { __typename?: 'TrackStep', start?: number | null, end?: number | null, track?: { __typename?: 'Track', title: string, mainArtists?: Array<string | null> | null } | null } | null } | null };


export const GetWebRadiosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWebRadios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"FIP"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"baseline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"liveStream"}},{"kind":"Field","name":{"kind":"Name","value":"playerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"webRadios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"playerUrl"}}]}}]}}]}}]} as unknown as DocumentNode<GetWebRadiosQuery, GetWebRadiosQueryVariables>;
export const GetTrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTrack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"station"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StationsEnum"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"live"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"station"},"value":{"kind":"Variable","name":{"kind":"Name","value":"station"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"song"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"mainArtists"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTrackQuery, GetTrackQueryVariables>;