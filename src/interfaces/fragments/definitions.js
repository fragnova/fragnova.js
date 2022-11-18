export default {
    types: {
        GetDefinitionsParams: {
            desc: "bool",
            from: "u64",
            limit: "u64",
            metadata_keys: "Vec<String>",
            owner: "Option<AccountId>",
            return_owners: "bool",
        },
        GetInstancesParams: {
            desc: "bool",
            from: "u64",
            limit: "u64",
            definition_hash: "String",
            metadata_keys: "Vec<String>",
            owner: "Option<AccountId>",
            only_return_first_copies: "bool",
        },
        GetInstanceOwnerParams: {
            definition_hash: 'String',
            edition_id: "InstanceUnit",
            copy_id: "InstanceUnit",
        },
        FragmentMetadata: {
            name: "Vec<u8>",
            currency: "Option<AssetId>",
        },
        UniqueOptions: {
            mutable: "bool",
        },
        FragmentDefinition: {
            proto_hash: 'Hash256',
            metadata: 'FragmentMetadata<FungibleAsset>',
            permissions: 'FragmentPerms',
            unique: 'Option<UniqueOptions>',
            max_supply: 'Option<Compact<InstanceUnit>>',
            creator: 'AccountId',
            created_at: 'BlockNumber',
            custom_metadata: 'BTreeMap<Compact<u64>, Hash256>',
        },
        FragmentInstance: {
            proto_hash: 'Hash256',
            metadata: 'FragmentMetadata<FungibleAsset>',
            permissions: 'FragmentPerms',
            unique: 'Option<UniqueOptions>',
            max_supply: 'Option<Compact<InstanceUnit>>',
            creator: 'AccountId',
            created_at: 'BlockNumber',
            custom_metadata: 'BTreeMap<Compact<u64>, Hash256>',
        },
        PublishingData: {
            price: 'Compact<u128>',
            units_left: 'Option<Compact<InstanceUnit>>',
            expiration: 'Option<BlockNumber>',
            amount: 'Option<Compact<InstanceUnit>>',
        },
        FragmentBuyOption: {
            _enum: {
                Quantity: "u64",
                UniqueData: "Vec<u8>"
            }
        },
        InstanceUnit: "u64",
        FragmentPerms: "u32"
    }
};
