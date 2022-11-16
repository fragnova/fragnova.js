// We need to import the augmented definitions "somewhere" in our project, however since we have
// it in tsconfig as an override and the api/types has imports, it is not strictly required here.
// Because of the tsconfig override, we could import from '@polkadot/{api, types}/augment'

import '../src/interfaces/augment-api';
import '../src/interfaces/augment-types';


// all type stuff, the only one we are using here
import type { Hash256, Categories, LinkedAsset, UsageLicense } from '../src/interfaces';
import { BTreeMap, Compact, Enum, Option, Struct, Text, U256, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';

// external imports
import { ApiPromise } from '@polkadot/api';
import { createType } from '@polkadot/types';

// our local stuff
import * as definitions from '../src/interfaces/definitions';

async function main(): Promise<void> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        types: {
            ...types,
        }
    });

    const keyring = new Keyring({ type: 'sr25519' });
    keyring.setSS58Format(93);
    let alice = keyring.addFromUri('//Alice');

    let references: Vec<U8aFixed> = [];
    let category: Categories = 'Text';
    let tags: string[] = [];
    let linked_asset: Option<LinkedAsset> = null;
    let license: UsageLicense = 'Closed';
    let data = [...Buffer.from('Proto-Sino-Tibetan')];
    const upload = api.tx.protos.upload(
        references,
        category,
        tags,
        linked_asset,
        license,
        data
    );

    try {
        await upload.signAndSend(alice);
    } catch (e) {
        console.log('it failed, duibuqi')
    }

}

await main();