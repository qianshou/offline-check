/**
 * Created by zhezhao on 2017/3/13.
 */
const {app, Menu} = require('electron');
const template = [
    {
        label: ' 离线验证 ',
        submenu: [
            {
                role: 'toggledevtools',
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        label: ' 在线验证 ',
        submenu: [
            {
                label: '在线验证',
                click () { require('electron').shell.openExternal('http://210.73.27.42:3000/tools') }
            },
            {
                label: '数字档案查询',
                    click () { require('electron').shell.openExternal('http://210.73.27.42:3000/') }
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)