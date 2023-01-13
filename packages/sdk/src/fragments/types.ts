import {ProtoHash} from "@fragnova/sdk/protos";

export type DefinitionHash = string | Uint8Array;
export type FragmentBuyOptions = {Quantity: number} | {UniqueData: string | Uint8Array}

export interface CreateParams {
    protoHash: ProtoHash;
    metadata: {name: string, currency: "Native" | {Custom: number}};
    permissions: Uint8Array, // TODO - Review
    unique: null | {mutable: boolean};
    maxSupply: null | number
}

export interface MintParams {
    definitionHash: DefinitionHash;
    options: FragmentBuyOptions;
    stackAmount: null | number,
}

type SupportedChains = "EthereumMainnet" | "EthereumRinkeby" | "EthereumGoerli";

export interface DetachParams {
    definitionHash: DefinitionHash,
    editionIds: Array<number>,
    targetChain: SupportedChains,
    targetAccount: Uint8Array | `0x${string}`
}

/**
 * GetDefinitionsParams Parameters
 */
export interface GetDefinitionsParams {
    /**
     * "desc" determines the order of fragment definitions returned, set "desc" true to return in desc order, and false to return in ascending order.
     */
    desc: boolean;

    /**
     * We're returning the protos dynamically to avoid loading huge amounts of data at once and cause bad user experience and performance issues. "fromIndex" is the starting index of the data set you want to return.
     */
    fromIndex: number;

    /**
     * "limit" is the size of the data set you want to return.
     */
    limit: number;

    /**
     * "returnOwner" lets you return the owner when set to true.
     */
    returnOwners?: boolean;
}

/**
 * GetInstancesParams Parameters
 */
export interface GetInstancesParams {
    /**
     * "desc" determines the order of fragment instances returned, set "desc" true to return in desc order, and false to return in ascending order.
     */
    desc: boolean;

    /**
     * We're returning the fragment instances dynamically to avoid loading huge amounts of data at once and cause bad user experience and performance issues. "fromIndex" is the starting index of the data set you want to return.
     */
    fromIndex: number;

    /**
     * "limit" is the size of the data set you want to return.
     */
    limit: number;

    /**
     * Hash of the definition that you want to get instances from.
     */
    definitionHash: string | Uint8Array;
}

/**
 * GetInstanceOwnerParams Parameters
 */
export interface GetInstanceOwnerParams {
    /**
     * Hash of the definition that you want to get instances from.
     */
    definitionHash: string | Uint8Array;

    /**
     * The edition ID of the fragment instance.
     */
    editionId: number;

    /**
     * The copy ID of the fragment instance.
     */
    copyId: number;
}
