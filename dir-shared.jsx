/* ============================================================
   dir-shared.jsx — common content + form schema for all 3 directions
   ============================================================ */

// ─────────────────────────────────────────────────────────────
// Copy bank — written in TC, polished to "warm + professional" tone.
// One source of truth so the three directions stay in sync.
// ─────────────────────────────────────────────────────────────
const CONTENT = {
  brand: {
    name: "Lava",
    company: "Lava INC. · 伴途工作室股份有限公司",
    companyEN: "Lava INC.",
    slogan: "Fewer Texts. Better Dates.",
    sloganTC: "聊了三百句還沒見面？不如直接見面。",
    contactEmail: "service@lava.tw",
  },

  // Top-nav links — in-page anchors. Apply CTA scrolls to #apply.
  nav: [
    { label: "為什麼是 Lava", href: "#why" },
    { label: "合作流程", href: "#how" },
    { label: "合作店家", href: "#partners" },
    { label: "常見問題", href: "#faq" },
  ],

  // External links re-used by nav CTA + multiple footer items.
  links: {
    apply: "#apply",
    aboutInstagram: "https://www.instagram.com/lava_dating?igsh=MTA4MTRybTllMzQwOQ%3D%3D",
    downloadApp: "https://manager.lava.tw/",
    terms: "https://lava.tw/privacy-policy-2/",
    privacy: "https://lava.tw/contact/",
    // Brand sponsorship + media inquiries go to Jesse with service cc'd.
    sponsorshipMail: "mailto:jesse@lava.tw?cc=service@lava.tw&subject=Lava%20%C3%97%20%E5%93%81%E7%89%8C%E8%B4%8A%E5%8A%A9%E5%90%88%E4%BD%9C%E6%B4%BD%E8%A9%A2",
    mediaMail: "mailto:jesse@lava.tw?cc=service@lava.tw&subject=Lava%20%E5%AA%92%E9%AB%94%E8%81%AF%E7%B9%AB",
    serviceMail: "mailto:service@lava.tw",
    instagramBrand: "https://www.instagram.com/lava_dating?igsh=MTA4MTRybTllMzQwOQ%3D%3D",
  },

  hero: {
    eyebrow: "合作店家招募 · VENUE PARTNERSHIP",
    headline: ["把對的客人，", "送上你的桌。"],
    sub: "Lava 是台北的「不靠聊天」交友 App。配對成功後雙方直接走進合作店家見面、消費。我們把可預期的兩人客流，導進你最需要被填滿的那個時段。",
    ctaPrimary: "立即洽詢合作",
    ctaSecondary: "了解合作模式",
  },

  // Only matches is a "real" stat per user — others are placeholders.
  stats: [
    { value: "12,400", suffix: "+", label: "累積配對對數", note: "上線以來 · 截至 2026/05", primary: true },
    { value: "—", suffix: "", label: "合作店家數", note: "招募中", primary: false },
    { value: "—", suffix: "", label: "覆蓋城市", note: "首發大台北", primary: false },
  ],

  // Top 3 reasons — user's words, polished.
  why: [
    {
      no: "01",
      tag: "REVENUE",
      title: "有效增加非峰期營收",
      body: "Lava 把客人導向你最空的時段：平日傍晚 17:00–20:00、假日餐期前段 18:00–20:30。首季合作即承諾至少引流 10 組到店客人，未達標退費。",
      bullets: [
        "可指定可開放時段，週週調整",
        "每對客人最低消費由店家設定",
        "首季保證引流 10 組客人，未達標全額退費",
      ],
    },
    {
      no: "02",
      tag: "EXPOSURE",
      title: "免費參與品牌曝光計劃",
      body: "你的店在 App 內與社群平台同步曝光：店家頁、配對推薦、Lava 公開選店指南、月度社群貼文。所有曝光不需額外付費。",
      bullets: [
        "App 內店家專頁與精選照片牆",
        "Lava IG / 電子報固定排程露出",
        "每季一次聯名活動或店家專訪",
      ],
    },
    {
      no: "03",
      tag: "AUDIENCE",
      title: "更精準的品牌受眾導流",
      body: "Lava 用戶 80% 落在 22–35 歲都會年輕族群、平均月收高於市場均值、約會與品酒意願明確。比起一般廣告，這些是被你過濾過的客人。",
      bullets: [
        "22–35 歲都會年輕用戶為主",
        "首次到店即帶來新顧客名單",
        "可選擇配對的客群興趣標籤",
      ],
    },
  ],

  // How it works — from venue's perspective (4 steps).
  how: [
    { no: "01", title: "提交合作意向", body: "填寫下方表單，告訴我們你的店、想合作的時段與在意的事。" },
    { no: "02", title: "BD 一對一對接", body: "三個工作日內，由我們的合作經理與你聯繫，安排現場拜訪或視訊。" },
    { no: "03", title: "簽訂合作", body: "敲定可開放時段、每對最低消費、季訂閱費與結算週期。" },
    { no: "04", title: "上架 Lava", body: "店家頁正式上線，下一輪配對開始就有客人到你的桌前。" },
  ],

  // Featured partners — placeholders (user has only Sitdown Taipei confirmed
  // but asked for "no" on real partner names to use).
  partners: [
    { name: "Sitdown Taipei", district: "大安 · ANNIVERSARY", tag: "BAR", real: true },
    { name: "店家二　Placeholder", district: "中山 · NIGHT BAR", tag: "BAR" },
    { name: "店家三　Placeholder", district: "信義 · BISTRO", tag: "RESTAURANT" },
    { name: "店家四　Placeholder", district: "大同 · CAFÉ", tag: "CAFÉ" },
    { name: "店家五　Placeholder", district: "松山 · WINE BAR", tag: "BAR" },
    { name: "店家六　Placeholder", district: "中正 · LISTENING BAR", tag: "BAR" },
  ],

  // Real testimonial copy is the user's call — clearly marked placeholder.
  testimonial: {
    quote: "Lava 把以前最難填滿的週三、週四傍晚補上了。客人單純為了見面而來，店裡氣氛也跟著變得不一樣。",
    author: "店家主理人",
    venue: "Sitdown Taipei · 合作店家",
    note: "PLACEHOLDER · 待店家審閱後上線",
  },

  // FAQ — focused on the questions a venue owner actually asks.
  faq: [
    {
      q: "加入成為 Lava 合作店家費用怎麼計算？",
      a: "統一費用為初次設定費 NT$1,000 元、季訂閱費 NT$9,000 元。首季合作將承諾商家至少引流 10 組客人至店；若未達標則全額退還該季訂閱費用。",
    },
    {
      q: "客人是怎麼選到我的店的？",
      a: "Lava 會依雙方用戶的所在區域、想去的店家類型（酒吧／咖啡／餐廳）、可用時段，從你開放的時段中推薦合適的時段給用戶，由用戶最終確認。",
    },
    {
      q: "我可以指定哪些時段對 Lava 開放嗎？",
      a: "可以。每週可自由勾選可開放時段、座位數、與每對客人的最低消費。也可以暫時關閉特定週次，例如包場活動時。",
    },
    {
      q: "合作有最短期限嗎？想退出怎麼辦？",
      a: "我們的合作採用季度合作，以確保用戶、商家、Lava 團隊能有足夠的時間進行了解及優化服務。合作商家需於合作期間提前 30 天提出下架申請，以確保用戶不會被安排至已解除合作的商家，維護用戶及合作商家之權益。",
    },
    {
      q: "我會拿到客人的個資嗎？",
      a: "店家會在客人到店前收到匿名化的訂位資訊（時間、人數、客人化名與聯絡電話）。完整個資僅用於配對與聯繫，不會提供給店家做行銷使用。",
    },
  ],

  // Inquiry form — every field the user asked for.
  form: {
    title: "成為合作店家",
    sub: "填寫表單後三個工作日內，Lava 合作經理會與你聯繫。",
    fields: [
      { id: "venueName", label: "店名", placeholder: "例：Sitdown Taipei", required: true, full: false },
      { id: "contactName", label: "聯絡人姓名", placeholder: "請填入主理人或聯繫窗口", required: true, full: false },
      { id: "phone", label: "聯絡電話", placeholder: "0912-345-678", required: true, full: false },
      { id: "email", label: "Email", placeholder: "hello@yourvenue.com", required: true, full: false, type: "email" },
      {
        id: "type", label: "店家類型", required: true, full: false,
        select: ["請選擇", "酒吧 Bar", "咖啡廳 Café", "餐廳 Restaurant / Bistro", "Listening Bar", "其他"],
      },
      { id: "district", label: "店家位置", placeholder: "例：台北市 · 大安區", required: true, full: false },
      { id: "seats", label: "座位數", placeholder: "例：24 席", required: false, full: false, type: "number" },
      { id: "slots", label: "想開放的平日時段", placeholder: "例：週二至週四 17:30–20:00", required: false, full: false },
      { id: "social", label: "Instagram / 官網", placeholder: "@yourvenue 或 https://", required: false, full: true },
      { id: "notes", label: "想了解的內容 / 備註", placeholder: "你對 Lava 有什麼疑問？或想合作的想法？", required: false, full: true, textarea: true },
    ],
    consent: "送出後，即表示你同意 Lava 合作經理依本表單資料與你聯繫。",
    cta: "送出合作申請",
  },

  founder: {
    name: "Vivian Wu",
    title: "Lava 共同創辦人",
    body: "我們從來不覺得交友 App 是科技問題，而是「人有沒有真的見面」這件事。Lava 把見面的門檻拉到最低、把見面的場所交給最會做場景的合作店家。如果你的店也相信好的對話需要被好的空間承接，歡迎來聊聊。",
  },

  // Formspree endpoint — submissions go here via AJAX POST (see LavaForm).
  formspree: "https://formspree.io/f/mwvznrok",

  footer: {
    cols: [
      {
        title: "Lava",
        items: [
          { label: "關於我們", href: "https://www.instagram.com/lava_dating?igsh=MTA4MTRybTllMzQwOQ%3D%3D", external: true },
          { label: "下載 App",   href: "https://manager.lava.tw/",   external: true },
          { label: "用戶條款", href: "https://lava.tw/privacy-policy-2/", external: true },
          { label: "隱私政策", href: "https://lava.tw/contact/",          external: true },
        ],
      },
      {
        title: "合作",
        items: [
          { label: "合作店家招募", href: "#apply" },
          { label: "品牌贊助合作", href: "mailto:jesse@lava.tw?cc=service@lava.tw&subject=Lava%20%C3%97%20%E5%93%81%E7%89%8C%E8%B4%8A%E5%8A%A9%E5%90%88%E4%BD%9C%E6%B4%BD%E8%A9%A2" },
          { label: "媒體聯繫",     href: "mailto:jesse@lava.tw?cc=service@lava.tw&subject=Lava%20%E5%AA%92%E9%AB%94%E8%81%AF%E7%B9%AB" },
        ],
      },
      {
        title: "聯繫",
        items: [
          { label: "service@lava.tw",          href: "mailto:service@lava.tw" },
          { label: "Instagram @lava_dating",   href: "https://www.instagram.com/lava_dating?igsh=MTA4MTRybTllMzQwOQ%3D%3D", external: true },
          { label: "Taipei · Taiwan",          href: null },
        ],
      },
    ],
    rights: "© 2026 Lava INC. All rights reserved.",
  },
};


// ─────────────────────────────────────────────────────────────
// LavaForm — controlled inquiry form. Theme prop controls dark vs light skin.
// ─────────────────────────────────────────────────────────────
function LavaForm({ theme = "light", layout = "two-col", className, style }) {
  // theme: "light" | "dark" | "warm"
  // layout: "two-col" | "stacked"
  const themeVars = {
    light: {
      "--lf-bg": "#FFFFFF",
      "--lf-fg": "#1A1B14",
      "--lf-border": "rgba(26,27,20,0.16)",
      "--lf-label": "rgba(26,27,20,0.62)",
    },
    dark: {
      "--lf-bg": "rgba(255,255,255,0.04)",
      "--lf-fg": "#FFF5DC",
      "--lf-border": "rgba(255,230,169,0.22)",
      "--lf-label": "rgba(255,230,169,0.65)",
    },
    warm: {
      "--lf-bg": "#FFFAEF",
      "--lf-fg": "#1A1B14",
      "--lf-border": "rgba(26,27,20,0.18)",
      "--lf-label": "rgba(26,27,20,0.6)",
    },
  }[theme];

  // Submit state: idle | submitting | success | error
  const [status, setStatus] = React.useState("idle");
  const [errMsg, setErrMsg] = React.useState("");
  const formRef = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = formRef.current;
    const data = new FormData(form);
    // Inject a friendlier subject + reply-to so the BD inbox sees the venue name.
    const venueName = data.get("venueName") || "未填寫店名";
    data.set("_subject", `[Lava 合作店家招募] ${venueName}`);

    setStatus("submitting");
    setErrMsg("");
    try {
      const res = await fetch(CONTENT.formspree, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        const m = (j.errors && j.errors.map(e => e.message).join("、")) || "送出失敗，請稍後再試或來信 service@lava.tw";
        setStatus("error");
        setErrMsg(m);
      }
    } catch (err) {
      setStatus("error");
      setErrMsg("網路連線錯誤，請稍後再試或來信 service@lava.tw");
    }
  };

  const fields = CONTENT.form.fields;
  const isDark = theme === "dark";

  // Success card replaces the form once Formspree returns 200.
  if (status === "success") {
    return (
      <div
        className={"lva-form lva-form--done " + (className || "")}
        style={{
          ...themeVars,
          ...style,
          padding: "40px",
          border: `1px solid ${isDark ? "rgba(255,230,169,0.22)" : "rgba(26,27,20,0.14)"}`,
          background: isDark ? "rgba(255,230,169,0.04)" : "#FFFAEF",
          borderRadius: "var(--t-radius)",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          color: "var(--lf-fg)",
        }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: "rgba(232,66,36,0.14)",
          color: "#E84224",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
            <path d="M2 10L9 17L24 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 style={{
          fontSize: "calc(28px * var(--t-scale))",
          fontWeight: 700,
          letterSpacing: "-0.015em",
          lineHeight: 1.2,
          color: "var(--lf-fg)",
        }}>已收到申請，感謝你！</h3>
        <p style={{ fontSize: "calc(15px * var(--t-scale))", color: "var(--lf-label)", lineHeight: 1.7 }}>
          Lava 合作經理會在三個工作日內以你留下的聯絡方式聯繫。
          <br />若有急事，歡迎來信 <a href="mailto:service@lava.tw" style={{ color: "#E84224", textDecoration: "underline", textUnderlineOffset: 3 }}>service@lava.tw</a>。
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="lf-cta lf-cta--ghost"
          style={{ alignSelf: "flex-start", color: "var(--lf-fg)", borderColor: isDark ? "rgba(255,230,169,0.4)" : "rgba(26,27,20,0.3)" }}>
          再填一次
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      ref={formRef}
      className={"lva-form " + (className || "")}
      style={{ ...themeVars, ...style }}
      action={CONTENT.formspree}
      method="POST"
      onSubmit={handleSubmit}>
      <div className="lva-form__grid" style={{
        display: "grid",
        gridTemplateColumns: layout === "two-col" ? "repeat(auto-fit, minmax(220px, 1fr))" : "1fr",
        gap: "calc(20px * var(--t-density))",
      }}>
        {fields.map((f) => (
          <div key={f.id} className="lf-field" style={{ gridColumn: f.full ? "1 / -1" : "auto" }}>
            <label htmlFor={f.id}>
              {f.label}{f.required && <span className="lf-req">*</span>}
            </label>
            {f.textarea ? (
              <textarea id={f.id} name={f.id} placeholder={f.placeholder} required={f.required} disabled={submitting} />
            ) : f.select ? (
              <select id={f.id} name={f.id} required={f.required} defaultValue="" disabled={submitting}>
                {f.select.map((opt, i) => (
                  <option key={i} value={i === 0 ? "" : opt} disabled={i === 0}>{opt}</option>
                ))}
              </select>
            ) : (
              <input id={f.id} name={f.id} type={f.type || "text"} placeholder={f.placeholder} required={f.required} disabled={submitting} />
            )}
          </div>
        ))}
        {/* Honeypot for spambots — Formspree convention */}
        <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      </div>
      <div className="lva-form__foot" style={{
        marginTop: "calc(28px * var(--t-density))",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}>
        <p style={{ fontSize: "calc(13px * var(--t-scale))", color: "var(--lf-label)", lineHeight: 1.6 }}>
          {CONTENT.form.consent}
        </p>
        {status === "error" && (
          <p style={{
            fontSize: "calc(13px * var(--t-scale))",
            color: "#E84224",
            background: "rgba(232,66,36,0.08)",
            border: "1px solid rgba(232,66,36,0.32)",
            padding: "10px 14px",
            borderRadius: 8,
            lineHeight: 1.5,
          }}>送出失敗：{errMsg}</p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="lf-cta"
          style={{ alignSelf: "flex-start", opacity: submitting ? 0.6 : 1, cursor: submitting ? "wait" : "pointer" }}>
          {submitting ? "送出中…" : CONTENT.form.cta}
          {!submitting && (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}


// ─────────────────────────────────────────────────────────────
// FAQItem — accordion-style entry used by all three directions.
// ─────────────────────────────────────────────────────────────
function FAQItem({ q, a, dark = false, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const colors = dark
    ? { border: "rgba(255,230,169,0.18)", fg: "#FFF5DC", sub: "rgba(255,230,169,0.72)" }
    : { border: "rgba(26,27,20,0.14)", fg: "#1A1B14", sub: "rgba(26,27,20,0.7)" };
  return (
    <div style={{ borderTop: `1px solid ${colors.border}`, padding: "calc(22px * var(--t-density)) 0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          all: "unset",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          cursor: "pointer",
          color: colors.fg,
        }}>
        <span style={{ fontSize: "calc(20px * var(--t-scale))", fontWeight: 600, letterSpacing: "-0.005em", textAlign: "left" }}>{q}</span>
        <span style={{
          width: 36, height: 36, borderRadius: "50%",
          border: `1px solid ${colors.border}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          transform: open ? "rotate(45deg)" : "none",
          transition: "transform 0.18s ease-out",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </span>
      </button>
      {open && (
        <p style={{
          marginTop: 14,
          fontSize: "calc(15px * var(--t-scale))",
          lineHeight: 1.75,
          color: colors.sub,
          maxWidth: 760,
        }}>{a}</p>
      )}
    </div>
  );
}


// ─────────────────────────────────────────────────────────────
// Photo — wrapper that handles real-image vs placeholder marker.
// ─────────────────────────────────────────────────────────────
function Photo({ src, alt, placeholder = false, ratio = "4/3", style, className, children }) {
  return (
    <div
      className={"lf-photo " + (placeholder ? "lf-photo--mark " : "") + (className || "")}
      style={{
        aspectRatio: ratio,
        backgroundImage: src ? `url(${src})` : "none",
        ...style,
      }}>
      {children}
    </div>
  );
}


// Export to window so the other Babel scripts can pick them up.
Object.assign(window, { CONTENT, LavaForm, FAQItem, Photo });
