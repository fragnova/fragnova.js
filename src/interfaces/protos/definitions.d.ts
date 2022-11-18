declare const _default: {
    types: {
        LinkSource: {
            _enum: {
                Evm: string;
            };
        };
        LinkedAsset: {
            _enum: {
                Erc721: string;
            };
        };
        ProtoOwner: {
            _enum: {
                User: string;
                ExternalAsset: string;
            };
        };
        GetProtosParams: {
            desc: string;
            from: string;
            limit: string;
            metadata_keys: string;
            owner: string;
            return_owners: string;
            categories: string;
            tags: string;
            exclude_tags: string;
            available: string;
        };
        GetGenealogyParams: {
            proto_hash: string;
            get_ancestors: string;
        };
        ProtoPatch: {
            block: string;
            data_hash: string;
            references: string;
        };
        AccountsInfo: {
            active_accounts: string;
            lifetime_accounts: string;
        };
        UsageLicense: {
            _enum: {
                Closed: null;
                Open: null;
                Tickets: string;
                Contract: string;
            };
        };
        Proto: {
            block: string;
            patches: string;
            license: string;
            creator: string;
            owner: string;
            references: string;
            category: string;
            tags: string;
            metadata: string;
            account_info: string;
        };
        Categories: {
            _enum: {
                text: string;
                trait: string;
                shards: string;
                audio: string;
                texture: string;
                vector: string;
                video: string;
                model: string;
                binary: string;
            };
        };
        AudioCategories: {
            _enum: string[];
        };
        ModelCategories: {
            _enum: string[];
        };
        TextureCategories: {
            _enum: string[];
        };
        VectorCategories: {
            _enum: string[];
        };
        VideoCategories: {
            _enum: string[];
        };
        TextCategories: {
            _enum: string[];
        };
        BinaryCategories: {
            _enum: string[];
        };
        ShardsScriptInfo: {
            format: string;
            requiring: string;
            implementing: string;
        };
        ShardsTrait: string;
        ShardsFormat: {
            _enum: string[];
        };
        BlockHash: string;
        Hash128: string;
        Hash256: string;
    };
};
export default _default;
