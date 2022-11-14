export default {
    types: {
        DetachHash: {
            _enum: {
                "Proto": "Hash256",
                "Instance": "(Hash128, Compact<InstanceUnit>, Compact<InstanceUnit>)"
            }
        },
        SupportedChains: {
            _enum: [
                'EthereumMainnet',
                'EthereumRinkeby',
                'EthereumGoerli',
            ]
        },
        DetachRequest: {
            hash: 'DetachHash',
            target_chain: 'SupportedChains',
            target_account: 'Vec<u8>',
        },
        DetachInternalData: {
            public: 'Public',
            hash: 'DetachHash',
            target_chain: 'SupportedChains',
            target_account: 'Vec<u8>',
            remote_signature: 'Vec<u8>',
            nonce: 'u64',
        },
        ExportData: {
            chain: 'SupportedChains',
            owner: 'Vec<u8>',
            nonce: 'u64',
        }
    }
}