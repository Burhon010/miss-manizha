(() => {
  const DM_URL = "https://ig.me/m/_miss_manizha";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const lite = !finePointer || window.matchMedia("(max-width: 900px)").matches;
  if (lite) document.documentElement.classList.add("lite");
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const EN = {
    "meta.title": "Miss Manizha — English, French, Russian & Turkish online",
    "nav.about": "About",
    "nav.courses": "Courses",
    "nav.why": "Why me",
    "nav.steps": "Get started",
    "nav.faq": "FAQ",
    "cta.enroll": "Enroll",
    "cta.write": "Message on Direct",
    "cta.courses": "View courses",
    "hero.eyebrow": "Online foreign language lessons",
    "hero.title": "Speak a new language <em>with confidence</em>",
    "hero.lead": "English, French, Russian and Turkish — group and private lessons with a teacher with over 7 years of experience. We start from zero — calmly, clearly and with real speaking practice.",
    "hero.m1": "years of experience",
    "hero.m2": "a week, 1 hour each",
    "hero.m3": "start from zero",
    "hero.badge1t": "4 languages",
    "hero.badge1": "EN · FR · RU · TR",
    "hero.badge2t": "years",
    "hero.badge2": "of teaching",
    "hero.badge3": "Group enrollment is open",
    "about.eyebrow": "About me",
    "about.title": "Hello! I'm <em>Manizha</em>",
    "about.p1": "I teach English, French, Russian and Turkish and have more than 7 years of teaching experience. I help students start from zero and reach fluent, confident communication.",
    "about.p2": "I speak five languages myself, so I know the path of learning a language from the inside. That's why I explain things simply and clearly — so knowledge stays with you long after the lesson.",
    "about.langs": "Languages I speak",
    "about.native": "Native",
    "stats.s1": "years of teaching",
    "stats.s2": "languages I teach",
    "stats.s3": "English level",
    "stats.s4": "minutes per lesson",
    "courses.eyebrow": "Courses",
    "courses.title": "Choose your <em>learning format</em>",
    "courses.sub": "English, French, Russian and Turkish — in a group or one-on-one. All lessons are online, so you can study from home, from any city or country.",
    "courses.c1.tag": "Enrollment open",
    "courses.c1.title": "Group classes from zero",
    "courses.c1.text": "The perfect start for those who have never studied the language. We learn together, support each other and talk a lot.",
    "courses.c1.f1": "Start from zero — alphabet and pronunciation",
    "courses.c1.f2": "3 lessons a week, 1 hour each",
    "courses.c1.f3": "Live communication and speaking practice",
    "courses.c1.f4": "Homework and personal feedback",
    "courses.c1.cta": "Join a group",
    "courses.times": "3 times a week",
    "courses.hour": "1 hour each",
    "courses.c2.tag": "Online · 1-on-1",
    "courses.c2.title": "Private lessons",
    "courses.c2.text": "The program is built around you: your goals, level and pace. The teacher's full attention is yours alone.",
    "courses.c2.f1": "A personal program for your goals",
    "courses.c2.f2": "Any level — from zero to advanced",
    "courses.c2.f3": "Study, work, relocation or travel",
    "courses.c2.f4": "Maximum practice and conversation",
    "courses.c2.cta": "Book a lesson",
    "courses.note": "For prices and upcoming group schedules — message me on Direct, I reply personally.",
    "why.eyebrow": "Why learn with me",
    "why.title": "Learning a language is <em>easy</em> with the right teacher",
    "why.f1t": "C2 and C1 — top level",
    "why.f1": "English at C2 and French at C1, plus 7+ years of teaching. You learn from a professional.",
    "why.f2t": "I speak 5 languages",
    "why.f2": "I can explain a difficult topic in Russian, Tajik or Turkish — so it's truly clear.",
    "why.f3t": "From zero to fluent speech",
    "why.f3": "A step-by-step system: from first words to free conversation. You see your progress every week.",
    "why.f4t": "Online, wherever you are",
    "why.f4": "All you need is a phone or laptop with internet. No commute — study from home.",
    "why.f5t": "Attention to everyone",
    "why.f5": "I take into account your personality, pace and goals. Nobody is left behind — even in a group.",
    "why.f6t": "Practice from lesson one",
    "why.f6": "Less boring theory — more live communication. You start speaking from the very first classes.",
    "aud.eyebrow": "Who it's for",
    "aud.title": "A language that <em>opens doors</em>",
    "aud.a1t": "School students",
    "aud.a1": "Improve grades, prepare for exams and fall in love with the language.",
    "aud.a2t": "University students",
    "aud.a2": "Study and internships abroad, scholarships and international programs.",
    "aud.a3t": "Adults",
    "aud.a3": "Career growth, working with foreign colleagues and new opportunities.",
    "aud.a4t": "Travelers",
    "aud.a4": "Speak freely in London, Paris, Istanbul and anywhere in the world.",
    "quote.text": "The limits of my language mean the limits of my world.",
    "quote.author": "— Ludwig Wittgenstein",
    "steps.eyebrow": "How to start",
    "steps.title": "Four steps to your <em>first lesson</em>",
    "steps.s1t": "Message on Direct",
    "steps.s1": "One message on Instagram — and I'll reply personally.",
    "steps.s2t": "Discuss your goals",
    "steps.s2": "I'll learn your level, goals and preferred time.",
    "steps.s3t": "Choose a format",
    "steps.s3": "Group or private — and the language you need.",
    "steps.s4t": "Let's begin!",
    "steps.s4": "Your first lesson — and your new language is on its way.",
    "posters.eyebrow": "Current enrollment",
    "posters.title": "Announcements from <em>Instagram</em>",
    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked <em>questions</em>",
    "faq.sub": "Didn't find an answer? Just message me on Instagram — I'll answer everything.",
    "faq.q1": "I've never studied the language. Is it for me?",
    "faq.a1": "Of course! Groups start from absolute zero: we begin with the alphabet, pronunciation and the most useful phrases.",
    "faq.q2": "How do online lessons work?",
    "faq.a2": "Via live video call. You need a phone or computer and a stable internet connection — I'll prepare everything else.",
    "faq.q3": "How often and how long are the lessons?",
    "faq.a3": "3 times a week, 1 hour each. This rhythm gives steady progress without overload.",
    "faq.q4": "Group or private — which should I choose?",
    "faq.a4": "A group means communication, motivation and a lower price. Private lessons mean maximum attention and a program tailored to your goals. I'll help you choose.",
    "faq.q5": "How much does it cost?",
    "faq.a5": "The price depends on the format. Message me on Direct — I'll tell you about prices and upcoming groups.",
    "final.eyebrow": "Places in groups are limited",
    "final.title": "Your new language starts <em>with one message</em>",
    "final.sub": "Message me on Instagram right now — we'll pick a format and start this very week.",
    "footer.text": "English · French · Russian · Turkish — online, from zero to confident speech"
  };

  /* i18n: Russian is the markup itself, snapshot it before anything changes */
  const nodes = $$("[data-i18n]");
  const RU = { "meta.title": document.title };
  nodes.forEach(n => { RU[n.dataset.i18n] = n.innerHTML.trim(); });
  const dict = { ru: RU, en: EN };

  const splitWords = el => {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(c => {
        if (c.nodeType === 3) {
          const frag = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
            const w = document.createElement("span");
            w.className = "w";
            const inner = document.createElement("span");
            inner.style.setProperty("--i", i++);
            inner.textContent = part;
            w.appendChild(inner);
            frag.appendChild(w);
          });
          c.replaceWith(frag);
        } else if (c.nodeType === 1) walk(c);
      });
    };
    walk(el);
  };

  const getLang = () => {
    try { const s = localStorage.getItem("mm-lang"); if (s === "ru" || s === "en") return s; } catch (e) {}
    return (navigator.language || "ru").toLowerCase().startsWith("ru") ? "ru" : "en";
  };

  const langBox = $(".lang");
  const setLang = (lang, animate) => {
    const d = dict[lang];
    nodes.forEach(n => {
      const v = d[n.dataset.i18n];
      if (v != null) n.innerHTML = v;
    });
    document.title = d["meta.title"];
    document.documentElement.lang = lang;
    langBox.dataset.active = lang;
    $$("button", langBox).forEach(b => b.classList.toggle("is-active", b.dataset.lang === lang));
    $$("[data-split]").forEach(el => {
      el.classList.remove("in");
      splitWords(el);
      if (animate) requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("in")));
    });
    try { localStorage.setItem("mm-lang", lang); } catch (e) {}
  };

  let current = getLang();
  setLang(current, false);
  $$("button", langBox).forEach(b => b.addEventListener("click", () => {
    if (b.dataset.lang === current) return;
    current = b.dataset.lang;
    document.body.animate?.([{ opacity: 1 }, { opacity: .55 }, { opacity: 1 }], { duration: 500, easing: "ease-out" });
    setLang(current, true);
  }));

  /* direct links */
  $$("[data-dm]").forEach(a => {
    a.href = DM_URL;
    a.target = "_blank";
    a.rel = "noopener";
  });
  $("#year").textContent = new Date().getFullYear();

  /* preloader -> start hero */
  document.body.classList.add("is-loading");
  const start = performance.now();
  const finish = () => {
    const wait = Math.max(0, (reduce ? 0 : 1300) - (performance.now() - start));
    setTimeout(() => {
      $("#preloader").classList.add("is-done");
      document.body.classList.remove("is-loading");
      $$(".hero .reveal, .hero [data-split]").forEach(el => el.classList.add("in"));
    }, wait);
  };
  if (document.readyState === "complete") finish(); else window.addEventListener("load", finish);
  setTimeout(finish, 4000);

  /* scroll reveal */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
    });
  }, { threshold: .15, rootMargin: "0px 0px -6% 0px" });
  $$(".reveal, .timeline").forEach(el => { if (!el.closest(".hero")) io.observe(el); });

  /* counters */
  const countIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, to = +el.dataset.count, suf = el.dataset.suffix || "";
      const t0 = performance.now(), dur = reduce ? 1 : 1600;
      const tick = t => {
        const p = Math.min(1, (t - t0) / dur), v = Math.round(to * (1 - Math.pow(1 - p, 4)));
        el.textContent = v + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: .6 });
  $$("[data-count]").forEach(el => countIO.observe(el));

  /* header, active nav, fab, parallax */
  const header = $("#header"), fab = $(".fab");
  const landmarks = $$("[data-speed]");
  const sections = $$("main section[id]");
  const navLinks = $$(".nav a[href^='#']:not(.btn)");
  let lastY = 0, ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 30);
    header.classList.toggle("is-hidden", y > 500 && y > lastY && !nav.classList.contains("is-open"));
    fab.classList.toggle("is-visible", y > window.innerHeight * .8);
    if (!reduce && !lite && y < window.innerHeight * 1.2) landmarks.forEach(l => { l.style.transform = `translate3d(0,${y * l.dataset.speed}px,0)`; });
    lastY = y;
    ticking = false;
  };
  const navIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => navIO.observe(s));
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* mobile menu */
  const burger = $("#burger"), nav = $("#nav");
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-controls", "nav");
  const setMenu = open => {
    nav.classList.toggle("is-open", open);
    burger.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    if (open) header.classList.remove("is-hidden");
    document.documentElement.classList.toggle("no-scroll", open);
    burger.setAttribute("aria-expanded", String(open));
  };
  const closeMenu = () => setMenu(false);
  burger.addEventListener("click", e => { e.stopPropagation(); setMenu(!nav.classList.contains("is-open")); });
  $$("a", nav).forEach(a => a.addEventListener("click", closeMenu));
  nav.addEventListener("click", e => { if (e.target === nav) closeMenu(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
  window.matchMedia("(min-width: 901px)").addEventListener("change", e => { if (e.matches) closeMenu(); });
  onScroll();

  /* accordion */
  $$(".acc__item").forEach((item, i) => {
    const q = $(".acc__q", item);
    q.setAttribute("aria-expanded", "false");
    q.addEventListener("click", () => {
      const open = !item.classList.contains("is-open");
      $$(".acc__item.is-open").forEach(o => { o.classList.remove("is-open"); $(".acc__q", o).setAttribute("aria-expanded", "false"); });
      item.classList.toggle("is-open", open);
      q.setAttribute("aria-expanded", String(open));
    });
    if (i === 0) q.click();
  });

  if (finePointer && !reduce) {
    /* cursor glow */
    const glow = $("#cursorGlow");
    let gx = -999, gy = -999, cx = gx, cy = gy;
    window.addEventListener("pointermove", e => { gx = e.clientX; gy = e.clientY; }, { passive: true });
    const loop = () => {
      cx += (gx - cx) * .12; cy += (gy - cy) * .12;
      glow.style.transform = `translate3d(${cx}px,${cy}px,0)`;
      requestAnimationFrame(loop);
    };
    loop();

    /* magnetic buttons */
    $$(".magnetic").forEach(b => {
      b.addEventListener("pointermove", e => {
        const r = b.getBoundingClientRect();
        b.style.setProperty("--mx", ((e.clientX - r.left - r.width / 2) * .25) + "px");
        b.style.setProperty("--my", ((e.clientY - r.top - r.height / 2) * .35) + "px");
      });
      b.addEventListener("pointerleave", () => { b.style.setProperty("--mx", "0px"); b.style.setProperty("--my", "0px"); });
    });

    /* portrait 3D tilt */
    const portrait = $("#portrait"), hero = $(".hero");
    hero.addEventListener("pointermove", e => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      portrait.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`;
    });
    hero.addEventListener("pointerleave", () => { portrait.style.transform = ""; });

    /* card tilt + spotlight */
    $$(".tilt").forEach(c => {
      c.addEventListener("pointermove", e => {
        const r = c.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.setProperty("--x", x * 100 + "%");
        c.style.setProperty("--y", y * 100 + "%");
        c.style.transform = `perspective(1000px) rotateY(${(x - .5) * 6}deg) rotateX(${(.5 - y) * 6}deg) translateY(-4px)`;
      });
      c.addEventListener("pointerleave", () => { c.style.transform = ""; });
    });
  }

  /* gold dust */
  const cv = $("#dust"), ctx = cv.getContext("2d");
  if (!reduce && !lite && ctx) {
    let w, h, dpr, parts = [];
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.width = innerWidth * dpr; h = cv.height = innerHeight * dpr;
      const n = Math.round(Math.min(70, innerWidth / 18));
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: (Math.random() * 1.4 + .4) * dpr,
        vx: (Math.random() - .5) * .15 * dpr, vy: -(Math.random() * .25 + .05) * dpr,
        a: Math.random() * .6 + .15, t: Math.random() * Math.PI * 2
      }));
    };
    resize();
    window.addEventListener("resize", resize);
    let running = true;
    document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) draw(); });
    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      parts.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.t += .02;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10;
        ctx.globalAlpha = p.a * (.6 + .4 * Math.sin(p.t));
        ctx.fillStyle = "#e8cb94";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();
  }
})();
