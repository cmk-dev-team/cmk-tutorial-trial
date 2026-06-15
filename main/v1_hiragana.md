### @hideIteration true
### @flyoutOnly false
### @explicitHints true
### @hideDone true

# マイプロたいけんかい
## ジュニアコース
ひらがなのブロックでプログラミングをたいけんしよう！

```template
player.onChat("go", function () {
})
```

```ghost
player.onChat("go", function () {
    agent.teleportToPlayer()
    agent.turn(LEFT_TURN)
    hiragana.moveAgentForward(1)
    for (let index = 0; index < 4; index++) {

    }
})
```

```package
hiragana=github:cmk-dev-team/cmk-hiragana-blocks#v1.0.2
```
