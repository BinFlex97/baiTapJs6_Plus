var nhapSo = document.getElementById("soThuc")
var inKetQua = document.getElementById('kq5')
function kiemTraSNT(x) {
    var n = 0;
    for (var i = 0; i < x; i++) {
        if (x % (i + 1) == 0) {
            n++
        }
    }
    if(n == 2){
        return x + " "
    }else return ""
}
function inSoNguyenTo() {
    var text = ""
    for(var i = 0; i <= nhapSo.value ; i++){
        text  += kiemTraSNT(i)
    }
    inKetQua.innerHTML = text
}