function sum(){

let array1 = [[19, 80, 1],
             [44, 21, 4],
             [27, 54, 3]]

let array2 = [[91, 10, 8],
             [44, 2, 14],
             [72, 43, 15]]

let result = [[0, 0, 0],
             [0, 0, 0],
             [0, 0, 0]]

let res = document.getElementById("res")


for(let x=0; x<array1.length&array2.length; x++){
    for(let y=0; y<array1.length&array2.length; y++){
        result[x][y] = array1[x][y] + array2[x][y]
    }
}

for(x=0; x<array1.length&array2.length; x++){
    res.innerHTML += "[&nbsp;"
    for(y=0; y<array1.length&array2.length; y++){
        res.innerHTML += result[x][y] + "&nbsp;"
       
    }
    res.innerHTML += "] <br>" 
}
}