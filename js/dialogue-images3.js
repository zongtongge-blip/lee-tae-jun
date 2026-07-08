/* =====================================================================
 * dialogue-images3.js - index3.html 전용 회화 이미지 보강
 * ---------------------------------------------------------------------
 * 초급/중급/고급 회화 섹션 아래에 난이도에 맞는 이미지를 추가합니다.
 * 만리장성 초급 회화에는 실제 사진(만리장성1.jpg)을 사용합니다.
 * ===================================================================== */

function dialogueImageTheme(levelText) {
  if (/高级|고급/.test(levelText)) {
    return {
      key: "advanced",
      title: "역사와 문화 토론",
      zhTitle: "历史文化讨论",
      caption: "문화유산을 깊이 이해하는 고급 회화",
      colors: ["#5b1f78", "#c8102e", "#f0d98c"],
      icon: "book"
    };
  }
  if (/中级|중급/.test(levelText)) {
    return {
      key: "intermediate",
      title: "관광지에서 묻고 답하기",
      zhTitle: "景点问答",
      caption: "표, 교통, 사진, 관람 정보를 묻는 중급 회화",
      colors: ["#0f766e", "#d4af37", "#fff8e8"],
      icon: "map"
    };
  }
  return {
    key: "beginner",
    title: "기본 여행 인사",
    zhTitle: "旅行基础问候",
    caption: "위치와 가격을 쉽게 묻는 초급 회화",
    colors: ["#c8102e", "#d4af37", "#fff2f3"],
    icon: "chat"
  };
}

function svgIconPath(icon) {
  if (icon === "book") {
    return `
      <path d="M170 110h95c24 0 42 18 42 42v128c0 13-10 23-23 23h-98c-17 0-31 14-31 31V141c0-17 7-31 15-31z" fill="#fff8e8" opacity=".95"/>
      <path d="M330 110h-95c-24 0-42 18-42 42v128c0 13 10 23 23 23h98c17 0 31 14 31 31V141c0-17-7-31-15-31z" fill="#ffffff" opacity=".92"/>
      <path d="M193 148h83M193 178h83M193 208h66M224 148h83M224 178h83M224 208h66" stroke="#7a2f16" stroke-width="8" stroke-linecap="round" opacity=".65"/>
      <circle cx="250" cy="82" r="34" fill="#f0d98c"/>
      <path d="M238 81h24M250 69v24" stroke="#9e0b24" stroke-width="8" stroke-linecap="round"/>`;
  }
  if (icon === "map") {
    return `
      <path d="M92 116l112-36 98 36 106-36v220l-106 36-98-36-112 36V116z" fill="#fff8e8" opacity=".95"/>
      <path d="M204 80v220M302 116v220" stroke="#0f766e" stroke-width="10" opacity=".55"/>
      <path d="M115 183c31-20 60-24 89-9 30 15 60 13 98-8 34-18 63-18 85-2" fill="none" stroke="#c8102e" stroke-width="10" stroke-linecap="round"/>
      <circle cx="326" cy="151" r="22" fill="#d4af37"/>
      <path d="M326 112c-32 0-58 26-58 58 0 43 58 102 58 102s58-59 58-102c0-32-26-58-58-58zm0 79a21 21 0 1 1 0-42 21 21 0 0 1 0 42z" fill="#c8102e"/>`;
  }
  return `
    <circle cx="170" cy="172" r="54" fill="#fff8e8"/>
    <circle cx="330" cy="172" r="54" fill="#ffffff"/>
    <path d="M112 316c14-58 49-88 91-88s77 30 91 88" fill="#fff8e8"/>
    <path d="M238 316c14-58 49-88 91-88s77 30 91 88" fill="#ffffff"/>
    <path d="M142 124c16-21 47-27 72-9M302 124c16-21 47-27 72-9" stroke="#7a2f16" stroke-width="9" stroke-linecap="round" opacity=".65"/>
    <rect x="196" y="78" width="116" height="58" rx="22" fill="#f0d98c"/>
    <path d="M220 107h68M286 133l-18-18" stroke="#9e0b24" stroke-width="8" stroke-linecap="round"/>`;
}

function buildDialogueImage(siteName, levelText) {
  const theme = dialogueImageTheme(levelText);
  const [primary, secondary, light] = theme.colors;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 330" role="img" aria-label="${theme.title}">
      <defs>
        <linearGradient id="bg-${theme.key}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${primary}"/>
          <stop offset=".62" stop-color="${secondary}"/>
          <stop offset="1" stop-color="${light}"/>
        </linearGradient>
      </defs>
      <rect width="500" height="330" rx="28" fill="url(#bg-${theme.key})"/>
      <circle cx="72" cy="62" r="34" fill="#ffffff" opacity=".16"/>
      <circle cx="438" cy="270" r="54" fill="#ffffff" opacity=".18"/>
      <path d="M42 258c61-46 104-44 154 2 43 39 88 38 135-2 50-43 88-44 127-5" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round" opacity=".22"/>
      ${svgIconPath(theme.icon)}
      <rect x="42" y="244" width="416" height="58" rx="18" fill="#000000" opacity=".28"/>
      <text x="62" y="270" font-family="Malgun Gothic, Microsoft YaHei, sans-serif" font-size="22" font-weight="800" fill="#ffffff">${siteName} · ${levelText}</text>
      <text x="62" y="293" font-family="Malgun Gothic, Microsoft YaHei, sans-serif" font-size="14" fill="#fff8e8">${theme.zhTitle} / ${theme.caption}</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function dialogueImageHtml(siteName, levelText) {
  if (siteName === "만리장성" && /初级|초급/.test(levelText)) {
    return `<img class="dialogue-image" src="assets/만리장성1.jpg" alt="만리장성 ${levelText} 회화 이미지" loading="lazy" />`;
  }
  const imageSrc = buildDialogueImage(siteName, levelText);
  return `<img class="dialogue-image" src="${imageSrc}" alt="${siteName} ${levelText} 회화 이미지" loading="lazy" />`;
}
