// We need to import the augmented definitions "somewhere" in our project, however since we have
// it in tsconfig as an override and the api/types has imports, it is not strictly required here.
// Because of the tsconfig override, we could import from '@polkadot/{api, types}/augment'
import './interfaces/augment-api';
import './interfaces/augment-types';
// import '@polkadot/api/augment';
// import '@polkadot/types/augment';
import protoType from '@fragcolor/protos';

// all type stuff, the only one we are using here
// import {AccountsInfo} from "sample-polkadotjs-typegen/interfaces/protos";

// external imports
import { ApiPromise, Keyring } from '@polkadot/api';

// our local stuff
import * as definitions from './interfaces/definitions';
import { ProtosCategories, PalletProtosLinkedAsset, PalletProtosUsageLicense } from "@polkadot/types/lookup";
import { GetGenealogyParams, GetProtosParams } from './interfaces/protos';
import { GetDefinitionsParams, GetInstanceOwnerParams, GetInstancesParams } from './interfaces/fragments';
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
 * GetProtosFuncParams Parameters
 */
export interface GetProtosFuncParams {
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
 * ProtoUploadFuncParams Parameters
 */
 export interface ProtoUploadFuncParams {
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
 * ProtoSetMetadataFuncParams Parameters
 */
export interface ProtoSetMetadataFuncParams {
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
 * GetProtosGenealogyFuncParams Parameters
 */
export interface GetProtosGenealogyFuncParams {
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
 * FragmentsGetDefinitionsFuncParams Parameters
 */
export interface FragmentsGetDefinitionsFuncParams {
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
 * FragmentsGetInstancesFuncParams Parameters
 */
export interface FragmentsGetInstancesFuncParams {
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
 * FragmentsGetInstanceOwnerFuncParams Parameters
 */
export interface FragmentsGetInstanceOwnerFuncParams {
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

/**
 * 
 * protoUpload is used to upload a proto
 * 
 * @param protoUploadParams
 * 
 * @example Upload a proto with no reference, category text: plain, tags
 * 
 * let paramProtoUpload: ProtoUploadFuncParams = {
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
export async function protoUpload(protoUploadParams: ProtoUploadFuncParams, user: AddressOrPair): Promise<any> {
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
 * 
 * @param protoUploadParams
 * 
 * @example Upload a proto with no reference, category text: plain, tags
 * 
 * let paramProtoUpload: ProtoUploadFuncParams = {
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
 export async function protoUploadTrait(protoUploadParams: ProtoUploadFuncParams, user: AddressOrPair): Promise<any> {
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
 * @param protoUploadParams
 * 
 * @example Upload a proto with no reference, category text: plain, tags
 * 
 * let paramProtoUpload: ProtoUploadFuncParams = {
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
 export async function protoUploadImage(protoUploadParams: ProtoUploadFuncParams, user: AddressOrPair): Promise<any> {
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
 * @param protoSetMetadataParams 
 * 
 * @example Set metadata parameter
 * let protoSetMetadataParams: ProtoSetMetadataFuncParams = {
 *      protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
 *      data: 'test title 01'
 *  }
 * 
 *  let protoSetMetadataRes = await protoSetMetadata(protoSetMetadataParams);
 * 
 */
export async function protoSetMetadataTitle(protoSetMetadataParams: ProtoSetMetadataFuncParams, user: AddressOrPair): Promise<any> {
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

export async function protoSetMetadataDescription(protoSetMetadataParams: ProtoSetMetadataFuncParams, user: AddressOrPair): Promise<any> {
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

export async function protoSetMetadataImage(protoSetMetadataParams: ProtoSetMetadataFuncParams, user: AddressOrPair): Promise<any> {
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

// specify the type for category and tags
/**
 * 
 * @param getProtosParams 
 * @returns 
 * 
 * @example Get protos example
 * let paramGetProtos: GetProtosFuncParams = {        
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
export async function getProtos(getProtosParams: GetProtosFuncParams): Promise<any> {
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
        // console.log('listOfProtosObj');
        // console.log(listOfProtosObj);
        // console.log('sent with transaction hash', txHash.toHex());

        return listOfProtosObj;
    } catch(e){
        // console.log('Error: ' + e);
        return Error('Error:' + e);
    }
}

/**
 * 
 * @param getProtosGenealogyParams 
 * @returns 
 * 
 * @example Get Proto Genealogy
 * let getProtosGenealogyFuncParams: GetProtosGenealogyFuncParams = {
 *      getAncestor: true, 
 *      protoHash: '81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413'
 * }
 * 
 * let getProtosGenealogyRes = await getProtosGenealogy(getProtosGenealogyFuncParams);
 * 
 */
export async function getProtosGenealogy(getProtosGenealogyParams: GetProtosGenealogyFuncParams): Promise<any> {
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
        // console.log('Get genealogy');
        // console.log(listOfProtosObj);
        // console.log('sent with transaction hash', txHash.toHex());

        return listOfProtosObj;
    } catch(e){
        console.log('Error: ' + e);
        return Error('Error: ' + e);
    }
}

/**
 * 
 * @param fragmentsGetDefinitionsParams 
 * @returns 
 * 
 * @example 
 * 
 * let fragmentsGetDefinitionsParams: FragmentsGetDefinitionsFuncParams = {
 *      desc: true,
 *      fromIndex: 0,
 *      limit: 10
 * }
 * 
 * let fragmentsGetDefinitionsRes = await fragmentsGetDefinitions(fragmentsGetDefinitionsParams);
 * 
 */
export async function fragmentsGetDefinitions(fragmentsGetDefinitionsParams: FragmentsGetDefinitionsFuncParams): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        rpc: protoType['rpc'],
        types: {
            ...types,
            ...protoType['types'],
        }
    });

    const params: GetDefinitionsParams = api.registry.createType("GetDefinitionsParams", {
        desc: fragmentsGetDefinitionsParams.desc, from: fragmentsGetDefinitionsParams.fromIndex, limit: fragmentsGetDefinitionsParams.limit, return_owners: fragmentsGetDefinitionsParams.returnOwners
    });

    try {
        const result = await api.rpc.fragments.getDefinitions(params);
        
        const obj = JSON.parse(result.toHuman());

        console.log(obj);
        console.log('sent with transaction hash', result.toHex());

        return obj;
    } catch(e){
        console.log('Error: ' + e);
        return Error('Error: ' + e);
    }
}

/**
 * 
 * @param fragmentsGetInstancesParams 
 * @returns 
 * 
 * @example fragmentsGetInstances
 * let fragmentsGetInstancesParams: FragmentsGetInstancesFuncParams = {
 *      desc: true,
 *      fromIndex: 0,
 *      limit: 10,
 *      definitionHash: 'e69267a99be24967935972418017ea96'
 * }
 * 
 * let fragmentsGetInstancesRes = await fragmentsGetInstances(fragmentsGetInstancesParams);
 */
export async function fragmentsGetInstances(fragmentsGetInstancesParams: FragmentsGetInstancesFuncParams): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        rpc: protoType['rpc'],
        types: {
            ...types,
            ...protoType['types'],
        }
    });

    const params: GetInstancesParams = api.registry.createType("GetInstancesParams", {
        desc: fragmentsGetInstancesParams.desc, from: fragmentsGetInstancesParams.fromIndex, limit: fragmentsGetInstancesParams.limit, definition_hash: fragmentsGetInstancesParams.definitionHash
    });

    try {
        const result = await api.rpc.fragments.getInstances(params);
        const obj = JSON.parse(result.toHuman());
        // console.log(obj);
        // console.log('sent with transaction hash', result.toHex());

        return obj;
    } catch(e){
        // console.log('Error: ' + e);
        return Error('Error: ' + e);
    }
}

/**
 * 
 * @param fragmentsGetInstanceOwnerParams 
 * 
 * @example fragmentsGetInstanceOwner
 * let fragmentsGetInstanceOwnerParams: FragmentsGetInstanceOwnerFuncParams = {
 *      definitionHash: '0xe69267a99be24967935972418017ea96', 
 *      editionId: 1,
 *      copyId: 1
 * }
 * 
 * let fragmentsGetInstanceOwnerRes = await fragmentsGetInstanceOwner(fragmentsGetInstanceOwnerParams);
 * 
 */
export async function fragmentsGetInstanceOwner(fragmentsGetInstanceOwnerParams: FragmentsGetInstanceOwnerFuncParams): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        rpc: protoType['rpc'],
        types: {
            ...types,
            ...protoType['types'],
        }
    });

    const params: GetInstanceOwnerParams = api.registry.createType("GetInstanceOwnerParams", {
        definition_hash: fragmentsGetInstanceOwnerParams.definitionHash, edition_id: fragmentsGetInstanceOwnerParams.editionId, copy_id: fragmentsGetInstanceOwnerParams.copyId
    });

    try {
        const result = await api.rpc.fragments.getInstanceOwner(params);
        const obj = JSON.parse(result.toHuman());

        console.log(obj);
        console.log('sent with transaction hash', result.toHex());
    } catch(e){
        console.log('Error: ' + e);
    }
}



async function main() {
    let paramGetProtos: GetProtosFuncParams = {
        desc: true, 
        fromIndex: 0, 
        limit: 10, 
        metadataKeys: ['image', 'title', 'json_attributes', 'description'], 
        categories: [{text: 'plain'}], 
        available: null, 
        tags: [], 
        returnOwers: true,
        owner: null, 
        excludeTags: ['NSFW']
    }
    let getProtosRes = await getProtos(paramGetProtos);
    console.log(getProtosRes);


    const keyring = new Keyring({type: 'sr25519'});
    keyring.setSS58Format(93);
    const alice = keyring.addFromUri('//Alice');

    let paramProtoUpload: ProtoUploadFuncParams = {
        references: [],
        category: {text: "plain"},
        tags: ['nar_character'],
        linkedAssets: null,
        license: 'Closed',
        data: 'test data body 04'
    }
    let protoUploadRes = await protoUpload(paramProtoUpload, alice);
    console.log(protoUploadRes);
 

    let protoSetMetadataTitleParams: ProtoSetMetadataFuncParams = {
        protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
        data: 'test title 01'
    }
    let protoSetMetadataTitleRes = await protoSetMetadataTitle(protoSetMetadataTitleParams, alice);
    console.log(protoSetMetadataTitleRes);

    let protoSetMetadataDescParams: ProtoSetMetadataFuncParams = {
        protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
        data: 'test desc 01'
    }
    let protoSetMetadataDescRes = await protoSetMetadataDescription(protoSetMetadataDescParams, alice);
    console.log(protoSetMetadataDescRes);

    let protoSetMetadataImageParams: ProtoSetMetadataFuncParams = {
        protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
        data: '0x0b000000000000007a90010089504e470d0a1a0a0000000d494844520000027e0000027a08...',
    }
    let protoSetMetadataImageRes = await protoSetMetadataImage(protoSetMetadataImageParams, alice);
    console.log(protoSetMetadataImageRes);


    let getProtosGenealogyFuncParams: GetProtosGenealogyFuncParams = {
        getAncestor: true, 
        protoHash: '81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413'
    }
    let getProtosGenealogyRes = await getProtosGenealogy(getProtosGenealogyFuncParams);
    console.log(getProtosGenealogyRes);


    // let fragmentsGetDefinitionsParams: FragmentsGetDefinitionsFuncParams = {
    //     desc: true,
    //     fromIndex: 0,
    //     limit: 10
    // }
    // let fragmentsGetDefinitionsRes = await fragmentsGetDefinitions(fragmentsGetDefinitionsParams);
    // console.log(fragmentsGetDefinitionsRes);

    // let fragmentsGetInstancesParams: fragmentsGetInstancesFuncParams = {
    //     desc: true,
    //     fromIndex: 0,
    //     limit: 10,
    //     definitionHash: 'e69267a99be24967935972418017ea96'
    // }
    // let fragmentsGetInstancesRes = await fragmentsGetInstances(fragmentsGetInstancesParams);
    // console.log(fragmentsGetInstancesRes);

    // let fragmentsGetInstanceOwnerParams: fragmentsGetInstanceOwnerFuncParams = {
    //     definitionHash: '0xe69267a99be24967935972418017ea96', 
    //     editionId: 1,
    //     copyId: 1
    // }
    // let fragmentsGetInstanceOwnerRes = await fragmentsGetInstanceOwner(fragmentsGetInstanceOwnerParams );
    // console.log(fragmentsGetInstanceOwnerRes);
}


main();