dsnv = []
var jsonData = localStorage.getItem("DSNV")
if (jsonData != null) {
    var list = JSON.parse(jsonData)
    dsnv = list.map(function(item){
        return new NhanVien(item.taikhoan, item.ten, item.email, item.matkhau, item.ngaylam, item.luongcoban, item.chucvu, item.giolam,)
    })
    renderDSNV(dsnv)
}




function themNV() {
    var _taikhoan = document.getElementById("tknv").value
    var _ten = document.getElementById("name").value
    var _email = document.getElementById("email").value
    var _matkhau = document.getElementById("password").value
    var _ngaylam = document.getElementById("datepicker").value
    var _luongcoban = document.getElementById("luongCB").value * 1
    var _chucvu = document.getElementById("chucvu").value
    var _giolam = document.getElementById("gioLam").value * 1

    // var nv = {
    //     taikhoan: _taikhoan,
    //     ten: _ten,
    //     email: _email,
    //     matkhau: _matkhau,
    //     ngaylam: _ngaylam,
    //     luongcoban: _luongcoban,
    //     chucvu: _chucvu,
    //     giolam: _giolam,
    //     // tinhTongLuong: function() {
    //     //     var tongluong = 0
    //     //     if (this.chucvu == "Sếp") {
    //     //         tongluong = _luongcoban * 3
    //     //     }
    //     //     if (this.chucvu == "Trưởng phòng") {
    //     //         tongluong = _luongcoban * 2
    //     //     }
    //     //     if (this.chucvu == "Nhân viên") {
    //     //         tongluong = _luongcoban * 1
    //     //     }
    //     //     return tongluong
    //     // },
    //     // xepLoai: function() {
    //     //     if (_giolam >= 192) {
    //     //         return "Xuất sắc"
    //     //     } else if (_giolam >= 176) {
    //     //         return "Giỏi"
    //     //     } else if (_giolam >= 160) {
    //     //         return "Khá"
    //     //     } else {
    //     //         return "Trung bình"
    //     //     }
    //     // },
    // }
    var nv = new NhanVien(_taikhoan, _ten, _email, _matkhau, _ngaylam, _luongcoban, _chucvu, _giolam,)

    dsnv.push(nv)

    var jsonData = JSON.stringify(dsnv)
    localStorage.setItem("DSNV", jsonData)

    renderDSNV(dsnv)
}

function xoaNv(id) {
    var index = timViTri(id, dsnv)
    dsnv.splice(index, 1)
    console.log("🚀 ~ file: main.js:62 ~ xoaNv ~ dsnv:", dsnv)
    renderDSNV(dsnv)
    // var jsonData = JSON.stringify(dsnv)
    // localStorage.setItem("DSNV", jsonData)
}