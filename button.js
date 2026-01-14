const button = document.getElementById('button1');
const content = document.getElementById('content');

let countdown; 
let count = 11; 

function updateCalculation(){
  if (count > 1 ) {
    count--;
    content.textContent = count;
  } else { 
      content.textContent = 'BLAST OFF!';
      clearInterval(countdown);
      countdown = null;
      count = 11;
    
  }
};

function countDown(){
  if (!countdown) {
    countdown = setInterval(updateCalculation, 1000);
  }

}


button.addEventListener('click', countDown)