//快排
function quickSort (arr , left ,right) {

    var len = arr.length,
        partitionIndex,
        left = typeof left == "number" ? left: 0,
        right = typeof  right == "number" ? right:len - 1;

    if(left < right){
        partitionIndex = partition(arr,left,right);
        quickSort(arr , left ,partitionIndex -1);
        quickSort(arr,partitionIndex + 1,right);
    }

    return arr ;
}
//排序的实际部分
function partition(arr, left, right) {

    var pivot = left,
        index = pivot + 1;
    for (var i = index;i <= right;i++){
        if(arr[i] < arr[pivot]){
            swap(arr,index, i);
            index ++ ;
        }
    }

    swap(arr,pivot,index -1);
    return index - 1;
}
//位置转换
function swap(arr,i,j) {
    var temp = arr[i];
    arr[j] = arr[i];
    arr[i] = temp;
}