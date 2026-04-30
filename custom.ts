/**
 * エージェントをひらがなで操作するブロック
 */

//% emitAsConstant
declare const enum むき {
    //% block="まえ" enumval=0
    まえ,
    //% block="うしろ" enumval=1
    うしろ,
    //% block="ひだり" enumval=2
    ひだり,
    //% block="みぎ" enumval=3
    みぎ,
    //% block="うえ" enumval=4
    うえ,
    //% block="した" enumval=5
    した,
}

namespace えーじぇんと {

    //% block="えーじぇんとを じぶんの いちに もどす"
    //% blockId=agent_teleport_jp
    //% color="#CF8B17"
    export function もどす(): void {
        agent.teleportToPlayer();
    }

    //% block="えーじぇんとの むきを $dir に かえる"
    //% blockId=agent_setdir_jp
    //% color="#CF8B17"
    export function むきをかえる(dir: むき): void {
        agent.setDirection(dir as SixDirection, dir as SixDirection);
    }

    //% block="えーじぇんとを $dir に $blocks ぶろっく うごかす"
    //% blockId=agent_move_jp
    //% color="#CF8B17"
    //% blocks.min=1 blocks.max=20 blocks.defl=1
    export function うごかす(dir: むき, blocks: number): void {
        agent.move(dir as SixDirection, blocks);
    }
}
