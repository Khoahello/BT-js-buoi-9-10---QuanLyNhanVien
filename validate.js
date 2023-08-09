function kiemTraRong(idErr, value) {
    if (value.trim().length == 0) {
        document.getElementById(idErr).innerText = "Nội dung này không được để trống"
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

// function kiemTraMatKhau(idErr, value) {
//     const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/
//     console.log(re.test(value));
//     if (re.test(value)) {
//         document.getElementById(idErr).innerText = ""
//         return true
//     } else {
//         document.getElementById(idErr).innerText = "Mật khẩu không hợp lệ"
//         return false
//     }
// }