dsnv = []

function themNV(dsnv) {

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

    var nv = {
        taikhoan: _taikhoan,
        ten: _ten,
        email: _email,
        ngaylam: _ngaylam,
        chucvu: _chucvu,
        tinhTongLuong: function() {
            var tongluong = 0
            if (this.chucvu == "Sếp") {
                tongluong = _luongcoban * 3
            }
            if (this.chucvu == "Trưởng phòng") {
                tongluong = _luongcoban * 2
            }
            if (this.chucvu == "Nhân viên") {
                tongluong = _luongcoban * 1
            }
            return tongluong
        },
        xepLoai: function() {
            if (_giolam >= 192) {
                return "Xuất sắc"
            } else if (_giolam >= 176) {
                return "Giỏi"
            } else if (_giolam >= 160) {
                return "Khá"
            } else {
                return "Trung bình"
            }
        }
    }
    dsnv.push(nv)
    var contentHTML = ""
    for (var i = 0; i < dsnv.length; i++) {
        var data = dsnv[i]
        var contentTr = `<tr>
                                <td>${data.taikhoan}</td>
                                <td>${data.ten}</td>
                                <td>${data.email}</td>
                                <td>${data.ngaylam}</td>
                                <td>${data.chucvu}</td>
                                <td>${data.tinhTongLuong()}</td>
                                <td>${data.xepLoai()}</td>
                                <td>
                                    <button class="btn 
                                    btn-danger">Xóa</button>
                                </td>
                        </tr>`
        contentHTML = contentHTML + contentTr
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML
}