function NhanVien(_taikhoan, _ten, _email, _matkhau, _ngaylam, _luongcoban, _chucvu, _giolam,) {
    this.taikhoan = _taikhoan;
    this.ten = _ten;
    this.email = _email;
    this.matkhau = _matkhau;
    this.ngaylam = _ngaylam;
    this.luongcoban = _luongcoban;
    this.chucvu = _chucvu;
    this.giolam = _giolam;
    this.tinhTongLuong = function() {
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
    };
    this.xepLoai = function() {
        if (_giolam >= 192) {
            return "Xuất sắc"
        } else if (_giolam >= 176) {
            return "Giỏi"
        } else if (_giolam >= 160) {
            return "Khá"
        } else {
            return "Trung bình"
        }
    };
}