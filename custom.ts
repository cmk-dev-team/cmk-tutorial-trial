/**
 * エージェントをやさしいことばで操作するブロック
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

//% emitAsConstant
declare const enum まわすむき {
    //% block="ひだり" enumval=0
    ひだり,
    //% block="みぎ" enumval=1
    みぎ,
}

namespace エージェント {

    //% block="エージェントを じぶんの ところに よぶ"
    //% blockId=agent_teleport_jp
    //% color="#CF8B17"
    export function よぶ(): void {
        agent.teleportToPlayer();
    }

    //% block="エージェントを $dir に まわす"
    //% blockId=agent_turn_jp
    //% color="#CF8B17"
    export function まわす(dir: まわすむき): void {
        agent.turn(dir as number);
    }

    //% block="エージェントを $dir に $blocks ぶろっく うごかす"
    //% blockId=agent_move_jp
    //% color="#CF8B17"
    //% blocks.min=1 blocks.max=20 blocks.defl=1
    export function うごかす(dir: むき, blocks: number): void {
        agent.move(dir as number, blocks);
    }
}
