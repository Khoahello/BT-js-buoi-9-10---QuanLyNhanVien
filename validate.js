function kiemTraRong(idErr, value) {
    if (value.toString().trim().length == 0) {
        document.getElementById(idErr).innerText = "Không được để trống"
        return false
    } else {
        document.getElementById(idErr).innerText = ""
        return true
    }
}

function kiemTraDoDai(min, max, idErr, value) {
    var length = value.trim().length
    if (length < min || length > max) {
        document.getElementById(idErr).innerText = `Nội dung này phải từ ${min} đến ${max} ký tự`
        return false
    } else {
        document.getElementById(idErr).innerText = ""
        return true
    }
}

function kiemTraEmail(idErr, value) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(value)) {
    document.getElementById(idErr).innerText = ""
    return true
  } else {
    document.getElementById(idErr).innerText = "Email không hợp lệ"
    return false
  }
}

function kiemTraKySo(minSo, maxSo, idErr, value) {
    const re = /^\d+$/
    var demKySo = 0
    for (var i = 0; i < value.length; i++) {
        if (re.test(value[i])) {
            demKySo++
        }
    }
    if (demKySo < minSo || demKySo > maxSo) {
        document.getElementById(idErr).innerText = `Nội dung này phải tối đa từ ${minSo} đến ${maxSo} ký tự số`
        return false
    } else {
        document.getElementById(idErr).innerText = ""
        return true
    }
}

function kiemTraMatKhau(idErr, value) {
    const re = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/
    if (re.test(value) && value.length <= 10) {
        document.getElementById(idErr).innerText = ""
        return true
    } else {
        document.getElementById(idErr).innerText = "Mật khẩu phải từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)"
        return false
    }
}

function kiemTraLich(idErr, value) {
    const re = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    if (re.test(value)) {
        document.getElementById(idErr).innerText = ""
        return true
    } else {
        document.getElementById(idErr).innerText = "Không đúng định dạng mm/dd/yyyy"
        return false
    }
}

function kiemTraChucVu(idErr, value) {
    if (value == "Chọn chức vụ") {
        document.getElementById(idErr).innerText = "Chức vụ không hợp lệ"
        return false
    } else {
        document.getElementById(idErr).innerText = ""
        return true
    }
}

function kiemTraNumber(min, max, idErr, value) {
    const re = /^\d*(\.\d+)?$/
    if (re.test(value) && value >= min && value <= max) {
        document.getElementById(idErr).innerText = ""
        return true
    } else {
        document.getElementById(idErr).innerText = `Nhập giá trị từ ${min} đến ${max}`
        return false
    }
}

function kiemTraChuOnly(idErr, value) {
    const re = /^\d+$/
    var demKySo = 0
    for (var i = 0; i < value.length; i++) {
        if (re.test(value[i])) {
            demKySo++
        }
    }
    if (demKySo > 0) {
        document.getElementById(idErr).innerText = "Tên phải là chữ"
        return false
    } else {
        document.getElementById(idErr).innerText = ""
        return true
    }
}