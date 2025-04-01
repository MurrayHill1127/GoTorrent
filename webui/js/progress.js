// js/progress.js

/**
 * progress.js - Handles the progress page functionality.
 * 包括图表初始化、定时刷新下载统计数据、更新实时日志和调试信息。
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("Progress.js loaded at " + new Date().toLocaleString());

    // 初始化 Chart.js 图表
    const ctx = document.getElementById("progressChart").getContext("2d");
    const progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: generateLabels(10),
            datasets: [{
                label: 'Download Progress (%)',
                data: generateRandomData(10),
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    // 生成随机数据辅助函数
    function generateRandomData(count) {
        let data = [];
        for(let i = 0; i < count; i++) {
            data.push(Math.floor(Math.random() * 100));
        }
        return data;
    }

    // 生成标签辅助函数
    function generateLabels(count) {
        let labels = [];
        for(let i = 0; i < count; i++) {
            labels.push("T-" + i);
        }
        return labels;
    }

    // 模拟定时更新图表数据和统计信息
    setInterval(function() {
        let newData = generateRandomData(10);
        progressChart.data.datasets[0].data = newData;
        progressChart.update();

        // 更新统计数据
        document.getElementById("totalDownloads").textContent = Math.floor(Math.random() * 100);
        document.getElementById("completedDownloads").textContent = Math.floor(Math.random() * 50);
        document.getElementById("averageSpeed").textContent = (Math.random() * 2 + 1).toFixed(1) + " MB/s";
        document.getElementById("activePeers").textContent = Math.floor(Math.random() * 20);
        document.getElementById("estimatedTime").textContent = formatTime(Math.floor(Math.random() * 3600));
        document.getElementById("errorCount").textContent = Math.floor(Math.random() * 10);

        // 更新实时日志
        let logContent = document.getElementById("logContent");
        let currentTime = new Date().toLocaleTimeString();
        logContent.textContent += `\n[${currentTime}] Updated progress data.`;
    }, 5000);

    // 格式化秒数为 HH:MM:SS
    function formatTime(seconds) {
        let h = Math.floor(seconds / 3600);
        let m = Math.floor((seconds % 3600) / 60);
        let s = seconds % 60;
        return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    }
});

