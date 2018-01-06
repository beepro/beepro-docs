
## Examples

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
  "from": {
    "row": 1,
    "col": 4,
  },
  "to": {
    "row":1,
    "col":4
  },
  "text": "a"
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
  "from": {
    "row": 0,
    "col": 3,
  },
  "to": {
    "row":0,
    "col":3
  },
  "text": "aaaa\nbbb"
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
  "from": {
    "row": 0,
    "col": 0,
  },
  "to": {
    "row":1,
    "col":1
  },
  "text": "aaaa\nbbb"
}
```
