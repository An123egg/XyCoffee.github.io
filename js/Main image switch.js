
//添加图片切换逻辑的JavaScript代码 
<script>
    // 等待页面加载完成
    $(document).ready(function() {
        // 获取轮播相关元素
        const sliderContainer = $('.product-img-slider');
        const sliderImages = $('.slider-images');
        const prevArrow = $('.prev-arrow');
        const nextArrow = $('.next-arrow');
        // 获取图片数量
        const imgCount = sliderImages.find('img').length;
        // 当前显示的图片索引
        let currentIndex = 0;

        // 切换图片函数
        function switchImage(index) {
            // 计算偏移量（负数表示向左移动）
            const offset = -index * 100;
            // 应用偏移量实现切换
            sliderImages.css('transform', `translateX(${offset}%)`);
            // 更新当前索引
            currentIndex = index;

            // 可选：禁用边界箭头（比如第一页隐藏左箭头，最后一页隐藏右箭头）
            prevArrow.prop('disabled', currentIndex === 0);
            nextArrow.prop('disabled', currentIndex === imgCount - 1);
        }

        // 左箭头点击事件
        prevArrow.click(function() {
            if (currentIndex > 0) {
                switchImage(currentIndex - 1);
            }
        });

        // 右箭头点击事件
        nextArrow.click(function() {
            if (currentIndex < imgCount - 1) {
                switchImage(currentIndex + 1);
            }
        });

        // 初始化：显示第一张图片，禁用左箭头
        switchImage(0);
    });
</script>