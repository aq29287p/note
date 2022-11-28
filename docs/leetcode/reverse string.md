---
title: Reverse string
---

# Reverse string

## 解答


### 實作

:::: code-group
::: code-group-item c++

``` cpp
string FirstReverse(string str) { 

  for (int i=0 ; i<str.size()/2 ; ++i)
    std::swap(str[i],str[str.size()-1-i]);
  return str; 
            
}

```

:::
::: code-group-item c++
``` cpp
string FirstReverse(string str) { 
  int L= str.size();
  for (int i=0 ; i<L/2 ; ++i){
    //move 淺拷貝 temp指向內容 並把 str[i] 指向null
    char temp(std::move(str[i]));
    str[i] = std::move(str[L-1-i]);
    str[L-1-i] = std::move(temp);
  }
  return str; 
            
}

```

:::
::: code-group-item python

``` python
   
```
::::

### 分析
- 時間複雜度：$\mathcal{O}(n/2)$
- 空間複雜度：$\mathcal{O}(1)$  
