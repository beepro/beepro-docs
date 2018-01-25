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
|nabee|honeycombからcommit, pushするアカウント。蜂蜜を食べ過ぎて、太り気味。|

# Stories
## Apply beepro to the repository
![processes](https://raw.githubusercontent.com/beepro/beepro-docs/master/sync.png)
1. Bee make branch for beepro if it is needed.
2. Bee apply beepro by using dancer.
3. Bee input branch name, account name, access token.
4. dancer call honey API to create resource. [See Honey API docs](https://github.com/beepro/beepro-docs/blob/master/HONEY.md)
5. dancer connect with honeycomb by using URL which response from honey API.
6. honeycomb clone repository from origin.
7. honeycomb generate .beerc then nabee commit and push to origin.
[See Dance protocol docs](https://github.com/beepro/beepro-docs/blob/master/DANCE_PROTOCOL.md)
8. honeycomb dance `sync` to dancer.
9. dancer execute git fetch and pull to download latest code.
10. dancer dance `resume` to honeycomb.
11. honeycomb dance to dancer which are queued dances.
12. dancer start to enable dance of file manipulation.

## Join to existing beepro
1. Bee clone the repository or checkout target branch
2. dancer detect .beerc on project root.
3. dancer connect to honeycomb by using URL which is described in .beerc.
4. honeycomb dance `sync` to dancer.
5. dancer execute git fetch and pull to download latest code.
6. dancer dance `resume` to honeycomb.
7. honeycomb dance to dancer which are queued dances.
8. dancer start to enable dance of file manipulation.

## Resume development
1. Bee start up IDE
2. dancer detect .beerc on project root.
3. dancer connect to honeycomb by using URL which is described in .beerc.
4. honeycomb dance `sync` to dancer.
5. dancer execute git fetch and pull to download latest code.
6. dancer dance `resume` to honeycomb.
7. honeycomb dance to dancer which are queued dances.
8. dancer start to enable dance of file manipulation.


## Be able to synchronize nectar with honey ( file contents change )

## Be able to synchronize nectar with honey ( file operation - making new file, delete file )

# Architecture
[Overview](https://github.com/beepro/beepro-docs/blob/master/beepro-overview.pdf)

# Color Scheme
https://coolors.co/e86161-989c94-f47e4b-25291c-e6e49f
