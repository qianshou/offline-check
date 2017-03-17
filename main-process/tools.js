/**
 * Created by zhezhao on 2017/3/15.
 */
const crypto = require('crypto');
const fs = require('fs');
const {ipcMain} = require('electron');

ipcMain.on('plaintext', (event, ipcText) => {
    console.log(ipcText);
    var ciphertext = crypto.createHash(ipcText.hash).update(ipcText.data).digest('hex');
    event.sender.send('ciphertext', ciphertext);
});

ipcMain.on('filepath', (event, ipcFile) => {
    console.log(ipcFile);
    //判断文件是否存在
    if(fs.existsSync(ipcFile.path)){
        //对文件进行哈希
        const hash = crypto.createHash(ipcFile.hash);
        const input = fs.createReadStream(ipcFile.path);
        input.on('readable', function () {
            const data = input.read();
            if (data)
                hash.update(data);
            else {
                const result = hash.digest('hex');
                event.sender.send('fileres',result);
            }
        });
    }else{
        event.sender.send('fileres','选择的文件不存在');
    }
});