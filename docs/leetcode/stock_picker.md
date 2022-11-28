---
title: stock-picker
---


## 解答


### 實作

:::: code-group
::: code-group-item c++

``` cpp


class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int curmin=numeric_limits<int>::max();
        int curmax=0;
        for(auto x : prices){
            curmin=min(curmin,x);
            curmax=max(curmax,x-curmin);
        }
        return curmax;
        
    }
};


```

:::
::: code-group-item c++
``` cpp


```

:::
::: code-group-item python

``` python
   
```
::::

### 分析
- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(1)$  
