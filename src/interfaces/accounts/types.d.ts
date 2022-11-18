import type { Enum, Struct, u64 } from '@polkadot/types-codec';
import type { AccountId, Balance, BlockNumber, Moment } from '@polkadot/types/interfaces/runtime';
/** @name AccountInfo */
export interface AccountInfo extends Struct {
    readonly account_id: AccountId;
    readonly created_at: Moment;
}
/** @name DiscordID */
export interface DiscordID extends u64 {
}
/** @name EthLock */
export interface EthLock extends Struct {
    readonly amount: Balance;
    readonly block_number: BlockNumber;
}
/** @name ExternalID */
export interface ExternalID extends Enum {
    readonly isDiscord: boolean;
    readonly asDiscord: DiscordID;
    readonly type: 'Discord';
}
export type PHANTOM_ACCOUNTS = 'accounts';
