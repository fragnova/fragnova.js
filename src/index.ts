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

async function protoUpload(references: Array<string>, categories: object, tags: Array<string>,
    linkedAssets: string|null, license: string, data: string
    ): Promise<any> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        rpc: protoType['rpc'],
        types: {
            ...types,
            ...protoType['types'],
        }
    });

    let protoCategory: ProtosCategories = api.registry.createType('ProtosCategories', categories);
    // let protoCategory: ProtosCategories = api.registry.createType('ProtosCategories', {text: "plain"});
    // let shouldFail: ProtosCategories = api.registry.createType('ProtosCategories', {text: "IEUDNFEWJNVK"});

    const keyring = new Keyring({type: 'sr25519'});
    keyring.setSS58Format(93);
    const alice = keyring.addFromUri('//Alice');

    try {
        const txHash = await api.tx.protos.upload(
            references, protoCategory, tags, linkedAssets, license, data
        ).signAndSend(alice);
        console.log('sent with transaction hash', txHash.toHex()); 
    } catch(e){
        console.log('Error: ' + e);
    }
}


async function protoSetMetadata(protoHash: string, metadataKey: string, data: string): Promise<any> {
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
        const txHash = await api.tx.protos.setMetadata(protoHash, metadataKey, data)
            .signAndSend(alice);
        console.log('sent with transaction hash', txHash.toHex());
    } catch(e){
        console.log('Error: ' + e);
    }
}

// specify the type for category and tags
async function getProtos(desc: boolean, fromIndex: number, limit: number, metadatKeys: Array<string>, 
    categories: Array<any>, available: boolean|null, tags: Array<any>, returnOwers: boolean, owner: string|null, 
    excludeTags: Array<string>): Promise<any> {
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
        desc: desc,
        from: fromIndex,
        limit: limit,
        metadata_keys: metadatKeys,
        categories: categories,
        available: available,
        tags: tags,
        return_owners: returnOwers,
        owner: owner,
        exclude_tags: excludeTags,
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

async function getProtosGenealogy(getAncestor: boolean, protoHash: string): Promise<any> {
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
        get_ancestors: getAncestor,
        proto_hash: protoHash,
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

async function fragmentsGetDefinitions(desc: boolean, fromIndex: number, limit: number, returnOwners?: boolean): Promise<any> {
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
        desc: desc, from: fromIndex, limit: limit, return_owners: returnOwners
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



async function fragmentsGetInstances(desc: boolean, fromIndex: number, limit: number, definitionHash: string): Promise<any> {
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
        desc: desc, from: fromIndex, limit: limit, definition_hash: definitionHash
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

async function fragmentsGetInstanceOwner(definitionHash: string, editionId: number, copyId: number): Promise<any> {
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
        definition_hash: definitionHash, edition_id: editionId, copy_id: copyId
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

    let getProtosRes = await getProtos(true, 0, 10, ['image', 'title', 'json_attributes', 'description'], [], null, [], true, null, ['NSFW']);
    console.log(getProtosRes);

    let protoUploadRes = await protoUpload([], {text: "plain"}, ['nar_character'], null, 'closed', 'test data body 03');
    console.log(protoUploadRes);

    let protoSetMetadataRes = await protoSetMetadata('0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413', 'title', 'test title 01');
    console.log(protoSetMetadataRes);

    let getProtosGenealogyRes = await getProtosGenealogy(true, '81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413');
    console.log(getProtosGenealogyRes);

    let fragmentsGetDefinitionsRes = await fragmentsGetDefinitions(true, 0, 10);
    console.log(fragmentsGetDefinitionsRes);

    let fragmentsGetInstancesRes = await fragmentsGetInstances(true, 0, 10, 'e69267a99be24967935972418017ea96');
    console.log(fragmentsGetInstancesRes);

    let fragmentsGetInstanceOwnerRes = await fragmentsGetInstanceOwner('0xe69267a99be24967935972418017ea96', 1, 1);
    console.log(fragmentsGetInstanceOwnerRes);
}


main();