import { ApiPromise } from '@polkadot/api';
import { AddressOrPair } from '@polkadot/api/types';
import { Hash } from '@polkadot/types/interfaces';

import { ProtosPermissionsFragmentPerms } from "@polkadot/types/lookup";

import {
    GetDefinitionsParams as ClamorGetDefinitionsParams,
    GetInstancesParams as ClamorGetInstancesParams,
    GetInstanceOwnerParams as ClamorGetInstanceOwnerParams,
} from "@fragcolor/types";

import * as types from "./types";
import {MintParams} from "./types";

export class Fragments {
    private api: ApiPromise;

    constructor(api: ApiPromise) {
        this.api = api;
    }

    // Los Extrinsics de Fragnova:

    async create(signer: AddressOrPair, createParams: types.CreateParams): Promise<Hash> {
        const txHash = await this.api.tx.fragments.create(
            createParams.protoHash,
            createParams.metadata,
            createParams.permissions,
            createParams.unique,
            createParams.maxSupply
        ).signAndSend(signer);

        return txHash;
    }

    async mint(signer: AddressOrPair, mintParams: MintParams): Promise<Hash> {
        const txHash = await this.api.tx.fragments.mint(
            mintParams.definitionHash,
            mintParams.options,
            mintParams.stackAmount
        ).signAndSend(signer);

        return txHash;
    }

    // Las RPCs de Fragnova:


    /**
     *
     * @param getDefinitionsParams
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
    async getDefinitions(getDefinitionsParams: types.GetDefinitionsParams): Promise<any> {

        const params: ClamorGetDefinitionsParams = this.api.registry.createType("GetDefinitionsParams", {
            desc: getDefinitionsParams.desc,
            from: getDefinitionsParams.fromIndex,
            limit: getDefinitionsParams.limit,
            return_owners: getDefinitionsParams.returnOwners
        });

        try {
            // @ts-ignore
            const result = await this.api.rpc.fragments.getDefinitions(params);

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
     * @param getInstancesParams
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
    async fragmentsGetInstances(getInstancesParams: types.GetInstancesParams): Promise<any> {

        const params: ClamorGetInstancesParams = this.api.registry.createType("GetInstancesParams", {
            desc: getInstancesParams.desc,
            from: getInstancesParams.fromIndex,
            limit: getInstancesParams.limit,
            definition_hash: getInstancesParams.definitionHash
        });

        try {
            // @ts-ignore
            const result = await this.api.rpc.fragments.getInstances(params);
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
     * @param GetInstanceOwnerParams
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
    async getInstanceOwner(getInstanceOwnerParams: types.GetInstanceOwnerParams): Promise<any> {

        const params: ClamorGetInstanceOwnerParams = this.api.registry.createType("GetInstanceOwnerParams", {
            definition_hash: getInstanceOwnerParams.definitionHash,
            edition_id: getInstanceOwnerParams.editionId,
            copy_id: getInstanceOwnerParams.copyId
        });

        try {
            // @ts-ignore
            const result = await this.api.rpc.fragments.getInstanceOwner(params);
            const obj = JSON.parse(result.toHuman());

            console.log(obj);
            console.log('sent with transaction hash', result.toHex());
        } catch(e){
            console.log('Error: ' + e);
        }
    }


}