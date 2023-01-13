export type ProtoHash = string | Uint8Array;

export type Categories = {
    text?: 'plain' | 'json',
    trait?: any, // TODO
    shards?: 'edn' | 'binary',
    audio?: 'oggFile' | 'mp3File',
    texture?: 'pngFile' | 'jpgFile',
    vector?: 'svgFile' | 'ttfFile',
    video?: 'mkvFile' | 'mp4File',
    model?: 'gltfFile' | 'sdf' | 'physicsCollider',
    binary?: 'wasmProgram' | 'wasmReactor' | 'blendFile',
};

/**
 * ProtoUploadFuncParams Parameters
 */
export interface UploadParams {
    /**
     * "references" allows user to link proto to another created proto
     */
    references: Array<ProtoHash>;
    // references: Vec<U8aFixed>;

    /**
     * "categories" lets you set the category of proto. You can found the full category list here: https://github.com/fragcolor-xyz/clamor/blob/devel/rpc/index.js#L51 following the format {category: 'subCategory'} E.g. {audio: 'oggFile'}.
     */
    category: Categories;

    /**
     * "tags" lets you set tag of proto, E.g. ['TNT', '3d-model']
     */
    tags: ( string | Uint8Array)[];

    /**
     * Optional parameter "linkedAssets"
     */
    linkedAssets: any; // TODO

    license: any; // TODO

    /**
     * The data of the proto as string.
     */
    data: string | Uint8Array;
}

type SupportedChains = "EthereumMainnet" | "EthereumRinkeby" | "EthereumGoerli";

export interface DetachParams {
    protoHashes: Array<ProtoHash>,
    targetChain: SupportedChains,
    targetAccount: Uint8Array | `0x${string}`
}

/**
 * SetMetadataParams Parameters
 */
export interface SetMetadataParams {
    /**
     * "protoHash" is the hash of the proto to set the metadata.
     */
    protoHash: string;

    /**
     * The value of the metadata.
     */
    data: string | Uint8Array;
}

// Las RPCs de Fragnova:

/**
 * GetProtosParams Parameters
 */
export interface GetProtosParams {
    /**
     * "desc" determines the order of Protos returned, set "desc" true to return in desc order, and false to return in ascending order.
     */
    desc: boolean;

    /**
     * We're returning the protos dynamically to avoid loading huge amounts of data at once and cause bad user experience and performance issues. "fromIndex" is the starting index of the protos data set you want to return.
     */
    from: number;

    /**
     * "limit" is the size of the data set you want to return.
     */
    limit: number;

    /**
     * "metadataKeys" is the list of metadata you want to return. E.g. If you want to return all metadata, set "metadataKeys" to ['image', 'title', 'json_attributes', 'description'], if you want to return only the image and title, set "metadataKeys" to ['image', 'title'].
     */
    metadataKeys: Array<string>;

    /**
     * "categories" lets you return protos of given categories, you can found the full category list here: https://github.com/fragcolor-xyz/clamor/blob/devel/rpc/index.js#L51 following the format [{category: 'subCategory'}] E.g. [{audio: 'oggFile'}, {audio: 'mp3File'}, {texture: 'pngFile'}, {texture: 'jpgFile'}]
     */
    categories: Array<Categories>;

    /**
     * "available" is an optional parameter, it lets you filter protos by availability. Set true to only return the protos that are available.
     */
    available: boolean|null;

    /**
     * "tags" lets you return protos of given tags, E.g. ['TNT', '3d-model']
     */
    tags: Array<string>;

    /**
     * "returnOwner" lets you return the owner when set to true.
     */
    returnOwners: boolean;

    /**
     * "owner" is an optional parameter, it will return the protos associated with the given owner.
     */
    owner: string | null;

    /**
     * "excludeTags" allows user to return protos excluding certain tags, E.g. ['NSFW'] will return protos without the tag 'NSFW'. If there is no tag you want to exclude, set to [].
     */
    excludeTags: Array<string>;
}

/**
 * GetProtosGenealogyFuncParams Parameters
 */
export interface GetGenealogyParams {
    /**
     * Hash of the proto you want to retrieve.
     */
    protoHash: string;

    /**
     * Set "getAncestor" true to get the proto ancestors, set to false to get the proto descendants.
     */
    getAncestors: boolean;
}