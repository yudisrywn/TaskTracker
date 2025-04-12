// Pelacak Tugas adalah proyek yang digunakan untuk melacak dan mengelola tugas Anda. Dalam tugas ini, Anda akan membangun antarmuka baris perintah sederhana (CLI) untuk melacak apa yang perlu Anda lakukan, apa yang telah Anda lakukan, dan apa yang sedang Anda kerjakan. Proyek ini akan membantu Anda mempraktikkan keterampilan pemrograman Anda, termasuk bekerja dengan sistem file, menangani input pengguna, dan membangun aplikasi CLI sederhana.

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  saveTasks,
  updateTask,
  deleteTaks,
  markInProgress,
  markDone,
  listTasks,
  listDone,
  listInProgress,
  listTodo,
} from "./task.js";

// Adding a new task
yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Menambahkan tugas baru",
    builder: {
      name: {
        demandOption: true,
        describe: "Nama Tugas",
        type: "string",
      },
    },
    handler: function (argv) {
      saveTasks(argv.name);
    },
  })
  .command({
    command: "update",
    describe: "Update tugas yang sudah ada",
    builder: {
      id: {
        describe: "Update Tugas",
        demandOption: true,
        type: "number",
      },
      name: {
        describe: "Update Tugas",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      const id = Number(argv.id);
      updateTask(argv.id, argv.name);
    },
  })
  .command({
    command: "delete",
    describe: "delete tugas yang sudah ada",
    builder: {
      id: {
        describe: "delete tugas",
        demandOption: true,
        type: "number",
      },
    },
    handler: function (argv) {
      const id = Number(argv.id);
      deleteTaks(argv.id);
    },
  })
  .command({
    command: "mark-in-progress",
    describe: "Tandai tugas sedang dilakukan",
    builder: {
      id: {
        describe: "tugas dikerjakan",
        demandOption: true,
        type: "number",
      },
    },
    handler: function (argv) {
      const id = Number(argv.id);
      markInProgress(argv.id, "in-progress");
    },
  })
  .command({
    command: "mark-done",
    describe: "Tugas telah diselesaikan",
    builder: {
      id: {
        describe: "tugas selesai",
        demandOption: true,
        type: "number",
      },
    },
    handler: function (argv) {
      const id = Number(argv.id);
      markDone(argv.id, "done");
    },
  })
  .command({
    command: "list",
    describe: "Menampilkan semua tugas serta statusnya",
    handler: function () {
      listTasks();
    },
  })
  .command({
    command: "list-todo",
    describe: "Menampilkan semua tugas yang telah selesai",
    handler: function () {
      listDone("todo");
    },
  })
  .command({
    command: "list-in-progress",
    describe: "Menampilkan semua tugas yang telah selesai",
    handler: function () {
      listDone("in-progress");
    },
  })
  .command({
    command: "list-done",
    describe: "Menampilkan semua tugas yang telah selesai",
    handler: function () {
      listDone("done");
    },
  })
  .demandCommand()
  .help()
  .parse();
