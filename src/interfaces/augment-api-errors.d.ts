import '@polkadot/api-base/types/errors';
import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';
export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;
declare module '@polkadot/api-base/types/errors' {
    interface AugmentedErrors<ApiType extends ApiTypes> {
        accounts: {
            /**
             * Account already exists
             **/
            AccountAlreadyExists: AugmentedError<ApiType>;
            /**
             * Account already linked
             **/
            AccountAlreadyLinked: AugmentedError<ApiType>;
            /**
             * Account not linked
             **/
            AccountNotLinked: AugmentedError<ApiType>;
            /**
             * Account linked to different account
             **/
            DifferentAccountLinked: AugmentedError<ApiType>;
            /**
             * Link already processed
             **/
            LinkAlreadyProcessed: AugmentedError<ApiType>;
            /**
             * Reference not found
             **/
            LinkNotFound: AugmentedError<ApiType>;
            /**
             * Systematic failure - those errors should not happen.
             **/
            SystematicFailure: AugmentedError<ApiType>;
            /**
             * Too many proxies
             **/
            TooManyProxies: AugmentedError<ApiType>;
            /**
             * Signature verification failed
             **/
            VerificationFailed: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        assets: {
            /**
             * The asset-account already exists.
             **/
            AlreadyExists: AugmentedError<ApiType>;
            /**
             * Invalid metadata given.
             **/
            BadMetadata: AugmentedError<ApiType>;
            /**
             * Invalid witness data given.
             **/
            BadWitness: AugmentedError<ApiType>;
            /**
             * Account balance must be greater than or equal to the transfer amount.
             **/
            BalanceLow: AugmentedError<ApiType>;
            /**
             * Cannot transfer an asset that is not transferable.
             **/
            CannotTransfer: AugmentedError<ApiType>;
            /**
             * The origin account is frozen.
             **/
            Frozen: AugmentedError<ApiType>;
            /**
             * The asset ID is already taken.
             **/
            InUse: AugmentedError<ApiType>;
            /**
             * Minimum balance should be non-zero.
             **/
            MinBalanceZero: AugmentedError<ApiType>;
            /**
             * The account to alter does not exist.
             **/
            NoAccount: AugmentedError<ApiType>;
            /**
             * The asset-account doesn't have an associated deposit.
             **/
            NoDeposit: AugmentedError<ApiType>;
            /**
             * The signing account has no permission to do the operation.
             **/
            NoPermission: AugmentedError<ApiType>;
            /**
             * Unable to increment the consumer reference counters on the account. Either no provider
             * reference exists to allow a non-zero balance of a non-self-sufficient asset, or the
             * maximum number of consumers has been reached.
             **/
            NoProvider: AugmentedError<ApiType>;
            /**
             * No approval exists that would allow the transfer.
             **/
            Unapproved: AugmentedError<ApiType>;
            /**
             * The given asset ID is unknown.
             **/
            Unknown: AugmentedError<ApiType>;
            /**
             * The operation would result in funds being burned.
             **/
            WouldBurn: AugmentedError<ApiType>;
            /**
             * The source account would not survive the transfer and it needs to stay alive.
             **/
            WouldDie: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        balances: {
            /**
             * Whether transfer function is allowed or not
             **/
            CannotTransfer: AugmentedError<ApiType>;
            /**
             * Beneficiary account must pre-exist
             **/
            DeadAccount: AugmentedError<ApiType>;
            /**
             * Value too low to create account due to existential deposit
             **/
            ExistentialDeposit: AugmentedError<ApiType>;
            /**
             * A vesting schedule already exists for this account
             **/
            ExistingVestingSchedule: AugmentedError<ApiType>;
            /**
             * Balance too low to send value
             **/
            InsufficientBalance: AugmentedError<ApiType>;
            /**
             * Transfer/payment would kill account
             **/
            KeepAlive: AugmentedError<ApiType>;
            /**
             * Account liquidity restrictions prevent withdrawal
             **/
            LiquidityRestrictions: AugmentedError<ApiType>;
            /**
             * Number of named reserves exceed MaxReserves
             **/
            TooManyReserves: AugmentedError<ApiType>;
            /**
             * Vesting balance too high to send value
             **/
            VestingBalance: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        contracts: {
            /**
             * Code removal was denied because the code is still in use by at least one contract.
             **/
            CodeInUse: AugmentedError<ApiType>;
            /**
             * No code could be found at the supplied code hash.
             **/
            CodeNotFound: AugmentedError<ApiType>;
            /**
             * The contract's code was found to be invalid during validation or instrumentation.
             * A more detailed error can be found on the node console if debug messages are enabled
             * or in the debug buffer which is returned to RPC clients.
             **/
            CodeRejected: AugmentedError<ApiType>;
            /**
             * The code supplied to `instantiate_with_code` exceeds the limit specified in the
             * current schedule.
             **/
            CodeTooLarge: AugmentedError<ApiType>;
            /**
             * No contract was found at the specified address.
             **/
            ContractNotFound: AugmentedError<ApiType>;
            /**
             * The contract ran to completion but decided to revert its storage changes.
             * Please note that this error is only returned from extrinsics. When called directly
             * or via RPC an `Ok` will be returned. In this case the caller needs to inspect the flags
             * to determine whether a reversion has taken place.
             **/
            ContractReverted: AugmentedError<ApiType>;
            /**
             * Contract trapped during execution.
             **/
            ContractTrapped: AugmentedError<ApiType>;
            /**
             * The debug message specified to `seal_debug_message` does contain invalid UTF-8.
             **/
            DebugMessageInvalidUTF8: AugmentedError<ApiType>;
            /**
             * Input passed to a contract API function failed to decode as expected type.
             **/
            DecodingFailed: AugmentedError<ApiType>;
            /**
             * Removal of a contract failed because the deletion queue is full.
             *
             * This can happen when calling `seal_terminate`.
             * The queue is filled by deleting contracts and emptied by a fixed amount each block.
             * Trying again during another block is the only way to resolve this issue.
             **/
            DeletionQueueFull: AugmentedError<ApiType>;
            /**
             * A contract with the same AccountId already exists.
             **/
            DuplicateContract: AugmentedError<ApiType>;
            /**
             * The topics passed to `seal_deposit_events` contains at least one duplicate.
             **/
            DuplicateTopics: AugmentedError<ApiType>;
            /**
             * `seal_call` forwarded this contracts input. It therefore is no longer available.
             **/
            InputForwarded: AugmentedError<ApiType>;
            /**
             * Invalid combination of flags supplied to `seal_call` or `seal_delegate_call`.
             **/
            InvalidCallFlags: AugmentedError<ApiType>;
            /**
             * A new schedule must have a greater version than the current one.
             **/
            InvalidScheduleVersion: AugmentedError<ApiType>;
            /**
             * Performing a call was denied because the calling depth reached the limit
             * of what is specified in the schedule.
             **/
            MaxCallDepthReached: AugmentedError<ApiType>;
            /**
             * The chain does not provide a chain extension. Calling the chain extension results
             * in this error. Note that this usually  shouldn't happen as deploying such contracts
             * is rejected.
             **/
            NoChainExtension: AugmentedError<ApiType>;
            /**
             * A buffer outside of sandbox memory was passed to a contract API function.
             **/
            OutOfBounds: AugmentedError<ApiType>;
            /**
             * The executed contract exhausted its gas limit.
             **/
            OutOfGas: AugmentedError<ApiType>;
            /**
             * The output buffer supplied to a contract API call was too small.
             **/
            OutputBufferTooSmall: AugmentedError<ApiType>;
            /**
             * The subject passed to `seal_random` exceeds the limit.
             **/
            RandomSubjectTooLong: AugmentedError<ApiType>;
            /**
             * A call tried to invoke a contract that is flagged as non-reentrant.
             **/
            ReentranceDenied: AugmentedError<ApiType>;
            /**
             * More storage was created than allowed by the storage deposit limit.
             **/
            StorageDepositLimitExhausted: AugmentedError<ApiType>;
            /**
             * Origin doesn't have enough balance to pay the required storage deposits.
             **/
            StorageDepositNotEnoughFunds: AugmentedError<ApiType>;
            /**
             * A contract self destructed in its constructor.
             *
             * This can be triggered by a call to `seal_terminate`.
             **/
            TerminatedInConstructor: AugmentedError<ApiType>;
            /**
             * Termination of a contract is not allowed while the contract is already
             * on the call stack. Can be triggered by `seal_terminate`.
             **/
            TerminatedWhileReentrant: AugmentedError<ApiType>;
            /**
             * The amount of topics passed to `seal_deposit_events` exceeds the limit.
             **/
            TooManyTopics: AugmentedError<ApiType>;
            /**
             * Performing the requested transfer failed. Probably because there isn't enough
             * free balance in the sender's account.
             **/
            TransferFailed: AugmentedError<ApiType>;
            /**
             * The size defined in `T::MaxValueSize` was exceeded.
             **/
            ValueTooLarge: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        detach: {
            /**
             * Already detached
             **/
            Detached: AugmentedError<ApiType>;
            /**
             * No Validators are present
             **/
            NoValidator: AugmentedError<ApiType>;
            /**
             * Failed to sign message
             **/
            SigningFailed: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        fragments: {
            /**
             * Already exist
             **/
            AlreadyExist: AugmentedError<ApiType>;
            /**
             * Currency not found
             **/
            CurrencyNotFound: AugmentedError<ApiType>;
            /**
             * Already detached
             **/
            Detached: AugmentedError<ApiType>;
            /**
             * Sale has expired
             **/
            Expired: AugmentedError<ApiType>;
            /**
             * Insufficient funds
             **/
            InsufficientBalance: AugmentedError<ApiType>;
            /**
             * Max supply reached
             **/
            MaxSupplyReached: AugmentedError<ApiType>;
            /**
             * Metadata Name is Empty
             **/
            MetadataNameIsEmpty: AugmentedError<ApiType>;
            /**
             * No Permission
             **/
            NoPermission: AugmentedError<ApiType>;
            /**
             * Not found
             **/
            NotFound: AugmentedError<ApiType>;
            /**
             * Params not valid
             **/
            ParamsNotValid: AugmentedError<ApiType>;
            /**
             * Proto not found
             **/
            ProtoNotFound: AugmentedError<ApiType>;
            /**
             * Proto owner not found
             **/
            ProtoOwnerNotFound: AugmentedError<ApiType>;
            /**
             * Published quantity reached
             **/
            PublishedQuantityReached: AugmentedError<ApiType>;
            /**
             * Account cannot exist with the funds that would be given.
             **/
            ReceiverBelowMinimumBalance: AugmentedError<ApiType>;
            /**
             * Sale already open
             **/
            SaleAlreadyOpen: AugmentedError<ApiType>;
            /**
             * Fragment sale sold out
             **/
            SoldOut: AugmentedError<ApiType>;
            /**
             * This should not really happen
             **/
            SystematicFailure: AugmentedError<ApiType>;
            /**
             * Fragment Instance already uploaded with the same unique data
             **/
            UniqueDataExists: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        grandpa: {
            /**
             * Attempt to signal GRANDPA change with one already pending.
             **/
            ChangePending: AugmentedError<ApiType>;
            /**
             * A given equivocation report is valid but already previously reported.
             **/
            DuplicateOffenceReport: AugmentedError<ApiType>;
            /**
             * An equivocation proof provided as part of an equivocation report is invalid.
             **/
            InvalidEquivocationProof: AugmentedError<ApiType>;
            /**
             * A key ownership proof provided as part of an equivocation report is invalid.
             **/
            InvalidKeyOwnershipProof: AugmentedError<ApiType>;
            /**
             * Attempt to signal GRANDPA pause when the authority set isn't live
             * (either paused or already pending pause).
             **/
            PauseFailed: AugmentedError<ApiType>;
            /**
             * Attempt to signal GRANDPA resume when the authority set isn't paused
             * (either live or already pending resume).
             **/
            ResumeFailed: AugmentedError<ApiType>;
            /**
             * Cannot signal forced change so soon after last.
             **/
            TooSoon: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        identity: {
            /**
             * Account ID is already named.
             **/
            AlreadyClaimed: AugmentedError<ApiType>;
            /**
             * Empty index.
             **/
            EmptyIndex: AugmentedError<ApiType>;
            /**
             * Fee is changed.
             **/
            FeeChanged: AugmentedError<ApiType>;
            /**
             * The index is invalid.
             **/
            InvalidIndex: AugmentedError<ApiType>;
            /**
             * Invalid judgement.
             **/
            InvalidJudgement: AugmentedError<ApiType>;
            /**
             * The target is invalid.
             **/
            InvalidTarget: AugmentedError<ApiType>;
            /**
             * The provided judgement was for a different identity.
             **/
            JudgementForDifferentIdentity: AugmentedError<ApiType>;
            /**
             * Judgement given.
             **/
            JudgementGiven: AugmentedError<ApiType>;
            /**
             * No identity found.
             **/
            NoIdentity: AugmentedError<ApiType>;
            /**
             * Account isn't found.
             **/
            NotFound: AugmentedError<ApiType>;
            /**
             * Account isn't named.
             **/
            NotNamed: AugmentedError<ApiType>;
            /**
             * Sub-account isn't owned by sender.
             **/
            NotOwned: AugmentedError<ApiType>;
            /**
             * Sender is not a sub-account.
             **/
            NotSub: AugmentedError<ApiType>;
            /**
             * Sticky judgement.
             **/
            StickyJudgement: AugmentedError<ApiType>;
            /**
             * Too many additional fields.
             **/
            TooManyFields: AugmentedError<ApiType>;
            /**
             * Maximum amount of registrars reached. Cannot add any more.
             **/
            TooManyRegistrars: AugmentedError<ApiType>;
            /**
             * Too many subs-accounts.
             **/
            TooManySubAccounts: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        indices: {
            /**
             * The index was not available.
             **/
            InUse: AugmentedError<ApiType>;
            /**
             * The index was not already assigned.
             **/
            NotAssigned: AugmentedError<ApiType>;
            /**
             * The index is assigned to another account.
             **/
            NotOwner: AugmentedError<ApiType>;
            /**
             * The source and destination accounts are identical.
             **/
            NotTransfer: AugmentedError<ApiType>;
            /**
             * The index is permanent and may not be freed/changed.
             **/
            Permanent: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        multisig: {
            /**
             * Call is already approved by this signatory.
             **/
            AlreadyApproved: AugmentedError<ApiType>;
            /**
             * The data to be stored is already stored.
             **/
            AlreadyStored: AugmentedError<ApiType>;
            /**
             * The maximum weight information provided was too low.
             **/
            MaxWeightTooLow: AugmentedError<ApiType>;
            /**
             * Threshold must be 2 or greater.
             **/
            MinimumThreshold: AugmentedError<ApiType>;
            /**
             * Call doesn't need any (more) approvals.
             **/
            NoApprovalsNeeded: AugmentedError<ApiType>;
            /**
             * Multisig operation not found when attempting to cancel.
             **/
            NotFound: AugmentedError<ApiType>;
            /**
             * No timepoint was given, yet the multisig operation is already underway.
             **/
            NoTimepoint: AugmentedError<ApiType>;
            /**
             * Only the account that originally created the multisig is able to cancel it.
             **/
            NotOwner: AugmentedError<ApiType>;
            /**
             * The sender was contained in the other signatories; it shouldn't be.
             **/
            SenderInSignatories: AugmentedError<ApiType>;
            /**
             * The signatories were provided out of order; they should be ordered.
             **/
            SignatoriesOutOfOrder: AugmentedError<ApiType>;
            /**
             * There are too few signatories in the list.
             **/
            TooFewSignatories: AugmentedError<ApiType>;
            /**
             * There are too many signatories in the list.
             **/
            TooManySignatories: AugmentedError<ApiType>;
            /**
             * A timepoint was given, yet no multisig operation is underway.
             **/
            UnexpectedTimepoint: AugmentedError<ApiType>;
            /**
             * A different timepoint was given to the multisig operation that is underway.
             **/
            WrongTimepoint: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        protos: {
            /**
             * Proto-Fragment's References includes itself!
             **/
            CircularReference: AugmentedError<ApiType>;
            /**
             * Curation not found
             **/
            CurationNotFound: AugmentedError<ApiType>;
            /**
             * Already detached
             **/
            Detached: AugmentedError<ApiType>;
            /**
             * Not enough tokens to stake
             **/
            InsufficientBalance: AugmentedError<ApiType>;
            /**
             * Not enough tickets burned on the proto
             **/
            NotEnoughTickets: AugmentedError<ApiType>;
            /**
             * Proto already uploaded
             **/
            ProtoExists: AugmentedError<ApiType>;
            /**
             * Proto not found
             **/
            ProtoNotFound: AugmentedError<ApiType>;
            /**
             * Reference not found
             **/
            ReferenceNotFound: AugmentedError<ApiType>;
            /**
             * Systematic failure - those errors should not happen.
             **/
            SystematicFailure: AugmentedError<ApiType>;
            /**
             * Not the owner of the proto
             **/
            Unauthorized: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        proxy: {
            /**
             * Account is already a proxy.
             **/
            Duplicate: AugmentedError<ApiType>;
            /**
             * Call may not be made by proxy because it may escalate its privileges.
             **/
            NoPermission: AugmentedError<ApiType>;
            /**
             * Cannot add self as proxy.
             **/
            NoSelfProxy: AugmentedError<ApiType>;
            /**
             * Proxy registration not found.
             **/
            NotFound: AugmentedError<ApiType>;
            /**
             * Sender is not a proxy of the account to be proxied.
             **/
            NotProxy: AugmentedError<ApiType>;
            /**
             * There are too many proxies registered or too many announcements pending.
             **/
            TooMany: AugmentedError<ApiType>;
            /**
             * Announcement, if made at all, was made too recently.
             **/
            Unannounced: AugmentedError<ApiType>;
            /**
             * A call which is incompatible with the proxy type's filter was attempted.
             **/
            Unproxyable: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        sudo: {
            /**
             * Sender must be the Sudo account
             **/
            RequireSudo: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        system: {
            /**
             * The origin filter prevent the call to be dispatched.
             **/
            CallFiltered: AugmentedError<ApiType>;
            /**
             * Failed to extract the runtime version from the new runtime.
             *
             * Either calling `Core_version` or decoding `RuntimeVersion` failed.
             **/
            FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
            /**
             * The name of specification does not match between the current runtime
             * and the new runtime.
             **/
            InvalidSpecName: AugmentedError<ApiType>;
            /**
             * Suicide called when the account has non-default composite data.
             **/
            NonDefaultComposite: AugmentedError<ApiType>;
            /**
             * There is a non-zero reference count preventing the account from being purged.
             **/
            NonZeroRefCount: AugmentedError<ApiType>;
            /**
             * The specification version is not allowed to decrease between the current runtime
             * and the new runtime.
             **/
            SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
        utility: {
            /**
             * Too many calls batched.
             **/
            TooManyCalls: AugmentedError<ApiType>;
            /**
             * Generic error
             **/
            [key: string]: AugmentedError<ApiType>;
        };
    }
}
