# Protocol
HTTPS

## Create Honey Resource

### URL - POST
`https://honeycomb-v1.herokuapp.com/api/honeys`

### Schema

#### Request
[honey-rq.json](https://github.com/beepro/beepro-docs/blob/master/schemas/honey-rq.json)

#### Response
[honey-rs.json](https://github.com/beepro/beepro-docs/blob/master/schemas/honey-rs.json)


### Examples

#### RQ - POST
```
{
  "git": {
    "url": "https://github.com/beepro/beepro-test-repository.git",
    "branch": "master"
  }
}
```

#### RS
```
{
  "id": "d6127883f1c2b456451a55763239f807efcf535b1d9548b5943c5c1349f179b1",
  "dance": {
    "url": "wss://honeycomb-v1.herokuapp.com/ws/honeys/d6127883f1c2b456451a55763239f807efcf535b1d9548b5943c5c1349f179b1"
  }
}
```

## Binary File Upload

### URL - POST
`https://honeycomb-v1.herokuapp.com/api/honeys/:id/files/:path_of_file`

- encrypt: multipart/form-data
- field name: file


### Examples

#### RQ - POST
```
const file = // get file somehow from IDE
const url = 'https://honeycomb-v1.herokuapp.com/api/honeys/d6127883f1c2b456451a55763239f807efcf535b1d9548b5943c5c1349f179b1/files/aaa/bbb.png';
const formData = new FormData();
formData.append('file', file);
fetch(url, {
  method: 'POST',
  body: formData
});
```
