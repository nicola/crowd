module.exports = Job;
var Task = require('./task');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');
var q = require('q');
var util = require('util');

function Job (job, task) {
  if (typeof job !== "object") job = {id: job};
  if (!job.id) throw new Error("Job must have an id");

  this.job = job;
  this.task = task || new Task();
}

Job.prototype.log = function (msg, obj) {
  this.task.emit("job:"+msg, this.job);
};

Job.prototype.create = function create(cb) {
  // creating new task from the Task specification and add it
  return this.task.add(this.job.id, cb);
};

Job.prototype.process = function solved(state, data, cb) {
  // Process a task -> completed, failed, delayed
  return this.task.process( this.job, state, data, cb);
};

Job.prototype.get = function solved(cb) {
  return this.task.get(this.id, cb);
};