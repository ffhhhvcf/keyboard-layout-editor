# 📚 GitHub开源保姆级上传教程

这份教程将详细教您如何将"多功能键盘测试与布局编辑器"项目上传到GitHub开源，每个步骤都有详细说明和截图指引。

## 📋 目录

1. [📱 准备工作](#-准备工作)
   - [1.1 注册GitHub账号](#11-注册github账号)
   - [1.2 安装Git](#12-安装git)
2. [🏪 创建GitHub仓库](#-创建github仓库)
3. [⚙️ 配置Git](#️-配置git)
4. [📦 上传项目到GitHub](#-上传项目到github)
5. [🌐 部署GitHub Pages](#-部署github-pages)
6. [🔍 验证部署](#-验证部署)
7. [🔧 常见问题解决](#-常见问题解决)

## 📱 准备工作

### 1.1 注册GitHub账号

如果您还没有GitHub账号，请按照以下步骤注册：

1. 打开浏览器，访问 [GitHub官网](https://github.com/)
2. 点击右上角的 **Sign up** 按钮
3. 填写注册信息：
   - 用户名（建议使用英文，易记且不包含特殊字符）
   - 邮箱地址（用于验证和接收通知）
   - 密码（至少15个字符，包含大小写字母和数字）
4. 点击 **Create account** 按钮
5. 完成邮箱验证（GitHub会发送一封验证邮件到您的邮箱）
6. 完成人机验证（按照提示操作）
7. 选择免费计划（Free）
8. 填写个人信息（可选，可以跳过）

注册完成后，您将进入GitHub主页。

### 1.2 安装Git

Git是一个版本控制工具，用于将本地代码上传到GitHub。

#### Windows系统安装Git

1. 访问 [Git官网](https://git-scm.com/)
2. 点击 **Download for Windows** 按钮
3. 运行下载的安装包（.exe文件）
4. 按照安装向导操作：
   - 选择安装路径（建议使用默认路径）
   - 选择组件（保持默认即可）
   - 选择开始菜单文件夹（保持默认）
   - 选择编辑器（建议选择您熟悉的编辑器，如VS Code）
   - 选择默认分支名称（建议使用"main"）
   - 选择环境变量（保持默认）
   - 选择HTTPS传输后端（保持默认）
   - 选择行结束符转换（保持默认）
   - 选择Git Bash终端（保持默认）
   - 选择Git Pull行为（保持默认）
   - 选择凭证助手（保持默认）
   - 选择额外选项（保持默认）
   - 选择实验性功能（可以不选）
5. 点击 **Install** 按钮完成安装

#### 验证Git安装

1. 按下 `Win + R` 键，输入 `cmd` 并回车，打开命令提示符
2. 输入以下命令并回车：
   ```bash
   git --version
   ```
3. 如果显示Git版本号（如 `git version 2.45.0.windows.1`），则安装成功

## 🏪 创建GitHub仓库

1. 登录GitHub账号
2. 点击右上角的 **+** 图标，选择 **New repository**
3. 填写仓库信息：
   - **Repository name**：输入仓库名称，建议使用 `keyboard-layout-editor`
   - **Description**：输入仓库描述，如"多功能键盘测试与布局编辑器，支持108键键盘布局编辑、拖拽调整、样式自定义等功能"
   - **Visibility**：选择 **Public**（公开）或 **Private**（私有），开源项目建议选择Public
   - **Initialize this repository with:**：
     - 取消勾选 **Add a README file**（因为我们已经创建了README.md）
     - 取消勾选 **Add .gitignore**（因为我们已经创建了.gitignore）
     - 取消勾选 **Choose a license**（因为我们已经创建了LICENSE）
4. 点击 **Create repository** 按钮

创建成功后，您将进入仓库页面，显示类似以下内容：

```
Quick setup — if you’ve done this kind of thing before
or
HTTPS
https://github.com/yourusername/keyboard-layout-editor.git

…or create a new repository on the command line
```

## ⚙️ 配置Git

1. 打开命令提示符（CMD）或Git Bash
2. 配置Git全局用户名：
   ```bash
   git config --global user.name "Your Username"  # 替换为您的GitHub用户名
   ```
3. 配置Git全局邮箱：
   ```bash
   git config --global user.email "your.email@example.com"  # 替换为您的GitHub注册邮箱
   ```
4. 验证配置：
   ```bash
   git config --list
   ```
   您应该能看到刚才配置的用户名和邮箱

## 📦 上传项目到GitHub

### 步骤1：进入项目目录

1. 打开命令提示符（CMD）
2. 输入以下命令，进入项目文件夹：
   ```bash
   cd "C:\Users\Administrator\Desktop\demo\开源 GitHub"  # 替换为您的项目路径
   ```
3. 验证当前目录：
   ```bash
   dir  # Windows系统
   # 或
   ls   # Mac/Linux系统
   ```
   您应该能看到项目文件：`.gitignore`, `CHANGELOG.md`, `CONTRIBUTING.md`, `index.html`, `LICENSE`, `README.md`, `script.js`, `style.css`

### 步骤2：初始化Git仓库

1. 在项目目录下，输入以下命令初始化Git仓库：
   ```bash
   git init
   ```
   成功后会显示：`Initialized empty Git repository in C:/Users/Administrator/Desktop/demo/开源 GitHub/.git/`

### 步骤3：添加所有文件到暂存区

1. 输入以下命令，将所有文件添加到Git暂存区：
   ```bash
   git add .
   ```
   注意：命令中的 `.` 表示当前目录下的所有文件

### 步骤4：提交文件到本地仓库

1. 输入以下命令，提交文件到本地仓库：
   ```bash
   git commit -m "Initial commit: 多功能键盘测试与布局编辑器"
   ```
   其中 `-m` 后面是提交信息，描述本次提交的内容

   成功后会显示类似以下内容：
   ```
   [master (root-commit) 1a2b3c4] Initial commit: 多功能键盘测试与布局编辑器
    8 files changed, 1000 insertions(+)
    create mode 100644 .gitignore
    create mode 100644 CHANGELOG.md
    create mode 100644 CONTRIBUTING.md
    create mode 100644 index.html
    create mode 100644 LICENSE
    create mode 100644 README.md
    create mode 100644 script.js
    create mode 100644 style.css
   ```

### 步骤5：关联GitHub远程仓库

1. 复制GitHub仓库的HTTPS链接：
   - 回到GitHub仓库页面
   - 点击 **<> Code** 按钮
   - 复制HTTPS链接（如 `https://github.com/yourusername/keyboard-layout-editor.git`）

2. 在命令提示符中输入以下命令，关联远程仓库：
   ```bash
   git remote add origin https://github.com/yourusername/keyboard-layout-editor.git  # 替换为您的仓库链接
   ```

### 步骤6：推送到GitHub

1. 输入以下命令，将本地代码推送到GitHub：
   ```bash
   git push -u origin master
   ```
   或者（如果默认分支是main）：
   ```bash
   git push -u origin main
   ```

2. 首次推送时，Git会提示您输入GitHub用户名和密码/令牌：
   - **用户名**：输入您的GitHub用户名
   - **密码**：GitHub从2021年8月13日起，不再支持使用密码进行HTTPS推送，需要使用**个人访问令牌（PAT）**

#### 如何获取GitHub个人访问令牌（PAT）

1. 登录GitHub，点击右上角头像 → **Settings**
2. 左侧菜单，向下滚动，点击 **Developer settings**
3. 点击 **Personal access tokens** → **Tokens (classic)**
4. 点击 **Generate new token** → **Generate new token (classic)**
5. 填写令牌信息：
   - **Note**：输入令牌名称，如 "Git push token"
   - **Expiration**：选择令牌有效期（建议选择 "No expiration" 或 "30 days"）
   - **Select scopes**：
     - 勾选 **repo**（所有repo权限）
     - 勾选 **user**（可选，用于用户信息访问）
6. 点击页面底部的 **Generate token** 按钮
7. 复制生成的令牌（注意：令牌只显示一次，一定要保存好）

8. 在Git推送时，密码输入框中粘贴这个令牌即可

### 步骤7：验证推送结果

1. 回到GitHub仓库页面，刷新页面
2. 您应该能看到所有项目文件已经上传成功

## 🌐 部署GitHub Pages

GitHub Pages可以将您的静态网站免费部署到互联网上，方便他人访问。

### 步骤1：进入仓库设置

1. 登录GitHub，进入您的仓库
2. 点击顶部菜单的 **Settings**

### 步骤2：配置Pages

1. 左侧菜单，点击 **Pages**
2. 在 **Build and deployment** 部分：
   - **Source**：选择 **Deploy from a branch**
   - **Branch**：
     - **Branch**：选择 `main` 或 `master`（根据您的默认分支）
     - **Folder**：选择 `/ (root)`
3. 点击 **Save** 按钮

### 步骤3：等待部署完成

1. GitHub会自动开始部署
2. 部署完成后，页面会显示：
   ```
   Your site is live at https://yourusername.github.io/keyboard-layout-editor/
   ```
3. 复制这个URL，您的网站已经可以通过这个链接访问了

## 🔍 验证部署

1. 打开浏览器，访问部署后的URL（如 `https://yourusername.github.io/keyboard-layout-editor/`）
2. 您应该能看到"多功能键盘测试与布局编辑器"的完整页面
3. 测试各项功能，确保正常工作

## 🔧 常见问题解决

### 问题1：Git push时提示"fatal: remote origin already exists"

**解决方案**：
```bash
git remote remove origin
# 然后重新关联远程仓库
git remote add origin https://github.com/yourusername/keyboard-layout-editor.git
```

### 问题2：Git push时提示"error: failed to push some refs to..."

**解决方案**：
```bash
# 先拉取远程仓库的最新代码（如果有）
git pull origin main --allow-unrelated-histories
# 然后再推送
git push -u origin main
```

### 问题3：GitHub Pages部署后页面显示404

**可能原因**：
- 部署还未完成（通常需要1-2分钟）
- 分支或文件夹选择错误
- 没有index.html文件（我们已经有了）

**解决方案**：
- 等待几分钟后刷新页面
- 检查Pages配置中的分支和文件夹设置
- 确保项目根目录有index.html文件

### 问题4：Git版本过旧

**解决方案**：
- 访问 [Git官网](https://git-scm.com/) 下载最新版本
- 卸载旧版本，安装新版本

### 问题5：中文文件名或路径导致乱码

**解决方案**：
```bash
# 设置Git编码
git config --global core.quotepath false
git config --global gui.encoding utf-8
git config --global i18n.commit.encoding utf-8
git config --global i18n.logoutputencoding utf-8
```

## 🎉 恭喜您！

您已经成功将"多功能键盘测试与布局编辑器"项目上传到GitHub开源，并部署了GitHub Pages。现在，全世界的开发者都可以访问和使用您的项目了！

## 📚 更多资源

- [GitHub官方文档](https://docs.github.com/)
- [Git官方文档](https://git-scm.com/doc)
- [Markdown语法指南](https://www.markdownguide.org/)

如果您在上传过程中遇到任何问题，欢迎在GitHub仓库的Issues中提问，或在项目的Discussions中交流。

祝您开源之旅愉快！ 🚀