// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, Compact, Enum, Option, Struct, Text, U256, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Signature } from '@polkadot/types/interfaces/extrinsics';
import type { AccountId, BlockNumber, H160, Hash } from '@polkadot/types/interfaces/runtime';

/** @name AccountsInfo */
export interface AccountsInfo extends Struct {
  readonly active_accounts: u128;
  readonly lifetime_accounts: u128;
}

/** @name AudioCategories */
export interface AudioCategories extends Enum {
  readonly isOggFile: boolean;
  readonly isMp3File: boolean;
  readonly type: 'OggFile' | 'Mp3File';
}

/** @name BinaryCategories */
export interface BinaryCategories extends Enum {
  readonly isWasmProgram: boolean;
  readonly isWasmReactor: boolean;
  readonly isBlendFile: boolean;
  readonly type: 'WasmProgram' | 'WasmReactor' | 'BlendFile';
}

/** @name BlockHash */
export interface BlockHash extends Hash {}

/** @name Categories */
export interface Categories extends Enum {
  readonly isText: boolean;
  readonly asText: TextCategories;
  readonly isTrait: boolean;
  readonly asTrait: Option<ShardsTrait>;
  readonly isShards: boolean;
  readonly asShards: ShardsScriptInfo;
  readonly isAudio: boolean;
  readonly asAudio: AudioCategories;
  readonly isTexture: boolean;
  readonly asTexture: TextureCategories;
  readonly isVector: boolean;
  readonly asVector: VectorCategories;
  readonly isVideo: boolean;
  readonly asVideo: VideoCategories;
  readonly isModel: boolean;
  readonly asModel: ModelCategories;
  readonly isBinary: boolean;
  readonly asBinary: BinaryCategories;
  readonly type: 'Text' | 'Trait' | 'Shards' | 'Audio' | 'Texture' | 'Vector' | 'Video' | 'Model' | 'Binary';
}

/** @name GetGenealogyParams */
export interface GetGenealogyParams extends Struct {
  readonly proto_hash: Text;
  readonly get_ancestors: bool;
}

/** @name GetProtosParams */
export interface GetProtosParams extends Struct {
  readonly desc: bool;
  readonly from: u32;
  readonly limit: u32;
  readonly metadata_keys: Vec<Text>;
  readonly owner: Option<AccountId>;
  readonly return_owners: bool;
  readonly categories: Vec<Categories>;
  readonly tags: Vec<Text>;
  readonly exclude_tags: Vec<Text>;
  readonly available: Option<bool>;
}

/** @name Hash128 */
export interface Hash128 extends U8aFixed {}

/** @name Hash256 */
export interface Hash256 extends U8aFixed {}

/** @name LinkedAsset */
export interface LinkedAsset extends Enum {
  readonly isErc721: boolean;
  readonly asErc721: ITuple<[H160, U256, LinkSource]>;
  readonly type: 'Erc721';
}

/** @name LinkSource */
export interface LinkSource extends Enum {
  readonly isEvm: boolean;
  readonly asEvm: ITuple<[Signature, u64, U256]>;
  readonly type: 'Evm';
}

/** @name ModelCategories */
export interface ModelCategories extends Enum {
  readonly isGltfFile: boolean;
  readonly isSdf: boolean;
  readonly isPhysicsCollider: boolean;
  readonly type: 'GltfFile' | 'Sdf' | 'PhysicsCollider';
}

/** @name Proto */
export interface Proto extends Struct {
  readonly block: BlockNumber;
  readonly patches: Vec<ProtoPatch>;
  readonly license: UsageLicense;
  readonly creator: AccountId;
  readonly owner: ProtoOwner;
  readonly references: Vec<Hash256>;
  readonly category: Categories;
  readonly tags: Vec<Compact<u64>>;
  readonly metadata: BTreeMap<Compact<u64>, Hash256>;
  readonly account_info: AccountsInfo;
}

/** @name ProtoOwner */
export interface ProtoOwner extends Enum {
  readonly isUser: boolean;
  readonly asUser: AccountId;
  readonly isExternalAsset: boolean;
  readonly asExternalAsset: LinkedAsset;
  readonly type: 'User' | 'ExternalAsset';
}

/** @name ProtoPatch */
export interface ProtoPatch extends Struct {
  readonly block: BlockNumber;
  readonly data_hash: Hash256;
  readonly references: Vec<Hash256>;
}

/** @name ShardsFormat */
export interface ShardsFormat extends Enum {
  readonly isEdn: boolean;
  readonly isBinary: boolean;
  readonly type: 'Edn' | 'Binary';
}

/** @name ShardsScriptInfo */
export interface ShardsScriptInfo extends Struct {
  readonly format: ShardsFormat;
  readonly requiring: Vec<ShardsTrait>;
  readonly implementing: Vec<ShardsTrait>;
}

/** @name ShardsTrait */
export interface ShardsTrait extends Vec<u16> {}

/** @name TextCategories */
export interface TextCategories extends Enum {
  readonly isPlain: boolean;
  readonly isJson: boolean;
  readonly type: 'Plain' | 'Json';
}

/** @name TextureCategories */
export interface TextureCategories extends Enum {
  readonly isPngFile: boolean;
  readonly isJpgFile: boolean;
  readonly type: 'PngFile' | 'JpgFile';
}

/** @name UsageLicense */
export interface UsageLicense extends Enum {
  readonly isClosed: boolean;
  readonly isOpen: boolean;
  readonly isTickets: boolean;
  readonly asTickets: Compact<u64>;
  readonly isContract: boolean;
  readonly asContract: AccountId;
  readonly type: 'Closed' | 'Open' | 'Tickets' | 'Contract';
}

/** @name VectorCategories */
export interface VectorCategories extends Enum {
  readonly isSvgFile: boolean;
  readonly isTtfFile: boolean;
  readonly type: 'SvgFile' | 'TtfFile';
}

/** @name VideoCategories */
export interface VideoCategories extends Enum {
  readonly isMkvFile: boolean;
  readonly isMp4File: boolean;
  readonly type: 'MkvFile' | 'Mp4File';
}

export type PHANTOM_PROTOS = 'protos';
