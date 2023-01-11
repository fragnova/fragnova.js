// Note from Karan: This file is copied from https://polkadot.js.org/docs/api/examples/promise/typegen/#usage

// We need to import the augmented definitions "somewhere" in our project, however since we have
// it in tsconfig as an override and the api/types has imports, it is not strictly required here.
// Because of the tsconfig override, we could import from '@polkadot/{api, types}/augment'
import './interfaces/augment-api';
import './interfaces/augment-types';

// our local stuff
export {accounts, detach, fragments, protos} from "./interfaces/definitions";
export * as definitions from "./interfaces/definitions";