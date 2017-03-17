/**
 * Created by zhezhao on 2017/3/13.
 */
const {app, Menu} = require('electron');
const config = require('../config/index');
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
                click () { require('electron').shell.openExternal(config.onlineIndex) }
            },
            {
                label: '数字档案查询',
                    click () { require('electron').shell.openExternal(config.onlineTools) }
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)