declare const _default: {
    /**
     * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
        nonce: string;
        consumers: string;
        providers: string;
        sufficients: string;
        data: string;
    };
    /**
     * Lookup5: pallet_balances::AccountData<Balance>
     **/
    PalletBalancesAccountData: {
        free: string;
        reserved: string;
        miscFrozen: string;
        feeFrozen: string;
    };
    /**
     * Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
     **/
    FrameSupportDispatchPerDispatchClassWeight: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup12: sp_runtime::generic::digest::Digest
     **/
    SpRuntimeDigest: {
        logs: string;
    };
    /**
     * Lookup14: sp_runtime::generic::digest::DigestItem
     **/
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            Consensus: string;
            Seal: string;
            PreRuntime: string;
            __Unused7: string;
            RuntimeEnvironmentUpdated: string;
        };
    };
    /**
     * Lookup17: frame_system::EventRecord<clamor_runtime::RuntimeEvent, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
        phase: string;
        event: string;
        topics: string;
    };
    /**
     * Lookup19: frame_system::pallet::Event<T>
     **/
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: string;
            };
            ExtrinsicFailed: {
                dispatchError: string;
                dispatchInfo: string;
            };
            CodeUpdated: string;
            NewAccount: {
                account: string;
            };
            KilledAccount: {
                account: string;
            };
            Remarked: {
                _alias: {
                    hash_: string;
                };
                sender: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup20: frame_support::dispatch::DispatchInfo
     **/
    FrameSupportDispatchDispatchInfo: {
        weight: string;
        class: string;
        paysFee: string;
    };
    /**
     * Lookup21: frame_support::dispatch::DispatchClass
     **/
    FrameSupportDispatchDispatchClass: {
        _enum: string[];
    };
    /**
     * Lookup22: frame_support::dispatch::Pays
     **/
    FrameSupportDispatchPays: {
        _enum: string[];
    };
    /**
     * Lookup23: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
        _enum: {
            Other: string;
            CannotLookup: string;
            BadOrigin: string;
            Module: string;
            ConsumerRemaining: string;
            NoProviders: string;
            TooManyConsumers: string;
            Token: string;
            Arithmetic: string;
            Transactional: string;
        };
    };
    /**
     * Lookup24: sp_runtime::ModuleError
     **/
    SpRuntimeModuleError: {
        index: string;
        error: string;
    };
    /**
     * Lookup25: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
        _enum: string[];
    };
    /**
     * Lookup26: sp_runtime::ArithmeticError
     **/
    SpRuntimeArithmeticError: {
        _enum: string[];
    };
    /**
     * Lookup27: sp_runtime::TransactionalError
     **/
    SpRuntimeTransactionalError: {
        _enum: string[];
    };
    /**
     * Lookup28: pallet_grandpa::pallet::Event
     **/
    PalletGrandpaEvent: {
        _enum: {
            NewAuthorities: {
                authoritySet: string;
            };
            Paused: string;
            Resumed: string;
        };
    };
    /**
     * Lookup31: sp_finality_grandpa::app::Public
     **/
    SpFinalityGrandpaAppPublic: string;
    /**
     * Lookup32: sp_core::ed25519::Public
     **/
    SpCoreEd25519Public: string;
    /**
     * Lookup33: pallet_balances::pallet::Event<T, I>
     **/
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: string;
                freeBalance: string;
            };
            DustLost: {
                account: string;
                amount: string;
            };
            Transfer: {
                from: string;
                to: string;
                amount: string;
            };
            BalanceSet: {
                who: string;
                free: string;
                reserved: string;
            };
            Reserved: {
                who: string;
                amount: string;
            };
            Unreserved: {
                who: string;
                amount: string;
            };
            ReserveRepatriated: {
                from: string;
                to: string;
                amount: string;
                destinationStatus: string;
            };
            Deposit: {
                who: string;
                amount: string;
            };
            Withdraw: {
                who: string;
                amount: string;
            };
            Slashed: {
                who: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup34: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTokensMiscBalanceStatus: {
        _enum: string[];
    };
    /**
     * Lookup35: pallet_transaction_payment::pallet::Event<T>
     **/
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: string;
                actualFee: string;
                tip: string;
            };
        };
    };
    /**
     * Lookup36: pallet_sudo::pallet::Event<T>
     **/
    PalletSudoEvent: {
        _enum: {
            Sudid: {
                sudoResult: string;
            };
            KeyChanged: {
                oldSudoer: string;
            };
            SudoAsDone: {
                sudoResult: string;
            };
        };
    };
    /**
     * Lookup40: pallet_assets::pallet::Event<T, I>
     **/
    PalletAssetsEvent: {
        _enum: {
            Created: {
                assetId: string;
                creator: string;
                owner: string;
            };
            Issued: {
                assetId: string;
                owner: string;
                totalSupply: string;
            };
            Transferred: {
                assetId: string;
                from: string;
                to: string;
                amount: string;
            };
            Burned: {
                assetId: string;
                owner: string;
                balance: string;
            };
            TeamChanged: {
                assetId: string;
                issuer: string;
                admin: string;
                freezer: string;
            };
            OwnerChanged: {
                assetId: string;
                owner: string;
            };
            Frozen: {
                assetId: string;
                who: string;
            };
            Thawed: {
                assetId: string;
                who: string;
            };
            AssetFrozen: {
                assetId: string;
            };
            AssetThawed: {
                assetId: string;
            };
            Destroyed: {
                assetId: string;
            };
            ForceCreated: {
                assetId: string;
                owner: string;
            };
            MetadataSet: {
                assetId: string;
                name: string;
                symbol: string;
                decimals: string;
                isFrozen: string;
            };
            MetadataCleared: {
                assetId: string;
            };
            ApprovedTransfer: {
                assetId: string;
                source: string;
                delegate: string;
                amount: string;
            };
            ApprovalCancelled: {
                assetId: string;
                owner: string;
                delegate: string;
            };
            TransferredApproved: {
                assetId: string;
                owner: string;
                delegate: string;
                destination: string;
                amount: string;
            };
            AssetStatusChanged: {
                assetId: string;
            };
        };
    };
    /**
     * Lookup42: pallet_indices::pallet::Event<T>
     **/
    PalletIndicesEvent: {
        _enum: {
            IndexAssigned: {
                who: string;
                index: string;
            };
            IndexFreed: {
                index: string;
            };
            IndexFrozen: {
                index: string;
                who: string;
            };
        };
    };
    /**
     * Lookup43: pallet_contracts::pallet::Event<T>
     **/
    PalletContractsEvent: {
        _enum: {
            Instantiated: {
                deployer: string;
                contract: string;
            };
            Terminated: {
                contract: string;
                beneficiary: string;
            };
            CodeStored: {
                codeHash: string;
            };
            ContractEmitted: {
                contract: string;
                data: string;
            };
            CodeRemoved: {
                codeHash: string;
            };
            ContractCodeUpdated: {
                contract: string;
                newCodeHash: string;
                oldCodeHash: string;
            };
            Called: {
                caller: string;
                contract: string;
            };
            DelegateCalled: {
                contract: string;
                codeHash: string;
            };
        };
    };
    /**
     * Lookup44: pallet_protos::pallet::Event<T>
     **/
    PalletProtosEvent: {
        _enum: {
            Uploaded: {
                protoHash: string;
                cid: string;
            };
            Patched: {
                protoHash: string;
                cid: string;
            };
            MetadataChanged: {
                protoHash: string;
                cid: string;
            };
            Detached: {
                protoHash: string;
                cid: string;
            };
            Transferred: {
                protoHash: string;
                ownerId: string;
            };
            Staked: {
                protoHash: string;
                accountId: string;
                balance: string;
            };
            Unstaked: {
                protoHash: string;
                accountId: string;
                balance: string;
            };
        };
    };
    /**
     * Lookup45: pallet_fragments::pallet::Event<T>
     **/
    PalletFragmentsEvent: {
        _enum: {
            DefinitionCreated: {
                definitionHash: string;
            };
            DefinitionMetadataChanged: {
                fragmentHash: string;
                metadataKey: string;
            };
            InstanceMetadataChanged: {
                fragmentHash: string;
                editionId: string;
                copyId: string;
                metadataKey: string;
            };
            Publishing: {
                definitionHash: string;
            };
            Unpublishing: {
                definitionHash: string;
            };
            InventoryAdded: {
                accountId: string;
                definitionHash: string;
                fragmentId: string;
            };
            InventoryRemoved: {
                accountId: string;
                definitionHash: string;
                fragmentId: string;
            };
            InventoryUpdated: {
                accountId: string;
                definitionHash: string;
                fragmentId: string;
            };
            Expired: {
                accountId: string;
                definitionHash: string;
                fragmentId: string;
            };
            Resell: {
                definitionHash: string;
                fragmentId: string;
            };
            EndResale: {
                definitionHash: string;
                fragmentId: string;
            };
        };
    };
    /**
     * Lookup48: pallet_detach::pallet::Event<T>
     **/
    PalletDetachEvent: {
        _enum: {
            Uploaded: {
                fragmentDataHash: string;
            };
            Patched: {
                fragmentDataHash: string;
            };
            MetadataChanged: {
                fragmentDataHash: string;
                remoteSignature: string;
            };
            Detached: {
                fragmentDataHash: string;
                remoteSignature: string;
            };
            Transferred: {
                fragmentDataHash: string;
                accountId: string;
            };
        };
    };
    /**
     * Lookup49: pallet_multisig::pallet::Event<T>
     **/
    PalletMultisigEvent: {
        _enum: {
            NewMultisig: {
                approving: string;
                multisig: string;
                callHash: string;
            };
            MultisigApproval: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
            MultisigExecuted: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
                result: string;
            };
            MultisigCancelled: {
                cancelling: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
        };
    };
    /**
     * Lookup50: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepoint: {
        height: string;
        index: string;
    };
    /**
     * Lookup51: pallet_proxy::pallet::Event<T>
     **/
    PalletProxyEvent: {
        _enum: {
            ProxyExecuted: {
                result: string;
            };
            PureCreated: {
                pure: string;
                who: string;
                proxyType: string;
                disambiguationIndex: string;
            };
            Announced: {
                real: string;
                proxy: string;
                callHash: string;
            };
            ProxyAdded: {
                delegator: string;
                delegatee: string;
                proxyType: string;
                delay: string;
            };
            ProxyRemoved: {
                delegator: string;
                delegatee: string;
                proxyType: string;
                delay: string;
            };
        };
    };
    /**
     * Lookup53: pallet_identity::pallet::Event<T>
     **/
    PalletIdentityEvent: {
        _enum: {
            IdentitySet: {
                who: string;
            };
            IdentityCleared: {
                who: string;
                deposit: string;
            };
            IdentityKilled: {
                who: string;
                deposit: string;
            };
            JudgementRequested: {
                who: string;
                registrarIndex: string;
            };
            JudgementUnrequested: {
                who: string;
                registrarIndex: string;
            };
            JudgementGiven: {
                target: string;
                registrarIndex: string;
            };
            RegistrarAdded: {
                registrarIndex: string;
            };
            SubIdentityAdded: {
                sub: string;
                main: string;
                deposit: string;
            };
            SubIdentityRemoved: {
                sub: string;
                main: string;
                deposit: string;
            };
            SubIdentityRevoked: {
                sub: string;
                main: string;
                deposit: string;
            };
        };
    };
    /**
     * Lookup54: pallet_utility::pallet::Event
     **/
    PalletUtilityEvent: {
        _enum: {
            BatchInterrupted: {
                index: string;
                error: string;
            };
            BatchCompleted: string;
            BatchCompletedWithErrors: string;
            ItemCompleted: string;
            ItemFailed: {
                error: string;
            };
            DispatchedAs: {
                result: string;
            };
        };
    };
    /**
     * Lookup55: pallet_accounts::pallet::Event<T>
     **/
    PalletAccountsEvent: {
        _enum: {
            Linked: {
                sender: string;
                ethKey: string;
            };
            Unlinked: {
                sender: string;
                ethKey: string;
            };
            Locked: {
                ethKey: string;
                balance: string;
                locktime: string;
            };
            Unlocked: {
                ethKey: string;
                balance: string;
            };
            SponsoredAccount: {
                sponsor: string;
                sponsored: string;
                externalId: string;
            };
        };
    };
    /**
     * Lookup58: pallet_accounts::ExternalID
     **/
    PalletAccountsExternalID: {
        _enum: {
            Discord: string;
        };
    };
    /**
     * Lookup59: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: string;
            Finalization: string;
            Initialization: string;
        };
    };
    /**
     * Lookup63: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: string;
        specName: string;
    };
    /**
     * Lookup66: frame_system::pallet::Call<T>
     **/
    FrameSystemCall: {
        _enum: {
            fill_block: {
                ratio: string;
            };
            remark: {
                remark: string;
            };
            set_heap_pages: {
                pages: string;
            };
            set_code: {
                code: string;
            };
            set_code_without_checks: {
                code: string;
            };
            set_storage: {
                items: string;
            };
            kill_storage: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
            };
            kill_prefix: {
                prefix: string;
                subkeys: string;
            };
            remark_with_event: {
                remark: string;
            };
        };
    };
    /**
     * Lookup71: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: string;
        maxBlock: string;
        perClass: string;
    };
    /**
     * Lookup72: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportDispatchPerDispatchClassWeightsPerClass: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup73: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: string;
        maxExtrinsic: string;
        maxTotal: string;
        reserved: string;
    };
    /**
     * Lookup75: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: string;
    };
    /**
     * Lookup76: frame_support::dispatch::PerDispatchClass<T>
     **/
    FrameSupportDispatchPerDispatchClassU32: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup77: sp_weights::RuntimeDbWeight
     **/
    SpWeightsRuntimeDbWeight: {
        read: string;
        write: string;
    };
    /**
     * Lookup78: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
        specName: string;
        implName: string;
        authoringVersion: string;
        specVersion: string;
        implVersion: string;
        apis: string;
        transactionVersion: string;
        stateVersion: string;
    };
    /**
     * Lookup83: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: string[];
    };
    /**
     * Lookup85: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: string;
            };
        };
    };
    /**
     * Lookup88: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: string;
    /**
     * Lookup89: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: string;
    /**
     * Lookup92: pallet_grandpa::StoredState<N>
     **/
    PalletGrandpaStoredState: {
        _enum: {
            Live: string;
            PendingPause: {
                scheduledAt: string;
                delay: string;
            };
            Paused: string;
            PendingResume: {
                scheduledAt: string;
                delay: string;
            };
        };
    };
    /**
     * Lookup93: pallet_grandpa::StoredPendingChange<N, Limit>
     **/
    PalletGrandpaStoredPendingChange: {
        scheduledAt: string;
        delay: string;
        nextAuthorities: string;
        forced: string;
    };
    /**
     * Lookup96: pallet_grandpa::pallet::Call<T>
     **/
    PalletGrandpaCall: {
        _enum: {
            report_equivocation: {
                equivocationProof: string;
                keyOwnerProof: string;
            };
            report_equivocation_unsigned: {
                equivocationProof: string;
                keyOwnerProof: string;
            };
            note_stalled: {
                delay: string;
                bestFinalizedBlockNumber: string;
            };
        };
    };
    /**
     * Lookup97: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
     **/
    SpFinalityGrandpaEquivocationProof: {
        setId: string;
        equivocation: string;
    };
    /**
     * Lookup98: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
     **/
    SpFinalityGrandpaEquivocation: {
        _enum: {
            Prevote: string;
            Precommit: string;
        };
    };
    /**
     * Lookup99: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
     **/
    FinalityGrandpaEquivocationPrevote: {
        roundNumber: string;
        identity: string;
        first: string;
        second: string;
    };
    /**
     * Lookup100: finality_grandpa::Prevote<primitive_types::H256, N>
     **/
    FinalityGrandpaPrevote: {
        targetHash: string;
        targetNumber: string;
    };
    /**
     * Lookup101: sp_finality_grandpa::app::Signature
     **/
    SpFinalityGrandpaAppSignature: string;
    /**
     * Lookup102: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: string;
    /**
     * Lookup105: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
     **/
    FinalityGrandpaEquivocationPrecommit: {
        roundNumber: string;
        identity: string;
        first: string;
        second: string;
    };
    /**
     * Lookup106: finality_grandpa::Precommit<primitive_types::H256, N>
     **/
    FinalityGrandpaPrecommit: {
        targetHash: string;
        targetNumber: string;
    };
    /**
     * Lookup108: sp_core::Void
     **/
    SpCoreVoid: string;
    /**
     * Lookup109: pallet_grandpa::pallet::Error<T>
     **/
    PalletGrandpaError: {
        _enum: string[];
    };
    /**
     * Lookup111: pallet_balances::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: string;
        amount: string;
        reasons: string;
    };
    /**
     * Lookup112: pallet_balances::Reasons
     **/
    PalletBalancesReasons: {
        _enum: string[];
    };
    /**
     * Lookup115: pallet_balances::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: string;
        amount: string;
    };
    /**
     * Lookup117: pallet_balances::Releases
     **/
    PalletBalancesReleases: {
        _enum: string[];
    };
    /**
     * Lookup118: pallet_balances::pallet::Call<T, I>
     **/
    PalletBalancesCall: {
        _enum: {
            transfer: {
                dest: string;
                value: string;
            };
            set_balance: {
                who: string;
                newFree: string;
                newReserved: string;
            };
            force_transfer: {
                source: string;
                dest: string;
                value: string;
            };
            transfer_keep_alive: {
                dest: string;
                value: string;
            };
            transfer_all: {
                dest: string;
                keepAlive: string;
            };
            force_unreserve: {
                who: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup121: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: string[];
    };
    /**
     * Lookup123: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: string[];
    };
    /**
     * Lookup124: pallet_sudo::pallet::Call<T>
     **/
    PalletSudoCall: {
        _enum: {
            sudo: {
                call: string;
            };
            sudo_unchecked_weight: {
                call: string;
                weight: string;
            };
            set_key: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            sudo_as: {
                who: string;
                call: string;
            };
        };
    };
    /**
     * Lookup126: pallet_assets::pallet::Call<T, I>
     **/
    PalletAssetsCall: {
        _enum: {
            create: {
                id: string;
                admin: string;
                minBalance: string;
                transferable: string;
            };
            force_create: {
                id: string;
                owner: string;
                isSufficient: string;
                minBalance: string;
                transferable: string;
            };
            destroy: {
                id: string;
                witness: string;
            };
            mint: {
                id: string;
                beneficiary: string;
                amount: string;
            };
            burn: {
                id: string;
                who: string;
                amount: string;
            };
            transfer: {
                id: string;
                target: string;
                amount: string;
            };
            transfer_keep_alive: {
                id: string;
                target: string;
                amount: string;
            };
            force_transfer: {
                id: string;
                source: string;
                dest: string;
                amount: string;
            };
            freeze: {
                id: string;
                who: string;
            };
            thaw: {
                id: string;
                who: string;
            };
            freeze_asset: {
                id: string;
            };
            thaw_asset: {
                id: string;
            };
            transfer_ownership: {
                id: string;
                owner: string;
            };
            set_team: {
                id: string;
                issuer: string;
                admin: string;
                freezer: string;
            };
            set_metadata: {
                id: string;
                name: string;
                symbol: string;
                decimals: string;
            };
            clear_metadata: {
                id: string;
            };
            force_set_metadata: {
                id: string;
                name: string;
                symbol: string;
                decimals: string;
                isFrozen: string;
            };
            force_clear_metadata: {
                id: string;
            };
            force_asset_status: {
                id: string;
                owner: string;
                issuer: string;
                admin: string;
                freezer: string;
                minBalance: string;
                isSufficient: string;
                isFrozen: string;
            };
            approve_transfer: {
                id: string;
                delegate: string;
                amount: string;
            };
            cancel_approval: {
                id: string;
                delegate: string;
            };
            force_cancel_approval: {
                id: string;
                owner: string;
                delegate: string;
            };
            transfer_approved: {
                id: string;
                owner: string;
                destination: string;
                amount: string;
            };
            touch: {
                id: string;
            };
            refund: {
                id: string;
                allowBurn: string;
            };
        };
    };
    /**
     * Lookup127: pallet_assets::types::DestroyWitness
     **/
    PalletAssetsDestroyWitness: {
        accounts: string;
        sufficients: string;
        approvals: string;
    };
    /**
     * Lookup128: pallet_indices::pallet::Call<T>
     **/
    PalletIndicesCall: {
        _enum: {
            claim: {
                index: string;
            };
            transfer: {
                _alias: {
                    new_: string;
                };
                new_: string;
                index: string;
            };
            free: {
                index: string;
            };
            force_transfer: {
                _alias: {
                    new_: string;
                };
                new_: string;
                index: string;
                freeze: string;
            };
            freeze: {
                index: string;
            };
        };
    };
    /**
     * Lookup129: pallet_contracts::pallet::Call<T>
     **/
    PalletContractsCall: {
        _enum: {
            call: {
                dest: string;
                value: string;
                gasLimit: string;
                storageDepositLimit: string;
                data: string;
            };
            instantiate_with_code: {
                value: string;
                gasLimit: string;
                storageDepositLimit: string;
                code: string;
                data: string;
                salt: string;
            };
            instantiate: {
                value: string;
                gasLimit: string;
                storageDepositLimit: string;
                codeHash: string;
                data: string;
                salt: string;
            };
            upload_code: {
                code: string;
                storageDepositLimit: string;
            };
            remove_code: {
                codeHash: string;
            };
            set_code: {
                dest: string;
                codeHash: string;
            };
        };
    };
    /**
     * Lookup132: pallet_protos::pallet::Call<T>
     **/
    PalletProtosCall: {
        _enum: {
            upload: {
                references: string;
                category: string;
                tags: string;
                linkedAsset: string;
                license: string;
                data: string;
            };
            patch: {
                protoHash: string;
                license: string;
                newReferences: string;
                tags: string;
                data: string;
            };
            transfer: {
                protoHash: string;
                newOwner: string;
            };
            set_metadata: {
                protoHash: string;
                metadataKey: string;
                data: string;
            };
            detach: {
                protoHash: string;
                targetChain: string;
                targetAccount: string;
            };
            curate: {
                protoHash: string;
                amount: string;
            };
            ban: {
                protoHash: string;
            };
        };
    };
    /**
     * Lookup134: protos::categories::Categories
     **/
    ProtosCategories: {
        _enum: {
            Text: string;
            Trait: string;
            Shards: string;
            Audio: string;
            Texture: string;
            Vector: string;
            Video: string;
            Model: string;
            Binary: string;
        };
    };
    /**
     * Lookup135: protos::categories::TextCategories
     **/
    ProtosCategoriesTextCategories: {
        _enum: string[];
    };
    /**
     * Lookup137: protos::categories::ShardsScriptInfo
     **/
    ProtosCategoriesShardsScriptInfo: {
        format: string;
        requiring: string;
        implementing: string;
    };
    /**
     * Lookup138: protos::categories::ShardsFormat
     **/
    ProtosCategoriesShardsFormat: {
        _enum: string[];
    };
    /**
     * Lookup140: protos::categories::AudioCategories
     **/
    ProtosCategoriesAudioCategories: {
        _enum: string[];
    };
    /**
     * Lookup141: protos::categories::TextureCategories
     **/
    ProtosCategoriesTextureCategories: {
        _enum: string[];
    };
    /**
     * Lookup142: protos::categories::VectorCategories
     **/
    ProtosCategoriesVectorCategories: {
        _enum: string[];
    };
    /**
     * Lookup143: protos::categories::VideoCategories
     **/
    ProtosCategoriesVideoCategories: {
        _enum: string[];
    };
    /**
     * Lookup144: protos::categories::ModelCategories
     **/
    ProtosCategoriesModelCategories: {
        _enum: string[];
    };
    /**
     * Lookup145: protos::categories::BinaryCategories
     **/
    ProtosCategoriesBinaryCategories: {
        _enum: string[];
    };
    /**
     * Lookup147: pallet_protos::LinkedAsset
     **/
    PalletProtosLinkedAsset: {
        _enum: {
            Erc721: string;
        };
    };
    /**
     * Lookup150: pallet_protos::LinkSource
     **/
    PalletProtosLinkSource: {
        _enum: {
            Evm: string;
        };
    };
    /**
     * Lookup151: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: string;
    /**
     * Lookup153: pallet_protos::UsageLicense<sp_core::crypto::AccountId32>
     **/
    PalletProtosUsageLicense: {
        _enum: {
            Closed: string;
            Open: string;
            Tickets: string;
            Contract: string;
        };
    };
    /**
     * Lookup156: pallet_detach::SupportedChains
     **/
    PalletDetachSupportedChains: {
        _enum: string[];
    };
    /**
     * Lookup157: pallet_fragments::pallet::Call<T>
     **/
    PalletFragmentsCall: {
        _enum: {
            create: {
                protoHash: string;
                metadata: string;
                permissions: string;
                unique: string;
                maxSupply: string;
            };
            set_definition_metadata: {
                fragmentHash: string;
                metadataKey: string;
                data: string;
            };
            set_instance_metadata: {
                definitionHash: string;
                editionId: string;
                copyId: string;
                metadataKey: string;
                data: string;
            };
            publish: {
                definitionHash: string;
                price: string;
                quantity: string;
                expires: string;
                stackAmount: string;
            };
            unpublish: {
                definitionHash: string;
            };
            mint: {
                definitionHash: string;
                options: string;
                stackAmount: string;
            };
            buy: {
                definitionHash: string;
                options: string;
            };
            give: {
                definitionHash: string;
                editionId: string;
                copyId: string;
                to: string;
                newPermissions: string;
                expiration: string;
            };
            create_account: {
                definitionHash: string;
                edition: string;
                copy: string;
            };
            resell: {
                definitionHash: string;
                editionId: string;
                copyId: string;
                newPermissions: string;
                expiration: string;
                secondarySaleType: string;
            };
            end_resale: {
                definitionHash: string;
                editionId: string;
                copyId: string;
            };
            secondary_buy: {
                definitionHash: string;
                editionId: string;
                copyId: string;
                options: string;
            };
        };
    };
    /**
     * Lookup158: pallet_fragments::FragmentMetadata<TFungibleAsset>
     **/
    PalletFragmentsFragmentMetadata: {
        name: string;
        currency: string;
    };
    /**
     * Lookup159: protos::permissions::FragmentPerms
     **/
    ProtosPermissionsFragmentPerms: {
        bits: string;
    };
    /**
     * Lookup161: pallet_fragments::UniqueOptions
     **/
    PalletFragmentsUniqueOptions: {
        mutable: string;
    };
    /**
     * Lookup162: pallet_fragments::FragmentBuyOptions
     **/
    PalletFragmentsFragmentBuyOptions: {
        _enum: {
            Quantity: string;
            UniqueData: string;
        };
    };
    /**
     * Lookup164: pallet_fragments::SecondarySaleType
     **/
    PalletFragmentsSecondarySaleType: {
        _enum: {
            Normal: string;
        };
    };
    /**
     * Lookup165: pallet_fragments::SecondarySaleBuyOptions
     **/
    PalletFragmentsSecondarySaleBuyOptions: {
        _enum: string[];
    };
    /**
     * Lookup166: pallet_detach::pallet::Call<T>
     **/
    PalletDetachCall: {
        _enum: {
            add_eth_auth: {
                public: string;
            };
            del_eth_auth: {
                public: string;
            };
            add_key: {
                public: string;
            };
            del_key: {
                public: string;
            };
            internal_finalize_detach: {
                data: string;
                signature: string;
            };
        };
    };
    /**
     * Lookup167: sp_core::ecdsa::Public
     **/
    SpCoreEcdsaPublic: string;
    /**
     * Lookup169: pallet_detach::DetachInternalData<sp_runtime::MultiSigner>
     **/
    PalletDetachDetachInternalData: {
        _alias: {
            hash_: string;
        };
        public: string;
        hash_: string;
        targetChain: string;
        targetAccount: string;
        remoteSignature: string;
        nonce: string;
    };
    /**
     * Lookup170: sp_runtime::MultiSigner
     **/
    SpRuntimeMultiSigner: {
        _enum: {
            Ed25519: string;
            Sr25519: string;
            Ecdsa: string;
        };
    };
    /**
     * Lookup171: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: string;
            Sr25519: string;
            Ecdsa: string;
        };
    };
    /**
     * Lookup172: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: string;
    /**
     * Lookup173: pallet_multisig::pallet::Call<T>
     **/
    PalletMultisigCall: {
        _enum: {
            as_multi_threshold_1: {
                otherSignatories: string;
                call: string;
            };
            as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                call: string;
                storeCall: string;
                maxWeight: string;
            };
            approve_as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                callHash: string;
                maxWeight: string;
            };
            cancel_as_multi: {
                threshold: string;
                otherSignatories: string;
                timepoint: string;
                callHash: string;
            };
        };
    };
    /**
     * Lookup177: pallet_proxy::pallet::Call<T>
     **/
    PalletProxyCall: {
        _enum: {
            proxy: {
                real: string;
                forceProxyType: string;
                call: string;
            };
            add_proxy: {
                delegate: string;
                proxyType: string;
                delay: string;
            };
            remove_proxy: {
                delegate: string;
                proxyType: string;
                delay: string;
            };
            remove_proxies: string;
            create_pure: {
                proxyType: string;
                delay: string;
                index: string;
            };
            kill_pure: {
                spawner: string;
                proxyType: string;
                index: string;
                height: string;
                extIndex: string;
            };
            announce: {
                real: string;
                callHash: string;
            };
            remove_announcement: {
                real: string;
                callHash: string;
            };
            reject_announcement: {
                delegate: string;
                callHash: string;
            };
            proxy_announced: {
                delegate: string;
                real: string;
                forceProxyType: string;
                call: string;
            };
        };
    };
    /**
     * Lookup179: pallet_identity::pallet::Call<T>
     **/
    PalletIdentityCall: {
        _enum: {
            add_registrar: {
                account: string;
            };
            set_identity: {
                info: string;
            };
            set_subs: {
                subs: string;
            };
            clear_identity: string;
            request_judgement: {
                regIndex: string;
                maxFee: string;
            };
            cancel_request: {
                regIndex: string;
            };
            set_fee: {
                index: string;
                fee: string;
            };
            set_account_id: {
                _alias: {
                    new_: string;
                };
                index: string;
                new_: string;
            };
            set_fields: {
                index: string;
                fields: string;
            };
            provide_judgement: {
                regIndex: string;
                target: string;
                judgement: string;
                identity: string;
            };
            kill_identity: {
                target: string;
            };
            add_sub: {
                sub: string;
                data: string;
            };
            rename_sub: {
                sub: string;
                data: string;
            };
            remove_sub: {
                sub: string;
            };
            quit_sub: string;
        };
    };
    /**
     * Lookup180: pallet_identity::types::IdentityInfo<FieldLimit>
     **/
    PalletIdentityIdentityInfo: {
        additional: string;
        display: string;
        legal: string;
        web: string;
        riot: string;
        email: string;
        pgpFingerprint: string;
        image: string;
        twitter: string;
    };
    /**
     * Lookup216: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
     **/
    PalletIdentityBitFlags: {
        _bitLength: number;
        Display: number;
        Legal: number;
        Web: number;
        Riot: number;
        Email: number;
        PgpFingerprint: number;
        Image: number;
        Twitter: number;
    };
    /**
     * Lookup217: pallet_identity::types::IdentityField
     **/
    PalletIdentityIdentityField: {
        _enum: string[];
    };
    /**
     * Lookup218: pallet_identity::types::Judgement<Balance>
     **/
    PalletIdentityJudgement: {
        _enum: {
            Unknown: string;
            FeePaid: string;
            Reasonable: string;
            KnownGood: string;
            OutOfDate: string;
            LowQuality: string;
            Erroneous: string;
        };
    };
    /**
     * Lookup219: pallet_utility::pallet::Call<T>
     **/
    PalletUtilityCall: {
        _enum: {
            batch: {
                calls: string;
            };
            as_derivative: {
                index: string;
                call: string;
            };
            batch_all: {
                calls: string;
            };
            dispatch_as: {
                asOrigin: string;
                call: string;
            };
            force_batch: {
                calls: string;
            };
        };
    };
    /**
     * Lookup221: clamor_runtime::OriginCaller
     **/
    ClamorRuntimeOriginCaller: {
        _enum: {
            system: string;
            Void: string;
        };
    };
    /**
     * Lookup222: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
     **/
    FrameSupportDispatchRawOrigin: {
        _enum: {
            Root: string;
            Signed: string;
            None: string;
        };
    };
    /**
     * Lookup223: pallet_accounts::pallet::Call<T>
     **/
    PalletAccountsCall: {
        _enum: {
            add_key: {
                public: string;
            };
            del_key: {
                public: string;
            };
            link: {
                signature: string;
            };
            unlink: {
                account: string;
            };
            internal_lock_update: {
                data: string;
                signature: string;
            };
            sponsor_account: {
                externalId: string;
            };
            add_sponsor: {
                account: string;
            };
            remove_sponsor: {
                account: string;
            };
        };
    };
    /**
     * Lookup224: pallet_accounts::EthLockUpdate<sp_runtime::MultiSigner>
     **/
    PalletAccountsEthLockUpdate: {
        public: string;
        amount: string;
        locktime: string;
        sender: string;
        signature: string;
        lock: string;
        blockNumber: string;
    };
    /**
     * Lookup225: pallet_sudo::pallet::Error<T>
     **/
    PalletSudoError: {
        _enum: string[];
    };
    /**
     * Lookup226: pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance>
     **/
    PalletAssetsAssetDetails: {
        owner: string;
        issuer: string;
        admin: string;
        freezer: string;
        supply: string;
        deposit: string;
        minBalance: string;
        isSufficient: string;
        accounts: string;
        sufficients: string;
        approvals: string;
        isFrozen: string;
        isTransferable: string;
    };
    /**
     * Lookup228: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra>
     **/
    PalletAssetsAssetAccount: {
        balance: string;
        isFrozen: string;
        reason: string;
        extra: string;
    };
    /**
     * Lookup229: pallet_assets::types::ExistenceReason<Balance>
     **/
    PalletAssetsExistenceReason: {
        _enum: {
            Consumer: string;
            Sufficient: string;
            DepositHeld: string;
            DepositRefunded: string;
        };
    };
    /**
     * Lookup231: pallet_assets::types::Approval<Balance, DepositBalance>
     **/
    PalletAssetsApproval: {
        amount: string;
        deposit: string;
    };
    /**
     * Lookup232: pallet_assets::types::AssetMetadata<DepositBalance, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
     **/
    PalletAssetsAssetMetadata: {
        deposit: string;
        name: string;
        symbol: string;
        decimals: string;
        isFrozen: string;
    };
    /**
     * Lookup234: pallet_assets::pallet::Error<T, I>
     **/
    PalletAssetsError: {
        _enum: string[];
    };
    /**
     * Lookup236: pallet_indices::pallet::Error<T>
     **/
    PalletIndicesError: {
        _enum: string[];
    };
    /**
     * Lookup238: pallet_contracts::wasm::PrefabWasmModule<T>
     **/
    PalletContractsWasmPrefabWasmModule: {
        instructionWeightsVersion: string;
        initial: string;
        maximum: string;
        code: string;
    };
    /**
     * Lookup240: pallet_contracts::wasm::OwnerInfo<T>
     **/
    PalletContractsWasmOwnerInfo: {
        owner: string;
        deposit: string;
        refcount: string;
    };
    /**
     * Lookup241: pallet_contracts::storage::ContractInfo<T>
     **/
    PalletContractsStorageContractInfo: {
        trieId: string;
        codeHash: string;
        storageBytes: string;
        storageItems: string;
        storageByteDeposit: string;
        storageItemDeposit: string;
        storageBaseDeposit: string;
    };
    /**
     * Lookup244: pallet_contracts::storage::DeletedContract
     **/
    PalletContractsStorageDeletedContract: {
        trieId: string;
    };
    /**
     * Lookup246: pallet_contracts::schedule::Schedule<T>
     **/
    PalletContractsSchedule: {
        limits: string;
        instructionWeights: string;
        hostFnWeights: string;
    };
    /**
     * Lookup247: pallet_contracts::schedule::Limits
     **/
    PalletContractsScheduleLimits: {
        eventTopics: string;
        stackHeight: string;
        globals: string;
        parameters: string;
        memoryPages: string;
        tableSize: string;
        brTableSize: string;
        subjectLen: string;
        callDepth: string;
        payloadLen: string;
    };
    /**
     * Lookup249: pallet_contracts::schedule::InstructionWeights<T>
     **/
    PalletContractsScheduleInstructionWeights: {
        _alias: {
            r_if: string;
        };
        version: string;
        i64const: string;
        i64load: string;
        i64store: string;
        select: string;
        r_if: string;
        br: string;
        brIf: string;
        brTable: string;
        brTablePerEntry: string;
        call: string;
        callIndirect: string;
        callIndirectPerParam: string;
        localGet: string;
        localSet: string;
        localTee: string;
        globalGet: string;
        globalSet: string;
        memoryCurrent: string;
        memoryGrow: string;
        i64clz: string;
        i64ctz: string;
        i64popcnt: string;
        i64eqz: string;
        i64extendsi32: string;
        i64extendui32: string;
        i32wrapi64: string;
        i64eq: string;
        i64ne: string;
        i64lts: string;
        i64ltu: string;
        i64gts: string;
        i64gtu: string;
        i64les: string;
        i64leu: string;
        i64ges: string;
        i64geu: string;
        i64add: string;
        i64sub: string;
        i64mul: string;
        i64divs: string;
        i64divu: string;
        i64rems: string;
        i64remu: string;
        i64and: string;
        i64or: string;
        i64xor: string;
        i64shl: string;
        i64shrs: string;
        i64shru: string;
        i64rotl: string;
        i64rotr: string;
    };
    /**
     * Lookup250: pallet_contracts::schedule::HostFnWeights<T>
     **/
    PalletContractsScheduleHostFnWeights: {
        _alias: {
            r_return: string;
        };
        caller: string;
        isContract: string;
        codeHash: string;
        ownCodeHash: string;
        callerIsOrigin: string;
        address: string;
        gasLeft: string;
        balance: string;
        valueTransferred: string;
        minimumBalance: string;
        blockNumber: string;
        now: string;
        weightToFee: string;
        gas: string;
        input: string;
        inputPerByte: string;
        r_return: string;
        returnPerByte: string;
        terminate: string;
        random: string;
        depositEvent: string;
        depositEventPerTopic: string;
        depositEventPerByte: string;
        debugMessage: string;
        setStorage: string;
        setStoragePerNewByte: string;
        setStoragePerOldByte: string;
        setCodeHash: string;
        clearStorage: string;
        clearStoragePerByte: string;
        containsStorage: string;
        containsStoragePerByte: string;
        getStorage: string;
        getStoragePerByte: string;
        takeStorage: string;
        takeStoragePerByte: string;
        transfer: string;
        call: string;
        delegateCall: string;
        callTransferSurcharge: string;
        callPerClonedByte: string;
        instantiate: string;
        instantiateTransferSurcharge: string;
        instantiatePerSaltByte: string;
        hashSha2256: string;
        hashSha2256PerByte: string;
        hashKeccak256: string;
        hashKeccak256PerByte: string;
        hashBlake2256: string;
        hashBlake2256PerByte: string;
        hashBlake2128: string;
        hashBlake2128PerByte: string;
        ecdsaRecover: string;
        ecdsaToEthAddress: string;
    };
    /**
     * Lookup251: pallet_contracts::pallet::Error<T>
     **/
    PalletContractsError: {
        _enum: string[];
    };
    /**
     * Lookup252: pallet_protos::Proto<sp_core::crypto::AccountId32, TBlockNumber>
     **/
    PalletProtosProto: {
        block: string;
        patches: string;
        license: string;
        creator: string;
        owner: string;
        references: string;
        category: string;
        tags: string;
        metadata: string;
        accountsInfo: string;
    };
    /**
     * Lookup254: pallet_protos::ProtoPatch<TBlockNumber>
     **/
    PalletProtosProtoPatch: {
        block: string;
        dataHash: string;
        references: string;
    };
    /**
     * Lookup255: pallet_protos::ProtoOwner<sp_core::crypto::AccountId32>
     **/
    PalletProtosProtoOwner: {
        _enum: {
            User: string;
            ExternalAsset: string;
        };
    };
    /**
     * Lookup260: pallet_protos::AccountsInfo
     **/
    PalletProtosAccountsInfo: {
        activeAccounts: string;
        lifetimeAccounts: string;
    };
    /**
     * Lookup263: pallet_protos::pallet::Error<T>
     **/
    PalletProtosError: {
        _enum: string[];
    };
    /**
     * Lookup265: pallet_fragments::FragmentDefinition<TFungibleAsset, sp_core::crypto::AccountId32, TBlockNum>
     **/
    PalletFragmentsFragmentDefinition: {
        protoHash: string;
        metadata: string;
        permissions: string;
        unique: string;
        maxSupply: string;
        creator: string;
        createdAt: string;
        customMetadata: string;
    };
    /**
     * Lookup267: pallet_fragments::PublishingData<TBlockNum>
     **/
    PalletFragmentsPublishingData: {
        price: string;
        unitsLeft: string;
        expiration: string;
        stackAmount: string;
    };
    /**
     * Lookup269: pallet_fragments::SecondarySaleData<sp_core::crypto::AccountId32, TBlockNum>
     **/
    PalletFragmentsSecondarySaleData: {
        owner: string;
        newPermissions: string;
        expiration: string;
        secondarySaleType: string;
    };
    /**
     * Lookup271: pallet_fragments::FragmentInstance<TBlockNum>
     **/
    PalletFragmentsFragmentInstance: {
        permissions: string;
        createdAt: string;
        customData: string;
        expiringAt: string;
        stackAmount: string;
        metadata: string;
    };
    /**
     * Lookup282: pallet_fragments::pallet::Error<T>
     **/
    PalletFragmentsError: {
        _enum: string[];
    };
    /**
     * Lookup284: pallet_detach::DetachRequest
     **/
    PalletDetachDetachRequest: {
        _alias: {
            hash_: string;
        };
        hash_: string;
        targetChain: string;
        targetAccount: string;
    };
    /**
     * Lookup286: pallet_detach::ExportData
     **/
    PalletDetachExportData: {
        chain: string;
        owner: string;
        nonce: string;
    };
    /**
     * Lookup291: pallet_detach::pallet::Error<T>
     **/
    PalletDetachError: {
        _enum: string[];
    };
    /**
     * Lookup293: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32>
     **/
    PalletMultisigMultisig: {
        when: string;
        deposit: string;
        depositor: string;
        approvals: string;
    };
    /**
     * Lookup295: pallet_multisig::pallet::Error<T>
     **/
    PalletMultisigError: {
        _enum: string[];
    };
    /**
     * Lookup298: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, ProxyType, BlockNumber>
     **/
    PalletProxyProxyDefinition: {
        delegate: string;
        proxyType: string;
        delay: string;
    };
    /**
     * Lookup302: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
     **/
    PalletProxyAnnouncement: {
        real: string;
        callHash: string;
        height: string;
    };
    /**
     * Lookup304: pallet_proxy::pallet::Error<T>
     **/
    PalletProxyError: {
        _enum: string[];
    };
    /**
     * Lookup305: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    PalletIdentityRegistration: {
        judgements: string;
        deposit: string;
        info: string;
    };
    /**
     * Lookup313: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
     **/
    PalletIdentityRegistrarInfo: {
        account: string;
        fee: string;
        fields: string;
    };
    /**
     * Lookup315: pallet_identity::pallet::Error<T>
     **/
    PalletIdentityError: {
        _enum: string[];
    };
    /**
     * Lookup316: pallet_utility::pallet::Error<T>
     **/
    PalletUtilityError: {
        _enum: string[];
    };
    /**
     * Lookup317: pallet_accounts::EthLock<TBalance, TBlockNum>
     **/
    PalletAccountsEthLock: {
        amount: string;
        blockNumber: string;
    };
    /**
     * Lookup318: pallet_accounts::AccountInfo<sp_core::crypto::AccountId32, TMoment>
     **/
    PalletAccountsAccountInfo: {
        accountId: string;
        createdAt: string;
    };
    /**
     * Lookup320: pallet_accounts::pallet::Error<T>
     **/
    PalletAccountsError: {
        _enum: string[];
    };
    /**
     * Lookup323: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: string;
    /**
     * Lookup324: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: string;
    /**
     * Lookup325: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: string;
    /**
     * Lookup328: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: string;
    /**
     * Lookup329: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: string;
    /**
     * Lookup330: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: string;
    /**
     * Lookup331: clamor_runtime::Runtime
     **/
    ClamorRuntimeRuntime: string;
};
export default _default;
