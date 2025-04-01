// js/app.js

/**
 * Global Application Script for GoTorrent Web UI
 * 负责全局的初始化、导航栏状态控制和页面切换等功能。
 */

/* 初始化全局日志记录 */
(function() {
    console.log("Global App.js loaded at " + new Date().toLocaleString());
})();

/* 导航栏高亮处理 */
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-list li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            navLinks.forEach(lnk => lnk.classList.remove("active"));
            event.target.classList.add("active");
        });
    });
});

/* 全局错误处理 */
window.onerror = function(message, source, lineno, colno, error) {
    console.error("Error occurred: " + message + " at " + source + ":" + lineno + ":" + colno);
    return false;
};

/* 公共辅助函数 */
function ajaxGet(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                callback(null, xhr.responseText);
            } else {
                callback("Error: " + xhr.status);
            }
        }
    };
    xhr.send();
}

function ajaxPost(url, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                callback(null, xhr.responseText);
            } else {
                callback("Error: " + xhr.status);
            }
        }
    };
    xhr.send(JSON.stringify(data));
}

/* 模拟全局设置存储 */
let globalSettings = {
    theme: "light",
    fontSize: 14,
    enableAnimations: true,
    lastUpdated: new Date().toLocaleString()
};

console.log("Global settings:", globalSettings);

