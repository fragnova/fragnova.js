import { ApiPromise } from '@polkadot/api';
import { Vec, U8aFixed } from '@polkadot/types-codec';
import { AddressOrPair } from '@polkadot/api/types';

import { ProtosCategories } from "@polkadot/types/lookup";
import {
    GetProtosParams as ClamorGetProtosParams,
    GetGenealogyParams as ClamorGetGenealogyParams,
} from "@fragcolor/types";

import * as types from "./types";


export class Protos {
    private api: ApiPromise;

    constructor(api: ApiPromise) {
        this.api = api;
    }

    // Los Extrinsics de Fragnova:

    /**
     *
     * protoUpload is used to upload a proto
     *
     * @param uploadParams
     *
     * @example Upload a proto with no reference, category text: plain, tags
     *
     * let uploadParams: UploadParams = {
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
    async upload(signer: AddressOrPair, uploadParams: types.UploadParams): Promise<any> {
        try {

            const txHash = await this.api.tx.protos.upload(
                uploadParams.references as Vec<U8aFixed>, uploadParams.category as ProtosCategories, uploadParams.tags, uploadParams.linkedAssets, uploadParams.license, uploadParams.data
            ).signAndSend(signer);

            return txHash;
        } catch(e){
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
    async setMetadataTitle(signer: AddressOrPair, setMetadataParams: types.SetMetadataParams): Promise<any> {
        try {
            const txHash = await this.api.tx.protos.setMetadata(setMetadataParams.protoHash, 'title', setMetadataParams.data)
                .signAndSend(signer);
            console.log('sent with transaction hash', txHash.toHex());
        } catch(e){
            console.log('Error: ' + e);
        }
    }

    async setMetadataDescription(signer: AddressOrPair, setMetadataParams: types.SetMetadataParams): Promise<any> {
        try {
            const txHash = await this.api.tx.protos.setMetadata(setMetadataParams.protoHash, 'json_description', setMetadataParams.data)
                .signAndSend(signer);
            console.log('sent with transaction hash', txHash.toHex());
        } catch(e){
            console.log('Error: ' + e);
        }
    }

    async setMetadataImage(signer: AddressOrPair, setMetadataParams: types.SetMetadataParams): Promise<any> {
        try {
            const txHash = await this.api.tx.protos.setMetadata(setMetadataParams.protoHash, 'image', setMetadataParams.data)
                .signAndSend(signer);
            console.log('sent with transaction hash', txHash.toHex());
        } catch(e){
            console.log('Error: ' + e);
        }
    }


    // Las RPCs de Fragnova:

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
    async getProtos(getProtosParams: types.GetProtosParams): Promise<any> {

        let params: ClamorGetProtosParams = this.api.registry.createType('GetProtosParams', {
            desc: getProtosParams.desc,
            from: getProtosParams.from,
            limit: getProtosParams.limit,
            metadata_keys: getProtosParams.metadataKeys,
            categories: getProtosParams.categories,
            available: getProtosParams.available,
            tags: getProtosParams.tags,
            return_owners: getProtosParams.returnOwners,
            owner: getProtosParams.owner,
            exclude_tags: getProtosParams.excludeTags,
        });

        try {
            // @ts-ignore
            const result = await this.api.rpc.protos.getProtos(params);
            let protos = JSON.parse(result.toJSON());
            // console.log('listOfProtosObj');
            // console.log(listOfProtosObj);
            // console.log('sent with transaction hash', txHash.toHex());

            return protos;
        } catch(e){
            return Error('Error:' + e);
        }
    }


    /**
     *
     * @param getGenealogy
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
    async getGenealogy(getProtosGenealogyParams: types.GetGenealogyParams): Promise<any> {
        let protoParams: ClamorGetGenealogyParams = this.api.registry.createType('GetGenealogyParams', {
            get_ancestors: getProtosGenealogyParams.getAncestors,
            proto_hash: getProtosGenealogyParams.protoHash,
        });

        try {
            // @ts-ignore
            const result = await this.api.rpc.protos.getGenealogy(protoParams);
            let protos = JSON.parse(result.toJSON());
            // console.log('Get genealogy');
            // console.log(listOfProtosObj);
            // console.log('sent with transaction hash', txHash.toHex());

            return protos;
        } catch(e){
            console.log('Error: ' + e);
            return Error('Error: ' + e);
        }
    }
}