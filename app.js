/* hitisha's little world — router + scrapbook page renderers. Content lives in content.js */
(function () {
  const S = window.SITE;
  const main = document.getElementById('main');
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const name = `${S.about.firstName} ${S.about.lastName}`;
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
  const ext = (h) => /^https?:/.test(h) ? ' target="_blank" rel="noopener"' : '';
  const R = ['-3deg', '2deg', '-1.5deg', '2.5deg', '-2deg', '1.5deg', '-2.5deg', '1deg'];
  const rot = (i) => R[i % R.length];
  const TAPES = ['', 'blue', 'beige', 'mint', 'plum'];
  const tape = (i, pos = '') => `<span class="tape ${TAPES[i % TAPES.length]} ${pos}" aria-hidden="true"></span>`;
  const NOTE = ['', 'pink', 'sky', 'mint'];
  const COLORS = ['var(--pink)', 'var(--plum)', 'var(--cobalt)', 'var(--ember)'];
  const SOFT = ['var(--blush)', 'var(--sky)', 'var(--butter)', 'var(--mint)'];

  /* hand-drawn doodles (decorative) */
  const P = {
    arrow: ['0 0 120 60', 'M6 44 C 34 8, 78 4, 108 30|M92 16 L109 31 L90 38'],
    circle: ['0 0 200 100', 'M30 18 C 90 -4, 190 10, 192 50 C 194 92, 40 100, 10 60 C -8 34, 40 14, 120 10'],
    underline: ['0 0 300 20', 'M4 12 C 60 2, 120 18, 180 8 S 270 6, 296 12'],
    star: ['0 0 60 60', 'M30 4 L37 23 L57 24 L41 36 L47 56 L30 44 L13 56 L19 36 L3 24 L23 23 Z'],
    heart: ['0 0 52 48', 'M26 44 C 4 30, 0 14, 10 7 C 18 1, 25 8, 26 14 C 27 8, 34 1, 42 7 C 52 14, 48 30, 26 44 Z'],
    swirl: ['0 0 160 80', 'M6 60 C 30 10, 70 10, 60 40 C 52 64, 30 50, 50 30 C 70 10, 120 10, 150 40|M136 28 L151 41 L134 47']
  };
  const doodle = (k, cls = '', stretch = false) => `<svg class="doodle draw ${cls}" viewBox="${P[k][0]}"${stretch ? ' preserveAspectRatio="none"' : ''} aria-hidden="true" focusable="false">${P[k][1].split('|').map((d) => `<path pathLength="1" d="${d}"/>`).join('')}</svg>`;
  const clip = `<svg class="clip" viewBox="0 0 28 64" aria-hidden="true" focusable="false"><path d="M9 20 V48 a6 6 0 0 0 12 0 V12 a9 9 0 0 0 -18 0 V46" fill="none" stroke="#7c828c" stroke-width="3" stroke-linecap="round"/></svg>`;

  const phead = (kick, title, em, lede, i = 0) => `
    <header class="phead wrap">
      <p class="kick">${esc(kick)}</p>
      <h1>${esc(title)} <em>${esc(em)}</em>${doodle('underline', 'under', true)}</h1>
      ${lede ? `<p class="lede">${esc(lede)}</p>` : ''}
    </header>`;

  const pager = (list, i, base, label) => {
    const prev = list[(i - 1 + list.length) % list.length];
    const next = list[(i + 1) % list.length];
    return `<nav class="pager wrap" aria-label="More ${label}">
      <a href="#/${base}/${esc(prev.slug)}"><small>← PREVIOUS</small><strong>${esc(prev.title)}</strong></a>
      <a href="#/${base}/${esc(next.slug)}" class="r"><small>NEXT →</small><strong>${esc(next.title)}</strong></a>
    </nav>`;
  };

  /* ---------- HOME ---------- */
  function home() {
    const a = S.about;
    const h = a.headline;
    const strip = a.roles.map((r) => `<span>${esc(r)} <i>✦</i></span>`).join('');
    const pick = (slug) => S.design.find((d) => d.slug === slug) || S.design[0];
    const col = [['saanjh', 'p1', 'saanjh ♡'], ['overthinking', 'p2', '3:07 am'], ['always-and-forever', 'p3', 'always & forever']];
    const tiles = [
      { s: 'design', t: 'Visual stories', d: 'Six posters, six moods, each with the meaning behind it.', c: plural(S.design.length, 'poster') },
      { s: 'writing', t: 'Words, mostly felt', d: 'Poems, essays and articles that refused to stay quiet.', c: plural(S.writing.length, 'piece') },
      { s: 'tech', t: 'Logic, applied', d: 'Research, AI apps, machine learning and hackathon builds.', c: plural(S.tech.length, 'project') },
      { s: 'experience', t: 'Rooms I run to', d: 'Events, core committees, hackathons, clubs and sponsors.', c: 'events · committees · clubs' },
      { s: 'contact', t: 'Say hi', d: 'Come find me.', c: S.contact.instagramHandle }
    ];
    return `
    <div class="page">
      <section class="wrap hero" aria-labelledby="hero-h">
        <div>
          <p class="hello">${esc(a.hello)}${doodle('arrow')}</p><br>
          <span class="label">${esc(name.toUpperCase())}</span>
          <h1 id="hero-h">${esc(h[0])}<br>${esc(h[1])}<span class="feel">${esc(h[2])}${doodle('circle', '', true)}</span>${esc(h[3])}</h1>
          <p class="tagline">${esc(a.tagline)}</p>
          <div class="chips">${a.tags.map((t, i) => `<span class="sticker s${i % 4}" style="--r:${rot(i + 1)}">${esc(t)}</span>`).join('')}</div>
          <div class="bio-card rv" style="--r:-1deg">${clip}${a.bio.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
          <a class="btn" href="#worlds">open my journal ↓</a>
        </div>
        <div class="collage" aria-label="A few of my posters">
          ${col.map(([slug, cls, cap], i) => { const d = pick(slug); return `
            <figure class="polaroid ${cls} rv">${tape(i, i === 1 ? 'r' : '')}<img src="${esc(d.image)}" alt="${esc(d.title)} poster"><figcaption>${esc(cap)}</figcaption></figure>`; }).join('')}
          <div class="note pink rv" style="--r:4deg"><span class="pin" aria-hidden="true"></span><p>${esc(a.motto)}</p></div>
          ${doodle('star', 'star')}${doodle('heart', 'heart')}
        </div>
      </section>
      <div class="marquee" aria-hidden="true"><div class="marquee-track">${strip}${strip}</div></div>
      <section class="wrap liveby" aria-labelledby="lb-h">
        <h2 id="lb-h" class="board-title">things i live by${doodle('underline', '', true)}</h2>
        <ul class="notes">
          ${a.liveBy.map((l, i) => `<li class="rv" style="--r:0deg"><div class="note ${NOTE[i % 4]}" style="--r:${rot(i)}"><span class="pin" aria-hidden="true"></span><p>${esc(l.text)}</p><small>${esc(l.note)}</small></div></li>`).join('')}
        </ul>
      </section>
      <section class="section wrap" id="worlds" aria-labelledby="dash-title">
        <div class="worlds-head">
          <p class="hand" style="font-size:34px;color:var(--pink);margin:0">the dashboard</p>
          <h2 id="dash-title">Explore my <em>worlds.</em></h2>
          ${doodle('swirl')}
        </div>
        <div class="dash">
          ${tiles.map((t, i) => `
            <a class="folder f-${t.s}${i < 2 ? ' big' : ''} rv" style="--r:${rot(i)}" href="#/${t.s}" data-tab="0${i + 1} · ${t.s.toUpperCase()}">
              <span class="arrow" aria-hidden="true">→</span>
              <div><h3>${esc(t.t)}</h3><p>${esc(t.d)}</p><p class="count">${esc(t.c)}</p></div>
            </a>`).join('')}
        </div>
      </section>
    </div>`;
  }

  /* ---------- DESIGN ---------- */
  function designList() {
    return `<div class="page">
      ${phead('01 · design', 'Visual', 'stories.', 'Six posters, six moods, from vintage Old Delhi to Swiss minimalism. Each one holds a feeling I wanted to keep.')}
      <section class="wrap section">
        <div class="wall">
          ${S.design.map((p, i) => `
            <a class="item" href="#/design/${esc(p.slug)}">
              <figure class="polaroid rv" style="--r:${rot(i)}">${tape(i)}<img src="${esc(p.image)}" alt="${esc(p.title)} poster" loading="lazy"><figcaption>${esc(p.title)}</figcaption></figure>
              <div class="meta"><span class="stamp">${esc(p.style)}</span><span class="hand" style="font-size:22px">${esc(p.status)}</span></div>
              <p class="one">${esc(p.oneLiner)}</p>
            </a>`).join('')}
        </div>
      </section></div>`;
  }
  function designItem(slug) {
    const i = S.design.findIndex((p) => p.slug === slug);
    if (i < 0) return notFound();
    const p = S.design[i];
    return `<div class="page">
      <section class="wrap section">
        <a class="back" href="#/design">← back to the wall</a>
        <div class="case">
          <div class="case-img"><figure class="polaroid">${tape(i)}<img src="${esc(p.image)}" alt="${esc(p.title)} poster"><figcaption>${esc(p.title)}</figcaption></figure></div>
          <article>
            <span class="stamp">${esc(p.style)} · ${esc(p.status)}</span>
            <h1 class="case-title" style="margin-top:18px">${esc(p.title)}</h1>
            <p class="sub">${esc(p.subtitle)}</p>
            <div class="lined meaning rv" style="--r:.6deg">${tape(i + 1, 'l')}<h2>the meaning behind it</h2><p>${esc(p.meaning)}</p></div>
            <div class="card-typed rv" style="--r:-.6deg"><h2>The concept</h2><p>${esc(p.concept)}</p></div>
            <p class="mini-h">Colour palette</p>
            <div class="paint chips-row">${p.palette.map((c, k) => `<div class="chip-paint" style="--r:${rot(k)}"><i style="background:${esc(c.hex)}"></i><span>${esc(c.name)}<br><code>${esc(c.hex)}</code></span></div>`).join('')}</div>
            <p class="mini-h">Typography</p>
            <div class="labels">${p.fonts.map((f) => `<span class="label">${esc(f)}</span>`).join('')}</div>
          </article>
        </div>
      </section>
      ${pager(S.design, i, 'design', 'visual stories')}
    </div>`;
  }

  /* ---------- WRITING ---------- */
  let filter = 'All';
  const isProse = (w) => w.type !== 'Poem';
  function writingList() {
    const items = S.writing.filter((w) => filter === 'All' || (filter === 'Poems' ? !isProse(w) : isProse(w)));
    return `<div class="page">
      ${phead('02 · writing', 'Words,', 'mostly felt.', 'Poems, essays and articles: some loud, some quiet, all honest.')}
      <section class="wrap section">
        <div class="tabs" role="group" aria-label="Filter writing">
          ${['All', 'Poems', 'Prose'].map((t) => `<button type="button" data-filter="${t}" aria-pressed="${t === filter}">${t}</button>`).join('')}
        </div>
        <div class="pages">
          ${items.map((w, i) => `
            <a class="page-wrap rv" style="--r:${rot(i)}" href="#/writing/${esc(w.slug)}">
              <div class="page-card">
                <span class="stamp">${esc(w.type)}</span>
                <h3>${esc(w.title)}</h3>
                <p>${esc(w.meaning.split('. ')[0])}.</p>
                <span class="read">read it →</span>
              </div>
            </a>`).join('')}
        </div>
      </section></div>`;
  }
  function writingItem(slug) {
    const i = S.writing.findIndex((w) => w.slug === slug);
    if (i < 0) return notFound();
    const w = S.writing[i];
    const body = w.type === 'Poem'
      ? `<div class="poem">${esc(w.body)}</div>`
      : `<div class="prose">${w.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}</div>`;
    return `<div class="page">
      <section class="wrap section">
        <a class="back" href="#/writing">← back to all writing</a>
        <div class="sheet-wrap">
          <article class="sheet">
            <span class="stamp">${esc(w.type)}</span>
            <h1 style="margin-top:16px">${esc(w.title)}</h1>
            ${w.subtitle ? `<p class="sub">${esc(w.subtitle)}</p>` : ''}
            <div class="note ${NOTE[i % 4]}" style="--r:2deg"><span class="pin" aria-hidden="true"></span><p>${esc(w.meaning)}</p></div>
            ${body}
            <p class="sign-off">— hitisha</p>
          </article>
        </div>
      </section>
      ${pager(S.writing, i, 'writing', 'writing')}
    </div>`;
  }

  /* ---------- TECH ---------- */
  function techList() {
    return `<div class="page">
      ${phead('03 · tech & research', 'Logic,', 'applied.', 'From C programs to privacy-preserving AI: things I\'ve researched, built and shipped.')}
      <section class="wrap section">
        <div class="files">
          ${S.tech.map((t, i) => `
            <a class="file rv${i === 0 ? ' big' : ''}" style="--r:${rot(i + 2)}" href="#/tech/${esc(t.slug)}">
              ${clip}<span class="stamp">${esc(t.category)}</span>
              <h3>${esc(t.title)}</h3>
              <p>${esc(t.oneLiner)}</p>
              <span class="open">open file →</span>
            </a>`).join('')}
        </div>
      </section></div>`;
  }
  function techItem(slug) {
    const i = S.tech.findIndex((t) => t.slug === slug);
    if (i < 0) return notFound();
    const t = S.tech[i];
    return `<div class="page">
      <section class="wrap section">
        <a class="back" href="#/tech">← back to all files</a>
        <article class="graph">
          ${clip}
          <span class="stamp">${esc(t.category)}${t.status ? ' · ' + esc(t.status) : ''}</span>
          <h1 class="case-title" style="margin-top:18px">${esc(t.title)}</h1>
          <p class="sub">${esc(t.oneLiner)}</p>
          <div class="note ${NOTE[(i + 1) % 4]}" style="--r:-2deg"><span class="pin" aria-hidden="true"></span><p>${esc(t.why)}</p><small>WHY IT MATTERS TO ME</small></div>
          <div class="block"><p class="mini-h">Overview</p><p>${esc(t.overview)}</p></div>
          ${t.stack.length ? `<div class="block"><p class="mini-h">Built with</p><div class="labels">${t.stack.map((s) => `<span class="label">${esc(s)}</span>`).join('')}</div></div>` : ''}
          ${t.links.length ? `<div class="block"><p class="mini-h">Links</p><div class="btns">${t.links.map((l) => `<a class="btn light" href="${esc(l.href)}"${ext(l.href)}>${esc(l.label)} ↗</a>`).join('')}</div></div>` : ''}
        </article>
      </section>
      ${pager(S.tech, i, 'tech', 'projects')}
    </div>`;
  }

  /* ---------- EXPERIENCE ---------- */
  function experience() {
    const x = S.experience;
    const sec = (title, inner) => `<section class="xp-sec"><h2 class="xp-title">${esc(title)}${doodle('underline', '', true)}</h2>${inner}</section>`;
    const badge = (e, i) => `<li class="badge rv" style="--r:${rot(i)};--c:${COLORS[i % 4]}"><strong>${esc(e.role || e.name)}</strong>${e.org ? `<span>${esc(e.org)}</span>` : ''}${e.note || e.what ? `<p>${esc(e.note || e.what)}</p>` : ''}</li>`;
    return `<div class="page">
      ${phead('04 · experience', 'Rooms I', 'run to.', 'Conferences, fests, hackathons and clubs: the rooms where I organise, pitch, plan and somehow make it all happen.')}
      <div class="wrap section">
        ${sec('leadership & core committees', `<ul class="badges">${x.leadership.map(badge).join('')}</ul>`)}
        ${sec('events i\'ve worked on', `<ul class="tickets">${x.events.map((e, i) => `<li class="ticket rv" style="--r:${rot(i + 1)};--c:${COLORS[(i + 3) % 4]}"><div class="main"><strong>${esc(e.name)}</strong><p>${esc(e.what)}</p></div><div class="stub">ADMIT ONE</div></li>`).join('')}</ul>`)}
        ${sec('hackathons', `<ul class="badges">${x.hackathons.map((e, i) => badge(e, i + 2)).join('')}</ul>`)}
        ${sec('sponsors i\'ve brought on board', `<ul class="stickers">${x.sponsors.map((s, i) => `<li class="spons rv" style="--r:${rot(i)};background:${SOFT[i % 4]}"><strong>${esc(s.brand)}</strong><small>FOR ${esc(s.event.toUpperCase())}</small></li>`).join('')}</ul>`)}
        ${sec('also, outside the code', `<ul class="stickers">${x.achievements.map((a, i) => `<li class="note ${NOTE[i % 4]} rv" style="--r:${rot(i)};max-width:260px"><span class="pin" aria-hidden="true"></span><p style="font-size:24px">${esc(a)}</p></li>`).join('')}</ul>`)}
        ${sec('volunteering', `<ul class="notes" style="margin-top:20px">${x.volunteering.map((v, i) => `<li class="rv" style="--r:0deg"><div class="note mint" style="--r:${rot(i)}"><span class="pin" aria-hidden="true"></span><p>${esc(v.name)}</p><small>${esc(v.what)}</small></div></li>`).join('')}</ul>`)}
        ${sec('clubs', `<div class="lists">
          <ul class="checklist rv" style="--r:-1deg">${tape(0)}<li class="head"><h3>2nd year</h3></li>${x.clubsSecondYear.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
          <ul class="checklist rv" style="--r:1deg">${tape(1)}<li class="head"><h3>1st year</h3></li>${x.clubsFirstYear.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
        </div>`)}
      </div></div>`;
  }

  /* ---------- CONTACT ---------- */
  function contact() {
    const c = S.contact;
    const links = [
      c.instagram && { label: 'Instagram', href: c.instagram, note: c.instagramHandle },
      c.linkedin && { label: 'LinkedIn', href: c.linkedin, note: 'connect ↗' },
      c.github && { label: 'GitHub', href: c.github, note: 'code ↗' },
      c.email && { label: 'Email', href: 'mailto:' + c.email, note: c.email },
      c.phone && { label: 'Call / WhatsApp', href: c.phoneHref, note: c.phone }
    ].filter(Boolean);
    return `<div class="page">
      ${phead('05 · contact', 'Say', 'hi.', '')}
      <section class="wrap section">
        <div class="postcard rv" style="--r:-1.2deg">
          ${tape(0, 'l')}${tape(3, 'r')}
          <div class="msg">
            <p>Dear you,</p>
            <p>For a design brief, a tech project, a sponsorship, or a long conversation about poetry and food, I'm one message away.</p>
            <p>feel too deeply, care too deeply, always.</p>
            <p style="color:var(--pink)">— hitisha</p>
          </div>
          <div class="addr">
            <div class="pstamp" aria-hidden="true">h</div>
            <div class="postmark" aria-hidden="true">JAIPUR<br>✦<br>MUJ</div>
            ${links.map((l) => `<a href="${esc(l.href)}"${ext(l.href)}>${esc(l.label)}<small>${esc(l.note)}</small></a>`).join('')}
          </div>
        </div>
      </section></div>`;
  }

  function notFound() {
    return `<div class="page">${phead('oops', 'Lost in the', 'galli.', 'That page doesn\'t exist.')}<p class="wrap"><a class="btn" href="#/">take me home</a></p></div>`;
  }

  /* ---------- reveal on scroll ---------- */
  function reveal() {
    const els = main.querySelectorAll('.rv, .doodle.draw');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- router ---------- */
  const titles = { design: 'Visual stories', writing: 'Writing', tech: 'Tech & Research', experience: 'Experience', contact: 'Say hi' };
  function route() {
    const h = location.hash;
    if (h && !h.startsWith('#/')) return; // in-page anchors like #worlds
    const [section = '', slug] = h.replace(/^#\/?/, '').split('/');
    const views = {
      '': home,
      design: () => slug ? designItem(slug) : designList(),
      writing: () => slug ? writingItem(slug) : writingList(),
      tech: () => slug ? techItem(slug) : techList(),
      experience,
      contact
    };
    const view = views[section] || notFound;
    document.body.dataset.section = views[section] ? (section || 'home') : 'home';
    main.innerHTML = view();
    let pageTitle = titles[section];
    if (slug) { const hit = (S[section] || []).find((x) => x.slug === slug); if (hit) pageTitle = hit.title; }
    document.title = section ? `${pageTitle || 'Page'} — ${name}` : `${name} — I love making things that feel something`;
    document.querySelectorAll('.nav nav a').forEach((a) => {
      if (a.dataset.s === section) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    window.scrollTo(0, 0);
    main.querySelectorAll('[data-filter]').forEach((b) => b.addEventListener('click', () => { filter = b.dataset.filter; route(); }));
    reveal();
  }
  window.addEventListener('hashchange', route);
  document.getElementById('yr').textContent = new Date().getFullYear();
  route();

  /* ---------- pink cursor dot (decorative, mouse only) ---------- */
  const dot = document.querySelector('.cursor');
  if (window.matchMedia('(hover: hover)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('mousemove', (e) => { dot.style.opacity = 1; dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px'; });
    document.addEventListener('mouseover', (e) => dot.classList.toggle('big', !!e.target.closest('a,button')));
  }
})();
