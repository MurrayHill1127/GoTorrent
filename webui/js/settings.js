// js/settings.js

/**
 * settings.js - Manages the interactive behavior of the Settings page.
 * 包括读取当前配置、绑定事件、保存设置以及显示反馈信息。
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("Settings.js loaded at " + new Date().toLocaleString());

    // 模拟从后端加载现有设置（使用全局设置变量）
    function loadSettings() {
        document.getElementById("proxyAddress").value = "http://proxy.example.com:8080";
        document.getElementById("timeout").value = 30;
        document.getElementById("downloadPath").value = "/downloads";
        document.getElementById("maxDownloadSpeed").value = 1024;
        document.getElementById("maxUploadSpeed").value = 256;
        document.getElementById("maxDownloads").value = 3;
        document.getElementById("logLevel").value = "info";
        document.getElementById("cacheSize").value = 128;
        document.getElementById("backupServer").value = "http://backup.example.com";
        document.getElementById("customParams").value = "--verbose --retry 3";
        document.getElementById("themeSelect").value = "light";
        document.getElementById("fontSize").value = 14;
        document.getElementById("enableAnimations").checked = true;
        document.getElementById("enableIPv6").checked = false;
        document.getElementById("enableEncryption").checked = true;
    }

    loadSettings();

    // 绑定保存设置按钮事件
    document.getElementById("saveSettings").addEventListener("click", function() {
        // 收集所有设置值
        let settings = {
            proxyAddress: document.getElementById("proxyAddress").value,
            timeout: document.getElementById("timeout").value,
            downloadPath: document.getElementById("downloadPath").value,
            maxDownloadSpeed: document.getElementById("maxDownloadSpeed").value,
            maxUploadSpeed: document.getElementById("maxUploadSpeed").value,
            maxDownloads: document.getElementById("maxDownloads").value,
            logLevel: document.getElementById("logLevel").value,
            cacheSize: document.getElementById("cacheSize").value,
            backupServer: document.getElementById("backupServer").value,
            customParams: document.getElementById("customParams").value,
            themeSelect: document.getElementById("themeSelect").value,
            fontSize: document.getElementById("fontSize").value,
            enableAnimations: document.getElementById("enableAnimations").checked,
            enableIPv6: document.getElementById("enableIPv6").checked,
            enableEncryption: document.getElementById("enableEncryption").checked
        };

        console.log("Saving settings:", settings);
        // 模拟 Ajax 提交，延迟1秒后显示保存成功信息
        setTimeout(function() {
            document.getElementById("saveStatus").textContent = "Settings saved successfully at " + new Date().toLocaleTimeString();
        }, 1000);
    });

    // 绑定重置按钮事件
    document.getElementById("resetSettings").addEventListener("click", function() {
        if(confirm("Are you sure you want to reset settings to default values?")) {
            loadSettings();
            document.getElementById("saveStatus").textContent = "Settings reset to defaults.";
            console.log("Settings have been reset.");
        }
    });
});

