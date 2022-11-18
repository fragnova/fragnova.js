declare const _default: {
    types: {
        DetachHash: {
            _enum: {
                Proto: string;
                Instance: string;
            };
        };
        SupportedChains: {
            _enum: string[];
        };
        ExportData: {
            chain: string;
            owner: string;
            nonce: string;
        };
    };
};
export default _default;
