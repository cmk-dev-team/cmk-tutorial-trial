### @hideIteration true
### @flyoutOnly false
### @explicitHints true
### @hideDone true

# マイプロたいけんかい
## ジュニアコース チャレンジ
ひらがなのブロックで、すきな もんだいを やってみよう！

```template
player.onChat("go", function () {
})
```

```ghost
player.onChat("go", function () {
    for (let index = 0; index < 4; index++) {
        blocks.place(GRASS, agent.getPosition())
        player.teleport(world(0, 0, 0))
        agent.teleportToPlayer()
        hiragana.moveAgentForward(1)
        agent.setItem(GRASS, 1, 1)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        mobs.spawn(CHICKEN, posCamera(0, 0, 0))
    }
})
```
