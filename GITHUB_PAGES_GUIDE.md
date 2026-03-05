# GitHub Pages 部署指南

## 📖 为什么选择 GitHub Pages？

GitHub Pages 是一个免费的静态网站托管服务，非常适合分享游戏攻略文档：
- ✅ 完全免费
- ✅ 无需服务器
- ✅ 自动HTTPS
- ✅ 全球CDN加速
- ✅ 支持自定义域名
- ✅ 版本控制

## 🚀 部署步骤

### 第一步：创建 GitHub 账号

1. 访问 [github.com](https://github.com)
2. 点击 "Sign up" 注册账号
3. 完成邮箱验证

### 第二步：创建新仓库

1. 登录 GitHub 后，点击右上角的 "+" 按钮
2. 选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `pokemon-guide` (或其他你喜欢的名字)
   - **Description**: 宝可梦游戏攻略文档
   - **Public**: ✅ 选择公开（这样才能免费使用 GitHub Pages）
   - **Add a README file**: ❌ 不勾选
4. 点击 "Create repository"

### 第三步：上传文件

#### 方法一：通过网页上传（推荐新手）

1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将以下文件拖拽到上传区域：
   - `index.html`
   - `game-data.html`
   - `habitat-recipes.html`
   - `gallery.html`
   - `styles.css`
   - `script.js`
3. 在 "Commit changes" 区域填写：
   - "Add files via upload"
4. 点击 "Commit changes"

#### 方法二：使用 Git 命令（推荐有经验的用户）

```bash
# 初始化本地仓库
cd c:\Users\w_huang\Documents\trae_projects\Pokopia
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 添加远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/pokemon-guide.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 第四步：启用 GitHub Pages

1. 进入仓库页面
2. 点击 "Settings" 标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Build and deployment" 部分：
   - **Source**: 选择 "Deploy from a branch"
   - **Branch**: 选择 `main` 分支，文件夹选择 `/(root)`
5. 点击 "Save"

### 第五步：等待部署

1. 等待 1-3 分钟
2. 刷新 Pages 页面
3. 你会看到类似这样的链接：
   ```
   https://YOUR_USERNAME.github.io/pokemon-guide/
   ```

### 第六步：测试访问

1. 点击显示的链接
2. 确认网站可以正常访问
3. 测试所有功能是否正常

## 📱 分享给微信群

### 方法一：直接分享链接

1. 复制 GitHub Pages 链接
2. 在微信群中粘贴发送
3. 群友点击链接即可访问

### 方法二：使用短链接服务

如果链接太长，可以使用短链接服务：
- [百度短链接](https://dwz.cn/)
- [新浪短链接](http://t.cn/)
- [GitHub 自定义域名](#自定义域名)

### 方法三：创建二维码

1. 访问在线二维码生成器
2. 输入你的 GitHub Pages 链接
3. 生成二维码图片
4. 将二维码分享到微信群

## 🎨 自定义域名（可选）

### 使用自己的域名

1. 购买域名（如阿里云、腾讯云）
2. 在域名 DNS 设置中添加：
   ```
   类型: CNAME
   主机记录: www
   记录值: YOUR_USERNAME.github.io
   ```
3. 在 GitHub Pages 设置中：
   - 在 "Custom domain" 中输入你的域名
4. 等待 DNS 生效（通常 1-24 小时）

### 使用免费域名服务

- [Freenom](https://www.freenom.com/) - 免费域名
- [EU.ORG](https://nic.eu.org/) - 免费域名

## 🔄 更新内容

### 方法一：通过网页更新

1. 进入仓库页面
2. 点击要修改的文件
3. 点击右上角的铅笔图标 ✏️
4. 修改内容
5. 在底部填写提交信息
6. 点击 "Commit changes"

### 方法二：使用 Git 命令更新

```bash
# 修改文件后
git add .
git commit -m "Update content"
git push
```

GitHub Pages 会自动重新部署，通常 1-2 分钟后生效。

## 📊 查看访问统计

GitHub Pages 本身不提供访问统计，但你可以：

### 方法一：使用 Google Analytics

1. 注册 [Google Analytics](https://analytics.google.com/)
2. 创建新的媒体资源
3. 获取跟踪代码
4. 在 `index.html` 的 `<head>` 中添加代码：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### 方法二：使用第三方统计服务

- [百度统计](https://tongji.baidu.com/)
- [51.la](https://www.51.la/)
- [Cloudflare Analytics](https://www.cloudflare.com/web-analytics/)

## 🛡️ 隐私设置

### 公开仓库

GitHub Pages 只支持公开仓库，这意味着：
- ✅ 任何人都可以访问
- ✅ 任何人都可以查看代码
- ✅ 适合分享游戏攻略

### 私有仓库（付费）

如果你需要私有仓库：
- 需要 GitHub Pro 账号（$4/月）
- 可以设置为私有仓库
- 仍然可以使用 GitHub Pages

## 📝 最佳实践

### 1. 文件命名

- 使用小写字母
- 使用连字符分隔单词
- 避免使用空格和特殊字符

### 2. 图片优化

- 压缩图片大小
- 使用 WebP 格式
- 提供多种尺寸

### 3. 性能优化

- 压缩 CSS 和 JS
- 使用 CDN
- 启用缓存

### 4. SEO 优化

- 添加 meta 标签
- 使用语义化 HTML
- 添加 sitemap

## 🔧 常见问题

### Q: 部署后网站无法访问？
A: 检查以下几点：
1. 仓库是否设置为公开
2. Pages 是否正确启用
3. 是否等待了足够的时间（1-3分钟）
4. 浏览器缓存是否清除

### Q: 更新后没有生效？
A: 
1. 清除浏览器缓存
2. 等待 2-3 分钟
3. 检查 GitHub Actions 是否有错误

### Q: 如何删除网站？
A:
1. 进入仓库 Settings
2. 滚动到最底部
3. 点击 "Delete this repository"

### Q: 可以使用动态内容吗？
A: GitHub Pages 只支持静态网站，但可以使用：
- JavaScript 实现动态效果
- 第三方 API 获取数据
- Jekyll、Hugo 等静态网站生成器

## 📚 相关资源

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [GitHub Pages 快速开始](https://pages.github.com/)
- [静态网站生成器对比](https://www.staticgen.com/)

## 🎉 完成！

现在你的宝可梦游戏攻略文档已经部署到 GitHub Pages，可以分享给微信群友了！

**你的网站链接：** `https://YOUR_USERNAME.github.io/pokemon-guide/`

祝使用愉快！🎮✨