// Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.


function myFunction() {
    let a = parseInt(prompt('Nhập vào một số a: '));
    let b = parseInt(prompt('Nhập vào một số b: '));
    if (a > b) {
        document.write("a lớn hơn b");
    } else { 
        let c = a + b;
        document.write('Tổng của 2 số là: ' + c);
    }
} 