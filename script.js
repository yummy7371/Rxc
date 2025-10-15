// Page navigation
const exploreBtn = document.getElementById('exploreBtn');
const doneBtn = document.getElementById('doneBtn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const uidInput = document.getElementById('uidInput');
const timerDiv = document.getElementById('timer');
const showUIDDiv = document.getElementById('showUID');
const gameCheckDiv = document.getElementById('gameCheck');

exploreBtn.addEventListener('click', () => {
  page1.classList.remove('active');
  page2.classList.add('active');
});

doneBtn.addEventListener('click', () => {
  const uid = uidInput.value.trim();
  if(uid === ""){
    alert("Please enter UID!");
    return;
  }

  page2.classList.remove('active');
  page3.classList.add('active');

  let countdown = 5;
  timerDiv.textContent = countdown;
  showUIDDiv.textContent = "";
  gameCheckDiv.textContent = "";

  const interval = setInterval(() => {
    countdown--;
    timerDiv.textContent = countdown;
    if(countdown <= 0){
      clearInterval(interval);
      timerDiv.textContent = "Done!";
      showUIDDiv.textContent = "UID: " + uid;
      gameCheckDiv.textContent = "Check your game";
    }
  }, 1000);
});

// Animated light purple particles
const canvas = document.getElementById('animatedBG');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const particles = [];
const particleCount = 150;

for(let i=0;i<particleCount;i++){
  particles.push({
    x: Math.random()*width,
    y: Math.random()*height,
    size: Math.random()*3+1.5,
    speedX: Math.random()*1-0.5,
    speedY: Math.random()*1-0.5,
    color: `rgba(200,150,255,0.8)`
  });
}

function animate(){
  ctx.clearRect(0,0,width,height);
  particles.forEach(p=>{
    ctx.fillStyle=p.color;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if(p.x>width) p.x=0;
    if(p.x<0) p.x=width;
    if(p.y>height) p.y=0;
    if(p.y<0) p.y=height;
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize',()=>{
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});