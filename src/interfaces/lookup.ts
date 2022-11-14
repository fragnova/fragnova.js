// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128'
  },
  /**
   * Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'Weight',
    operational: 'Weight',
    mandatory: 'Weight'
  },
  /**
   * Lookup12: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup14: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup17: frame_system::EventRecord<clamor_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup19: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup20: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup21: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup22: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup23: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpRuntimeArithmeticError',
      Transactional: 'SpRuntimeTransactionalError'
    }
  },
  /**
   * Lookup24: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup25: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup26: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup27: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup28: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup31: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup32: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup33: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup34: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup35: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup36: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup40: pallet_assets::pallet::Event<T, I>
   **/
  PalletAssetsEvent: {
    _enum: {
      Created: {
        assetId: 'u64',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      Issued: {
        assetId: 'u64',
        owner: 'AccountId32',
        totalSupply: 'u128',
      },
      Transferred: {
        assetId: 'u64',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        assetId: 'u64',
        owner: 'AccountId32',
        balance: 'u128',
      },
      TeamChanged: {
        assetId: 'u64',
        issuer: 'AccountId32',
        admin: 'AccountId32',
        freezer: 'AccountId32',
      },
      OwnerChanged: {
        assetId: 'u64',
        owner: 'AccountId32',
      },
      Frozen: {
        assetId: 'u64',
        who: 'AccountId32',
      },
      Thawed: {
        assetId: 'u64',
        who: 'AccountId32',
      },
      AssetFrozen: {
        assetId: 'u64',
      },
      AssetThawed: {
        assetId: 'u64',
      },
      Destroyed: {
        assetId: 'u64',
      },
      ForceCreated: {
        assetId: 'u64',
        owner: 'AccountId32',
      },
      MetadataSet: {
        assetId: 'u64',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      MetadataCleared: {
        assetId: 'u64',
      },
      ApprovedTransfer: {
        assetId: 'u64',
        source: 'AccountId32',
        delegate: 'AccountId32',
        amount: 'u128',
      },
      ApprovalCancelled: {
        assetId: 'u64',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      TransferredApproved: {
        assetId: 'u64',
        owner: 'AccountId32',
        delegate: 'AccountId32',
        destination: 'AccountId32',
        amount: 'u128',
      },
      AssetStatusChanged: {
        assetId: 'u64'
      }
    }
  },
  /**
   * Lookup42: pallet_indices::pallet::Event<T>
   **/
  PalletIndicesEvent: {
    _enum: {
      IndexAssigned: {
        who: 'AccountId32',
        index: 'u64',
      },
      IndexFreed: {
        index: 'u64',
      },
      IndexFrozen: {
        index: 'u64',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup43: pallet_contracts::pallet::Event<T>
   **/
  PalletContractsEvent: {
    _enum: {
      Instantiated: {
        deployer: 'AccountId32',
        contract: 'AccountId32',
      },
      Terminated: {
        contract: 'AccountId32',
        beneficiary: 'AccountId32',
      },
      CodeStored: {
        codeHash: 'H256',
      },
      ContractEmitted: {
        contract: 'AccountId32',
        data: 'Bytes',
      },
      CodeRemoved: {
        codeHash: 'H256',
      },
      ContractCodeUpdated: {
        contract: 'AccountId32',
        newCodeHash: 'H256',
        oldCodeHash: 'H256',
      },
      Called: {
        caller: 'AccountId32',
        contract: 'AccountId32',
      },
      DelegateCalled: {
        contract: 'AccountId32',
        codeHash: 'H256'
      }
    }
  },
  /**
   * Lookup44: pallet_protos::pallet::Event<T>
   **/
  PalletProtosEvent: {
    _enum: {
      Uploaded: {
        protoHash: '[u8;32]',
        cid: 'Bytes',
      },
      Patched: {
        protoHash: '[u8;32]',
        cid: 'Bytes',
      },
      MetadataChanged: {
        protoHash: '[u8;32]',
        cid: 'Bytes',
      },
      Detached: {
        protoHash: '[u8;32]',
        cid: 'Bytes',
      },
      Transferred: {
        protoHash: '[u8;32]',
        ownerId: 'AccountId32',
      },
      Staked: {
        protoHash: '[u8;32]',
        accountId: 'AccountId32',
        balance: 'u128',
      },
      Unstaked: {
        protoHash: '[u8;32]',
        accountId: 'AccountId32',
        balance: 'u128'
      }
    }
  },
  /**
   * Lookup45: pallet_fragments::pallet::Event<T>
   **/
  PalletFragmentsEvent: {
    _enum: {
      DefinitionCreated: {
        definitionHash: '[u8;16]',
      },
      DefinitionMetadataChanged: {
        fragmentHash: '[u8;16]',
        metadataKey: 'Bytes',
      },
      InstanceMetadataChanged: {
        fragmentHash: '[u8;16]',
        editionId: 'u64',
        copyId: 'u64',
        metadataKey: 'Bytes',
      },
      Publishing: {
        definitionHash: '[u8;16]',
      },
      Unpublishing: {
        definitionHash: '[u8;16]',
      },
      InventoryAdded: {
        accountId: 'AccountId32',
        definitionHash: '[u8;16]',
        fragmentId: '(u64,u64)',
      },
      InventoryRemoved: {
        accountId: 'AccountId32',
        definitionHash: '[u8;16]',
        fragmentId: '(u64,u64)',
      },
      InventoryUpdated: {
        accountId: 'AccountId32',
        definitionHash: '[u8;16]',
        fragmentId: '(u64,u64)',
      },
      Expired: {
        accountId: 'AccountId32',
        definitionHash: '[u8;16]',
        fragmentId: '(u64,u64)',
      },
      Resell: {
        definitionHash: '[u8;16]',
        fragmentId: '(u64,u64)',
      },
      EndResale: {
        definitionHash: '[u8;16]',
        fragmentId: '(u64,u64)'
      }
    }
  },
  /**
   * Lookup48: pallet_detach::pallet::Event<T>
   **/
  PalletDetachEvent: {
    _enum: {
      Uploaded: {
        fragmentDataHash: '[u8;32]',
      },
      Patched: {
        fragmentDataHash: '[u8;32]',
      },
      MetadataChanged: {
        fragmentDataHash: '[u8;32]',
        remoteSignature: 'Bytes',
      },
      Detached: {
        fragmentDataHash: '[u8;32]',
        remoteSignature: 'Bytes',
      },
      Transferred: {
        fragmentDataHash: '[u8;32]',
        accountId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup49: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup50: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u64',
    index: 'u32'
  },
  /**
   * Lookup51: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'Null',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'Null',
        delay: 'u64',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'Null',
        delay: 'u64'
      }
    }
  },
  /**
   * Lookup53: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup54: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup55: pallet_accounts::pallet::Event<T>
   **/
  PalletAccountsEvent: {
    _enum: {
      Linked: {
        sender: 'AccountId32',
        ethKey: 'H160',
      },
      Unlinked: {
        sender: 'AccountId32',
        ethKey: 'H160',
      },
      Locked: {
        ethKey: 'H160',
        balance: 'u128',
        locktime: 'u64',
      },
      Unlocked: {
        ethKey: 'H160',
        balance: 'u128',
      },
      SponsoredAccount: {
        sponsor: 'AccountId32',
        sponsored: 'AccountId32',
        externalId: 'PalletAccountsExternalID'
      }
    }
  },
  /**
   * Lookup58: pallet_accounts::ExternalID
   **/
  PalletAccountsExternalID: {
    _enum: {
      Discord: 'u64'
    }
  },
  /**
   * Lookup59: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup63: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup66: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup71: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'Weight',
    maxBlock: 'Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup72: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup73: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'Weight',
    maxExtrinsic: 'Option<Weight>',
    maxTotal: 'Option<Weight>',
    reserved: 'Option<Weight>'
  },
  /**
   * Lookup75: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup76: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup77: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup78: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup83: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup85: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup88: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup89: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup92: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u64',
        delay: 'u64',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u64',
        delay: 'u64'
      }
    }
  },
  /**
   * Lookup93: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u64',
    delay: 'u64',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u64>'
  },
  /**
   * Lookup96: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      note_stalled: {
        delay: 'u64',
        bestFinalizedBlockNumber: 'u64'
      }
    }
  },
  /**
   * Lookup97: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation'
  },
  /**
   * Lookup98: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup99: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup100: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u64'
  },
  /**
   * Lookup101: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup102: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup105: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup106: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u64'
  },
  /**
   * Lookup108: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup109: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup111: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup112: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup115: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup117: pallet_balances::Releases
   **/
  PalletBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0']
  },
  /**
   * Lookup118: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup121: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'CannotTransfer']
  },
  /**
   * Lookup123: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup124: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup126: pallet_assets::pallet::Call<T, I>
   **/
  PalletAssetsCall: {
    _enum: {
      create: {
        id: 'Compact<u64>',
        admin: 'MultiAddress',
        minBalance: 'u128',
        transferable: 'bool',
      },
      force_create: {
        id: 'Compact<u64>',
        owner: 'MultiAddress',
        isSufficient: 'bool',
        minBalance: 'Compact<u128>',
        transferable: 'bool',
      },
      destroy: {
        id: 'Compact<u64>',
        witness: 'PalletAssetsDestroyWitness',
      },
      mint: {
        id: 'Compact<u64>',
        beneficiary: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      burn: {
        id: 'Compact<u64>',
        who: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      transfer: {
        id: 'Compact<u64>',
        target: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      transfer_keep_alive: {
        id: 'Compact<u64>',
        target: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        id: 'Compact<u64>',
        source: 'MultiAddress',
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      freeze: {
        id: 'Compact<u64>',
        who: 'MultiAddress',
      },
      thaw: {
        id: 'Compact<u64>',
        who: 'MultiAddress',
      },
      freeze_asset: {
        id: 'Compact<u64>',
      },
      thaw_asset: {
        id: 'Compact<u64>',
      },
      transfer_ownership: {
        id: 'Compact<u64>',
        owner: 'MultiAddress',
      },
      set_team: {
        id: 'Compact<u64>',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
      },
      set_metadata: {
        id: 'Compact<u64>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
      },
      clear_metadata: {
        id: 'Compact<u64>',
      },
      force_set_metadata: {
        id: 'Compact<u64>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      force_clear_metadata: {
        id: 'Compact<u64>',
      },
      force_asset_status: {
        id: 'Compact<u64>',
        owner: 'MultiAddress',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
        minBalance: 'Compact<u128>',
        isSufficient: 'bool',
        isFrozen: 'bool',
      },
      approve_transfer: {
        id: 'Compact<u64>',
        delegate: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      cancel_approval: {
        id: 'Compact<u64>',
        delegate: 'MultiAddress',
      },
      force_cancel_approval: {
        id: 'Compact<u64>',
        owner: 'MultiAddress',
        delegate: 'MultiAddress',
      },
      transfer_approved: {
        id: 'Compact<u64>',
        owner: 'MultiAddress',
        destination: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      touch: {
        id: 'Compact<u64>',
      },
      refund: {
        id: 'Compact<u64>',
        allowBurn: 'bool'
      }
    }
  },
  /**
   * Lookup127: pallet_assets::types::DestroyWitness
   **/
  PalletAssetsDestroyWitness: {
    accounts: 'Compact<u32>',
    sufficients: 'Compact<u32>',
    approvals: 'Compact<u32>'
  },
  /**
   * Lookup128: pallet_indices::pallet::Call<T>
   **/
  PalletIndicesCall: {
    _enum: {
      claim: {
        index: 'u64',
      },
      transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u64',
      },
      free: {
        index: 'u64',
      },
      force_transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u64',
        freeze: 'bool',
      },
      freeze: {
        index: 'u64'
      }
    }
  },
  /**
   * Lookup129: pallet_contracts::pallet::Call<T>
   **/
  PalletContractsCall: {
    _enum: {
      call: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'Compact<Weight>',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<Weight>',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<Weight>',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes',
      },
      upload_code: {
        code: 'Bytes',
        storageDepositLimit: 'Option<Compact<u128>>',
      },
      remove_code: {
        codeHash: 'H256',
      },
      set_code: {
        dest: 'MultiAddress',
        codeHash: 'H256'
      }
    }
  },
  /**
   * Lookup132: pallet_protos::pallet::Call<T>
   **/
  PalletProtosCall: {
    _enum: {
      upload: {
        references: 'Vec<[u8;32]>',
        category: 'ProtosCategories',
        tags: 'Vec<Bytes>',
        linkedAsset: 'Option<PalletProtosLinkedAsset>',
        license: 'PalletProtosUsageLicense',
        data: 'Bytes',
      },
      patch: {
        protoHash: '[u8;32]',
        license: 'Option<PalletProtosUsageLicense>',
        newReferences: 'Vec<[u8;32]>',
        tags: 'Option<Vec<Bytes>>',
        data: 'Bytes',
      },
      transfer: {
        protoHash: '[u8;32]',
        newOwner: 'AccountId32',
      },
      set_metadata: {
        protoHash: '[u8;32]',
        metadataKey: 'Bytes',
        data: 'Bytes',
      },
      detach: {
        protoHash: '[u8;32]',
        targetChain: 'PalletDetachSupportedChains',
        targetAccount: 'Bytes',
      },
      curate: {
        protoHash: '[u8;32]',
        amount: 'u128',
      },
      ban: {
        protoHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup134: protos::categories::Categories
   **/
  ProtosCategories: {
    _enum: {
      Text: 'ProtosCategoriesTextCategories',
      Trait: 'Option<[u8;8]>',
      Shards: 'ProtosCategoriesShardsScriptInfo',
      Audio: 'ProtosCategoriesAudioCategories',
      Texture: 'ProtosCategoriesTextureCategories',
      Vector: 'ProtosCategoriesVectorCategories',
      Video: 'ProtosCategoriesVideoCategories',
      Model: 'ProtosCategoriesModelCategories',
      Binary: 'ProtosCategoriesBinaryCategories'
    }
  },
  /**
   * Lookup135: protos::categories::TextCategories
   **/
  ProtosCategoriesTextCategories: {
    _enum: ['Plain', 'Json']
  },
  /**
   * Lookup137: protos::categories::ShardsScriptInfo
   **/
  ProtosCategoriesShardsScriptInfo: {
    format: 'ProtosCategoriesShardsFormat',
    requiring: 'Vec<[u8;8]>',
    implementing: 'Vec<[u8;8]>'
  },
  /**
   * Lookup138: protos::categories::ShardsFormat
   **/
  ProtosCategoriesShardsFormat: {
    _enum: ['Edn', 'Binary']
  },
  /**
   * Lookup140: protos::categories::AudioCategories
   **/
  ProtosCategoriesAudioCategories: {
    _enum: ['OggFile', 'Mp3File']
  },
  /**
   * Lookup141: protos::categories::TextureCategories
   **/
  ProtosCategoriesTextureCategories: {
    _enum: ['PngFile', 'JpgFile']
  },
  /**
   * Lookup142: protos::categories::VectorCategories
   **/
  ProtosCategoriesVectorCategories: {
    _enum: ['SvgFile', 'TtfFile']
  },
  /**
   * Lookup143: protos::categories::VideoCategories
   **/
  ProtosCategoriesVideoCategories: {
    _enum: ['MkvFile', 'Mp4File']
  },
  /**
   * Lookup144: protos::categories::ModelCategories
   **/
  ProtosCategoriesModelCategories: {
    _enum: ['GltfFile', 'Sdf', 'PhysicsCollider']
  },
  /**
   * Lookup145: protos::categories::BinaryCategories
   **/
  ProtosCategoriesBinaryCategories: {
    _enum: ['WasmProgram', 'WasmReactor', 'BlendFile', 'OnnxModel']
  },
  /**
   * Lookup147: pallet_protos::LinkedAsset
   **/
  PalletProtosLinkedAsset: {
    _enum: {
      Erc721: '(H160,U256,PalletProtosLinkSource)'
    }
  },
  /**
   * Lookup150: pallet_protos::LinkSource
   **/
  PalletProtosLinkSource: {
    _enum: {
      Evm: '(SpCoreEcdsaSignature,u64,U256)'
    }
  },
  /**
   * Lookup151: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup153: pallet_protos::UsageLicense<sp_core::crypto::AccountId32>
   **/
  PalletProtosUsageLicense: {
    _enum: {
      Closed: 'Null',
      Open: 'Null',
      Tickets: 'Compact<u64>',
      Contract: 'AccountId32'
    }
  },
  /**
   * Lookup156: pallet_detach::SupportedChains
   **/
  PalletDetachSupportedChains: {
    _enum: ['EthereumMainnet', 'EthereumRinkeby', 'EthereumGoerli']
  },
  /**
   * Lookup157: pallet_fragments::pallet::Call<T>
   **/
  PalletFragmentsCall: {
    _enum: {
      create: {
        protoHash: '[u8;32]',
        metadata: 'PalletFragmentsFragmentMetadata',
        permissions: 'ProtosPermissionsFragmentPerms',
        unique: 'Option<PalletFragmentsUniqueOptions>',
        maxSupply: 'Option<u64>',
      },
      set_definition_metadata: {
        fragmentHash: '[u8;16]',
        metadataKey: 'Bytes',
        data: 'Bytes',
      },
      set_instance_metadata: {
        definitionHash: '[u8;16]',
        editionId: 'u64',
        copyId: 'u64',
        metadataKey: 'Bytes',
        data: 'Bytes',
      },
      publish: {
        definitionHash: '[u8;16]',
        price: 'u128',
        quantity: 'Option<u64>',
        expires: 'Option<u64>',
        stackAmount: 'Option<u64>',
      },
      unpublish: {
        definitionHash: '[u8;16]',
      },
      mint: {
        definitionHash: '[u8;16]',
        options: 'PalletFragmentsFragmentBuyOptions',
        stackAmount: 'Option<u64>',
      },
      buy: {
        definitionHash: '[u8;16]',
        options: 'PalletFragmentsFragmentBuyOptions',
      },
      give: {
        definitionHash: '[u8;16]',
        editionId: 'u64',
        copyId: 'u64',
        to: 'MultiAddress',
        newPermissions: 'Option<ProtosPermissionsFragmentPerms>',
        expiration: 'Option<u64>',
      },
      create_account: {
        definitionHash: '[u8;16]',
        edition: 'u64',
        copy: 'u64',
      },
      resell: {
        definitionHash: '[u8;16]',
        editionId: 'u64',
        copyId: 'u64',
        newPermissions: 'Option<ProtosPermissionsFragmentPerms>',
        expiration: 'Option<u64>',
        secondarySaleType: 'PalletFragmentsSecondarySaleType',
      },
      end_resale: {
        definitionHash: '[u8;16]',
        editionId: 'u64',
        copyId: 'u64',
      },
      secondary_buy: {
        definitionHash: '[u8;16]',
        editionId: 'u64',
        copyId: 'u64',
        options: 'PalletFragmentsSecondarySaleBuyOptions'
      }
    }
  },
  /**
   * Lookup158: pallet_fragments::FragmentMetadata<TFungibleAsset>
   **/
  PalletFragmentsFragmentMetadata: {
    name: 'Bytes',
    currency: 'Option<u64>'
  },
  /**
   * Lookup159: protos::permissions::FragmentPerms
   **/
  ProtosPermissionsFragmentPerms: {
    bits: 'u32'
  },
  /**
   * Lookup161: pallet_fragments::UniqueOptions
   **/
  PalletFragmentsUniqueOptions: {
    mutable: 'bool'
  },
  /**
   * Lookup162: pallet_fragments::FragmentBuyOptions
   **/
  PalletFragmentsFragmentBuyOptions: {
    _enum: {
      Quantity: 'u64',
      UniqueData: 'Bytes'
    }
  },
  /**
   * Lookup164: pallet_fragments::SecondarySaleType
   **/
  PalletFragmentsSecondarySaleType: {
    _enum: {
      Normal: 'u128'
    }
  },
  /**
   * Lookup165: pallet_fragments::SecondarySaleBuyOptions
   **/
  PalletFragmentsSecondarySaleBuyOptions: {
    _enum: ['Normal']
  },
  /**
   * Lookup166: pallet_detach::pallet::Call<T>
   **/
  PalletDetachCall: {
    _enum: {
      add_eth_auth: {
        public: 'SpCoreEcdsaPublic',
      },
      del_eth_auth: {
        public: 'SpCoreEcdsaPublic',
      },
      add_key: {
        public: 'SpCoreEd25519Public',
      },
      del_key: {
        public: 'SpCoreEd25519Public',
      },
      internal_finalize_detach: {
        data: 'PalletDetachDetachInternalData',
        signature: 'SpRuntimeMultiSignature'
      }
    }
  },
  /**
   * Lookup167: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',
  /**
   * Lookup169: pallet_detach::DetachInternalData<sp_runtime::MultiSigner>
   **/
  PalletDetachDetachInternalData: {
    _alias: {
      hash_: 'hash'
    },
    public: 'SpRuntimeMultiSigner',
    hash_: '[u8;32]',
    targetChain: 'PalletDetachSupportedChains',
    targetAccount: 'Bytes',
    remoteSignature: 'Bytes',
    nonce: 'u64'
  },
  /**
   * Lookup170: sp_runtime::MultiSigner
   **/
  SpRuntimeMultiSigner: {
    _enum: {
      Ed25519: 'SpCoreEd25519Public',
      Sr25519: 'SpCoreSr25519Public',
      Ecdsa: 'SpCoreEcdsaPublic'
    }
  },
  /**
   * Lookup171: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup172: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup173: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'WrapperKeepOpaque<Call>',
        storeCall: 'bool',
        maxWeight: 'Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup177: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<Null>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'Null',
        delay: 'u64',
      },
      remove_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'Null',
        delay: 'u64',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'Null',
        delay: 'u64',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'MultiAddress',
        proxyType: 'Null',
        index: 'u16',
        height: 'Compact<u64>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'MultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'MultiAddress',
        real: 'MultiAddress',
        forceProxyType: 'Option<Null>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup179: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'MultiAddress',
      },
      set_identity: {
        info: 'PalletIdentityIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'MultiAddress',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'PalletIdentityBitFlags',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup180: pallet_identity::types::IdentityInfo<FieldLimit>
   **/
  PalletIdentityIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup216: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128
  },
  /**
   * Lookup217: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup218: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup219: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'ClamorRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>'
      }
    }
  },
  /**
   * Lookup221: clamor_runtime::OriginCaller
   **/
  ClamorRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      Void: 'SpCoreVoid'
    }
  },
  /**
   * Lookup222: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup223: pallet_accounts::pallet::Call<T>
   **/
  PalletAccountsCall: {
    _enum: {
      add_key: {
        public: 'SpCoreEd25519Public',
      },
      del_key: {
        public: 'SpCoreEd25519Public',
      },
      link: {
        signature: 'SpCoreEcdsaSignature',
      },
      unlink: {
        account: 'H160',
      },
      internal_lock_update: {
        data: 'PalletAccountsEthLockUpdate',
        signature: 'SpRuntimeMultiSignature',
      },
      sponsor_account: {
        externalId: 'PalletAccountsExternalID',
      },
      add_sponsor: {
        account: 'AccountId32',
      },
      remove_sponsor: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup224: pallet_accounts::EthLockUpdate<sp_runtime::MultiSigner>
   **/
  PalletAccountsEthLockUpdate: {
    public: 'SpRuntimeMultiSigner',
    amount: 'U256',
    locktime: 'U256',
    sender: 'H160',
    signature: 'SpCoreEcdsaSignature',
    lock: 'bool',
    blockNumber: 'u64'
  },
  /**
   * Lookup225: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup226: pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletAssetsAssetDetails: {
    owner: 'AccountId32',
    issuer: 'AccountId32',
    admin: 'AccountId32',
    freezer: 'AccountId32',
    supply: 'u128',
    deposit: 'u128',
    minBalance: 'u128',
    isSufficient: 'bool',
    accounts: 'u32',
    sufficients: 'u32',
    approvals: 'u32',
    isFrozen: 'bool',
    isTransferable: 'bool'
  },
  /**
   * Lookup228: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra>
   **/
  PalletAssetsAssetAccount: {
    balance: 'u128',
    isFrozen: 'bool',
    reason: 'PalletAssetsExistenceReason',
    extra: 'Null'
  },
  /**
   * Lookup229: pallet_assets::types::ExistenceReason<Balance>
   **/
  PalletAssetsExistenceReason: {
    _enum: {
      Consumer: 'Null',
      Sufficient: 'Null',
      DepositHeld: 'u128',
      DepositRefunded: 'Null'
    }
  },
  /**
   * Lookup231: pallet_assets::types::Approval<Balance, DepositBalance>
   **/
  PalletAssetsApproval: {
    amount: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup232: pallet_assets::types::AssetMetadata<DepositBalance, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAssetsAssetMetadata: {
    deposit: 'u128',
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8',
    isFrozen: 'bool'
  },
  /**
   * Lookup234: pallet_assets::pallet::Error<T, I>
   **/
  PalletAssetsError: {
    _enum: ['BalanceLow', 'NoAccount', 'NoPermission', 'Unknown', 'Frozen', 'InUse', 'BadWitness', 'MinBalanceZero', 'NoProvider', 'BadMetadata', 'Unapproved', 'WouldDie', 'AlreadyExists', 'NoDeposit', 'WouldBurn', 'CannotTransfer']
  },
  /**
   * Lookup236: pallet_indices::pallet::Error<T>
   **/
  PalletIndicesError: {
    _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
  },
  /**
   * Lookup238: pallet_contracts::wasm::PrefabWasmModule<T>
   **/
  PalletContractsWasmPrefabWasmModule: {
    instructionWeightsVersion: 'Compact<u32>',
    initial: 'Compact<u32>',
    maximum: 'Compact<u32>',
    code: 'Bytes'
  },
  /**
   * Lookup240: pallet_contracts::wasm::OwnerInfo<T>
   **/
  PalletContractsWasmOwnerInfo: {
    owner: 'AccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>'
  },
  /**
   * Lookup241: pallet_contracts::storage::ContractInfo<T>
   **/
  PalletContractsStorageContractInfo: {
    trieId: 'Bytes',
    codeHash: 'H256',
    storageBytes: 'u32',
    storageItems: 'u32',
    storageByteDeposit: 'u128',
    storageItemDeposit: 'u128',
    storageBaseDeposit: 'u128'
  },
  /**
   * Lookup244: pallet_contracts::storage::DeletedContract
   **/
  PalletContractsStorageDeletedContract: {
    trieId: 'Bytes'
  },
  /**
   * Lookup246: pallet_contracts::schedule::Schedule<T>
   **/
  PalletContractsSchedule: {
    limits: 'PalletContractsScheduleLimits',
    instructionWeights: 'PalletContractsScheduleInstructionWeights',
    hostFnWeights: 'PalletContractsScheduleHostFnWeights'
  },
  /**
   * Lookup247: pallet_contracts::schedule::Limits
   **/
  PalletContractsScheduleLimits: {
    eventTopics: 'u32',
    stackHeight: 'Option<u32>',
    globals: 'u32',
    parameters: 'u32',
    memoryPages: 'u32',
    tableSize: 'u32',
    brTableSize: 'u32',
    subjectLen: 'u32',
    callDepth: 'u32',
    payloadLen: 'u32'
  },
  /**
   * Lookup249: pallet_contracts::schedule::InstructionWeights<T>
   **/
  PalletContractsScheduleInstructionWeights: {
    _alias: {
      r_if: 'r#if'
    },
    version: 'u32',
    i64const: 'u32',
    i64load: 'u32',
    i64store: 'u32',
    select: 'u32',
    r_if: 'u32',
    br: 'u32',
    brIf: 'u32',
    brTable: 'u32',
    brTablePerEntry: 'u32',
    call: 'u32',
    callIndirect: 'u32',
    callIndirectPerParam: 'u32',
    localGet: 'u32',
    localSet: 'u32',
    localTee: 'u32',
    globalGet: 'u32',
    globalSet: 'u32',
    memoryCurrent: 'u32',
    memoryGrow: 'u32',
    i64clz: 'u32',
    i64ctz: 'u32',
    i64popcnt: 'u32',
    i64eqz: 'u32',
    i64extendsi32: 'u32',
    i64extendui32: 'u32',
    i32wrapi64: 'u32',
    i64eq: 'u32',
    i64ne: 'u32',
    i64lts: 'u32',
    i64ltu: 'u32',
    i64gts: 'u32',
    i64gtu: 'u32',
    i64les: 'u32',
    i64leu: 'u32',
    i64ges: 'u32',
    i64geu: 'u32',
    i64add: 'u32',
    i64sub: 'u32',
    i64mul: 'u32',
    i64divs: 'u32',
    i64divu: 'u32',
    i64rems: 'u32',
    i64remu: 'u32',
    i64and: 'u32',
    i64or: 'u32',
    i64xor: 'u32',
    i64shl: 'u32',
    i64shrs: 'u32',
    i64shru: 'u32',
    i64rotl: 'u32',
    i64rotr: 'u32'
  },
  /**
   * Lookup250: pallet_contracts::schedule::HostFnWeights<T>
   **/
  PalletContractsScheduleHostFnWeights: {
    _alias: {
      r_return: 'r#return'
    },
    caller: 'u64',
    isContract: 'u64',
    codeHash: 'u64',
    ownCodeHash: 'u64',
    callerIsOrigin: 'u64',
    address: 'u64',
    gasLeft: 'u64',
    balance: 'u64',
    valueTransferred: 'u64',
    minimumBalance: 'u64',
    blockNumber: 'u64',
    now: 'u64',
    weightToFee: 'u64',
    gas: 'u64',
    input: 'u64',
    inputPerByte: 'u64',
    r_return: 'u64',
    returnPerByte: 'u64',
    terminate: 'u64',
    random: 'u64',
    depositEvent: 'u64',
    depositEventPerTopic: 'u64',
    depositEventPerByte: 'u64',
    debugMessage: 'u64',
    setStorage: 'u64',
    setStoragePerNewByte: 'u64',
    setStoragePerOldByte: 'u64',
    setCodeHash: 'u64',
    clearStorage: 'u64',
    clearStoragePerByte: 'u64',
    containsStorage: 'u64',
    containsStoragePerByte: 'u64',
    getStorage: 'u64',
    getStoragePerByte: 'u64',
    takeStorage: 'u64',
    takeStoragePerByte: 'u64',
    transfer: 'u64',
    call: 'u64',
    delegateCall: 'u64',
    callTransferSurcharge: 'u64',
    callPerClonedByte: 'u64',
    instantiate: 'u64',
    instantiateTransferSurcharge: 'u64',
    instantiatePerSaltByte: 'u64',
    hashSha2256: 'u64',
    hashSha2256PerByte: 'u64',
    hashKeccak256: 'u64',
    hashKeccak256PerByte: 'u64',
    hashBlake2256: 'u64',
    hashBlake2256PerByte: 'u64',
    hashBlake2128: 'u64',
    hashBlake2128PerByte: 'u64',
    ecdsaRecover: 'u64',
    ecdsaToEthAddress: 'u64'
  },
  /**
   * Lookup251: pallet_contracts::pallet::Error<T>
   **/
  PalletContractsError: {
    _enum: ['InvalidScheduleVersion', 'InvalidCallFlags', 'OutOfGas', 'OutputBufferTooSmall', 'TransferFailed', 'MaxCallDepthReached', 'ContractNotFound', 'CodeTooLarge', 'CodeNotFound', 'OutOfBounds', 'DecodingFailed', 'ContractTrapped', 'ValueTooLarge', 'TerminatedWhileReentrant', 'InputForwarded', 'RandomSubjectTooLong', 'TooManyTopics', 'DuplicateTopics', 'NoChainExtension', 'DeletionQueueFull', 'DuplicateContract', 'TerminatedInConstructor', 'DebugMessageInvalidUTF8', 'ReentranceDenied', 'StorageDepositNotEnoughFunds', 'StorageDepositLimitExhausted', 'CodeInUse', 'ContractReverted', 'CodeRejected']
  },
  /**
   * Lookup252: pallet_protos::Proto<sp_core::crypto::AccountId32, TBlockNumber>
   **/
  PalletProtosProto: {
    block: 'u64',
    patches: 'Vec<PalletProtosProtoPatch>',
    license: 'PalletProtosUsageLicense',
    creator: 'AccountId32',
    owner: 'PalletProtosProtoOwner',
    references: 'Vec<[u8;32]>',
    category: 'ProtosCategories',
    tags: 'Vec<Compact<u64>>',
    metadata: 'BTreeMap<Compact<u64>, [u8;32]>',
    accountsInfo: 'PalletProtosAccountsInfo'
  },
  /**
   * Lookup254: pallet_protos::ProtoPatch<TBlockNumber>
   **/
  PalletProtosProtoPatch: {
    block: 'u64',
    dataHash: '[u8;32]',
    references: 'Vec<[u8;32]>'
  },
  /**
   * Lookup255: pallet_protos::ProtoOwner<sp_core::crypto::AccountId32>
   **/
  PalletProtosProtoOwner: {
    _enum: {
      User: 'AccountId32',
      ExternalAsset: 'PalletProtosLinkedAsset'
    }
  },
  /**
   * Lookup260: pallet_protos::AccountsInfo
   **/
  PalletProtosAccountsInfo: {
    activeAccounts: 'u128',
    lifetimeAccounts: 'u128'
  },
  /**
   * Lookup263: pallet_protos::pallet::Error<T>
   **/
  PalletProtosError: {
    _enum: ['SystematicFailure', 'ProtoNotFound', 'ProtoExists', 'Detached', 'Unauthorized', 'NotEnoughTickets', 'CurationNotFound', 'ReferenceNotFound', 'InsufficientBalance', 'CircularReference']
  },
  /**
   * Lookup265: pallet_fragments::FragmentDefinition<TFungibleAsset, sp_core::crypto::AccountId32, TBlockNum>
   **/
  PalletFragmentsFragmentDefinition: {
    protoHash: '[u8;32]',
    metadata: 'PalletFragmentsFragmentMetadata',
    permissions: 'ProtosPermissionsFragmentPerms',
    unique: 'Option<PalletFragmentsUniqueOptions>',
    maxSupply: 'Option<Compact<u64>>',
    creator: 'AccountId32',
    createdAt: 'u64',
    customMetadata: 'BTreeMap<Compact<u64>, [u8;32]>'
  },
  /**
   * Lookup267: pallet_fragments::PublishingData<TBlockNum>
   **/
  PalletFragmentsPublishingData: {
    price: 'Compact<u128>',
    unitsLeft: 'Option<Compact<u64>>',
    expiration: 'Option<u64>',
    stackAmount: 'Option<Compact<u64>>'
  },
  /**
   * Lookup269: pallet_fragments::SecondarySaleData<sp_core::crypto::AccountId32, TBlockNum>
   **/
  PalletFragmentsSecondarySaleData: {
    owner: 'AccountId32',
    newPermissions: 'Option<ProtosPermissionsFragmentPerms>',
    expiration: 'Option<u64>',
    secondarySaleType: 'PalletFragmentsSecondarySaleType'
  },
  /**
   * Lookup271: pallet_fragments::FragmentInstance<TBlockNum>
   **/
  PalletFragmentsFragmentInstance: {
    permissions: 'ProtosPermissionsFragmentPerms',
    createdAt: 'u64',
    customData: 'Option<[u8;32]>',
    expiringAt: 'Option<u64>',
    stackAmount: 'Option<Compact<u64>>',
    metadata: 'BTreeMap<Compact<u64>, Compact<u64>>'
  },
  /**
   * Lookup282: pallet_fragments::pallet::Error<T>
   **/
  PalletFragmentsError: {
    _enum: ['ProtoNotFound', 'ProtoOwnerNotFound', 'NoPermission', 'Detached', 'AlreadyExist', 'MetadataNameIsEmpty', 'NotFound', 'Expired', 'InsufficientBalance', 'ReceiverBelowMinimumBalance', 'SoldOut', 'SaleAlreadyOpen', 'MaxSupplyReached', 'PublishedQuantityReached', 'ParamsNotValid', 'SystematicFailure', 'UniqueDataExists', 'CurrencyNotFound']
  },
  /**
   * Lookup284: pallet_detach::DetachRequest
   **/
  PalletDetachDetachRequest: {
    _alias: {
      hash_: 'hash'
    },
    hash_: '[u8;32]',
    targetChain: 'PalletDetachSupportedChains',
    targetAccount: 'Bytes'
  },
  /**
   * Lookup286: pallet_detach::ExportData
   **/
  PalletDetachExportData: {
    chain: 'PalletDetachSupportedChains',
    owner: 'Bytes',
    nonce: 'u64'
  },
  /**
   * Lookup291: pallet_detach::pallet::Error<T>
   **/
  PalletDetachError: {
    _enum: ['Detached', 'NoValidator', 'SigningFailed']
  },
  /**
   * Lookup293: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup295: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup298: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'Null',
    delay: 'u64'
  },
  /**
   * Lookup302: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u64'
  },
  /**
   * Lookup304: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup305: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup313: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup315: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity']
  },
  /**
   * Lookup316: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup317: pallet_accounts::EthLock<TBalance, TBlockNum>
   **/
  PalletAccountsEthLock: {
    amount: 'u128',
    blockNumber: 'u64'
  },
  /**
   * Lookup318: pallet_accounts::AccountInfo<sp_core::crypto::AccountId32, TMoment>
   **/
  PalletAccountsAccountInfo: {
    accountId: 'AccountId32',
    createdAt: 'u64'
  },
  /**
   * Lookup320: pallet_accounts::pallet::Error<T>
   **/
  PalletAccountsError: {
    _enum: ['SystematicFailure', 'VerificationFailed', 'LinkAlreadyProcessed', 'LinkNotFound', 'AccountAlreadyLinked', 'AccountNotLinked', 'DifferentAccountLinked', 'AccountAlreadyExists', 'TooManyProxies']
  },
  /**
   * Lookup323: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup324: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup325: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup328: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup329: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup330: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup331: clamor_runtime::Runtime
   **/
  ClamorRuntimeRuntime: 'Null'
};
