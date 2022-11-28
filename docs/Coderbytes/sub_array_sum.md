---
title: subarray_sum
---

# subarray_sum

## 解答


### 實作

:::: code-group
::: code-group-item c++

``` cpp
#include <iostream>
#include <string>

#include <bits/stdc++.h>
using namespace std;

string ArrayChallenge(int arr[], int arrLength) {
        
        int k = *max_element(arr, arr + arrLength);
        unordered_map<int, int> mp;
        mp[0] = 1;
        int count = 0, pre = 0;
        for (int i=0;i<arrLength;i++) {
            int x=arr[i];
            if(x==k) continue;
            pre += x;
            if (mp.find(pre - k) != mp.end()) {
                count += mp[pre - k];
                return "true";
            }
            mp[pre]++;
            
        }
        return "false";

}
```
:::
### 分析
- 時間複雜度：$\mathcal{O}(n^{2})$
- 空間複雜度：$\mathcal{O}(1)$  
::: code-group-item c++
``` cpp
string ArrayChallenge(int arr[], int arrLength) {
        for (int start = 0; start < arrLength; ++start) {
            int sum = 0;
            for (int end = start; end >= 0; --end) {
                sum += arr[end];
                if (sum == k) {
                    return "true";
                }
            }
        }
        return "false";
    }

```

:::
::: code-group-item python

``` python
int subarraySum(vector<int>& nums, int k) {
        unordered_map<int,int>umap={{0,1}};  //初始值根据题意进行改变
        int ans=0,sum=0;

        for(auto& a:nums){
            sum+=a;
            int cur=sum-k;    //cur值根据题意进行改变
            if(umap.count(cur)){
                ans+=umap[cur];
            }
            umap[sum]++;  //umap[cur或者sum]根据题意改变
        }
    return ans;
    }
   
```
::::

### 分析
- 時間複雜度：$\mathcal{O}(n^{2})$
- 空間複雜度：$\mathcal{O}(1)$  
