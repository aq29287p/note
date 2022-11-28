---
title: if_Palindrome
---

# if_Palindrome

## 解答


### 實作

:::: code-group
::: code-group-item c++

``` cpp
string StringChallenge(string str) {
  
  // code goes here  
  for(int left=0, right=str.length()-1;left<right;){
    while(str[left]) left++; 
    while(str[right]) right--;
    if(str[left]!=str[right]) return "false";
  }
  return "true";
}
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
- 時間複雜度：$\mathcal{O}(n/2)$
- 空間複雜度：$\mathcal{O}(1)$  
