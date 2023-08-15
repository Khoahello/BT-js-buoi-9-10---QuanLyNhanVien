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
document.getElementById("btnCapNhat").hidden = true

function themNguoiDung() {
    var nv = layThongTinTuForm()

    // start validate
    var isValid = 
    (kiemTraRong("tbTKNV", nv.taikhoan) && kiemTraKySo(4, 6, "tbTKNV", nv.taikhoan)) & (kiemTraLich("tbNgay", nv.ngaylam) && kiemTraRong("tbNgay", nv.ngaylam)) & (kiemTraChuOnly("tbTen", nv.ten) && kiemTraRong("tbTen", nv.ten)) & (kiemTraRong("tbEmail", nv.email) && kiemTraEmail("tbEmail", nv.email)) & (kiemTraRong("tbMatKhau", nv.matkhau) && kiemTraMatKhau("tbMatKhau", nv.matkhau)) &
    kiemTraChucVu("tbChucVu", nv.chucvu) & kiemTraNumber(1000000, 20000000, "tbLuongCB", nv.luongcoban) & kiemTraNumber(80, 200, "tbGiolam", nv.giolam)
    // end validate

    if (!isValid) return

    dsnv.push(nv)

    var jsonData = JSON.stringify(dsnv)
    localStorage.setItem("DSNV", jsonData)
    renderDSNV(dsnv)
    $("#myModal").modal("hide")
}

function xoaNv(id) {
    var index = timViTri(id, dsnv)
    dsnv.splice(index, 1)
    renderDSNV(dsnv)
    var jsonData = JSON.stringify(dsnv)
    localStorage.setItem("DSNV", jsonData)
}

function suaNv(id) {
    document.getElementById("tbGiolam").value = "" 
    var index = timViTri(id, dsnv)
    var nv = dsnv[index]
    showThongTinLenForm(nv)
    document.getElementById("tknv").disabled = true
    document.getElementById("btnThemNV").hidden = true
    document.getElementById("btnCapNhat").hidden = false
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
    document.getElementById("btnCapNhat").hidden = true
}

function capNhatNv() {
    var nv = layThongTinTuForm()

    // start validate
    var isValid = 
    (kiemTraLich("tbNgay", nv.ngaylam) && kiemTraRong("tbNgay", nv.ngaylam)) & (kiemTraChuOnly("tbTen", nv.ten) && kiemTraRong("tbTen", nv.ten)) & (kiemTraRong("tbEmail", nv.email) && kiemTraEmail("tbEmail", nv.email)) & (kiemTraRong("tbMatKhau", nv.matkhau) && kiemTraMatKhau("tbMatKhau", nv.matkhau)) &
    kiemTraChucVu("tbChucVu", nv.chucvu) & kiemTraNumber(1000000, 20000000, "tbLuongCB", nv.luongcoban) & kiemTraNumber(80, 200, "tbGiolam", nv.giolam)
    // end validate

    if (!isValid) return

    var index = timViTri(nv.taikhoan, dsnv)
    dsnv[index] = nv
    renderDSNV(dsnv)
    var jsonData = JSON.stringify(dsnv)
    localStorage.setItem("DSNV", jsonData)
    $("#myModal").modal("hide")
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

function anThongBao() {
    document.getElementById("tbTKNV").innerText = ""
    document.getElementById("tbTen").innerText = ""
    document.getElementById("tbEmail").innerText = ""
    document.getElementById("tbMatKhau").innerText = ""
    document.getElementById("tbNgay").innerText = ""
    document.getElementById("tbLuongCB").innerText = ""
    document.getElementById("tbChucVu").innerText = ""
    document.getElementById("tbGiolam").innerText = "" 
}