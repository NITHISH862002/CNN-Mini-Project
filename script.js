function mfunc() {
    var txt = document.getElementById('in').value
    var myarray = String(txt).split(' ')
    var a = ''
    for (var i = 0; i < myarray[0].length; i++) {
      var sum = 0
      for (var j = 0; j < myarray.length; j++) {
        var n = Number(myarray[j][i])
        sum += n
      }
      if (sum % 2 == 0) {
        sum = 0
      } else {
        sum = 1
      }
      a += sum.toString()
    }
    document.getElementById('inn').innerHTML="Code :"
    document.getElementById('ans').innerHTML = txt+" "+a


  }


  function xor1(a, b) {
    let result = ''
  
    let n = b.length
  
    for (let i = 1; i < n; i++) {
      if (a[i] == b[i]) {
        result += '0'
      } else {
        result += '1'
      }
    }
    return result
  }
  
  function mod2div(divident, divisor) {
    let pick = divisor.length
  
    let tmp = divident.substr(0, pick)
  
    let n = divident.length
  
    while (pick < n) {
      if (tmp[0] == '1') {
        tmp = xor1(divisor, tmp) + divident[pick]
      } else {
        let str = ''
        for (let i = 0; i < pick; i++) {
          str = str.concat('0')
        }
        tmp = xor1(str, tmp) + divident[pick]
      }
  
      pick += 1
    }
  
    if (tmp[0] == '1') {
      tmp = xor1(divisor, tmp)
    } else {
      tmp = xor1(string(pick, '0'), tmp)
    }
    return tmp
  }
  
  function encodeData(data, key) {
    let l_key = key.length
  
    let str = ''
    for (let i = 0; i < l_key - 1; i++) {
      str = str.concat('0')
    }
    console.log(str)
    let appended_data = data.concat(str)
  
    let remainder = mod2div(appended_data, key)
  
    let codeword = data + remainder
  
    document.getElementById('ans1').innerHTML = 'Remainder : ' + remainder
    document.getElementById('ans2').innerHTML =
      'Encoded Data (Data + Remainder) :' + codeword
  }
  function cfunc() {
    let data = String(document.getElementById('tbox').value)
    let key = String(document.getElementById('box').value)
    encodeData(data, key)
  }
  
   