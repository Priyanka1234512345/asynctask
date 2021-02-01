var express = require("express");
var async = require("async");
var q = async.queue(function(task, callback) {
    console.log('Hello ' + task.name);
    callback();
  }, 2);
  
  // assign a callback
  q.drain = function() {
    console.log('All items have been processed');
  };
  
  // add some items to the queue
  q.push({name: 'foo'}, function(err) {
    console.log('Finished processing foo');
  });
  
  q.push({name: 'bar'}, function (err) {
    console.log('Finished processing bar');
  });
  
  // add some items to the queue (batch-wise)
  q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
    console.log('Finished processing item');
  });

  // add some items to the front of the queue
  q.unshift({name: 'bar'}, function (err) {
    console.log('Finished processing bar');
  });





