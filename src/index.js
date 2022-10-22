const { app, BrowserWindow } = require('electron');
const { is } = require('electron-util');

// Чтобы не собирать мусор, объявляем window в виде переменной
let window;

// Указываем детали окна браузера
function createWindow() {
	window = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// Загружаем HTML-файл
	window.loadFile('index.html');

	// Если приложение в режиме разработки, открываем браузерные инструменты
	// разработчика
	if (is.development) {
		window.webContents.openDevTools();
	}

	// При закрытии окна сбрасываем объект
	window.on('closed', () => {
		window = null;
	});
}

// Когда electron готов, создаем окно приложения
app.on('ready', createWindow);