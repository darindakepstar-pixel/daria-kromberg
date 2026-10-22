/* © 2026 Дария Кромберг */

/* ===== Ваши контакты: поменяйте здесь, и они обновятся по всему сайту ===== */
var CONFIG = {
  telegram: 'wlknalone',                       // ник в Telegram без @
  email: 'darindakepstar@gmail.com',           // почта для заявок
  vk: 'https://vk.ru/dariakromberg23'          // страница ВК
};

/* ===== Проекты: url — ссылка на живой сайт (оставьте '' если не нужно) ===== */
var PROJECTS = [
  {
    key: 'moon', name: 'Баббл <em>Муун Тии</em>', title: 'Баббл Муун Тии',
    short: 'Неоновый сайт баббл-ти кофейни с витриной напитков и полным меню',
    tags: ['Сайт', 'Оформление ВК', 'Концепт'],
    lead: 'Кофейня с неоновой вывеской и космосом на окнах. Перенесла этот вечерний неон в сайт: вывеска «зажигается» при открытии, напитки по очереди выплывают в витрине, а полное меню из 50+ позиций разложено по вкладкам. Отдельно — оформление группы ВК в том же стиле.',
    points: [['Витрина при прокрутке', 'Экран «прилипает», а напитки сменяют друг друга с неоновым названием на фоне'], ['Полное меню', 'Все составы, объёмы и цены, удобные вкладки на телефоне'], ['ВК в одном стиле', 'Обложка, кнопки меню, карточки товаров, закреп']],
    img: 'moon-d.webp', mob: 'moon-m.webp', vk: 'moon-vk.webp', url: ''
  },
  {
    key: 'kashtan', name: '<em>Каштан</em>', title: 'Каштан',
    short: 'Минималистичный сайт по мотивам их меню: витрина позиций, полное меню, атмосфера',
    tags: ['Сайт', 'Оформление ВК', 'Концепт'],
    lead: 'Новая кофейня с сильным минималистичным брендом. Логотип переведён в вектор, фирменные зелёные и горчичные квадраты из меню стали мотивом всего сайта. Статус «открыто / закрыто» считается по местному времени.',
    points: [['Бренд сохранён', 'Шрифт, цвета и квадраты — из их собственного меню'], ['Витрина напитков', 'Позиции сменяются при прокрутке, фон меняет цвет под напиток'], ['Комплект для ВК', 'Обложка, аватар, кнопки меню, карточки товаров']],
    img: 'kashtan-d.webp', mob: 'kashtan-m.webp', vk: 'kashtan-vk.webp', url: 'https://darindakepstar-pixel.github.io/kashtan_cafe/'
  },
  {
    key: 'lavka', name: 'Лавка <em>Цветочницы</em>', title: 'Лавка Цветочницы',
    short: 'Сайт-визитка цветочной лавки, которая живёт сарафанным радио, и новое оформление ВК',
    tags: ['Сайт', 'Оформление ВК', 'Концепт'],
    lead: 'У маленькой лавки не было сайта, а группа ВК была оформлена в разных стилях. Собрала тёплую «винтажную» визитку в цветах их логотипа: букеты, заказ в WhatsApp в один тап, адрес и карта.',
    points: [['Заказ в один тап', 'Каждая кнопка открывает WhatsApp с готовым текстом про конкретный букет'], ['Без лишнего', 'Ни корзины, ни регистрации — только то, что нужно маленькой лавке'], ['ВК в цветах логотипа', 'Обложка, кнопки меню, закреп и фото товаров']],
    img: 'lavka-d.webp', mob: 'lavka-m.webp', vk: 'lavka-vk.webp', url: ''
  },
  {
    key: 'cvet', name: '<em>Цветочный</em>', title: 'Цветочный',
    short: 'Редизайн интернет-магазина цветов: фирменный шрифт стал акцентом, а не шумом',
    tags: ['Редизайн', 'Концепт'],
    lead: 'У магазина рукописный шрифт стоял везде — в меню, кнопках и ценах. Оставила его как фишку только в заголовках, убрала градиенты и клипарт, вывела на главную хиты с ценами, подбор по бюджету и настоящие отзывы клиентов.',
    points: [['Фирменный шрифт — акцентом', 'Только крупные заголовки, всё остальное — спокойный гротеск'], ['Продающая главная', 'Хит недели, категории, подбор по цене'], ['Живое движение', 'Плавное появление блоков и парящие карточки']],
    img: 'cvet-d.webp', mob: 'cvet-m.webp', vk: '', url: ''
  }
];

(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  requestAnimationFrame(function () { document.body.classList.add('is-loaded'); });

  // Contacts
  var tg = 'https://t.me/' + CONFIG.telegram;
  document.getElementById('link-tg').href = tg;
  document.getElementById('link-mail').href = 'mailto:' + CONFIG.email;
  document.getElementById('link-vk').href = CONFIG.vk;

  // Works list
  var list = document.getElementById('works-list');
  PROJECTS.forEach(function (p, i) {
    var li = document.createElement('li');
    li.className = 'work reveal';
    li.innerHTML =
      '<button class="work__btn" type="button" data-i="' + i + '" aria-haspopup="dialog">' +
        '<span class="work__n">0' + (i + 1) + '</span>' +
        '<span class="work__t">' + p.name + '</span>' +
        '<span class="work__d">' + p.short + '<span class="work__tags">' + p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</span></span>' +
        '<span class="work__thumb"><img src="' + p.img + '" alt="" loading="lazy"></span>' +
        '<span class="work__arrow" aria-hidden="true">→</span>' +
      '</button>';
    list.appendChild(li);
  });

  // Hover preview follows the cursor
  var prev = document.getElementById('hover-prev'), prevImg = prev.querySelector('img');
  var mx = 0, my = 0, px = 0, py = 0, running = false;
  function loop() {
    px += (mx - px) * .14; py += (my - py) * .14;
    prev.style.transform = 'translate(' + (px + 24) + 'px,' + (py - 120) + 'px) rotate(' + Math.max(-8, Math.min(8, (mx - px) * .05)) + 'deg)';
    if (running) requestAnimationFrame(loop);
  }
  list.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
  list.querySelectorAll('.work__btn').forEach(function (b) {
    b.addEventListener('mouseenter', function (e) {
      prevImg.src = PROJECTS[+b.dataset.i].img; prev.classList.add('is-on');
      if (!running) { px = mx = e.clientX; py = my = e.clientY; running = true; loop(); }
    });
    b.addEventListener('mouseleave', function () { prev.classList.remove('is-on'); running = false; });
    b.addEventListener('click', function () { openCase(+b.dataset.i, b); });
  });

  // Case modal
  var modal = document.getElementById('modal'), body = document.getElementById('modal-body'), lastBtn = null;
  function openCase(i, btn) {
    var p = PROJECTS[i]; lastBtn = btn;
    body.innerHTML =
      '<div class="case__head"><h3 id="m-title">' + p.title + '</h3><div class="work__tags">' + p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div></div>' +
      '<p class="case__lead">' + p.lead + '</p>' +
      '<div class="case__grid"><img src="' + p.img + '" alt="Главный экран сайта ' + p.title + '"><img class="case__m" src="' + p.mob + '" alt="Мобильная версия ' + p.title + '">' +
      (p.vk ? '<img class="case__vk" src="' + p.vk + '" alt="Оформление группы ВК ' + p.title + '">' : '') + '</div>' +
      '<ul class="case__list">' + p.points.map(function (x) { return '<li><b>' + x[0] + '</b>' + x[1] + '</li>'; }).join('') + '</ul>' +
      '<div class="case__go">' + (p.url ? '<a class="btn btn--ink" href="' + p.url + '" target="_blank" rel="noopener">Открыть сайт ↗</a>' : '') +
      '<a class="btn btn--accent" href="#contact" data-close>Хочу так же</a></div>';
    modal.hidden = false; document.body.style.overflow = 'hidden';
    modal.querySelector('.modal__x').focus();
  }
  function closeCase() { modal.hidden = true; document.body.style.overflow = ''; if (lastBtn) lastBtn.focus(); }
  modal.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) closeCase(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) closeCase(); });

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) items.forEach(function (el) { el.classList.add('is-visible'); });
  else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  // ===== Scroll scene: haze title, surfacing words, header =====
  var header = document.getElementById('header');
  var hero = document.getElementById('top'), hazeT = document.getElementById('haze-title');
  var smokes = document.querySelectorAll('.smoke'), eyeWrap = document.getElementById('eye');
  var wordEls = [];
  document.querySelectorAll('[data-words]').forEach(function (el) {
    el.innerHTML = el.textContent.split(' ').map(function (w) { return '<span class="w">' + w + '</span>'; }).join(' ');
    wordEls = wordEls.concat(Array.prototype.slice.call(el.querySelectorAll('.w')));
  });
  function scene() {
    var y = window.scrollY, total = hero.offsetHeight - window.innerHeight;
    var p = Math.max(0, Math.min(1, y / total));
    var awake = document.body.classList.contains('is-awake');
    // title surfaces from the haze but stays hazy
    var tp = Math.min(1, p / .45);
    hazeT.style.setProperty('--ta', awake ? (.05 + tp * .32).toFixed(3) : 0);
    hazeT.style.setProperty('--tb', (14 - tp * 10).toFixed(1) + 'px');
    hazeT.style.setProperty('--ls', (.5 - tp * .22).toFixed(3) + 'em');
    smokes.forEach(function (s) { s.style.setProperty('--so', awake ? (.35 + tp * .5).toFixed(2) : 0); });
    eyeWrap.style.setProperty('--eye-s', (1 - p * .12).toFixed(3));
    // words appear one by one between 30% and 85% of the scene
    var n = wordEls.length, shown = Math.round(Math.max(0, Math.min(1, (p - .3) / .55)) * n);
    wordEls.forEach(function (w, i) { w.classList.toggle('is-in', i < shown); });
    header.classList.toggle('is-shown', awake && (y > window.innerHeight * .35));
  }
  window.addEventListener('scroll', function () { requestAnimationFrame(scene); }, { passive: true });
  window.addEventListener('resize', scene);
  new MutationObserver(scene).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  scene();

  // liquid-glass highlight follows the pointer
  document.addEventListener('pointermove', function (e) {
    var b = e.target.closest && e.target.closest('.btn'); if (!b) return;
    var r = b.getBoundingClientRect();
    b.style.setProperty('--gx', (e.clientX - r.left) + 'px'); b.style.setProperty('--gy', (e.clientY - r.top) + 'px');
  });
  // ===== Intro: code being typed, then the eye wakes up =====
  var intro = document.getElementById('intro'), codeEl = document.getElementById('intro-code');
  var LINES = [
    ['c', '// открываю глаза…'],
    ['', '<span class="k">const</span> artist = <span class="k">new</span> <span class="f">Vision</span>(<span class="s">\'Дария Кромберг\'</span>);'],
    ['', 'artist.palette = [<span class="s">\'ночь\'</span>, <span class="s">\'опал\'</span>, <span class="s">\'неон\'</span>];'],
    ['', '<span class="k">await</span> artist.<span class="f">paint</span>({ canvas: <span class="s">\'black\'</span> });'],
    ['', 'artist.<span class="f">code</span>(design).<span class="f">render</span>();']
  ];
  function wake() {
    if (document.body.classList.contains('is-awake')) return;
    intro.classList.add('is-done');
    document.body.classList.remove('is-intro');
    setTimeout(function () { document.body.classList.add('is-awake'); }, reduce ? 0 : 350);
  }
  function plain(html) { var d = document.createElement('div'); d.innerHTML = html; return d.textContent; }
  if (reduce) { intro.remove(); document.body.classList.add('is-awake'); }
  else {
    document.body.classList.add('is-intro');
    var li = 0, ci = 0, done = '';
    (function type() {
      if (li >= LINES.length) { codeEl.innerHTML = done + '<span class="caret"></span>'; setTimeout(wake, 650); return; }
      var cls = LINES[li][0], html = LINES[li][1], text = plain(html);
      ci++;
      // while typing show plain text; when a line finishes, swap in the highlighted version
      var cur = ci >= text.length ? (cls ? '<span class="' + cls + '">' + html + '</span>' : html) : text.slice(0, ci).replace(/</g, '&lt;');
      codeEl.innerHTML = done + cur + '<span class="caret"></span>';
      if (ci >= text.length) { done += (cls ? '<span class="' + cls + '">' + html + '</span>' : html) + '\n'; li++; ci = 0; setTimeout(type, 160); }
      else setTimeout(type, 16 + Math.random() * 22);
    })();
    document.getElementById('intro-skip').addEventListener('click', wake);
    intro.addEventListener('click', wake);
    document.addEventListener('keydown', function k(e) { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') { wake(); document.removeEventListener('keydown', k); } });
  }

  // ===== The eye: hover → it opens and reflects the projects =====
  var wrap = document.getElementById('eye'), eye = document.getElementById('eye-btn');
  var track = document.getElementById('eye-track'), label = document.getElementById('eye-label');
  var pupil = eye.querySelector('.eye__pupil'), refl = eye.querySelector('.eye__reflect'), shine = eye.querySelector('.eye__shine');
  PROJECTS.forEach(function (p, i) {
    var im = document.createElement('img'); im.src = p.img; im.alt = ''; if (!i) im.className = 'is-on'; track.appendChild(im);
  });
  var shots = track.querySelectorAll('img'), cur = 0, timer = null, openedAt = 0;
  function show(i) {
    cur = (i + PROJECTS.length) % PROJECTS.length;
    shots.forEach(function (s, k) { s.classList.toggle('is-on', k === cur); });
    label.innerHTML = PROJECTS[cur].title + ' →';
  }
  function open() {
    if (eye.classList.contains('is-open')) return;
    openedAt = Date.now();
    eye.classList.add('is-open'); wrap.classList.add('is-open'); document.getElementById('top').classList.add('is-open'); show(cur);
    timer = setInterval(function () { show(cur + 1); }, 1700);
  }
  function close() { eye.classList.remove('is-open'); wrap.classList.remove('is-open'); document.getElementById('top').classList.remove('is-open'); clearInterval(timer); }
  // mouse: open on hover; touch/pen: open on tap (see click), close when tapping elsewhere
  eye.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') open(); });
  eye.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') close(); });
  document.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse' && !eye.contains(e.target) && e.target !== label) close(); });
  eye.addEventListener('focus', open); eye.addEventListener('blur', function () { setTimeout(function () { if (!wrap.contains(document.activeElement)) close(); }, 0); });
  eye.addEventListener('click', function () {
    // on touch screens the first tap opens the eye, the next one opens the project
    if (!eye.classList.contains('is-open')) { open(); return; }
    if (Date.now() - openedAt < 600) return;
    openCase(cur, eye);
  });
  label.addEventListener('click', function (e) { e.preventDefault(); openCase(cur, eye); });

  // the eye "looks" toward the cursor + custom cursor ring
  var ring = document.createElement('div'); ring.className = 'eye-cursor'; ring.textContent = 'смотреть'; document.body.appendChild(ring);
  if (!reduce) {
    document.addEventListener('mousemove', function (e) {
      var r = eye.getBoundingClientRect();
      var dx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth, dy = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      var mx = Math.max(-1, Math.min(1, dx * 2)), my = Math.max(-1, Math.min(1, dy * 2));
      pupil.style.transform = 'translate(' + (mx * 6) + 'px,' + (my * 4) + 'px)';
      refl.style.transform = 'translate(' + (mx * 4) + 'px,' + (my * 3) + 'px)';
      shine.style.transform = 'translate(' + (mx * -5) + 'px,' + (my * -4) + 'px)';
      ring.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
    });
    eye.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') ring.classList.add('is-on'); });
    eye.addEventListener('pointerleave', function () { ring.classList.remove('is-on'); });
  }

  // Form chips
  document.querySelectorAll('.chips').forEach(function (g) {
    g.addEventListener('click', function (e) {
      var c = e.target.closest('.chip'); if (!c) return;
      if (g.hasAttribute('data-single')) g.querySelectorAll('.chip').forEach(function (x) { if (x !== c) x.setAttribute('aria-pressed', 'false'); });
      c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    });
  });
  document.querySelectorAll('[data-pick]').forEach(function (a) {
    a.addEventListener('click', function () {
      document.querySelectorAll('[data-group="type"] .chip').forEach(function (c) { c.setAttribute('aria-pressed', c.textContent === a.dataset.pick ? 'true' : 'false'); });
    });
  });

  // Form → Telegram / e-mail (nothing is stored on the site)
  var form = document.getElementById('order'), via = 'tg';
  form.querySelectorAll('[data-via]').forEach(function (b) { b.addEventListener('click', function () { via = b.dataset.via; }); });
  function picked(group) {
    return Array.prototype.map.call(form.querySelectorAll('[data-group="' + group + '"] [aria-pressed="true"]'), function (c) { return c.textContent; }).join(', ');
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var text = 'Здравствуйте, Дария! Заявка с сайта.\n' +
      (picked('type') ? 'Нужно: ' + picked('type') + '\n' : '') +
      (picked('budget') ? 'Бюджет: ' + picked('budget') + '\n' : '') +
      (f.name.value ? 'Имя: ' + f.name.value + '\n' : '') +
      (f.biz.value ? 'Проект: ' + f.biz.value + '\n' : '') +
      (f.msg.value ? '\n' + f.msg.value : '');
    if (via === 'mail') {
      location.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent('Заявка с сайта' + (f.biz.value ? ': ' + f.biz.value : '')) + '&body=' + encodeURIComponent(text);
      return;
    }
    var done = function () { document.getElementById('form-ok').hidden = false; window.open(tg, '_blank', 'noopener'); };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, done); else done();
  });
})();

/* ===== Код в дымке (футер): пиксельный дракон, восстающий из пепла, набирается строка за строкой ===== */
(function () {
  var pre = document.getElementById('ashcode');
  if (!pre) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches, visible = false;
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { rootMargin: '200px' }).observe(pre.parentNode);
  else visible = true;
  var DRAGON = [
    '.....................h...h..........f.y.....',
    '.....................hb..hb........fyf.y....',
    'v.....................bbbbb.......ffy.f.....',
    'vv...................bbbebbbb....fyf........',
    '.vv.................bbbbbbbbbbbff...........',
    '.vwv................bbbbbaabbbf.........v...',
    '..vwv...............bbbb...aa..........vv...',
    '..vwwv...............bbbb.............vwv...',
    '...vwwv...............bbb............vwwv...',
    '...vwwwv..............bbbb..........vwwv....',
    '....vwwwv..............bbb.........vwwwv....',
    '....vwwwwv.............bbbb.......vwwwv.....',
    '.....vwwwwv.............bbb......vwwwwv.....',
    '.....vwwwwwv...........cbbb.....vwwwwv......',
    '......vwwwwwv.........ccbbb....vwwwwwv......',
    '......vwwwwwwv.......ccbbbbb..vwwwwwv.......',
    '.......vwwwwwwvv....ccbbbbbbbvwwwwwwv.......',
    '.......vwwwwwwwwvv.ccbbbbbbbbbwwwwwv........',
    '........vwwwwwwwwwbcbbbbbbbbbwwwwwv.........',
    '........vwwvwwwvwwbcbbbbbbbbbwwvwwv.........',
    '.........vv.vwv.vvbccbbbbbbbbvv.vv..........',
    '..........v..v....bccbbbbbbbb...............',
    '..................bccbbbbbbab...............',
    '..................bbccbbbbbab...............',
    '.................bb.ccbbbbab.bb.............',
    '................bb..bccbbbb...bb............',
    '...............hh...bbcbbbb....hh...........',
    '.....................bbbbbb.................',
    '......................bbbbb.................',
    '.......................bbbb.................',
    '........................bbb.................',
    '........................bbb.................',
    '.......................bbb..................',
    '......................bbb...................',
    '....................bbbb....................',
    '..................bbbb......................',
    '.................bbb........................',
    '.................bb.........................',
    '..................bb........................',
    '...................bhh......................'
  ];
  var CODE = [
    '// rise.js — пиксельный дракон, восстающий из пепла',
    '// © Дария Кромберг',
    '',
    "const ASH = '#3a3646', EMBER = '#ffaa5a';",
    'const PALETTE = {',
    "  b: '#7c6bff', a: '#463a82', c: '#b9f0e6', e: '#e7c27a',",
    "  f: '#ffaa5a', y: '#ffe08a', h: '#dcd7f0', w: '#342c64', v: '#96c8e6'",
    '};',
    '',
    'const DRAGON = ['
  ].concat(DRAGON.map(function (r) { return "  '" + r + "',"; })).concat([
    '];',
    '',
    'function rise(ctx, t) {',
    '  for (const p of pixels(DRAGON)) {',
    '    const k = ease(clamp((t - p.delay) / 1100));   // пепел → искра → чешуя',
    '    const x = lerp(p.ashX, p.x, k), y = lerp(p.ashY, p.y, k);',
    '    ctx.fillStyle = mix(EMBER, PALETTE[p.ch], k * k);',
    '    ctx.fillRect(x * SIZE, y * SIZE, SIZE, SIZE);',
    '  }',
    '}',
    '',
    'function live(ctx, t) {',
    '  const flap = 1 - .4 * Math.sin(t / 210) ** 2;    // взмах крыльев',
    '  for (const p of pixels(DRAGON)) {',
    '    if (p.ch === \'f\' && Math.random() < .25) continue;   // огонь дрожит',
    '    const y = p.wing ? SHOULDER + (p.y - SHOULDER) * flap : p.y;',
    '    ctx.fillStyle = PALETTE[p.ch];',
    '    ctx.fillRect(p.x * SIZE, Math.round(y) * SIZE, SIZE, SIZE);',
    '  }',
    '}',
    '',
    'function fall(ctx, t) {',
    '  // и снова в пепел — чтобы однажды подняться',
    '  for (const p of pixels(DRAGON)) {',
    '    const k = clamp((t - p.y * 22) / 1400);',
    '    ctx.globalAlpha = 1 - k;',
    '    ctx.fillStyle = mix(PALETTE[p.ch], ASH, k);',
    '    ctx.fillRect(p.x * SIZE, (p.y + k * k * 30) * SIZE, SIZE, SIZE);',
    '  }',
    '}',
    '',
    'animate(rise, 2800).then(() => animate(live, 7000)).then(() => animate(fall, 2200));',
    '',
    ''
  ]);
  function esc(t) { return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function hl(line) {
    var ci = line.indexOf('//'), code = ci >= 0 ? line.slice(0, ci) : line, com = ci >= 0 ? line.slice(ci) : '';
    code = esc(code).replace(/'[^']*'/g, function (m) { return '<span class="s">' + m + '</span>'; })
      .replace(/\b(const|function|for|of|if|continue|return)\b/g, '<span class="k">$1</span>');
    return code + (com ? '<span class="c">' + esc(com) + '</span>' : '');
  }
  // typing: the code is written line by line in the haze, then starts over
  pre.innerHTML = '<span class="ashcode__in"></span><span class="ashcode__caret"></span>';
  var out = pre.firstChild, caret = pre.lastChild, li = 0, ci = 0, done = '';
  if (reduce) { out.innerHTML = CODE.map(hl).join('\n'); caret.remove(); }
  else (function type() {
    if (!visible) { setTimeout(type, 600); return; }
    var line = CODE[li];
    if (ci <= line.length) {
      out.innerHTML = done + hl(line.slice(0, ci));
      out.appendChild(caret);
      var ch = line[ci - 1], sprite = /^  '[.a-z]+',$/.test(line);
      ci += sprite ? 4 : 1 + (Math.random() < .35 ? 1 : 0);
      setTimeout(type, sprite ? 16 : ch === ' ' ? 18 : 22 + Math.random() * 34);
    } else {
      done += hl(line) + '\n'; li++; ci = 0;
      if (li >= CODE.length) {
        caret.classList.add('is-run');
        setTimeout(function () { runDragon(function () {
          pre.classList.add('is-fading');
          setTimeout(function () { done = ''; li = 0; out.innerHTML = ''; caret.classList.remove('is-run'); pre.classList.remove('is-fading'); type(); }, 1400);
        }); }, 900);
        return;
      }
      setTimeout(type, line === '' ? 120 : /^  '/.test(line) ? 40 : 180 + Math.random() * 260);
    }
  })();

  // the result: a small pixel dragon rises from embers next to the code, then turns back to ash
  var dc = document.createElement('canvas'); dc.className = 'ashdragon'; dc.setAttribute('aria-hidden', 'true');
  pre.parentNode.insertBefore(dc, pre.nextSibling);
  var dx = dc.getContext('2d'), PIX = [], S = 4;
  var PAL = { b: '#7c6bff', a: '#463a82', c: '#b9f0e6', e: '#e7c27a', f: '#ffaa5a', y: '#ffe08a', h: '#dcd7f0', w: '#342c64', v: '#96c8e6' };
  DRAGON.forEach(function (row, y) {
    for (var x = 0; x < row.length; x++) if (row[x] !== '.') PIX.push({ x: x, y: y, ch: row[x], wing: row[x] === 'w' || row[x] === 'v',
      ax: x + (Math.random() - .5) * 16, ay: 41 + Math.random() * 2, delay: (39 - y) / 39 * 1500 + Math.random() * 450, fx: (Math.random() - .5) * 6 });
  });
  function hex(c) { return [1, 3, 5].map(function (i) { return parseInt(c.slice(i, i + 2), 16); }); }
  function mix(a, b, k) { a = hex(a); b = hex(b); return 'rgb(' + [0, 1, 2].map(function (i) { return Math.round(a[i] + (b[i] - a[i]) * k); }).join(',') + ')'; }
  function clamp(k) { return k < 0 ? 0 : k > 1 ? 1 : k; }
  function px(x, y, col, a, sz) { sz = sz || S; dx.globalAlpha = a; dx.fillStyle = col; dx.fillRect(Math.round(x * S + (S - sz) / 2), Math.round(y * S + (S - sz) / 2), sz, sz); }
  function runDragon(after) {
    var dpr = Math.min(2, window.devicePixelRatio || 1), cssS = window.innerWidth < 700 ? 3 : 5;
    S = cssS * dpr; dc.width = 44 * S; dc.height = 44 * S; dc.style.width = 44 * cssS + 'px'; dc.style.height = 44 * cssS + 'px';
    dc.classList.add('is-on');
    var t0 = performance.now(), RISE = 2800, LIVE = 6000, FALL = 2400;
    (function frame(now) {
      var t = now - t0; dx.clearRect(0, 0, dc.width, dc.height);
      if (t < RISE) PIX.forEach(function (p) {
        var k = 1 - Math.pow(1 - clamp((t - p.delay) / 1100), 3);
        if (k <= 0) { if (Math.random() < .3) px(p.ax, p.ay, '#ffaa5a', .5, S * .5); return; }
        px(p.ax + (p.x - p.ax) * k + Math.sin(k * 6 + p.fx) * (1 - k) * 1.2, p.ay + (p.y - p.ay) * k,
          k < 1 ? mix('#ffaa5a', PAL[p.ch], k * k) : PAL[p.ch], .35 + k * .65, k < 1 ? S * (.5 + k * .5) : S);
      });
      else if (t < RISE + LIVE) {
        var lt = t - RISE, flap = 1 - .42 * Math.pow(Math.sin(lt / 210), 2);
        PIX.forEach(function (p) {
          if ((p.ch === 'f' || p.ch === 'y') && Math.random() < .25) return;
          px(p.x, Math.round(p.wing ? 17 + (p.y - 17) * flap : p.y), PAL[p.ch], 1);
        });
      } else if (t < RISE + LIVE + FALL) {
        var ft = t - RISE - LIVE;
        PIX.forEach(function (p) {
          var k = clamp((ft - p.y * 22 - Math.random() * 60) / 1400);
          px(p.x + p.fx * k, p.y + k * k * (42 - p.y), mix(PAL[p.ch], '#3a3646', Math.min(1, k * 1.6)), 1 - k * .9);
        });
      } else { dx.clearRect(0, 0, dc.width, dc.height); dc.classList.remove('is-on'); after(); return; }
      dx.globalAlpha = 1; requestAnimationFrame(frame);
    })(t0);
  }
})();
