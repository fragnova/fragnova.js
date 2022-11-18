export default {
    types: {
        ExternalID: {
            _enum: {
                "Discord": "DiscordID",
            }
        },
        DiscordID: "u64",
        EthLock: {
            amount: "Balance",
            block_number: "BlockNumber"
        },
        AccountInfo: {
            account_id: "AccountId",
            created_at: "Moment",
        }
    }
};
