// ==UserScript==
// @name         力扣转Markdown
// @name:en      LeetCode to Markdown
// @namespace    https://gabrielxd.top/
// @version      1.3.0
// @description  转换力扣为Markdown格式并复制到剪贴板
// @description:en  Convert the LeetCode problems to markdown and copy it to the clipboard.
// @author       GabrielxD、 BUGHERE
// @match        *://leetcode.cn/problems/*
// @exclude      *://leetcode.cn/problems/*/solutions/*
// @exclude      *://leetcode.cn/problems/*/discussion/*
// @exclude      *://leetcode.cn/problems/*/submissions/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAADSGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE3LTA0LTIxVDE5OjA0OjcyPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5QaXhlbG1hdG9yIDMuNjwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj41PC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTAyNDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTAyNDwvZXhpZjpQaXhlbFlE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
// @require      https://unpkg.com/turndown/dist/turndown.js
// @require      https://cdn.jsdelivr.net/npm/msg-alert@1.0.0-beta.2/dist/msg-alert.min.js
// @grant        GM_setClipboard
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @license 	 MIT
// ==/UserScript==

// 添加复制按钮样式
GM_addStyle(`
.copy-btns { display: inline-block; }

.copy-btns > button {
    margin-left: 10px;
    padding: 3px;
    vertical-align: middle;
    font-size: 12px;
    background: transparent;
    border: none;
    border-radius: 3px;
    box-shadow: inset 0px 0px 0px 1px green;
    color: green;
    cursor: pointer;
    outline: none;
}`);

// HTML转MD工具
const turndownService = new TurndownService({
  emDelimiter: '*',
  bulletListMarker: '-'
});
turndownService.addRule('strikethrough', {
  filter: ['pre'],
  replacement: (content, node) => '\n```txt\n' + node.innerText.trim() + '\n```\n'
});
turndownService.addRule('strikethrough', {
  filter: ['sup'],
  replacement: content => '^' + content
});

// 接收HTML字符串转成Markdown格式
const htmlToMd = htmlStr => {
  console.log('转换开始...');
  return turndownService.turndown(htmlStr.replace(/<p>&nbsp;<\/p>/g, '<br>'));
}

// 查询到的节点缓存在变量中
let titleEle, descEle, codeEle, languageEle;
const getTitleMd = () => htmlToMd(titleEle.innerText);
const getDescMd = () => htmlToMd(descEle.innerHTML).replaceAll(" ", " ").replaceAll("​", "").replaceAll("   ", " ").replaceAll("[\\n\\s ​]{3,}", "\n\n");
const getCodeMd = () => '```' + languageEle.innerText.toLowerCase() + '\n' + codeEle.innerText.replaceAll(" ", " ") + '\n```\n';
const getLanguageMd = () => htmlToMd(languageEle.innerText);

// 生成博客并复制
const copyAsBlogBtn = document.createElement('button');
copyAsBlogBtn.innerText = '生成博客';
copyAsBlogBtn.addEventListener('click', copySolnTmplHandler);
GM_registerMenuCommand("生成博客", copySolnTmplHandler);
// 放入功能按钮
const copyBtnEle = document.createElement('div');
copyBtnEle.className = 'copy-btns';
copyBtnEle.appendChild(copyAsBlogBtn);

// 重试计数器
let retryCounter = 0;

// 初始化元素
function initElements(targetEle) {
  titleEle = targetEle.querySelector('div.text-title-large');
  descEle = targetEle.querySelector('div.elfjS');
  codeEle = targetEle.querySelector('div.lines-content');  // TODO：只能复制当前视图包含的代码，无法复制所有代码
  languageEle = targetEle.querySelector('div#editor').querySelector('button.rounded');
  titleEle.parentElement.appendChild(copyBtnEle);
}

function firstInit() {
  const targetEle = document.querySelector('div[id=qd-content]');
  if (targetEle && targetEle.querySelector('div.text-title-large') !== null
    && targetEle.querySelector('div.elfjS') !== null
    && targetEle.querySelector('div.lines-content') !== null
    && targetEle.querySelector('div#editor').querySelector('button.rounded') !== null) {
    initElements(targetEle);
  } else {
    if (retryCounter++ > 10) {
      console.log('获取元素失败, 重试次数过多, 请刷新页面重试或关闭此脚本.');
      message.error({
        text: '获取元素失败, 重试次数过多, 请刷新页面重试或关闭此脚本.',
        duration: 2000
      });
    } else {
      console.log('获取元素失败, 200ms后重新获取...');
      setTimeout(init, 200);
    }
  }
}

const init = () => {
  // 监听tab栏变化
  const observer = new MutationObserver((mutationList, observer) => {
    mutationList.forEach((mutation) => {
      const tabEle = mutation.addedNodes[0];
      if (mutation.type == 'childList' &&
        typeof (tabEle?.className) === 'string' &&
        tabEle.className.startsWith('description')) {
        initElements(tabEle);
      }
    });
  });
  observer.observe(document.body, {childList: true, subtree: true});
  firstInit();
}

function copySolnTmplHandler() {
  let title = getTitleMd();
  title = title.includes('.') ? title.substring(title.lastIndexOf('.') + 2) : title
  GM_setClipboard(`### [${title}](${location.href})\n\n${getDescMd()}\n\n#### ${getLanguageMd()}\n\n${getCodeMd()}`);
    message.success({
        text: '复制成功',
        duration: 800
    });
}

(() => {
    'use strict';
    window.addEventListener('load', init);
})();