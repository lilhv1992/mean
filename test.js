function makeLine(row) {
    var line = "";
    for (var i = 1; i < row; i++) {
      for (var j = 1; j < row; j++) {
          if(i + j >= row){
            line += "* ";
          }else{
              line+='  ';
          }
       
      }
      line += "\n";
    }
    return line
  }
  console.log(makeLine(8));

  function tamgiac(row,col){
      var line ='';
      for(var i= 0; i<row; i++){
          var arr = [];
          var t = Math.round(9/2);
          var from = t-i;
          var to = t + i;
          for(var be = from;be <=to;be++ ){
              arr.push(be);
              
          }
          console.log(arr);
          for(var j=1;j<=col;j++){
          //  for(var a =0;a<arr.length;a++){
                  
               if(arr.indexOf(j)!=-1){
                line +="* ";
               }else{
                line +='  ';
               }
                    
                
           // }
          }
          line+="\n";
      }
      return line;
  }
  console.log(tamgiac(5,9));
  function tamgiacnghien(row,col){
      var line = '';
      var tmp = Math.round(row/2);
      for(var i = 0;i<=row;i++){
        var arr =[];
          if(tmp>=i){
              var from = tmp - i;
          }else{
              
              var from = i -tmp ;
             // console.log(from);
          }
        
        for(var a = from;a<tmp;a++){
            arr.push(a);
        }
        console.log(arr); 
          for(var j = 0;j<col;j++){
            if(arr.indexOf(j)!=-1){
                line +="* ";
               }else{
                line +='  ';
               }
          }
          line+="\n";
      }
      return line;
  }
console.log(tamgiacnghien(9,5));
function hinhthoi(row,col){
    var line = '';
    var row_tmp = row;
    for(var i= 0; i<row;i++){
        var arr=[];
        var tmp = Math.round(row/2);
        if(tmp>i){
            var from = tmp - i;
            var to = tmp + i;
        }else{
                var from = i - tmp + 2;
            //console.log(from);
           
            var to = row_tmp-1;
            row_tmp--;
        }

        for(var be = from;be<=to;be++){
            arr.push(be);
        }
        console.log(arr);
        for(var j = 1;j<=col;j++){
            if(arr.indexOf(j) != -1){
                line +="* ";
            }else{
                line+='  ';
            }
        }
        line+="\n";
    }
    return line;
}
console.log(hinhthoi(5,5));