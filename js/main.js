Below is a copy of main.js which is a direct copy of the working index file ..but it also houses the intitial gameboard model
and the default position of the pieces when the game is instantiated.
pawn=bp,wp
rook=br,wr
knight=bk,wk
bishop=bb,wb
queen=bQ,wQ
king=bK,wK

var board = initial();
applyMove: function(from, to){

}

//this is my array setup for the default position chessboard. I was unable to move beyond this point not b/c
//a lack of understanding conceptually but rather my blocker rests in my lack of javascript knowledge                                                            
[
["br","bk","bb","bQ","bK","bb","bk","br"]
["bp","bp","bp","bp","bp","bp","bp","bp"]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["wp","wp","wp","wp","wp","wp","wp","wp"]
["wr","wk","wb","wQ","wK","wb","wk","wr"]

]
<!DOCTYPE html>
<html>
 <head>

   <meta charset="utf-8">
   <link rel="stylesheet" type="stylesheet" href="css/chssbrd-styles.css" href="controllers.js">

   <title>ASSIGNMENT 19 CHESSBOARD</title>

 </head>
 <body>
   <table class="board">

 <caption>CHESSBOARD-Assignment 19</caption>
   <thead>
     <tr>
       <th>Markers</th>
       <th>A</th>
       <th>B</th>
       <th>C</th>
       <th>D</th>
       <th>E</th>
       <th>F</th>
       <th>G</th>
       <th>H</th>


     </tr>
   </thead>
   <tbody>
     <tr>

       <th>1</th>
       <td class="grey br"  id="A1"></td>
       <td class="Yellow bk"id="B1"></td>
       <td class="grey bb"  id="C1"></td>
       <td class="Yellow bK"id="D1"></td>
       <td class="grey bQ"  id="E1"></td>
       <td class="Yellow bK"id="F1"></td>
       <td class="grey bb"  id="G1"></td>
       <td class="Yellow br"id="H1"></td>

    </tr>
     <tr>
       <th>2</th>
       <td class="Yellow bp"id="B1"></td>
       <td class="grey bp"  id="B2"></td>
       <td class="Yellow bp"id="B3"></td>
       <td class="grey bp"  id="B4"></td>
       <td class="Yellow bp"id="B5"></td>
       <td class="grey bp"  id="B6"></td>
       <td class="Yellow bp"id="B7"></td>
       <td class="grey bp"  id="B8"></td>
     </tr>
     <tr>
       <th>3</th>
       <td class="grey"    id="C1"></td>
       <td class="Yellow"  id="C2"></td>
       <td class="grey"    id="C3"></td>
       <td class="Yellow"  id="C4"></td>
       <td class="grey"    id="C5"></td>
       <td class="Yellow"  id="C6"></td>
       <td class="grey"    id="C7"></td>
       <td class="Yellow"  id="C8"></td>
     </tr>
     <tr>
       <th>4</th>
       <td class="Yellow"  id="D1"></td>
       <td class="grey"    id="D2"></td>
       <td class="Yellow"  id="D3"></td>
       <td class="grey"    id="D4"></td>
       <td class="Yellow"  id="D5"></td>
       <td class="grey"    id="D6"></td>
       <td class="Yellow"  id="D7"></td>
       <td class="grey"    id="D8"></td>
     </tr>
     <tr>
       <th>5</th>
       <td class="grey"    id="E1"></td>
       <td class="Yellow"  id="E2"></td>
       <td class="grey"    id="E3"></td>
       <td class="Yellow"  id="E4"></td>
       <td class="grey"    id="E5"></td>
       <td class="Yellow"  id="E6"></td>
       <td class="grey"    id="E7"></td>
       <td class="Yellow"  id="E8"></td>
     </tr>
     <tr>
       <th>6</th>
       <td class="Yellow"  id="F1"></td>
       <td class="grey"    id="F2"></td>
       <td class="Yellow"  id="F3"></td>
       <td class="grey"    id="F4"></td>
       <td class="Yellow"  id="F5"></td>
       <td class="grey"    id="F6"></td>
       <td class="Yellow"  id="F7"></td>
       <td class="grey"    id="F8"></td>
     </tr>
     <tr>
       <th>7</th>
       <td class="grey wp"  id="G1"></td>
       <td class="Yellow wp"id="G2"></td>
       <td class="grey wp"  id="G3"></td>
       <td class="Yellow wp"id="G4"></td>
       <td class="grey wp"  id="G5"></td>
       <td class="Yellow wp"id="G6"></td>
       <td class="grey wp"  id="G7"></td>
       <td class="Yellow wp"id="G8"></td>
     </tr>
     <tr>
       <th>8</th>
       <td class="Yellow wr"id="H1"></td>
       <td class="grey wk"  id="H2"></td>
       <td class="Yellow wb"id="H3"></td>
       <td class="grey wQ"  id="H4"></td>
       <td class="Yellow wK"id="H5"></td>
       <td class="grey wb"  id="H6"></td>
       <td class="Yellow wk"id="H7"></td>
       <td class="grey wr"  id="H6"></td>

     </tr>
        </table>
     </tbody>
   </body>
</html>


  <button id="retreat" type="button" class="button">Retreat</button>
  <button id="reset" type="button" class="button">Reset</button>
  <button id="advance" type="button" class="button" >Advance</button>

 </body>

 </html>



