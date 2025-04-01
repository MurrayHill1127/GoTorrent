// js/downloads.js

/**
 * Downloads.js - Handles dynamic behavior of the Downloads page.
 * 包含下载队列数据加载、表格更新、分页和操作按钮事件绑定。
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("Downloads.js loaded at " + new Date().toLocaleString());

    // 初始化下载队列数据
    let downloadQueue = [
        { id: 1, name: "Ubuntu-20.04.iso", status: "Downloading", progress: 45, speed: "1.2 MB/s", peers: 12 },
        { id: 2, name: "Debian-11.iso", status: "Paused", progress: 30, speed: "0 MB/s", peers: 8 },
        { id: 3, name: "Fedora-35.iso", status: "Downloading", progress: 70, speed: "1.8 MB/s", peers: 15 },
        { id: 4, name: "ArchLinux-2025.iso", status: "Queued", progress: 0, speed: "0 MB/s", peers: 0 }
    ];

    // 每次刷新下载表格
    function refreshDownloadTable() {
        const tbody = document.getElementById("downloadsTable").getElementsByTagName("tbody")[0];
        tbody.innerHTML = ""; // 清空现有行
        downloadQueue.forEach(task => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${task.id}</td>
                <td>${task.name}</td>
                <td>${task.status}</td>
                <td>${task.progress}%</td>
                <td>${task.speed}</td>
                <td>${task.peers}</td>
                <td class="action-buttons">
                    <button onclick="pauseDownload(${task.id})">Pause</button>
                    <button onclick="resumeDownload(${task.id})">Resume</button>
                    <button onclick="cancelDownload(${task.id})">Cancel</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    // 操作按钮处理
    window.pauseDownload = function(id) {
        console.log("Pausing download id:", id);
        // 模拟更新状态
        downloadQueue = downloadQueue.map(task => {
            if(task.id === id) task.status = "Paused";
            return task;
        });
        refreshDownloadTable();
    };

    window.resumeDownload = function(id) {
        console.log("Resuming download id:", id);
        downloadQueue = downloadQueue.map(task => {
            if(task.id === id) task.status = "Downloading";
            return task;
        });
        refreshDownloadTable();
    };

    window.cancelDownload = function(id) {
        console.log("Cancelling download id:", id);
        downloadQueue = downloadQueue.filter(task => task.id !== id);
        refreshDownloadTable();
    };

    // 分页操作
    function setupPagination() {
        const paginationLinks = document.querySelectorAll(".pagination a");
        paginationLinks.forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                paginationLinks.forEach(lnk => lnk.classList.remove("active"));
                this.classList.add("active");
                // 这里可以根据页面点击加载对应的数据页
                console.log("Pagination link clicked:", this.textContent);
            });
        });
    }

    // 初始调用刷新函数
    refreshDownloadTable();
    setupPagination();
});

