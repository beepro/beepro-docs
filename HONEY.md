# Protocol
HTTPS

# URL - POST
`https://honeycomb-v1.herokuapp.com/api/honeys`

# Schema

## Request
[honey-rq.json](https://github.com/beepro/beepro-docs/blob/master/schemas/honey-rq.json)

## Response
[honey-rs.json](https://github.com/beepro/beepro-docs/blob/master/schemas/honey-rs.json)


# Examples

## Create New Honey

#### RQ - POST
```
{
  "git": {
    "url": "https://github.com/beepro/beepro-test-repository.git",
    "branch": "master",
    "account": "sideroad",
    "token": "xxxxxyyyyysieisyiuye"
  },
  "commit": {
    "message": "beepro making commit",
    "interval": 1
  }
}
```

#### RS
```
{
  "dance": {
    "url": "wss://honeycomb-v1.herokuapp.com/ws/honeys/c3f3a57814fd8249b9222c967707fb08bee811e70d5c2f88060813670b00c790"
  }
}
```
