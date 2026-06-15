### @hideIteration true
### @flyoutOnly false
### @explicitHints true
### @hideDone true

# マイプロたいけんかい
## ジュニアコース チャレンジ
ひらがなのブロックで、すきな もんだいを やってみよう！

```template
hiraganaPlayer.onChat("go", function () {
})
```

```ghost
hiraganaPlayer.onChat("go", function () {
    for (let index = 0; index < 4; index++) {
        hiraganaBlocks.place(GRASS, hiraganaAgent.agentPosition())
        hiraganaPlayer.teleport(hiraganaPositions.worldPosition(0, 0, 0))
        hiraganaAgent.callAgent()
        hiraganaAgent.moveAgent(hiraganaAgent.Direction.Forward, 1)
        hiraganaAgent.setAgentItem(GRASS, 1, 1)
        hiraganaAgent.placeAgent(hiraganaAgent.Direction.Forward)
        hiraganaAgent.turnAgent(hiraganaAgent.TurnDirection.Left)
        mobs.spawn(CHICKEN, hiraganaPositions.relativePosition(0, 0, 0))
    }
})
```

```package
hiragana=github:cmk-dev-team/cmk-hiragana-blocks#v1.6.1
```
