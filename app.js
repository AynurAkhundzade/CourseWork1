const button = document.querySelector('.btn');
const form = document.querySelector('.form');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const data = new FormData(form);
    
  if(data.getAll){
    alert(`${data.get('name')} ${data.get('surname')},  Your tickets are ready. You can get tickets from our shop`);
  }else{
    alert("Please enter your information right");
  }
  
});
