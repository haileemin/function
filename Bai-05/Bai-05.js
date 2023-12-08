// Bài 5: Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau: Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus. Tạo một mảng khác với bảy phần tử dạng chuỗi có giá trị là tên các chòm sao tương ứng chứa các ngôi sao: Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major và Leo. Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất. Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao. Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai. Nói cách khác, trả lại tên chòm sao của ngôi sao đó. Trong phần <body> của trang web, dùng hộp thoại prompt để người dùng nhập vào tên của ngôi sao, sau đó gọi hàm với thông tin đầu vào. Đừng quên xử lý trong trường hợp không tìm thấy ngôi sao nào. Cho kết quả hiển thị trên màn hình.

//Cách 1:
// let arr1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
// let arr2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
// function findStar () {
//     let a = prompt('Nhập tên ngôi sao: ');
//     for (i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
//         if (arr1[i] == a) {
//                 j = i;
//                 document.write('Chòm sao tương ứng là: ' + arr2[j]);
//                 break;
//             } 
//         else if (i == arr1.length - 1 && j == arr2.length - 1 && a != arr1[i]) {
//             document.write('Không có chòm sao tương ứng');
//         } 
//     }
// }

// Cách 2:
// let arr1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
// let arr2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

// function findStar () {
//     let b = false;
//     let a = prompt('Nhập tên ngôi sao: ');
//     for (i = 0; i < arr1.length; i++) {
//         if (arr1[i] == a) {
//             for (j = 0; j < arr2.length; j++) {
//                 j = i;
//                 document.write("Chòm sao tương ứng là: " + arr2[j]);
//                 break;
//             } b = true;
//         }
//     }
//     if (b) {
//     } else {
//         document.write('Không có chòm sao tương ứng');
//     }

// }    

// Cách 3
// Tạo mảng ngôi sao và mảng chòm sao tương ứng
const stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
const constellations = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

// Hàm tìm chòm sao dựa trên tên ngôi sao
function findConstellation(starName) {
    const lowerCaseStarName = starName.toLowerCase();
   
    for (let i = 0; i < stars.length; i++) {
        if (lowerCaseStarName === stars[i].toLowerCase()) {
            return constellations[i];
        }
    }

    return null;
}


function findStar() {
    // Sử dụng hộp thoại prompt để nhập tên ngôi sao từ người dùng
    let userInput = prompt("Nhập tên ngôi sao:");
    // Gọi hàm và hiển thị kết quả trên màn hình
    const constellation = findConstellation(userInput);
    if (constellation) {
        document.write(`Ngôi sao ${userInput} thuộc chòm sao ${constellation}.`);
    } else {
        document.write(`Không tìm thấy thông tin cho ngôi sao ${userInput}.`);
    }
}
