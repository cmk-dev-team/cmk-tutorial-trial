### @hideIteration true
### @flyoutOnly false
### @explicitHints true
### @hideDone true

# マイプロたいけんかい
## ジュニアコース
ひらがなのブロックでプログラミングをたいけんしよう！

```template
hiraganaPlayer.onChat("go", function () {
})
```

```ghost
hiraganaPlayer.onChat("go", function () {
    hiraganaAgent.callAgent()
    hiraganaAgent.turnAgent(hiraganaAgent.TurnDirection.Left)
    hiraganaAgent.moveAgent(hiraganaAgent.Direction.Forward, 1)
    for (let index = 0; index < 4; index++) {

    }
})
```

```package
hiragana=github:cmk-dev-team/cmk-hiragana-blocks#v1.5.1
```
