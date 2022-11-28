---
title: Bracket Matcher
---

# Bracket Matcher

## 解答


### 實作

:::: code-group
::: code-group-item c++

``` cpp
#include <iostream>
#include <string>
using namespace std;

int BracketMatcher(string str) {
  
  // code goes here  
  int res=0;
  for(auto x : str){
    if(x=='(') res++;
    else if(x==')') res--;
    
    if(res<0) return 0;
  }
  return res==0 ? 0 : 1 ;

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
