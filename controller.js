function renderDSNV(dsnv) {
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
                                    <button class = "btn btn-primary">Edit</button>
                                    <button class ="btn btn-danger" onclick = "xoaNv('${data.taikhoan}')">Delete</button>
                                </td>
                        </tr>`
        contentHTML = contentHTML + contentTr
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML
}

function timViTri(id, dsnv) {
    var viTri
    for (var i = 0; i < dsnv.length; i++) {
        if (dsnv[i].taikhoan == id) {
            return i
        }
    }
}