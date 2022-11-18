import '@polkadot/api-base/types/storage';
import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { BTreeSet, Bytes, Compact, Option, U8aFixed, Vec, WrapperKeepOpaque, bool, u128, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H160, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportDispatchPerDispatchClassWeight, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, PalletAccountsAccountInfo, PalletAccountsEthLock, PalletAccountsExternalID, PalletAssetsApproval, PalletAssetsAssetAccount, PalletAssetsAssetDetails, PalletAssetsAssetMetadata, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesReleases, PalletBalancesReserveData, PalletContractsStorageContractInfo, PalletContractsStorageDeletedContract, PalletContractsWasmOwnerInfo, PalletContractsWasmPrefabWasmModule, PalletDetachDetachRequest, PalletDetachExportData, PalletDetachSupportedChains, PalletFragmentsFragmentDefinition, PalletFragmentsFragmentInstance, PalletFragmentsPublishingData, PalletFragmentsSecondarySaleData, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletMultisigMultisig, PalletProtosProto, PalletProtosProtoOwner, PalletProxyAnnouncement, PalletProxyProxyDefinition, PalletTransactionPaymentReleases, ProtosCategories, SpConsensusAuraSr25519AppSr25519Public, SpCoreEcdsaPublic, SpCoreEd25519Public, SpRuntimeDigest } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';
export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;
declare module '@polkadot/api-base/types/storage' {
    interface AugmentedQueries<ApiType extends ApiTypes> {
        accounts: {
            /**
             * **StorageMap** that maps an **Ethereum Account ID** to a to an ***Ethlock* struct of the aforementioned Ethereum Account Id (the struct contains the amount of FRAG token locked, amongst other things)**
             **/
            ethLockedFrag: AugmentedQuery<ApiType, (arg: H160 | string | Uint8Array) => Observable<Option<PalletAccountsEthLock>>, [H160]> & QueryableStorageEntry<ApiType, [H160]>;
            /**
             * **StorageMap** that maps a **Clamor Account ID** to an **Ethereum Account ID**,
             * where **both accounts** are **owned by the same owner**.
             *
             * NOTE: The **Ethereum Account ID** had to be **manually mapped to the Clamor Account ID** by the owner itself to show up in this `StorageMap`.
             **/
            evmLinks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<H160>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * This **StorageMap** is the reverse mapping of `EVMLinks`.
             **/
            evmLinksReverse: AugmentedQuery<ApiType, (arg: H160 | string | Uint8Array) => Observable<Option<AccountId32>>, [H160]> & QueryableStorageEntry<ApiType, [H160]>;
            /**
             * **StorageMap** that maps **a FRAG token locking or unlocking event** to a **number of votes ()**.
             * The key for this map is:
             * `blake2_256(encoded(<Amount of FRAG token that was locked/unlocked, Signature written by the owner of the FRAG token on a determinstic message,
             * Whether it was locked or unlocked, Ethereum Block Number where it was locked/unlocked>))`
             **/
            evmLinkVoting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<u64>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * **StorageMap** that maps **a FRAG token locking or unlocking event** to a boolean indicating whether voting on the aforementioned event has ended**.
             **/
            evmLinkVotingClosed: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<u64>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * The authorities able to sponsor accounts and link them to external accounts.
             **/
            externalAuthorities: AugmentedQuery<ApiType, () => Observable<BTreeSet<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * StorageMap that maps an **External Account ID** to an
             * **`AccountInfo` struct that contains
             * the External Account ID's linked Clamor Account ID, amongst other things**.
             **/
            externalID2Account: AugmentedQuery<ApiType, (arg: PalletAccountsExternalID | {
                Discord: any;
            } | string | Uint8Array) => Observable<Option<PalletAccountsAccountInfo>>, [PalletAccountsExternalID]> & QueryableStorageEntry<ApiType, [PalletAccountsExternalID]>;
            /**
             * **StorageValue** that equals the **List of Clamor Account IDs** that both ***validate*** and ***send*** **unsigned transactions with signed payload**
             *
             * NOTE: Only the Root User of the Clamor Blockchain (i.e the local node itself) can edit this list
             **/
            fragKeys: AugmentedQuery<ApiType, () => Observable<BTreeSet<SpCoreEd25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * **StorageMap** that maps a **Clamor Account ID** to the **Amount of FRAG token staked by the aforementioned Clamor Account ID**
             **/
            fragUsage: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * **List of Clamor Accounts** whose **(FRAG staking)-related Storage Items** are **yet to be cleared**
             **/
            pendingUnlinks: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        assets: {
            /**
             * The holdings of a specific account for a specific asset.
             **/
            account: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletAssetsAssetAccount>>, [u64, AccountId32]> & QueryableStorageEntry<ApiType, [u64, AccountId32]>;
            /**
             * Approved balance transfers. First balance is the amount approved for transfer. Second
             * is the amount of `T::Currency` reserved for storing this.
             * First key is the asset ID, second key is the owner and third key is the delegate.
             **/
            approvals: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array, arg3: AccountId32 | string | Uint8Array) => Observable<Option<PalletAssetsApproval>>, [u64, AccountId32, AccountId32]> & QueryableStorageEntry<ApiType, [u64, AccountId32, AccountId32]>;
            /**
             * Details of an asset.
             **/
            asset: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletAssetsAssetDetails>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            /**
             * Metadata of an asset.
             **/
            metadata: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<PalletAssetsAssetMetadata>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        aura: {
            /**
             * The current authority set.
             **/
            authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The current slot of this block.
             *
             * This will be set in `on_initialize`.
             **/
            currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        balances: {
            /**
             * The Balances pallet example of storing the balance of an account.
             *
             * # Example
             *
             * ```nocompile
             * impl pallet_balances::Config for Runtime {
             * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
             * }
             * ```
             *
             * You can also store the balance of an account in the `System` pallet.
             *
             * # Example
             *
             * ```nocompile
             * impl pallet_balances::Config for Runtime {
             * type AccountStore = System
             * }
             * ```
             *
             * But this comes with tradeoffs, storing account balances in the system pallet stores
             * `frame_system` data alongside the account data contrary to storing account balances in the
             * `Balances` pallet, which uses a `StorageMap` to store balances data only.
             * NOTE: This is only used in the case that this pallet is used to store balances.
             **/
            account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Any liquidity locks on some account balances.
             * NOTE: Should only be accessed when setting, changing and freeing a lock.
             **/
            locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Named reserves on some account balances.
             **/
            reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Storage version of the pallet.
             *
             * This is set to v2.0.0 for new networks.
             **/
            storageVersion: AugmentedQuery<ApiType, () => Observable<PalletBalancesReleases>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The total units issued in the system.
             **/
            totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        contracts: {
            /**
             * A mapping between an original code hash and instrumented wasm code, ready for execution.
             **/
            codeStorage: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletContractsWasmPrefabWasmModule>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * The code associated with a given account.
             *
             * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
             **/
            contractInfoOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletContractsStorageContractInfo>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Evicted contracts that await child trie deletion.
             *
             * Child trie deletion is a heavy operation depending on the amount of storage items
             * stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
             **/
            deletionQueue: AugmentedQuery<ApiType, () => Observable<Vec<PalletContractsStorageDeletedContract>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * This is a **monotonic** counter incremented on contract instantiation.
             *
             * This is used in order to generate unique trie ids for contracts.
             * The trie id of a new contract is calculated from hash(account_id, nonce).
             * The nonce is required because otherwise the following sequence would lead to
             * a possible collision of storage:
             *
             * 1. Create a new contract.
             * 2. Terminate the contract.
             * 3. Immediately recreate the contract with the same account_id.
             *
             * This is bad because the contents of a trie are deleted lazily and there might be
             * storage of the old instantiation still in it when the new contract is created. Please
             * note that we can't replace the counter by the block number because the sequence above
             * can happen in the same block. We also can't keep the account counter in memory only
             * because storage is the only way to communicate across different extrinsics in the
             * same block.
             *
             * # Note
             *
             * Do not use it to determine the number of contracts. It won't be decremented if
             * a contract is destroyed.
             **/
            nonce: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * A mapping between an original code hash and its owner information.
             **/
            ownerInfoOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletContractsWasmOwnerInfo>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * A mapping from an original code hash to the original code, untouched by instrumentation.
             **/
            pristineCode: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        detach: {
            /**
             * **StorageMap** that maps a **detached Proto-Fragment's hash** to an ***ExportData* enum (this enum contains information about the Proto-Fragment' detachment)**
             **/
            detachedHashes: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<PalletDetachExportData>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            /**
             * **StorageDoubleMap** that maps an **account address on an external blockchain and the external blockchain itself** to a **nonce**
             **/
            detachNonces: AugmentedQuery<ApiType, (arg1: Bytes | string | Uint8Array, arg2: PalletDetachSupportedChains | 'EthereumMainnet' | 'EthereumRinkeby' | 'EthereumGoerli' | number | Uint8Array) => Observable<Option<u64>>, [Bytes, PalletDetachSupportedChains]> & QueryableStorageEntry<ApiType, [Bytes, PalletDetachSupportedChains]>;
            /**
             * **StorageValue** that equals a **list of detach requests**
             **/
            detachRequests: AugmentedQuery<ApiType, () => Observable<Vec<PalletDetachDetachRequest>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * **StorageValue** that equals the **set of ECDSA public keys of the Ethereum accounts** that are **authorized to detach a Proto-Fragment** onto **Fragnova's Ethereum Smart Contract**
             **/
            ethereumAuthorities: AugmentedQuery<ApiType, () => Observable<BTreeSet<SpCoreEcdsaPublic>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * **StorageValue** that equals the **List of Clamor Account IDs** that both ***validate*** and ***send*** **unsigned transactions with signed payload**
             * NOTE: Only the Root User of the Clamor Blockchain (i.e the local node itself) can edit `FragKeys`
             **/
            fragKeys: AugmentedQuery<ApiType, () => Observable<BTreeSet<SpCoreEd25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        fragments: {
            /**
             * **StorageMap** that maps a **tuple that contains a Fragment Definition ID and an Edition ID**
             * to the
             * **total number of Fragment Instances that have the Fragment Definition ID and the Edition ID**
             **/
            copiesCount: AugmentedQuery<ApiType, (arg: ITuple<[U8aFixed, u64]> | [U8aFixed | string | Uint8Array, u64 | AnyNumber | Uint8Array]) => Observable<Option<Compact<u64>>>, [ITuple<[U8aFixed, u64]>]> & QueryableStorageEntry<ApiType, [ITuple<[U8aFixed, u64]>]>;
            /**
             * **StorageMap** that maps a **Fragment Definition ID and a Number** to a **Data Hash**
             **/
            dataHashMap: AugmentedQuery<ApiType, (arg1: U8aFixed | string | Uint8Array, arg2: Compact<u64> | AnyNumber | Uint8Array) => Observable<Option<U8aFixed>>, [U8aFixed, Compact<u64>]> & QueryableStorageEntry<ApiType, [U8aFixed, Compact<u64>]>;
            /**
             * **StorageMap** that maps a **Fragment Definition ID** to the **total number of "Numbers" (see `DataHashMap` to understand what "Numbers" means) that fall under it**
             **/
            dataHashMapIndex: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<u64>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            /**
             * **StorageNMap** that maps a
             * **Fragment Instance's Fragment Definition ID, Edition ID and Copy ID**
             * to a
             * ***`SecondarySaleData`* struct**
             **/
            definition2SecondarySales: AugmentedQuery<ApiType, (arg1: U8aFixed | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array, arg3: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletFragmentsSecondarySaleData>>, [U8aFixed, u64, u64]> & QueryableStorageEntry<ApiType, [U8aFixed, u64, u64]>;
            /**
             * **StorageMap** that maps a **Fragment Definition ID (which is determinstically computed using its Proto-Fragment hash and its metadata struct `FragmentMetadata`)**
             * to a
             * ***FragmentDefinition* struct**
             **/
            definitions: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<PalletFragmentsFragmentDefinition>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            /**
             * **StorageMap** that maps a **Fragment Definition ID**
             * to the
             * **total number of unique Edition IDs** found in the
             * **Fragment Instances that have the aforementioned Fragment Definition ID**
             **/
            editionsCount: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<Compact<u64>>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            /**
             * StorageMap that maps the **Block Number**
             * to a
             * **list of Fragment Instances that expire on that Block
             * (note: each FI in the list is represented as a tuple that contains the Fragment Instance's Fragment Definition ID, the Fragment Instance's Edition ID and
             * the Fragment Instance's Copy ID)**
             *
             * Footnotes:
             *
             * Fragment Instances can expire, we process expirations every `on_finalize`
             **/
            expirations: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Vec<ITuple<[U8aFixed, Compact<u64>, Compact<u64>]>>>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            /**
             * **StorageNMap** that maps a
             * **Fragment Instance's Fragment Definition ID, Edition ID and Copy ID**
             * to a
             * ***`FragmentInstance`* struct**
             *
             * Footnotes:
             *
             * #### Keys hashing reasoning
             *
             * Very long key, means takes a lot of redundant storage (because we will have **many** Instances!), we try to limit the  damage by using `Identity` so that the final key will be:
             * `[16 bytes of Fragment class hash]+[8 bytes of u64, edition]+[8 bytes of u64, copy id]` for a total of 32 bytes.
             **/
            fragments: AugmentedQuery<ApiType, (arg1: U8aFixed | string | Uint8Array, arg2: u64 | AnyNumber | Uint8Array, arg3: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletFragmentsFragmentInstance>>, [U8aFixed, u64, u64]> & QueryableStorageEntry<ApiType, [U8aFixed, u64, u64]>;
            /**
             * StorageDoubleMap that maps a **Clamor Account ID and a Fragment Definition**
             * to a
             * **list of Fragment Instances of the Fragment Definition that is owned by the Clamor Account ID**
             *
             * This storage item stores the exact same thing as `Owners`, except that the primary key and the secondary key are swapped
             *
             * Footnotes:
             *
             * Notice this pulls from memory (and deserializes (scale)) the whole `Vec<_,_>`, this is on purpose as it should not be too big.
             **/
            inventory: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<Vec<ITuple<[Compact<u64>, Compact<u64>]>>>>, [AccountId32, U8aFixed]> & QueryableStorageEntry<ApiType, [AccountId32, U8aFixed]>;
            /**
             * StorageDoubleMap that maps a **Fragment Definition and a Clamor Account ID**
             * to a
             * **list of Fragment Instances of the Fragment Definition that is owned by the Clamor Account ID**
             *
             * This storage item stores the exact same thing as `Inventory`, except that the primary key and the secondary key are swapped
             *
             * Footnotes:
             *
             * Notice this pulls from memory (and deserializes (scale)) the whole `Vec<_,_>`, this is on purpose as it should not be too big.
             **/
            owners: AugmentedQuery<ApiType, (arg1: U8aFixed | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<Vec<ITuple<[Compact<u64>, Compact<u64>]>>>>, [U8aFixed, AccountId32]> & QueryableStorageEntry<ApiType, [U8aFixed, AccountId32]>;
            /**
             * **StorageMap** that maps a **Proto-Fragment**
             * to a
             * **list of Fragment Definitions that were created using the aforementioned Proto-Fragment**
             **/
            proto2Fragments: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<Vec<U8aFixed>>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            /**
             * **StorageMap** that maps a **Fragment Definition ID**
             * to a
             * ***PublishingData* struct (of the aforementioned Fragment Definition)**
             **/
            publishing: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<PalletFragmentsPublishingData>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            /**
             * StorageMap that maps a **Fragment Definition and a ***Unique Data*** Hash**
             * to **an Existing Edition of the aforementioned Fragment Definition**
             **/
            uniqueData2Edition: AugmentedQuery<ApiType, (arg1: U8aFixed | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<u64>>, [U8aFixed, U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed, U8aFixed]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        grandpa: {
            /**
             * The number of changes (both in terms of keys and underlying economic responsibilities)
             * in the "set" of Grandpa validators from genesis.
             **/
            currentSetId: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * next block number where we can force a change.
             **/
            nextForced: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Pending change: (signaled at, scheduled change).
             **/
            pendingChange: AugmentedQuery<ApiType, () => Observable<Option<PalletGrandpaStoredPendingChange>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * A mapping from grandpa set ID to the index of the *most recent* session for which its
             * members were responsible.
             *
             * TWOX-NOTE: `SetId` is not under user control.
             **/
            setIdSession: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            /**
             * `true` if we are currently stalled.
             **/
            stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u64, u64]>>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * State of the current authority set.
             **/
            state: AugmentedQuery<ApiType, () => Observable<PalletGrandpaStoredState>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        identity: {
            /**
             * Information that is pertinent to identify the entity behind an account.
             *
             * TWOX-NOTE: OK ― `AccountId` is a secure hash.
             **/
            identityOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletIdentityRegistration>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * The set of registrars. Not expected to get very big as can only be added through a
             * special origin (likely a council motion).
             *
             * The index into this can be cast to `RegistrarIndex` to get a valid value.
             **/
            registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<PalletIdentityRegistrarInfo>>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Alternative "sub" identities of this account.
             *
             * The first item is the deposit, the second is a vector of the accounts.
             *
             * TWOX-NOTE: OK ― `AccountId` is a secure hash.
             **/
            subsOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, Vec<AccountId32>]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * The super-identity of an alternative "sub" identity together with its name, within that
             * context. If the account is not some other account's sub-identity, then just `None`.
             **/
            superOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[AccountId32, Data]>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        indices: {
            /**
             * The lookup from index to account.
             **/
            accounts: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId32, u128, bool]>>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        multisig: {
            calls: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[WrapperKeepOpaque<Call>, AccountId32, u128]>>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            /**
             * The set of open multisig operations.
             **/
            multisigs: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<PalletMultisigMultisig>>, [AccountId32, U8aFixed]> & QueryableStorageEntry<ApiType, [AccountId32, U8aFixed]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        protos: {
            /**
             * **StorageMap** that maps a **Clamor Account ID** to a **list of Proto-Fragments that was
             * staked on by the aforementioned Clamor Account ID**
             **/
            accountCurations: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<U8aFixed>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * **StorageMap** that maps a **Block number** to a list of accounts that have curations
             * expiring on that block number
             **/
            expiringCurations: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<Vec<AccountId32>>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            /**
             * **StorageMap** that maps a **Metadata Key (of type `Vec<u8>`)** to an **index number**
             **/
            metaKeys: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<u64>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
            /**
             * **StorageValue** that **equals** the **total number of unique Metadata Keys in the
             * blockchain**
             **/
            metaKeysIndex: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * **StorageDoubleMap** that maps a **Proto-Fragment and a Clamor Account ID** to a **tuple
             * that contains the Curated Amount (tickets burned by the aforementioned Clamor Account ID)
             * and the Block Number**
             **/
            protoCurations: AugmentedQuery<ApiType, (arg1: U8aFixed | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[u128, u64]>>>, [U8aFixed, AccountId32]> & QueryableStorageEntry<ApiType, [U8aFixed, AccountId32]>;
            /**
             * **StorageMap** that maps a **Proto-Fragment's data's hash** to a ***Proto* struct (of the
             * aforementioned Proto-Fragment)**
             **/
            protos: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<PalletProtosProto>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            /**
             * **StorageMap** that maps a **variant of the *Category* enum** to a **list of Proto-Fragment
             * hashes (that have the aforementioned variant)**
             **/
            protosByCategory: AugmentedQuery<ApiType, (arg: ProtosCategories | {
                Text: any;
            } | {
                Trait: any;
            } | {
                Shards: any;
            } | {
                Audio: any;
            } | {
                Texture: any;
            } | {
                Vector: any;
            } | {
                Video: any;
            } | {
                Model: any;
            } | {
                Binary: any;
            } | string | Uint8Array) => Observable<Option<Vec<U8aFixed>>>, [ProtosCategories]> & QueryableStorageEntry<ApiType, [ProtosCategories]>;
            /**
             * **StorageMap** that maps a **variant of the *ProtoOwner* enum** to a **list of
             * Proto-Fragment hashes (that have the aforementioned variant)**
             **/
            protosByOwner: AugmentedQuery<ApiType, (arg: PalletProtosProtoOwner | {
                User: any;
            } | {
                ExternalAsset: any;
            } | string | Uint8Array) => Observable<Option<Vec<U8aFixed>>>, [PalletProtosProtoOwner]> & QueryableStorageEntry<ApiType, [PalletProtosProtoOwner]>;
            /**
             * **StorageMap** that maps a **Proto-Fragment** to a **list of other Proto-Fragments that reference the Proto-Fragment**
             **/
            protosByParent: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<Vec<U8aFixed>>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            /**
             * **StorageMap** that maps a **Tag (of type `Vec<u8>`)** to an **index number**
             **/
            tags: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<u64>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
            /**
             * **StorageValue** that **equals** the **total number of unique tags in the blockchain**
             **/
            tagsIndex: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * **StorageMap** that maps a **Trait ID** to the name of the Trait itself
             **/
            traits: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Bytes>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        proxy: {
            /**
             * The announcements made by the proxy (key).
             **/
            announcements: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyAnnouncement>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * The set of account proxies. Maps the account which has delegated to the accounts
             * which are being delegated to, together with the amount held on deposit.
             **/
            proxies: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyProxyDefinition>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        randomnessCollectiveFlip: {
            /**
             * Series of block headers from the last 81 blocks that acts as random seed material. This
             * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
             * the oldest hash.
             **/
            randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        sudo: {
            /**
             * The `AccountId` of the sudo key.
             **/
            key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        system: {
            /**
             * The full account information for a particular account ID.
             **/
            account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            /**
             * Total length (in bytes) for all extrinsics put together, for the current block.
             **/
            allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Map of block numbers to block hashes.
             **/
            blockHash: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<H256>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            /**
             * The current weight for the block.
             **/
            blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Digest of the current block, also part of the block header.
             **/
            digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The number of events in the `Events<T>` list.
             **/
            eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Events deposited for the current block.
             *
             * NOTE: The item is unbound and should therefore never be read on chain.
             * It could otherwise inflate the PoV size of a block.
             *
             * Events have a large in-memory size. Box the events to not go out-of-memory
             * just in case someone still reads them from within the runtime.
             **/
            events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Mapping between a topic (represented by T::Hash) and a vector of indexes
             * of events in the `<Events<T>>` list.
             *
             * All topic vectors have deterministic storage locations depending on the topic. This
             * allows light-clients to leverage the changes trie storage tracking mechanism and
             * in case of changes fetch the list of events of interest.
             *
             * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
             * the `EventIndex` then in case if the topic has the same contents on the next block
             * no notification will be triggered thus the event might be lost.
             **/
            eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u64, u32]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            /**
             * The execution phase of the block.
             **/
            executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Total extrinsics count for the current block.
             **/
            extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Extrinsics data for the current block (maps an extrinsic's index to its data).
             **/
            extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            /**
             * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
             **/
            lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * The current block number being processed. Set by `execute_block`.
             **/
            number: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Hash of the previous block.
             **/
            parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
             * (default) if not.
             **/
            upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
             **/
            upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        timestamp: {
            /**
             * Did the timestamp get updated in this block?
             **/
            didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Current time for the current block.
             **/
            now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        transactionPayment: {
            nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []> & QueryableStorageEntry<ApiType, []>;
            /**
             * Generic query
             **/
            [key: string]: QueryableStorageEntry<ApiType>;
        };
    }
}
