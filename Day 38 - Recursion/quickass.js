// console.log(partition(arr,0,4))
arr=[6,2,5,3,9];

n=arr.length;

function partition(arr,start,end){
    pivot=arr[start];
    console.log('pivot '+pivot)
    var i=start;
    var j=end;
    while(i<=j){
        while(arr[i]<pivot){
            i++
        }
        while(arr[j]>pivot){
            j--
        }
        if(i<=j){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp
            i++;
            j--
        }
        console.log(arr)
    }
    return i;
}


function quicksort(arr,start,end){
            
    index=partition(arr,start,end)
    console.log("index"+index)
    if(start<index-1){
        console.log(start,index-1)
         quicksort(arr,start,index-1)
    }
       
    if(index<end){
        console.log(index,end)
        quicksort(arr,index,end)
    }

return arr
}

console.log(arr)
quicksort(arr,0,n-1)
console.log(arr)
