//1. Toggle: dùng để thực hiện luân phiên giữa việc hiện & ẩn một phần tử
//2. QuerySelector: trả về phần tử đầu tiên là phần tử con của phần tử mà nó được gọi ra khớp với nhóm bộ chọn được chỉ định.
    document.querySelector('.btn') // class name
    document.querySelector('#root') // id name
    document.querySelector('button') // tag name
    document.querySelector('div span') // theo kiểu css

// Ví dụ: tìm phần tử div đầu tiên và cho chữ màu đỏ.
var firstDiv = document.querySelector('div')
firstDiv.style.color = 'red'

//3. queryselectorAll: Trả về tập hợp các phần tử phù hợp với bộ chọn CSS. Kết quả được trả về dưới dạng một đối tượng NodeList object.
// Ví dụ: tìm tất cả các phần tử p và cho chữ sang màu đỏ
const paragraphs = document.querySelectorAll('p')
for(var p of paragraphs) {
    p.style.color = 'red'
}
//Element: classList
// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// 4. getElementById	
// 5. getElementsByName	
// 6. getElementsByTagName
// 7. getElementsByClassName