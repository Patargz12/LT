const reversePairs = (nums) => {
    let count = 0;
    
    const mergeSort = (arr, temp, left, right) => {
        if (left >= right) return;
        
        const mid = Math.floor((left + right) / 2);
        mergeSort(arr, temp, left, mid);
        mergeSort(arr, temp, mid + 1, right);
        
        let j = mid + 1;
        for (let i = left; i <= mid; i++) {
            while (j <= right && arr[i] > 2 * arr[j]) {
                j++;
            }
            count += j - (mid + 1);
        }
        
        merge(arr, temp, left, mid, right);
    };
    
    const merge = (arr, temp, left, mid, right) => {
        let i = left, j = mid + 1, k = left;
        
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
            }
        }
        
        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];
        
        for (let i = left; i <= right; i++) {
            arr[i] = temp[i];
        }
    };
    
    const temp = new Array(nums.length);
    mergeSort(nums, temp, 0, nums.length - 1);
    return count;
};