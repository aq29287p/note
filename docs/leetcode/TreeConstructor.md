---
title: Tree Constructor
---


## 解答


### 實作

:::: code-group
::: code-group-item c++

``` cpp
string TreeConstructor(string strArr[], int arrLength) {
  std::unordered_map <int, int> parent;
  std::unordered_map <int, int> child;
  for (int i = 0; i < arrLength; i++){
    string s1 = strArr[i];
    int camm = s1.find(",");
    int l = s1.find("(");
    int r = s1.find(")");
    int _child = stoi(s1.substr(l+1,camm-1));
    int _parent = stoi(s1.substr(camm+1,r-1-camm));
    
    child[_child]++;
    parent[_parent]++;
    if(child[_child]>1|| parent[_parent]>2)
      return "false";
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
