import validator from "validator";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

//!Membuat folder data jika belum ada
const dirPath = "../TaskTracker/data";
if (!existsSync(dirPath)) {
  mkdirSync(dirPath);
}

//!Membuat file contacts.json jika belum ada
const dirFile = "../TaskTracker/data/task.json";
if (!existsSync(dirFile)) {
  writeFileSync(dirFile, "[]", "utf-8");
}

//counter id path
const counterPath = "../TaskTracker/data/id-counter.json";
const getNextId = () => {
  let counter = { lastId: 0 };
  if (existsSync(counterPath)) {
    const counterData = readFileSync(counterPath, "utf-8");
    counter = JSON.parse(counterData);
  }
  counter.lastId += +1;
  writeFileSync(counterPath, JSON.stringify(counter));
  return counter.lastId;
};

const loadTask = () => {
  const fileBuffer = readFileSync("../TaskTracker/data/task.json", "utf-8");
  const tasks = JSON.parse(fileBuffer);
  return tasks;
};

export const saveTasks = (name) => {
  const id = getNextId();
  const task = {
    id,
    name,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const tasks = loadTask();

  tasks.push(task);
  writeFileSync(
    "../TaskTracker/data/task.json",
    JSON.stringify(tasks),
    "utf-8"
  );
  console.log(`Task '${name}' berhasil ditambahkan dengan ID ${id}`);
};

export const updateTask = (id, name) => {
  const tasks = loadTask();
  const newTasks = tasks.findIndex((newTasks) => newTasks.id === id);

  if (newTasks === -1) {
    console.log(`Tugas dengan id ${id} tidak ditemukan`);
    return false;
  }

  //update task ketika id ditemukan
  tasks[newTasks].name = name;
  tasks[newTasks].updatedAt = new Date().toISOString();
  writeFileSync(
    "../TaskTracker/data/task.json",
    JSON.stringify(tasks),
    "utf-8"
  );
  console.log(tasks);
};

export const deleteTaks = (id) => {
  const tasks = loadTask();
  const newTasks = tasks.filter((task) => {
    return task.id !== id;
  });

  if (tasks.length === newTasks.length) {
    console.log("Id tidak ditemukan!");
    return false;
  }

  //delete task
  writeFileSync(
    "../TaskTracker/data/task.json",
    JSON.stringify(newTasks),
    "utf-8"
  );
  console.log(`Id ${id} berhasil dihapus!`);
};

export const markInProgress = (id, newStatus) => {
  const tasks = loadTask();
  const newTasks = tasks.findIndex((newTasks) => newTasks.id === id);

  if (newTasks === -1) {
    console.log(`Tugas dengan id ${id} tidak ditemukan`);
    return false;
  }

  //perbarui progress task
  tasks[newTasks].status = newStatus;
  writeFileSync(
    "../TaskTracker/data/task.json",
    JSON.stringify(tasks),
    "utf-8"
  );
  console.log(`Tugas ${id} ${newStatus}`);
};

export const markDone = (id, newStatus) => {
  const tasks = loadTask();
  const newTasks = tasks.findIndex((newTasks) => newTasks.id === id);

  if (newTasks === -1) {
    console.log(`Tugas dengan id ${id} tidak ditemukan`);
    return false;
  }

  //perbarui progress task
  tasks[newTasks].status = newStatus;
  writeFileSync(
    "../TaskTracker/data/task.json",
    JSON.stringify(tasks),
    "utf-8"
  );
  console.log(`Tugas ${id} telah ${newStatus}`);
};

export const listTasks = () => {
  const tasks = loadTask();
  console.log("DAFTAR TUGAS");
  tasks.forEach((tasks, i) => {
    console.log(`${i + 1}. ${tasks.name} : ${tasks.status}`);
  });
};

export const listDone = (status) => {
  const tasks = loadTask();
  const statusTask = tasks.filter((tasks) => tasks.status === status);
  if (statusTask.length === 0) {
    console.log("Belum ada tugas yang selesai.");
    return false;
  } else {
    console.log("DAFTAR TUGAS SELESAI");
    statusTask.forEach((tasks) => {
      console.log(`${tasks.id}. ${tasks.name} : ${tasks.status}`);
    });
  }
};

export const listTodo = (status) => {
  const tasks = loadTask();
  const statusTask = tasks.filter((tasks) => tasks.status === status);
  if (statusTask.length === 0) {
    console.log("Belum ada tugas yang ditambahkan");
    return false;
  } else {
    console.log("DAFTAR TUGAS TODO");
    statusTask.forEach((tasks) => {
      console.log(`${tasks.id}. ${tasks.name} : ${tasks.status}`);
    });
  }
};

export const listInProgress = (status) => {
  const tasks = loadTask();
  const statusTask = tasks.filter((tasks) => tasks.status === status);
  if (statusTask.length === 0) {
    console.log("Belum ada tugas yang sedang dikerjakan");
    return false;
  } else {
    console.log("DAFTAR TUGAS DIKERJAKAN");
    statusTask.forEach((tasks) => {
      console.log(`${tasks.id}. ${tasks.name} : ${tasks.status}`);
    });
  }
};
