// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

export * from './types';

// We need to import the augmented definitions "somewhere" in our project, however since we have
// it in tsconfig as an override and the api/types has imports, it is not strictly required here.
// Because of the tsconfig override, we could import from '@polkadot/{api, types}/augment'
import '../augment-api';
import '../augment-types';
import protoType from '@fragcolor/protos';

// external imports
import { ApiPromise } from '@polkadot/api';

// our local stuff
import * as definitions from './definitions';
import { ProtosCategories, PalletProtosLinkedAsset, PalletProtosUsageLicense } from "@polkadot/types/lookup";
import { GetGenealogyParams, GetProtosParams } from './types';
import { u16, Vec, Bytes, Option } from '@polkadot/types-codec';
import { AddressOrPair } from '@polkadot/api/types';


export type availableCategories = {
    text?: 'plain' | 'json',
    trait?: Vec<u16>, // or should this be Array<number>??
    shards?: 'edn' | 'binary',
    audio?: 'oggFile' | 'mp3File',
    texture?: 'pngFile' | 'jpgFile',
    vector?: 'svgFile' | 'ttfFile',
    video?: 'mkvFile' | 'mp4File',
    model?: 'gltfFile' | 'sdf' | 'physicsCollider',
    binary?: 'wasmProgram' | 'wasmReactor' | 'blendFile',
};

/**
 * getProtosParams Parameters
 */
export interface getProtosParams {
    /**
     * "desc" determines the order of Protos returned, set "desc" true to return in desc order, and false to return in ascending order.
     */
    desc: boolean;

    /**
     * We're returning the protos dynamically to avoid loading huge amounts of data at once and cause bad user experience and performance issues. "fromIndex" is the starting index of the protos data set you want to return.
     */
    fromIndex: number;

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
    categories: Array<availableCategories>;

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
    returnOwers: boolean; 

    /**
     * "owner" is an optional parameter, it will return the protos associated with the given owner. 
     */
    owner: string|null;

    /**
     * "excludeTags" allows user to return protos excluding certain tags, E.g. ['NSFW'] will return protos without the tag 'NSFW'. If there is no tag you want to exclude, set to [].
     */
    excludeTags: Array<string>;
}

export type ProtoHash = string | Uint8Array | null;

/**
 * protoUploadParams Parameters
 */
 export interface protoUploadParams {
    /**
     * "references" allows user to link proto to another created proto
     */
    references: Array<ProtoHash>;
    // references: Vec<U8aFixed>;

    /**
     * "categories" lets you set the category of proto. You can found the full category list here: https://github.com/fragcolor-xyz/clamor/blob/devel/rpc/index.js#L51 following the format {category: 'subCategory'} E.g. {audio: 'oggFile'}.
     */
    category: availableCategories;

    /**
     * "tags" lets you set tag of proto, E.g. ['TNT', '3d-model']
     */
    tags: Vec<Bytes> | (Bytes | string | Uint8Array)[];

    /**
     * Optional parameter "linkedAssets" 
     */
    linkedAssets: Option<PalletProtosLinkedAsset> | null | Uint8Array | PalletProtosLinkedAsset | { Erc721: any } | string;

    license: PalletProtosUsageLicense | { Closed: any } | { Open: any } | { Tickets: any } | { Contract: any } | string | Uint8Array;

    /**
     * The data of the proto as string.
     */
    data: Bytes | string | Uint8Array;
}

/**
 * protoSetMetadataParams Parameters
 */
export interface protoSetMetadataParams {
    /**
     * "protoHash" is the hash of the proto to set the metadata.
     */
    protoHash: string;

    /**
     * The value of the metadata.
     */
    data: string | Uint8Array;
}

/**
 * getProtosGenealogyParams Parameters
 */
export interface getProtosGenealogyParams {
    /**
     * Set "getAncestor" true to get the proto ancestors, set to false to get the proto descendants. 
     */
    getAncestor: boolean;

    /**
     * Hash of the proto you want to retrieve. 
     */
    protoHash: string;
}


/**
 * 
 * **Upload** a **Proto** onto the **Blockchain**.
 * 
 * @param protoUploadParams
 * 
 * @example // Upload a proto with no reference, category text: plain, tags
 * 
 * let paramProtoUpload: protoUploadParams = {
 *      references: [],
 *      category: {text: "plain"},
 *      tags: ['nar_character'],
 *      linkedAssets: null,
 *      license: 'Closed',
 *      data: 'test data'
 * };
 *  
 * let protoUploadRes = await protoUpload(paramProtoUpload);
 *  
 */
export async function upload(protoUploadParams: protoUploadParams, user: AddressOrPair): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        rpc: protoType['rpc'],
        types: {
            ...types,
            ...protoType['types'],
        }
    });

    try {
        let protoCategory: ProtosCategories = api.registry.createType('ProtosCategories', protoUploadParams.category);

        const txHash = await api.tx.protos.upload(
            protoUploadParams.references, protoCategory, protoUploadParams.tags, protoUploadParams.linkedAssets, protoUploadParams.license, protoUploadParams.data
        ).signAndSend(user);
        console.log('sent with transaction hash', txHash.toHex()); 
        // return 'sent with transaction hash ' + txHash.toHex();
    } catch(e){
        console.log('Error: ' + e);
        return 'Error: ' + e;
    }
}

/**
 * 
 * **Upload** a **Proto** onto the **Blockchain**.
 * 
 * @param protoUploadParams
 * 
 * @example // Upload a proto with no reference, category text: plain, tags
 * 
 * let paramProtoUpload: protoUploadParams = {
 *      references: [],
 *      category: {text: "plain"},
 *      tags: ['nar_character'],
 *      linkedAssets: null,
 *      license: 'Closed',
 *      data: 'test data'
 * };
 *  
 * let protoUploadRes = await protoUpload(paramProtoUpload);
 *  
 */
 export async function uploadTrait(protoUploadParams: protoUploadParams, user: AddressOrPair): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        rpc: protoType['rpc'],
        types: {
            ...types,
            ...protoType['types'],
        }
    });


    try {
        let protoCategory: ProtosCategories = api.registry.createType('ProtosCategories', protoUploadParams.category);

        const txHash = await api.tx.protos.upload(
            protoUploadParams.references, protoCategory, protoUploadParams.tags, protoUploadParams.linkedAssets, protoUploadParams.license, protoUploadParams.data
        ).signAndSend(user);
        console.log('sent with transaction hash', txHash.toHex()); 
    } catch(e){
        console.log('Error: ' + e);
    }
}



/**
 * 
 * **Upload** a **Proto** onto the **Blockchain**.
 * 
 * @param protoUploadParams
 * 
 * @example // Upload a proto with no reference, category text: plain, tags
 * 
 * let paramProtoUpload: protoUploadParams = {
 *      references: [],
 *      category: {text: "plain"},
 *      tags: ['nar_character'],
 *      linkedAssets: null,
 *      license: 'Closed',
 *      data: 'test data'
 * };
 *  
 * let protoUploadRes = await protoUpload(paramProtoUpload);
 *  
 */
 export async function uploadImage(protoUploadParams: protoUploadParams, user: AddressOrPair): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        rpc: protoType['rpc'],
        types: {
            ...types,
            ...protoType['types'],
        }
    });


    try {
        let protoCategory: ProtosCategories = api.registry.createType('ProtosCategories', protoUploadParams.category);

        const txHash = await api.tx.protos.upload(
            protoUploadParams.references, protoCategory, protoUploadParams.tags, protoUploadParams.linkedAssets, protoUploadParams.license, protoUploadParams.data
        ).signAndSend(user);
        console.log('sent with transaction hash', txHash.toHex()); 
    } catch(e) {
        console.log('Error: ' + e);
    }
}



/**
 *
 * Set the metadata `title` for a specific Proto.
 * 
 * @param protoSetMetadataParams 
 * 
 * @example // Set metadata title
 * let protoSetMetadataParams: protoSetMetadataParams = {
 *      protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
 *      data: 'test title 01'
 *  }
 * 
 *  let protoSetMetadataRes = await protoSetMetadata(protoSetMetadataParams);
 * 
 */
export async function setMetadataTitle(protoSetMetadataParams: protoSetMetadataParams, user: AddressOrPair): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        types: {
            ...types,
        }
    });

    try {
        const txHash = await api.tx.protos.setMetadata(protoSetMetadataParams.protoHash, 'title', protoSetMetadataParams.data)
            .signAndSend(user);
        console.log('sent with transaction hash', txHash.toHex());
    } catch(e){
        console.log('Error: ' + e);
    }
}

/**
 * 
 * Set the metadata `title` for a specific Proto.
 * 
 * @param protoSetMetadataParams 
 * @param user 
 * 
 * @example // Set metadata description 
 * let protoSetMetadataParams: protoSetMetadataFuncParams = {
 *      protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
 *      data: 'test description 01'
 * }
 * let protoSetMetadataRes = await protoSetMetadataDescription(protoSetMetadataParams);
 * 
 */
export async function setMetadataDescription(protoSetMetadataParams: protoSetMetadataParams, user: AddressOrPair): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        types: {
            ...types,
        }
    });

    try {
        const txHash = await api.tx.protos.setMetadata(protoSetMetadataParams.protoHash, 'json_description', protoSetMetadataParams.data)
            .signAndSend(user);
        console.log('sent with transaction hash', txHash.toHex());
    } catch(e){
        console.log('Error: ' + e);
    }
}

/**
 * 
 * Set the metadata `image` for a specific Proto.
 * 
 * @param protoSetMetadataParams 
 * @param user 
 * 
 * @example // Set metadata image 
 * let protoSetMetadataParams: protoSetMetadataFuncParams = {
 *      protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
 *      data: '0x0b000000000000007a90010089504e470d0a1a0a0000000d494844520000027e0000027a08'
 * }
 * let protoSetMetadataRes = await protoSetMetadataDescription(protoSetMetadataParams); 
 * 
 */
export async function setMetadataImage(protoSetMetadataParams: protoSetMetadataParams, user: AddressOrPair): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        types: {
            ...types,
        }
    });

    try {
        const txHash = await api.tx.protos.setMetadata(protoSetMetadataParams.protoHash, 'image', protoSetMetadataParams.data)
            .signAndSend(user);
        console.log('sent with transaction hash', txHash.toHex());
    } catch(e){
        console.log('Error: ' + e);
    }
}

/**
 * 
 * Get a list of Protos based on `getProtosParams`.
 * 
 * @param getProtosParams 
 * 
 * @example // Get protos example
 * let paramGetProtos: getProtosParams = {        
 *      desc: true, 
 *      fromIndex: 0, 
 *      limit: 10, 
 *      metadataKeys: ['image', 'title', 'json_attributes'], 
 *      categories: [{text: 'plain'}], 
 *      available: null, 
 *      tags: [], 
 *      returnOwers: true,
 *      owner: null, 
 *  excludeTags: ['NSFW']
 *  }
 * 
 *  let getProtosRes = await getProtos(paramGetProtos);
 */
export async function get(getProtosParams: getProtosParams): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        rpc: protoType['rpc'],
        types: {
            ...types,
            ...protoType['types'],
        }
    });

    let protoParams: GetProtosParams = api.registry.createType('GetProtosParams', {
        desc: getProtosParams.desc,
        from: getProtosParams.fromIndex,
        limit: getProtosParams.limit,
        metadata_keys: getProtosParams.metadataKeys,
        categories: getProtosParams.categories,
        available: getProtosParams.available,
        tags: getProtosParams.tags,
        return_owners: getProtosParams.returnOwers,
        owner: getProtosParams.owner,
        exclude_tags: getProtosParams.excludeTags,
    });

    try {
        const txHash = await api.rpc.protos.getProtos(protoParams);
        let listOfProtosObj = JSON.parse(txHash.toJSON());
        console.log(listOfProtosObj);
        console.log('sent with transaction hash', txHash.toHex());

        return listOfProtosObj;
    } catch(e){
        // console.log('Error: ' + e);
        return Error('Error:' + e);
    }
}

/**
 * 
 * Return the Proto Genealogy, get the descendants and ancestors of a Proto.
 * The **return type** is a **JSON string** that represents an Adjacency List.
 * 
 * @param getProtosGenealogyParams 
 * 
 * @example // Get Proto Genealogy
 * let getProtosGenealogyFuncParams: getProtosGenealogyParams = {
 *      getAncestor: true, 
 *      protoHash: '81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413'
 * }
 * 
 * let getProtosGenealogyRes = await getProtosGenealogy(getProtosGenealogyFuncParams);
 * 
 */
export async function getGenealogy(getProtosGenealogyParams: getProtosGenealogyParams): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        rpc: protoType['rpc'],
        types: {
            ...types,
            ...protoType['types'],
        }
    });

    let protoParams: GetGenealogyParams = api.registry.createType('GetGenealogyParams', {
        get_ancestors: getProtosGenealogyParams.getAncestor,
        proto_hash: getProtosGenealogyParams.protoHash,
    });

    try {
        const txHash = await api.rpc.protos.getGenealogy(protoParams);
        let listOfProtosObj = JSON.parse(txHash.toJSON());
        console.log(listOfProtosObj);
        console.log('sent with transaction hash', txHash.toHex());

        return listOfProtosObj;
    } catch(e){
        console.log('Error: ' + e);
        return Error('Error: ' + e);
    }
}
 