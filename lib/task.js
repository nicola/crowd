module.exports = Task;
var Queue = require('./queue');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');
var q = require('q');
var util = require('util');

function Task (task, queue) {
  if (typeof task !== "object") task = {id: task};
  if (!task.id) throw new Error("Job must have an id");

  this.task = task;
  this.queue = queue || new Queue();
}
util.inherits(Job, EventEmitter);

Task.prototype.log = function (msg, obj) {
  Task.emit(msg, this.job);
};

Task.prototype.hasNext = function hasNext(state, data, cb) {
};

Task.prototype.next = function next(state, data, cb) {
};

Task.prototype.get = function get(cb) {
};

Task.prototype.process = function process(cb) {
};