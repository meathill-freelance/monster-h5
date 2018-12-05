import './styl/preloader.styl';

import Wukong from 'wukong/wukong';

/* global BASE_PATH */

const wukong = new Wukong({
  loading: '#loading',
  progress: '#progress',
});

const assets = [
  [
    '//unpkg.com/director@1.2.8/build/director.min.js',
    {
      src: './img/bg.jpg',
      onload(event) {
        document.body.style.backgroundImage = 'url(./img/bg.jpg)';
      },
    },
    {
      id: 'slogan',
      src: './img/slogan.png',
    },
    {
      id: 'monster',
      src: './img/monster.png',
    },
    {
      id: 'btn',
      src: './img/btn.png',
    },
    {
      id: 'bg2',
      src: './img/bg2.png',
    },
    {
      id: 'result-1',
      src: './img/result1.png',
    },
  ],
];

wukong.load(assets);