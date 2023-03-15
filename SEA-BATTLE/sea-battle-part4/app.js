let seaDiv = document.querySelector('.sea')

for(let i=0; 1<= 9; i++){
  seaDiv.innerHTML += `
          <div class="layer"> <!-- layer ${i} -->
          <div class="wave"></div>
        </div> 
        `
}