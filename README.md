# Task Tracker CLI
[![forthebadge](https://forthebadge.com/images/featured/featured-built-with-love.svg)](https://forthebadge.com)

Pelacak Tugas adalah proyek yang digunakan untuk melacak dan mengelola tugas Anda. Dengan antarmuka baris perintah sederhana (CLI) untuk melacak apa yang perlu Anda lakukan, apa yang telah Anda lakukan, dan apa yang sedang Anda kerjakan.

## Features
- Add, Update, and Delete tasks
- Mark a task as in progress or done
- List all tasks
- List all tasks that are done
- List all tasks that are not done
- List all tasks that are in progress

## Tech Stack
[![My Skills](https://skillicons.dev/icons?i=js,nodejs&perline=3)](https://skillicons.dev)
## How To Use
Menambahkan Task
```sh
node task-cli add --name="namaTugas"
```
Menghapus Tugas

```sh
node task-cli delete --id=IdTugasYangDihapusTypeNumber
```
Memperbarui Tugas

```sh
node task-cli update --id=idTugas --name="namaTugasBaru"
```
Menandai Tugas Sedang Dikerjakan

```sh
node task-cli mark-in-progress --id=idYangMauDitandai
```
Menandai Tugas Selesai

```sh
node task-cli mark-done --id=idTugasSelesaiDikerjakan
```
Menampilkan Semua Tugas

```sh
node task-cli list
```
Menampilkan Semua Tugas Belum Dikerjakan

```sh
node task-cli list-todo
```
Menampilkan Semua Tugas Sedang Dikerjakan

```sh
node task-cli list-in-progress
```
Menampilkan Semua Tugas Selesai

```sh
node task-cli list-done
```

> Note: Jangan Lupa Titik Coma
