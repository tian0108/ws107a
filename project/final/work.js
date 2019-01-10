        var i = 0
        var M =new Array() 
        function work(option){
          var table = document.getElementById('table') 
          var sum =document.getElementById('sum')
          // var index =tableObj.rows.length
          // var tableRow = tableObj.insertRow(index)
           if(option === "redtea"){
              table.innerHTML = table.innerHTML + "<tr id ='tr"+i+"'><td>紅茶</td><td id='one"+i+"'>20</td><td><input id='i"+i+"' type='Text' value='1'></td><td id='price"+i+"'>20</td><td><button onclick='deleteRow(this)'>刪除</button></td></tr>"
              i++
              M.push("20")
             sum.innerText=parseInt(sum.innerText)+parseInt("20")
           }
           if(option === "greentea"){
            table.innerHTML = table.innerHTML + "<tr><td>綠茶</td><td id='one"+i+"'>25</td><td><input id='i"+i+"' type='Text' value='1'></td><td id='price"+i+"'>25</td><td><button onclick='deleteRow(this)'>刪除</button></td></tr>"
            i++
            M.push("25")
            sum.innerHTML=parseInt(sum.innerText)+parseInt("25")
           }
           if(option === "tea"){
            table.innerHTML = table.innerHTML + "<tr><td>青茶</td><td id='one"+i+"'>25</td><td><input id='i"+i+"' type='Text' value='1'></td><td id='price"+i+"'>25</td><td><button onclick='deleteRow(this)'>刪除</button></td></tr>"
            i++
            M.push("25")
            sum.innerText=parseInt(sum.innerText)+parseInt("25")
           }
           if(option === "honey"){
            table.innerHTML = table.innerHTML + "<tr><td>蜜茶</td><td id='one"+i+"'>30</td><td><input id='i"+i+"' type='Text' value='1'></td><td id='price"+i+"'>30</td><td><button onclick='deleteRow(this)'>刪除</button></td></tr>"
            i++
            M.push("30")
            sum.innerHTML=parseInt(sum.innerText)+parseInt("30")
           }
           if(option === "ol3"){
            table.innerHTML = table.innerHTML + "<tr><td>阿里山烏龍茶</td><td id='one"+i+"'>35</td><td><input id='i"+i+"' type='Text' value='1'></td><td id='price"+i+"'>35</td><td><button onclick='deleteRow(this)'>刪除</button></td></tr>"
            i++
            M.push("35")
            sum.innerHTML=parseInt(sum.innerText)+parseInt("35")
           }
           if(option === "tp"){
            table.innerHTML = table.innerHTML + "<tr><td>炭培烏龍茶</td><td id='one"+i+"'>35</td><td><input id='i"+i+"' type='Text' value='1'></td><td id='price"+i+"'>35</td><td><button onclick='deleteRow(this)'>刪除</button></td></tr>"
            i++
            M.push("35")
            sum.innerHTML=parseInt(sum.innerText)+parseInt("35")
           }
           if(option === "fire"){
            table.innerHTML = table.innerHTML + "<tr><td>烤茶</td><td id='one"+i+"'>40</td><td><input id='i"+i+"' type='Text' value='1'></td><td id='price"+i+"'>40</td><td><button onclick='deleteRow(this)'>刪除</button></td></tr>"
            i++
            M.push("40")
            sum.innerHTML=parseInt(sum.innerText)+parseInt("40")
           }
           if(option === "ice"){
            table.innerHTML = table.innerHTML + "<tr><td>冰淇淋紅茶</td><td id='one"+i+"'>45</td><td><input id='i"+i+"' type='Text' value='1'></td><td id='price"+i+"'>45</td><td><button onclick='deleteRow(this)'>刪除</button></td></tr>"
            i++
            M.push("45")
            sum.innerHTML=parseInt(sum.innerText)+parseInt("45")
           }
           if(option === "Guanyin"){
            table.innerHTML = table.innerHTML + "<tr><td>鐵觀音</td><td id='one"+i+"'>40</td><td><input id='i"+i+"' type='Text' value='1'></td><td id='price"+i+"'>40</td><td><button onclick='deleteRow(this)'>刪除</button></td></tr>"
            i++
            M.push("40")
            sum.innerHTML=parseInt(sum.innerText)+parseInt("40")
           }

           i0.addEventListener("keyup",function(event) {event.preventDefault();
            if(event.keyCode == 13){
             event.preventDefault(); 
             price0.innerHTML = eval(i0.value*one0.innerHTML)            
             var m=0 
             M[m]=price0.innerText
             total()
              }
               })
               i1.addEventListener("keyup",function(event) {event.preventDefault();
                if(event.keyCode == 13){
                 event.preventDefault(); 
                 price1.innerHTML = eval(i1.value*one1.innerHTML)
                 var m=1 
                 M[m]=price1.innerText
                 total()
                  }
                   })
                   i2.addEventListener("keyup",function(event) {event.preventDefault();
                    if(event.keyCode == 13){
                     event.preventDefault(); 
                     price2.innerHTML = eval(i2.value*one2.innerHTML)
                     var m=2 
                     M[m]=price2.innerText
                     total()
                      }
                       })
                       i3.addEventListener("keyup",function(event) {event.preventDefault();
                        if(event.keyCode == 13){
                         event.preventDefault(); 
                         price3.innerHTML = eval(i3.value*one3.innerHTML)
                         var m=3 
                         M[m]=price3.innerText
                         total()
                          }
                           })
                           i4.addEventListener("keyup",function(event) {event.preventDefault();
                            if(event.keyCode == 13){
                             event.preventDefault(); 
                             price4.innerHTML = eval(i4.value*one4.innerHTML)
                             var m=4 
                             M[m]=price4.innerText
                             total()
                              }
                               })
                               i5.addEventListener("keyup",function(event) {event.preventDefault();
                                if(event.keyCode == 13){
                                 event.preventDefault(); 
                                 price5.innerHTML = eval(i5.value*one5.innerHTML)
                                 var m=5 
                                 M[m]=price5.innerText
                                 total()
                                  }
                                   })
                                  }
        function total(){
          //alert("!")
          let n = 0 
          for(var i=0; i<M.length;i++) n=parseInt(n)+parseInt(M[i])
          sum.innerHTML = n
        }
        function deleteRow(r){
          // alert("!")
          var i=r.parentNode.parentNode.rowIndex
          document.getElementById('table').deleteRow(i)
        }
        
          

        
