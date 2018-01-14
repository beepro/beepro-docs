# Terminology
|Word|Description|
|----|-----------|
|beepro|物理的に同一のコードベースを複数人で群がって同期的に開発を行う|
|bee| Developers who are join to beepro |
|honey|honeycomb上に存在しているコードベース|
|honeycomb|beeproが適応されているコードベースを管理するサーバー|
|dancer|beeの行った変更をhoneycombに対して通知する各IDEのプラグイン|
|dance|beeの行なった変更の通知(ファイルのコンテンツ変更、ファイルの追加、ファイルの削除)|
|sync|honeyからnectarへの全ファイルの同期|
|nectar|各beeのローカルに存在しているコードベース|
|.beerc|honeycombが初期化時に生成するbeeproの設定ファイル。接続先などの情報をもつ|


# Stories
## Apply beepro to the repository
1. Beeはブランチを切る（必要に応じて）beeproは関与しない
2. Beeは dancerを使ってbeeproを適応する
3. Beeは 対象のブランチ名を入力する（デフォルト値は現在のブランチ名）
4. dancerはHoneyCombにブランチ名、レポジトリのパスを知らせる [See Honey API docs](https://github.com/beepro/beepro-docs/blob/master/HONEY.md)
5. HoneyCombは該当レポジトリ、ブランチのHoneyが存在しないので、ダウンロードを行い、Honeyを初期化し、.beercを作成する
6. dancerは該当のhoneyとnectarのsyncを行い、danceを開始する
[See Dance protocol docs](https://github.com/beepro/beepro-docs/blob/master/DANCE_PROTOCOL.md)

## Join to existing beepro
1. Beeはブランチをチェックアウトする
2. dancerは .beercを検知し、設定を基にhoneyとnectarのsyncを行い、danceを開始する

## Resume development
1. BeeはIDEを立ち上げる
2. dancerは .beercを検知し、設定を基にhoneyとnectarのsyncを行い、danceを開始する



## Be able to synchronize nectar with honey ( file contents change )

## Be able to synchronize nectar with honey ( file operation - making new file, delete file )

# Architecture
[Overview](https://github.com/beepro/beepro-docs/blob/master/beepro-overview.pdf)

# Color Scheme
https://coolors.co/e86161-989c94-f47e4b-25291c-e6e49f
