// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Compact, Enum, Option, Struct, Text, Vec, bool, u128, u64 } from '@polkadot/types-codec';
import type { AccountId, AssetId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name FragmentBuyOption */
export interface FragmentBuyOption extends Enum {
  readonly isQuantity: boolean;
  readonly asQuantity: u64;
  readonly isUniqueData: boolean;
  readonly asUniqueData: Bytes;
  readonly type: 'Quantity' | 'UniqueData';
}

/** @name FragmentDefinition */
export interface FragmentDefinition extends Struct {
  readonly proto_hash: Hash256;
  readonly metadata: FragmentMetadata;
  readonly permissions: FragmentPerms;
  readonly unique: Option<UniqueOptions>;
  readonly max_supply: Option<Compact<InstanceUnit>>;
  readonly creator: AccountId;
  readonly created_at: BlockNumber;
  readonly custom_metadata: BTreeMap<Compact<u64>, Hash256>;
}

/** @name FragmentInstance */
export interface FragmentInstance extends Struct {
  readonly proto_hash: Hash256;
  readonly metadata: FragmentMetadata;
  readonly permissions: FragmentPerms;
  readonly unique: Option<UniqueOptions>;
  readonly max_supply: Option<Compact<InstanceUnit>>;
  readonly creator: AccountId;
  readonly created_at: BlockNumber;
  readonly custom_metadata: BTreeMap<Compact<u64>, Hash256>;
}

/** @name FragmentMetadata */
export interface FragmentMetadata extends Struct {
  readonly name: Bytes;
  readonly currency: Option<AssetId>;
}

/** @name GetDefinitionsParams */
export interface GetDefinitionsParams extends Struct {
  readonly desc: bool;
  readonly from: u64;
  readonly limit: u64;
  readonly metadata_keys: Vec<Text>;
  readonly owner: Option<AccountId>;
  readonly return_owners: bool;
}

/** @name GetInstanceOwnerParams */
export interface GetInstanceOwnerParams extends Struct {
  readonly definition_hash: Text;
  readonly edition_id: Unit;
  readonly copy_id: Unit;
}

/** @name GetInstancesParams */
export interface GetInstancesParams extends Struct {
  readonly desc: bool;
  readonly from: u64;
  readonly limit: u64;
  readonly definition_hash: Text;
  readonly metadata_keys: Vec<Text>;
  readonly owner: Option<AccountId>;
  readonly only_return_first_copies: bool;
}

/** @name PublishingData */
export interface PublishingData extends Struct {
  readonly price: Compact<u128>;
  readonly units_left: Option<Compact<InstanceUnit>>;
  readonly expiration: Option<BlockNumber>;
  readonly amount: Option<Compact<InstanceUnit>>;
}

/** @name UniqueOptions */
export interface UniqueOptions extends Struct {
  readonly mutable: bool;
}

/** @name Unit */
export interface Unit extends u64 {}

export type PHANTOM_FRAGMENTS = 'fragments';
