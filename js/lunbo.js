var slider = document.querySelector('.slider');
var sliderItems = document.querySelector('.slider-items');
var sliderButtons = document.querySelectorAll('.slider-button');
var index = 0;

// 创建一个新的轮播图元素，并将其添加到轮播图列表的末尾
var firstItem = sliderItems.children[0].cloneNode(true);
sliderItems.appendChild(firstItem);

function slideImage() {
    index++;
    if (index === sliderItems.children.length) {
        // 当滚动到新元素时，将index设置为0，并将translateX设置为0，但是不触发动画
        sliderItems.style.transition = 'none';
        sliderItems.style.transform = 'translateX(0)';
        index = 0;
        // 用setTimeout确保上述操作在下一次重绘之前完成
        setTimeout(function() {
            sliderItems.style.transition = '';
            slideImage();
        }, 0);
    } else {
        sliderItems.style.transform = 'translateX(' + (-index * slider.offsetWidth) + 'px)';
    }
}

sliderButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        if (event.target.classList.contains('slider-button-next')) {
            slideImage();
        }
    });
});

// 自动播放轮播图
setInterval(slideImage, 5000);