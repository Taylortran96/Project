const titles = document.getElementsByClassName("title-tag");
const tags = document.getElementsByClassName("tag");
for (let i = 0; i < tags.length; i++) {
  tags[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("tag-active");
    current[0].className = current[0].className.replace(" tag-active", "");
    this.className += " tag-active";
  });
}

console.log(tags);
// Làm liên kết
// Trang chủ




// Giới thiệu


// Quán ăn


// Quán nước




// Liên lạc



// Đăng nhập