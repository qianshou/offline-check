$(function() {
    displayIndex();
});
//切换菜单
function displayFile() {
    $("#text-container").hide();
    $("#file-container").show();
    $("#about-container").hide();
}
function displayAbout() {
    $("#text-container").hide();
    $("#file-container").hide();
    $("#about-container").show();
}
function displayIndex() {
    $("#text-container").show();
    $("#file-container").hide();
    $("#about-container").hide();
}

//显示上传文件名
$(function() {
    $('#doc-form-file').on('change', function() {
        var fileNames = '';
        $.each(this.files, function() {
            fileNames += '<span class="am-text-success">' + this.name + '</span> ';
        });
        $('#file-list').html(fileNames);
    });
});
//获取文本哈希值
function textSubmit() {
    var text = $("#text-content").val();
    if(text){
        $.post('tools/text',{text:text},function (res) {
            $("#text-res").text(res);
            $("#res-body").show();
        });
    }else{
        $("#text-res").text('文本不能为空');
        $("#res-body").show();
    }
    return false;
}
//判断文件大小，是否符合
function fileSubmit() {
    var obj = document.getElementById("doc-form-file");
    if(obj.value){
        var size = obj.files[0].size;
        if(size > 10*1024*1024){
            fileDisplay("超过10M请使用离线验证工具");
            return false;
        }else{
            return true;
        }
    }else{
        fileDisplay("请先选择文件");
        return false;
    }
}