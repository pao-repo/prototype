function qrAlert(qrValue) {
  if (document.querySelector('.qr-alert')) {
    return;
  }
  const bg = document.createElement('div');
  const con = document.createElement('div');
  const header = document.createElement('header');
  const title = document.createElement('b');
  const close = document.createElement('b');
  const alertCon = document.createElement('div');
  
  bg.className = "qr-alert";
  con.className = "alert-con";
  header.className = "alert-header";
  title.className = "alert-title";
  close.className = "alert-close";
  alertCon.className = "alert-view";
  
  title.innerText = "QR Code";
  close.innerText = "Close";
  
  document.body.appendChild(bg);
  bg.appendChild(con);
  con.appendChild(header);
  header.appendChild(title);
  header.appendChild(close);
  con.appendChild(alertCon);
  
  fetch('../component/qrAlert.html')
  .then(res => res.text())
  .then(data => {
    alertCon.innerHTML = data;
    
    const qr = alertCon.querySelector('.qr-code');
    const text = alertCon.querySelector('.qr-link');
    qr.src += qrValue;
    text.innerText = qrValue;
  })
  
  close.addEventListener('click', function() {
    bg.classList.remove('show');
    con.classList.remove('show');
    setTimeout(() => {
      bg.remove();
    }, 300);
  });
  
  setTimeout(() => {
    bg.classList.add('show');
    con.classList.add('show');
  }, 10);
}