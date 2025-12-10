// 键盘布局数据（基于之前的108键键盘）
const keyboardLayout = [
    // 最顶部控制键行 + 4个多媒体键（凑齐108键）
    ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrintScreen', 'ScrollLock', 'Pause', 'VolumeMute', 'VolumeDown', 'VolumeUp', 'MediaPlayPause'],
    
    // 数字行 + 编辑键 + 数字小键盘顶部
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', '', 'Insert', 'Home', 'PageUp', 'NumLock', 'NumpadDivide', 'NumpadMultiply', 'NumpadSubtract'],
    
    // 字母第一行 + 编辑键 + 数字小键盘第一行
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', '', 'Delete', 'End', 'PageDown', 'Numpad7', 'Numpad8', 'Numpad9', 'NumpadAdd'],
    
    // 字母第二行 + 数字小键盘第二行
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', '', '', '', 'Numpad4', 'Numpad5', 'Numpad6'],
    
    // 字母第三行 + 数字小键盘第三行
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', '', '', '', 'Numpad1', 'Numpad2', 'Numpad3', 'NumpadEnter'],
    
    // 控制键行 + 方向键 + 数字小键盘底部 + 1个多媒体键
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ControlRight', '', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', '', '', 'Numpad0', 'NumpadDecimal', 'Calculator']
];

// 特殊键颜色映射
const specialKeyClasses = {
    'Escape': 'key-light-purple',
    'F1': 'key-light-purple', 'F2': 'key-light-purple', 'F3': 'key-light-purple', 'F4': 'key-light-purple', 
    'F5': 'key-light-purple', 'F6': 'key-light-purple', 'F7': 'key-light-purple', 'F8': 'key-light-purple', 
    'F9': 'key-light-purple', 'F10': 'key-light-purple', 'F11': 'key-light-purple', 'F12': 'key-light-purple',
    'PrintScreen': 'key-turquoise',
    'ScrollLock': 'key-turquoise',
    'Pause': 'key-turquoise',
    'Insert': 'key-turquoise',
    'Home': 'key-turquoise',
    'PageUp': 'key-turquoise',
    'Delete': 'key-turquoise',
    'End': 'key-turquoise',
    'PageDown': 'key-turquoise',
    'Enter': 'key-green',
    'NumpadEnter': 'key-slate-blue',
    'Tab': 'key-gray',
    'CapsLock': 'key-gray',
    'ShiftLeft': 'key-gray',
    'ShiftRight': 'key-gray',
    'ControlLeft': 'key-blue',
    'ControlRight': 'key-blue',
    'AltLeft': 'key-blue',
    'AltRight': 'key-blue',
    'MetaLeft': 'key-blue',
    'MetaRight': 'key-blue',
    'ContextMenu': 'key-blue',
    'Space': 'key-purple',
    'ArrowLeft': 'key-purple',
    'ArrowDown': 'key-purple',
    'ArrowRight': 'key-purple',
    'ArrowUp': 'key-purple',
    'NumLock': 'key-slate-blue',
    'NumpadDivide': 'key-slate-blue',
    'NumpadMultiply': 'key-slate-blue',
    'NumpadSubtract': 'key-slate-blue',
    'NumpadAdd': 'key-slate-blue',
    'Numpad0': 'key-slate-blue',
    'Numpad1': 'key-slate-blue',
    'Numpad2': 'key-slate-blue',
    'Numpad3': 'key-slate-blue',
    'Numpad4': 'key-slate-blue',
    'Numpad5': 'key-slate-blue',
    'Numpad6': 'key-slate-blue',
    'Numpad7': 'key-slate-blue',
    'Numpad8': 'key-slate-blue',
    'Numpad9': 'key-slate-blue',
    'NumpadDecimal': 'key-slate-blue',
    // 新增的5个多媒体键
    'VolumeMute': 'key-blue',
    'VolumeDown': 'key-blue',
    'VolumeUp': 'key-blue',
    'MediaPlayPause': 'key-blue',
    'Calculator': 'key-blue'
};

// 按键显示文本映射
const displayMap = {
    'Escape': 'Esc', 'F1': 'F1', 'F2': 'F2', 'F3': 'F3', 'F4': 'F4',
    'F5': 'F5', 'F6': 'F6', 'F7': 'F7', 'F8': 'F8', 'F9': 'F9',
    'F10': 'F10', 'F11': 'F11', 'F12': 'F12', 'PrintScreen': 'PrtSc',
    'ScrollLock': 'ScrLk', 'Pause': 'Pause',
    'VolumeMute': '静音', 'VolumeDown': '音量-', 'VolumeUp': '音量+', 'MediaPlayPause': '播放',
    'Backquote': '` ~', 'Digit1': '1 !', 'Digit2': '2 @', 'Digit3': '3 #', 'Digit4': '4 $',
    'Digit5': '5 %', 'Digit6': '6 ^', 'Digit7': '7 &', 'Digit8': '8 *', 'Digit9': '9 (',
    'Digit0': '0 )', 'Minus': '- _', 'Equal': '= +', 'Backspace': 'Backspace',
    'Tab': 'Tab', 'KeyQ': 'Q', 'KeyW': 'W', 'KeyE': 'E', 'KeyR': 'R',
    'KeyT': 'T', 'KeyY': 'Y', 'KeyU': 'U', 'KeyI': 'I', 'KeyO': 'O',
    'KeyP': 'P', 'BracketLeft': '[ {', 'BracketRight': '] }', 'Backslash': '\\|',
    'CapsLock': 'Caps', 'KeyA': 'A', 'KeyS': 'S', 'KeyD': 'D', 'KeyF': 'F',
    'KeyG': 'G', 'KeyH': 'H', 'KeyJ': 'J', 'KeyK': 'K', 'KeyL': 'L',
    'Semicolon': '; :', 'Quote': "'\"", 'Enter': 'Enter',
    'ShiftLeft': 'Shift', 'KeyZ': 'Z', 'KeyX': 'X', 'KeyC': 'C', 'KeyV': 'V',
    'KeyB': 'B', 'KeyN': 'N', 'KeyM': 'M', 'Comma': ', <', 'Period': '. >',
    'Slash': '/ ?', 'ShiftRight': 'Shift',
    'ControlLeft': 'Ctrl', 'MetaLeft': 'Win', 'AltLeft': 'Alt', 'Space': '空格',
    'AltRight': 'Alt', 'MetaRight': 'Win', 'ContextMenu': 'Menu', 'ControlRight': 'Ctrl',
    'Insert': 'Ins', 'Home': 'Home', 'PageUp': 'PgUp',
    'Delete': 'Del', 'End': 'End', 'PageDown': 'PgDn',
    'ArrowUp': '↑', 'ArrowLeft': '←', 'ArrowDown': '↓', 'ArrowRight': '→',
    'NumLock': 'Num', 'NumpadDivide': '/', 'NumpadMultiply': '*', 'NumpadSubtract': '-',
    'Numpad7': '7', 'Numpad8': '8', 'Numpad9': '9', 'NumpadAdd': '+',
    'Numpad4': '4', 'Numpad5': '5', 'Numpad6': '6',
    'Numpad1': '1', 'Numpad2': '2', 'Numpad3': '3', 'NumpadEnter': 'Enter',
    'Numpad0': '0', 'NumpadDecimal': '.',
    'Calculator': '计算器'
};

// 存储按键位置数据
let keyPositions = {};
let isDragging = false;
let dragElement = null;
let dragOffset = { x: 0, y: 0 };

// 初始化键盘布局
function initializeKeyboard() {
    const container = document.getElementById('keyboardContainer');
    container.innerHTML = '';
    
    keyboardLayout.forEach((rowKeys, rowIndex) => {
        const row = document.createElement('div');
        row.className = 'keyboard-row';
        
        rowKeys.forEach((key, keyIndex) => {
            if (key === '') {
                const spacer = document.createElement('div');
                spacer.className = 'keyboard-spacer';
                row.appendChild(spacer);
                return;
            }
            
            const keyElement = document.createElement('div');
            keyElement.className = 'keyboard-key round-key';
            
            // 处理有双重符号的按键显示
            const displayText = displayMap[key] || key;
            if (displayText.includes(' ')) {
                // 有双重符号的按键，创建两行显示
                const [primary, secondary] = displayText.split(' ');
                keyElement.innerHTML = `<div class="key-primary">${primary}</div><div class="key-secondary">${secondary}</div>`;
            } else {
                // 单个符号的按键
                keyElement.textContent = displayText;
            }
            keyElement.setAttribute('data-key', key);
            
            // 应用特殊键颜色类
            if (specialKeyClasses[key]) {
                keyElement.classList.add(specialKeyClasses[key]);
            }
            
            // 为空格键添加特殊样式类
            if (key === 'Space') {
                keyElement.classList.add('space-key');
            }
            
            // 为Tab键添加特殊样式类
            if (key === 'Tab') {
                keyElement.classList.add('tab-key');
            }
            
            // 为CapsLock键添加特殊样式类
            if (key === 'CapsLock') {
                keyElement.classList.add('capslock-key');
            }
            
            // 为Shift键添加特殊样式类
            if (key === 'ShiftLeft' || key === 'ShiftRight') {
                keyElement.classList.add('shift-key');
            }
            
            // 为右Shift键添加特殊样式类
            if (key === 'ShiftRight') {
                keyElement.classList.add('shift-right-key');
            }
            
            // 为回车键添加特殊样式类
            if (key === 'Enter') {
                keyElement.classList.add('enter-key');
            }
            
            // 为Alt键添加特殊样式类
            if (key === 'AltLeft' || key === 'AltRight') {
                keyElement.classList.add('alt-key');
            }
            
            // 为Ctrl键添加特殊样式类
            if (key === 'ControlLeft' || key === 'ControlRight') {
                keyElement.classList.add('ctrl-key');
            }
            
            // 为Win键添加特殊样式类
            if (key === 'MetaLeft' || key === 'MetaRight') {
                keyElement.classList.add('win-key');
            }
            
            // 为Menu键添加特殊样式类
            if (key === 'ContextMenu') {
                keyElement.classList.add('menu-key');
            }
            
            // 为Backspace键添加特殊样式类
            if (key === 'Backspace') {
                keyElement.classList.add('backspace-key');
            }
            
            // 为加号键添加特殊样式类
            if (key === 'NumpadAdd') {
                keyElement.classList.add('numpadadd-key');
            }
            
            // 为数字0键添加特殊样式类
            if (key === 'Numpad0') {
                keyElement.classList.add('numpad0-key');
            }
            
            // 为回车键添加特殊样式类
            if (key === 'NumpadEnter') {
                keyElement.classList.add('numpadenter-key');
            }
            
            // 为方向键添加特殊样式类
            if (key === 'ArrowUp' || key === 'ArrowLeft' || key === 'ArrowDown' || key === 'ArrowRight') {
                keyElement.classList.add('arrow-key');
            }
            
            // 设置初始位置（基于网格）
            const gridSize = 47;
            const left = keyIndex * gridSize;
            const top = rowIndex * gridSize;
            
            keyElement.style.position = 'absolute';
            keyElement.style.left = left + 'px';
            keyElement.style.top = top + 'px';
            
            // 存储初始位置
            keyPositions[key] = { left, top, row: rowIndex, col: keyIndex };
            
            // 添加拖动事件
            setupDragEvents(keyElement);
            
            container.appendChild(keyElement);
        });
    });
    
    // 页面加载时自动应用坐标数据
    applyCoordinates();
    
    updatePositionData();
    
    // 添加键盘容器点击事件，用于取消选中按键
    container.addEventListener('click', function(e) {
        // 如果点击的是容器本身而不是按键，则取消所有选中
        if (e.target === container) {
            const allKeys = document.querySelectorAll('.keyboard-key');
            allKeys.forEach(key => {
                key.classList.remove('selected');
            });
            console.log('已取消所有按键选中');
        }
    });
}

// 标准108键键盘布局坐标数据（包含所有108个按键）
const coordinateData = {
    'Escape': { left: 118, top: 94 },
    'F1': { left: 212, top: 94 }, 'F2': { left: 259, top: 94 }, 'F3': { left: 306, top: 94 }, 'F4': { left: 353, top: 94 },
    'F5': { left: 423, top: 94 }, 'F6': { left: 470, top: 94 }, 'F7': { left: 517, top: 94 }, 'F8': { left: 564, top: 94 },
    'F9': { left: 635, top: 94 }, 'F10': { left: 682, top: 94 }, 'F11': { left: 729, top: 94 }, 'F12': { left: 776, top: 94 },
    'PrintScreen': { left: 870, top: 94 }, 'ScrollLock': { left: 917, top: 94 }, 'Pause': { left: 964, top: 94 },
    'VolumeMute': { left: 1152, top: 94 }, 'VolumeDown': { left: 1105, top: 94 }, 'VolumeUp': { left: 1058, top: 94 }, 'MediaPlayPause': { left: 1199, top: 94 },
    
    'Backquote': { left: 118, top: 165 },
    'Digit1': { left: 165, top: 165 }, 'Digit2': { left: 212, top: 165 }, 'Digit3': { left: 259, top: 165 }, 'Digit4': { left: 306, top: 165 },
    'Digit5': { left: 353, top: 165 }, 'Digit6': { left: 400, top: 165 }, 'Digit7': { left: 447, top: 165 }, 'Digit8': { left: 494, top: 165 },
    'Digit9': { left: 541, top: 165 }, 'Digit0': { left: 588, top: 165 },
    'Minus': { left: 635, top: 165 }, 'Equal': { left: 682, top: 165 }, 'Backspace': { left: 729, top: 165 },
    
    'Insert': { left: 870, top: 165 }, 'Home': { left: 917, top: 165 }, 'PageUp': { left: 964, top: 165 },
    'NumLock': { left: 1058, top: 165 }, 'NumpadDivide': { left: 1105, top: 165 }, 'NumpadMultiply': { left: 1152, top: 165 }, 'NumpadSubtract': { left: 1199, top: 165 },
    
    'Tab': { left: 118, top: 212 },
    'KeyQ': { left: 188, top: 212 }, 'KeyW': { left: 235, top: 212 }, 'KeyE': { left: 282, top: 212 }, 'KeyR': { left: 329, top: 212 },
    'KeyT': { left: 376, top: 212 }, 'KeyY': { left: 423, top: 212 }, 'KeyU': { left: 470, top: 212 }, 'KeyI': { left: 518, top: 212 },
    'KeyO': { left: 564, top: 212 }, 'KeyP': { left: 611, top: 212 },
    'BracketLeft': { left: 658, top: 212 },
    'BracketRight': { left: 705, top: 212 },
    'Backslash': { left: 752, top: 212 },
    'Delete': { left: 870, top: 212 }, 'End': { left: 917, top: 212 }, 'PageDown': { left: 964, top: 212 },
    'Numpad7': { left: 1058, top: 212 }, 'Numpad8': { left: 1105, top: 212 }, 'Numpad9': { left: 1152, top: 212 }, 'NumpadAdd': { left: 1199, top: 212 },
    
    'CapsLock': { left: 118, top: 259 },
    'KeyA': { left: 212, top: 259 }, 'KeyS': { left: 259, top: 259 }, 'KeyD': { left: 306, top: 259 }, 'KeyF': { left: 353, top: 259 },
    'KeyG': { left: 400, top: 259 }, 'KeyH': { left: 447, top: 259 }, 'KeyJ': { left: 494, top: 259 }, 'KeyK': { left: 541, top: 259 },
    'KeyL': { left: 588, top: 259 }, 'Semicolon': { left: 635, top: 259 }, 'Quote': { left: 682, top: 259 }, 'Enter': { left: 729, top: 259 },
    'Numpad4': { left: 1058, top: 259 }, 'Numpad5': { left: 1105, top: 259 }, 'Numpad6': { left: 1152, top: 259 },
    
    'ShiftLeft': { left: 118, top: 306 },
    'KeyZ': { left: 235, top: 306 }, 'KeyX': { left: 282, top: 306 }, 'KeyC': { left: 329, top: 306 }, 'KeyV': { left: 376, top: 306 },
    'KeyB': { left: 423, top: 306 }, 'KeyN': { left: 470, top: 306 }, 'KeyM': { left: 517, top: 306 },
    'Comma': { left: 564, top: 306 }, 'Period': { left: 611, top: 306 }, 'Slash': { left: 658, top: 306 },
    'ShiftRight': { left: 705, top: 306 },
    'Numpad1': { left: 1058, top: 306 }, 'Numpad2': { left: 1105, top: 306 }, 'Numpad3': { left: 1152, top: 306 }, 'NumpadEnter': { left: 1199, top: 306 },
    
    'ControlLeft': { left: 118, top: 353 },
    'MetaLeft': { left: 165, top: 353 },
    'AltLeft': { left: 212, top: 353 },
    'Space': { left: 263, top: 353 },
    'AltRight': { left: 611, top: 353 },
    'MetaRight': { left: 658, top: 353 },
    'ContextMenu': { left: 705, top: 353 },
    'ControlRight': { left: 752, top: 353 },
    'ArrowUp': { left: 917, top: 306 }, 'ArrowLeft': { left: 870, top: 353 }, 'ArrowDown': { left: 917, top: 353 }, 'ArrowRight': { left: 964, top: 353 },
    'Numpad0': { left: 1058, top: 353 }, 'NumpadDecimal': { left: 1152, top: 353 },
    'Calculator': { left: 1246, top: 94 }
};

// 应用坐标数据函数
function applyCoordinates() {
    // 先重置所有按键位置
    const container = document.getElementById('keyboardContainer');
    const keys = container.querySelectorAll('.keyboard-key');
    keys.forEach(key => {
        key.style.left = '0px';
        key.style.top = '0px';
    });

    // 应用坐标数据到每个按键
    Object.keys(coordinateData).forEach(key => {
        const element = document.querySelector(`[data-key="${key}"]`);
        if (element) {
            const pos = coordinateData[key];
            element.style.left = pos.left + 'px';
            element.style.top = pos.top + 'px';
            
            // 更新位置数据存储
            keyPositions[key] = { left: pos.left, top: pos.top };
        }
    });
}

// 设置拖动事件和点击选中功能
function setupDragEvents(element) {
    element.addEventListener('mousedown', startDrag);
    element.addEventListener('touchstart', startDrag);
    
    // 添加点击选中功能
    element.addEventListener('click', function(e) {
        // 防止拖动时触发点击事件
        if (isDragging) return;
        
        e.stopPropagation();
        
        // 移除其他按键的选中状态
        const allKeys = document.querySelectorAll('.keyboard-key');
        allKeys.forEach(key => {
            key.classList.remove('selected');
        });
        
        // 添加当前按键的选中状态
        this.classList.add('selected');
        
        console.log('已选中按键:', this.getAttribute('data-key'));
    });
}

// 开始拖动
function startDrag(e) {
    e.preventDefault();
    isDragging = true;
    dragElement = this;
    
    const rect = this.getBoundingClientRect();
    const containerRect = document.getElementById('keyboardContainer').getBoundingClientRect();
    
    if (e.type === 'touchstart') {
        dragOffset.x = e.touches[0].clientX - rect.left;
        dragOffset.y = e.touches[0].clientY - rect.top;
    } else {
        dragOffset.x = e.clientX - rect.left;
        dragOffset.y = e.clientY - rect.top;
    }
    
    this.classList.add('dragging');
    
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('touchmove', onDrag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
}

// 拖动中
function onDrag(e) {
    if (!isDragging || !dragElement) return;
    
    e.preventDefault();
    const containerRect = document.getElementById('keyboardContainer').getBoundingClientRect();
    
    let clientX, clientY;
    if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }
    
    // 计算新位置（限制在容器内）
    let left = clientX - containerRect.left - dragOffset.x;
    let top = clientY - containerRect.top - dragOffset.y;
    
    // 限制在容器边界内
    left = Math.max(0, Math.min(left, containerRect.width - dragElement.offsetWidth));
    top = Math.max(0, Math.min(top, containerRect.height - dragElement.offsetHeight));
    
    dragElement.style.left = left + 'px';
    dragElement.style.top = top + 'px';
}

// 停止拖动
function stopDrag() {
    if (!isDragging || !dragElement) return;
    
    isDragging = false;
    dragElement.classList.remove('dragging');
    
    // 应用磁吸效果
    applyMagneticEffect(dragElement);
    
    // 更新位置数据
    const key = dragElement.getAttribute('data-key');
    const left = parseInt(dragElement.style.left);
    const top = parseInt(dragElement.style.top);
    
    keyPositions[key] = { left, top };
    
    updatePositionData();
    
    dragElement = null;
    
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('touchmove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
    document.removeEventListener('touchend', stopDrag);
}

// 应用磁吸效果
function applyMagneticEffect(element) {
    const gridSize = 47; // 网格大小
    const left = parseInt(element.style.left);
    const top = parseInt(element.style.top);
    
    // 计算磁吸后的位置
    const snappedLeft = Math.round(left / gridSize) * gridSize;
    const snappedTop = Math.round(top / gridSize) * gridSize;
    
    // 应用磁吸位置
    element.style.left = snappedLeft + 'px';
    element.style.top = snappedTop + 'px';
}

// 更新位置数据显示
function updatePositionData() {
    const dataElement = document.getElementById('positionData');
    if (!dataElement) return;
    
    dataElement.innerHTML = '';
    
    // 按行和列排序后显示
    const sortedKeys = Object.keys(keyPositions).sort((a, b) => {
        const posA = keyPositions[a];
        const posB = keyPositions[b];
        
        if (posA.row !== posB.row) {
            return posA.row - posB.row;
        }
        return posA.col - posB.col;
    });
    
    sortedKeys.forEach(key => {
        const pos = keyPositions[key];
        const displayText = displayMap[key] || key;
        
        const coordItem = document.createElement('div');
        coordItem.className = 'coordinate-item';
        coordItem.textContent = `${displayText}: (${pos.left}, ${pos.top})`;
        
        dataElement.appendChild(coordItem);
    });
}

// 重置布局
function resetLayout() {
    initializeKeyboard();
    updatePositionData();
}

// 显示/隐藏网格
function showGrid() {
    const container = document.getElementById('keyboardContainer');
    const gridOverlay = container.querySelector('.grid-overlay');
    
    if (gridOverlay) {
        gridOverlay.style.display = gridOverlay.style.display === 'block' ? 'none' : 'block';
    } else {
        // 创建网格覆盖层
        const overlay = document.createElement('div');
        overlay.className = 'grid-overlay';
        
        // 创建垂直网格线
        for (let i = 0; i <= container.offsetWidth; i += 47) {
            const line = document.createElement('div');
            line.className = 'grid-line vertical-grid-line';
            line.style.left = i + 'px';
            line.style.top = '0';
            line.style.width = '1px';
            line.style.height = '100%';
            line.style.position = 'absolute';
            overlay.appendChild(line);
        }
        
        // 创建水平网格线
        for (let i = 0; i <= container.offsetHeight; i += 47) {
            const line = document.createElement('div');
            line.className = 'grid-line horizontal-grid-line';
            line.style.left = '0';
            line.style.top = i + 'px';
            line.style.width = '100%';
            line.style.height = '1px';
            line.style.position = 'absolute';
            overlay.appendChild(line);
        }
        
        container.appendChild(overlay);
        overlay.style.display = 'block';
    }
}

// 按坐标排列
function arrangeByCoordinates() {
    applyCoordinates();
    updatePositionData();
}

// 切换高级菜单显示
function toggleAdvancedMenu() {
    const menu = document.getElementById('advancedMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// 预览按键大小
function previewKeySize() {
    const width = document.getElementById('keyWidth').value;
    const height = document.getElementById('keyHeight').value;
    
    // 找到选中的按键进行预览
    const selectedKeys = document.querySelectorAll('.keyboard-key.selected');
    selectedKeys.forEach(key => {
        key.style.width = width + 'px';
        key.style.height = height + 'px';
    });
}

// 应用按键大小
function applyKeySize() {
    const width = document.getElementById('keyWidth').value;
    const height = document.getElementById('keyHeight').value;
    
    // 找到选中的按键应用尺寸
    const selectedKeys = document.querySelectorAll('.keyboard-key.selected');
    selectedKeys.forEach(key => {
        key.style.width = width + 'px';
        key.style.height = height + 'px';
    });
}

// 应用尺寸到所有按键
function applySizeToAll() {
    const width = document.getElementById('keyWidth').value;
    const height = document.getElementById('keyHeight').value;
    
    // 应用到所有按键
    const allKeys = document.querySelectorAll('.keyboard-key');
    allKeys.forEach(key => {
        // 跳过有特殊宽度的按键
        if (!key.classList.contains('space-key') && !key.classList.contains('tab-key') && !key.classList.contains('capslock-key') && 
            !key.classList.contains('shift-key') && !key.classList.contains('shift-right-key') && !key.classList.contains('enter-key') && 
            !key.classList.contains('numpadadd-key') && !key.classList.contains('numpad0-key') && !key.classList.contains('numpadenter-key')) {
            key.style.width = width + 'px';
            key.style.height = height + 'px';
        }
    });
}

// 重置按键大小
function resetKeySize() {
    // 重置所有按键到默认大小
    const allKeys = document.querySelectorAll('.keyboard-key');
    allKeys.forEach(key => {
        // 重置特殊按键到默认大小
        if (key.classList.contains('space-key')) {
            key.style.width = '342px';
            key.style.height = '45px';
        } else if (key.classList.contains('tab-key')) {
            key.style.width = '68px';
            key.style.height = '45px';
        } else if (key.classList.contains('capslock-key')) {
            key.style.width = '91px';
            key.style.height = '45px';
        } else if (key.classList.contains('shift-key')) {
            if (key.classList.contains('shift-right-key')) {
                key.style.width = '92px';
            } else {
                key.style.width = '112px';
            }
            key.style.height = '45px';
        } else if (key.classList.contains('enter-key')) {
            key.style.width = '67px';
            key.style.height = '45px';
        } else if (key.classList.contains('numpadadd-key')) {
            key.style.width = '45px';
            key.style.height = '91px';
        } else if (key.classList.contains('numpad0-key')) {
            key.style.width = '91px';
            key.style.height = '45px';
        } else if (key.classList.contains('numpadenter-key')) {
            key.style.width = '45px';
            key.style.height = '91px';
        } else {
            // 普通按键
            key.style.width = '45px';
            key.style.height = '45px';
        }
    });
}

// 预览间距
function previewSpacing() {
    const vertical = document.getElementById('verticalSpacing').value;
    const horizontal = document.getElementById('horizontalSpacing').value;
    
    // 找到选中的按键应用间距
    const selectedKeys = document.querySelectorAll('.keyboard-key.selected');
    selectedKeys.forEach(key => {
        key.style.margin = `${vertical}px ${horizontal}px`;
    });
}

// 应用间距
function applySpacing() {
    const vertical = document.getElementById('verticalSpacing').value;
    const horizontal = document.getElementById('horizontalSpacing').value;
    
    // 找到选中的按键应用间距
    const selectedKeys = document.querySelectorAll('.keyboard-key.selected');
    selectedKeys.forEach(key => {
        key.style.margin = `${vertical}px ${horizontal}px`;
    });
}

// 应用间距到所有
function applySpacingToAll() {
    const vertical = document.getElementById('verticalSpacing').value;
    const horizontal = document.getElementById('horizontalSpacing').value;
    
    // 应用到所有按键
    const allKeys = document.querySelectorAll('.keyboard-key');
    allKeys.forEach(key => {
        key.style.margin = `${vertical}px ${horizontal}px`;
    });
}

// 重置间距
function resetSpacing() {
    // 重置所有按键到默认间距
    const allKeys = document.querySelectorAll('.keyboard-key');
    allKeys.forEach(key => {
        key.style.margin = '2px';
    });
}

// 应用颜色
function applyColors() {
    const defaultBg = document.getElementById('defaultBgColor').value;
    const hoverColor = document.getElementById('hoverColor').value;
    const clickColor = document.getElementById('clickColor').value;
    
    // 找到选中的按键应用颜色
    const selectedKeys = document.querySelectorAll('.keyboard-key.selected');
    selectedKeys.forEach(key => {
        key.style.backgroundColor = defaultBg;
        key.style.setProperty('--hover-color', hoverColor);
        key.style.setProperty('--click-color', clickColor);
    });
}

// 应用颜色到所有
function applyColorsToAll() {
    const defaultBg = document.getElementById('defaultBgColor').value;
    const hoverColor = document.getElementById('hoverColor').value;
    const clickColor = document.getElementById('clickColor').value;
    
    // 应用到所有按键
    const allKeys = document.querySelectorAll('.keyboard-key');
    allKeys.forEach(key => {
        key.style.backgroundColor = defaultBg;
        key.style.setProperty('--hover-color', hoverColor);
        key.style.setProperty('--click-color', clickColor);
    });
}

// 批量更改颜色
function batchChangeColor() {
    const color = document.getElementById('defaultBgColor').value;
    
    // 应用到所有按键
    const allKeys = document.querySelectorAll('.keyboard-key');
    allKeys.forEach(key => {
        key.style.backgroundColor = color;
    });
}

// 批量重置位置
function batchResetPositions() {
    applyCoordinates();
}

// 批量应用样式
function batchApplyStyle() {
    applyKeySize();
    applyColors();
}

// 生成自定义布局
function generateCustomLayout() {
    const input = document.getElementById('customCoordinates').value;
    let positions = {};
    
    try {
        // 尝试解析JSON格式
        const jsonData = JSON.parse(input);
        if (jsonData.keyPositions) {
            positions = jsonData.keyPositions;
        }
    } catch (e) {
        // 尝试解析简单格式
        const lines = input.split('\n');
        let index = 0;
        
        lines.forEach(line => {
            line = line.trim();
            if (line && line.includes('(') && line.includes(')')) {
                // 解析简单格式：(x, y)
                const match = line.match(/\((\d+),\s*(\d+)\)/);
                if (match) {
                    const left = parseInt(match[1]);
                    const top = parseInt(match[2]);
                    
                    // 获取所有按键并按顺序分配位置
                    const keys = Object.keys(coordinateData).sort();
                    if (keys[index]) {
                        positions[keys[index]] = { left, top };
                        index++;
                    }
                }
            }
        });
    }
    
    // 应用生成的布局
    if (Object.keys(positions).length > 0) {
        Object.keys(positions).forEach(key => {
            const element = document.querySelector(`[data-key="${key}"]`);
            if (element) {
                const pos = positions[key];
                element.style.left = pos.left + 'px';
                element.style.top = pos.top + 'px';
                
                // 更新位置数据存储
                keyPositions[key] = pos;
            }
        });
        
        updatePositionData();
    }
}

// 导出布局
function exportCustomLayout() {
    const exportData = {
        keyPositions: keyPositions
    };
    
    // 创建下载链接
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'keyboard-layout.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 导出数据
function exportData() {
    const exportData = {
        keyPositions: keyPositions
    };
    
    // 复制到剪贴板
    const dataStr = JSON.stringify(exportData, null, 2);
    navigator.clipboard.writeText(dataStr).then(() => {
        alert('布局数据已复制到剪贴板！');
    }).catch(err => {
        console.error('无法复制到剪贴板:', err);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeKeyboard();
    updatePositionData();
    
    // 添加键盘事件监听
    window.addEventListener('keydown', function(e) {
        const keyElement = document.querySelector(`[data-key="${e.code}"]`);
        if (keyElement) {
            keyElement.classList.add('key-pressed');
        }
    });
    
    window.addEventListener('keyup', function(e) {
        const keyElement = document.querySelector(`[data-key="${e.code}"]`);
        if (keyElement) {
            keyElement.classList.remove('key-pressed');
        }
    });
});