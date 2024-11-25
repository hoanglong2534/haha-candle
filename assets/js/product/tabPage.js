// script.js
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {

            event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a

            // Xóa class active khỏi tất cả các liên kết
            links.forEach(l => l.classList.remove('active'));
            
            // Thêm class active cho liên kết đã nhấp
            this.classList.add('active');
            const targetUrl = this.getAttribute('href'); // Lấy URL từ thuộc tính href
            if (targetUrl) {
                window.location.href = targetUrl; // Điều hướng đến URL
            }
        });
    });
});


