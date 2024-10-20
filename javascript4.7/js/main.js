function songuyento(n) {
    for (var i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            alert(`${n}Không phải số nguyên tố`);
            return;
        }
    }
    alert(`${n} Là số nguyên tố`);
    return;
}

function kiemtraSNT(n) {
    for (var i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            alert(`${n}Không phải số nguyên tố`);
            return;
        }
    }
    return true;
}

/**Viết hàm tính chu vi và diện tích tam giác khi đã biết đọ dài 3 cạnh tam giác đó
*/

function chuvi(p) {
    var p = a + b + c;
    return p;
}

function dientich(S) {
    var nuaP = (a + b + c) / 2;
    var S = Math.sqrt(nuaP * (nuaP - a) * (nuaP - b) * (nuaP - c));
    return S;
}

/**Viết các function để xử lý array
 * 1. viết function tìm số lớn nhất của 1 mảng
 * 2. viết function tính trung bình cộng của 1 mảng
 * 3. viết function tìm số dương nhỏ nhất trong 1 mảng
 * 4. viết function tìm trung bình cộng các số dương trong mảng
 */

function solonnhat(numbers) {
    var maxNumber = 0;
        for (var i of numbers) {
            if (i > maxNumber) {
                maxNumber = i;
            }
        }
    return maxNumber;
}

function tBCong(arr) {
    if (arr.length === 0) {
        return 0; // Trường hợp mảng rỗng, trung bình cộng là 0 hoặc có thể là undefined tùy ý
    }

    var tong = arr.reduce((acc, curr) => acc + curr, 0); //tính tổng các phần tử trong mảng
    var trungBinh = tong / arr.length; //tính trung bình cộng
    return trungBinh;
}

function soDuongNN(number) {
    var minNumber = 0;
    for(var i of number){
        if(i > 0 && i < minNumber && minNumber !=0){
            minNumber = i;
        }
    }
    return minNumber;
}

function tBCOngsoDuong() {

}

function demNguoc(phut, giay) {
    // Chuyển đổi phút và giây sang giây
    var tongGiay = phut * 60 + giay;

    // Hiển thị thời gian ban đầu
    console.log(`Thời gian ban đầu: ${phut} phút ${giay} giây`);

    // Tạo setInterval để đếm ngược
    var demNgung = setInterval(function () {
        // Tính toán phút và giây còn lại
        var phutConLai = Math.floor(tongGiay / 60);
        var giayConLai = tongGiay % 60;

        // Hiển thị thời gian còn lại
        console.log(`${phutConLai} phút ${giayConLai} giây`);

        // Giảm số giây đi 1 sau mỗi lần đếm
        tongGiay--;

        // Kiểm tra nếu hết thời gian, dừng đếm ngược
        if (tongGiay < 0) {
            clearInterval(demNgung);
            console.log("Hết thời gian đếm ngược");
        }
    }, 1000); // Mỗi 1000ms = 1 giây
}

