//1. Toggle: dùng để thực hiện luân phiên giữa việc hiện & ẩn một phần tử
//2. QuerySelector: trả về phần tử đầu tiên là phần tử con của phần tử mà nó được gọi ra khớp với nhóm bộ chọn được chỉ định.
    document.querySelector('.btn') // class name
    document.querySelector('#root') // id name
    document.querySelector('button') // tag name
    document.querySelector('div span') // theo kiểu css

// Ví dụ: tìm phần tử div đầu tiên và cho chữ màu đỏ.
var firstDiv = document.querySelector('div')
firstDiv.style.color = 'red'

//3. queryselectorAll: Trả về tất cả các phần tử bên trong khớp với bộ chọn CSS. Kết quả được trả về dưới dạng một đối tượng NodeList object.
// Ví dụ: tìm tất cả các phần tử p và cho chữ sang màu đỏ
const paragraphs = document.querySelectorAll('p')
for(var p of paragraphs) {
    p.style.color = 'red'
}
//Element: classList
// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// 4. element.getElementById	=> tìm phần tử theo "ID"
// 5. element.getElementsByName	=> tìm phần tử theo "Name"
// 6. element.getElementsByTagName => => tìm phần tử theo tag "p" "div"
// 7. element.getElementsByClassName => => tìm phần tử theo "Class"
// 8. element.childNodes : trả về mảng các phần tử con của nó
// 9. element.firstChild : phần tử con đầu tiên
// 10. element.lastChild : phần tử con cuối cùng
// 11. element.hasChildNodes : trả về true nếu có phần tử con, ngược lại là false
// 12. element.nextSibling : phần tử cùng cấp tiếp theo
// 13. element.previousSibling : phần tử cùng cấp trước
// 14. element.parentNode : trả về nút cha