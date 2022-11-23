// We need to import the augmented definitions "somewhere" in our project, however since we have
// it in tsconfig as an override and the api/types has imports, it is not strictly required here.
// Because of the tsconfig override, we could import from '@polkadot/{api, types}/augment'
import './interfaces/augment-api';
import './interfaces/augment-types';
// import '@polkadot/api/augment';
// import '@polkadot/types/augment';

// all type stuff, the only one we are using here
// import {AccountsInfo} from "sample-polkadotjs-typegen/interfaces/protos";

// external imports
import { ApiPromise, Keyring } from '@polkadot/api';

// our local stuff
import * as definitions from './interfaces/definitions';
import { ProtosCategories } from "@polkadot/types/lookup";

async function protoUpload ( ): Promise<void> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        types: {
            ...types,
        }
    });

    let protoCategory: ProtosCategories = api.registry.createType('ProtosCategories', {text: "plain"});
    // let shouldWork: ProtosCategories = api.registry.createType('ProtosCategories', {text: "plain"});
    // let shouldFail: ProtosCategories = api.registry.createType('ProtosCategories', {text: "IEUDNFEWJNVK"});
    
    const data = {
        characterName: 'The Scribe 123'
    };

    const keyring = new Keyring({type: 'sr25519'});
    keyring.setSS58Format(93);
    const alice = keyring.addFromUri('//Alice');

    try {
        const txHash = await api.tx.protos.upload([], protoCategory, ['nar_character'], null, 'closed', JSON.stringify(data)).signAndSend(alice);
        console.log('sent with transaction hash', txHash.toHex());
    } catch(e){
        console.log('Error: ' + e);
    }
}


async function protoSetMetadata(): Promise<void> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        types: {
            ...types,
        }
    });

    const keyring = new Keyring({type: 'sr25519'});
    keyring.setSS58Format(93);
    const alice = keyring.addFromUri('//Alice');

    try {
        const txHash = await api.tx.protos.setMetadata('0x81d8f8641d30d27eef6500716668f0f7e904acfbe475d688363a9a280bfb4413', 'title', 'test title 01')
            .signAndSend(alice);
        console.log('sent with transaction hash', txHash.toHex());
    } catch(e){
        console.log('Error: ' + e);
    }
}