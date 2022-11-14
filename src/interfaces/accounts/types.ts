// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, U256, bool, u64 } from '@polkadot/types-codec';
import type { Signature } from '@polkadot/types/interfaces/extrinsics';
import type { AccountId, Balance, BlockNumber, H160, Moment } from '@polkadot/types/interfaces/runtime';

/** @name AccountInfo */
export interface AccountInfo extends Struct {
  readonly account_id: AccountId;
  readonly created_at: Moment;
}

/** @name DiscordID */
export interface DiscordID extends u64 {}

/** @name EthLock */
export interface EthLock extends Struct {
  readonly amount: Balance;
  readonly block_number: BlockNumber;
}

/** @name EthLockUpdate */
export interface EthLockUpdate extends Struct {
  readonly public: Public;
  readonly amount: U256;
  readonly locktime: U256;
  readonly sender: H160;
  readonly signature: Signature;
  readonly lock: bool;
  readonly block_number: u64;
}

/** @name ExternalID */
export interface ExternalID extends Enum {
  readonly isDiscord: boolean;
  readonly asDiscord: DiscordID;
  readonly type: 'Discord';
}

export type PHANTOM_ACCOUNTS = 'accounts';
