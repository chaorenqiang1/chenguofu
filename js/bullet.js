// 函数用于创建新的弹幕
function createDanmaku(text) {
    // Create a new danmaku element
    var danmaku = document.createElement("div");
    danmaku.classList.add("danmaku");
    danmaku.innerText = text;

    // 设置danmaku位置到容器的右边缘
    danmaku.style.right = "0";

    // 设置danmaku顶部位置为0到容器高度之间的随机值
    var container = document.querySelector(".danmaku-container");
    danmaku.style.top = Math.floor(Math.random() * container.offsetHeight) + "px";

    // 添加danmaku到容器
    container.appendChild(danmaku);

    // 将danmaku动画到容器的左边缘
    var animationDuration = 10000; // 10 秒
    var danmakuWidth = danmaku.offsetWidth;
    var containerWidth = container.offsetWidth;
    var distance = containerWidth + danmakuWidth;
    var duration = (distance / containerWidth) * animationDuration;
    danmaku.style.transition = "transform " + duration + "ms linear";
    danmaku.style.transform = "translateX(-" + distance + "px)";

    // 动画完成后从容器中移除弹幕
    setTimeout(function() {
        danmaku.remove();
    }, duration);
}

// 函数生成随机弹幕文本
function generateDanmakuText() {
    var texts = ["陈果夫故居，英式风情浓郁，值得一看", "花园小别墅，历史韵味十足，推荐游览！",  "建筑设计独特，风格鲜明，令人赞叹", "旧居保存完好，感受历史沧桑，不虚此行", "英式乡村建筑风格，别具一格，印象深刻", "历史悠久，文化底蕴深厚，值得细细品味", "古典主义特征，彰显建筑之美，令人陶醉","室内装饰简朴，功能划分合理，学习历史的好地方","红砖黑木，色彩搭配和谐，犹如艺术品","故居游览，受益匪浅","感受历史建筑的韵味"," 一段历史，一座建筑，陈果夫故居值得一游","建筑与历史的融合","建筑精美绝伦","感受民国风貌"];
    var index = Math.floor(Math.random() * texts.length);
    return texts[index];
}

// 每2秒生成一个新的弹幕
setInterval(function() {
    var text = generateDanmakuText();
    createDanmaku(text);
}, 1000);