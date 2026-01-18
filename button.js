const button = document.getElementById('button1');
const content = document.getElementById('content');

let timeValue; 
 

function updateCalculation(){
  let count = 10;
  while( count > 0){
    content.textContent = count;
    count --;
    console.log(count)
  }
      content.textContent = 'BLAST OFF!';
      clearInterval(timeValue);
      timeValue = null;
      count = 11;
};

function countDown(){
  if (!timeValue) {
    timeValue = setInterval(updateCalculation, 1000);
  }

}


button.addEventListener('click', countDown)