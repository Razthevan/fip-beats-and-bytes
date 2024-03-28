import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Step: ( BlankStep ) | ( DiffusionStep ) | ( TrackStep );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BlankStep: ResolverTypeWrapper<BlankStep>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Brand: ResolverTypeWrapper<Brand>;
  Diffusion: ResolverTypeWrapper<Diffusion>;
  DiffusionEdge: ResolverTypeWrapper<DiffusionEdge>;
  DiffusionPersonalitiesConnection: ResolverTypeWrapper<DiffusionPersonalitiesConnection>;
  DiffusionPersonalitiesEdge: ResolverTypeWrapper<DiffusionPersonalitiesEdge>;
  DiffusionStep: ResolverTypeWrapper<DiffusionStep>;
  DiffusionTaxonomiesConnection: ResolverTypeWrapper<DiffusionTaxonomiesConnection>;
  DiffusionTaxonomiesEdge: ResolverTypeWrapper<DiffusionTaxonomiesEdge>;
  Diffusions: ResolverTypeWrapper<Diffusions>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GridEdge: ResolverTypeWrapper<GridEdge>;
  GridPage: ResolverTypeWrapper<GridPage>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Live: ResolverTypeWrapper<Live>;
  LocalRadio: ResolverTypeWrapper<LocalRadio>;
  Personality: ResolverTypeWrapper<Personality>;
  Podcast: ResolverTypeWrapper<Podcast>;
  PodcastEpisode: ResolverTypeWrapper<PodcastEpisode>;
  Query: ResolverTypeWrapper<{}>;
  Segment: ResolverTypeWrapper<Segment>;
  Show: ResolverTypeWrapper<Show>;
  ShowDiffusionsConnection: ResolverTypeWrapper<ShowDiffusionsConnection>;
  ShowDiffusionsEdge: ResolverTypeWrapper<ShowDiffusionsEdge>;
  ShowEdge: ResolverTypeWrapper<ShowEdge>;
  ShowPersonalitiesConnection: ResolverTypeWrapper<ShowPersonalitiesConnection>;
  ShowPersonalitiesEdge: ResolverTypeWrapper<ShowPersonalitiesEdge>;
  ShowTaxonomiesConnection: ResolverTypeWrapper<ShowTaxonomiesConnection>;
  ShowTaxonomiesEdge: ResolverTypeWrapper<ShowTaxonomiesEdge>;
  Shows: ResolverTypeWrapper<Shows>;
  StationsEnum: StationsEnum;
  Step: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Step']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Taxonomies: ResolverTypeWrapper<Taxonomies>;
  Taxonomy: ResolverTypeWrapper<Taxonomy>;
  TaxonomyEdge: ResolverTypeWrapper<TaxonomyEdge>;
  TaxonomySourceEnum: TaxonomySourceEnum;
  TaxonomyTypeEnum: TaxonomyTypeEnum;
  Track: ResolverTypeWrapper<Track>;
  TrackStep: ResolverTypeWrapper<TrackStep>;
  Transcript: ResolverTypeWrapper<Transcript>;
  WebRadio: ResolverTypeWrapper<WebRadio>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BlankStep: BlankStep;
  Boolean: Scalars['Boolean']['output'];
  Brand: Brand;
  Diffusion: Diffusion;
  DiffusionEdge: DiffusionEdge;
  DiffusionPersonalitiesConnection: DiffusionPersonalitiesConnection;
  DiffusionPersonalitiesEdge: DiffusionPersonalitiesEdge;
  DiffusionStep: DiffusionStep;
  DiffusionTaxonomiesConnection: DiffusionTaxonomiesConnection;
  DiffusionTaxonomiesEdge: DiffusionTaxonomiesEdge;
  Diffusions: Diffusions;
  Float: Scalars['Float']['output'];
  GridEdge: GridEdge;
  GridPage: GridPage;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Live: Live;
  LocalRadio: LocalRadio;
  Personality: Personality;
  Podcast: Podcast;
  PodcastEpisode: PodcastEpisode;
  Query: {};
  Segment: Segment;
  Show: Show;
  ShowDiffusionsConnection: ShowDiffusionsConnection;
  ShowDiffusionsEdge: ShowDiffusionsEdge;
  ShowEdge: ShowEdge;
  ShowPersonalitiesConnection: ShowPersonalitiesConnection;
  ShowPersonalitiesEdge: ShowPersonalitiesEdge;
  ShowTaxonomiesConnection: ShowTaxonomiesConnection;
  ShowTaxonomiesEdge: ShowTaxonomiesEdge;
  Shows: Shows;
  Step: ResolversInterfaceTypes<ResolversParentTypes>['Step'];
  String: Scalars['String']['output'];
  Taxonomies: Taxonomies;
  Taxonomy: Taxonomy;
  TaxonomyEdge: TaxonomyEdge;
  Track: Track;
  TrackStep: TrackStep;
  Transcript: Transcript;
  WebRadio: WebRadio;
};

export type BlankStepResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlankStep'] = ResolversParentTypes['BlankStep']> = {
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['Step']>>>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrandResolvers<ContextType = any, ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']> = {
  baseline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liveStream?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localRadios?: Resolver<Maybe<Array<Maybe<ResolversTypes['LocalRadio']>>>, ParentType, ContextType>;
  playerUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  webRadios?: Resolver<Maybe<Array<Maybe<ResolversTypes['WebRadio']>>>, ParentType, ContextType>;
  websiteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiffusionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Diffusion'] = ResolversParentTypes['Diffusion']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isStreamable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  personalitiesConnection?: Resolver<Maybe<ResolversTypes['DiffusionPersonalitiesConnection']>, ParentType, ContextType>;
  podcastEpisode?: Resolver<Maybe<ResolversTypes['PodcastEpisode']>, ParentType, ContextType>;
  published_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  show?: Resolver<Maybe<ResolversTypes['Show']>, ParentType, ContextType>;
  standFirst?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taxonomiesConnection?: Resolver<Maybe<ResolversTypes['DiffusionTaxonomiesConnection']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transcript?: Resolver<Maybe<ResolversTypes['Transcript']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiffusionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiffusionEdge'] = ResolversParentTypes['DiffusionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Diffusion']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiffusionPersonalitiesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiffusionPersonalitiesConnection'] = ResolversParentTypes['DiffusionPersonalitiesConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['DiffusionPersonalitiesEdge']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiffusionPersonalitiesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiffusionPersonalitiesEdge'] = ResolversParentTypes['DiffusionPersonalitiesEdge']> = {
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Personality']>, ParentType, ContextType>;
  relation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiffusionStepResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiffusionStep'] = ResolversParentTypes['DiffusionStep']> = {
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['Step']>>>, ParentType, ContextType>;
  diffusion?: Resolver<Maybe<ResolversTypes['Diffusion']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiffusionTaxonomiesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiffusionTaxonomiesConnection'] = ResolversParentTypes['DiffusionTaxonomiesConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['DiffusionTaxonomiesEdge']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiffusionTaxonomiesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiffusionTaxonomiesEdge'] = ResolversParentTypes['DiffusionTaxonomiesEdge']> = {
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Taxonomy']>, ParentType, ContextType>;
  relation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiffusionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Diffusions'] = ResolversParentTypes['Diffusions']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['DiffusionEdge']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GridEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GridEdge'] = ResolversParentTypes['GridEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['GridPage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GridPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['GridPage'] = ResolversParentTypes['GridPage']> = {
  steps?: Resolver<Maybe<Array<Maybe<ResolversTypes['Step']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveResolvers<ContextType = any, ParentType extends ResolversParentTypes['Live'] = ResolversParentTypes['Live']> = {
  program?: Resolver<Maybe<ResolversTypes['Step']>, ParentType, ContextType>;
  show?: Resolver<Maybe<ResolversTypes['Step']>, ParentType, ContextType>;
  song?: Resolver<Maybe<ResolversTypes['TrackStep']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocalRadioResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocalRadio'] = ResolversParentTypes['LocalRadio']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liveStream?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonalityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Personality'] = ResolversParentTypes['Personality']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PodcastResolvers<ContextType = any, ParentType extends ResolversParentTypes['Podcast'] = ResolversParentTypes['Podcast']> = {
  itunes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rss?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PodcastEpisodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PodcastEpisode'] = ResolversParentTypes['PodcastEpisode']> = {
  created?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  diffusion?: Resolver<Maybe<ResolversTypes['Diffusion']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  playerUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<QueryBrandArgs, 'id'>>;
  brands?: Resolver<Maybe<Array<Maybe<ResolversTypes['Brand']>>>, ParentType, ContextType>;
  diffusions?: Resolver<Maybe<ResolversTypes['Diffusions']>, ParentType, ContextType, RequireFields<QueryDiffusionsArgs, 'station'>>;
  diffusionsOfShowByUrl?: Resolver<Maybe<ResolversTypes['Diffusions']>, ParentType, ContextType, RequireFields<QueryDiffusionsOfShowByUrlArgs, 'url'>>;
  grid?: Resolver<Maybe<Array<Maybe<ResolversTypes['Step']>>>, ParentType, ContextType, RequireFields<QueryGridArgs, 'station'>>;
  live?: Resolver<Maybe<ResolversTypes['Live']>, ParentType, ContextType, RequireFields<QueryLiveArgs, 'station'>>;
  paginatedGrid?: Resolver<Maybe<ResolversTypes['GridEdge']>, ParentType, ContextType, RequireFields<QueryPaginatedGridArgs, 'station'>>;
  show?: Resolver<Maybe<ResolversTypes['Show']>, ParentType, ContextType, RequireFields<QueryShowArgs, 'id'>>;
  showByUrl?: Resolver<Maybe<ResolversTypes['Show']>, ParentType, ContextType, RequireFields<QueryShowByUrlArgs, 'url'>>;
  shows?: Resolver<Maybe<ResolversTypes['Shows']>, ParentType, ContextType, RequireFields<QueryShowsArgs, 'station'>>;
  taxonomies?: Resolver<Maybe<ResolversTypes['Taxonomies']>, ParentType, ContextType, Partial<QueryTaxonomiesArgs>>;
};

export type SegmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Segment'] = ResolversParentTypes['Segment']> = {
  speaker?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Show'] = ResolversParentTypes['Show']> = {
  diffusionsConnection?: Resolver<Maybe<ResolversTypes['ShowDiffusionsConnection']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  personalitiesConnection?: Resolver<Maybe<ResolversTypes['ShowPersonalitiesConnection']>, ParentType, ContextType>;
  podcast?: Resolver<Maybe<ResolversTypes['Podcast']>, ParentType, ContextType>;
  standFirst?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taxonomiesConnection?: Resolver<Maybe<ResolversTypes['ShowTaxonomiesConnection']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowDiffusionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowDiffusionsConnection'] = ResolversParentTypes['ShowDiffusionsConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShowDiffusionsEdge']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowDiffusionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowDiffusionsEdge'] = ResolversParentTypes['ShowDiffusionsEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Diffusion']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowEdge'] = ResolversParentTypes['ShowEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Show']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowPersonalitiesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowPersonalitiesConnection'] = ResolversParentTypes['ShowPersonalitiesConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShowPersonalitiesEdge']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowPersonalitiesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowPersonalitiesEdge'] = ResolversParentTypes['ShowPersonalitiesEdge']> = {
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Personality']>, ParentType, ContextType>;
  relation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowTaxonomiesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowTaxonomiesConnection'] = ResolversParentTypes['ShowTaxonomiesConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShowTaxonomiesEdge']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowTaxonomiesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowTaxonomiesEdge'] = ResolversParentTypes['ShowTaxonomiesEdge']> = {
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Taxonomy']>, ParentType, ContextType>;
  relation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shows'] = ResolversParentTypes['Shows']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShowEdge']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StepResolvers<ContextType = any, ParentType extends ResolversParentTypes['Step'] = ResolversParentTypes['Step']> = {
  __resolveType: TypeResolveFn<'BlankStep' | 'DiffusionStep' | 'TrackStep', ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type TaxonomiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Taxonomies'] = ResolversParentTypes['Taxonomies']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxonomyEdge']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxonomyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Taxonomy'] = ResolversParentTypes['Taxonomy']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  standFirst?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxonomyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxonomyEdge'] = ResolversParentTypes['TaxonomyEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Taxonomy']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  albumTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  composers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  discNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainArtists?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  performers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  productionDate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackStepResolvers<ContextType = any, ParentType extends ResolversParentTypes['TrackStep'] = ResolversParentTypes['TrackStep']> = {
  end?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  track?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TranscriptResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transcript'] = ResolversParentTypes['Transcript']> = {
  magnetothequeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  segments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Segment']>>>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WebRadioResolvers<ContextType = any, ParentType extends ResolversParentTypes['WebRadio'] = ResolversParentTypes['WebRadio']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liveStream?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BlankStep?: BlankStepResolvers<ContextType>;
  Brand?: BrandResolvers<ContextType>;
  Diffusion?: DiffusionResolvers<ContextType>;
  DiffusionEdge?: DiffusionEdgeResolvers<ContextType>;
  DiffusionPersonalitiesConnection?: DiffusionPersonalitiesConnectionResolvers<ContextType>;
  DiffusionPersonalitiesEdge?: DiffusionPersonalitiesEdgeResolvers<ContextType>;
  DiffusionStep?: DiffusionStepResolvers<ContextType>;
  DiffusionTaxonomiesConnection?: DiffusionTaxonomiesConnectionResolvers<ContextType>;
  DiffusionTaxonomiesEdge?: DiffusionTaxonomiesEdgeResolvers<ContextType>;
  Diffusions?: DiffusionsResolvers<ContextType>;
  GridEdge?: GridEdgeResolvers<ContextType>;
  GridPage?: GridPageResolvers<ContextType>;
  Live?: LiveResolvers<ContextType>;
  LocalRadio?: LocalRadioResolvers<ContextType>;
  Personality?: PersonalityResolvers<ContextType>;
  Podcast?: PodcastResolvers<ContextType>;
  PodcastEpisode?: PodcastEpisodeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Segment?: SegmentResolvers<ContextType>;
  Show?: ShowResolvers<ContextType>;
  ShowDiffusionsConnection?: ShowDiffusionsConnectionResolvers<ContextType>;
  ShowDiffusionsEdge?: ShowDiffusionsEdgeResolvers<ContextType>;
  ShowEdge?: ShowEdgeResolvers<ContextType>;
  ShowPersonalitiesConnection?: ShowPersonalitiesConnectionResolvers<ContextType>;
  ShowPersonalitiesEdge?: ShowPersonalitiesEdgeResolvers<ContextType>;
  ShowTaxonomiesConnection?: ShowTaxonomiesConnectionResolvers<ContextType>;
  ShowTaxonomiesEdge?: ShowTaxonomiesEdgeResolvers<ContextType>;
  Shows?: ShowsResolvers<ContextType>;
  Step?: StepResolvers<ContextType>;
  Taxonomies?: TaxonomiesResolvers<ContextType>;
  Taxonomy?: TaxonomyResolvers<ContextType>;
  TaxonomyEdge?: TaxonomyEdgeResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  TrackStep?: TrackStepResolvers<ContextType>;
  Transcript?: TranscriptResolvers<ContextType>;
  WebRadio?: WebRadioResolvers<ContextType>;
};

