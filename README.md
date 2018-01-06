# Terminology
|Word|Description|
|----|-----------|
|beepro|物理的に同一のコードベースを複数人で群がって同期的に開発を行う|
|bee| Developers who are join to beepro |
|honey|honeycomb上に存在しているコードベース|
|honeycomb|beeproが適応されているコードベースを管理するサーバー|
|dancer|beeの行った変更をhoneycombに対して通知する各IDEのプラグイン|
|nectar|各beeのローカルに存在しているコードベース|
|.beerc|honeycombが初期化時に生成するbeeproの設定ファイル。接続先などの情報をもつ|


# Stories
## Be able to apply beepro
1. Beeはブランチを切る（必要に応じて）みんぷろは関与しない
2. Beeは dancerを使ってbeeproを適応する
3. Beeは 対象のブランチ名を入力する（デフォルト値は現在のブランチ名）
4. dancerはHoneyCombにブランチ名、レポジトリのパスを知らせる
5. HoneyCombは該当レポジトリ、ブランチのHoneyが存在しないので、ダウンロードを行い、Honeyを初期化し、.beercを作成する
6. dancerは該当のhoneyとnectarの同期処理を開始する

## Be able to join existing beepro
1. Beeはブランチをチェックアウトする
2. dancerは .beercを検知し、設定を基にhoneyとnectarの同期処理を開始する

## Be able to synchronize nectar with honey ( file contents change )

## Be able to synchronize nectar with honey ( file operation - making new file, delete file )

# Color Scheme
https://coolors.co/e86161-989c94-f47e4b-25291c-e6e49f
