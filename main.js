const electron = require('electron')
const url = require('url')
const path = require('path');
const { protocol } = require('electron');

const {app, BrowserWindow, Menu} = electron

let mainWindow;

//Listen for app to be ready
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Competitive Editor',
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
})

const mainMenuTemplate = [];

/*const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: 'Ctrl+Q',
                click() {
                    app.quit()
                }
            },
            {
                role: 'reload',
                accelerator: 'Ctrl+R'
            }
        ]
    },
    {
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle Devtools',
                accelerator: 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    }
]*/