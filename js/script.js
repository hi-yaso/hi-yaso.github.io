'use strict';

// 要素を取得
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// mouseenterイベントを登録
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))

// mouseleaveイベントを登録する
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))