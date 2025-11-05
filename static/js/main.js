// ====== 字幕效果 ======
const subtitles = [
  {
    cn: "岚岚，不知道从哪一天开始，你就悄悄住进了我的心里。\
        在喜欢上你之前，我遇到过更漂亮的女孩，也遇到过更聪慧的女孩，\
        可那些都不是你。"
  },
  {
    cn: "说来也奇怪，从我们相识，到后来渐渐熟悉，\
        我印象最深的，不是你最精致的一面，而是那个有点狼狈的你——\
        是夏天刚从温室里出来，身上还带着些汗水和泥土的你；\
        是早上赶实验，来不及梳头的你；\
        是忙碌了一整天，脸上挂着疲倦的神情的你。\
        可我偏偏就喜欢这样的你，真实、认真而又真诚。"
  },
  {
    cn: "也许是在那次打麻将的时候开始，\
        我突然意识到自己动心了。\
        后来每一次遇见你，都变成了我一天里最期待的时刻。\
        我曾经试着藏起这份爱意，毕竟我明年可能就要离开，\
        可喜欢从来藏不住——就像那天我放的那首《想见你》一样，\
        我想见的，是每一个清晨与黄昏里真实的你。"
  },
  {
    cn: "岚岚,我没有太多惊天动地的情话，\
        但我想做那个，让你安心、信任也能时刻为你兜底的人。\
        我可能不能每天让你笑，但我一定不让你掉泪；\
        相处中很多事情难免会产生矛盾，\
        但是不论你错，还是我错，我都会先说对不起；\
        我不敢轻易说天长地久，那样觉得太轻浮，\
        但是我只希望，我们能有一个机会，让我们再靠近一点，\
        让我们，彼此再多了解一点。"
  }
];


let index = 0;
const subtitleBox = document.getElementById("subtitleBox");

function typeLine(text, callback) {
  const line = document.createElement("div");
  line.className = "subtitle-line cn";
  subtitleBox.appendChild(line);

  let i = 0;
  const interval = setInterval(() => {
    line.innerHTML = text.substring(0, i++) + "<span class='cursor'>|</span>";
    if (i > text.length) {
      clearInterval(interval);
      line.innerHTML = text; // 显示完整文字
      setTimeout(callback, 1200); // 段落之间延迟
    }
  }, 150); // 打字速度
}

function showSubtitle() {
  if (index >= subtitles.length) return;
  const current = subtitles[index];
  typeLine(current.cn, () => {
    index++;
    setTimeout(showSubtitle, 800);
  });
}

setTimeout(showSubtitle, 2500);

// ====== 流星雨效果 ======
const rainWrap = document.getElementById('rain');
const rainCount = 150; // 流星数量，可自行调节

for (let i = 0; i < rainCount; i++) {
    const rain = document.createElement('div');
    rain.classList.add('rain');

    // 随机位置、大小、角度、速度
    const left = Math.random() * 100; // 百分比位置
    const height = 2 + Math.random() * 10; // vh
    const width = 0.5 + Math.random() * 2; // px
    const angle = 10 - Math.random() * -10; // -10~-20度
    const duration = 3 + Math.random() * 2; // 秒
    const delay = Math.random() * 7; // 秒

    // 应用随机属性
    rain.style.left = `${left}%`;
    rain.style.height = `${height}vh`;
    rain.style.width = `${width}px`;
    rain.style.setProperty('--angle', `${angle}deg`);
    rain.style.animationDuration = `${duration}s`;
    rain.style.animationDelay = `${delay}s`;

    rainWrap.appendChild(rain);
}

// ====== 背景音乐控制 ======
//const video = document.getElementById('bgMusic');
//const button = document.getElementById('playButton');

//button.addEventListener('click', () => {
    //video.currentTime = 49;
    //video.play();
    //button.style.display = 'none';
//});

window.addEventListener('load', () => {
    const bgMusic = document.getElementById('bgMusic');

    // 等待音频元数据加载完毕后再设置播放时间
    bgMusic.addEventListener('loadedmetadata', () => {
        bgMusic.currentTime = 49; // 从第15秒开始
        bgMusic.play(); // 自动播放
    });
});
