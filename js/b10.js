
function demnguoc(phut, giay){
    var tongGiay = phut * 60 + giay;
    console.log(`Thời gian ban đầu: ${phut} phút ${giay} giây`);
    var demNgung = setInterval(function () {
        var phutConLai = Math.floor(tongGiay / 60);
        var giayConLai = tongGiay % 60;
        console.log(`${phutConLai} phút ${giayConLai} giây`);
        tongGiay--;

        if (tongGiay < 0) {
            clearInterval(demNgung);
            console.log("Hết thời gian đếm ngược");
        }
    }, 1000);
}