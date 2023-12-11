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
  /**
   * List of values separated by comma.
   * Add `!` before value to apply negative filter.
   *
   *
   * `movie` - Movies
   *
   * `music` - Music
   *
   * `ona` - ONA
   *
   * `ova/ona` - OVA/ONA
   *
   * `ova` - OVA
   *
   * `special` - Specials
   *
   * `tv` - TV Series
   *
   * `tv_13` - Short TV Series
   *
   * `tv_24` - Average TV Series
   *
   * `tv_48` - Long TV Series
   */
  AnimeKindString: { input: any; output: any; }
  /**
   * List of values separated by comma.
   * Add `!` before value to apply negative filter.
   *
   *
   * `S` - Less than 10 minutes
   *
   * `D` - Less than 30 minutes
   *
   * `F` - More than 30 minutes
   */
  DurationString: { input: any; output: any; }
  /** An ISO 8601-encoded date */
  ISO8601Date: { input: any; output: any; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
  /**
   * List of values separated by comma.
   * Add `!` before value to apply negative filter.
   *
   *
   * `doujin` - Doujin
   *
   * `manga` - Manga
   *
   * `manhua` - Manhua
   *
   * `manhwa` - Manhwa
   *
   * `light_novel` - Light Novels
   *
   * `novel` - Novels
   *
   * `one_shot` - One Shots
   */
  MangaKindString: { input: any; output: any; }
  /**
   * List of values separated by comma.
   * Add `!` before value to apply negative filter.
   *
   *
   * `planned` - Planned to Watch
   *
   * `watching` - Watching
   *
   * `rewatching` - Rewatching
   *
   * `completed` - Completed
   *
   * `on_hold` - On Hold
   *
   * `dropped` - Dropped
   */
  MylistString: { input: any; output: any; }
  /**
   * List of values separated by comma.
   * Add `!` before value to apply negative filter.
   *
   *
   * `none` - No rating
   *
   * `g` - G - All ages
   *
   * `pg` - PG - Children
   *
   * `pg_13` - PG-13 - Teens 13 or older
   *
   * `r` - R - 17+ recommended (violence & profanity)
   *
   * `r_plus` - R+ - Mild Nudity (may also contain violence & profanity)
   *
   * `rx` - Rx - Hentai (extreme sexual content/nudity)
   */
  RatingString: { input: any; output: any; }
  /**
   * List of values separated by comma.
   * Add `!` before value to apply negative filter.
   *
   *
   * **Examples:**
   *
   * `summer_2017`
   *
   * `2016`
   *
   * `2014_2016`
   *
   * `199x`
   *
   */
  SeasonString: { input: any; output: any; }
  /**
   * List of values separated by comma.
   * Add `!` before value to apply negative filter.
   *
   *
   * `anons` - Planned
   *
   * `ongoing` - Airing
   *
   * `released` - Released
   */
  StatusString: { input: any; output: any; }
};

export type Anime = {
  __typename?: 'Anime';
  airedOn?: Maybe<IncompleteDate>;
  characterRoles?: Maybe<Array<CharacterRole>>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionHtml?: Maybe<Scalars['String']['output']>;
  descriptionSource?: Maybe<Scalars['String']['output']>;
  /** Duration in minutes */
  duration?: Maybe<Scalars['Int']['output']>;
  english?: Maybe<Scalars['String']['output']>;
  episodes: Scalars['Int']['output'];
  episodesAired: Scalars['Int']['output'];
  externalLinks?: Maybe<Array<ExternalLink>>;
  fandubbers: Array<Scalars['String']['output']>;
  fansubbers: Array<Scalars['String']['output']>;
  /** Franchise name */
  franchise?: Maybe<Scalars['String']['output']>;
  genres?: Maybe<Array<Genre>>;
  id: Scalars['ID']['output'];
  isCensored?: Maybe<Scalars['Boolean']['output']>;
  japanese?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<AnimeKindEnum>;
  licenseNameRu?: Maybe<Scalars['String']['output']>;
  licensors?: Maybe<Array<Scalars['String']['output']>>;
  malId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  nextEpisodeAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  personRoles?: Maybe<Array<PersonRole>>;
  poster?: Maybe<Poster>;
  rating?: Maybe<AnimeRatingEnum>;
  related?: Maybe<Array<Related>>;
  releasedOn?: Maybe<IncompleteDate>;
  russian?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  scoresStats?: Maybe<Array<ScoreStat>>;
  screenshots: Array<Screenshot>;
  season?: Maybe<Scalars['String']['output']>;
  status?: Maybe<StatusEnum>;
  statusesStats?: Maybe<Array<StatusStat>>;
  studios: Array<Studio>;
  synonyms: Array<Scalars['String']['output']>;
  topic?: Maybe<Topic>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  url: Scalars['String']['output'];
  userRate?: Maybe<UserRate>;
  videos: Array<Video>;
};

export enum AnimeKindEnum {
  /** Movie */
  Movie = 'movie',
  /** Music */
  Music = 'music',
  /** ONA */
  Ona = 'ona',
  /** OVA */
  Ova = 'ova',
  /** Special */
  Special = 'special',
  /** TV Series */
  Tv = 'tv'
}

export enum AnimeRatingEnum {
  /** G */
  G = 'g',
  /** None */
  None = 'none',
  /** PG */
  Pg = 'pg',
  /** PG-13 */
  Pg_13 = 'pg_13',
  /** R-17 */
  R = 'r',
  /** R+ */
  RPlus = 'r_plus',
  /** Rx */
  Rx = 'rx'
}

export type Character = {
  __typename?: 'Character';
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionHtml?: Maybe<Scalars['String']['output']>;
  descriptionSource?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAnime: Scalars['Boolean']['output'];
  isManga: Scalars['Boolean']['output'];
  isRanobe: Scalars['Boolean']['output'];
  japanese?: Maybe<Scalars['String']['output']>;
  malId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  poster?: Maybe<Poster>;
  russian?: Maybe<Scalars['String']['output']>;
  synonyms: Array<Scalars['String']['output']>;
  topic?: Maybe<Topic>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  url: Scalars['String']['output'];
};

export type CharacterRole = {
  __typename?: 'CharacterRole';
  character: Character;
  id: Scalars['ID']['output'];
  rolesEn: Array<Scalars['String']['output']>;
  rolesRu: Array<Scalars['String']['output']>;
};

export type ExternalLink = {
  __typename?: 'ExternalLink';
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind: ExternalLinkKindEnum;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  url: Scalars['String']['output'];
};

export enum ExternalLinkKindEnum {
  /** AniDB */
  AnimeDb = 'anime_db',
  /** Anime News Network */
  AnimeNewsNetwork = 'anime_news_network',
  /** Kage Project */
  KageProject = 'kage_project',
  /** KinoPoisk */
  Kinopoisk = 'kinopoisk',
  /** Mangachan */
  Mangachan = 'mangachan',
  /** MangaDex */
  Mangadex = 'mangadex',
  /** MangaFox */
  Mangafox = 'mangafox',
  /** Mangahub */
  Mangahub = 'mangahub',
  /** MangaLib */
  Mangalib = 'mangalib',
  /** Baka-Updates */
  Mangaupdates = 'mangaupdates',
  /** MyAnimeList */
  Myanimelist = 'myanimelist',
  /** Novel.tl */
  NovelTl = 'novel_tl',
  /** Novel Updates */
  Novelupdates = 'novelupdates',
  /** Official Site */
  OfficialSite = 'official_site',
  /** RanobeLib */
  Ranobelib = 'ranobelib',
  /** ReadManga */
  Readmanga = 'readmanga',
  /** ReManga */
  Remanga = 'remanga',
  /** RuRanobe */
  Ruranobe = 'ruranobe',
  /** Anime 365 */
  SmotretAnime = 'smotret_anime',
  /** subs.com.ru */
  SubsComRu = 'subs_com_ru',
  /** Twitter */
  Twitter = 'twitter',
  /** Wikipedia */
  Wikipedia = 'wikipedia',
  /** World Art */
  WorldArt = 'world_art'
}

export type Genre = {
  __typename?: 'Genre';
  entryType: GenreEntryTypeEnum;
  id: Scalars['ID']['output'];
  kind: GenreKindEnum;
  name: Scalars['String']['output'];
  russian: Scalars['String']['output'];
};

export enum GenreEntryTypeEnum {
  /** Anime */
  Anime = 'Anime',
  /** Manga */
  Manga = 'Manga'
}

export enum GenreKindEnum {
  /** Demographic */
  Demographic = 'demographic',
  /** Genre */
  Genre = 'genre',
  /** Theme */
  Theme = 'theme'
}

export type IncompleteDate = {
  __typename?: 'IncompleteDate';
  date?: Maybe<Scalars['ISO8601Date']['output']>;
  day?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Manga = {
  __typename?: 'Manga';
  airedOn?: Maybe<IncompleteDate>;
  chapters: Scalars['Int']['output'];
  characterRoles?: Maybe<Array<CharacterRole>>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionHtml?: Maybe<Scalars['String']['output']>;
  descriptionSource?: Maybe<Scalars['String']['output']>;
  english?: Maybe<Scalars['String']['output']>;
  externalLinks?: Maybe<Array<ExternalLink>>;
  /** Franchise name */
  franchise?: Maybe<Scalars['String']['output']>;
  genres?: Maybe<Array<Genre>>;
  id: Scalars['ID']['output'];
  isCensored?: Maybe<Scalars['Boolean']['output']>;
  japanese?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<MangaKindEnum>;
  licenseNameRu?: Maybe<Scalars['String']['output']>;
  licensors?: Maybe<Array<Scalars['String']['output']>>;
  malId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  personRoles?: Maybe<Array<PersonRole>>;
  poster?: Maybe<Poster>;
  publishers: Array<Publisher>;
  related?: Maybe<Array<Related>>;
  releasedOn?: Maybe<IncompleteDate>;
  russian?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  scoresStats?: Maybe<Array<ScoreStat>>;
  status?: Maybe<StatusEnum>;
  statusesStats?: Maybe<Array<StatusStat>>;
  synonyms: Array<Scalars['String']['output']>;
  topic?: Maybe<Topic>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  url: Scalars['String']['output'];
  userRate?: Maybe<UserRate>;
  volumes: Scalars['Int']['output'];
};

export enum MangaKindEnum {
  /** Doujin */
  Doujin = 'doujin',
  /** Light Novel */
  LightNovel = 'light_novel',
  /** Manga */
  Manga = 'manga',
  /** Manhua */
  Manhua = 'manhua',
  /** Manhwa */
  Manhwa = 'manhwa',
  /** Novel */
  Novel = 'novel',
  /** One Shot */
  OneShot = 'one_shot'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};

export enum OrderEnum {
  /** By release date */
  AiredOn = 'aired_on',
  /** created_at */
  CreatedAt = 'created_at',
  /** created_at_desc */
  CreatedAtDesc = 'created_at_desc',
  /** By number of episodes */
  Episodes = 'episodes',
  /** By ID */
  Id = 'id',
  /** id_desc */
  IdDesc = 'id_desc',
  /** By type */
  Kind = 'kind',
  /** In alphabetical order */
  Name = 'name',
  /** By popularity */
  Popularity = 'popularity',
  /** By random */
  Random = 'random',
  /** By rank */
  Ranked = 'ranked',
  /** By random */
  RankedRandom = 'ranked_random',
  /** By Shikimori ranking */
  RankedShiki = 'ranked_shiki',
  /** By status */
  Status = 'status'
}

export type Person = {
  __typename?: 'Person';
  birthOn?: Maybe<IncompleteDate>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  deceasedOn?: Maybe<IncompleteDate>;
  id: Scalars['ID']['output'];
  isMangaka: Scalars['Boolean']['output'];
  isProducer: Scalars['Boolean']['output'];
  isSeyu: Scalars['Boolean']['output'];
  japanese?: Maybe<Scalars['String']['output']>;
  malId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  poster?: Maybe<Poster>;
  russian?: Maybe<Scalars['String']['output']>;
  synonyms: Array<Scalars['String']['output']>;
  topic?: Maybe<Topic>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  url: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type PersonRole = {
  __typename?: 'PersonRole';
  id: Scalars['ID']['output'];
  person: Person;
  rolesEn: Array<Scalars['String']['output']>;
  rolesRu: Array<Scalars['String']['output']>;
};

export type Poster = {
  __typename?: 'Poster';
  id: Scalars['ID']['output'];
  main2xUrl: Scalars['String']['output'];
  mainAlt2xUrl: Scalars['String']['output'];
  mainAltUrl: Scalars['String']['output'];
  mainUrl: Scalars['String']['output'];
  mini2xUrl: Scalars['String']['output'];
  miniAlt2xUrl: Scalars['String']['output'];
  miniAltUrl: Scalars['String']['output'];
  miniUrl: Scalars['String']['output'];
  originalUrl: Scalars['String']['output'];
  preview2xUrl: Scalars['String']['output'];
  previewAlt2xUrl: Scalars['String']['output'];
  previewAltUrl: Scalars['String']['output'];
  previewUrl: Scalars['String']['output'];
};

export type Publisher = {
  __typename?: 'Publisher';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  animes: Array<Anime>;
  characters: Array<Character>;
  currentUser?: Maybe<User>;
  genres: Array<Genre>;
  mangas: Array<Manga>;
  people: Array<Person>;
  userRates: Array<UserRate>;
};


export type QueryAnimesArgs = {
  censored?: InputMaybe<Scalars['Boolean']['input']>;
  duration?: InputMaybe<Scalars['DurationString']['input']>;
  excludeIds?: InputMaybe<Scalars['String']['input']>;
  franchise?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<Scalars['AnimeKindString']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mylist?: InputMaybe<Scalars['MylistString']['input']>;
  order?: InputMaybe<OrderEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['RatingString']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<Scalars['SeasonString']['input']>;
  status?: InputMaybe<Scalars['StatusString']['input']>;
  studio?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCharactersArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGenresArgs = {
  entryType: GenreEntryTypeEnum;
};


export type QueryMangasArgs = {
  censored?: InputMaybe<Scalars['Boolean']['input']>;
  excludeIds?: InputMaybe<Scalars['String']['input']>;
  franchise?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<Scalars['MangaKindString']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mylist?: InputMaybe<Scalars['MylistString']['input']>;
  order?: InputMaybe<OrderEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<Scalars['SeasonString']['input']>;
  status?: InputMaybe<Scalars['StatusString']['input']>;
};


export type QueryPeopleArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  isMangaka?: InputMaybe<Scalars['Boolean']['input']>;
  isProducer?: InputMaybe<Scalars['Boolean']['input']>;
  isSeyu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserRatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<UserRateStatusEnum>;
  targetType: UserRateTargetTypeEnum;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type Related = {
  __typename?: 'Related';
  anime?: Maybe<Anime>;
  id: Scalars['ID']['output'];
  manga?: Maybe<Manga>;
  relationEn: Scalars['String']['output'];
  relationRu: Scalars['String']['output'];
};

export type ScoreStat = {
  __typename?: 'ScoreStat';
  count: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
};

export type Screenshot = {
  __typename?: 'Screenshot';
  id: Scalars['ID']['output'];
  originalUrl: Scalars['String']['output'];
  x166Url: Scalars['String']['output'];
  x332Url: Scalars['String']['output'];
};

export enum StatusEnum {
  /** Planned */
  Anons = 'anons',
  /** Airing */
  Ongoing = 'ongoing',
  /** Released */
  Released = 'released'
}

export type StatusStat = {
  __typename?: 'StatusStat';
  count: Scalars['Int']['output'];
  status: UserRateStatusEnum;
};

export type Studio = {
  __typename?: 'Studio';
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type Topic = {
  __typename?: 'Topic';
  body: Scalars['String']['output'];
  commentsCount: Scalars['Int']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  htmlBody: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  url: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  avatarUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastOnlineAt: Scalars['ISO8601DateTime']['output'];
  nickname: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type UserRate = {
  __typename?: 'UserRate';
  anime?: Maybe<Anime>;
  chapters: Scalars['Int']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  episodes: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  manga?: Maybe<Manga>;
  rewatches: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
  status: UserRateStatusEnum;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  volumes: Scalars['Int']['output'];
};

export enum UserRateStatusEnum {
  /** Completed */
  Completed = 'completed',
  /** Dropped */
  Dropped = 'dropped',
  /** On Hold */
  OnHold = 'on_hold',
  /** Planned to Watch */
  Planned = 'planned',
  /** Rewatching */
  Rewatching = 'rewatching',
  /** Watching */
  Watching = 'watching'
}

export enum UserRateTargetTypeEnum {
  /** Anime */
  Anime = 'Anime',
  /** Manga */
  Manga = 'Manga'
}

export type Video = {
  __typename?: 'Video';
  id?: Maybe<Scalars['ID']['output']>;
  kind?: Maybe<VideoKindEnum>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export enum VideoKindEnum {
  /** Character trailer */
  CharacterTrailer = 'character_trailer',
  /** Clip */
  Clip = 'clip',
  /** CM */
  Cm = 'cm',
  /** ED */
  Ed = 'ed',
  /** Episode preview */
  EpisodePreview = 'episode_preview',
  /** OP */
  Op = 'op',
  /** Music */
  OpEdClip = 'op_ed_clip',
  /** Other */
  Other = 'other',
  /** PV */
  Pv = 'pv'
}

export type GetAnimesInListQueryVariables = Exact<{
  targetType: UserRateTargetTypeEnum;
  userId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAnimesInListQuery = { __typename?: 'Query', userRates: Array<{ __typename?: 'UserRate', episodes: number, status: UserRateStatusEnum, anime?: { __typename?: 'Anime', status?: StatusEnum | null, name: string, episodesAired: number, episodes: number, duration?: number | null } | null }> };


export const GetAnimesInListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAnimesInList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserRateTargetTypeEnum"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"targetType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetType"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episodes"}},{"kind":"Field","name":{"kind":"Name","value":"anime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"episodesAired"}},{"kind":"Field","name":{"kind":"Name","value":"episodes"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetAnimesInListQuery, GetAnimesInListQueryVariables>;