let tasks = [];
let commonId = 0;
let sortFlag = false;

export function addTask(name) {
  if (!name)
    return;
  
  commonId++;
  tasks.push({ id: commonId, name: name, state: 0 });
}

export function deleteTask(taskId) {
  tasks = tasks.filter(t => t.id !== taskId);
}

export function getTasks() {
  if (sortFlag) {
    return tasks.slice().sort((a, b) => a.state - b.state);
  }

  return tasks;
}

export function setDoneState(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (task) task.state = 1;
}

export function updateSortFlag(){
    sortFlag = !sortFlag;
}