// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, Text, U256, U8aFixed, Vec, WrapperKeepOpaque, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H160, H256, MultiAddress, Perbill, Weight } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly miscFrozen: u128;
    readonly feeFrozen: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (7) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: Weight;
    readonly operational: Weight;
    readonly mandatory: Weight;
  }

  /** @name SpRuntimeDigest (12) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (14) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (17) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (19) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportDispatchDispatchInfo (20) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (21) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (22) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (23) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpRuntimeArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional';
  }

  /** @name SpRuntimeModuleError (24) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (25) */
  interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean;
    readonly isWouldDie: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
  }

  /** @name SpRuntimeArithmeticError (26) */
  interface SpRuntimeArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (27) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletGrandpaEvent (28) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpFinalityGrandpaAppPublic (31) */
  interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (32) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletBalancesEvent (33) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (34) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (35) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletSudoEvent (36) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name PalletAssetsEvent (40) */
  interface PalletAssetsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly assetId: u64;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly assetId: u64;
      readonly owner: AccountId32;
      readonly totalSupply: u128;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly assetId: u64;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly assetId: u64;
      readonly owner: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly assetId: u64;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly assetId: u64;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly assetId: u64;
      readonly who: AccountId32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly assetId: u64;
      readonly who: AccountId32;
    } & Struct;
    readonly isAssetFrozen: boolean;
    readonly asAssetFrozen: {
      readonly assetId: u64;
    } & Struct;
    readonly isAssetThawed: boolean;
    readonly asAssetThawed: {
      readonly assetId: u64;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly assetId: u64;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly assetId: u64;
      readonly owner: AccountId32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly assetId: u64;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly assetId: u64;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly assetId: u64;
      readonly source: AccountId32;
      readonly delegate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly assetId: u64;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isTransferredApproved: boolean;
    readonly asTransferredApproved: {
      readonly assetId: u64;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
      readonly destination: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAssetStatusChanged: boolean;
    readonly asAssetStatusChanged: {
      readonly assetId: u64;
    } & Struct;
    readonly type: 'Created' | 'Issued' | 'Transferred' | 'Burned' | 'TeamChanged' | 'OwnerChanged' | 'Frozen' | 'Thawed' | 'AssetFrozen' | 'AssetThawed' | 'Destroyed' | 'ForceCreated' | 'MetadataSet' | 'MetadataCleared' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'TransferredApproved' | 'AssetStatusChanged';
  }

  /** @name PalletIndicesEvent (42) */
  interface PalletIndicesEvent extends Enum {
    readonly isIndexAssigned: boolean;
    readonly asIndexAssigned: {
      readonly who: AccountId32;
      readonly index: u64;
    } & Struct;
    readonly isIndexFreed: boolean;
    readonly asIndexFreed: {
      readonly index: u64;
    } & Struct;
    readonly isIndexFrozen: boolean;
    readonly asIndexFrozen: {
      readonly index: u64;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'IndexAssigned' | 'IndexFreed' | 'IndexFrozen';
  }

  /** @name PalletContractsEvent (43) */
  interface PalletContractsEvent extends Enum {
    readonly isInstantiated: boolean;
    readonly asInstantiated: {
      readonly deployer: AccountId32;
      readonly contract: AccountId32;
    } & Struct;
    readonly isTerminated: boolean;
    readonly asTerminated: {
      readonly contract: AccountId32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isCodeStored: boolean;
    readonly asCodeStored: {
      readonly codeHash: H256;
    } & Struct;
    readonly isContractEmitted: boolean;
    readonly asContractEmitted: {
      readonly contract: AccountId32;
      readonly data: Bytes;
    } & Struct;
    readonly isCodeRemoved: boolean;
    readonly asCodeRemoved: {
      readonly codeHash: H256;
    } & Struct;
    readonly isContractCodeUpdated: boolean;
    readonly asContractCodeUpdated: {
      readonly contract: AccountId32;
      readonly newCodeHash: H256;
      readonly oldCodeHash: H256;
    } & Struct;
    readonly isCalled: boolean;
    readonly asCalled: {
      readonly caller: AccountId32;
      readonly contract: AccountId32;
    } & Struct;
    readonly isDelegateCalled: boolean;
    readonly asDelegateCalled: {
      readonly contract: AccountId32;
      readonly codeHash: H256;
    } & Struct;
    readonly type: 'Instantiated' | 'Terminated' | 'CodeStored' | 'ContractEmitted' | 'CodeRemoved' | 'ContractCodeUpdated' | 'Called' | 'DelegateCalled';
  }

  /** @name PalletProtosEvent (44) */
  interface PalletProtosEvent extends Enum {
    readonly isUploaded: boolean;
    readonly asUploaded: {
      readonly protoHash: U8aFixed;
      readonly cid: Bytes;
    } & Struct;
    readonly isPatched: boolean;
    readonly asPatched: {
      readonly protoHash: U8aFixed;
      readonly cid: Bytes;
    } & Struct;
    readonly isMetadataChanged: boolean;
    readonly asMetadataChanged: {
      readonly protoHash: U8aFixed;
      readonly cid: Bytes;
    } & Struct;
    readonly isDetached: boolean;
    readonly asDetached: {
      readonly protoHash: U8aFixed;
      readonly cid: Bytes;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly protoHash: U8aFixed;
      readonly ownerId: AccountId32;
    } & Struct;
    readonly isStaked: boolean;
    readonly asStaked: {
      readonly protoHash: U8aFixed;
      readonly accountId: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isUnstaked: boolean;
    readonly asUnstaked: {
      readonly protoHash: U8aFixed;
      readonly accountId: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly type: 'Uploaded' | 'Patched' | 'MetadataChanged' | 'Detached' | 'Transferred' | 'Staked' | 'Unstaked';
  }

  /** @name PalletFragmentsEvent (45) */
  interface PalletFragmentsEvent extends Enum {
    readonly isDefinitionCreated: boolean;
    readonly asDefinitionCreated: {
      readonly definitionHash: U8aFixed;
    } & Struct;
    readonly isDefinitionMetadataChanged: boolean;
    readonly asDefinitionMetadataChanged: {
      readonly fragmentHash: U8aFixed;
      readonly metadataKey: Bytes;
    } & Struct;
    readonly isInstanceMetadataChanged: boolean;
    readonly asInstanceMetadataChanged: {
      readonly fragmentHash: U8aFixed;
      readonly editionId: u64;
      readonly copyId: u64;
      readonly metadataKey: Bytes;
    } & Struct;
    readonly isPublishing: boolean;
    readonly asPublishing: {
      readonly definitionHash: U8aFixed;
    } & Struct;
    readonly isUnpublishing: boolean;
    readonly asUnpublishing: {
      readonly definitionHash: U8aFixed;
    } & Struct;
    readonly isInventoryAdded: boolean;
    readonly asInventoryAdded: {
      readonly accountId: AccountId32;
      readonly definitionHash: U8aFixed;
      readonly fragmentId: ITuple<[u64, u64]>;
    } & Struct;
    readonly isInventoryRemoved: boolean;
    readonly asInventoryRemoved: {
      readonly accountId: AccountId32;
      readonly definitionHash: U8aFixed;
      readonly fragmentId: ITuple<[u64, u64]>;
    } & Struct;
    readonly isInventoryUpdated: boolean;
    readonly asInventoryUpdated: {
      readonly accountId: AccountId32;
      readonly definitionHash: U8aFixed;
      readonly fragmentId: ITuple<[u64, u64]>;
    } & Struct;
    readonly isExpired: boolean;
    readonly asExpired: {
      readonly accountId: AccountId32;
      readonly definitionHash: U8aFixed;
      readonly fragmentId: ITuple<[u64, u64]>;
    } & Struct;
    readonly isResell: boolean;
    readonly asResell: {
      readonly definitionHash: U8aFixed;
      readonly fragmentId: ITuple<[u64, u64]>;
    } & Struct;
    readonly isEndResale: boolean;
    readonly asEndResale: {
      readonly definitionHash: U8aFixed;
      readonly fragmentId: ITuple<[u64, u64]>;
    } & Struct;
    readonly type: 'DefinitionCreated' | 'DefinitionMetadataChanged' | 'InstanceMetadataChanged' | 'Publishing' | 'Unpublishing' | 'InventoryAdded' | 'InventoryRemoved' | 'InventoryUpdated' | 'Expired' | 'Resell' | 'EndResale';
  }

  /** @name PalletDetachEvent (48) */
  interface PalletDetachEvent extends Enum {
    readonly isUploaded: boolean;
    readonly asUploaded: {
      readonly fragmentDataHash: U8aFixed;
    } & Struct;
    readonly isPatched: boolean;
    readonly asPatched: {
      readonly fragmentDataHash: U8aFixed;
    } & Struct;
    readonly isMetadataChanged: boolean;
    readonly asMetadataChanged: {
      readonly fragmentDataHash: U8aFixed;
      readonly remoteSignature: Bytes;
    } & Struct;
    readonly isDetached: boolean;
    readonly asDetached: {
      readonly fragmentDataHash: U8aFixed;
      readonly remoteSignature: Bytes;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly fragmentDataHash: U8aFixed;
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'Uploaded' | 'Patched' | 'MetadataChanged' | 'Detached' | 'Transferred';
  }

  /** @name PalletMultisigEvent (49) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletMultisigTimepoint (50) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u64;
    readonly index: u32;
  }

  /** @name PalletProxyEvent (51) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: Null;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: Null;
      readonly delay: u64;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: Null;
      readonly delay: u64;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name PalletIdentityEvent (53) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name PalletUtilityEvent (54) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletAccountsEvent (55) */
  interface PalletAccountsEvent extends Enum {
    readonly isLinked: boolean;
    readonly asLinked: {
      readonly sender: AccountId32;
      readonly ethKey: H160;
    } & Struct;
    readonly isUnlinked: boolean;
    readonly asUnlinked: {
      readonly sender: AccountId32;
      readonly ethKey: H160;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly ethKey: H160;
      readonly balance: u128;
      readonly locktime: u64;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly ethKey: H160;
      readonly balance: u128;
    } & Struct;
    readonly isSponsoredAccount: boolean;
    readonly asSponsoredAccount: {
      readonly sponsor: AccountId32;
      readonly sponsored: AccountId32;
      readonly externalId: PalletAccountsExternalID;
    } & Struct;
    readonly type: 'Linked' | 'Unlinked' | 'Locked' | 'Unlocked' | 'SponsoredAccount';
  }

  /** @name PalletAccountsExternalID (58) */
  interface PalletAccountsExternalID extends Enum {
    readonly isDiscord: boolean;
    readonly asDiscord: u64;
    readonly type: 'Discord';
  }

  /** @name FrameSystemPhase (59) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (63) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (66) */
  interface FrameSystemCall extends Enum {
    readonly isFillBlock: boolean;
    readonly asFillBlock: {
      readonly ratio: Perbill;
    } & Struct;
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'FillBlock' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (71) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: Weight;
    readonly maxBlock: Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (72) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (73) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: Weight;
    readonly maxExtrinsic: Option<Weight>;
    readonly maxTotal: Option<Weight>;
    readonly reserved: Option<Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (75) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (76) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (77) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (78) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (83) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (85) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (88) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (89) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletGrandpaStoredState (92) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u64;
      readonly delay: u64;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u64;
      readonly delay: u64;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (93) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u64;
    readonly delay: u64;
    readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly forced: Option<u64>;
  }

  /** @name PalletGrandpaCall (96) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u64;
      readonly bestFinalizedBlockNumber: u64;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpFinalityGrandpaEquivocationProof (97) */
  interface SpFinalityGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpFinalityGrandpaEquivocation;
  }

  /** @name SpFinalityGrandpaEquivocation (98) */
  interface SpFinalityGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (99) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (100) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u64;
  }

  /** @name SpFinalityGrandpaAppSignature (101) */
  interface SpFinalityGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (102) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (105) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (106) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u64;
  }

  /** @name SpCoreVoid (108) */
  type SpCoreVoid = Null;

  /** @name PalletGrandpaError (109) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletBalancesBalanceLock (111) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (112) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (115) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesReleases (117) */
  interface PalletBalancesReleases extends Enum {
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V100' | 'V200';
  }

  /** @name PalletBalancesCall (118) */
  interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
  }

  /** @name PalletBalancesError (121) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isCannotTransfer: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'CannotTransfer';
  }

  /** @name PalletTransactionPaymentReleases (123) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletSudoCall (124) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletAssetsCall (126) */
  interface PalletAssetsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly id: Compact<u64>;
      readonly admin: MultiAddress;
      readonly minBalance: u128;
      readonly transferable: bool;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly id: Compact<u64>;
      readonly owner: MultiAddress;
      readonly isSufficient: bool;
      readonly minBalance: Compact<u128>;
      readonly transferable: bool;
    } & Struct;
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly id: Compact<u64>;
      readonly witness: PalletAssetsDestroyWitness;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly id: Compact<u64>;
      readonly beneficiary: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly id: Compact<u64>;
      readonly who: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly id: Compact<u64>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly id: Compact<u64>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly id: Compact<u64>;
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly id: Compact<u64>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly id: Compact<u64>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isFreezeAsset: boolean;
    readonly asFreezeAsset: {
      readonly id: Compact<u64>;
    } & Struct;
    readonly isThawAsset: boolean;
    readonly asThawAsset: {
      readonly id: Compact<u64>;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly id: Compact<u64>;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly id: Compact<u64>;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly id: Compact<u64>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly id: Compact<u64>;
    } & Struct;
    readonly isForceSetMetadata: boolean;
    readonly asForceSetMetadata: {
      readonly id: Compact<u64>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isForceClearMetadata: boolean;
    readonly asForceClearMetadata: {
      readonly id: Compact<u64>;
    } & Struct;
    readonly isForceAssetStatus: boolean;
    readonly asForceAssetStatus: {
      readonly id: Compact<u64>;
      readonly owner: MultiAddress;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
      readonly minBalance: Compact<u128>;
      readonly isSufficient: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly id: Compact<u64>;
      readonly delegate: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly id: Compact<u64>;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isForceCancelApproval: boolean;
    readonly asForceCancelApproval: {
      readonly id: Compact<u64>;
      readonly owner: MultiAddress;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isTransferApproved: boolean;
    readonly asTransferApproved: {
      readonly id: Compact<u64>;
      readonly owner: MultiAddress;
      readonly destination: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTouch: boolean;
    readonly asTouch: {
      readonly id: Compact<u64>;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly id: Compact<u64>;
      readonly allowBurn: bool;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'Destroy' | 'Mint' | 'Burn' | 'Transfer' | 'TransferKeepAlive' | 'ForceTransfer' | 'Freeze' | 'Thaw' | 'FreezeAsset' | 'ThawAsset' | 'TransferOwnership' | 'SetTeam' | 'SetMetadata' | 'ClearMetadata' | 'ForceSetMetadata' | 'ForceClearMetadata' | 'ForceAssetStatus' | 'ApproveTransfer' | 'CancelApproval' | 'ForceCancelApproval' | 'TransferApproved' | 'Touch' | 'Refund';
  }

  /** @name PalletAssetsDestroyWitness (127) */
  interface PalletAssetsDestroyWitness extends Struct {
    readonly accounts: Compact<u32>;
    readonly sufficients: Compact<u32>;
    readonly approvals: Compact<u32>;
  }

  /** @name PalletIndicesCall (128) */
  interface PalletIndicesCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly index: u64;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly new_: MultiAddress;
      readonly index: u64;
    } & Struct;
    readonly isFree: boolean;
    readonly asFree: {
      readonly index: u64;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly new_: MultiAddress;
      readonly index: u64;
      readonly freeze: bool;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly index: u64;
    } & Struct;
    readonly type: 'Claim' | 'Transfer' | 'Free' | 'ForceTransfer' | 'Freeze';
  }

  /** @name PalletContractsCall (129) */
  interface PalletContractsCall extends Enum {
    readonly isCall: boolean;
    readonly asCall: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<Weight>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiateWithCode: boolean;
    readonly asInstantiateWithCode: {
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<Weight>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isInstantiate: boolean;
    readonly asInstantiate: {
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<Weight>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isUploadCode: boolean;
    readonly asUploadCode: {
      readonly code: Bytes;
      readonly storageDepositLimit: Option<Compact<u128>>;
    } & Struct;
    readonly isRemoveCode: boolean;
    readonly asRemoveCode: {
      readonly codeHash: H256;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly dest: MultiAddress;
      readonly codeHash: H256;
    } & Struct;
    readonly type: 'Call' | 'InstantiateWithCode' | 'Instantiate' | 'UploadCode' | 'RemoveCode' | 'SetCode';
  }

  /** @name PalletProtosCall (132) */
  interface PalletProtosCall extends Enum {
    readonly isUpload: boolean;
    readonly asUpload: {
      readonly references: Vec<U8aFixed>;
      readonly category: ProtosCategories;
      readonly tags: Vec<Bytes>;
      readonly linkedAsset: Option<PalletProtosLinkedAsset>;
      readonly license: PalletProtosUsageLicense;
      readonly data: Bytes;
    } & Struct;
    readonly isPatch: boolean;
    readonly asPatch: {
      readonly protoHash: U8aFixed;
      readonly license: Option<PalletProtosUsageLicense>;
      readonly newReferences: Vec<U8aFixed>;
      readonly tags: Option<Vec<Bytes>>;
      readonly data: Bytes;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly protoHash: U8aFixed;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly protoHash: U8aFixed;
      readonly metadataKey: Bytes;
      readonly data: Bytes;
    } & Struct;
    readonly isDetach: boolean;
    readonly asDetach: {
      readonly protoHash: U8aFixed;
      readonly targetChain: PalletDetachSupportedChains;
      readonly targetAccount: Bytes;
    } & Struct;
    readonly isCurate: boolean;
    readonly asCurate: {
      readonly protoHash: U8aFixed;
      readonly amount: u128;
    } & Struct;
    readonly isBan: boolean;
    readonly asBan: {
      readonly protoHash: U8aFixed;
    } & Struct;
    readonly type: 'Upload' | 'Patch' | 'Transfer' | 'SetMetadata' | 'Detach' | 'Curate' | 'Ban';
  }

  /** @name ProtosCategories (134) */
  interface ProtosCategories extends Enum {
    readonly isText: boolean;
    readonly asText: ProtosCategoriesTextCategories;
    readonly isTrait: boolean;
    readonly asTrait: Option<U8aFixed>;
    readonly isShards: boolean;
    readonly asShards: ProtosCategoriesShardsScriptInfo;
    readonly isAudio: boolean;
    readonly asAudio: ProtosCategoriesAudioCategories;
    readonly isTexture: boolean;
    readonly asTexture: ProtosCategoriesTextureCategories;
    readonly isVector: boolean;
    readonly asVector: ProtosCategoriesVectorCategories;
    readonly isVideo: boolean;
    readonly asVideo: ProtosCategoriesVideoCategories;
    readonly isModel: boolean;
    readonly asModel: ProtosCategoriesModelCategories;
    readonly isBinary: boolean;
    readonly asBinary: ProtosCategoriesBinaryCategories;
    readonly type: 'Text' | 'Trait' | 'Shards' | 'Audio' | 'Texture' | 'Vector' | 'Video' | 'Model' | 'Binary';
  }

  /** @name ProtosCategoriesTextCategories (135) */
  interface ProtosCategoriesTextCategories extends Enum {
    readonly isPlain: boolean;
    readonly isJson: boolean;
    readonly type: 'Plain' | 'Json';
  }

  /** @name ProtosCategoriesShardsScriptInfo (137) */
  interface ProtosCategoriesShardsScriptInfo extends Struct {
    readonly format: ProtosCategoriesShardsFormat;
    readonly requiring: Vec<U8aFixed>;
    readonly implementing: Vec<U8aFixed>;
  }

  /** @name ProtosCategoriesShardsFormat (138) */
  interface ProtosCategoriesShardsFormat extends Enum {
    readonly isEdn: boolean;
    readonly isBinary: boolean;
    readonly type: 'Edn' | 'Binary';
  }

  /** @name ProtosCategoriesAudioCategories (140) */
  interface ProtosCategoriesAudioCategories extends Enum {
    readonly isOggFile: boolean;
    readonly isMp3File: boolean;
    readonly type: 'OggFile' | 'Mp3File';
  }

  /** @name ProtosCategoriesTextureCategories (141) */
  interface ProtosCategoriesTextureCategories extends Enum {
    readonly isPngFile: boolean;
    readonly isJpgFile: boolean;
    readonly type: 'PngFile' | 'JpgFile';
  }

  /** @name ProtosCategoriesVectorCategories (142) */
  interface ProtosCategoriesVectorCategories extends Enum {
    readonly isSvgFile: boolean;
    readonly isTtfFile: boolean;
    readonly type: 'SvgFile' | 'TtfFile';
  }

  /** @name ProtosCategoriesVideoCategories (143) */
  interface ProtosCategoriesVideoCategories extends Enum {
    readonly isMkvFile: boolean;
    readonly isMp4File: boolean;
    readonly type: 'MkvFile' | 'Mp4File';
  }

  /** @name ProtosCategoriesModelCategories (144) */
  interface ProtosCategoriesModelCategories extends Enum {
    readonly isGltfFile: boolean;
    readonly isSdf: boolean;
    readonly isPhysicsCollider: boolean;
    readonly type: 'GltfFile' | 'Sdf' | 'PhysicsCollider';
  }

  /** @name ProtosCategoriesBinaryCategories (145) */
  interface ProtosCategoriesBinaryCategories extends Enum {
    readonly isWasmProgram: boolean;
    readonly isWasmReactor: boolean;
    readonly isBlendFile: boolean;
    readonly isOnnxModel: boolean;
    readonly type: 'WasmProgram' | 'WasmReactor' | 'BlendFile' | 'OnnxModel';
  }

  /** @name PalletProtosLinkedAsset (147) */
  interface PalletProtosLinkedAsset extends Enum {
    readonly isErc721: boolean;
    readonly asErc721: ITuple<[H160, U256, PalletProtosLinkSource]>;
    readonly type: 'Erc721';
  }

  /** @name PalletProtosLinkSource (150) */
  interface PalletProtosLinkSource extends Enum {
    readonly isEvm: boolean;
    readonly asEvm: ITuple<[SpCoreEcdsaSignature, u64, U256]>;
    readonly type: 'Evm';
  }

  /** @name SpCoreEcdsaSignature (151) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name PalletProtosUsageLicense (153) */
  interface PalletProtosUsageLicense extends Enum {
    readonly isClosed: boolean;
    readonly isOpen: boolean;
    readonly isTickets: boolean;
    readonly asTickets: Compact<u64>;
    readonly isContract: boolean;
    readonly asContract: AccountId32;
    readonly type: 'Closed' | 'Open' | 'Tickets' | 'Contract';
  }

  /** @name PalletDetachSupportedChains (156) */
  interface PalletDetachSupportedChains extends Enum {
    readonly isEthereumMainnet: boolean;
    readonly isEthereumRinkeby: boolean;
    readonly isEthereumGoerli: boolean;
    readonly type: 'EthereumMainnet' | 'EthereumRinkeby' | 'EthereumGoerli';
  }

  /** @name PalletFragmentsCall (157) */
  interface PalletFragmentsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly protoHash: U8aFixed;
      readonly metadata: PalletFragmentsFragmentMetadata;
      readonly permissions: ProtosPermissionsFragmentPerms;
      readonly unique: Option<PalletFragmentsUniqueOptions>;
      readonly maxSupply: Option<u64>;
    } & Struct;
    readonly isSetDefinitionMetadata: boolean;
    readonly asSetDefinitionMetadata: {
      readonly fragmentHash: U8aFixed;
      readonly metadataKey: Bytes;
      readonly data: Bytes;
    } & Struct;
    readonly isSetInstanceMetadata: boolean;
    readonly asSetInstanceMetadata: {
      readonly definitionHash: U8aFixed;
      readonly editionId: u64;
      readonly copyId: u64;
      readonly metadataKey: Bytes;
      readonly data: Bytes;
    } & Struct;
    readonly isPublish: boolean;
    readonly asPublish: {
      readonly definitionHash: U8aFixed;
      readonly price: u128;
      readonly quantity: Option<u64>;
      readonly expires: Option<u64>;
      readonly stackAmount: Option<u64>;
    } & Struct;
    readonly isUnpublish: boolean;
    readonly asUnpublish: {
      readonly definitionHash: U8aFixed;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly definitionHash: U8aFixed;
      readonly options: PalletFragmentsFragmentBuyOptions;
      readonly stackAmount: Option<u64>;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly definitionHash: U8aFixed;
      readonly options: PalletFragmentsFragmentBuyOptions;
    } & Struct;
    readonly isGive: boolean;
    readonly asGive: {
      readonly definitionHash: U8aFixed;
      readonly editionId: u64;
      readonly copyId: u64;
      readonly to: MultiAddress;
      readonly newPermissions: Option<ProtosPermissionsFragmentPerms>;
      readonly expiration: Option<u64>;
    } & Struct;
    readonly isCreateAccount: boolean;
    readonly asCreateAccount: {
      readonly definitionHash: U8aFixed;
      readonly edition: u64;
      readonly copy: u64;
    } & Struct;
    readonly isResell: boolean;
    readonly asResell: {
      readonly definitionHash: U8aFixed;
      readonly editionId: u64;
      readonly copyId: u64;
      readonly newPermissions: Option<ProtosPermissionsFragmentPerms>;
      readonly expiration: Option<u64>;
      readonly secondarySaleType: PalletFragmentsSecondarySaleType;
    } & Struct;
    readonly isEndResale: boolean;
    readonly asEndResale: {
      readonly definitionHash: U8aFixed;
      readonly editionId: u64;
      readonly copyId: u64;
    } & Struct;
    readonly isSecondaryBuy: boolean;
    readonly asSecondaryBuy: {
      readonly definitionHash: U8aFixed;
      readonly editionId: u64;
      readonly copyId: u64;
      readonly options: PalletFragmentsSecondarySaleBuyOptions;
    } & Struct;
    readonly type: 'Create' | 'SetDefinitionMetadata' | 'SetInstanceMetadata' | 'Publish' | 'Unpublish' | 'Mint' | 'Buy' | 'Give' | 'CreateAccount' | 'Resell' | 'EndResale' | 'SecondaryBuy';
  }

  /** @name PalletFragmentsFragmentMetadata (158) */
  interface PalletFragmentsFragmentMetadata extends Struct {
    readonly name: Bytes;
    readonly currency: Option<u64>;
  }

  /** @name ProtosPermissionsFragmentPerms (159) */
  interface ProtosPermissionsFragmentPerms extends Struct {
    readonly bits: u32;
  }

  /** @name PalletFragmentsUniqueOptions (161) */
  interface PalletFragmentsUniqueOptions extends Struct {
    readonly mutable: bool;
  }

  /** @name PalletFragmentsFragmentBuyOptions (162) */
  interface PalletFragmentsFragmentBuyOptions extends Enum {
    readonly isQuantity: boolean;
    readonly asQuantity: u64;
    readonly isUniqueData: boolean;
    readonly asUniqueData: Bytes;
    readonly type: 'Quantity' | 'UniqueData';
  }

  /** @name PalletFragmentsSecondarySaleType (164) */
  interface PalletFragmentsSecondarySaleType extends Enum {
    readonly isNormal: boolean;
    readonly asNormal: u128;
    readonly type: 'Normal';
  }

  /** @name PalletFragmentsSecondarySaleBuyOptions (165) */
  interface PalletFragmentsSecondarySaleBuyOptions extends Enum {
    readonly isNormal: boolean;
    readonly type: 'Normal';
  }

  /** @name PalletDetachCall (166) */
  interface PalletDetachCall extends Enum {
    readonly isAddEthAuth: boolean;
    readonly asAddEthAuth: {
      readonly public: SpCoreEcdsaPublic;
    } & Struct;
    readonly isDelEthAuth: boolean;
    readonly asDelEthAuth: {
      readonly public: SpCoreEcdsaPublic;
    } & Struct;
    readonly isAddKey: boolean;
    readonly asAddKey: {
      readonly public: SpCoreEd25519Public;
    } & Struct;
    readonly isDelKey: boolean;
    readonly asDelKey: {
      readonly public: SpCoreEd25519Public;
    } & Struct;
    readonly isInternalFinalizeDetach: boolean;
    readonly asInternalFinalizeDetach: {
      readonly data: PalletDetachDetachInternalData;
      readonly signature: SpRuntimeMultiSignature;
    } & Struct;
    readonly type: 'AddEthAuth' | 'DelEthAuth' | 'AddKey' | 'DelKey' | 'InternalFinalizeDetach';
  }

  /** @name SpCoreEcdsaPublic (167) */
  interface SpCoreEcdsaPublic extends U8aFixed {}

  /** @name PalletDetachDetachInternalData (169) */
  interface PalletDetachDetachInternalData extends Struct {
    readonly public: SpRuntimeMultiSigner;
    readonly hash_: U8aFixed;
    readonly targetChain: PalletDetachSupportedChains;
    readonly targetAccount: Bytes;
    readonly remoteSignature: Bytes;
    readonly nonce: u64;
  }

  /** @name SpRuntimeMultiSigner (170) */
  interface SpRuntimeMultiSigner extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Public;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Public;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaPublic;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpRuntimeMultiSignature (171) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreSr25519Signature (172) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name PalletMultisigCall (173) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: WrapperKeepOpaque<Call>;
      readonly storeCall: bool;
      readonly maxWeight: Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletProxyCall (177) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<Null>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: Null;
      readonly delay: u64;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: Null;
      readonly delay: u64;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: Null;
      readonly delay: u64;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: MultiAddress;
      readonly proxyType: Null;
      readonly index: u16;
      readonly height: Compact<u64>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: MultiAddress;
      readonly real: MultiAddress;
      readonly forceProxyType: Option<Null>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletIdentityCall (179) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentityIdentityInfo (180) */
  interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (216) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (217) */
  interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PalletIdentityJudgement (218) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PalletUtilityCall (219) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: ClamorRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch';
  }

  /** @name ClamorRuntimeOriginCaller (221) */
  interface ClamorRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly type: 'System' | 'Void';
  }

  /** @name FrameSupportDispatchRawOrigin (222) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletAccountsCall (223) */
  interface PalletAccountsCall extends Enum {
    readonly isAddKey: boolean;
    readonly asAddKey: {
      readonly public: SpCoreEd25519Public;
    } & Struct;
    readonly isDelKey: boolean;
    readonly asDelKey: {
      readonly public: SpCoreEd25519Public;
    } & Struct;
    readonly isLink: boolean;
    readonly asLink: {
      readonly signature: SpCoreEcdsaSignature;
    } & Struct;
    readonly isUnlink: boolean;
    readonly asUnlink: {
      readonly account: H160;
    } & Struct;
    readonly isInternalLockUpdate: boolean;
    readonly asInternalLockUpdate: {
      readonly data: PalletAccountsEthLockUpdate;
      readonly signature: SpRuntimeMultiSignature;
    } & Struct;
    readonly isSponsorAccount: boolean;
    readonly asSponsorAccount: {
      readonly externalId: PalletAccountsExternalID;
    } & Struct;
    readonly isAddSponsor: boolean;
    readonly asAddSponsor: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemoveSponsor: boolean;
    readonly asRemoveSponsor: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'AddKey' | 'DelKey' | 'Link' | 'Unlink' | 'InternalLockUpdate' | 'SponsorAccount' | 'AddSponsor' | 'RemoveSponsor';
  }

  /** @name PalletAccountsEthLockUpdate (224) */
  interface PalletAccountsEthLockUpdate extends Struct {
    readonly public: SpRuntimeMultiSigner;
    readonly amount: U256;
    readonly locktime: U256;
    readonly sender: H160;
    readonly signature: SpCoreEcdsaSignature;
    readonly lock: bool;
    readonly blockNumber: u64;
  }

  /** @name PalletSudoError (225) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletAssetsAssetDetails (226) */
  interface PalletAssetsAssetDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly freezer: AccountId32;
    readonly supply: u128;
    readonly deposit: u128;
    readonly minBalance: u128;
    readonly isSufficient: bool;
    readonly accounts: u32;
    readonly sufficients: u32;
    readonly approvals: u32;
    readonly isFrozen: bool;
    readonly isTransferable: bool;
  }

  /** @name PalletAssetsAssetAccount (228) */
  interface PalletAssetsAssetAccount extends Struct {
    readonly balance: u128;
    readonly isFrozen: bool;
    readonly reason: PalletAssetsExistenceReason;
    readonly extra: Null;
  }

  /** @name PalletAssetsExistenceReason (229) */
  interface PalletAssetsExistenceReason extends Enum {
    readonly isConsumer: boolean;
    readonly isSufficient: boolean;
    readonly isDepositHeld: boolean;
    readonly asDepositHeld: u128;
    readonly isDepositRefunded: boolean;
    readonly type: 'Consumer' | 'Sufficient' | 'DepositHeld' | 'DepositRefunded';
  }

  /** @name PalletAssetsApproval (231) */
  interface PalletAssetsApproval extends Struct {
    readonly amount: u128;
    readonly deposit: u128;
  }

  /** @name PalletAssetsAssetMetadata (232) */
  interface PalletAssetsAssetMetadata extends Struct {
    readonly deposit: u128;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
    readonly isFrozen: bool;
  }

  /** @name PalletAssetsError (234) */
  interface PalletAssetsError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isNoAccount: boolean;
    readonly isNoPermission: boolean;
    readonly isUnknown: boolean;
    readonly isFrozen: boolean;
    readonly isInUse: boolean;
    readonly isBadWitness: boolean;
    readonly isMinBalanceZero: boolean;
    readonly isNoProvider: boolean;
    readonly isBadMetadata: boolean;
    readonly isUnapproved: boolean;
    readonly isWouldDie: boolean;
    readonly isAlreadyExists: boolean;
    readonly isNoDeposit: boolean;
    readonly isWouldBurn: boolean;
    readonly isCannotTransfer: boolean;
    readonly type: 'BalanceLow' | 'NoAccount' | 'NoPermission' | 'Unknown' | 'Frozen' | 'InUse' | 'BadWitness' | 'MinBalanceZero' | 'NoProvider' | 'BadMetadata' | 'Unapproved' | 'WouldDie' | 'AlreadyExists' | 'NoDeposit' | 'WouldBurn' | 'CannotTransfer';
  }

  /** @name PalletIndicesError (236) */
  interface PalletIndicesError extends Enum {
    readonly isNotAssigned: boolean;
    readonly isNotOwner: boolean;
    readonly isInUse: boolean;
    readonly isNotTransfer: boolean;
    readonly isPermanent: boolean;
    readonly type: 'NotAssigned' | 'NotOwner' | 'InUse' | 'NotTransfer' | 'Permanent';
  }

  /** @name PalletContractsWasmPrefabWasmModule (238) */
  interface PalletContractsWasmPrefabWasmModule extends Struct {
    readonly instructionWeightsVersion: Compact<u32>;
    readonly initial: Compact<u32>;
    readonly maximum: Compact<u32>;
    readonly code: Bytes;
  }

  /** @name PalletContractsWasmOwnerInfo (240) */
  interface PalletContractsWasmOwnerInfo extends Struct {
    readonly owner: AccountId32;
    readonly deposit: Compact<u128>;
    readonly refcount: Compact<u64>;
  }

  /** @name PalletContractsStorageContractInfo (241) */
  interface PalletContractsStorageContractInfo extends Struct {
    readonly trieId: Bytes;
    readonly codeHash: H256;
    readonly storageBytes: u32;
    readonly storageItems: u32;
    readonly storageByteDeposit: u128;
    readonly storageItemDeposit: u128;
    readonly storageBaseDeposit: u128;
  }

  /** @name PalletContractsStorageDeletedContract (244) */
  interface PalletContractsStorageDeletedContract extends Struct {
    readonly trieId: Bytes;
  }

  /** @name PalletContractsSchedule (246) */
  interface PalletContractsSchedule extends Struct {
    readonly limits: PalletContractsScheduleLimits;
    readonly instructionWeights: PalletContractsScheduleInstructionWeights;
    readonly hostFnWeights: PalletContractsScheduleHostFnWeights;
  }

  /** @name PalletContractsScheduleLimits (247) */
  interface PalletContractsScheduleLimits extends Struct {
    readonly eventTopics: u32;
    readonly stackHeight: Option<u32>;
    readonly globals: u32;
    readonly parameters: u32;
    readonly memoryPages: u32;
    readonly tableSize: u32;
    readonly brTableSize: u32;
    readonly subjectLen: u32;
    readonly callDepth: u32;
    readonly payloadLen: u32;
  }

  /** @name PalletContractsScheduleInstructionWeights (249) */
  interface PalletContractsScheduleInstructionWeights extends Struct {
    readonly version: u32;
    readonly i64const: u32;
    readonly i64load: u32;
    readonly i64store: u32;
    readonly select: u32;
    readonly r_if: u32;
    readonly br: u32;
    readonly brIf: u32;
    readonly brTable: u32;
    readonly brTablePerEntry: u32;
    readonly call: u32;
    readonly callIndirect: u32;
    readonly callIndirectPerParam: u32;
    readonly localGet: u32;
    readonly localSet: u32;
    readonly localTee: u32;
    readonly globalGet: u32;
    readonly globalSet: u32;
    readonly memoryCurrent: u32;
    readonly memoryGrow: u32;
    readonly i64clz: u32;
    readonly i64ctz: u32;
    readonly i64popcnt: u32;
    readonly i64eqz: u32;
    readonly i64extendsi32: u32;
    readonly i64extendui32: u32;
    readonly i32wrapi64: u32;
    readonly i64eq: u32;
    readonly i64ne: u32;
    readonly i64lts: u32;
    readonly i64ltu: u32;
    readonly i64gts: u32;
    readonly i64gtu: u32;
    readonly i64les: u32;
    readonly i64leu: u32;
    readonly i64ges: u32;
    readonly i64geu: u32;
    readonly i64add: u32;
    readonly i64sub: u32;
    readonly i64mul: u32;
    readonly i64divs: u32;
    readonly i64divu: u32;
    readonly i64rems: u32;
    readonly i64remu: u32;
    readonly i64and: u32;
    readonly i64or: u32;
    readonly i64xor: u32;
    readonly i64shl: u32;
    readonly i64shrs: u32;
    readonly i64shru: u32;
    readonly i64rotl: u32;
    readonly i64rotr: u32;
  }

  /** @name PalletContractsScheduleHostFnWeights (250) */
  interface PalletContractsScheduleHostFnWeights extends Struct {
    readonly caller: u64;
    readonly isContract: u64;
    readonly codeHash: u64;
    readonly ownCodeHash: u64;
    readonly callerIsOrigin: u64;
    readonly address: u64;
    readonly gasLeft: u64;
    readonly balance: u64;
    readonly valueTransferred: u64;
    readonly minimumBalance: u64;
    readonly blockNumber: u64;
    readonly now: u64;
    readonly weightToFee: u64;
    readonly gas: u64;
    readonly input: u64;
    readonly inputPerByte: u64;
    readonly r_return: u64;
    readonly returnPerByte: u64;
    readonly terminate: u64;
    readonly random: u64;
    readonly depositEvent: u64;
    readonly depositEventPerTopic: u64;
    readonly depositEventPerByte: u64;
    readonly debugMessage: u64;
    readonly setStorage: u64;
    readonly setStoragePerNewByte: u64;
    readonly setStoragePerOldByte: u64;
    readonly setCodeHash: u64;
    readonly clearStorage: u64;
    readonly clearStoragePerByte: u64;
    readonly containsStorage: u64;
    readonly containsStoragePerByte: u64;
    readonly getStorage: u64;
    readonly getStoragePerByte: u64;
    readonly takeStorage: u64;
    readonly takeStoragePerByte: u64;
    readonly transfer: u64;
    readonly call: u64;
    readonly delegateCall: u64;
    readonly callTransferSurcharge: u64;
    readonly callPerClonedByte: u64;
    readonly instantiate: u64;
    readonly instantiateTransferSurcharge: u64;
    readonly instantiatePerSaltByte: u64;
    readonly hashSha2256: u64;
    readonly hashSha2256PerByte: u64;
    readonly hashKeccak256: u64;
    readonly hashKeccak256PerByte: u64;
    readonly hashBlake2256: u64;
    readonly hashBlake2256PerByte: u64;
    readonly hashBlake2128: u64;
    readonly hashBlake2128PerByte: u64;
    readonly ecdsaRecover: u64;
    readonly ecdsaToEthAddress: u64;
  }

  /** @name PalletContractsError (251) */
  interface PalletContractsError extends Enum {
    readonly isInvalidScheduleVersion: boolean;
    readonly isInvalidCallFlags: boolean;
    readonly isOutOfGas: boolean;
    readonly isOutputBufferTooSmall: boolean;
    readonly isTransferFailed: boolean;
    readonly isMaxCallDepthReached: boolean;
    readonly isContractNotFound: boolean;
    readonly isCodeTooLarge: boolean;
    readonly isCodeNotFound: boolean;
    readonly isOutOfBounds: boolean;
    readonly isDecodingFailed: boolean;
    readonly isContractTrapped: boolean;
    readonly isValueTooLarge: boolean;
    readonly isTerminatedWhileReentrant: boolean;
    readonly isInputForwarded: boolean;
    readonly isRandomSubjectTooLong: boolean;
    readonly isTooManyTopics: boolean;
    readonly isDuplicateTopics: boolean;
    readonly isNoChainExtension: boolean;
    readonly isDeletionQueueFull: boolean;
    readonly isDuplicateContract: boolean;
    readonly isTerminatedInConstructor: boolean;
    readonly isDebugMessageInvalidUTF8: boolean;
    readonly isReentranceDenied: boolean;
    readonly isStorageDepositNotEnoughFunds: boolean;
    readonly isStorageDepositLimitExhausted: boolean;
    readonly isCodeInUse: boolean;
    readonly isContractReverted: boolean;
    readonly isCodeRejected: boolean;
    readonly type: 'InvalidScheduleVersion' | 'InvalidCallFlags' | 'OutOfGas' | 'OutputBufferTooSmall' | 'TransferFailed' | 'MaxCallDepthReached' | 'ContractNotFound' | 'CodeTooLarge' | 'CodeNotFound' | 'OutOfBounds' | 'DecodingFailed' | 'ContractTrapped' | 'ValueTooLarge' | 'TerminatedWhileReentrant' | 'InputForwarded' | 'RandomSubjectTooLong' | 'TooManyTopics' | 'DuplicateTopics' | 'NoChainExtension' | 'DeletionQueueFull' | 'DuplicateContract' | 'TerminatedInConstructor' | 'DebugMessageInvalidUTF8' | 'ReentranceDenied' | 'StorageDepositNotEnoughFunds' | 'StorageDepositLimitExhausted' | 'CodeInUse' | 'ContractReverted' | 'CodeRejected';
  }

  /** @name PalletProtosProto (252) */
  interface PalletProtosProto extends Struct {
    readonly block: u64;
    readonly patches: Vec<PalletProtosProtoPatch>;
    readonly license: PalletProtosUsageLicense;
    readonly creator: AccountId32;
    readonly owner: PalletProtosProtoOwner;
    readonly references: Vec<U8aFixed>;
    readonly category: ProtosCategories;
    readonly tags: Vec<Compact<u64>>;
    readonly metadata: BTreeMap<Compact<u64>, U8aFixed>;
    readonly accountsInfo: PalletProtosAccountsInfo;
  }

  /** @name PalletProtosProtoPatch (254) */
  interface PalletProtosProtoPatch extends Struct {
    readonly block: u64;
    readonly dataHash: U8aFixed;
    readonly references: Vec<U8aFixed>;
  }

  /** @name PalletProtosProtoOwner (255) */
  interface PalletProtosProtoOwner extends Enum {
    readonly isUser: boolean;
    readonly asUser: AccountId32;
    readonly isExternalAsset: boolean;
    readonly asExternalAsset: PalletProtosLinkedAsset;
    readonly type: 'User' | 'ExternalAsset';
  }

  /** @name PalletProtosAccountsInfo (260) */
  interface PalletProtosAccountsInfo extends Struct {
    readonly activeAccounts: u128;
    readonly lifetimeAccounts: u128;
  }

  /** @name PalletProtosError (263) */
  interface PalletProtosError extends Enum {
    readonly isSystematicFailure: boolean;
    readonly isProtoNotFound: boolean;
    readonly isProtoExists: boolean;
    readonly isDetached: boolean;
    readonly isUnauthorized: boolean;
    readonly isNotEnoughTickets: boolean;
    readonly isCurationNotFound: boolean;
    readonly isReferenceNotFound: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isCircularReference: boolean;
    readonly type: 'SystematicFailure' | 'ProtoNotFound' | 'ProtoExists' | 'Detached' | 'Unauthorized' | 'NotEnoughTickets' | 'CurationNotFound' | 'ReferenceNotFound' | 'InsufficientBalance' | 'CircularReference';
  }

  /** @name PalletFragmentsFragmentDefinition (265) */
  interface PalletFragmentsFragmentDefinition extends Struct {
    readonly protoHash: U8aFixed;
    readonly metadata: PalletFragmentsFragmentMetadata;
    readonly permissions: ProtosPermissionsFragmentPerms;
    readonly unique: Option<PalletFragmentsUniqueOptions>;
    readonly maxSupply: Option<Compact<u64>>;
    readonly creator: AccountId32;
    readonly createdAt: u64;
    readonly customMetadata: BTreeMap<Compact<u64>, U8aFixed>;
  }

  /** @name PalletFragmentsPublishingData (267) */
  interface PalletFragmentsPublishingData extends Struct {
    readonly price: Compact<u128>;
    readonly unitsLeft: Option<Compact<u64>>;
    readonly expiration: Option<u64>;
    readonly stackAmount: Option<Compact<u64>>;
  }

  /** @name PalletFragmentsSecondarySaleData (269) */
  interface PalletFragmentsSecondarySaleData extends Struct {
    readonly owner: AccountId32;
    readonly newPermissions: Option<ProtosPermissionsFragmentPerms>;
    readonly expiration: Option<u64>;
    readonly secondarySaleType: PalletFragmentsSecondarySaleType;
  }

  /** @name PalletFragmentsFragmentInstance (271) */
  interface PalletFragmentsFragmentInstance extends Struct {
    readonly permissions: ProtosPermissionsFragmentPerms;
    readonly createdAt: u64;
    readonly customData: Option<U8aFixed>;
    readonly expiringAt: Option<u64>;
    readonly stackAmount: Option<Compact<u64>>;
    readonly metadata: BTreeMap<Compact<u64>, Compact<u64>>;
  }

  /** @name PalletFragmentsError (282) */
  interface PalletFragmentsError extends Enum {
    readonly isProtoNotFound: boolean;
    readonly isProtoOwnerNotFound: boolean;
    readonly isNoPermission: boolean;
    readonly isDetached: boolean;
    readonly isAlreadyExist: boolean;
    readonly isMetadataNameIsEmpty: boolean;
    readonly isNotFound: boolean;
    readonly isExpired: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isReceiverBelowMinimumBalance: boolean;
    readonly isSoldOut: boolean;
    readonly isSaleAlreadyOpen: boolean;
    readonly isMaxSupplyReached: boolean;
    readonly isPublishedQuantityReached: boolean;
    readonly isParamsNotValid: boolean;
    readonly isSystematicFailure: boolean;
    readonly isUniqueDataExists: boolean;
    readonly isCurrencyNotFound: boolean;
    readonly type: 'ProtoNotFound' | 'ProtoOwnerNotFound' | 'NoPermission' | 'Detached' | 'AlreadyExist' | 'MetadataNameIsEmpty' | 'NotFound' | 'Expired' | 'InsufficientBalance' | 'ReceiverBelowMinimumBalance' | 'SoldOut' | 'SaleAlreadyOpen' | 'MaxSupplyReached' | 'PublishedQuantityReached' | 'ParamsNotValid' | 'SystematicFailure' | 'UniqueDataExists' | 'CurrencyNotFound';
  }

  /** @name PalletDetachDetachRequest (284) */
  interface PalletDetachDetachRequest extends Struct {
    readonly hash_: U8aFixed;
    readonly targetChain: PalletDetachSupportedChains;
    readonly targetAccount: Bytes;
  }

  /** @name PalletDetachExportData (286) */
  interface PalletDetachExportData extends Struct {
    readonly chain: PalletDetachSupportedChains;
    readonly owner: Bytes;
    readonly nonce: u64;
  }

  /** @name PalletDetachError (291) */
  interface PalletDetachError extends Enum {
    readonly isDetached: boolean;
    readonly isNoValidator: boolean;
    readonly isSigningFailed: boolean;
    readonly type: 'Detached' | 'NoValidator' | 'SigningFailed';
  }

  /** @name PalletMultisigMultisig (293) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (295) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletProxyProxyDefinition (298) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: Null;
    readonly delay: u64;
  }

  /** @name PalletProxyAnnouncement (302) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u64;
  }

  /** @name PalletProxyError (304) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletIdentityRegistration (305) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (313) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (315) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity';
  }

  /** @name PalletUtilityError (316) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletAccountsEthLock (317) */
  interface PalletAccountsEthLock extends Struct {
    readonly amount: u128;
    readonly blockNumber: u64;
  }

  /** @name PalletAccountsAccountInfo (318) */
  interface PalletAccountsAccountInfo extends Struct {
    readonly accountId: AccountId32;
    readonly createdAt: u64;
  }

  /** @name PalletAccountsError (320) */
  interface PalletAccountsError extends Enum {
    readonly isSystematicFailure: boolean;
    readonly isVerificationFailed: boolean;
    readonly isLinkAlreadyProcessed: boolean;
    readonly isLinkNotFound: boolean;
    readonly isAccountAlreadyLinked: boolean;
    readonly isAccountNotLinked: boolean;
    readonly isDifferentAccountLinked: boolean;
    readonly isAccountAlreadyExists: boolean;
    readonly isTooManyProxies: boolean;
    readonly type: 'SystematicFailure' | 'VerificationFailed' | 'LinkAlreadyProcessed' | 'LinkNotFound' | 'AccountAlreadyLinked' | 'AccountNotLinked' | 'DifferentAccountLinked' | 'AccountAlreadyExists' | 'TooManyProxies';
  }

  /** @name FrameSystemExtensionsCheckSpecVersion (323) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (324) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (325) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (328) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (329) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (330) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name ClamorRuntimeRuntime (331) */
  type ClamorRuntimeRuntime = Null;

} // declare module
