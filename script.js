console.log('dsa1');

document.querySelector('#selBtn').onclick = () => {
  console.log('dsa');
    let radio = document.querySelectorAll('input[name="size"]');
      for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
          console.log(radio[i].value);
              }
           }
  }