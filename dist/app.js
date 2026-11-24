const icons = {
  complaint: '<path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-5.5A7.5 7.5 0 1 1 20 11.5Z"/><path d="M7 10h7M7 13h5"/>',
  policy: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h7"/>',
  job: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  shop: '<path d="M4 10v10h16V10M3 10l2-6h14l2 6M3 10c0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0"/><path d="M9 20v-5h6v5"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  home: '<path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6"/>',
  sound: '<path d="M4 10v4h4l5 4V6l-5 4H4Z"/><path d="M17 9a5 5 0 0 1 0 6M19.5 6.5a9 9 0 0 1 0 11"/>',
  warning: '<path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 17h.01"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  list: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8 9h8M8 13h8M8 17h5"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  bell: '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  activity: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18M8 14h3M13 14h3M8 18h3"/>',
  points: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.2-5.4-2.9-5.4 2.9 1-6.2-4.4-4.3 6.1-.9L12 3Z"/>',
  gift: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18M12 8v13M7.5 8C5.6 8 4 6.4 4 4.8 4 3.6 5 3 6 3c2.2 0 4 2.2 6 5M16.5 8c1.9 0 3.5-1.6 3.5-3.2C20 3.6 19 3 18 3c-2.2 0-4 2.2-6 5"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c0-3.2 2.4-5.6 5.5-5.6s5.5 2.4 5.5 5.6"/><path d="M16 5.2a3.2 3.2 0 0 1 0 6.2M17 14.8c2.2.5 3.5 2.4 3.5 5.2"/>',
  user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 21c0-4 3.1-7 7-7s7 3 7 7"/>',
  check: '<path d="m5 12 4.2 4.2L19 6.5"/>',
  spark: '<path d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z"/><path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6H5V6h6"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h3v4h-6v-3M20 14h1M14 20v1"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
  flower: '<path d="M12 12c-1.8-4.8.2-7.5 2.4-6.2 1.9 1.1.5 4.3-2.4 6.2Zm0 0c4.8-1.8 7.5.2 6.2 2.4-1.1 1.9-4.3.5-6.2-2.4Zm0 0c1.8 4.8-.2 7.5-2.4 6.2-1.9-1.1-.5-4.3 2.4-6.2Zm0 0c-4.8 1.8-7.5-.2-6.2-2.4C6.9 7.7 10.1 9.1 12 12Z"/><circle cx="12" cy="12" r="1.7"/>',
  peacock: '<path d="M12 21c-3.2-3.4-4.2-7.4-2.7-11.3 1.4-3.7 4.9-5.4 7.8-3.8 2.9 1.7 3.4 5.4 1.1 8.4-1.5 1.9-3.9 4-6.2 6.7Z"/><path d="M12 20V8M12 14.4c-1.8-.4-3-1.4-3.6-3.1M12 16.8c2-.3 3.4-1.4 4.1-3.2M12 12c-1.2-.2-2.1-.9-2.6-2M12 13.6c1.2-.2 2.1-.8 2.6-1.9"/><circle cx="12" cy="9.2" r="1.9"/><circle cx="12" cy="9.2" r=".7" fill="currentColor" stroke="none"/>',
  pagoda: '<path d="M3 20h18M5 20v-4h14v4M4 16l8-4 8 4M7 12V9h10v3M6 9l6-3 6 3M12 6V3M9.5 20v-3h5v3"/>'
};

const svg = (name, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.more}</svg>`;

const pad2 = (value) => String(value).padStart(2, '0');
const WEEKDAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const MINIAPP_LINK = '#小程序://平安版纳/6lCBR3ZWjqYodKk';
const dayKey = (date = new Date()) => `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
const fmtTime = (date) => `${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
const fmtDateCN = (date) => `${date.getMonth() + 1}月${date.getDate()}日 ${WEEKDAYS[date.getDay()]}`;
const fmtDateTimeCN = (date) => `${fmtDateCN(date)} ${fmtTime(date)}`;
const inputDate = (date) => `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
const inputDateTime = (date) => `${inputDate(date)}T${fmtTime(date)}`;

function dateFromNow(days, hour = 9, minute = 0) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(hour, minute, 0, 0);
  return date;
}

function makeWindow(days, hour, minute, duration = 120) {
  const start = dateFromNow(days, hour, minute);
  const end = new Date(start.getTime() + duration * 60000);
  return { start, end };
}

const act1 = makeWindow(3, 8, 30, 120);
const act2 = makeWindow(7, 18, 30, 150);
const act3 = makeWindow(11, 14, 0, 120);
const act4 = makeWindow(15, 9, 30, 120);
const act5 = makeWindow(21, 9, 0, 150);
const act6 = makeWindow(9, 9, 0, 180);
const act7 = makeWindow(13, 19, 0, 120);

const seeds = {
  complaints: [
    { title: '小区3号楼电梯异响', status: '已办结', desc: '已由网格员联系物业完成检修，请确认处理结果', disputeCode: 'JFD-2026-0018' },
    { title: '楼道堆放杂物影响通行', status: '处理中', desc: '网格员已接单，正在联系相关住户' },
    { title: '小区绿化带需要修剪', status: '待分办', desc: '投诉已提交，等待管理员分派' },
    { title: '夜间施工噪声扰民', status: '已办结', desc: '已协调施工方调整作业时间' },
    { title: '单元门门禁无法使用', status: '处理中', desc: '物业已安排师傅上门检查' },
    { title: '公共区域垃圾清理不及时', status: '已办结', desc: '保洁人员已完成清理' }
  ],
  policies: [
    { title: '关于进一步提高城乡居民基本养老保险待遇的通知', desc: '自7月1日起，基础养老金最低标准每人每月提高20元，符合条件的居民可关注当地申领安排。', level: '国家政策', scope: '国家', date: '昨天', image: './assets/policy-elderly.jpg', imageAlt: '社区工作人员向傣族老人讲解养老政策' },
    { title: '社区「家门口就业」补贴申领指南（图文版）', desc: '灵活就业人员社保补贴、一次性创业补贴申领条件与流程一文读懂。', level: '社区福利', scope: '社区', date: '6月11日', image: './assets/policy-community.jpg', imageAlt: '告庄社区政策宣讲现场' },
    { title: '2024 老旧小区改造新政来了', desc: '加装电梯补贴最高25万、停车位的配建标准调整，带你读懂本次改造方案。', level: '市级政策', scope: '市级', date: '今天 09:00', image: './assets/policy-renewal.jpg', imageAlt: '完成改造的告庄社区住宅与加装电梯' },
    { title: '关于住宅小区电动自行车停放充电的倡议', desc: '规范停放、安全充电，共同维护楼道与公共区域安全。', level: '省级政策', scope: '省级', date: '6月8日' },
    { title: '困难家庭临时救助办理说明', desc: '介绍申请条件、办理材料和社区服务窗口的受理时间。', level: '社区福利', scope: '社区', date: '6月2日', image: './assets/policy-elderly.jpg', imageAlt: '社区工作者上门讲解救助政策' },
    { title: '告庄社区长者助餐服务试点公告', desc: '社区日间照料中心新增午餐助餐点，60岁以上居民可登记办理，行动不便长者支持预约送餐。', level: '社区福利', scope: '社区', date: '5月28日', image: './assets/policy-community.jpg', imageAlt: '社区长者服务宣讲' },
    { title: '西双版纳州高校毕业生基层就业补贴申报指南', desc: '到基层就业的高校毕业生可按规定申请就业补贴，线上提交材料与审核进度均可查询。', level: '市级政策', scope: '市级', date: '5月21日', image: './assets/policy-community.jpg', imageAlt: '社区就业政策讲解' },
    { title: '澜沧江流域禁渔期与生态保护告知书', desc: '禁渔期内禁止非法捕捞和销售野生渔获物，发现违规行为可向社区或渔政部门反映。', level: '省级政策', scope: '省级', date: '5月16日' },
    { title: '防范电信网络诈骗 · 社区温馨提示', desc: '不轻信陌生来电、不点击未知链接、不向陌生账户转账；遇到可疑情况请及时联系社区网格员。', level: '社区福利', scope: '社区', date: '5月09日' }
  ],
  jobs: [
    { title: '社区食堂帮厨', price: '180元/天', type: '日结', tags: ['包午餐', '50–60岁优先'], company: '和煦社区食堂', distance: '500m', urgent: true },
    { title: '周末家电维修师傅', price: '面议 · 200元/单', type: '周结', tags: ['有经验优先', '时间灵活'], company: '幸福里物业服务中心', distance: '1.2km' },
    { title: '小区绿化养护零工', price: '25元/小时', type: '日结', tags: ['上白班', '长期可续'], company: '绿城物业 · 三分区', distance: '800m' },
    { title: '社区活动协助员', price: '120元/天', type: '日结', tags: ['包餐', '就近上岗'], company: '邻里活动中心', distance: '1.5km' }
  ],
  shops: [
    { title: '沿街旺铺 · 临街大开间', type: '出租', price: '6500元/月', area: '45㎡', fact: '临街一层', tags: ['可餐饮', '精装修', '押二付一'], time: '2小时前', color: '' },
    { title: '社区底商便利店整体转让', type: '转让', price: '转让费3万', area: '60㎡', fact: '月租4800', tags: ['带证照', '设备齐全', '老小区口'], time: '昨天', color: 'orange' },
    { title: '广场东侧临街旺铺', type: '出租', price: '8800元/月', area: '80㎡', fact: '层高4m', tags: ['人流稳定', '采光好'], time: '3天前', color: 'blue' },
    { title: '求租社区周边门面', type: '求租', price: '预算6000元/月', area: '40–70㎡', fact: '餐饮优先', tags: ['长期租', '可空转'], time: '今天', color: '' }
  ],
  activities: [
    {
      title: '澜沧江畔 · 志愿净滩行动',
      category: '环境共治',
      startAt: act1.start.toISOString(),
      endAt: act1.end.toISOString(),
      deadline: dateFromNow(2, 20, 0).toISOString(),
      location: '告庄滨江步道 · 1号入口',
      organizer: '告庄社区志愿服务队',
      desc: '沿澜沧江步道清理垃圾、记录河道环境。现场提供夹钳和手套，请自备水杯，完成签到可获得志愿积分。',
      reward: 25,
      capacity: 40,
      joined: 26,
      image: './assets/activity-river.jpg',
      imageAlt: '志愿者在澜沧江畔清理河岸'
    },
    {
      title: '告庄星光夜市 · 文明旅游志愿岗',
      category: '文旅服务',
      startAt: act2.start.toISOString(),
      endAt: act2.end.toISOString(),
      deadline: dateFromNow(6, 20, 0).toISOString(),
      location: '告庄西双景星光夜市游客中心',
      organizer: '告庄社区文旅志愿队',
      desc: '为游客提供路线指引、文明旅游提示和应急帮助。普通话流利即可，会傣语或基础英语优先。',
      reward: 25,
      capacity: 30,
      joined: 21,
      image: './assets/dai-market.jpg',
      imageAlt: '告庄星光夜市傣锦摊位'
    },
    {
      title: '傣锦共学 · 非遗讲解志愿岗',
      category: '文化传承',
      startAt: act3.start.toISOString(),
      endAt: act3.end.toISOString(),
      deadline: dateFromNow(10, 18, 0).toISOString(),
      location: '告庄社区非遗工坊',
      organizer: '邻里文化社',
      desc: '协助非遗老师整理傣锦展品，为到访居民讲解孔雀纹、水波纹等传统图案。',
      reward: 20,
      capacity: 20,
      joined: 13,
      image: './assets/dai-brocade.jpg',
      imageAlt: '傣锦孔雀纹样'
    },
    {
      title: '社区花园共建 · 傣乡花圃',
      category: '社区共治',
      startAt: act4.start.toISOString(),
      endAt: act4.end.toISOString(),
      deadline: dateFromNow(14, 20, 0).toISOString(),
      location: '幸福里小区中庭',
      organizer: '幸福里物业 · 邻里共治小组',
      desc: '一起翻土、认养花木、布置雨林植物角，把楼下空地变成邻里共享的小花园。',
      reward: 15,
      capacity: 35,
      joined: 18,
      image: './assets/activity-garden.jpg',
      imageAlt: '告庄居民一起建设热带社区花园',
      icon: 'flower'
    },
    {
      title: '周末助老 · 邻里探访',
      category: '助老服务',
      startAt: act5.start.toISOString(),
      endAt: act5.end.toISOString(),
      deadline: dateFromNow(20, 18, 0).toISOString(),
      location: '告庄社区日间照料中心',
      organizer: '邻里互助会',
      desc: '与社区网格员一起探访独居老人，协助检查家中用电安全，陪老人聊聊天。',
      reward: 20,
      capacity: 18,
      joined: 9,
      image: './assets/activity-elderly.jpg',
      imageAlt: '志愿者上门探望傣族老人',
      icon: 'users'
    },
    {
      title: '泼水节 · 文明泼水志愿引导',
      category: '节庆服务',
      startAt: act6.start.toISOString(),
      endAt: act6.end.toISOString(),
      deadline: dateFromNow(7, 20, 0).toISOString(),
      location: '告庄西双景泼水广场',
      organizer: '告庄社区文旅志愿队',
      desc: '在泼水节活动区域提供路线引导、文明泼水提示和游客帮助，协助维护现场秩序与环境卫生。',
      reward: 20,
      capacity: 50,
      joined: 38,
      image: './assets/activity-water.jpg',
      imageAlt: '告庄泼水节文明引导志愿服务'
    },
    {
      title: '澜沧江夜跑 · 赛事护航志愿岗',
      category: '平安守护',
      startAt: act7.start.toISOString(),
      endAt: act7.end.toISOString(),
      deadline: dateFromNow(12, 18, 0).toISOString(),
      location: '告庄滨江步道 · 赛事服务点',
      organizer: '告庄社区平安志愿队',
      desc: '协助赛事签到、补给发放和沿线秩序维护，为跑友提供路线指引与应急联络支持。',
      reward: 20,
      capacity: 24,
      joined: 11,
      image: './assets/gaozhuang-night.jpg',
      imageAlt: '告庄滨江步道夜景'
    }
  ],
  rewards: [
    { title: '傣锦书签', type: '实物', desc: '社区工坊手作书签', cost: 60, stock: 18, icon: 'book', theme: 'jade', validity: '领取后长期使用' },
    { title: '社区食堂餐券', type: '虚拟券', desc: '两荤一素邻里套餐', cost: 80, stock: 30, icon: 'shop', theme: 'orange', validity: '兑换后30天内有效' },
    { title: '告庄夜市咖啡券', type: '虚拟券', desc: '合作商户手冲咖啡一杯', cost: 120, stock: 12, icon: 'gift', theme: 'gold', validity: '兑换后7天内有效' },
    { title: '亲子傣陶体验', type: '虚拟券', desc: '周末手作课名额一个', cost: 200, stock: 6, icon: 'spark', theme: 'teal', validity: '兑换后30天内预约使用' }
  ]
};

const STORE_KEY = 'linli-community-mock-data-v1';
const PROFILE_KEY = 'linli-community-profile-v2';
const SEED_VERSION_KEY = 'linli-community-seed-version';
const SEED_VERSION = 5;
const MERGE_SEED_KEYS = new Set(['policies', 'activities', 'rewards']);
const SEED_ENRICH_FIELDS = ['image', 'imageAlt', 'icon'];

function loadStore() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
    const savedVersion = Number(localStorage.getItem(SEED_VERSION_KEY) || 0);
    const shouldMerge = savedVersion < SEED_VERSION;
    const merged = Object.fromEntries(
      Object.entries(seeds).map(([key, items]) => {
        if (!Array.isArray(saved[key])) return [key, items.map((item) => ({ ...item }))];
        if (!shouldMerge || !MERGE_SEED_KEYS.has(key)) return [key, saved[key]];
        const existingTitles = new Set(saved[key].map((item) => item.title));
        const seedsByTitle = new Map(items.map((item) => [item.title, item]));
        const enriched = saved[key].map((item) => {
          const seedItem = seedsByTitle.get(item.title);
          if (!seedItem) return item;
          const next = { ...item };
          SEED_ENRICH_FIELDS.forEach((field) => {
            if (!seedItem[field]) return;
            if (field === 'image' || field === 'imageAlt') next[field] = seedItem[field];
            else if (next[field] == null || next[field] === '') next[field] = seedItem[field];
          });
          return next;
        });
        const additions = items.filter((item) => !existingTitles.has(item.title)).map((item) => ({ ...item }));
        return [key, [...enriched, ...additions]];
      })
    );
    if (shouldMerge) localStorage.setItem(SEED_VERSION_KEY, String(SEED_VERSION));
    return merged;
  } catch {
    return Object.fromEntries(Object.entries(seeds).map(([key, items]) => [key, items.map((item) => ({ ...item }))]));
  }
}

const data = loadStore();
Object.entries(data).forEach(([key, items]) => {
  items.forEach((item, index) => {
    if (!item.id) item.id = `${key}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`;
  });
});

const save = () => localStorage.setItem(STORE_KEY, JSON.stringify(data));
save();

const DEFAULT_PROFILE = {
  points: 120,
  rewardKeys: [],
  registrations: [],
  redemptions: [],
  history: [
    { id: 'ph-1', title: '完成「澜沧江畔 · 春季净滩行动」签到', points: 25, type: 'activity', time: '11月18日 10:36' },
    { id: 'ph-2', title: '完成「星光夜市 · 泼水节文明引导」签到', points: 20, type: 'activity', time: '11月15日 21:08' },
    { id: 'ph-3', title: '完成「傣历新年 · 社区助老探访」签到', points: 20, type: 'activity', time: '11月09日 11:42' },
    { id: 'ph-4', title: '完成「雨林花圃 · 秋季养护」签到', points: 15, type: 'activity', time: '11月02日 11:25' },
    { id: 'ph-5', title: '完成「傣锦工坊 · 非遗开放日」签到', points: 20, type: 'activity', time: '10月26日 16:12' },
    { id: 'ph-6', title: '完成「旧物循环市集志愿岗」签到', points: 20, type: 'activity', time: '10月19日 17:40' }
  ]
};

function loadProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROFILE_KEY) || 'null');
    if (!saved) return JSON.parse(JSON.stringify(DEFAULT_PROFILE));
    return {
      ...JSON.parse(JSON.stringify(DEFAULT_PROFILE)),
      ...saved,
      rewardKeys: Array.isArray(saved.rewardKeys) ? saved.rewardKeys : [],
      registrations: Array.isArray(saved.registrations) ? saved.registrations : [],
      redemptions: Array.isArray(saved.redemptions) ? saved.redemptions : [],
      history: Array.isArray(saved.history) ? saved.history : DEFAULT_PROFILE.history
    };
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_PROFILE));
  }
}

const profile = loadProfile();
const saveProfile = () => localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
const state = {
  page: 'complaint',
  policyLevel: '全部',
  policyQuery: '',
  jobMode: '我要找工作',
  jobType: '全部',
  shopType: '出租',
  shopQuery: '',
  activityFilter: '全部',
  rewardFilter: '全部',
  pointsTab: 'history',
  renderedPage: null,
  toastTimer: null
};

const formatPoints = (points) => Number(points || 0).toLocaleString('zh-CN');
const nowLabel = () => {
  const date = new Date();
  return `${date.getMonth() + 1}月${date.getDate()}日 ${fmtTime(date)}`;
};

function levelInfo(points) {
  if (points >= 600) return { name: '金孔雀志愿者', next: null, progress: 100, remain: 0 };
  if (points >= 300) return { name: '傣乡同行者', next: 600, progress: Math.round(((points - 300) / 300) * 100), remain: 600 - points };
  if (points >= 100) return { name: '邻里先锋', next: 300, progress: Math.round(((points - 100) / 200) * 100), remain: 300 - points };
  return { name: '志愿新芽', next: 100, progress: Math.round((points / 100) * 100), remain: 100 - points };
}

function claimPoints(key, amount, title, meta = {}) {
  if (profile.rewardKeys.includes(key)) return false;
  profile.rewardKeys.push(key);
  profile.points += amount;
  profile.history.unshift({
    id: `ph-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    title,
    points: amount,
    type: meta.type || 'activity',
    time: nowLabel(),
    createdAt: Date.now(),
    ...meta
  });
  saveProfile();
  return true;
}

function spendPoints(amount, title, meta = {}) {
  if (profile.points < amount) return false;
  profile.points -= amount;
  profile.history.unshift({
    id: `ph-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    title,
    points: -amount,
    type: meta.type || 'redeem',
    time: nowLabel(),
    createdAt: Date.now(),
    ...meta
  });
  saveProfile();
  return true;
}

function activityMeta(activity) {
  const start = new Date(activity.startAt);
  const end = new Date(activity.endAt);
  return {
    start,
    end,
    day: pad2(start.getDate()),
    month: `${start.getMonth() + 1}月`,
    weekday: WEEKDAYS[start.getDay()],
    dateLabel: fmtDateCN(start),
    timeLabel: `${fmtTime(start)}–${fmtTime(end)}`,
    deadlineLabel: fmtDateTimeCN(new Date(activity.deadline))
  };
}

const activityById = (id) => data.activities.find((activity) => activity.id === id);
const registrationById = (id) => profile.registrations.find((registration) => registration.id === id);
const rewardById = (id) => data.rewards.find((reward) => reward.id === id);

function header(title, { center = false, extra = '', right = '', back = '' } = {}) {
  return `<div class="topline ${center ? 'center' : ''}"><span class="topbar-dai-mark" aria-hidden="true">${svg('pagoda')}</span>${back ? `<button class="header-back" data-page="${back}" aria-label="返回">${svg('chevron')}</button>` : ''}<button class="brand-logo" data-page="complaint" aria-label="返回告庄社区首页"><img src="./assets/logo.jpg" alt="告庄社区"></button><h1>${title}</h1>${right ? `<div class="top-actions">${right}</div>` : ''}</div>${extra}`;
}

function pointsPill() {
  return `<button class="points-mini" data-page="points">${svg('points')}<b>${formatPoints(profile.points)}</b><span>积分</span></button>`;
}

function render() {
  const pageChanged = state.renderedPage !== state.page;
  document.querySelector('#topbar').innerHTML = pageHeader();
  document.querySelector('#app').innerHTML = pageBody();
  const nav = [
    ['complaint', '首页', 'complaint'],
    ['activity', '活动', 'activity'],
    ['job', '就业', 'job'],
    ['mine', '我的', 'user']
  ];
  const activeNav = state.page === 'points' || state.page === 'shop' || state.page === 'mine' ? 'mine' : state.page;
  document.querySelector('#bottom-nav').innerHTML = nav
    .map(([key, label, icon]) => `<button class="nav-item ${activeNav === key ? 'active' : ''}" data-page="${key}">${svg(icon)}<span>${label}</span></button>`)
    .join('');
  if (pageChanged) document.querySelector('#app').scrollTop = 0;
  state.renderedPage = state.page;
  bind();
}

function pageHeader() {
  if (state.page === 'complaint') return header('告庄社区');
  if (state.page === 'activity') return header('志愿活动', { right: pointsPill() });
  if (state.page === 'points') return header('积分商城', { back: 'mine', right: `<button class="points-mini" data-page="activity">${svg('activity')}<span>赚积分</span></button>` });
  if (state.page === 'mine') return header('我的');
  if (state.page === 'job') {
    return header('零工驿站', {
      extra: `<div class="toggle-row">${['我要找工作', '我要招人'].map((item) => `<button class="${state.jobMode === item ? 'active' : ''}" data-jobmode="${item}">${item}</button>`).join('')}</div>`
    });
  }
  return header('商铺服务', {
    center: true,
    back: 'mine',
    extra: `<div class="top-extra"><label class="searchbox">${svg('search')}<input id="shop-search" placeholder="搜索商铺 / 商圈 / 面积" value="${esc(state.shopQuery)}"></label></div><div class="shop-tabs">${[['出租', 28], ['转让', 15], ['求租', 9]].map(([item, count]) => `<button class="shop-tab ${state.shopType === item ? 'active' : ''}" data-shoptype="${item}">${item} <small>${count}</small></button>`).join('')}</div>`
  });
}

function pageBody() {
  return ({
    complaint: complaintPage,
    job: jobPage,
    shop: shopPage,
    activity: activityPage,
    points: pointsPage,
    mine: minePage
  })[state.page]();
}

const controls = (kind, item) => kind === 'policies' ? '' : `<div class="record-controls"><button data-edit="${kind}:${item.id}">编辑</button><button data-delete="${kind}:${item.id}">删除</button></div>`;

function complaintCard(complaint) {
  return `<article class="card complaint-card"><div class="complaint-meta"><h3>${esc(complaint.title)}</h3><span class="status-pill">${esc(complaint.status)}</span></div><p>${esc(complaint.desc)}</p>${complaint.disputeCode ? `<p class="dispute-line"><span>纠纷码</span>${esc(complaint.disputeCode)}</p>` : ''}${controls('complaints', complaint)}</article>`;
}

function complaintPage() {
  return `
    <section class="home-hero">
      <span class="dai-watermark home-watermark" aria-hidden="true">${svg('peacock')}</span>
      <p class="dai-kicker">${svg('peacock')}<span>傣乡告庄 · 澜沧江畔</span></p>
      <h2>民有所呼，我有所应</h2>
      <p>本地登记诉求，也可前往平安版纳同步上报</p>
    </section>
    <button class="hero-shortcut" data-action="new-complaint"><span class="round-icon">${svg('complaint')}</span><span><strong>登记一条社区诉求</strong><small>支持填写纠纷码 · 30秒完成</small></span><span class="arrow">›</span></button>
    <a class="gov-jump-card" href="${MINIAPP_LINK}" data-miniapp>
      <span class="gov-jump-icon"><img src="./assets/complaint-platform.jpg" alt="平安版纳"></span>
      <span class="gov-jump-copy"><strong>平安版纳 · 政府纠纷调解平台</strong><small>一键上报、工单流转、进度跟踪与办结反馈</small></span>
      <span class="gov-jump-arrow">${svg('external')}</span>
    </a>
    <button class="dai-promo" data-page="activity">
      <img src="./assets/dai-market.jpg" alt="告庄星光夜市傣锦与热带水果摊位">
      <span class="dai-promo-shade"></span>
      <span class="dai-promo-copy"><small>本周志愿活动</small><strong>告庄星光夜市 · 文明旅游志愿岗</strong><em>报名中 · 完成签到 +25 积分</em></span>
      <span class="dai-promo-arrow">${svg('chevron')}</span>
    </button>
    ${policyHomeSection()}
    <div class="section-head"><h2>常见投诉类型</h2></div>
    <div class="category-grid">${[['环境卫生', 'complaint'], ['设施损坏', 'home'], ['噪音扰民', 'sound'], ['占道经营', 'shop'], ['安全隐患', 'warning'], ['电梯故障', 'clock'], ['垃圾分类', 'list'], ['更多', 'more']].map(([name, icon]) => `<button class="category" data-category="${name}"><span class="category-icon">${svg(icon)}</span>${name}</button>`).join('')}</div>
    <div class="section-head"><h2>办理闭环流程</h2><button class="more" data-action="flow">查看详情 ›</button></div>
    <div class="steps">${['居民上报', '管理员分拣', '网格员处理', '办结反馈'].map((item, index) => `<div class="step"><span class="step-num">${index + 1}</span>${item}</div>`).join('')}</div>
    <div class="section-head"><h2>我的投诉</h2><button class="more" data-action="all-complaints">全部 ${data.complaints.length} 条 ›</button></div>
    ${data.complaints.slice(0, 3).map(complaintCard).join('')}
  `;
}

function policyHomeSection() {
  const filtered = data.policies.filter((policy) => (state.policyLevel === '全部' || policy.scope === state.policyLevel) && `${policy.title}${policy.desc}${policy.level}`.includes(state.policyQuery));
  const preferredFeature = data.policies[2];
  const activeFeature = filtered.includes(preferredFeature) ? preferredFeature : filtered.find((policy) => policy.image) || null;
  return `<section class="policy-home-block">
    <div class="section-head"><h2>政策速递</h2><div class="head-actions"><span class="source-note">为您筛选 ${filtered.length} 条</span></div></div>
    <label class="searchbox policy-home-search">${svg('search')}<input id="policy-search" placeholder="搜索政策关键词，如「老旧小区改造」" value="${esc(state.policyQuery)}"></label>
    <div class="policy-tabs home-policy-tabs">${['全部', '国家', '省级', '市级', '社区'].map((item) => `<button class="policy-tab ${state.policyLevel === item ? 'active' : ''}" data-level="${item}">${item}</button>`).join('')}</div>
    ${activeFeature ? `<article class="card featured-policy policy-home-feature"><div class="featured-cover ${activeFeature.image ? 'has-image' : ''}">${activeFeature.image ? `<img src="${activeFeature.image}" alt="${esc(activeFeature.imageAlt || activeFeature.title)}" loading="lazy"><span class="featured-cover-shade"></span>` : ''}<span class="tag">权威解读 · 图文</span><h3>${esc(activeFeature.title)}</h3></div><div class="featured-copy">${esc(activeFeature.desc)}<div class="featured-foot"><span class="tag">${esc(activeFeature.level)}</span><span class="tag orange">热读 2.1万</span><span class="policy-date">${esc(activeFeature.date)}</span></div>${controls('policies', activeFeature)}</div></article>` : ''}
    <div class="section-head policy-subhead"><h2>最新政策</h2><button class="more" data-action="all-policies">全部 ${filtered.length} 条 ›</button></div>
    <div class="policy-list">${filtered.filter((policy) => policy !== activeFeature).map((policy) => `<article class="policy-card ${policy.image ? 'has-image' : ''}">${policy.image ? `<div class="policy-thumb"><img src="${policy.image}" alt="${esc(policy.imageAlt || policy.title)}" loading="lazy"></div>` : ''}<div class="policy-card-copy"><h3>${esc(policy.title)}</h3><p>${esc(policy.desc)}</p><span class="policy-foot"><span class="tag">${esc(policy.level)}</span><span class="policy-date">${esc(policy.date)}</span></span>${controls('policies', policy)}</div></article>`).join('') || '<div class="empty-state card">没有找到相关政策，试试其他关键词</div>'}</div>
  </section>`;
}

function jobPage() {
  const filtered = data.jobs.filter((job) => state.jobType === '全部' || job.type === state.jobType || job.tags.includes(state.jobType) || (state.jobType === '家政保洁' && /食堂|保洁/.test(job.title)) || (state.jobType === '搬运' && /搬运/.test(job.title)) || (state.jobType === '维修' && /维修/.test(job.title)));
  return `${state.jobMode === '我要找工作' ? `<div class="job-banner"><span class="banner-icon">${svg('shield')}</span><div><strong>已为您智能匹配 12 个新岗位</strong><p>根据您的技能档案 · 家门口 3 公里内</p></div><button data-action="matched">查看</button></div>` : `<div class="job-banner"><span class="banner-icon">${svg('job')}</span><div><strong>发布岗位，让附近的人看见</strong><p>快速找到合适的社区服务人员</p></div><button data-action="post-job">发岗位</button></div>`}<div class="section-head"><h2>${state.jobMode === '我要找工作' ? '附近零工' : '附近求职者'}</h2><button class="more" data-action="distance">距离优先 ›</button></div><div class="chips">${['全部', '日结', '家政保洁', '搬运', '维修', '周结'].map((item) => `<button class="chip ${state.jobType === item ? 'active' : ''}" data-jobtype="${item}">${item}</button>`).join('')}</div><div style="height:10px"></div>${filtered.map((job) => `<article class="card job-card"><div class="job-title-row"><h3>${esc(job.title)} ${job.urgent ? '<span class="tag orange">急聘</span>' : ''}</h3><span class="price">${esc(job.price)}</span></div><div class="job-tags"><span class="tag">${esc(job.type)}</span>${(job.tags || []).map((tag) => `<span class="tag" style="background:#f3f4f3;color:#858d88">${esc(tag)}</span>`).join('')}</div>${controls('jobs', job)}<div class="job-footer"><span class="company">${esc(job.company)}</span>${svg('pin')}<span class="distance">${esc(job.distance)}</span><button class="primary-btn" data-apply="${esc(job.title)}">${state.jobMode === '我要找工作' ? '报名' : '联系'}</button></div></article>`).join('') || '<div class="empty-state card">当前筛选下暂无岗位</div>'}`;
}

function shopPage() {
  const filtered = data.shops.filter((shop) => shop.type === state.shopType && `${shop.title}${shop.area}${(shop.tags || []).join('')}`.includes(state.shopQuery));
  return `<div class="map-card"><div class="map-road"></div><div class="map-legend"><span><b></b>出租</span><span><b></b>转让</span></div><div class="map-pin"><span class="pin"><b>租</b></span><small>6500/月</small></div><div class="map-pin second"><span class="pin"><b>转</b></span><small>转让费3万</small></div><div class="map-location">◎ 以我为中心 · 2km</div></div><div class="section-head"><h2>优选商铺</h2><button class="more" data-action="sort-shop">按租金排序 ›</button></div>${filtered.map((shop) => `<article class="card shop-card"><div class="shop-art ${esc(shop.color || '')}"><span class="listing-type">${esc(shop.type)}</span>${svg('shop')}</div><div class="shop-detail"><div class="shop-name-row"><h3>${esc(shop.title)}</h3><span class="shop-time">${esc(shop.time || '刚刚')}</span></div><div class="shop-info"><strong class="price">${esc(shop.price)}</strong><span class="shop-facts">${esc(shop.area)}<br>${esc(shop.fact || '')}</span></div><div class="shop-tags">${(shop.tags || []).map((tag) => `<span class="tag">${esc(tag)}</span>`).join('')}</div>${controls('shops', shop)}<div class="shop-actions"><button class="outline-btn" data-call="${esc(shop.title)}">电话</button><button class="primary-btn" data-visit="${esc(shop.title)}">预约看店</button></div></div></article>`).join('') || '<div class="empty-state card">没有匹配的商铺，换个关键词试试</div>'}<button class="fab" data-action="post-shop" aria-label="发布商铺">+</button>`;
}

function minePage() {
  const registrations = profile.registrations
    .map((registration) => ({ registration, activity: activityById(registration.activityId) }))
    .filter((item) => item.activity);
  const checkedIn = registrations.filter((item) => item.registration.checkedIn).length;
  const level = levelInfo(profile.points);
  const latest = registrations[0];
  const displayName = latest?.registration.name || '告庄居民';
  const phone = latest ? latest.registration.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') : '欢迎加入社区志愿共治';
  return `
    <section class="mine-hero">
      <span class="dai-watermark mine-watermark" aria-hidden="true">${svg('peacock')}</span>
      <div class="mine-profile">
        <span class="mine-avatar"><img src="./assets/logo.jpg" alt="告庄社区"></span>
        <span class="mine-identity"><strong>${esc(displayName)}</strong><small>${esc(phone)}</small></span>
        <span class="mine-level">${level.name}</span>
      </div>
      <button class="mine-points-card" data-page="points">
        <span>${svg('points')}可用积分</span>
        <strong>${formatPoints(profile.points)}</strong>
        <em>去积分商城 ${svg('chevron')}</em>
      </button>
      <div class="mine-stats"><div><strong>${registrations.length}</strong><span>报名活动</span></div><div><strong>${checkedIn}</strong><span>已完成</span></div><div><strong>${profile.redemptions.length}</strong><span>兑换记录</span></div></div>
    </section>
    <div class="mine-shortcuts">
      <button data-page="points"><span class="mine-shortcut-icon">${svg('points')}</span><strong>积分商城</strong><small>兑换好礼</small></button>
      <button data-page="shop"><span class="mine-shortcut-icon gold">${svg('shop')}</span><strong>商铺服务</strong><small>出租转让</small></button>
      <button data-page="activity"><span class="mine-shortcut-icon">${svg('activity')}</span><strong>我的报名</strong><small>${registrations.length} 场</small></button>
      <button data-action="all-complaints"><span class="mine-shortcut-icon blue">${svg('complaint')}</span><strong>我的投诉</strong><small>${data.complaints.length} 条</small></button>
    </div>
    <div class="section-head"><h2>我的服务</h2></div>
    <div class="mine-menu">
      <button data-points-jump="orders"><span class="mine-menu-icon">${svg('gift')}</span><span><strong>兑换记录</strong><small>查看实物与虚拟券核销码</small></span><i>${svg('chevron')}</i></button>
      <button data-action="points-rules"><span class="mine-menu-icon">${svg('shield')}</span><span><strong>积分规则</strong><small>仅志愿活动签到可获得积分</small></span><i>${svg('chevron')}</i></button>
      <button data-page="shop"><span class="mine-menu-icon">${svg('shop')}</span><span><strong>商铺服务</strong><small>社区周边出租、转让与求租</small></span><i>${svg('chevron')}</i></button>
      <a href="${MINIAPP_LINK}" data-miniapp><span class="mine-menu-icon blue"><img src="./assets/complaint-platform.jpg" alt="平安版纳"></span><span><strong>平安版纳</strong><small>政府基层纠纷调解平台</small></span><i>${svg('external')}</i></a>
    </div>
    ${registrations.length ? `<div class="section-head"><h2>最近报名</h2><button class="more" data-page="activity">全部 ${registrations.length} 场 ›</button></div><div class="my-signup-list">${registrations.slice(0, 2).map(({ registration, activity }) => {
      const meta = activityMeta(activity);
      return `<article class="my-signup-card"><div class="my-signup-date"><strong>${meta.day}</strong><span>${meta.month}</span></div><div class="my-signup-copy"><span class="my-signup-status ${registration.checkedIn ? 'done' : ''}">${registration.checkedIn ? svg('check') + '已签到' : '待签到'}</span><h3>${esc(activity.title)}</h3><p>${meta.dateLabel} · ${meta.timeLabel}</p><small>${esc(activity.location)}</small></div><button class="icon-link" data-view-registration="${registration.id}" aria-label="查看报名">${svg('chevron')}</button></article>`;
    }).join('')}</div>` : ''}
    <div class="mine-note">${svg('shield')} 当前为纯前端原型，报名、积分、兑换记录仅保存在本机浏览器。</div>
  `;
}

function activityCard(activity) {
  const meta = activityMeta(activity);
  const registration = profile.registrations.find((item) => item.activityId === activity.id);
  const percent = Math.min(100, Math.round((activity.joined / activity.capacity) * 100));
  const deadlinePassed = Date.now() > new Date(activity.deadline).getTime();
  const isFull = activity.joined >= activity.capacity;
  let action = '';
  if (registration) {
    action = `<button class="activity-action joined" data-view-registration="${registration.id}">${registration.checkedIn ? '已签到' : '已报名 · 签到'}</button>`;
  } else if (isFull) {
    action = '<button class="activity-action" disabled>名额已满</button>';
  } else if (deadlinePassed) {
    action = '<button class="activity-action" disabled>报名已截止</button>';
  } else {
    action = `<button class="activity-action" data-signup="${activity.id}">立即报名</button>`;
  }
  return `<article class="activity-card card">
    <div class="activity-cover ${activity.image ? 'has-image' : 'art-' + (activity.icon || 'spark')}">
      ${activity.image ? `<img src="${activity.image}" alt="${esc(activity.imageAlt || activity.title)}" loading="lazy">` : `<span class="activity-fallback-icon">${svg(activity.icon || 'spark')}</span>`}
      <span class="activity-category">${esc(activity.category)}</span>
      <span class="activity-reward">${svg('points')} +${activity.reward}</span>
    </div>
    <div class="activity-info">
      <div class="activity-title-row"><h3>${esc(activity.title)}</h3><span class="activity-date"><strong>${meta.day}</strong><small>${meta.month}</small></span></div>
      <p class="activity-desc">${esc(activity.desc)}</p>
      <div class="activity-meta"><span>${svg('clock')}${meta.dateLabel} · ${meta.timeLabel}</span><span>${svg('pin')}${esc(activity.location)}</span></div>
      <div class="activity-progress"><div class="progress-track"><i style="width:${percent}%"></i></div><span>${activity.joined}/${activity.capacity} 人</span></div>
      <div class="activity-footer"><span class="activity-organizer">${esc(activity.organizer)} · 截止 ${meta.deadlineLabel}</span>${action}</div>
      ${controls('activities', activity)}
    </div>
  </article>`;
}

function activityPage() {
  const filtered = data.activities
    .filter((activity) => state.activityFilter === '全部' || activity.category === state.activityFilter)
    .sort((first, second) => new Date(first.startAt) - new Date(second.startAt));
  const registrations = profile.registrations
    .map((registration) => ({ registration, activity: activityById(registration.activityId) }))
    .filter((item) => item.activity);
  const pending = registrations.filter((item) => !item.registration.checkedIn).length;
  const filters = ['全部', ...new Set(data.activities.map((activity) => activity.category))];
  return `
    <section class="activity-hero">
      <img src="./assets/gaozhuang-night.jpg" alt="告庄西双景澜沧江畔夜景">
      <div class="activity-hero-overlay"></div>
      <div class="activity-hero-copy"><span class="hero-kicker">${svg('peacock')}傣乡志愿 · 社区共治</span><h2>把邻里小事<br>做成共同的作品</h2><p>报名志愿活动 · 完成签到自动获得 10–25 积分</p></div>
      <div class="activity-facts"><div><strong>${data.activities.length}</strong><span>场志愿活动</span></div><div><strong>${pending}</strong><span>待签到</span></div><div><strong>${formatPoints(profile.points)}</strong><span>我的积分</span></div></div>
    </section>
    <div class="chips event-chips">${filters.map((item) => `<button class="chip ${state.activityFilter === item ? 'active' : ''}" data-activity-filter="${item}">${item}</button>`).join('')}</div>
    <div class="section-head"><h2>${state.activityFilter === '全部' ? '近期志愿活动' : state.activityFilter}</h2><div class="head-actions"><span class="source-note">签到后发放积分</span><button class="more" data-action="new-activity">＋发布</button></div></div>
    <div class="activity-list">${filtered.map(activityCard).join('') || '<div class="empty-state card">当前分类暂无活动</div>'}</div>
    ${registrations.length ? `<div class="section-head"><h2>我的报名</h2><span class="source-note">${registrations.length} 场</span></div><div class="my-signup-list">${registrations.map(({ registration, activity }) => {
      const meta = activityMeta(activity);
      return `<article class="my-signup-card"><div class="my-signup-date"><strong>${meta.day}</strong><span>${meta.month}</span></div><div class="my-signup-copy"><span class="my-signup-status ${registration.checkedIn ? 'done' : ''}">${registration.checkedIn ? svg('check') + '已签到' : '已报名'}</span><h3>${esc(activity.title)}</h3><p>${meta.dateLabel} · ${meta.timeLabel}<br>${esc(activity.location)}</p><small>${esc(registration.name)} · ${registration.guests ? `含随行 ${registration.guests} 人` : '1 人参加'}</small></div><button class="icon-link" data-view-registration="${registration.id}" aria-label="查看报名">${svg('chevron')}</button></article>`;
    }).join('')}</div>` : ''}
  `;
}

function rewardCard(reward) {
  const soldOut = Number(reward.stock) <= 0;
  return `<article class="reward-card">
    <div class="reward-visual ${esc(reward.theme || 'jade')}"><span class="reward-type">${esc(reward.type)}</span>${svg(reward.icon || 'gift')}</div>
    <h3>${esc(reward.title)}</h3>
    <p>${esc(reward.desc)}</p>
    <div class="reward-bottom"><span class="reward-cost">${reward.cost} 积分</span><span class="reward-stock">余 ${reward.stock}</span></div>
    <button data-redeem="${reward.id}" ${soldOut ? 'disabled' : ''}>${soldOut ? '已兑完' : '立即兑换'}</button>
  </article>`;
}

function historyRow(item) {
  const negative = item.points < 0;
  const icon = negative ? 'gift' : item.type === 'activity' ? 'activity' : 'points';
  return `<div class="ledger-row"><span class="ledger-icon ${negative ? 'minus' : ''}">${svg(icon)}</span><span class="ledger-copy"><strong>${esc(item.title)}</strong><small>${esc(item.time)}${negative ? ' · 积分兑换' : ' · 志愿活动'}</small></span><span class="ledger-points ${negative ? 'minus' : ''}">${negative ? '' : '+'}${item.points}</span></div>`;
}

function orderRow(order) {
  return `<article class="order-card"><div class="order-head"><span class="order-type">${esc(order.type)}</span><span class="order-status">${esc(order.status)}</span></div><h3>${esc(order.title)}</h3><p>${esc(order.time)} · 订单号 ${esc(order.code)}</p><div class="order-foot"><span>核销码</span><strong>${esc(order.verifyCode)}</strong><em>-${order.cost} 积分</em></div></article>`;
}

function pointsPage() {
  const level = levelInfo(profile.points);
  const rewards = data.rewards.filter((reward) => state.rewardFilter === '全部' || reward.type === state.rewardFilter);
  return `
    <section class="points-hero">
      <img src="./assets/dai-brocade.jpg" alt="傣锦孔雀纹样">
      <div class="points-hero-overlay"></div>
      <div class="points-hero-copy"><span class="hero-kicker">${svg('peacock')}傣锦好礼 · 志愿回馈</span><div class="points-balance"><strong>${formatPoints(profile.points)}</strong><span>可用积分</span></div><div class="points-level"><span class="level-name">${level.name}</span><span>${level.next ? `再获得 ${level.remain} 分升级` : '已达最高等级'}</span></div><div class="level-track"><i style="width:${level.progress}%"></i></div><small>积分仅限参与社区志愿活动并获得签到核验后发放</small></div>
      <button class="points-hero-action" data-page="activity">${svg('activity')}去报名活动</button>
    </section>
    <div class="points-rule-strip"><span>${svg('shield')}</span><p><strong>积分长期有效</strong> · 活动签到成功后自动到账，可在本页兑换实物或虚拟券</p></div>
    <div class="section-head"><h2>积分兑好礼</h2><button class="more" data-action="points-rules">积分规则 ›</button></div>
    <div class="chips reward-filter">${['全部', '实物', '虚拟券'].map((item) => `<button class="chip ${state.rewardFilter === item ? 'active' : ''}" data-reward-filter="${item}">${item}</button>`).join('')}</div>
    <div class="reward-grid">${rewards.map(rewardCard).join('') || '<div class="empty-state card">暂无商品</div>'}</div>
    <div class="section-head"><h2>我的积分</h2><div class="segmented"><button class="${state.pointsTab === 'history' ? 'active' : ''}" data-points-tab="history">积分明细</button><button class="${state.pointsTab === 'orders' ? 'active' : ''}" data-points-tab="orders">兑换记录</button></div></div>
    ${state.pointsTab === 'history' ? `<div class="ledger">${profile.history.slice(0, 20).map(historyRow).join('') || '<div class="empty-state">还没有积分明细</div>'}</div>` : `<div class="order-list">${profile.redemptions.map(orderRow).join('') || '<div class="empty-state card">还没有兑换记录，去挑一件邻里好礼吧</div>'}</div>`}
  `;
}

function bind() {
  document.querySelectorAll('[data-page]').forEach((button) => {
    button.onclick = () => {
      state.page = button.dataset.page;
      render();
    };
  });
  document.querySelectorAll('[data-level]').forEach((button) => {
    button.onclick = () => {
      state.policyLevel = button.dataset.level;
      render();
    };
  });
  document.querySelector('#policy-search')?.addEventListener('input', (event) => {
    state.policyQuery = event.target.value;
    const position = event.target.selectionStart;
    render();
    const input = document.querySelector('#policy-search');
    input.focus();
    input.setSelectionRange(position, position);
  });
  document.querySelectorAll('[data-jobmode]').forEach((button) => {
    button.onclick = () => {
      state.jobMode = button.dataset.jobmode;
      render();
    };
  });
  document.querySelectorAll('[data-jobtype]').forEach((button) => {
    button.onclick = () => {
      state.jobType = button.dataset.jobtype;
      render();
    };
  });
  document.querySelectorAll('[data-shoptype]').forEach((button) => {
    button.onclick = () => {
      state.shopType = button.dataset.shoptype;
      render();
    };
  });
  document.querySelector('#shop-search')?.addEventListener('input', (event) => {
    state.shopQuery = event.target.value;
    const position = event.target.selectionStart;
    render();
    const input = document.querySelector('#shop-search');
    input.focus();
    input.setSelectionRange(position, position);
  });
  document.querySelectorAll('[data-activity-filter]').forEach((button) => {
    button.onclick = () => {
      state.activityFilter = button.dataset.activityFilter;
      render();
    };
  });
  document.querySelectorAll('[data-reward-filter]').forEach((button) => {
    button.onclick = () => {
      state.rewardFilter = button.dataset.rewardFilter;
      render();
    };
  });
  document.querySelectorAll('[data-points-tab]').forEach((button) => {
    button.onclick = () => {
      state.pointsTab = button.dataset.pointsTab;
      render();
    };
  });
  document.querySelectorAll('[data-points-jump]').forEach((button) => {
    button.onclick = () => {
      state.pointsTab = button.dataset.pointsJump;
      state.page = 'points';
      render();
    };
  });
  document.querySelectorAll('[data-action]').forEach((button) => {
    button.onclick = () => action(button.dataset.action);
  });
  document.querySelectorAll('[data-category]').forEach((button) => {
    button.onclick = () => openEditor('complaints', null, { category: button.dataset.category });
  });
  document.querySelectorAll('[data-edit]').forEach((button) => {
    button.onclick = () => {
      const [kind, id] = button.dataset.edit.split(':');
      openEditor(kind, id);
    };
  });
  document.querySelectorAll('[data-delete]').forEach((button) => {
    button.onclick = () => {
      const [kind, id] = button.dataset.delete.split(':');
      removeRecord(kind, id);
    };
  });
  document.querySelectorAll('[data-apply]').forEach((button) => {
    button.onclick = () => showToast(`已提交「${button.dataset.apply}」报名意向`);
  });
  document.querySelectorAll('[data-call]').forEach((button) => {
    button.onclick = () => showToast('联系电话：400-800-1234');
  });
  document.querySelectorAll('[data-visit]').forEach((button) => {
    button.onclick = () => showToast('预约成功，商家将与您联系');
  });
  document.querySelectorAll('[data-signup]').forEach((button) => {
    button.onclick = () => openSignup(button.dataset.signup);
  });
  document.querySelectorAll('[data-view-registration]').forEach((button) => {
    button.onclick = () => openRegistrationDetail(button.dataset.viewRegistration);
  });
  document.querySelectorAll('[data-redeem]').forEach((button) => {
    button.onclick = () => openRedeem(button.dataset.redeem);
  });
  document.querySelectorAll('[data-miniapp]').forEach((link) => {
    link.onclick = (event) => {
      event.preventDefault();
      openMiniAppPrompt();
    };
  });
}

function action(name) {
  if (name === 'new-complaint') openEditor('complaints');
  else if (name === 'post-shop') openEditor('shops');
  else if (name === 'post-job') openEditor('jobs');
  else if (name === 'new-activity') openEditor('activities');
  else if (name === 'flow') showModal('办理流程', '<p class="detail-text">1. 居民提交诉求并填写纠纷码<br>2. 社区管理员核实并分派给对应网格员<br>3. 网格员联系处理并上传结果<br>4. 同步至平安版纳平台，居民查看办结反馈<br>5. 居民确认处理结果，诉求办结</p>');
  else if (name === 'all-complaints') showModal('我的投诉', data.complaints.map(complaintCard).join('') || '<p class="detail-text">还没有投诉记录</p>');
  else if (name === 'settings') showToast('已为您打开政策订阅偏好');
  else if (name === 'matched') showToast('已为您匹配 12 个附近岗位');
  else if (name === 'distance' || name === 'sort-shop') showToast('已按距离和租金综合排序');
  else if (name === 'all-policies') showToast(`当前共有 ${data.policies.length} 条政策`);
  else if (name === 'points-rules') showModal('积分规则', '<p class="detail-text">1. 积分仅通过参与社区志愿共治活动获得。<br>2. 完成活动签到核验后，按活动配置自动发放 10–25 积分。<br>3. 积分长期有效、可累计，不支持签到或发帖等其他获取方式。<br>4. 兑换时同步扣减积分与库存；兑换成功后生成核销码或领取记录。<br>5. 当前为纯前端原型，数据保存在本机浏览器 localStorage。</p>');
}

function openEditor(kind, id = null, defaults = {}) {
  const record = id ? data[kind].find((item) => item.id === id) : null;
  const schema = {
    complaints: {
      title: '投诉',
      fields: [['title', '问题标题'], ['desc', '问题描述', 'textarea'], ['disputeCode', '纠纷码（选填）'], ['status', '处理状态', 'select', ['待分办', '处理中', '已办结']]]
    },
    jobs: {
      title: '零工岗位',
      fields: [['title', '岗位名称'], ['price', '薪酬'], ['type', '结算方式', 'select', ['日结', '周结', '月结', '面议']], ['company', '招聘单位'], ['distance', '距离'], ['tagsText', '标签（用顿号分隔）']]
    },
    shops: {
      title: '商铺信息',
      fields: [['title', '商铺名称 / 位置'], ['type', '信息类型', 'select', ['出租', '转让', '求租']], ['price', '租金或转让价格'], ['area', '面积'], ['fact', '商铺信息'], ['tagsText', '标签（用顿号分隔）']]
    },
    activities: {
      title: '志愿活动',
      fields: [
        ['title', '活动标题'],
        ['category', '活动类型', 'select', ['社区共治', '环境共治', '文旅服务', '文化传承', '助老服务', '节庆服务', '平安守护']],
        ['date', '活动日期', 'date'],
        ['startTime', '开始时间', 'time'],
        ['endTime', '结束时间', 'time'],
        ['capacity', '招募人数', 'number'],
        ['reward', '签到积分（10–25）', 'number'],
        ['deadline', '报名截止', 'datetime-local'],
        ['location', '活动地点'],
        ['organizer', '发起组织'],
        ['desc', '活动说明', 'textarea']
      ]
    }
  }[kind];
  if (!schema) return;

  const defaultActivityStart = dateFromNow(3, 9, 0);
  const defaultActivityEnd = new Date(defaultActivityStart.getTime() + 120 * 60000);
  const defaultDeadline = dateFromNow(2, 20, 0);
  const activityStart = record ? new Date(record.startAt) : defaultActivityStart;
  const activityEnd = record ? new Date(record.endAt) : defaultActivityEnd;
  const activityDeadline = record ? new Date(record.deadline) : defaultDeadline;

  const value = (key) => {
    if (key === 'tagsText') return (record?.tags || []).join('、');
    if (record && record[key] != null) return record[key];
    if (kind === 'activities') {
      if (key === 'date') return inputDate(activityStart);
      if (key === 'startTime') return fmtTime(activityStart);
      if (key === 'endTime') return fmtTime(activityEnd);
      if (key === 'deadline') return inputDateTime(activityDeadline);
      if (key === 'capacity') return 20;
      if (key === 'reward') return 15;
      if (key === 'category') return '社区共治';
      if (key === 'location') return '告庄社区活动中心';
      if (key === 'organizer') return '告庄社区志愿服务队';
    }
    if (key === 'status') return '待分办';
    if (key === 'scope') return '社区';
    if (key === 'date') return '今天';
    if (key === 'type') return kind === 'shops' ? '出租' : '日结';
    if (key === 'distance') return '500m';
    if (key === 'company') return '附近社区';
    if (key === 'area' || key === 'fact' || key === 'disputeCode') return '';
    if (key === 'title' && kind === 'complaints' && defaults.category) return `${defaults.category}问题`;
    return '';
  };

  const fields = schema.fields.map(([key, label, type, options]) => {
    const current = esc(String(value(key)));
    if (type === 'textarea') return `<label>${label}</label><textarea data-field="${key}" placeholder="请输入${label}">${current}</textarea>`;
    if (type === 'select') return `<label>${label}</label><select data-field="${key}">${options.map((option) => `<option ${current === option ? 'selected' : ''}>${option}</option>`).join('')}</select>`;
    const inputType = ['date', 'time', 'number', 'datetime-local'].includes(type) ? type : 'text';
    return `<label>${label}</label><input type="${inputType}" data-field="${key}" value="${current}" placeholder="请输入${label}">`;
  }).join('');
  showModal(`${record ? '编辑' : '新增'}${schema.title}`, `${fields}<button class="primary-btn" data-save-record="${kind}" data-record-id="${record?.id || ''}">保存</button>`);
}

function removeRecord(kind, id) {
  const index = data[kind].findIndex((item) => item.id === id);
  if (index < 0) return;
  const record = data[kind][index];
  if (!window.confirm(`确定删除「${record.title}」吗？`)) return;
  data[kind].splice(index, 1);
  save();
  render();
  showToast('已删除');
}

function modalShell(title, body) {
  const root = document.querySelector('#modal-root');
  root.innerHTML = `<div class="modal-backdrop"><section class="modal"><div class="modal-head"><h2>${esc(title)}</h2><button class="close-btn" data-close aria-label="关闭">×</button></div>${body}</section></div>`;
  const close = () => {
    root.innerHTML = '';
  };
  root.querySelector('[data-close]').onclick = close;
  root.querySelector('.modal-backdrop').onclick = (event) => {
    if (event.target === event.currentTarget) close();
  };
  return root;
}

function showModal(title, body) {
  const root = modalShell(title, body);
  root.querySelectorAll('[data-save-record]').forEach((button) => {
    button.onclick = () => {
      const kind = button.dataset.saveRecord;
      const id = button.dataset.recordId;
      const fields = {};
      root.querySelectorAll('[data-field]').forEach((input) => {
        fields[input.dataset.field] = input.value.trim();
      });
      if (!fields.title) {
        showToast('请填写标题或名称');
        return;
      }
      if (kind === 'complaints' && !fields.desc) {
        showToast('请填写问题描述');
        return;
      }

      let entry = {};
      if (kind === 'activities') {
        const start = new Date(`${fields.date}T${fields.startTime || '09:00'}:00`);
        const end = new Date(`${fields.date}T${fields.endTime || '11:00'}:00`);
        const deadline = fields.deadline ? new Date(fields.deadline) : new Date(start.getTime() - 86400000);
        if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) {
          showToast('请检查活动开始和结束时间');
          return;
        }
        if (Number.isNaN(deadline.getTime()) || deadline > start) {
          showToast('报名截止时间需早于活动开始时间');
          return;
        }
        const category = fields.category || '社区共治';
        const generatedImage = {
          社区共治: './assets/activity-garden.jpg',
          环境共治: './assets/activity-river.jpg',
          文旅服务: './assets/dai-market.jpg',
          文化传承: './assets/dai-brocade.jpg',
          助老服务: './assets/activity-elderly.jpg',
          节庆服务: './assets/activity-water.jpg',
          平安守护: './assets/gaozhuang-night.jpg'
        }[category] || '';
        const activityIcon = category === '社区共治'
          ? 'flower'
          : category === '助老服务'
            ? 'users'
            : category === '平安守护'
              ? 'shield'
              : category === '环境共治' || category === '节庆服务'
                ? 'peacock'
                : 'activity';
        entry = {
          title: fields.title,
          category,
          desc: fields.desc,
          location: fields.location,
          organizer: fields.organizer || '告庄社区',
          capacity: Math.max(1, Number(fields.capacity) || 20),
          reward: Math.min(25, Math.max(10, Number(fields.reward) || 10)),
          startAt: start.toISOString(),
          endAt: end.toISOString(),
          deadline: deadline.toISOString(),
          image: id ? data.activities.find((item) => item.id === id)?.image || '' : generatedImage,
          imageAlt: fields.title,
          icon: activityIcon
        };
      } else {
        entry = { ...fields };
        if (kind === 'jobs' || kind === 'shops') entry.tags = (fields.tagsText || '').split(/[、,，]/).map((item) => item.trim()).filter(Boolean);
        delete entry.tagsText;
        if (kind === 'shops') {
          entry.time = '刚刚';
          entry.color = '';
        }
        if (kind === 'jobs') {
          entry.distance = entry.distance || '500m';
          entry.company = entry.company || '附近社区';
        }
      }

      if (id) {
        const index = data[kind].findIndex((item) => item.id === id);
        if (index >= 0) data[kind][index] = { ...data[kind][index], ...entry };
      } else {
        data[kind].unshift({ id: `${kind}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, joined: kind === 'activities' ? 0 : undefined, ...entry });
      }
      save();
      root.innerHTML = '';
      render();
      if (kind === 'complaints' && !id) showToast('已新增记录，可前往平安版纳同步上报');
      else showToast(id ? '已保存修改' : '已新增记录');
    };
  });
  return root;
}

function openSignup(activityId) {
  const activity = activityById(activityId);
  if (!activity) return;
  const existing = profile.registrations.find((item) => item.activityId === activityId);
  if (existing) {
    openRegistrationDetail(existing.id);
    return;
  }
  if (activity.joined >= activity.capacity) {
    showToast('活动名额已满');
    return;
  }
  if (Date.now() > new Date(activity.deadline).getTime()) {
    showToast('该活动已截止报名');
    return;
  }
  const meta = activityMeta(activity);
  const root = modalShell('志愿活动报名', `
    <div class="signup-event">
      <div class="signup-cover ${activity.image ? '' : 'fallback'}">${activity.image ? `<img src="${activity.image}" alt="${esc(activity.imageAlt || activity.title)}">` : svg(activity.icon || 'spark')}</div>
      <div><span class="tag">${esc(activity.category)}</span><h3>${esc(activity.title)}</h3><p>${meta.dateLabel} · ${meta.timeLabel}</p><small>${esc(activity.location)}</small></div>
    </div>
    <p class="signup-desc">${esc(activity.desc)}</p>
    <div class="signup-points">${svg('points')} 完成签到后获得 <strong>+${activity.reward} 积分</strong></div>
    <div class="signup-fields">
      <label>报名人姓名</label><input id="signup-name" maxlength="20" placeholder="请输入姓名">
      <label>手机号</label><input id="signup-phone" inputmode="tel" maxlength="11" placeholder="用于活动通知">
      <label>随行人数</label><select id="signup-guests"><option value="0">0 人</option><option value="1">1 人</option><option value="2">2 人</option><option value="3">3 人</option></select>
    </div>
    <div class="form-tip">报名截止：${meta.deadlineLabel}。当前为纯前端原型，报名信息保存在本机浏览器。</div>
    <button class="primary-btn" data-submit-signup="${activity.id}">确认报名</button>
  `);
  root.querySelector('[data-submit-signup]').onclick = () => {
    const name = root.querySelector('#signup-name').value.trim();
    const phone = root.querySelector('#signup-phone').value.trim();
    const guests = Number(root.querySelector('#signup-guests').value) || 0;
    if (!name) {
      showToast('请填写报名人姓名');
      return;
    }
    if (!/^1[3-9]\d{9}$/.test(phone)) {
      showToast('请输入正确的 11 位手机号');
      return;
    }
    const latest = activityById(activityId);
    if (!latest) return;
    if (Date.now() > new Date(latest.deadline).getTime()) {
      showToast('该活动已截止报名');
      return;
    }
    if (latest.joined + 1 + guests > latest.capacity) {
      showToast('剩余名额不足，请减少随行人数');
      return;
    }
    const registration = {
      id: `reg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      activityId,
      name,
      phone,
      guests,
      createdAt: Date.now(),
      checkedIn: false,
      checkedInAt: null
    };
    latest.joined += 1 + guests;
    profile.registrations.unshift(registration);
    saveProfile();
    save();
    root.innerHTML = '';
    render();
    showToast(`报名成功，活动签到后可得 ${latest.reward} 积分`);
  };
}

function openRegistrationDetail(registrationId) {
  const registration = registrationById(registrationId);
  if (!registration) return;
  const activity = activityById(registration.activityId);
  if (!activity) return;
  const meta = activityMeta(activity);
  const deadlinePassed = Date.now() > new Date(activity.deadline).getTime();
  const root = modalShell('报名详情', `
    <div class="signup-event">
      <div class="signup-cover ${activity.image ? '' : 'fallback'}">${activity.image ? `<img src="${activity.image}" alt="${esc(activity.imageAlt || activity.title)}">` : svg(activity.icon || 'spark')}</div>
      <div><span class="tag">${esc(activity.category)}</span><h3>${esc(activity.title)}</h3><p>${meta.dateLabel} · ${meta.timeLabel}</p><small>${esc(activity.location)}</small></div>
    </div>
    <div class="registration-state ${registration.checkedIn ? 'done' : ''}"><span>${registration.checkedIn ? svg('check') : svg('qr')}</span><div><strong>${registration.checkedIn ? '已完成签到' : '等待活动签到'}</strong><p>${registration.checkedIn ? `签到时间：${registration.checkedInAt}` : `完成签到后可获得 +${activity.reward} 积分`}</p></div></div>
    <div class="detail-grid"><span>报名人</span><strong>${esc(registration.name)}</strong><span>手机号</span><strong>${esc(registration.phone)}</strong><span>随行人数</span><strong>${registration.guests} 人</strong><span>报名时间</span><strong>${new Date(registration.createdAt).toLocaleString('zh-CN', { hour12: false })}</strong></div>
    ${registration.checkedIn ? '<div class="form-tip">该活动积分已发放，可在积分商城查看明细。</div>' : '<div class="form-tip">活动签到由管理员核验或现场扫码。当前原型提供模拟签到，便于体验积分到账流程。</div>'}
    <div class="modal-actions">${registration.checkedIn ? '' : `<button class="primary-btn" data-checkin-registration="${registration.id}">${svg('qr')}活动签到</button>`}${registration.checkedIn || deadlinePassed ? '' : `<button class="outline-btn danger-outline" data-cancel-registration="${registration.id}">取消报名</button>`}</div>
  `);
  root.querySelector('[data-checkin-registration]')?.addEventListener('click', () => {
    root.innerHTML = '';
    openCheckin(registrationId);
  });
  root.querySelector('[data-cancel-registration]')?.addEventListener('click', () => {
    if (!window.confirm(`确定取消「${activity.title}」报名吗？`)) return;
    const latestActivity = activityById(activity.id);
    if (latestActivity) latestActivity.joined = Math.max(0, latestActivity.joined - 1 - registration.guests);
    profile.registrations = profile.registrations.filter((item) => item.id !== registration.id);
    saveProfile();
    save();
    root.innerHTML = '';
    render();
    showToast('已取消报名');
  });
}

function openCheckin(registrationId) {
  const registration = registrationById(registrationId);
  if (!registration) return;
  const activity = activityById(registration.activityId);
  if (!activity) return;
  if (registration.checkedIn) {
    showToast('该活动已完成签到');
    return;
  }
  const meta = activityMeta(activity);
  const root = modalShell('活动签到', `
    <div class="checkin-panel">
      <span class="checkin-status">${svg('shield')} 志愿活动 · 现场核验</span>
      <div class="checkin-qr"><span></span><span></span><span></span><span></span><i>${svg('qr')}</i></div>
      <h3>${esc(activity.title)}</h3>
      <p>${meta.dateLabel} · ${meta.timeLabel}<br>${esc(activity.location)}</p>
      <div class="checkin-points">${svg('points')} 签到成功将发放 <strong>+${activity.reward} 积分</strong></div>
    </div>
    <div class="form-tip">前端演示：点击下方按钮模拟管理员核验或扫码签到。真实场景需在活动当天完成核验。</div>
    <button class="primary-btn" data-confirm-checkin="${registration.id}">模拟签到并领取积分</button>
  `);
  root.querySelector('[data-confirm-checkin]').onclick = () => {
    const latestActivity = activityById(registration.activityId);
    if (!latestActivity) return;
    registration.checkedIn = true;
    registration.checkedInAt = fmtDateTimeCN(new Date());
    const earned = claimPoints(`activity-checkin:${registration.activityId}`, latestActivity.reward, `完成「${latestActivity.title}」签到`, { type: 'activity', activityId: latestActivity.id, registrationId: registration.id });
    saveProfile();
    root.innerHTML = '';
    render();
    showToast(earned ? `签到成功，+${latestActivity.reward} 积分已到账` : '签到成功，积分已发放');
  };
}

function openRedeem(rewardId) {
  const reward = rewardById(rewardId);
  if (!reward) return;
  if (reward.stock <= 0) {
    showToast('该商品已兑完');
    return;
  }
  if (profile.points < reward.cost) {
    showToast(`积分不足，还差 ${reward.cost - profile.points} 积分`);
    return;
  }
  const root = modalShell('确认兑换', `
    <div class="redeem-summary">
      <div class="reward-visual ${esc(reward.theme || 'jade')}"><span class="reward-type">${esc(reward.type)}</span>${svg(reward.icon || 'gift')}</div>
      <div><span class="tag">${esc(reward.type)}</span><h3>${esc(reward.title)}</h3><p>${esc(reward.desc)}</p><small>${esc(reward.validity)}</small></div>
    </div>
    <div class="redeem-cost"><span>所需积分</span><strong>${reward.cost}</strong><span>兑换后余额</span><strong>${profile.points - reward.cost}</strong></div>
    <div class="form-tip">${reward.type === '实物' ? '兑换后请到告庄社区服务中心领取，凭核销码核验。' : '兑换后将生成虚拟券核销码，请在有效期内使用。'}</div>
    <button class="primary-btn" data-confirm-redeem="${reward.id}">确认兑换</button>
  `);
  root.querySelector('[data-confirm-redeem]').onclick = () => {
    const latest = rewardById(reward.id);
    if (!latest || latest.stock <= 0) {
      showToast('库存不足，请刷新后重试');
      return;
    }
    if (profile.points < latest.cost) {
      showToast('积分不足');
      return;
    }
    latest.stock -= 1;
    const order = {
      id: `order-${Date.now()}`,
      rewardId: latest.id,
      title: latest.title,
      type: latest.type,
      cost: latest.cost,
      status: latest.type === '实物' ? '待领取' : '待使用',
      code: `GZ${String(Date.now()).slice(-8)}`,
      verifyCode: `LX-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
      time: nowLabel()
    };
    spendPoints(latest.cost, `兑换「${latest.title}」`, { type: 'redeem', rewardId: latest.id, orderId: order.id });
    profile.redemptions.unshift(order);
    saveProfile();
    save();
    root.innerHTML = '';
    render();
    showModal('兑换成功', `<div class="redeem-success">${svg('check')}<h3>${esc(order.title)}</h3><p>${order.type === '实物' ? '请到告庄社区服务中心领取' : '请在有效期内使用虚拟券'}</p><div class="verify-code"><span>核销码</span><strong>${esc(order.verifyCode)}</strong></div><small>订单号 ${esc(order.code)} · 已扣减 ${order.cost} 积分</small></div>`);
  };
}

function openMiniAppPrompt() {
  showModal('打开小程序', `<div class="gov-modal">
    <span class="gov-modal-icon"><img src="./assets/complaint-platform.jpg" alt="平安版纳"></span>
    <h3>打开“平安版纳”小程序</h3>
    <p>在微信中长按识别下方小程序码，或保存图片后使用微信扫一扫。</p>
    <div class="miniapp-qr"><img src="./assets/pingan-banna-miniapp.png" alt="平安版纳小程序码"></div>
    <small>如无法识别，请在微信中搜索“平安版纳”。本地投诉登记仍会保留。</small>
  </div>`);
}

function showToast(text) {
  const element = document.querySelector('#toast');
  element.textContent = text;
  element.classList.add('show');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => element.classList.remove('show'), 2200);
}

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

document.querySelector('#modal-root').addEventListener('click', (event) => {
  const edit = event.target.closest('[data-edit]');
  if (edit) {
    const [kind, id] = edit.dataset.edit.split(':');
    openEditor(kind, id);
    return;
  }
  const remove = event.target.closest('[data-delete]');
  if (remove) {
    const [kind, id] = remove.dataset.delete.split(':');
    removeRecord(kind, id);
  }
});

render();
