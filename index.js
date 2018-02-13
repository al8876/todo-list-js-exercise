function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logstate: function() {
      console.log(`${this.title} has${this.complete ? " ": " not "}been completed`);      
    },
    markComplete: function() {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask('Clean Cat Litter', 'Take all the shit out of the litter box');
const task2 = newTask('Do Laundry', 'Gross');
const task = [task1, task2];

task1.logstate();
task1.markComplete();
task1.logstate();