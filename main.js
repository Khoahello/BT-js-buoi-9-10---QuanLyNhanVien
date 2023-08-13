dsnv = []
var jsonData = localStorage.getItem("DSNV")
if (jsonData != null) {
    var list = JSON.parse(jsonData)
    dsnv = list.map(function(item){
        return new NhanVien(item.taikhoan, item.ten, item.email, item.matkhau, item.ngaylam, item.luongcoban, item.chucvu, item.giolam,)
    })
    renderDSNV(dsnv)
}

document.getElementById("btnThemNV").hidden = true

function themNguoiDung() {
    var nv = layThongTinTuForm()

    // start validate
    var isValid = 
    (kiemTraLich("tbNgay", nv.ngaylam) && kiemTraRong("tbNgay", nv.ngaylam)) & (kiemTraChuOnly("tbTen", nv.ten) && kiemTraRong("tbTen", nv.ten)) &
    kiemTraRong("tbTKNV", nv.taikhoan) & kiemTraRong("tbEmail", nv.email) & kiemTraRong("tbMatKhau", nv.matkhau) &
    kiemTraKySo(4, 6, "tbTKNV", nv.taikhoan) & kiemTraEmail("tbEmail", nv.email) & kiemTraMatKhau("tbMatKhau", nv.matkhau) & kiemTraChucVu("tbChucVu", nv.chucvu) & kiemTraNumber(1000000, 20000000, "tbLuongCB", nv.luongcoban) & kiemTraNumber(80, 200, "tbGiolam", nv.giolam)
    // end validate

    if (!isValid) return

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
    var jsonData = JSON.stringify(dsnv)
    localStorage.setItem("DSNV", jsonData)
}

function suaNv(id) {
    var index = timViTri(id, dsnv)
    var nv = dsnv[index]
    showThongTinLenForm(nv)
    document.getElementById("tknv").disabled = true
}

function themNhanVien() {
    document.getElementById("tknv").value = ""
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("datepicker").value = ""
    document.getElementById("luongCB").value = ""
    document.getElementById("chucvu").value = "Chọn chức vụ"
    document.getElementById("gioLam").value = ""
    document.getElementById("tknv").disabled = false
    document.getElementById("btnThemNV").hidden = false
}

function capNhatNv() {
    var nv = layThongTinTuForm()

    // start validate
    var isValid2 = 
    (kiemTraLich("tbNgay", nv.ngaylam) && kiemTraRong("tbNgay", nv.ngaylam)) & (kiemTraChuOnly("tbTen", nv.ten) && kiemTraRong("tbTen", nv.ten)) &
    kiemTraRong("tbEmail", nv.email) & kiemTraRong("tbMatKhau", nv.matkhau) &
    kiemTraEmail("tbEmail", nv.email) & kiemTraMatKhau("tbMatKhau", nv.matkhau) & kiemTraChucVu("tbChucVu", nv.chucvu) & kiemTraNumber(1000000, 20000000, "tbLuongCB", nv.luongcoban) & kiemTraNumber(80, 200, "tbGiolam", nv.giolam)
    // end validate

    if (!isValid2) return

    var index = timViTri(nv.taikhoan, dsnv)
    dsnv[index] = nv
    renderDSNV(dsnv)
    var jsonData = JSON.stringify(dsnv)
    localStorage.setItem("DSNV", jsonData)
    document.getElementById("btnThemNV").hidden = true
}

function timNv() {
    var dsSearch = []
    var thongTinSearch = layThongTinTuSearch().trim()
    if (thongTinSearch != "") {
        for (var i = 0; i < dsnv.length; i++) {
            var dataSearch = dsnv[i]
            if (dsnv[i].xepLoai() == thongTinSearch) {
                dsSearch.push(dataSearch)
            }
        }
        renderDSNV(dsSearch)
    } else {
        renderDSNV(dsnv)
    }
}


console.log(typeof 123);