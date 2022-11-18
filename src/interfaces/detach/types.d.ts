import type { Bytes, Compact, Enum, Struct, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { InstanceUnit } from 'sample-polkadotjs-typegen/interfaces/fragments';
import type { Hash128, Hash256 } from 'sample-polkadotjs-typegen/interfaces/protos';
/** @name DetachHash */
export interface DetachHash extends Enum {
    readonly isProto: boolean;
    readonly asProto: Hash256;
    readonly isInstance: boolean;
    readonly asInstance: ITuple<[Hash128, Compact<InstanceUnit>, Compact<InstanceUnit>]>;
    readonly type: 'Proto' | 'Instance';
}
/** @name ExportData */
export interface ExportData extends Struct {
    readonly chain: SupportedChains;
    readonly owner: Bytes;
    readonly nonce: u64;
}
/** @name SupportedChains */
export interface SupportedChains extends Enum {
    readonly isEthereumMainnet: boolean;
    readonly isEthereumRinkeby: boolean;
    readonly isEthereumGoerli: boolean;
    readonly type: 'EthereumMainnet' | 'EthereumRinkeby' | 'EthereumGoerli';
}
export type PHANTOM_DETACH = 'detach';
