#!/usr/bin/env node

// Run feo.
var opts = require('opts');
opts.parse([
  {
    'short': 'a',
    'long': 'assignee',
    'description': 'assignee',
    'value': true,
    'required': true
  },
  {
    'short': 'l',
    'long': 'label',
    'description': 'label',
    'value': true,
    'required': true
  }
]);
const assignee = opts.get('assignee');
const label = opts.get('label');
if(assignee && label){
  require('../lib/gentask')(assignee, label);
}
