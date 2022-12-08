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
import { ProtosCategories } from "@polkadot/types/lookup";
import { GetGenealogyParams, GetProtosParams } from './interfaces/protos';
import { GetDefinitionsParams, GetInstanceOwnerParams, GetInstancesParams } from './interfaces/fragments';
import { u16, Vec } from '@polkadot/types-codec';


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
 * @typeParam desc - "desc" determines the order of Protos returned, set "desc" true to return in desc order, and false to return in ascending order.
 * @typeParam {number} fromIndex - We're returning the protos dynamically to avoid loading huge amounts of data at once and cause bad user experience and performance issues. "fromIndex" is the starting index of the protos data set you want to return.
 * 
 */
export type getProtosFuncParams = {
    desc: boolean, 
    fromIndex: number, 
    limit: number, 
    metadatKeys: Array<string>, 
    categories: Array<availableCategories>, 
    available: boolean|null, 
    tags: Array<string>, 
    returnOwers: boolean, 
    owner: string|null, 
    excludeTags: Array<string>
}

export type ProtoHash = string | Uint8Array | null;


export type protoUploadFuncParams = {
    references: Array<ProtoHash>, 
    // references: Array<string>, 
    category: availableCategories, 
    tags: Array<string>,
    linkedAssets: string|null, 
    license: "Closed" | "Open" | {"Tickets": number}, 
    data: string 
}

export type protoSetMetadataFuncParams = {
    protoHash: string, 
    data: string | Uint8Array
}

export type getProtosGenealogyFuncParams = {
    getAncestor: boolean, 
    protoHash: string
}

export type fragmentsGetDefinitionsFuncParams = {
    desc: boolean, 
    fromIndex: number, 
    limit: number, 
    returnOwners?: boolean
}

export type fragmentsGetInstancesFuncParams = {
    desc: boolean, 
    fromIndex: number, 
    limit: number,
    definitionHash: string | Uint8Array
}

export type fragmentsGetInstanceOwnerFuncParams = {
    definitionHash: string | Uint8Array, 
    editionId: number, 
    copyId: number
}

/**
 * 
 * @param protoUploadParams
 * 
 * @example Upload a proto with no reference, category text: plain, tags
 * 
 * let paramProtoUpload: protoUploadFuncParams = {
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
export async function protoUpload(protoUploadParams: protoUploadFuncParams): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        rpc: protoType['rpc'],
        types: {
            ...types,
            ...protoType['types'],
        }
    });

    let protoCategory: ProtosCategories = api.registry.createType('ProtosCategories', protoUploadParams.category);
    // let protoCategory: ProtosCategories = api.registry.createType('ProtosCategories', {text: "plain"});
    // let shouldFail: ProtosCategories = api.registry.createType('ProtosCategories', {text: "IEUDNFEWJNVK"});

    const keyring = new Keyring({type: 'sr25519'});
    keyring.setSS58Format(93);
    const alice = keyring.addFromUri('//Alice');

    try {
        const txHash = await api.tx.protos.upload(
            protoUploadParams.references, protoCategory, protoUploadParams.tags, protoUploadParams.linkedAssets, protoUploadParams.license, protoUploadParams.data
        ).signAndSend(alice);
        console.log('sent with transaction hash', txHash.toHex()); 
    } catch(e){
        console.log('Error: ' + e);
    }
}

/**
 *
 * @param protoSetMetadataParams 
 * 
 * @example Set metadata parameter
 * let protoSetMetadataParams: protoSetMetadataFuncParams = {
 *      protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
 *      data: 'test title 01'
 *  }
 * 
 *  let protoSetMetadataRes = await protoSetMetadata(protoSetMetadataParams);
 * 
 */
export async function protoSetMetadataTitle(protoSetMetadataParams: protoSetMetadataFuncParams): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        types: {
            ...types,
        }
    });

    // @todo: get user ****
    const keyring = new Keyring({type: 'sr25519'});
    keyring.setSS58Format(93);
    const alice = keyring.addFromUri('//Alice');

    try {
        const txHash = await api.tx.protos.setMetadata(protoSetMetadataParams.protoHash, 'title', protoSetMetadataParams.data)
            .signAndSend(alice);
        console.log('sent with transaction hash', txHash.toHex());
    } catch(e){
        console.log('Error: ' + e);
    }
}

export async function protoSetMetadataDescription(protoSetMetadataParams: protoSetMetadataFuncParams): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        types: {
            ...types,
        }
    });

    // @todo: get user ****
    const keyring = new Keyring({type: 'sr25519'});
    keyring.setSS58Format(93);
    const alice = keyring.addFromUri('//Alice');

    try {
        const txHash = await api.tx.protos.setMetadata(protoSetMetadataParams.protoHash, 'json_description', protoSetMetadataParams.data)
            .signAndSend(alice);
        console.log('sent with transaction hash', txHash.toHex());
    } catch(e){
        console.log('Error: ' + e);
    }
}

export async function protoSetMetadataImage(protoSetMetadataParams: protoSetMetadataFuncParams): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        types: {
            ...types,
        }
    });

    // @todo: get user ****
    const keyring = new Keyring({type: 'sr25519'});
    keyring.setSS58Format(93);
    const alice = keyring.addFromUri('//Alice');

    try {
        const txHash = await api.tx.protos.setMetadata(protoSetMetadataParams.protoHash, 'image', protoSetMetadataParams.data)
            .signAndSend(alice);
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
 * let paramGetProtos: getProtosFuncParams = {        
 *      desc: true, 
 *      fromIndex: 0, 
 *      limit: 10, 
 *      metadatKeys: ['image', 'title', 'json_attributes'], 
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
export async function getProtos(getProtosParams: getProtosFuncParams): Promise<any> {
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
        metadata_keys: getProtosParams.metadatKeys,
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
 * let getProtosGenealogyFuncParams: getProtosGenealogyFuncParams = {
 *      getAncestor: true, 
 *      protoHash: '81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413'
 * }
 * 
 * let getProtosGenealogyRes = await getProtosGenealogy(getProtosGenealogyFuncParams);
 * 
 */
export async function getProtosGenealogy(getProtosGenealogyParams: getProtosGenealogyFuncParams): Promise<any> {
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
 * let fragmentsGetDefinitionsParams: fragmentsGetDefinitionsFuncParams = {
 *      desc: true,
 *      fromIndex: 0,
 *      limit: 10
 * }
 * 
 * let fragmentsGetDefinitionsRes = await fragmentsGetDefinitions(fragmentsGetDefinitionsParams);
 * 
 */
export async function fragmentsGetDefinitions(fragmentsGetDefinitionsParams: fragmentsGetDefinitionsFuncParams): Promise<any> {
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
 * let fragmentsGetInstancesParams: fragmentsGetInstancesFuncParams = {
 *      desc: true,
 *      fromIndex: 0,
 *      limit: 10,
 *      definitionHash: 'e69267a99be24967935972418017ea96'
 * }
 * 
 * let fragmentsGetInstancesRes = await fragmentsGetInstances(fragmentsGetInstancesParams);
 */
export async function fragmentsGetInstances(fragmentsGetInstancesParams: fragmentsGetInstancesFuncParams): Promise<any> {
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
 * let fragmentsGetInstanceOwnerParams: fragmentsGetInstanceOwnerFuncParams = {
 *      definitionHash: '0xe69267a99be24967935972418017ea96', 
 *      editionId: 1,
 *      copyId: 1
 * }
 * 
 * let fragmentsGetInstanceOwnerRes = await fragmentsGetInstanceOwner(fragmentsGetInstanceOwnerParams);
 * 
 */
export async function fragmentsGetInstanceOwner(fragmentsGetInstanceOwnerParams: fragmentsGetInstanceOwnerFuncParams): Promise<any> {
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
    let paramGetProtos: getProtosFuncParams = {
        desc: true, 
        fromIndex: 0, 
        limit: 10, 
        metadatKeys: ['image', 'title', 'json_attributes', 'description'], 
        categories: [{text: 'plain'}], 
        available: null, 
        tags: [], 
        returnOwers: true,
        owner: null, 
        excludeTags: ['NSFW']
    }
    let getProtosRes = await getProtos(paramGetProtos);
    console.log(getProtosRes);


    let paramProtoUpload: protoUploadFuncParams = {
        references: [],
        category: {text: "plain"},
        tags: ['nar_character'],
        linkedAssets: null,
        license: 'Closed',
        data: 'test data body 03'
    }
    let protoUploadRes = await protoUpload(paramProtoUpload);
    console.log(protoUploadRes);
 

    let protoSetMetadataTitleParams: protoSetMetadataFuncParams = {
        protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
        data: 'test title 01'
    }
    let protoSetMetadataTitleRes = await protoSetMetadataTitle(protoSetMetadataTitleParams);
    console.log(protoSetMetadataTitleRes);

    let protoSetMetadataDescParams: protoSetMetadataFuncParams = {
        protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
        data: 'test desc 01'
    }
    let protoSetMetadataDescRes = await protoSetMetadataDescription(protoSetMetadataDescParams);
    console.log(protoSetMetadataDescRes);

    let protoSetMetadataImageParams: protoSetMetadataFuncParams = {
        protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
        data: '0x0b000000000000007a90010089504e470d0a1a0a0000000d494844520000027e0000027a08...',
    }
    let protoSetMetadataImageRes = await protoSetMetadataImage(protoSetMetadataImageParams);
    console.log(protoSetMetadataImageRes);


    let getProtosGenealogyFuncParams: getProtosGenealogyFuncParams = {
        getAncestor: true, 
        protoHash: '81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413'
    }
    let getProtosGenealogyRes = await getProtosGenealogy(getProtosGenealogyFuncParams);
    console.log(getProtosGenealogyRes);


    let fragmentsGetDefinitionsParams: fragmentsGetDefinitionsFuncParams = {
        desc: true,
        fromIndex: 0,
        limit: 10
    }
    let fragmentsGetDefinitionsRes = await fragmentsGetDefinitions(fragmentsGetDefinitionsParams);
    console.log(fragmentsGetDefinitionsRes);

    let fragmentsGetInstancesParams: fragmentsGetInstancesFuncParams = {
        desc: true,
        fromIndex: 0,
        limit: 10,
        definitionHash: 'e69267a99be24967935972418017ea96'
    }
    let fragmentsGetInstancesRes = await fragmentsGetInstances(fragmentsGetInstancesParams);
    console.log(fragmentsGetInstancesRes);

    let fragmentsGetInstanceOwnerParams: fragmentsGetInstanceOwnerFuncParams = {
        definitionHash: '0xe69267a99be24967935972418017ea96', 
        editionId: 1,
        copyId: 1
    }
    let fragmentsGetInstanceOwnerRes = await fragmentsGetInstanceOwner(fragmentsGetInstanceOwnerParams );
    console.log(fragmentsGetInstanceOwnerRes);
}


main();