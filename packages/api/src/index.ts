import { ApiPromise, WsProvider } from '@polkadot/api';
import { definitions } from "@fragnova/types";

const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

export async function createFragnovaApi(endpointUrl): Promise<ApiPromise> {

    const wsProvider = new WsProvider(endpointUrl);

    const api = await ApiPromise.create({
        provider: wsProvider,
        types: {
            ...types,
        },
        rpc: {
            protos: {
                getProtos: {
                    description: "Query and Return Proto-Fragment(s) based on `params`. The return type is a JSON string", type: "String",
                    params: [
                        { name: "params", type: "GetProtosParams" },
                        { name: "at", type: "BlockHash", isOptional: true }
                    ]
                },
                getGenealogy: {
                    description: "Query the Genealogy of a Proto-Fragment based on `params`. The return type is a JSON string that represents an Adjacency List.", type: "String",
                    params: [
                        { name: "params", type: "GetGenealogyParams" },
                        { name: "at", type: "BlockHash", isOptional: true }
                    ]
                },
            },
            fragments: {
                getDefinitions: {
                    description: "Query and Return Fragment Definition(s) based on `params`", type: "String",
                    params: [
                        { name: "params", type: "GetDefinitionsParams" },
                        { name: "at", type: "BlockHash", isOptional: true }
                    ]
                },
                getInstances: {
                    description: "Query and Return Fragment Instance(s) based on `params`", type: "String",
                    params: [
                        { name: "params", type: "GetInstancesParams" },
                        { name: "at", type: "BlockHash", isOptional: true }
                    ]
                },
                getInstanceOwner: {
                    description: "Query the owner of a Fragment Instance. The return type is a String", type: "String",
                    params: [
                        { name: "params", type: "GetInstanceOwnerParams" },
                        { name: "at", type: "BlockHash", isOptional: true }
                    ]
                },
            },
        },
    });

    return api;
}