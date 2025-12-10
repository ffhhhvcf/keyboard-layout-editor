# 多功能键盘测试与布局编辑器
<img width="2292" height="1104" alt="845271f4-9d98-4196-9da9-2553822ad5b4" src="https://github.com/user-attachments/assets/1e785460-a7a4-4f3c-a93f-c369c1a413ec" />

一个功能完整、交互友好的键盘布局编辑工具，支持108键标准键盘布局的自定义、测试和导出。

## ✨ 功能特点

- 🎯 **完整的108键键盘布局**：支持标准PC键盘的所有按键
- 🖱️ **拖拽式编辑**：支持鼠标拖拽调整按键位置，带磁吸效果
- 🎨 **自定义样式**：可调整按键大小、颜色、间距
- 📊 **坐标布局生成器**：支持JSON格式和简单格式的坐标导入导出
- ⌨️ **实时键盘测试**：按下物理键盘按键时，虚拟键盘同步显示
- 🔍 **网格辅助**：可显示/隐藏网格，辅助对齐按键
- ⚡ **响应式设计**：适配不同屏幕尺寸
- 💾 **布局导出**：支持导出布局数据到JSON文件或剪贴板
- 🎛️ **高级设置**：提供丰富的自定义选项

## 🚀 快速开始

### 在线使用

直接访问以下链接即可使用：
[https://ffhhhvcf.github.io/keyboard-layout-editor](https://ffhhhvcf.github.io/keyboard-layout-editor)

### 本地运行

1. **克隆仓库**
   ```bash
   git clone https://github.com/ffhhhvcf/keyboard-layout-editor.git
   cd keyboard-layout-editor
   ```

2. **启动本地服务器**
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 或使用Node.js
   npx serve .
   
   # 或使用PHP
   php -S localhost:8000
   ```

3. **访问应用**
   在浏览器中打开 `http://localhost:8000`

## 📖 使用方法

### 基本操作

1. **调整按键位置**：点击并拖拽任意按键即可调整位置
2. **选中按键**：单击按键可选中，用于批量操作
3. **重置布局**：点击"重置布局"按钮恢复默认布局
4. **显示网格**：点击"显示/隐藏网格"切换网格显示
5. **按坐标排列**：点击"按坐标排列"按预设坐标重新排列按键

### 高级设置

1. **按键大小设置**：
   - 调整"宽度"和"高度"输入框
   - 点击"应用尺寸"只应用到选中按键
   - 点击"应用到所有"应用到所有按键
   - 点击"重置尺寸"恢复默认大小

2. **按键间距设置**：
   - 调整"上下间距"和"左右间距"输入框
   - 点击"应用间距"只应用到选中按键
   - 点击"应用到所有"应用到所有按键
   - 点击"重置间距"恢复默认间距

3. **颜色自定义**：
   - 选择"默认背景色"、"悬停颜色"和"点击颜色"
   - 点击"应用颜色"只应用到选中按键
   - 点击"应用到所有"应用到所有按键

4. **批量操作**：
   - "批量更改颜色"：将默认背景色应用到所有按键
   - "批量重置位置"：恢复所有按键到默认位置
   - "批量应用样式"：同时应用尺寸和颜色设置

5. **坐标布局生成器**：
   - 支持两种输入格式：
     - 简单格式：每行一个坐标 `(x, y)`
     - JSON格式：完整的键盘布局配置
   - 点击"生成布局"应用自定义坐标
   - 点击"导出布局"下载布局数据
   - 点击"复制当前布局坐标"复制到剪贴板

## 📁 项目结构

```
keyboard-layout-editor/
├── index.html      # 主页面文件
├── script.js       # JavaScript功能代码
├── style.css       # CSS样式文件
├── README.md       # 项目说明文档
├── LICENSE         # 许可证文件
├── CONTRIBUTING.md # 贡献指南
├── CHANGELOG.md    # 版本更新日志
└── .gitignore      # Git忽略规则
```

## 🛠️ 技术栈

- **HTML5**：页面结构
- **CSS3**：样式设计
- **JavaScript (ES6+)**：交互功能
- **纯前端实现**：无任何外部依赖

## 🤝 贡献指南

欢迎各位开发者贡献代码！请按照以下步骤进行：

1. **Fork 仓库**
2. **创建分支**：`git checkout -b feature/AmazingFeature`
3. **提交更改**：`git commit -m 'Add some AmazingFeature'`
4. **推送到分支**：`git push origin feature/AmazingFeature`
5. **提交 Pull Request**

### 开发规范

- 遵循现有代码风格
- 提交前确保代码能正常运行
- 为新功能添加适当的注释
- 保持提交信息清晰简洁

## 📄 许可证

本项目采用 **MIT License** 开源许可证，详情请查看 [LICENSE](LICENSE) 文件。

## 📞 联系方式

- **项目地址**：[https://github.com/ffhhhvcf/keyboard-layout-editor](https://github.com/ffhhhvcf/keyboard-layout-editor)
- **Issue 反馈**：[https://github.com/ffhhhvcf/keyboard-layout-editor/issues](https://github.com/ffhhhvcf/keyboard-layout-editor/issues)
- **Pull Request**：[https://github.com/ffhhhvcf/keyboard-layout-editor/pulls](https://github.com/ffhhhvcf/keyboard-layout-editor/pulls)

## 📊 项目状态

![GitHub stars](https://img.shields.io/github/stars/ffhhhvcf/keyboard-layout-editor)
![GitHub forks](https://img.shields.io/github/forks/ffhhhvcf/keyboard-layout-editor)
![GitHub issues](https://img.shields.io/github/issues/ffhhhvcf/keyboard-layout-editor)
![GitHub license](https://img.shields.io/github/license/ffhhhvcf/keyboard-layout-editor)

## 🙏 致谢

感谢所有为项目做出贡献的开发者！

## 📝 更新日志

详细的更新日志请查看 [CHANGELOG.md](CHANGELOG.md) 文件。
