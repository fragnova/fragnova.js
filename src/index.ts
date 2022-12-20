// We need to import the augmented definitions "somewhere" in our project, however since we have
// it in tsconfig as an override and the api/types has imports, it is not strictly required here.
// Because of the tsconfig override, we could import from '@polkadot/{api, types}/augment'
import './interfaces/augment-api';
import './interfaces/augment-types';

// external imports
import { Keyring } from '@polkadot/api';

// our local stuff
import { cryptoWaitReady } from '@polkadot/util-crypto';

import * as protos from './interfaces/protos/index';
import * as fragments from './interfaces/fragments/index';

async function main() {
    await cryptoWaitReady();

    const keyring = new Keyring({type: 'sr25519'});
    keyring.setSS58Format(93);
    const alice = keyring.addFromUri('//Alice');

    try{
        let paramGetProtos: protos.getProtosParams = {
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
        let getProtosRes = await protos.get(paramGetProtos);
        console.log(getProtosRes);
    } catch (e) {
        console.log(e);
    }  

    try{
        let paramProtoUpload: protos.protoUploadParams = {
            references: [],
            category: {text: "plain"},
            tags: ['nar_character'],
            linkedAssets: null,
            license: 'Closed',
            data: 'test data body 04'
        }
        let protoUploadRes = await protos.upload(paramProtoUpload, alice);
        console.log(protoUploadRes);
    } catch (e) {
        console.log(e);
    }    


    try{
        let protoSetMetadataTitleParams: protos.protoSetMetadataParams = {
            protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
            data: 'test title 01'
        }
        let protoSetMetadataTitleRes = await protos.setMetadataTitle(protoSetMetadataTitleParams, alice);
        console.log(protoSetMetadataTitleRes);
    } catch (e) {
        console.log(e);
    }    

    try{
        let protoSetMetadataDescParams: protos.protoSetMetadataParams = {
            protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
            data: 'test desc 01'
        }
        let protoSetMetadataDescRes = await protos.setMetadataDescription(protoSetMetadataDescParams, alice);
        console.log(protoSetMetadataDescRes);
    } catch (e) {
        console.log(e);
    }  

    try{
        let protoSetMetadataImageParams: protos.protoSetMetadataParams = {
            protoHash: '0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413',
            data: '0x0b000000000000007a90010089504e470d0a1a0a0000000d494844520000027e0000027a08...',
        }
        let protoSetMetadataImageRes = await protos.setMetadataImage(protoSetMetadataImageParams, alice);
        console.log(protoSetMetadataImageRes);
    } catch (e) {
        console.log(e);
    }  

    try{
        let getProtosGenealogyFuncParams: protos.getProtosGenealogyParams = {
            getAncestor: true, 
            protoHash: '81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413'
        }
        let getProtosGenealogyRes = await protos.getGenealogy(getProtosGenealogyFuncParams);
        console.log(getProtosGenealogyRes);
    } catch (e) {
        console.log(e);
    }  

    try {
        let fragmentsGetDefinitionsParams: fragments.fragmentsGetDefinitionsParams = {
            desc: true,
            fromIndex: 0,
            limit: 10
        }
        let fragmentsGetDefinitionsRes = await fragments.getDefinitions(fragmentsGetDefinitionsParams);
        console.log(fragmentsGetDefinitionsRes);
    } catch (e) {
        console.log(e);
    }  

    try{
        let fragmentsGetInstancesParams: fragments.fragmentsGetInstancesParams = {
            desc: true,
            fromIndex: 0,
            limit: 10,
            definitionHash: 'e69267a99be24967935972418017ea96'
        }
        let fragmentsGetInstancesRes = await fragments.getInstances(fragmentsGetInstancesParams);
        console.log(fragmentsGetInstancesRes);
    } catch (e) {
        console.log(e);
    }  

    try{
        let fragmentsGetInstanceOwnerParams: fragments.fragmentsGetInstanceOwnerParams = {
            definitionHash: '0xe69267a99be24967935972418017ea96', 
            editionId: 1,
            copyId: 1
        }
        let fragmentsGetInstanceOwnerRes = await fragments.getInstanceOwner(fragmentsGetInstanceOwnerParams );
        console.log(fragmentsGetInstanceOwnerRes);
    } catch (e) {
        console.log(e);
    }  
}

main();