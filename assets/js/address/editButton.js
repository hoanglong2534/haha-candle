document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.querySelector("#edit");
    const closeButton = document.querySelector("#close");
    const profileBox = document.querySelector(".box .profile");
    const hiddenBox = document.querySelector(".boxAn");
  
    // Khi nhấn nút chỉnh sửa
    editButton.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
      profileBox.style.display = "none"; // Ẩn box profile
      hiddenBox.style.display = "block"; // Hiện box ẩn
    });
  
    // Khi nhấn nút hủy
    const cancelButton = hiddenBox.querySelector("a"); // Nút hủy trong box ẩn
    cancelButton.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
      hiddenBox.style.display = "none"; // Ẩn box ẩn
      profileBox.style.display = "block"; // Hiện lại box profile
    });
  });
  