---
title: template
---

# template

## 解答


### 實作

:::: code-group
::: code-group-item c++

``` cpp
//prefixsum + hashmap
//560. 和为 K 的子数组：https://leetcode.cn/problems/subarray-sum-equals-k/
//1248. 统计「优美子数组」: https://leetcode.cn/problems/count-number-of-nice-subarrays/
//974. 和可被 K 整除的子数组：https://leetcode.cn/problems/subarray-sums-divisible-by-k/
//523. 连续的子数组和：https://leetcode.cn/problems/continuous-subarray-sum/
class Solution {
public:
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
};

```
:::
::: code-group-item c++
``` cpp

```

:::


::::

### 分析
