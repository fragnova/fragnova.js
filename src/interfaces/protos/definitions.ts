let categories = {
    Categories: {
        _enum: {
            "text": "TextCategories",
            "trait": "Option<ShardsTrait>",
            "shards": "ShardsScriptInfo",
            "audio": "AudioCategories",
            "texture": "TextureCategories",
            "vector": "VectorCategories",
            "video": "VideoCategories",
            "model": "ModelCategories",
            "binary": "BinaryCategories",
        }
    },

    AudioCategories: {
        _enum: [
            "oggFile",
            "mp3File",
        ]
    },
    ModelCategories: {
        _enum: [
            "gltfFile",
            "sdf",
            "physicsCollider"
        ]
    },
    TextureCategories: {
        _enum: [
            "pngFile",
            "jpgFile"
        ]
    },
    VectorCategories: {
        _enum: [
            "svgFile",
            "ttfFile"
        ]
    },
    VideoCategories: {
        _enum: [
            "mkvFile",
            "mp4File"
        ]
    },
    TextCategories: {
        _enum: [
            "plain",
            "json"
        ]
    },
    BinaryCategories: {
        _enum: [
            "wasmProgram",
            "wasmReactor",
            "blendFile",
        ]
    },
    ShardsScriptInfo: {
        format: "ShardsFormat",
        requiring: "Vec<ShardsTrait>",
        implementing: "Vec<ShardsTrait>"
    },
    ShardsTrait: "Vec<u16>",
    ShardsFormat: {
        _enum: [
            "edn",
            "binary",
        ]
    },
};

let rpc_types = {
    GetProtosParams: {
        desc: 'bool',
        from: 'u32',
        limit: 'u32',
        metadata_keys: 'Vec<String>',
        owner: 'Option<AccountId>',
        return_owners: 'bool',
        categories: 'Vec<Categories>',
        tags: 'Vec<String>',
        exclude_tags: 'Vec<String>',
        available: 'Option<bool>',
    },

    GetGenealogyParams: {
        proto_hash: "String",
        get_ancestors: "bool",
    },
}

let trait = {
    VariableType: {
        _enum: [
            "None",
            "Any",
            "Bool",
            "Int",
            "Color",
            "Bytes",
            "String",
            "Image",
            "Audio",
        ]
    },
    VariableTypeInfo: {
        type_: "VariableType",
        default: "Option<Vec<u8>>",
    },
    RecordInfo: {
        _enum: {
            SingleType: "VariableTypeInfo",
            MultipleTypes: "Vec<VariableTypeInfo>",
        }
    },
    Trait: {
        name: "String",
        record: "Vec<(String, RecordInfo)>",
    }

}

let useless = {
    LinkSource: {
        _enum: {
            "Evm": "(ecdsa::Signature, u64, U256)",
        }
    },

    LinkedAsset: {
        _enum: {
            "Erc721": "(H160, U256, LinkSource)",
        }
    },

    ProtoOwner: {
        _enum: {
            "User": "AccountId",
            "ExternalAsset": "LinkedAsset",
        }
    },

    ProtoPatch: {
        block: "BlockNumber",
        data_hash: "Hash256",
        references: "Vec<Hash256>"
    },

    AccountsInfo: {
        active_accounts: "u128",
        lifetime_accounts: "u128",
    },

    UsageLicense: {
        _enum: {
            "Closed": null,
            "Open": null,
            "Tickets": "Compact<u64>",
            "Contract": "AccountId",
        }
    },

    Proto: {
        block: "BlockNumber",
        patches: "Vec<ProtoPatch<BlockNumber>>",
        license: "UsageLicense<AccountId>",
        creator: "AccountId",
        owner: "ProtoOwner<AccountId>",
        references: "Vec<Hash256>",
        category: "Categories",
        tags: "Vec<Compact<u64>>",
        metadata: "BTreeMap<Compact<u64>, Hash256>",
        account_info: "AccountsInfo",
    },

    BlockHash: "Hash",
    Hash128: "[u8; 16]",
    Hash256: "[u8; 32]",
}

export default {
    types: {
        ...categories,
        ...rpc_types,
        ...trait,
        ...useless,
    }
}