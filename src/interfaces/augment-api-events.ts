// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H160, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportDispatchDispatchInfo, FrameSupportTokensMiscBalanceStatus, PalletAccountsExternalID, PalletMultisigTimepoint, SpFinalityGrandpaAppPublic, SpRuntimeDispatchError } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    accounts: {
      /**
       * A link happened between native and ethereum account.
       **/
      Linked: AugmentedEvent<ApiType, [sender: AccountId32, ethKey: H160], { sender: AccountId32, ethKey: H160 }>;
      /**
       * ETH side lock was updated
       **/
      Locked: AugmentedEvent<ApiType, [ethKey: H160, balance: u128, locktime: u64], { ethKey: H160, balance: u128, locktime: u64 }>;
      /**
       * A new sponsored account was added
       **/
      SponsoredAccount: AugmentedEvent<ApiType, [sponsor: AccountId32, sponsored: AccountId32, externalId: PalletAccountsExternalID], { sponsor: AccountId32, sponsored: AccountId32, externalId: PalletAccountsExternalID }>;
      /**
       * A link was removed between native and ethereum account.
       **/
      Unlinked: AugmentedEvent<ApiType, [sender: AccountId32, ethKey: H160], { sender: AccountId32, ethKey: H160 }>;
      /**
       * ETH side lock was unlocked
       **/
      Unlocked: AugmentedEvent<ApiType, [ethKey: H160, balance: u128], { ethKey: H160, balance: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assets: {
      /**
       * An approval for account `delegate` was cancelled by `owner`.
       **/
      ApprovalCancelled: AugmentedEvent<ApiType, [assetId: u64, owner: AccountId32, delegate: AccountId32], { assetId: u64, owner: AccountId32, delegate: AccountId32 }>;
      /**
       * (Additional) funds have been approved for transfer to a destination account.
       **/
      ApprovedTransfer: AugmentedEvent<ApiType, [assetId: u64, source: AccountId32, delegate: AccountId32, amount: u128], { assetId: u64, source: AccountId32, delegate: AccountId32, amount: u128 }>;
      /**
       * Some asset `asset_id` was frozen.
       **/
      AssetFrozen: AugmentedEvent<ApiType, [assetId: u64], { assetId: u64 }>;
      /**
       * An asset has had its attributes changed by the `Force` origin.
       **/
      AssetStatusChanged: AugmentedEvent<ApiType, [assetId: u64], { assetId: u64 }>;
      /**
       * Some asset `asset_id` was thawed.
       **/
      AssetThawed: AugmentedEvent<ApiType, [assetId: u64], { assetId: u64 }>;
      /**
       * Some assets were destroyed.
       **/
      Burned: AugmentedEvent<ApiType, [assetId: u64, owner: AccountId32, balance: u128], { assetId: u64, owner: AccountId32, balance: u128 }>;
      /**
       * Some asset class was created.
       **/
      Created: AugmentedEvent<ApiType, [assetId: u64, creator: AccountId32, owner: AccountId32], { assetId: u64, creator: AccountId32, owner: AccountId32 }>;
      /**
       * An asset class was destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [assetId: u64], { assetId: u64 }>;
      /**
       * Some asset class was force-created.
       **/
      ForceCreated: AugmentedEvent<ApiType, [assetId: u64, owner: AccountId32], { assetId: u64, owner: AccountId32 }>;
      /**
       * Some account `who` was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [assetId: u64, who: AccountId32], { assetId: u64, who: AccountId32 }>;
      /**
       * Some assets were issued.
       **/
      Issued: AugmentedEvent<ApiType, [assetId: u64, owner: AccountId32, totalSupply: u128], { assetId: u64, owner: AccountId32, totalSupply: u128 }>;
      /**
       * Metadata has been cleared for an asset.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [assetId: u64], { assetId: u64 }>;
      /**
       * New metadata has been set for an asset.
       **/
      MetadataSet: AugmentedEvent<ApiType, [assetId: u64, name: Bytes, symbol_: Bytes, decimals: u8, isFrozen: bool], { assetId: u64, name: Bytes, symbol: Bytes, decimals: u8, isFrozen: bool }>;
      /**
       * The owner changed.
       **/
      OwnerChanged: AugmentedEvent<ApiType, [assetId: u64, owner: AccountId32], { assetId: u64, owner: AccountId32 }>;
      /**
       * The management team changed.
       **/
      TeamChanged: AugmentedEvent<ApiType, [assetId: u64, issuer: AccountId32, admin: AccountId32, freezer: AccountId32], { assetId: u64, issuer: AccountId32, admin: AccountId32, freezer: AccountId32 }>;
      /**
       * Some account `who` was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [assetId: u64, who: AccountId32], { assetId: u64, who: AccountId32 }>;
      /**
       * Some assets were transferred.
       **/
      Transferred: AugmentedEvent<ApiType, [assetId: u64, from: AccountId32, to: AccountId32, amount: u128], { assetId: u64, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * An `amount` was transferred in its entirety from `owner` to `destination` by
       * the approved `delegate`.
       **/
      TransferredApproved: AugmentedEvent<ApiType, [assetId: u64, owner: AccountId32, delegate: AccountId32, destination: AccountId32, amount: u128], { assetId: u64, owner: AccountId32, delegate: AccountId32, destination: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128, reserved: u128], { who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    contracts: {
      /**
       * A contract was called either by a plain account or another contract.
       * 
       * # Note
       * 
       * Please keep in mind that like all events this is only emitted for successful
       * calls. This is because on failure all storage changes including events are
       * rolled back.
       **/
      Called: AugmentedEvent<ApiType, [caller: AccountId32, contract: AccountId32], { caller: AccountId32, contract: AccountId32 }>;
      /**
       * A code with the specified hash was removed.
       **/
      CodeRemoved: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * Code with the specified hash has been stored.
       **/
      CodeStored: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * A contract's code was updated.
       **/
      ContractCodeUpdated: AugmentedEvent<ApiType, [contract: AccountId32, newCodeHash: H256, oldCodeHash: H256], { contract: AccountId32, newCodeHash: H256, oldCodeHash: H256 }>;
      /**
       * A custom event emitted by the contract.
       **/
      ContractEmitted: AugmentedEvent<ApiType, [contract: AccountId32, data: Bytes], { contract: AccountId32, data: Bytes }>;
      /**
       * A contract delegate called a code hash.
       * 
       * # Note
       * 
       * Please keep in mind that like all events this is only emitted for successful
       * calls. This is because on failure all storage changes including events are
       * rolled back.
       **/
      DelegateCalled: AugmentedEvent<ApiType, [contract: AccountId32, codeHash: H256], { contract: AccountId32, codeHash: H256 }>;
      /**
       * Contract deployed by address at the specified address.
       **/
      Instantiated: AugmentedEvent<ApiType, [deployer: AccountId32, contract: AccountId32], { deployer: AccountId32, contract: AccountId32 }>;
      /**
       * Contract has been removed.
       * 
       * # Note
       * 
       * The only way for a contract to be removed and emitting this event is by calling
       * `seal_terminate`.
       **/
      Terminated: AugmentedEvent<ApiType, [contract: AccountId32, beneficiary: AccountId32], { contract: AccountId32, beneficiary: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    detach: {
      Detached: AugmentedEvent<ApiType, [fragmentDataHash: U8aFixed, remoteSignature: Bytes], { fragmentDataHash: U8aFixed, remoteSignature: Bytes }>;
      MetadataChanged: AugmentedEvent<ApiType, [fragmentDataHash: U8aFixed, remoteSignature: Bytes], { fragmentDataHash: U8aFixed, remoteSignature: Bytes }>;
      Patched: AugmentedEvent<ApiType, [fragmentDataHash: U8aFixed], { fragmentDataHash: U8aFixed }>;
      Transferred: AugmentedEvent<ApiType, [fragmentDataHash: U8aFixed, accountId: AccountId32], { fragmentDataHash: U8aFixed, accountId: AccountId32 }>;
      Uploaded: AugmentedEvent<ApiType, [fragmentDataHash: U8aFixed], { fragmentDataHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    fragments: {
      /**
       * New definition created by account, definition hash
       **/
      DefinitionCreated: AugmentedEvent<ApiType, [definitionHash: U8aFixed], { definitionHash: U8aFixed }>;
      /**
       * A Fragment Definition metadata has changed
       **/
      DefinitionMetadataChanged: AugmentedEvent<ApiType, [fragmentHash: U8aFixed, metadataKey: Bytes], { fragmentHash: U8aFixed, metadataKey: Bytes }>;
      /**
       * End Resale of Instance
       **/
      EndResale: AugmentedEvent<ApiType, [definitionHash: U8aFixed, fragmentId: ITuple<[u64, u64]>], { definitionHash: U8aFixed, fragmentId: ITuple<[u64, u64]> }>;
      /**
       * Fragment Expiration event
       **/
      Expired: AugmentedEvent<ApiType, [accountId: AccountId32, definitionHash: U8aFixed, fragmentId: ITuple<[u64, u64]>], { accountId: AccountId32, definitionHash: U8aFixed, fragmentId: ITuple<[u64, u64]> }>;
      /**
       * A Fragment Instance metadata has changed
       **/
      InstanceMetadataChanged: AugmentedEvent<ApiType, [fragmentHash: U8aFixed, editionId: u64, copyId: u64, metadataKey: Bytes], { fragmentHash: U8aFixed, editionId: u64, copyId: u64, metadataKey: Bytes }>;
      /**
       * Inventory item has been added to account
       **/
      InventoryAdded: AugmentedEvent<ApiType, [accountId: AccountId32, definitionHash: U8aFixed, fragmentId: ITuple<[u64, u64]>], { accountId: AccountId32, definitionHash: U8aFixed, fragmentId: ITuple<[u64, u64]> }>;
      /**
       * Inventory item has removed added from account
       **/
      InventoryRemoved: AugmentedEvent<ApiType, [accountId: AccountId32, definitionHash: U8aFixed, fragmentId: ITuple<[u64, u64]>], { accountId: AccountId32, definitionHash: U8aFixed, fragmentId: ITuple<[u64, u64]> }>;
      /**
       * Inventory has been updated
       **/
      InventoryUpdated: AugmentedEvent<ApiType, [accountId: AccountId32, definitionHash: U8aFixed, fragmentId: ITuple<[u64, u64]>], { accountId: AccountId32, definitionHash: U8aFixed, fragmentId: ITuple<[u64, u64]> }>;
      /**
       * Fragment sale has been opened
       **/
      Publishing: AugmentedEvent<ApiType, [definitionHash: U8aFixed], { definitionHash: U8aFixed }>;
      /**
       * Resell Instance
       **/
      Resell: AugmentedEvent<ApiType, [definitionHash: U8aFixed, fragmentId: ITuple<[u64, u64]>], { definitionHash: U8aFixed, fragmentId: ITuple<[u64, u64]> }>;
      /**
       * Fragment sale has been closed
       **/
      Unpublishing: AugmentedEvent<ApiType, [definitionHash: U8aFixed], { definitionHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<ApiType, [authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>], { authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>> }>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [target: AccountId32, registrarIndex: u32], { target: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    indices: {
      /**
       * A account index was assigned.
       **/
      IndexAssigned: AugmentedEvent<ApiType, [who: AccountId32, index: u64], { who: AccountId32, index: u64 }>;
      /**
       * A account index has been freed up (unassigned).
       **/
      IndexFreed: AugmentedEvent<ApiType, [index: u64], { index: u64 }>;
      /**
       * A account index has been frozen to its current account ID.
       **/
      IndexFrozen: AugmentedEvent<ApiType, [index: u64, who: AccountId32], { index: u64, who: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       **/
      MultisigApproval: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been cancelled.
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been executed.
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError>], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A new multisig operation has begun.
       **/
      NewMultisig: AugmentedEvent<ApiType, [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    protos: {
      /**
       * A Proto-Fragment was detached
       **/
      Detached: AugmentedEvent<ApiType, [protoHash: U8aFixed, cid: Bytes], { protoHash: U8aFixed, cid: Bytes }>;
      /**
       * A Proto-Fragment metadata has changed
       **/
      MetadataChanged: AugmentedEvent<ApiType, [protoHash: U8aFixed, cid: Bytes], { protoHash: U8aFixed, cid: Bytes }>;
      /**
       * A Proto-Fragment was patched
       **/
      Patched: AugmentedEvent<ApiType, [protoHash: U8aFixed, cid: Bytes], { protoHash: U8aFixed, cid: Bytes }>;
      /**
       * Stake was created
       **/
      Staked: AugmentedEvent<ApiType, [protoHash: U8aFixed, accountId: AccountId32, balance: u128], { protoHash: U8aFixed, accountId: AccountId32, balance: u128 }>;
      /**
       * A Proto-Fragment was transferred
       **/
      Transferred: AugmentedEvent<ApiType, [protoHash: U8aFixed, ownerId: AccountId32], { protoHash: U8aFixed, ownerId: AccountId32 }>;
      /**
       * Stake was unlocked
       **/
      Unstaked: AugmentedEvent<ApiType, [protoHash: U8aFixed, accountId: AccountId32, balance: u128], { protoHash: U8aFixed, accountId: AccountId32, balance: u128 }>;
      /**
       * A Proto-Fragment was uploaded
       **/
      Uploaded: AugmentedEvent<ApiType, [protoHash: U8aFixed, cid: Bytes], { protoHash: U8aFixed, cid: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: Null, delay: u64], { delegator: AccountId32, delegatee: AccountId32, proxyType: Null, delay: u64 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proxy was removed.
       **/
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: Null, delay: u64], { delegator: AccountId32, delegatee: AccountId32, proxyType: Null, delay: u64 }>;
      /**
       * A pure account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      PureCreated: AugmentedEvent<ApiType, [pure: AccountId32, who: AccountId32, proxyType: Null, disambiguationIndex: u16], { pure: AccountId32, who: AccountId32, proxyType: Null, disambiguationIndex: u16 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<ApiType, [oldSudoer: Option<AccountId32>], { oldSudoer: Option<AccountId32> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128], { who: AccountId32, actualFee: u128, tip: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
