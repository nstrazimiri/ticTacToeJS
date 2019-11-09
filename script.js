"use strict";

// Assignment 6: Tic Tac Toe
// Your name here
const gameTable=document.querySelector("table>tbody");
const squares=gameTable.children;
let player1=1;
let player2=2;
let currentPlayer=1;
let gameFinished=false;
let chars=["X","O"];
let selected={"X":[],"O":[]};
let combinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [0,4,8]
];
let info=document.querySelector("#info");
//info.innerHTML=`Player ${currentPlayer} turn`;
let k=0;
document.querySelector("#playBtn").addEventListener("click",function(){
    document.querySelector("table").classList.remove("hide");
    document.querySelector(".players").classList.add("hide");
	selected["X"].playerName=document.querySelector("#pl1").value;
	selected["O"].playerName=document.querySelector("#pl2").value;
    info.innerHTML=`${selected[chars[currentPlayer-1]].playerName}'s turn`;	
		for(let i=0;i<squares.length;i++){
			let td=squares[i].children;
			for(let j=0;j<td.length;j++){
				td[j].addEventListener("click", function(){
					if(this.className!=""||gameFinished)return;

					selected[chars[currentPlayer-1]].push(parseInt((td[j].id).charAt(1)));
					td[j].className=chars[currentPlayer-1]+"-marker";
					
						k++;
						if(k>2){
							for(let c=0;c<8;c++){
								if(arrayEquals(selected[chars[currentPlayer-1]],combinations[c])){
									for(let w=0;w<3;w++){
										document.querySelector("#c"+combinations[c][w]).style="background-color:lightgreen";
									}
									//info.innerHTML=`Player ${currentPlayer} with ${chars[currentPlayer-1]} Won!!`;
									info.innerHTML=`${selected[chars[currentPlayer-1]].playerName} Won!!`;
									gameTable.style="border:5px solid lightgreen;";
									gameFinished=true;
                                    document.querySelector("#plagain").classList.remove("hide");
									return;
								}
							}
						}
						if(k==9){
							info.innerHTML=`It's a draw. Refresh the page to play again`;
							document.querySelector("#plagain").classList.remove("hide");
							return;
						}
					((currentPlayer==1)?currentPlayer=2:currentPlayer=1);
					info.innerHTML=`${selected[chars[currentPlayer-1]].playerName}'s turn`;	
				});
			}
		}
});


function arrayEquals(sup, sub) {
    sup.sort();
    sub.sort();
    var i, j;
    for (i=0,j=0; i<sup.length && j<sub.length;) {
        if (sup[i] < sub[j]) {
            ++i;
        } else if (sup[i] == sub[j]) {
            ++i; ++j;
        } else {

            return false;
        }
    }
    return j == sub.length;
}