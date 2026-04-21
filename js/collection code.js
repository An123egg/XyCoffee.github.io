<script>
function openPayWindow() {
    var width = 377;
    var height = 500;
    var left = (window.screen.width - width) / 2;
    var top = (window.screen.height - height) / 2;
    window.open(
        'images/收款码.jpg', // 必须和你保存的收款码页面文件名一致
        'payWindow',
        'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ',resizable=yes'
    );
	
}
</script>
