function mergeSort(arr){
    if(arr.length===1){
        return arr
    }
    let center=Math.round(arr.length/2)
    let left=arr.slice(0,center);
    let right=arr.slice(center);
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let result=[];
    while(left.length && right.length){
        if(left[0]<right[0])
        {
            result.push(left.shift())
        }
        else
        {
            result.push(right.shift())
        }
    }
    return [...result,...right,...left]
}
let arr=[2,5,3,6,1,0,4,8,9]
console.log(mergeSort(arr))