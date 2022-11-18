// We need to import the augmented definitions "somewhere" in our project, however since we have
// it in tsconfig as an override and the api/types has imports, it is not strictly required here.
// Because of the tsconfig override, we could import from '@polkadot/{api, types}/augment'
// import './interfaces/augment-api';
// import './interfaces/augment-types';
import '@polkadot/api/augment';
import '@polkadot/types/augment';
// all type stuff, the only one we are using here
// import {AccountsInfo} from "sample-polkadotjs-typegen/interfaces/protos";
// external imports
import { ApiPromise } from '@polkadot/api';
// our local stuff
import * as definitions from './interfaces/definitions';
async function main() {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }) => ({ ...res, ...types }), {});
    const api = await ApiPromise.create({
        types: {
            ...types,
        }
    });
    let shouldWork = api.registry.createType('ProtosCategories', { text: "plain" });
    let shouldFail = api.registry.createType('ProtosCategories', { text: "trump" });
    console.log(shouldWork);
    console.log(shouldFail);
}
await main();
