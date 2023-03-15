
//Array of Objects
// HW1:
    // add the "explosion " property to each layer
    // and using an if render the explosion only when the torpedo is layer as the ship
// HW2*:
// using sass + loop/ html + js + loop
// make so the radar has 10 divisions
let layers = [
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
    {
    ship: false,
    torpedo: false,
    explosion: false
  },
    {
    ship: false,
    torpedo: false,
    explosion: false
  },
    {
    ship: false,
    torpedo: false,
    explosion: false
  },
    {
    ship: true,
    torpedo: true,
    explosion: false
  },
    {
    ship: false,
    torpedo: false,
    explosion: false
  },
    {
    ship: false,
    torpedo: false,
    explosion: false
  },
    {
    ship: false,
    torpedo: false,
    explosion: false
  },
]

const render = () => {
let seaDiv = document.querySelector('.sea')

for(let i=0; i<=9; i++){

  let objects = ``
  
  if (layers[i].ship) {
    objects += `
      <div class="ship">
      
      <div class="base center">
        <div class="base-top"></div>
      </div>
    
      <div class="gun-1 center">
        <div class="gun-1-element"></div>
      </div>
      <div class="gun-2 center">
        <div class="gun-2-element"></div>
      </div>
    
      <div class="middle center">
        <div class="middle-element-1"></div>
        <div class="middle-element-2"></div>
      </div>
      <div class="gun-3 center">
        <div class="gun-3-element"></div>
      </div>
    
      <div class="top-1 center">
        <div class="top-1-element-1"></div>
        <div class="top-1-element-2"></div>
      </div>
    
      <div class="top-2 center">
        <div class="top-base">
          <div class="top-base-element-1"></div>
        </div>

        <div class="top-element-middle">
          <div class="top-element-top"></div>
        </div>
      </div>
    
    </div>
    `
  }

  if( layers[i].torpedo){
    objects += `
      <div class="torpedo reverse">
      <div class="head center"></div>
      <div class="body center"></div>
      <div class="tail-h center"></div>
      <div class="tail-v center"></div>
      <div class="tail center"></div>
    `
  }

  if( layers[i].ship == true & layers[i].torpedo == true){
    objects += `
      <div class="explosion">
        <div class="fire-bottom-sm"></div>
        <div class="fire-bottom-md"></div>
      </div>
    `
  }

  seaDiv.innerHTML += `
        <div class="layer"> <!-- layer ${i} -->
        ${objects}
        <div class="wave"></div>
      </div>
  `
}
}

render()