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
import { GetDefinitionsParams, GetInstanceOwnerParams, GetInstancesParams } from '.././fragments';
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
 * fragmentsGetDefinitionsParams Parameters
 */
export interface fragmentsGetDefinitionsParams {
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
 * fragmentsGetInstancesParams Parameters
 */
export interface fragmentsGetInstancesParams {
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
 * fragmentsGetInstanceOwnerParams Parameters
 */
export interface fragmentsGetInstanceOwnerParams {
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
 * **Query** and **Return** **Fragment Definition(s)** based on **`fragmentsGetDefinitionsParams`**
 * 
 * @param fragmentsGetDefinitionsParams 
 * 
 * @example // Query and Return Fragment Definition(s) based on `fragmentsGetDefinitionsParams`" 
 * 
 * let fragmentsGetDefinitionsParams: fragmentsGetDefinitionsParams = {
 *      desc: true,
 *      fromIndex: 0,
 *      limit: 10
 * }
 * 
 * let fragmentsGetDefinitionsRes = await fragmentsGetDefinitions(fragmentsGetDefinitionsParams);
 * 
 */
export async function getDefinitions(fragmentsGetDefinitionsParams: fragmentsGetDefinitionsParams): Promise<any> {
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

        console.log('sent with transaction hash', result.toHex());

        return obj;
    } catch(e){
        return Error('Error: ' + e);
    }
}

/**
 * 
 * **Query** and **Return** **Fragment Instance(s)** based on **`fragmentsGetInstancesParams`**
 * 
 * @param fragmentsGetInstancesParams 
 * 
 * @example // Query and Return Fragment Instance(s) based on `fragmentsGetInstancesParams`" 
 * 
 * let fragmentsGetInstancesParams: fragmentsGetInstancesParams = {
 *      desc: true,
 *      fromIndex: 0,
 *      limit: 10,
 *      definitionHash: 'e69267a99be24967935972418017ea96'
 * }
 * 
 * let fragmentsGetInstancesRes = await fragmentsGetInstances(fragmentsGetInstancesParams);
 */
export async function getInstances(fragmentsGetInstancesParams: fragmentsGetInstancesParams): Promise<any> {
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
 * Query the owner of a Fragment Instance. The return type is a String
 * 
 * @param fragmentsGetInstanceOwnerParams 
 * 
 * @example // fragmentsGetInstanceOwner
 * fragmentsGetDefinitionsParams
 * 
 * let fragmentsGetInstanceOwnerParams: fragmentsGetInstanceOwnerParams = {
 *      definitionHash: '0xe69267a99be24967935972418017ea96', 
 *      editionId: 1,
 *      copyId: 1
 * }
 * 
 * let fragmentsGetInstanceOwnerRes = await fragmentsGetInstanceOwner(fragmentsGetInstanceOwnerParams);
 * 
 */
export async function getInstanceOwner(fragmentsGetInstanceOwnerParams: fragmentsGetInstanceOwnerParams): Promise<any> {
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
        return obj;
    } catch(e){
        console.log('Error: ' + e);
        return 'Error: ' + e;
    }
}
