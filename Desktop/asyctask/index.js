var async = require("async");
function async(tasks, maxNumOfWorkers = n) {
    var taskIndex = 0;
  
    return new Promise(done => {
      const handleResult = index => result => {
        tasks[index] = result;
        taskIndex++;
        getNextTask();
      };
      const getNextTask = () => {
        if (taskIndex < tasks.length) {
          tasks[taskIndex]().then(handleResult(taskIndex)).catch(handleResult(taskIndex));
        } else {
          done(tasks);
        }
      };
      getNextTask();
    });
  }




