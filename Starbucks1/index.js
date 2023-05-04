function imgSlicer(anything){
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function toggleMenu(){
    let menuToggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

/*
const element = document.querySelector('.example');
element.classList.toggle('active'); // Thêm lớp CSS "active" nếu phần tử HTML không có lớp CSS "active",
                                    // và xoá lớp CSS "active" nếu phần tử HTML đã có lớp CSS "active".
*/