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
    var isValid = kiemTraRong("tbTKNV", nv.ten) &
    kiemTraRong("tbTen", nv.ten) &
    kiemTraDoDai(4,6,"tbTKNV", nv.taikhoan) &
    kiemTraEmail("tbEmail", nv.email) //&
    // kiemTraMatKhau("tbMatKhau", nv.matkhau)
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
    // var jsonData = JSON.stringify(dsnv)
    // localStorage.setItem("DSNV", jsonData)
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
    var index = timViTri(nv.taikhoan, dsnv)
    dsnv[index] = nv
    renderDSNV(dsnv)
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