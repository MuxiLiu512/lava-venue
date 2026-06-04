/* ============================================================
   dir-a.jsx — Direction A · "Editorial Olive"
   ============================================================
   Magazine-style dark olive masthead → cream editorial body →
   dark CTA footer. The deck's typographic system (HarmonyOS,
   mono meta labels, chrome rails) extended to web rhythm.
   Width: 1440. All text TC.
   ============================================================ */

function DirectionA() {
  const t = window.CONTENT;

  // Scoped style sheet for dir-a only.
  const css = `
    .dir-a {
      --bg-deep: #0C0E08;
      --bg-olive: #1A1B14;
      --bg-cream: #FFF5DC;
      --bg-warm: #FFEBC0;
      --fg-on-dark: #FFE6A9;
      --fg-on-dark-2: rgba(255,230,169,0.72);
      --fg-on-dark-3: rgba(255,230,169,0.45);
      --accent: #E84224;
      --wine: #741017;
      --line-dark: rgba(255,230,169,0.18);
      --line-light: rgba(26,27,20,0.14);

      background: var(--bg-cream);
      color: #1A1B14;
      width: 100%;
      font-family: "HarmonyOS Sans TC", "Noto Sans TC", system-ui, sans-serif;
    }
    .dir-a .a-pad { padding-left: 80px; padding-right: 80px; }
    .dir-a .a-section { padding-top: calc(120px * var(--t-density)); padding-bottom: calc(120px * var(--t-density)); }
    .dir-a .a-mono {
      font-family: "HarmonyOS Sans", "JetBrains Mono", monospace;
      font-size: calc(13px * var(--t-scale));
      letter-spacing: 0.16em;
      text-transform: uppercase;
      font-weight: 500;
    }
    .dir-a .a-eyebrow {
      font-size: calc(12px * var(--t-scale));
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 12px;
    }
    .dir-a .a-eyebrow::before {
      content: "";
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 4px rgba(232,66,36,0.22);
    }
    .dir-a .a-display {
      font-size: calc(96px * var(--t-scale));
      line-height: 1.02;
      letter-spacing: -0.025em;
      font-weight: 700;
      text-wrap: balance;
    }
    .dir-a .a-h2 {
      font-size: calc(56px * var(--t-scale));
      line-height: 1.06;
      letter-spacing: -0.02em;
      font-weight: 700;
      text-wrap: balance;
    }
    .dir-a .a-h3 {
      font-size: calc(28px * var(--t-scale));
      line-height: 1.25;
      letter-spacing: -0.01em;
      font-weight: 600;
    }
    .dir-a .a-body {
      font-size: calc(17px * var(--t-scale));
      line-height: 1.7;
    }
    .dir-a .a-small {
      font-size: calc(14px * var(--t-scale));
      line-height: 1.6;
    }
    .dir-a .a-rule {
      height: 1px;
      background: var(--line-light);
      border: 0;
      margin: 0;
    }
    .dir-a .a-rule.dark { background: var(--line-dark); }
    .dir-a .a-em { color: var(--accent); }

    /* nav */
    .dir-a .a-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 28px 80px;
      border-bottom: 1px solid var(--line-dark);
      color: var(--fg-on-dark);
    }
    .dir-a .a-nav__brand img { height: 26px; filter: brightness(0) invert(0.92) sepia(1) saturate(0.8) hue-rotate(355deg); }
    .dir-a .a-nav__links { display: flex; gap: 36px; align-items: center; }
    .dir-a .a-nav__links a {
      font-size: calc(14px * var(--t-scale));
      color: var(--fg-on-dark-2);
      letter-spacing: 0.04em;
      position: relative;
      transition: color 0.2s ease-out;
    }
    .dir-a .a-nav__links a::after {
      content: "";
      position: absolute;
      left: 0; right: 0; bottom: -6px;
      height: 1.5px;
      background: var(--accent);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.24s cubic-bezier(0.22,1,0.36,1);
    }
    .dir-a .a-nav__links a:hover { color: var(--fg-on-dark); }
    .dir-a .a-nav__links a:hover::after { transform: scaleX(1); }
    .dir-a .a-nav__cta {
      background: var(--accent);
      color: #FFF5DC;
      padding: 12px 22px;
      border-radius: 999px;
      font-size: calc(14px * var(--t-scale));
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: background 0.18s, transform 0.1s;
    }
    .dir-a .a-nav__cta:hover { background: #DB3517; }
    .dir-a .a-nav__cta:active { transform: scale(0.96); }

    /* hero */
    .dir-a .a-hero {
      background: var(--bg-deep);
      color: var(--fg-on-dark);
      position: relative;
      overflow: hidden;
    }
    .dir-a .a-hero__chrome {
      display: flex; justify-content: space-between;
      padding: 18px 80px;
      color: var(--fg-on-dark-3);
      border-bottom: 1px solid var(--line-dark);
    }
    .dir-a .a-hero__grid {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 64px;
      padding: 96px 80px 0;
      align-items: end;
    }
    .dir-a .a-hero__photo {
      aspect-ratio: 4/5;
      background-image: url(./icebreaker-table.jpg);
      background-size: cover;
      background-position: center;
      border-radius: var(--t-radius);
      filter: contrast(1.05) brightness(0.95);
      overflow: hidden;
      position: relative;
      transition: transform 0.6s cubic-bezier(0.22,1,0.36,1), filter 0.4s;
    }
    .dir-a .a-hero__photo:hover {
      transform: scale(1.015);
      filter: contrast(1.05) brightness(1);
    }
    .dir-a .a-hero__photo .photo-meta {
      position: absolute;
      bottom: 18px; left: 18px;
      color: var(--fg-on-dark-2);
    }
    .dir-a .a-hero__stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border-top: 1px solid var(--line-dark);
      margin-top: 96px;
    }
    .dir-a .a-hero__stat {
      padding: 36px 32px;
      border-right: 1px solid var(--line-dark);
    }
    /* First & last align with hero grid (80px page padding). */
    .dir-a .a-hero__stat:first-child { padding-left: 80px; }
    .dir-a .a-hero__stat:last-child { padding-right: 80px; border-right: none; }
    .dir-a .a-hero__stat__n {
      font-size: calc(64px * var(--t-scale));
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1;
    }
    .dir-a .a-hero__stat__n .u { font-size: 0.5em; vertical-align: 0.2em; margin-left: 2px; color: var(--accent); }

    /* why-partner */
    .dir-a .a-why { background: var(--bg-cream); }
    .dir-a .a-why__card {
      background: #FFFFFF;
      border: 1px solid var(--line-light);
      border-radius: var(--t-radius);
      padding: 48px 40px 40px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      transition: transform 0.28s cubic-bezier(0.22,1,0.36,1),
                  box-shadow 0.28s ease-out,
                  border-color 0.28s ease-out;
      position: relative;
      overflow: hidden;
    }
    .dir-a .a-why__card:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 48px -28px rgba(12,14,8,0.34);
      border-color: rgba(232,66,36,0.36);
    }
    .dir-a .a-why__body { color: rgba(26,27,20,0.7); }
    /* Feature variant — first card highlighted in olive-dark. */
    .dir-a .a-why__card.is-feature {
      background: var(--bg-deep);
      color: var(--fg-on-dark);
      border-color: transparent;
      box-shadow: 0 22px 48px -28px rgba(12,14,8,0.5);
    }
    .dir-a .a-why__card.is-feature:hover {
      transform: translateY(-6px);
      box-shadow: 0 32px 64px -28px rgba(12,14,8,0.6);
      border-color: transparent;
    }
    .dir-a .a-why__card.is-feature .a-why__no { color: var(--accent); }
    .dir-a .a-why__card.is-feature .a-h3 { color: var(--fg-on-dark); }
    .dir-a .a-why__card.is-feature .a-why__body { color: var(--fg-on-dark-2); }
    .dir-a .a-why__card.is-feature .a-why__bullets li { color: var(--fg-on-dark-2); }
    .dir-a .a-why__card.is-feature .a-why__feature-tag {
      position: absolute; top: 24px; right: 24px;
      display: inline-flex; align-items: center; gap: 8px;
      font-family: "HarmonyOS Sans", monospace;
      font-size: calc(11px * var(--t-scale));
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--accent);
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid rgba(232,66,36,0.5);
    }
    .dir-a .a-why__card.is-feature .a-why__feature-tag::before {
      content: ""; width: 6px; height: 6px; border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 3px rgba(232,66,36,0.22);
    }
    .dir-a .a-why__no {
      font-size: calc(56px * var(--t-scale));
      font-weight: 700;
      letter-spacing: -0.03em;
      color: var(--accent);
      line-height: 1;
    }
    .dir-a .a-why__bullets {
      display: flex; flex-direction: column;
      gap: 12px;
      list-style: none;
      padding: 0; margin: 0;
    }
    .dir-a .a-why__bullets li {
      display: flex; gap: 14px;
      font-size: calc(15px * var(--t-scale));
      line-height: 1.55;
      color: rgba(26,27,20,0.74);
    }
    .dir-a .a-why__bullets li::before {
      content: "";
      flex-shrink: 0;
      margin-top: 9px;
      width: 6px; height: 6px;
      background: var(--accent);
      border-radius: 50%;
    }

    /* how it works */
    .dir-a .a-how { background: var(--bg-deep); color: var(--fg-on-dark); }
    .dir-a .a-how__row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 0;
      border-top: 1px solid var(--line-dark);
      border-bottom: 1px solid var(--line-dark);
    }
    .dir-a .a-how__step {
      padding: 48px 32px;
      border-right: 1px solid var(--line-dark);
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-height: 320px;
      position: relative;
      transition: background 0.3s ease-out;
    }
    .dir-a .a-how__step:hover { background: rgba(255,230,169,0.04); }
    .dir-a .a-how__step:last-child { border-right: none; }
    .dir-a .a-how__step .num {
      font-size: calc(64px * var(--t-scale));
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1;
      color: var(--fg-on-dark-2);
      transition: color 0.25s ease-out;
    }
    .dir-a .a-how__step:hover .num { color: var(--fg-on-dark); }
    .dir-a .a-how__step.has-cta .num { color: var(--accent); }
    .dir-a .a-how__ill {
      width: 88px; height: 88px;
      border-radius: 50%;
      background: rgba(255,230,169,0.06);
      border: 1px solid var(--line-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s ease-out, border-color 0.3s ease-out, transform 0.4s cubic-bezier(0.22,1,0.36,1);
      flex-shrink: 0;
    }
    .dir-a .a-how__ill img {
      width: 60%; height: 60%;
      object-fit: contain;
      filter: brightness(0) invert(1) opacity(0.86);
      transition: filter 0.3s, transform 0.4s cubic-bezier(0.22,1,0.36,1);
    }
    .dir-a .a-how__step:hover .a-how__ill {
      background: rgba(255,230,169,0.12);
      border-color: rgba(232,66,36,0.5);
      transform: rotate(-3deg);
    }
    .dir-a .a-how__step:hover .a-how__ill img {
      transform: scale(1.06);
      filter: brightness(0) invert(1) opacity(1);
    }
    .dir-a .a-how__step.has-cta .a-how__ill {
      background: rgba(232,66,36,0.12);
      border-color: rgba(232,66,36,0.4);
    }
    .dir-a .a-how__step.has-cta .a-how__ill img {
      filter: brightness(0) saturate(100%) invert(38%) sepia(95%) saturate(2200%) hue-rotate(355deg) brightness(98%) contrast(95%);
    }

    /* partners */
    .dir-a .a-partners { background: var(--bg-cream); }
    .dir-a .a-partners__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
    .dir-a .a-partners__card {
      background: #FFFFFF;
      border-radius: var(--t-radius);
      overflow: hidden;
      border: 1px solid var(--line-light);
      display: flex;
      flex-direction: column;
      transition: transform 0.28s cubic-bezier(0.22,1,0.36,1),
                  box-shadow 0.28s ease-out,
                  border-color 0.28s ease-out;
    }
    .dir-a .a-partners__card:hover {
      transform: translateY(-4px);
      box-shadow: 0 22px 40px -24px rgba(12,14,8,0.28);
      border-color: rgba(232,66,36,0.4);
    }
    .dir-a .a-partners__photo {
      aspect-ratio: 4/3;
      transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
    }
    .dir-a .a-partners__card:hover .a-partners__photo { transform: scale(1.04); }
    .dir-a .a-partners__body { padding: 24px 24px 28px; display: flex; flex-direction: column; gap: 8px; }

    /* testimonial */
    .dir-a .a-test { background: var(--bg-warm); }
    .dir-a .a-test__quote {
      font-size: calc(40px * var(--t-scale));
      line-height: 1.35;
      letter-spacing: -0.01em;
      font-weight: 500;
      max-width: 980px;
      text-wrap: balance;
    }
    .dir-a .a-test__byline {
      margin-top: 32px;
      display: flex; align-items: center; gap: 20px;
    }
    .dir-a .a-test__avatar {
      width: 56px; height: 56px;
      border-radius: 50%;
      background: rgba(26,27,20,0.16);
      border: 1px solid rgba(26,27,20,0.2);
    }

    /* faq */
    .dir-a .a-faq { background: var(--bg-cream); }
    .dir-a .a-faq__grid {
      display: grid;
      grid-template-columns: 1fr 1.6fr;
      gap: 80px;
    }

    /* founder + form */
    .dir-a .a-cta { background: var(--bg-deep); color: var(--fg-on-dark); }
    .dir-a .a-cta__grid {
      display: grid;
      grid-template-columns: 1fr 1.4fr;
      gap: 80px;
    }
    .dir-a .a-cta__form-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--line-dark);
      border-radius: 28px;
      padding: 48px 44px;
    }

    /* footer */
    .dir-a .a-footer {
      background: #06070A;
      color: var(--fg-on-dark-2);
      padding: 64px 80px 32px;
    }
    .dir-a .a-footer__grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1fr;
      gap: 48px;
      padding-bottom: 48px;
      border-bottom: 1px solid var(--line-dark);
    }
    .dir-a .a-footer__bottom {
      display: flex; justify-content: space-between; align-items: center;
      padding-top: 32px;
      color: var(--fg-on-dark-3);
    }
    .dir-a .a-footer a {
      transition: color 0.2s ease-out;
      position: relative;
    }
    .dir-a .a-footer a:hover { color: var(--accent); }
    .dir-a .a-footer__bottom span:first-child {
      display: flex; align-items: center; gap: 14px;
    }
    .dir-a .a-footer__bottom .dot {
      width: 4px; height: 4px; border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 3px rgba(232,66,36,0.18);
    }

    /* ============================================================
       Responsive — design baseline is 1440. We scale down gracefully.
       Breakpoints:
         ≤ 1280  laptops:        tighten outer padding, smaller display type
         ≤ 1024  tablets land:   2-col grids in why/partners, stack hero
         ≤ 768   tablets port:   1-col stacks for nav drawer / forms / steps
         ≤ 540   mobile:         compress further, full-width buttons
       ============================================================ */
    @media (max-width: 1280px) {
      .dir-a .a-pad { padding-left: 56px; padding-right: 56px; }
      .dir-a .a-nav { padding-left: 56px; padding-right: 56px; }
      .dir-a .a-hero__chrome { padding-left: 56px; padding-right: 56px; }
      .dir-a .a-hero__grid { padding: 80px 56px 0; gap: 48px; }
      .dir-a .a-hero__stat:first-child { padding-left: 56px; }
      .dir-a .a-hero__stat:last-child { padding-right: 56px; }
      .dir-a .a-display { font-size: calc(76px * var(--t-scale)); }
      .dir-a .a-h2 { font-size: calc(48px * var(--t-scale)); }
      .dir-a .a-footer { padding-left: 56px; padding-right: 56px; }
    }

    @media (max-width: 1024px) {
      .dir-a .a-section { padding-top: calc(96px * var(--t-density)); padding-bottom: calc(96px * var(--t-density)); }
      .dir-a .a-nav { padding: 22px 40px; gap: 24px; flex-wrap: wrap; }
      .dir-a .a-nav__links { gap: 24px; }
      .dir-a .a-pad { padding-left: 40px; padding-right: 40px; }
      .dir-a .a-hero__chrome { padding: 16px 40px; flex-wrap: wrap; gap: 12px; }
      .dir-a .a-hero__chrome span { font-size: 11px; }
      .dir-a .a-hero__grid {
        grid-template-columns: 1fr;
        padding: 64px 40px 0;
        gap: 48px;
      }
      .dir-a .a-hero__photo { aspect-ratio: 16/10; max-height: 480px; }
      .dir-a .a-hero__stats { grid-template-columns: repeat(3, 1fr); margin-top: 72px; }
      .dir-a .a-hero__stat { padding: 28px 24px; }
      .dir-a .a-hero__stat:first-child { padding-left: 40px; }
      .dir-a .a-hero__stat:last-child { padding-right: 40px; }
      .dir-a .a-hero__stat__n { font-size: calc(48px * var(--t-scale)); }
      .dir-a .a-display { font-size: clamp(56px, 9vw, 76px); }
      .dir-a .a-h2 { font-size: clamp(36px, 5.4vw, 48px); }
      /* Why-cards: 2 cols, featured spans full width on top */
      .dir-a .a-why-grid { grid-template-columns: 1fr 1fr !important; }
      .dir-a .a-why-grid .a-why__card.is-feature { grid-column: 1 / -1; }
      /* How: 2x2 */
      .dir-a .a-how__row { grid-template-columns: 1fr 1fr; }
      .dir-a .a-how__step:nth-child(2) { border-right: none; }
      .dir-a .a-how__step:nth-child(1),
      .dir-a .a-how__step:nth-child(2) { border-bottom: 1px solid var(--line-dark); }
      .dir-a .a-how__step { min-height: 260px; padding: 36px 28px; }
      /* Partners: 2 cols */
      .dir-a .a-partners__grid { grid-template-columns: 1fr 1fr; }
      /* FAQ: stack */
      .dir-a .a-faq__grid { grid-template-columns: 1fr; gap: 32px; }
      .dir-a .a-faq__grid > div:first-child { position: static !important; }
      /* Apply: stack */
      .dir-a .a-cta__grid { grid-template-columns: 1fr; gap: 48px; }
      .dir-a .a-cta__form-card { padding: 36px 32px; }
      /* Footer 4 cols → 2 cols, brand spans */
      .dir-a .a-footer__grid {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
      }
      .dir-a .a-footer__grid > div:first-child { grid-column: 1 / -1; }
      /* Testimonial */
      .dir-a .a-test__quote { font-size: calc(32px * var(--t-scale)); }
    }

    @media (max-width: 768px) {
      .dir-a .a-nav {
        padding: 18px 24px;
      }
      .dir-a .a-nav__links { display: none; } /* simplest mobile nav for now */
      .dir-a .a-pad { padding-left: 24px; padding-right: 24px; }
      .dir-a .a-hero__chrome { padding: 14px 24px; }
      .dir-a .a-hero__grid { padding: 40px 24px 0; gap: 32px; }
      .dir-a .a-hero__stats { grid-template-columns: 1fr; }
      .dir-a .a-hero__stat {
        border-right: none;
        border-top: 1px solid var(--line-dark);
        padding: 28px 24px !important;
      }
      .dir-a .a-hero__stat:first-child { border-top: none; padding-top: 28px !important; }
      .dir-a .a-display { font-size: clamp(44px, 11vw, 56px); }
      .dir-a .a-h2 { font-size: clamp(30px, 7vw, 40px); }
      .dir-a .a-h3 { font-size: calc(22px * var(--t-scale)); }
      .dir-a .a-body { font-size: calc(15px * var(--t-scale)); }
      .dir-a .a-section { padding-top: calc(72px * var(--t-density)); padding-bottom: calc(72px * var(--t-density)); }
      /* Stack section headers: title + meta vertical, not justify-between */
      .dir-a .a-section-head {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 20px !important;
      }
      .dir-a .a-why-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
      .dir-a .a-why__card { padding: 36px 28px 28px; }
      .dir-a .a-why__no { font-size: calc(48px * var(--t-scale)); }
      .dir-a .a-how__row { grid-template-columns: 1fr; }
      .dir-a .a-how__step { border-right: none; border-bottom: 1px solid var(--line-dark); }
      .dir-a .a-how__step:last-child { border-bottom: none; }
      .dir-a .a-partners__grid { grid-template-columns: 1fr; gap: 20px; }
      .dir-a .a-cta__form-card { padding: 28px 24px; border-radius: 20px; }
      .dir-a .a-footer { padding-left: 24px; padding-right: 24px; padding-top: 48px; }
      .dir-a .a-footer__grid {
        grid-template-columns: 1fr 1fr;
        gap: 28px;
        padding-bottom: 32px;
      }
      .dir-a .a-footer__bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
        padding-top: 24px;
      }
      .dir-a .a-test__quote { font-size: calc(26px * var(--t-scale)); }
      .dir-a .a-test__byline {
        flex-wrap: wrap;
        gap: 16px;
      }
    }

    @media (max-width: 540px) {
      .dir-a .a-nav { padding: 14px 20px; }
      .dir-a .a-nav__brand img { height: 20px; }
      .dir-a .a-nav__brand span { font-size: 10px; padding-left: 10px; }
      .dir-a .a-nav__cta { padding: 10px 16px; font-size: 13px; }
      .dir-a .a-pad { padding-left: 20px; padding-right: 20px; }
      .dir-a .a-hero__grid { padding: 32px 20px 0; }
      .dir-a .a-hero__chrome { padding: 12px 20px; gap: 8px; }
      .dir-a .a-hero__chrome span:nth-child(3) { display: none; }
      .dir-a .a-display { font-size: clamp(36px, 12.5vw, 44px); letter-spacing: calc(-0.035em + 4px); }
      .dir-a .a-h2 { font-size: clamp(26px, 8vw, 32px); }
      .dir-a .a-hero__stat:first-child { padding-left: 20px !important; }
      .dir-a .a-hero__stat:last-child { padding-right: 20px !important; }
      .dir-a .a-footer__grid { grid-template-columns: 1fr; }
      /* Make hero CTAs full-width on small phones */
      .dir-a .a-hero__cta-row { flex-direction: column !important; align-items: stretch !important; }
      .dir-a .a-hero__cta-row .lf-cta {
        display: flex !important;
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        box-sizing: border-box !important;
        justify-content: center !important;
      }
    }
  `;

  // Smooth-scroll handler for in-page anchors. Falls through for external/mailto.
  const scrollTo = (sel) => (e) => {
    if (!sel || sel[0] !== "#") return;
    const target = document.querySelector(sel);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    // Push to URL so it's shareable.
    history.replaceState(null, "", sel);
  };

  // Apply CTA href is shared by nav + hero + footer.
  const APPLY = "#apply";

  // Feature flag — toggle on once we have ≥3 confirmed partner cards with real photos.
  const SHOW_PARTNERS = false;

  // Filter out the partners link from the nav when the section is hidden.
  const navItems = t.nav.filter((n) => SHOW_PARTNERS || n.href !== "#partners");

  return (
    <div className="lva-doc dir-a" style={{ "--t-radius": "calc(var(--_r, 16px))" }}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ============ NAV ============ */}
      <nav className="a-nav" style={{ background: "var(--bg-deep)" }}>
        <a href="/" className="a-nav__brand" style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="./logo-orange-horizontal.png" alt="Lava" style={{ height: 24, filter: "none" }} />
          <span className="a-mono" style={{ color: "var(--fg-on-dark-3)", borderLeft: "1px solid var(--line-dark)", paddingLeft: 14 }}>VENUE PARTNERS</span>
        </a>
        <div className="a-nav__links">
          {navItems.map((n) => <a key={n.label} href={n.href} onClick={scrollTo(n.href)}>{n.label}</a>)}
        </div>
        <a href={APPLY} onClick={scrollTo(APPLY)} className="a-nav__cta" role="button">{t.hero.ctaPrimary}</a>
      </nav>

      {/* ============ HERO ============ */}
      <header className="a-hero">
        <div className="a-hero__chrome a-mono">
          <span>LAVA × VENUE · 2026</span>
          <span>TPE · TAIPEI</span>
          <span>合作店家招募進行中</span>
        </div>
        <div className="a-hero__grid">
          <div style={{ paddingBottom: 64, display: "flex", flexDirection: "column", gap: 36 }}>
            <span className="a-eyebrow" style={{ color: "var(--fg-on-dark)" }}>{t.hero.eyebrow}</span>
            <h1 className="a-display" style={{ color: "var(--fg-on-dark)" }}>
              {t.hero.headline[0]}
              <br />
              <span className="a-em">{t.hero.headline[1]}</span>
            </h1>
            <p className="a-body" style={{ color: "var(--fg-on-dark-2)", maxWidth: 600 }}>
              {t.hero.sub}
            </p>
            <div className="a-hero__cta-row" style={{ display: "flex", gap: 14, marginTop: 8, flexWrap: "wrap" }}>
              <a href={APPLY} onClick={scrollTo(APPLY)} className="lf-cta" role="button">
                {t.hero.ctaPrimary}
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none"><path d="M1 7H15M15 7L9 1M15 7L9 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </a>
              <a href="#why" onClick={scrollTo("#why")} className="lf-cta lf-cta--ghost" role="button" style={{ color: "var(--fg-on-dark)" }}>{t.hero.ctaSecondary}</a>
            </div>
          </div>
          <div className="a-hero__photo">
            <div className="photo-meta a-mono" style={{ color: "var(--fg-on-dark-2)" }}>FIG. 01 · 合作店家現場</div>
          </div>
        </div>

        {/* stats — only accumulated matches is "real", others marked */}
        <div className="a-hero__stats">
          {t.stats.map((s, i) => (
            <div key={i} className="a-hero__stat">
              <div className="a-mono" style={{ color: "var(--fg-on-dark-3)", marginBottom: 16 }}>
                {String(i + 1).padStart(2, "0")} · {s.label}
              </div>
              <div className="a-hero__stat__n" style={{ color: s.primary ? "var(--fg-on-dark)" : "var(--fg-on-dark-3)" }}>
                {s.value}<span className="u">{s.suffix}</span>
              </div>
              <div className="a-small" style={{ color: "var(--fg-on-dark-3)", marginTop: 14 }}>{s.note}</div>
            </div>
          ))}
        </div>
      </header>

      {/* ============ WHY ============ */}
      <section id="why" className="a-why a-section a-pad">
        <div className="a-section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, gap: 48 }}>
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 24 }}>
            <span className="a-eyebrow">為什麼選擇 Lava</span>
            <h2 className="a-h2">三件事，<span className="a-em">合作店家從第一個月就會有感。</span></h2>
          </div>
          <span className="a-mono" style={{ color: "rgba(26,27,20,0.45)" }}>SECTION 01 · 為什麼是 Lava</span>
        </div>
        <hr className="a-rule" style={{ marginBottom: 48 }} />
        <div className="a-why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {t.why.map((w, i) => (
            <div key={w.no} className={"a-why__card" + (i === 0 ? " is-feature" : "")}>
              {i === 0 && <span className="a-why__feature-tag">Most loved</span>}
              <div className="a-why__no">{w.no}</div>
              <span className="a-mono" style={{ color: "var(--accent)" }}>{w.tag}</span>
              <h3 className="a-h3">{w.title}</h3>
              <p className="a-small a-why__body">{w.body}</p>
              <ul className="a-why__bullets">
                {w.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how" className="a-how a-section a-pad">
        <div className="a-section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, gap: 48 }}>
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 24 }}>
            <span className="a-eyebrow" style={{ color: "var(--fg-on-dark)" }}>合作流程</span>
            <h2 className="a-h2" style={{ color: "var(--fg-on-dark)" }}>四個步驟，<br /><span className="a-em">兩週內開始迎接客人。</span></h2>
          </div>
          <span className="a-mono" style={{ color: "var(--fg-on-dark-3)" }}>SECTION 02 · HOW IT WORKS</span>
        </div>
        <div className="a-how__row">
          {t.how.map((h, i) => {
            const ill = [
              "./apron-host.svg",
              "./host-couple.svg",
              "./pour-share.svg",
              "./cheers-pair.svg",
            ][i];
            return (
              <div key={i} className={"a-how__step" + (i === t.how.length - 1 ? " has-cta" : "")}>
                <div className="a-mono" style={{ color: "var(--fg-on-dark-3)" }}>STEP {h.no}</div>
                <div className="a-how__ill"><img src={ill} alt="" /></div>
                <div className="num">{h.no}</div>
                <h3 className="a-h3" style={{ color: "var(--fg-on-dark)" }}>{h.title}</h3>
                <p className="a-small" style={{ color: "var(--fg-on-dark-2)" }}>{h.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ PARTNERS ============
           Hidden until we have ≥3 confirmed partner cards with real
           photos. Toggle by setting SHOW_PARTNERS = true above. */}
      {SHOW_PARTNERS && (
      <section id="partners" className="a-partners a-section a-pad">
        <div className="a-section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, gap: 48 }}>
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 24 }}>
            <span className="a-eyebrow">合作店家</span>
            <h2 className="a-h2">和我們一起把<span className="a-em">夜晚過得好一點</span>的店家。</h2>
          </div>
          <span className="a-mono" style={{ color: "rgba(26,27,20,0.45)" }}>SECTION 03 · PARTNERS</span>
        </div>
        <div className="a-partners__grid">
          {t.partners.map((p, i) => (
            <div key={i} className="a-partners__card">
              <div className="a-partners__photo lf-photo lf-photo--mark" style={{ backgroundImage: i === 0 ? "url(./icebreaker-fan.jpg)" : "none", backgroundColor: i === 0 ? "transparent" : "rgba(26,27,20,0.07)" }} />
              <div className="a-partners__body">
                <span className="a-mono" style={{ color: "var(--accent)" }}>{p.tag}</span>
                <h3 className="a-h3">{p.name}</h3>
                <p className="a-small" style={{ color: "rgba(26,27,20,0.65)" }}>{p.district}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* ============ TESTIMONIAL ============ */}
      <section className="a-test a-section a-pad">
        <span className="a-eyebrow">店家的話</span>
        <p className="a-test__quote" style={{ marginTop: 32 }}>
          「{t.testimonial.quote}」
        </p>
        <div className="a-test__byline">
          <div className="a-test__avatar" />
          <div>
            <div className="a-h3" style={{ fontSize: "calc(20px * var(--t-scale))" }}>{t.testimonial.author}</div>
            <div className="a-small" style={{ color: "rgba(26,27,20,0.65)" }}>{t.testimonial.venue}</div>
          </div>
          <div style={{ flex: 1 }} />
          <span className="a-mono" style={{ color: "rgba(26,27,20,0.4)" }}>{t.testimonial.note}</span>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="a-faq a-section a-pad">
        <div className="a-faq__grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 28, position: "sticky", top: 32, height: "max-content" }}>
            <span className="a-eyebrow">常見問題</span>
            <h2 className="a-h2">關於合作，<br />你可能想知道的事。</h2>
            <p className="a-body" style={{ color: "rgba(26,27,20,0.65)", maxWidth: 380 }}>
              還有其他問題？請直接填表留下聯絡資訊，我們會在三個工作日內回覆。
            </p>
          </div>
          <div>
            {t.faq.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
            <hr className="a-rule" />
          </div>
        </div>
      </section>

      {/* ============ FORM / FOUNDER NOTE ============ */}
      <section id="apply" className="a-cta a-section a-pad">
        <div className="a-cta__grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <span className="a-eyebrow" style={{ color: "var(--fg-on-dark)" }}>申請合作</span>
            <h2 className="a-h2" style={{ color: "var(--fg-on-dark)" }}>
              現在開始，<br />
              <span className="a-em">用 Lava 補滿你的桌。</span>
            </h2>
            <p className="a-body" style={{ color: "var(--fg-on-dark-2)", maxWidth: 420 }}>
              {t.form.sub}
            </p>
            <hr className="a-rule dark" style={{ margin: "16px 0" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 14, color: "var(--fg-on-dark-2)" }}>
              <span className="a-mono" style={{ color: "var(--fg-on-dark-3)" }}>CO-FOUNDER NOTE</span>
              <p className="a-small" style={{ color: "var(--fg-on-dark-2)", lineHeight: 1.75 }}>
                「{t.founder.body}」
              </p>
              <p className="a-small" style={{ color: "var(--fg-on-dark)" }}>
                — {t.founder.name}, {t.founder.title}
              </p>
            </div>
          </div>
          <div className="a-cta__form-card">
            <LavaForm theme="dark" layout="two-col" />
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="a-footer">
        <div className="a-footer__grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <img src="./logo-orange-horizontal.png" alt="Lava" style={{ height: 28, width: "auto", alignSelf: "flex-start" }} />
            <p className="a-small" style={{ color: "var(--fg-on-dark-2)", maxWidth: 280 }}>
              {t.brand.sloganTC}<br />
              <span style={{ color: "var(--fg-on-dark-3)" }}>{t.brand.slogan}</span>
            </p>
          </div>
          {t.footer.cols.map((c, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <span className="a-mono" style={{ color: "var(--fg-on-dark-3)" }}>{c.title}</span>
              {c.items.map((it) => {
                if (!it.href) {
                  // Plain text item (e.g. "Taipei · Taiwan")
                  return <span key={it.label} className="a-small" style={{ color: "var(--fg-on-dark-2)" }}>{it.label}</span>;
                }
                const isAnchor = it.href.startsWith("#");
                return (
                  <a key={it.label}
                    className="a-small"
                    href={it.href}
                    onClick={isAnchor ? scrollTo(it.href) : undefined}
                    target={it.external ? "_blank" : undefined}
                    rel={it.external ? "noopener noreferrer" : undefined}
                    style={{ color: "var(--fg-on-dark)" }}>
                    {it.label}
                  </a>
                );
              })}
            </div>
          ))}
        </div>
        <div className="a-footer__bottom a-mono">
          <span>
            <span className="dot"></span>
            {t.brand.company}
          </span>
          <span>{t.footer.rights}</span>
        </div>
      </footer>
    </div>
  );
}

window.DirectionA = DirectionA;
