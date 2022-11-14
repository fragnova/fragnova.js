// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Enum, Struct, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Hash128 } from 'sample-polkadotjs-typegen/interfaces/protos';

/** @name DetachHash */
export interface DetachHash extends Enum {
  readonly isProto: boolean;
  readonly asProto: Hash256;
  readonly isInstance: boolean;
  readonly asInstance: ITuple<[Hash128, Compact<InstanceUnit>, Compact<InstanceUnit>]>;
  readonly type: 'Proto' | 'Instance';
}

/** @name DetachInternalData */
export interface DetachInternalData extends Struct {
  readonly public: Public;
  readonly hash: DetachHash;
  readonly target_chain: SupportedChains;
  readonly target_account: Bytes;
  readonly remote_signature: Bytes;
  readonly nonce: u64;
}

/** @name DetachRequest */
export interface DetachRequest extends Struct {
  readonly hash: DetachHash;
  readonly target_chain: SupportedChains;
  readonly target_account: Bytes;
}

/** @name ExportData */
export interface ExportData extends Struct {
  readonly chain: SupportedChains;
  readonly owner: Bytes;
  readonly nonce: u64;
}

/** @name SupportedChains */
export interface SupportedChains extends Enum {
  readonly isEthereumMainnet: boolean;
  readonly isEthereumRinkeby: boolean;
  readonly isEthereumGoerli: boolean;
  readonly type: 'EthereumMainnet' | 'EthereumRinkeby' | 'EthereumGoerli';
}

export type PHANTOM_DETACH = 'detach';
