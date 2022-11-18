declare const _default: {
    types: {
        GetDefinitionsParams: {
            desc: string;
            from: string;
            limit: string;
            metadata_keys: string;
            owner: string;
            return_owners: string;
        };
        GetInstancesParams: {
            desc: string;
            from: string;
            limit: string;
            definition_hash: string;
            metadata_keys: string;
            owner: string;
            only_return_first_copies: string;
        };
        GetInstanceOwnerParams: {
            definition_hash: string;
            edition_id: string;
            copy_id: string;
        };
        FragmentMetadata: {
            name: string;
            currency: string;
        };
        UniqueOptions: {
            mutable: string;
        };
        FragmentDefinition: {
            proto_hash: string;
            metadata: string;
            permissions: string;
            unique: string;
            max_supply: string;
            creator: string;
            created_at: string;
            custom_metadata: string;
        };
        FragmentInstance: {
            proto_hash: string;
            metadata: string;
            permissions: string;
            unique: string;
            max_supply: string;
            creator: string;
            created_at: string;
            custom_metadata: string;
        };
        PublishingData: {
            price: string;
            units_left: string;
            expiration: string;
            amount: string;
        };
        FragmentBuyOption: {
            _enum: {
                Quantity: string;
                UniqueData: string;
            };
        };
        InstanceUnit: string;
        FragmentPerms: string;
    };
};
export default _default;
