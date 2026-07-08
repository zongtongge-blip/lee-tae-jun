/* =====================================================================
 * data.js  -  앱에 표시되는 모든 콘텐츠를 담는 파일 (학생이 채우는 곳)
 * ---------------------------------------------------------------------
 * 여기만 채우면 화면이 자동으로 만들어집니다. app.js 는 건드리지 않아도 됩니다.
 *
 * [ 유적지 하나의 구조 ]
 * {
 *   id:      "great-wall",              // 영어/숫자로 된 고유 이름 (겹치면 안 됨)
 *   region:  { ko: "베이징", zh: "北京" },  // 지역(도시)
 *   name:    { ko: "만리장성", zh: "长城", pinyin: "Chángchéng" },
 *   emoji:   "🧱",                       // 사진이 없을 때 카드/상세에 보이는 아이콘
 *   image:   "assets/great-wall.jpg",   // assets 폴더의 사진. 없으면 "" 로 두세요.
 *   desc:    { ko: "한국어 설명...", zh: "中文说明..." },  // 이중 언어 설명
 *   mapQuery:"Great Wall of China",     // 지도에서 검색할 장소 이름 (영어 권장)
 *   expressions: [                       // 주요 중국어 표현 (발음 버튼이 자동 생성됨)
 *     { zh: "长城在哪里?", pinyin: "Chángchéng zài nǎlǐ?", ko: "만리장성은 어디에 있나요?" }
 *   ],
 *   dialogue: [                          // 중국어 대화: 초급/중급/고급으로 나눠 작성
 *     {
 *       level: { ko: "초급", zh: "初级" },
 *       lines: [
 *         { speaker: "A", zh: "...", pinyin: "...", ko: "..." },
 *         { speaker: "B", zh: "...", pinyin: "...", ko: "..." }
 *       ]
 *     }
 *   ]
 * }
 *
 * TIP: 새 유적지를 추가하려면 아래 배열에 { ... } 를 콤마(,)로 구분해 추가하세요.
 * ===================================================================== */

const SITES = [
  /* =========================== 베이징 (北京) =========================== */

  /* ---------------------------- 만리장성 ---------------------------- */
  {
    id: "great-wall",
    region: { ko: "베이징", zh: "北京" },
    name: { ko: "만리장성", zh: "长城", pinyin: "Chángchéng" },
    emoji: "🧱",
    image: "",
    desc: {
      ko: "만리장성(萬里長城)은 중국 북부를 가로지르는 세계에서 가장 긴 인공 방어 시설로, 춘추전국시대(기원전 770~221년)에 각 제후국이 스스로 성벽을 쌓기 시작했습니다. 진시황이 중국을 최초로 통일한 뒤 기존 성벽들을 연결·보수하면서 통일 장성의 기틀이 마련되었고, 이후 한·당·송·원·명 등 여러 왕조가 이어서 축조와 개축을 반복했습니다. 특히 명나라(1368~1644년) 때 대규모 공사가 이루어져 오늘날 우리가 흔히 보는 벽돌과 석재로 된 웅장한 모습이 완성되었습니다. 만리장성은 북방 유목민족인 흉노·흉술·몽골 등의 침입을 막기 위한 군사 방어선이었을 뿐 아니라, 관문(關口)과 봉화대(烽火臺)를 통해 소식을 전하고 군대와 보급품을 이동시키는 교통·통신망의 역할도 했습니다. 성벽 위에는 망루(望樓)와 적탑(敵臺)이 일정 간격으로 배치되어 있어, 당시 첨단에 가까운 방어 체계를 갖추고 있었습니다. 총 길이는 약 2만 1,196km에 달하며, 산악 지형과 사막, 초원 등 다양한 자연 환경에 맞춰 구불구불 이어져 있어 '천하의 제1건축'이라 불립니다. 1987년 유네스코 세계문화유산으로 등재되었고, '세계 7대 불가사의' 가운데 하나로 꼽히며 중화문명의 상징으로 전 세계에 알려져 있습니다. 오늘날 만리장성은 중국을 대표하는 최고의 관광 명소로, 베이징 근교의 바다링(八达岭) 구간이 가장 유명하고 보존 상태도 뛰어납니다. 바다링 외에도 무천위(慕田峪), 진산령(金山岭), 시마타이(司马台) 등 다양한 구간이 있어 각기 다른 경관과 난이도를 제공합니다. 성벽 위를 걸으며 고대 중국의 역사와 건축 기술을 직접 체험할 수 있으며, '不到长城非好汉(장성에 오르지 않으면 진정한 호걸이 아니다)'라는 말처럼 중국 방문객에게는 꼭 가봐야 할 성지이기도 합니다. 다만 일부 구간은 경사가 가파르고 계단이 많아 편한 신발을 착용하고, 여름에는 더위·겨울에는 추위에 대비하는 것이 좋습니다.",
      zh: "长城是中国北方修建的巨大城墙，从春秋战国时期到明朝，历经漫长岁月建成。它是为了抵御北方游牧民族的入侵而修建的防御工事，总长度超过两万公里。如今，长城是中国代表性的世界文化遗产和热门旅游景点，其中北京附近的八达岭段尤为著名。"
    },
    mapQuery: "Great Wall of China Badaling",
    expressions: [
      { zh: "长城真雄伟!", pinyin: "Chángchéng zhēn xióngwěi!", ko: "만리장성은 정말 웅장하네요!" },
      { zh: "我们去爬长城吧。", pinyin: "Wǒmen qù pá Chángchéng ba.", ko: "우리 만리장성에 올라가요." },
      { zh: "门票多少钱?", pinyin: "Ménpiào duōshǎo qián?", ko: "입장권은 얼마예요?" },
      { zh: "怎么去八达岭?", pinyin: "Zěnme qù Bādálǐng?", ko: "바다링에는 어떻게 가나요?" }
    ],
    dialogue: [
      {
        level: { ko: "초급", zh: "初级" },
        lines: [
          { speaker: "A", zh: "你好, 长城在哪里?", pinyin: "Nǐ hǎo, Chángchéng zài nǎlǐ?", ko: "안녕하세요, 만리장성은 어디에 있나요?" },
          { speaker: "B", zh: "长城在北京的北边。", pinyin: "Chángchéng zài Běijīng de běibiān.", ko: "만리장성은 베이징 북쪽에 있어요." },
          { speaker: "A", zh: "门票多少钱?", pinyin: "Ménpiào duōshǎo qián?", ko: "입장권은 얼마예요?" },
          { speaker: "B", zh: "成人票四十元左右。", pinyin: "Chéngrén piào sìshí yuán zuǒyòu.", ko: "성인 표는 40위안 정도예요." }
        ]
      },
      {
        level: { ko: "중급", zh: "中级" },
        lines: [
          { speaker: "A", zh: "你去过八达岭长城吗?", pinyin: "Nǐ qùguò Bādálǐng Chángchéng ma?", ko: "바다링 만리장성에 가 본 적 있어요?" },
          { speaker: "B", zh: "还没有, 但我听说那里保存得很好。", pinyin: "Hái méiyǒu, dàn wǒ tīngshuō nàlǐ bǎocún de hěn hǎo.", ko: "아직요, 하지만 그곳이 잘 보존되어 있다고 들었어요." },
          { speaker: "A", zh: "我们可以坐高铁去, 比较方便。", pinyin: "Wǒmen kěyǐ zuò gāotiě qù, bǐjiào fāngbiàn.", ko: "고속철을 타고 갈 수 있어서 비교적 편해요." },
          { speaker: "B", zh: "好, 我还想在城墙上拍照片。", pinyin: "Hǎo, wǒ hái xiǎng zài chéngqiáng shàng pāi zhàopiàn.", ko: "좋아요, 성벽 위에서 사진도 찍고 싶어요." }
        ]
      },
      {
        level: { ko: "고급", zh: "高级" },
        lines: [
          { speaker: "A", zh: "长城不仅是防御工程, 也是中国历史记忆的象征。", pinyin: "Chángchéng bùjǐn shì fángyù gōngchéng, yě shì Zhōngguó lìshǐ jìyì de xiàngzhēng.", ko: "만리장성은 방어 시설일 뿐 아니라 중국 역사 기억의 상징이기도 해요." },
          { speaker: "B", zh: "没错, 它见证了农耕文明和游牧文明的交流与冲突。", pinyin: "Méi cuò, tā jiànzhèng le nónggēng wénmíng hé yóumù wénmíng de jiāoliú yǔ chōngtū.", ko: "맞아요, 농경 문명과 유목 문명의 교류와 충돌을 보여 주죠." },
          { speaker: "A", zh: "参观的时候, 我们应该注意保护文物, 不乱刻乱画。", pinyin: "Cānguān de shíhou, wǒmen yīnggāi zhùyì bǎohù wénwù, bù luàn kē luàn huà.", ko: "관람할 때는 문화재 보호에 주의하고 함부로 새기거나 낙서하지 않아야 해요." },
          { speaker: "B", zh: "对, 尊重历史也是旅行中很重要的一课。", pinyin: "Duì, zūnzhòng lìshǐ yě shì lǚxíng zhōng hěn zhòngyào de yí kè.", ko: "맞아요, 역사를 존중하는 것도 여행에서 중요한 배움이에요." }
        ]
      }
    ]
  },

  /* ---------------------------- 자금성 ---------------------------- */
  {
    id: "forbidden-city",
    region: { ko: "베이징", zh: "北京" },
    name: { ko: "자금성 (고궁)", zh: "故宫", pinyin: "Gùgōng" },
    emoji: "🏯",
    image: "",
    desc: {
      ko: "자금성은 명나라와 청나라 두 왕조의 황궁으로, 약 500년 동안 24명의 황제가 거주했습니다. 현재는 고궁박물원으로 불리며, 세계에서 가장 큰 목조 건축물 궁전 단지입니다. 붉은 벽과 황금색 지붕이 어우러진 웅장한 건축미로 유명하며, 톈안먼 광장 바로 북쪽에 있습니다.",
      zh: "故宫是明清两代的皇宫，约五百年间共有二十四位皇帝在此居住。如今被称为故宫博物院，是世界上最大的木结构宫殿建筑群。它以红墙金瓦交相辉映的宏伟建筑之美而闻名，就位于天安门广场的正北面。"
    },
    mapQuery: "Forbidden City Beijing",
    expressions: [
      { zh: "故宫非常大。", pinyin: "Gùgōng fēicháng dà.", ko: "자금성은 매우 커요." },
      { zh: "这里以前住着皇帝。", pinyin: "Zhèlǐ yǐqián zhùzhe huángdì.", ko: "여기엔 예전에 황제가 살았어요." },
      { zh: "可以拍照吗?", pinyin: "Kěyǐ pāizhào ma?", ko: "사진 찍어도 되나요?" },
      { zh: "出口在哪边?", pinyin: "Chūkǒu zài nǎ biān?", ko: "출구는 어느 쪽인가요?" }
    ],
    dialogue: [
      {
        level: { ko: "초급", zh: "初级" },
        lines: [
          { speaker: "A", zh: "这里是故宫吗?", pinyin: "Zhèlǐ shì Gùgōng ma?", ko: "여기가 자금성인가요?" },
          { speaker: "B", zh: "是的, 这里很大。", pinyin: "Shì de, zhèlǐ hěn dà.", ko: "네, 여기는 매우 커요." },
          { speaker: "A", zh: "可以拍照吗?", pinyin: "Kěyǐ pāizhào ma?", ko: "사진을 찍어도 되나요?" },
          { speaker: "B", zh: "可以, 但是有些地方不能拍。", pinyin: "Kěyǐ, dànshì yǒuxiē dìfang bù néng pāi.", ko: "가능해요, 하지만 일부 장소는 찍을 수 없어요." }
        ]
      },
      {
        level: { ko: "중급", zh: "中级" },
        lines: [
          { speaker: "A", zh: "故宫的屋顶为什么是黄色的?", pinyin: "Gùgōng de wūdǐng wèishéme shì huángsè de?", ko: "자금성 지붕은 왜 노란색이에요?" },
          { speaker: "B", zh: "因为黄色在古代代表皇权。", pinyin: "Yīnwèi huángsè zài gǔdài dàibiǎo huángquán.", ko: "노란색은 고대에 황권을 상징했기 때문이에요." },
          { speaker: "A", zh: "听说这里住过二十四位皇帝。", pinyin: "Tīngshuō zhèlǐ zhùguò èrshísì wèi huángdì.", ko: "이곳에 24명의 황제가 살았다고 들었어요." },
          { speaker: "B", zh: "对, 所以故宫有很高的历史价值。", pinyin: "Duì, suǒyǐ Gùgōng yǒu hěn gāo de lìshǐ jiàzhí.", ko: "맞아요, 그래서 자금성은 역사적 가치가 매우 높아요." }
        ]
      },
      {
        level: { ko: "고급", zh: "高级" },
        lines: [
          { speaker: "A", zh: "故宫的空间布局体现了中国古代的礼制思想。", pinyin: "Gùgōng de kōngjiān bùjú tǐxiàn le Zhōngguó gǔdài de lǐzhì sīxiǎng.", ko: "자금성의 공간 배치는 중국 고대의 예제 사상을 보여 줘요." },
          { speaker: "B", zh: "尤其是中轴线, 突出了皇权的中心地位。", pinyin: "Yóuqí shì zhōngzhóuxiàn, tūchū le huángquán de zhōngxīn dìwèi.", ko: "특히 중심축은 황권의 중심적 지위를 강조하죠." },
          { speaker: "A", zh: "现在它从皇宫变成博物院, 功能也发生了变化。", pinyin: "Xiànzài tā cóng huánggōng biànchéng bówùyuàn, gōngnéng yě fāshēng le biànhuà.", ko: "지금은 황궁에서 박물관으로 바뀌면서 기능도 변했어요." },
          { speaker: "B", zh: "这让更多人能够接近历史, 理解传统文化。", pinyin: "Zhè ràng gèng duō rén nénggòu jiējìn lìshǐ, lǐjiě chuántǒng wénhuà.", ko: "그 덕분에 더 많은 사람이 역사에 가까워지고 전통문화를 이해할 수 있어요." }
        ]
      }
    ]
  },

  /* ---------------------------- 천단 ---------------------------- */
  {
    id: "temple-of-heaven",
    region: { ko: "베이징", zh: "北京" },
    name: { ko: "천단", zh: "天坛", pinyin: "Tiāntán" },
    emoji: "🛕",
    image: "",
    desc: {
      ko: "천단은 명·청 시대 황제가 하늘에 제사를 지내고 풍년을 기원하던 제단입니다. 둥근 하늘과 네모난 땅을 상징하는 독특한 건축 구조로 유명하며, 대표 건물인 기년전(祈年殿)은 못을 하나도 쓰지 않고 지은 목조 건축입니다. 넓은 공원으로 조성되어 시민들의 휴식처로도 사랑받습니다.",
      zh: "天坛是明清两代皇帝祭天祈求丰收的祭坛。它以象征“天圆地方”的独特建筑结构而闻名，标志性建筑祈年殿是一座没有使用一根钉子的木结构建筑。如今天坛已建成大型公园，也是市民休闲的好去处。"
    },
    mapQuery: "Temple of Heaven Beijing",
    expressions: [
      { zh: "天坛的建筑很特别。", pinyin: "Tiāntán de jiànzhù hěn tèbié.", ko: "천단의 건축은 매우 독특해요." },
      { zh: "古代皇帝在这里祭天。", pinyin: "Gǔdài huángdì zài zhèlǐ jì tiān.", ko: "옛날 황제가 여기서 하늘에 제사를 지냈어요." },
      { zh: "公园里人很多。", pinyin: "Gōngyuán lǐ rén hěn duō.", ko: "공원에 사람이 많네요." }
    ],
    dialogue: [
      {
        level: { ko: "초급", zh: "初级" },
        lines: [
          { speaker: "A", zh: "这是什么地方?", pinyin: "Zhè shì shénme dìfang?", ko: "여기는 어떤 곳인가요?" },
          { speaker: "B", zh: "这里是天坛。", pinyin: "Zhèlǐ shì Tiāntán.", ko: "여기는 천단이에요." },
          { speaker: "A", zh: "这个建筑很漂亮。", pinyin: "Zhège jiànzhù hěn piàoliang.", ko: "이 건물은 정말 아름다워요." },
          { speaker: "B", zh: "它叫祈年殿。", pinyin: "Tā jiào Qíniándiàn.", ko: "이 건물은 기년전이라고 해요." }
        ]
      },
      {
        level: { ko: "중급", zh: "中级" },
        lines: [
          { speaker: "A", zh: "古代皇帝为什么来天坛?", pinyin: "Gǔdài huángdì wèishéme lái Tiāntán?", ko: "옛날 황제는 왜 천단에 왔나요?" },
          { speaker: "B", zh: "他们来这里祭天, 祈求丰收。", pinyin: "Tāmen lái zhèlǐ jì tiān, qíqiú fēngshōu.", ko: "그들은 이곳에 와서 하늘에 제사를 지내고 풍년을 기원했어요." },
          { speaker: "A", zh: "听说祈年殿没有用一根钉子。", pinyin: "Tīngshuō Qíniándiàn méiyǒu yòng yì gēn dīngzi.", ko: "기년전은 못을 하나도 쓰지 않았다고 들었어요." },
          { speaker: "B", zh: "是的, 中国古代建筑技术很高。", pinyin: "Shì de, Zhōngguó gǔdài jiànzhù jìshù hěn gāo.", ko: "맞아요, 중국 고대 건축 기술은 매우 뛰어나요." }
        ]
      },
      {
        level: { ko: "고급", zh: "高级" },
        lines: [
          { speaker: "A", zh: "天坛的设计体现了“天圆地方”的宇宙观。", pinyin: "Tiāntán de shèjì tǐxiàn le 'tiān yuán dì fāng' de yǔzhòuguān.", ko: "천단의 설계는 '하늘은 둥글고 땅은 네모나다'는 우주관을 보여 줘요." },
          { speaker: "B", zh: "所以圆形建筑和方形台基都有象征意义。", pinyin: "Suǒyǐ yuánxíng jiànzhù hé fāngxíng táijī dōu yǒu xiàngzhēng yìyì.", ko: "그래서 원형 건물과 사각형 기단 모두 상징적 의미가 있어요." },
          { speaker: "A", zh: "从这里可以看出古人对自然秩序的理解。", pinyin: "Cóng zhèlǐ kěyǐ kànchū gǔrén duì zìrán zhìxù de lǐjiě.", ko: "이곳에서 옛사람들이 자연 질서를 어떻게 이해했는지 알 수 있어요." },
          { speaker: "B", zh: "参观天坛不只是看建筑, 也是理解思想。", pinyin: "Cānguān Tiāntán bù zhǐ shì kàn jiànzhù, yě shì lǐjiě sīxiǎng.", ko: "천단 관람은 건축을 보는 것뿐 아니라 사상을 이해하는 일이기도 해요." }
        ]
      }
    ]
  },

  /* ---------------------------- 이화원 ---------------------------- */
  {
    id: "summer-palace",
    region: { ko: "베이징", zh: "北京" },
    name: { ko: "이화원", zh: "颐和园", pinyin: "Yíhéyuán" },
    emoji: "⛵",
    image: "",
    desc: {
      ko: "이화원은 청나라 황실의 여름 별궁으로, 중국 최대 규모의 황실 정원입니다. 인공 호수인 쿤밍호(昆明湖)와 완서우산(万寿山)을 중심으로 정자, 다리, 회랑이 아름답게 어우러져 있습니다. 특히 700m가 넘는 장랑(长廊)과 대리석 배 모양의 석방(石舫)이 유명합니다.",
      zh: "颐和园是清代皇家的夏季行宫，也是中国规模最大的皇家园林。它以人工湖昆明湖和万寿山为中心，亭台、桥梁和长廊错落有致，十分优美。其中长达七百多米的长廊和大理石船形建筑石舫尤为有名。"
    },
    mapQuery: "Summer Palace Beijing",
    expressions: [
      { zh: "颐和园的风景真美。", pinyin: "Yíhéyuán de fēngjǐng zhēn měi.", ko: "이화원의 풍경은 정말 아름다워요." },
      { zh: "我们可以坐船吗?", pinyin: "Wǒmen kěyǐ zuò chuán ma?", ko: "우리 배를 탈 수 있나요?" },
      { zh: "长廊有多长?", pinyin: "Chángláng yǒu duō cháng?", ko: "장랑은 얼마나 길어요?" }
    ],
    dialogue: [
      {
        level: { ko: "초급", zh: "初级" },
        lines: [
          { speaker: "A", zh: "颐和园漂亮吗?", pinyin: "Yíhéyuán piàoliang ma?", ko: "이화원은 아름다운가요?" },
          { speaker: "B", zh: "很漂亮, 湖也很大。", pinyin: "Hěn piàoliang, hú yě hěn dà.", ko: "매우 아름답고 호수도 커요." },
          { speaker: "A", zh: "我们可以坐船吗?", pinyin: "Wǒmen kěyǐ zuò chuán ma?", ko: "우리 배를 탈 수 있나요?" },
          { speaker: "B", zh: "可以, 我们去买票吧。", pinyin: "Kěyǐ, wǒmen qù mǎi piào ba.", ko: "탈 수 있어요, 표를 사러 가요." }
        ]
      },
      {
        level: { ko: "중급", zh: "中级" },
        lines: [
          { speaker: "A", zh: "湖边的风好舒服啊。", pinyin: "Húbiān de fēng hǎo shūfú a.", ko: "호숫가 바람이 정말 시원하네요." },
          { speaker: "B", zh: "对啊, 我们沿着长廊走走吧。", pinyin: "Duì a, wǒmen yánzhe chángláng zǒuzou ba.", ko: "맞아요, 장랑을 따라 좀 걸어요." },
          { speaker: "A", zh: "那边的石船也很有名。", pinyin: "Nà biān de shí chuán yě hěn yǒumíng.", ko: "저쪽 돌로 만든 배도 유명해요." },
          { speaker: "B", zh: "听说它是用大理石建成的。", pinyin: "Tīngshuō tā shì yòng dàlǐshí jiànchéng de.", ko: "대리석으로 지어졌다고 들었어요." }
        ]
      },
      {
        level: { ko: "고급", zh: "高级" },
        lines: [
          { speaker: "A", zh: "颐和园把自然山水和皇家园林艺术结合得很好。", pinyin: "Yíhéyuán bǎ zìrán shānshuǐ hé huángjiā yuánlín yìshù jiéhé de hěn hǎo.", ko: "이화원은 자연 산수와 황실 정원 예술을 잘 결합했어요." },
          { speaker: "B", zh: "昆明湖虽然是人工湖, 但看起来非常开阔自然。", pinyin: "Kūnmíng Hú suīrán shì réngōng hú, dàn kàn qǐlái fēicháng kāikuò zìrán.", ko: "쿤밍호는 인공 호수이지만 매우 탁 트이고 자연스러워 보여요." },
          { speaker: "A", zh: "长廊上的彩画也记录了很多历史故事。", pinyin: "Chángláng shàng de cǎihuà yě jìlù le hěn duō lìshǐ gùshi.", ko: "장랑의 채색 그림도 많은 역사 이야기를 담고 있어요." },
          { speaker: "B", zh: "所以这里既适合休闲, 也适合学习传统文化。", pinyin: "Suǒyǐ zhèlǐ jì shìhé xiūxián, yě shìhé xuéxí chuántǒng wénhuà.", ko: "그래서 이곳은 휴식에도 좋고 전통문화 학습에도 좋아요." }
        ]
      }
    ]
  },

  /* =========================== 시안 (西安) =========================== */

  /* ---------------------------- 병마용 ---------------------------- */
  {
    id: "terracotta-army",
    region: { ko: "시안", zh: "西安" },
    name: { ko: "병마용", zh: "兵马俑", pinyin: "Bīngmǎyǒng" },
    emoji: "🗿",
    image: "",
    desc: {
      ko: "병마용은 중국 최초의 황제인 진시황의 무덤을 지키기 위해 만든 흙으로 빚은 병사와 말 조각상입니다. 1974년 우물을 파던 농민에 의해 발견되었으며, 수천 개의 병사상은 얼굴 표정이 모두 다른 것으로 유명합니다. 세계 8대 불가사의로 불리는 세계문화유산입니다.",
      zh: "兵马俑是为守护中国第一位皇帝秦始皇的陵墓而制作的陶制士兵和马匹雕像。它于1974年被一位挖井的农民发现，数千个士兵俑因每个面部表情都各不相同而闻名。它被誉为“世界第八大奇迹”，是世界文化遗产。"
    },
    mapQuery: "Terracotta Army Xian",
    expressions: [
      { zh: "兵马俑太壮观了!", pinyin: "Bīngmǎyǒng tài zhuàngguān le!", ko: "병마용은 정말 장관이에요!" },
      { zh: "每个士兵的脸都不一样。", pinyin: "Měi gè shìbīng de liǎn dōu bù yíyàng.", ko: "병사마다 얼굴이 모두 달라요." },
      { zh: "这是什么时候发现的?", pinyin: "Zhè shì shénme shíhòu fāxiàn de?", ko: "이건 언제 발견됐어요?" }
    ],
    dialogue: [
      {
        level: { ko: "초급", zh: "初级" },
        lines: [
          { speaker: "A", zh: "这是什么?", pinyin: "Zhè shì shénme?", ko: "이것은 무엇인가요?" },
          { speaker: "B", zh: "这是兵马俑。", pinyin: "Zhè shì Bīngmǎyǒng.", ko: "이것은 병마용이에요." },
          { speaker: "A", zh: "人很多吗?", pinyin: "Rén hěn duō ma?", ko: "사람이 많나요?" },
          { speaker: "B", zh: "很多, 这里很有名。", pinyin: "Hěn duō, zhèlǐ hěn yǒumíng.", ko: "많아요, 이곳은 매우 유명해요." }
        ]
      },
      {
        level: { ko: "중급", zh: "中级" },
        lines: [
          { speaker: "A", zh: "这些兵马俑是真人大小吗?", pinyin: "Zhèxiē bīngmǎyǒng shì zhēnrén dàxiǎo ma?", ko: "이 병마용들은 실제 사람 크기예요?" },
          { speaker: "B", zh: "对, 而且每个士兵的表情都不一样。", pinyin: "Duì, érqiě měi gè shìbīng de biǎoqíng dōu bù yíyàng.", ko: "네, 게다가 병사마다 표정이 모두 달라요." },
          { speaker: "A", zh: "它们是什么时候被发现的?", pinyin: "Tāmen shì shénme shíhou bèi fāxiàn de?", ko: "그것들은 언제 발견되었나요?" },
          { speaker: "B", zh: "一九七四年, 农民挖井的时候发现了它们。", pinyin: "Yī jiǔ qī sì nián, nóngmín wā jǐng de shíhou fāxiàn le tāmen.", ko: "1974년에 농민이 우물을 파다가 발견했어요." }
        ]
      },
      {
        level: { ko: "고급", zh: "高级" },
        lines: [
          { speaker: "A", zh: "兵马俑展示了秦朝强大的军事组织和工艺水平。", pinyin: "Bīngmǎyǒng zhǎnshì le Qíncháo qiángdà de jūnshì zǔzhī hé gōngyì shuǐpíng.", ko: "병마용은 진나라의 강력한 군사 조직과 공예 수준을 보여 줘요." },
          { speaker: "B", zh: "每个俑的发型、服饰和姿态都反映了不同身份。", pinyin: "Měi gè yǒng de fàxíng, fúshì hé zītài dōu fǎnyìng le bùtóng shēnfèn.", ko: "각 용의 머리 모양, 복식, 자세는 서로 다른 신분을 반영해요." },
          { speaker: "A", zh: "难怪它被称为世界第八大奇迹。", pinyin: "Nánguài tā bèi chēngwéi shìjiè dì bā dà qíjì.", ko: "그래서 세계 8대 불가사의라고 불리는군요." },
          { speaker: "B", zh: "参观时我们也能思考秦始皇统一中国的历史背景。", pinyin: "Cānguān shí wǒmen yě néng sīkǎo Qín Shǐhuáng tǒngyī Zhōngguó de lìshǐ bèijǐng.", ko: "관람하면서 진시황이 중국을 통일한 역사적 배경도 생각해 볼 수 있어요." }
        ]
      }
    ]
  },

  /* ---------------------------- 시안 성벽 ---------------------------- */
  {
    id: "xian-city-wall",
    region: { ko: "시안", zh: "西安" },
    name: { ko: "시안 성벽", zh: "西安城墙", pinyin: "Xī'ān chéngqiáng" },
    emoji: "🏰",
    image: "",
    desc: {
      ko: "시안 성벽은 명나라 때 지어진 중국에서 가장 완벽하게 보존된 고대 성벽입니다. 총 길이는 약 14km이며, 도시 중심부를 사각형으로 둘러싸고 있습니다. 성벽 위에서는 자전거를 빌려 한 바퀴 돌 수 있어, 옛 도시의 정취를 느끼며 산책하기에 좋습니다.",
      zh: "西安城墙是明代修建的中国保存最完整的古代城墙。它总长约十四公里，呈方形环绕着城市中心。游客可以在城墙上租自行车骑行一圈，一边感受古城韵味，一边散步游览。"
    },
    mapQuery: "Xian City Wall",
    expressions: [
      { zh: "我们可以在城墙上骑自行车。", pinyin: "Wǒmen kěyǐ zài chéngqiáng shàng qí zìxíngchē.", ko: "성벽 위에서 자전거를 탈 수 있어요." },
      { zh: "租一辆自行车多少钱?", pinyin: "Zū yí liàng zìxíngchē duōshǎo qián?", ko: "자전거 한 대 빌리는 데 얼마예요?" },
      { zh: "从城墙上看风景很好。", pinyin: "Cóng chéngqiáng shàng kàn fēngjǐng hěn hǎo.", ko: "성벽 위에서 보는 경치가 좋아요." }
    ],
    dialogue: [
      {
        level: { ko: "초급", zh: "初级" },
        lines: [
          { speaker: "A", zh: "城墙高吗?", pinyin: "Chéngqiáng gāo ma?", ko: "성벽은 높나요?" },
          { speaker: "B", zh: "很高, 也很长。", pinyin: "Hěn gāo, yě hěn cháng.", ko: "높고 길어요." },
          { speaker: "A", zh: "我们走路去吗?", pinyin: "Wǒmen zǒulù qù ma?", ko: "우리 걸어서 가나요?" },
          { speaker: "B", zh: "可以, 也可以骑自行车。", pinyin: "Kěyǐ, yě kěyǐ qí zìxíngchē.", ko: "가능해요, 자전거를 탈 수도 있어요." }
        ]
      },
      {
        level: { ko: "중급", zh: "中级" },
        lines: [
          { speaker: "A", zh: "绕城墙一圈要多久?", pinyin: "Rào chéngqiáng yì quān yào duōjiǔ?", ko: "성벽을 한 바퀴 도는 데 얼마나 걸려요?" },
          { speaker: "B", zh: "骑车大概两个小时, 走路会更久。", pinyin: "Qí chē dàgài liǎng gè xiǎoshí, zǒulù huì gèng jiǔ.", ko: "자전거로 대략 두 시간이고, 걸으면 더 오래 걸려요." },
          { speaker: "A", zh: "那我们租两辆自行车吧。", pinyin: "Nà wǒmen zū liǎng liàng zìxíngchē ba.", ko: "그럼 자전거 두 대를 빌려요." },
          { speaker: "B", zh: "好, 一边骑车一边看古城风景。", pinyin: "Hǎo, yìbiān qí chē yìbiān kàn gǔchéng fēngjǐng.", ko: "좋아요, 자전거를 타면서 옛 도시 풍경을 봐요." }
        ]
      },
      {
        level: { ko: "고급", zh: "高级" },
        lines: [
          { speaker: "A", zh: "西安城墙完整地保留了古代城市防御体系。", pinyin: "Xī'ān Chéngqiáng wánzhěng de bǎoliú le gǔdài chéngshì fángyù tǐxì.", ko: "시안 성벽은 고대 도시 방어 체계를 온전히 보존하고 있어요." },
          { speaker: "B", zh: "城门、箭楼和护城河共同构成了严密的防线。", pinyin: "Chéngmén, jiànlóu hé hùchénghé gòngtóng gòuchéng le yánmì de fángxiàn.", ko: "성문, 전루, 해자가 함께 치밀한 방어선을 이루었죠." },
          { speaker: "A", zh: "现在游客在城墙上骑车, 其实是在体验历史空间。", pinyin: "Xiànzài yóukè zài chéngqiáng shàng qí chē, qíshí shì zài tǐyàn lìshǐ kōngjiān.", ko: "지금 관광객이 성벽 위에서 자전거를 타는 것은 역사 공간을 체험하는 일이에요." },
          { speaker: "B", zh: "这种古今结合的方式让文化遗产更有活力。", pinyin: "Zhè zhǒng gǔjīn jiéhé de fāngshì ràng wénhuà yíchǎn gèng yǒu huólì.", ko: "이런 고금의 결합 방식은 문화유산을 더 생동감 있게 만들어요." }
        ]
      }
    ]
  },

  /* =========================== 상하이 (上海) =========================== */

  /* ---------------------------- 예원 ---------------------------- */
  {
    id: "yu-garden",
    region: { ko: "상하이", zh: "上海" },
    name: { ko: "예원", zh: "豫园", pinyin: "Yùyuán" },
    emoji: "🏞️",
    image: "",
    desc: {
      ko: "예원은 명나라 때 조성된 상하이의 대표적인 강남식 고전 정원입니다. 400년이 넘는 역사를 지녔으며, 연못과 가산(假山), 정자와 누각이 좁은 공간 안에 정교하게 배치되어 있습니다. 주변의 예원 상가에서는 전통 간식과 기념품을 즐길 수 있어 관광객에게 인기가 많습니다.",
      zh: "豫园是明代修建的上海代表性江南古典园林，拥有四百多年的历史。园内的池塘、假山、亭台楼阁在狭小的空间里布置得十分精巧。周边的豫园商城可以品尝传统小吃、购买纪念品，深受游客欢迎。"
    },
    mapQuery: "Yu Garden Shanghai",
    expressions: [
      { zh: "豫园的园林很精致。", pinyin: "Yùyuán de yuánlín hěn jīngzhì.", ko: "예원의 정원은 매우 정교해요." },
      { zh: "附近有很多小吃。", pinyin: "Fùjìn yǒu hěn duō xiǎochī.", ko: "근처에 먹거리가 많아요." },
      { zh: "我想买一些纪念品。", pinyin: "Wǒ xiǎng mǎi yìxiē jìniànpǐn.", ko: "기념품을 좀 사고 싶어요." }
    ],
    dialogue: [
      {
        level: { ko: "초급", zh: "初级" },
        lines: [
          { speaker: "A", zh: "这个花园真漂亮。", pinyin: "Zhège huāyuán zhēn piàoliang.", ko: "이 정원은 정말 예뻐요." },
          { speaker: "B", zh: "是啊, 这里是豫园。", pinyin: "Shì a, zhèlǐ shì Yùyuán.", ko: "맞아요, 여기는 예원이에요." },
          { speaker: "A", zh: "附近有吃的吗?", pinyin: "Fùjìn yǒu chī de ma?", ko: "근처에 먹을 것이 있나요?" },
          { speaker: "B", zh: "有, 有很多小吃。", pinyin: "Yǒu, yǒu hěn duō xiǎochī.", ko: "있어요, 간식이 많아요." }
        ]
      },
      {
        level: { ko: "중급", zh: "中级" },
        lines: [
          { speaker: "A", zh: "豫园的园林设计很精致。", pinyin: "Yùyuán de yuánlín shèjì hěn jīngzhì.", ko: "예원의 정원 설계는 매우 정교해요." },
          { speaker: "B", zh: "对, 假山、池塘和亭子都安排得很好。", pinyin: "Duì, jiǎshān, chítáng hé tíngzi dōu ānpái de hěn hǎo.", ko: "맞아요, 가산, 연못, 정자가 모두 잘 배치되어 있어요." },
          { speaker: "A", zh: "参观完以后, 我们去尝尝小笼包吧。", pinyin: "Cānguān wán yǐhòu, wǒmen qù chángchang xiǎolóngbāo ba.", ko: "관람이 끝난 뒤 샤오룽바오를 맛보러 가요." },
          { speaker: "B", zh: "好主意, 我还想买一些纪念品。", pinyin: "Hǎo zhǔyì, wǒ hái xiǎng mǎi yìxiē jìniànpǐn.", ko: "좋은 생각이에요, 기념품도 좀 사고 싶어요." }
        ]
      },
      {
        level: { ko: "고급", zh: "高级" },
        lines: [
          { speaker: "A", zh: "豫园虽然面积不大, 却体现了江南园林的审美特点。", pinyin: "Yùyuán suīrán miànjī bú dà, què tǐxiàn le Jiāngnán yuánlín de shěnměi tèdiǎn.", ko: "예원은 면적이 크지 않지만 강남 정원의 미적 특징을 보여 줘요." },
          { speaker: "B", zh: "一步一景的设计让游客在有限空间里感到变化丰富。", pinyin: "Yí bù yì jǐng de shèjì ràng yóukè zài yǒuxiàn kōngjiān lǐ gǎndào biànhuà fēngfù.", ko: "한 걸음마다 다른 풍경이 보이는 설계는 제한된 공간에서도 풍부한 변화를 느끼게 해요." },
          { speaker: "A", zh: "周边商业街也让传统文化和现代消费连接起来。", pinyin: "Zhōubiān shāngyèjiē yě ràng chuántǒng wénhuà hé xiàndài xiāofèi liánjiē qǐlái.", ko: "주변 상가는 전통문화와 현대 소비를 연결해 줘요." },
          { speaker: "B", zh: "因此豫园不仅是景点, 也是上海城市文化的一部分。", pinyin: "Yīncǐ Yùyuán bùjǐn shì jǐngdiǎn, yě shì Shànghǎi chéngshì wénhuà de yíbùfen.", ko: "그래서 예원은 관광지일 뿐 아니라 상하이 도시 문화의 일부예요." }
        ]
      }
    ]
  },

  /* ---------------------------- 와이탄 ---------------------------- */
  {
    id: "the-bund",
    region: { ko: "상하이", zh: "上海" },
    name: { ko: "와이탄 (외탄)", zh: "外滩", pinyin: "Wàitān" },
    emoji: "🌃",
    image: "",
    desc: {
      ko: "와이탄은 상하이 황푸강 서쪽 기슭에 있는 유명한 강변 산책로입니다. 20세기 초에 지어진 유럽식 근대 건축물들이 늘어서 있어 '만국 건축 박람회'라고도 불립니다. 강 건너편으로는 동방명주탑 등 현대적인 마천루가 보여, 옛것과 새것이 어우러진 야경이 특히 아름답습니다.",
      zh: "外滩是位于上海黄浦江西岸的著名滨江步道。这里矗立着二十世纪初建造的欧式近代建筑，因此又被称为“万国建筑博览群”。隔江相望是东方明珠塔等现代摩天大楼，新旧交融的夜景尤其美丽。"
    },
    mapQuery: "The Bund Shanghai",
    expressions: [
      { zh: "外滩的夜景太美了!", pinyin: "Wàitān de yèjǐng tài měi le!", ko: "와이탄의 야경은 정말 아름다워요!" },
      { zh: "对面就是东方明珠塔。", pinyin: "Duìmiàn jiùshì Dōngfāng Míngzhū Tǎ.", ko: "맞은편이 바로 동방명주탑이에요." },
      { zh: "我们在这里拍张照吧。", pinyin: "Wǒmen zài zhèlǐ pāi zhāng zhào ba.", ko: "우리 여기서 사진 한 장 찍어요." }
    ],
    dialogue: [
      {
        level: { ko: "초급", zh: "初级" },
        lines: [
          { speaker: "A", zh: "外滩在哪里?", pinyin: "Wàitān zài nǎlǐ?", ko: "와이탄은 어디에 있나요?" },
          { speaker: "B", zh: "在黄浦江边。", pinyin: "Zài Huángpǔ Jiāng biān.", ko: "황푸강변에 있어요." },
          { speaker: "A", zh: "晚上漂亮吗?", pinyin: "Wǎnshang piàoliang ma?", ko: "밤에 아름다운가요?" },
          { speaker: "B", zh: "很漂亮, 夜景很有名。", pinyin: "Hěn piàoliang, yèjǐng hěn yǒumíng.", ko: "매우 아름다워요, 야경이 유명해요." }
        ]
      },
      {
        level: { ko: "중급", zh: "中级" },
        lines: [
          { speaker: "A", zh: "晚上的外滩真热闹。", pinyin: "Wǎnshang de Wàitān zhēn rènào.", ko: "밤의 와이탄은 정말 북적이네요." },
          { speaker: "B", zh: "灯光倒映在江面上, 好美。", pinyin: "Dēngguāng dàoyìng zài jiāngmiàn shàng, hǎo měi.", ko: "불빛이 강물에 비쳐서 아름다워요." },
          { speaker: "A", zh: "对面就是东方明珠塔吗?", pinyin: "Duìmiàn jiùshì Dōngfāng Míngzhū Tǎ ma?", ko: "맞은편이 바로 동방명주탑인가요?" },
          { speaker: "B", zh: "是的, 我们在这里拍张照片吧。", pinyin: "Shì de, wǒmen zài zhèlǐ pāi zhāng zhàopiàn ba.", ko: "네, 여기서 사진 한 장 찍어요." }
        ]
      },
      {
        level: { ko: "고급", zh: "高级" },
        lines: [
          { speaker: "A", zh: "外滩最吸引人的地方是新旧建筑形成的对比。", pinyin: "Wàitān zuì xīyǐn rén de dìfang shì xīn jiù jiànzhù xíngchéng de duìbǐ.", ko: "와이탄의 가장 매력적인 점은 신구 건축물이 이루는 대비예요." },
          { speaker: "B", zh: "西岸的近代建筑和东岸的摩天大楼共同展示了上海的发展。", pinyin: "Xī'àn de jìndài jiànzhù hé dōng'àn de mótiān dàlóu gòngtóng zhǎnshì le Shànghǎi de fāzhǎn.", ko: "서쪽의 근대 건축과 동쪽의 마천루가 함께 상하이의 발전을 보여 줘요." },
          { speaker: "A", zh: "沿江散步时, 可以感受到这座城市的国际化历史。", pinyin: "Yán jiāng sànbù shí, kěyǐ gǎnshòu dào zhè zuò chéngshì de guójìhuà lìshǐ.", ko: "강변을 걸으면 이 도시의 국제화 역사를 느낄 수 있어요." },
          { speaker: "B", zh: "所以外滩不仅适合拍照, 也值得慢慢了解。", pinyin: "Suǒyǐ Wàitān bùjǐn shìhé pāizhào, yě zhídé mànman liǎojiě.", ko: "그래서 와이탄은 사진 찍기 좋을 뿐 아니라 천천히 알아볼 가치도 있어요." }
        ]
      }
    ]
  }
];
