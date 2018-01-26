const fs = require('fs-extra');
require('isomorphic-fetch');
const path = require('path');
const mapSeries = require('async/mapSeries');
const klawSync = require('klaw-sync')

module.exports = function(assignee, label) {
  const paths = klawSync(path.join(__dirname, '../tasks'), {nodir: true});
  paths.forEach(function(path) {
    const tasks = fs.readFileSync(path.path, 'utf8');
    mapSeries(tasks.split('\n'), function(task, callback) {
      if (!task) {
        callback();
        return;
      }
      fetch('https://beepro-nabee:' + process.env.BEEPRO_TOKEN + '@api.github.com/repos/beepro/beepro-docs/issues', {
        method: 'POST',
        body: JSON.stringify({
          "title": task,
          "assignees": [
            assignee
          ],
          "labels": [
            label
          ]
        }),
      }).then(function(res) {
        return res.json();
      }, function(err) {
        console.log(err);
      }).then(function(json) {
        console.log(json);
        setTimeout(function(){
          callback();
        }, 1000);
      });
    });
  });
}
