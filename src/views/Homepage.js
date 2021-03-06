import Base from 'wukong/View.abstract';

export default class Homepage extends Base {
  constructor(el, queue) {
    super(el, queue, {
      id: 'homepage',
      className: 'homepage container',
    });
  }

  createElement(options) {
    const el = super.createElement(options);

    const slogan = this.queue.getResult('slogan');
    slogan.className = 'slogan animated fadeInDown';
    el.appendChild(slogan);

    const monster = this.queue.getResult('monster');
    monster.className = 'monster animated heartBeat';
    el.appendChild(monster);

    const p = document.createElement('p');
    p.innerHTML = '每个人身体里都住着一只小怪兽，<br>你的怪兽DNA由什么组成？<br>暴躁、粘人、天真、好奇…';
    p.className = 'info animated fadeInUp';
    el.appendChild(p);

    const link = document.createElement('div');
    link.className = 'start-link fadeIn animated';
    const a = document.createElement('a');
    a.className = 'start-button';
    a.href = '#/select';
    const bgUrl = this.getAssetUrl('btn');
    a.style.backgroundImage = `url(${bgUrl})`;
    link.appendChild(a);
    el.appendChild(link);

    return el;
  }
}
