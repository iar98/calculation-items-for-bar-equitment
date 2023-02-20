    document.querySelector("form").addEventListener("submit", function(e) {e.preventDefault();
    var input1 = document.getElementById("floatingbarang").value;
    var input2 = document.getElementById("floatingitem").value;
    var input3 = document.getElementById("floatingPack").value;
    const demo = document.querySelector('#demo');
        
    if (!input1 || !input2 || !input3) {
      alert("Anda belum mengisikan sesuatu, silahkan isikan ulang kembali.");
    } else if (input1 == 0) {
      alert("Silahkan isikan angka pada kolom yang tersedia.");
    } else if (input2 == 0) {
        alert("Silahkan isikan angka pada kolom yang tersedia.");
    } else if (input3 == 0) {
        alert("Silahkan isikan angka pada kolom yang tersedia.");
      } else {
          const result = (parseFloat(input2) * parseFloat(input3)) / parseFloat(input1);
          demo.innerHTML = `kevin, berikut ini jumlah perkiraan barang yang lu butuhin : ${result} `;
      }
      
  });