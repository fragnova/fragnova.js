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
        ExportData: {
            chain: 'SupportedChains',
            owner: 'Vec<u8>',
            nonce: 'u64',
        }
    }
}