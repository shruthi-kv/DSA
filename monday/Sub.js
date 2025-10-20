// const arr = [1,2,3,4,5,6,7];

// function subArray(arr){

//     for(let i=0;i<arr.length;i++){
       
//         for(let j=i;j<arr.length;j++){
//             let sub =[];
//             for(let k=i;k<=j;k++){
//                  sub.push(arr[k])
//             }
//              console.log(sub)
//         }
           
//     }

// }

// subArray(arr)



const arr = [1,2,3,4,5,6,7];

function subArray(arr){
    let mainSubarray =[]
    for(let i=0;i<arr.length;i++){
       
        for(let j=i;j<arr.length;j++){
            let sub =[];
            for(let k=i;k<=j;k++){
                 sub.push(arr[k])
            }
            mainSubarray.push(sub)
            
        }
           

    }

     console.log(mainSubarray)

}

subArray(arr)


