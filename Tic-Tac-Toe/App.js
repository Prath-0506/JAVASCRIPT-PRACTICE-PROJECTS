let boxs = document.querySelectorAll(".box");
let Msg = document.querySelector("#msg");
let Msgcontainer = document.querySelector(".msg-container");
let NewGame = document.querySelector(".newgame-btn");
let ResetBtn = document.querySelector("#reset-btn");

let turn0=true;
let count = 0;

const WinPattern = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const ResetGame = () =>{
  turn0=true;
  count=0;
  enableBoxs();
  Msgcontainer.classList.add("hide");
}
boxs.forEach((box) => {
  box.addEventListener("click", () =>{
    if(turn0){
      box.innerText = "O";
      turn0=false;
    }
    else{
      box.innerText = "X";
      turn0=true;
    }
    box.disabled = true;
    count++;

    let Iswinner = checkWinner();

    if(count === 9 && !Iswinner){
        GameDraw();
    }
    });
  });

  const GameDraw = () =>{
    Msg.innerText=`Game is Draw`;
    Msgcontainer.classList.remove("hide");
    disableBoxs();
  }
  const enableBoxs = () =>{
    for(let box of boxs){
      box.disabled=false;
      box.innerText="";
    }
  }
  const disableBoxs = () =>{
    for(let box of boxs){
      box.disabled=true;
    }
  };

const showWinner = (winner) =>{
  Msg.innerText =`Congragulations Winner ${winner}`;
  Msgcontainer.classList.remove("hide");
  disableBoxs();
};

  const checkWinner = () =>{
    for(let pattern of WinPattern){
      let posval1 = boxs[pattern[0]].innerText;
      let posval2 = boxs[pattern[1]].innerText;
      let posval3 = boxs[pattern[2]].innerText;
    
    if(posval1 != "" && posval2 !="" && posval3 != ""){
      if(posval1 === posval2 && posval2 === posval3){
        showWinner(posval1);
        return true;
      }
    }
  }

  } 
NewGame.addEventListener("click",ResetGame);
ResetBtn.addEventListener("click",ResetGame);