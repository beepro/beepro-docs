# Protocol
WebSocket

# URL
`wss://honeycomb-v1.herokuapp.com/ws/honeys/:id`

# Schema
See [dance.json](https://github.com/beepro/beepro-docs/blob/master/schemas/dance.json) for more detail

# Postman collections
https://www.getpostman.com/collections/290b221ce41168f5ef2c

# Sync manipulation

When dancer receive `sync` dance, git fetch and pull to update to latest.
Then send `resume` dance to honeycomb.
honeycomb will dance to the dancer to send all queued dances.

# Queue manipulation

## Resume to receive dances

Queued dances will be received then start to get dance as usual.

```
{
  "type": "resume"
}
```

# Join

When dancer join into beepro, dancer should dance `join` to tell other dancers. honeycomb store mapping data between user and websocket connection.

```
{
  "type": "join",
  "user": {
    "id": "sideroad",
    "icon": "https://avatars3.githubusercontent.com/u/411486?s=460&v=4"
  }
}
```

# Keepalive

to keep alive the connection, keep to send message below

```
KEEPALIVE
```

# Chat

```
{
  "type": "chat",
  "message": "hello world\nand good night"
}
```

# File Operations

When bee dance to honeycomb, honeycomb will multicast dance to all bees. The time, honeycomb inject sender's id into `who` field.

## Create New File

```
{
  "type": "create",
  "path": "aaa/bbb.txt",
  "contents": "aaa\nbbb",
  "changes": {}
}
```

## Delete File

```
{
  "type": "delete",
  "path": "aaa/bbb.txt",
  "contents": null,
  "changes": {}
}
```

## Move File

```
{
  "type": "move",
  "path": "aaa/bbb.txt",
  "to": "aaa/ccc.txt",
  "contents": null,
  "changes": {}
}
```


## File Contents Changes

`change.from` から `change.to` の文字列を `change.text` で置換する

### Type character
２行目の５文字目に`a`を入力した場合

#### As Is
```
000
111111111
222
```

#### To Be
```
000
1111a11111
222
```

#### Changes
```
{
  "type": "change",
  "path": "aaa/bbb.txt",
  "contents": null,
  "change": {
    "from": {
      "row": 1,
      "col": 4
    },
    "to": {
      "row":1,
      "col":4
    },
    "text": "a"
  }
}
```

### Paste words include line break
(As Is)の１行目の４文字目に
```
aaaa
bbb
```
をペーストした場合

#### As Is

```
xxx
```

#### To Be

```
xxxaaaa
bbb
```

#### Changes
```
{
  "type": "change",
  "path": "aaa/bbb.txt",
  "contents": null,
  "change": {
    "from": {
      "row": 0,
      "col": 3
    },
    "to": {
      "row":0,
      "col":3
    },
    "text": "aaaa\nbbb"
  }
}
```


### Paste words to replace include line break
(As Is)の１行目の１文字目から
２行目の１文字目までを
```
aaaa
bbb
```
をペーストして置き換えた場合

#### As Is

```
xxx
yyy
```

#### To Be

```
aaaa
bbbyy
```

#### Changes
```
{
  "type": "change",
  "path": "aaa/bbb.txt",
  "contents": null,
  "change": {
    "from": {
      "row": 0,
      "col": 0
    },
    "to": {
      "row":1,
      "col":1
    },
    "text": "aaaa\nbbb"
  }
}
```

### Delete character
１行目の２文字目を削除した場合

#### As Is

```
123
456
```

#### To Be

```
13
456
```

#### Changes
```
{
  "type": "change",
  "path": "aaa/bbb.txt",
  "contents": null,
  "change": {
    "from": {
      "row": 0,
      "col": 1
    },
    "to": {
      "row":0,
      "col":2
    },
    "text": ""
  }
}
```


### Delete selected characters
１行目を削除した場合

#### As Is

```
123
456
```

#### To Be

```
456
```

#### Changes
```
{
  "type": "change",
  "path": "aaa/bbb.txt",
  "contents": null,
  "change": {
    "from": {
      "row": 0,
      "col": 0
    },
    "to": {
      "row":1,
      "col":0
    },
    "text": ""
  }
}
```

### Type new line code
3行目の末尾に改行コードを入れて4行にする

#### As Is
```
000
111111111
222
```

#### To Be
```
000
111111111
222

```

#### Changes
```
{
  "type": "change",
  "path": "aaa/bbb.txt",
  "contents": null,
  "change": {
    "from": {
      "row": 2,
      "col": 3
    },
    "to": {
      "row": 2,
      "col": 3
    },
    "text": "\n"
  }
}
```