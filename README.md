# 告庄社区 · 便民服务

纯前端社区服务原型，包含诉求上报、志愿活动报名、积分商城、政策速递、零工就业和商铺服务。底部导航固定为「首页 / 活动 / 就业 / 我的」四项；政策放在首页，商铺、兑换记录等次级入口放在「我的」。

## 功能

- **诉求上报**：保留原有投诉新增、编辑、删除和状态展示，新增选填「纠纷码」；提供「平安版纳」政府基层纠纷调解平台入口。
- **活动报名**：按分类筛选活动，支持姓名、手机号、随行人数校验，名额与截止时间校验，报名详情、取消报名和现场签到演示。
- **积分与商城**：活动签到后按 10–25 分自动发放积分；积分商城支持实物/虚拟券筛选、余额与库存校验、兑换订单、核销码和积分明细。
- **政策与就业**：政策搜索与分级筛选保留在首页，政策内容为只读，不提供管理端的新增、编辑和删除入口；零工就业继续作为独立导航页。
- **本地数据**：报名、积分、兑换、投诉和政策等模拟数据均保存在当前浏览器的 `localStorage`，不会同步到其他设备；清除站点数据会重置。

## 视觉素材

- `assets/logo.jpg`：告庄社区橙色标识，用于页头和个人中心。
- `assets/complaint-platform.jpg`：平安版纳平台标识，仅用于纠纷调解入口。
- `assets/pingan-banna-miniapp.png`：平安版纳官方公开小程序码，用于微信内长按识别打开。
- `assets/gaozhuang-night.jpg`、`assets/dai-brocade.jpg`、`assets/dai-market.jpg`：告庄夜景、傣锦与星光夜市主题配图。
- `assets/policy-community.jpg`、`assets/policy-elderly.jpg`、`assets/policy-renewal.jpg`：政策宣讲、助老服务与老旧小区改造配图。
- `assets/activity-river.jpg`、`assets/activity-garden.jpg`、`assets/activity-elderly.jpg`、`assets/activity-water.jpg`：净滩、社区花园、助老探访与泼水节志愿活动配图。

界面使用孔雀翎、佛塔剪影、傣锦菱形织纹和金色经纬线作为轻量装饰，保留政务界面的清晰度。

## 平安版纳入口

点击页面中的入口会弹出示意小程序码，可在微信中长按识别或保存后扫码打开；无法识别时可在微信中搜索“平安版纳”。小程序码取自勐海县官方公开通告[《关于在全县全面开展应用“平安版纳”数字身份认证的通告》](http://mp.weixin.qq.com/s?__biz=MzA5OTQ5ODMyMA==&mid=2650299570&idx=2&sn=04246acc7bb6b474e6c946dc8b09752d)。

## 在线访问

GitHub Pages: https://yadanchina.github.io/linli-community-services/

## 本地预览

直接打开 `index.html` 即可。提交到 `main` 分支后，GitHub Actions 会自动发布 `dist/` 目录；静态托管也直接使用 `dist/`。
