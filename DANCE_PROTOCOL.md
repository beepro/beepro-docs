# Protocol
WebSocket

# URL
`wss://honeycomb-v1.herokuapp.com/ws/honeys/:id`

# Schema
See [dance.json](https://github.com/beepro/beepro-docs/blob/master/schemas/dance.json) for more detail

# Chat

```
{
  "type": "chat",
  "who": "sideroad",
  "message": "hello world\nand good night"
}
```

# Queue manipulation

## Suspend to receive dances

The client can be suspend to get dance from others.
Dances are queued until `resume` is called.

```
{
  "type": "suspend"
}
```

## Resume to receive dances

Queued dances will be received then start to get dance from others.

```
{
  "type": "resume"
}
```

# File Operations

## Create New File

```
{
  "type": "create",
  "path": "aaa/bbb.txt",
  "who": "sideroad",
  "contents": "aaa\nbbb",
  "changes": {}
}
```

## Delete File

```
{
  "type": "delete",
  "path": "aaa/bbb.txt",
  "who": "sideroad",
  "contents": null,
  "changes": {}
}
```


## File Contents Changes

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
  "who": "sideroad",
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
１行目の４文字目に
```
aaaa
bbb
```
をペーストした場合

#### As Is

```
aaa
```

#### To Be

```
aaaaaaa
bbb
```

#### Changes
```
{
  "type": "change",
  "path": "aaa/bbb.txt",
  "who": "sideroad",
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
１行目の１文字目から
２行目の２文字目までを
```
aaaa
bbb
```
をペーストして置き換えた場合

#### As Is

```
aaa
ccc
```

#### To Be

```
aaaa
bbbcc
```

#### Changes
```
{
  "type": "change",
  "path": "aaa/bbb.txt",
  "who": "sideroad",
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
  "who": "sideroad",
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
  "who": "sideroad",
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
