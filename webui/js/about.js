// js/about.js

/**
 * about.js - Handles interactivity on the About page.
 * 包括团队成员动画、滚动效果以及额外的交互反馈。
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("About.js loaded at " + new Date().toLocaleString());
    
    // 团队成员动画效果
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach((member, index) => {
        member.style.opacity = 0;
        member.style.transform = "translateY(50px)";
        setTimeout(function() {
            member.style.transition = "all 0.6s ease-out";
            member.style.opacity = 1;
            member.style.transform = "translateY(0)";
        }, index * 400);
    });

    // 监听滚动事件，动态显示更多关于信息
    window.addEventListener("scroll", function() {
        const milestones = document.getElementById("milestones");
        if(milestones) {
            let rect = milestones.getBoundingClientRect();
            if(rect.top < window.innerHeight && rect.bottom >= 0) {
                milestones.style.transition = "opacity 1s ease-in";
                milestones.style.opacity = 1;
            }
        }
    });
    
    // 模拟获取来自服务器的额外关于数据
    setTimeout(function() {
        console.log("Fetching additional about data...");
        // 模拟数据加载
        const extraData = "Extra details about GoTorrent's mission, vision, and future roadmap are now available.";
        let infoSection = document.getElementById("moreInfo");
        if(infoSection) {
            let newPara = document.createElement("p");
            newPara.textContent = extraData;
            infoSection.appendChild(newPara);
        }
    }, 2000);
});

