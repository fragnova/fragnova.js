import {ApiPromise} from '@polkadot/api';
import {definitions} from "@fragcolor/types";

const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

export async function createFragnovaApi(): Promise<ApiPromise> {
    const api = await ApiPromise.create({
        types: {
            ...types,
        }
    });

    return api;
}