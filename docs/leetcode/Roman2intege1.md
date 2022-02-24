---
title: 0013. 羅馬數字轉整數（Roman to Integer）
---

# 0013. 羅馬數字轉整數（Roman to Integer）

## 解答

### 實作

:::: code-group
::: code-group-item c++

``` cpp
class Solution {
public:
    int romanToInt(string s) {
    vector<int> roman(128);

    roman['I'] = 1;
    roman['V'] = 5;
    roman['X'] = 10;
    roman['L'] = 50;
    roman['C'] = 100;
    roman['D'] = 500;
    roman['M'] = 1000;

    int ans = 0;
    for (int i = 0; i + 1 < s.length(); ++i) {
        if (roman[s[i]] < roman[s[i + 1]]) {
        ans -= roman[s[i]];
        } else {
        ans += roman[s[i]];
        }
    }

    return ans + roman[s.back()];
    }
};
```

:::
::: code-group-item python

``` python
class Solution {
    public int romanToInt(String s) {
    int ans = 0;
    int[] roman = new int[128];

    roman['I'] = 1;
    roman['V'] = 5;
    roman['X'] = 10;
    roman['L'] = 50;
    roman['C'] = 100;
    roman['D'] = 500;
    roman['M'] = 1000;

    for (int i = 0; i + 1 < s.length(); ++i) {
        if (roman[s.charAt(i)] < roman[s.charAt(i + 1)]) {
        ans -= roman[s.charAt(i)];
        } else {
        ans += roman[s.charAt(i)];
        }
    }

    return ans + roman[s.charAt(s.length() - 1)];
    }
}
```


### 分析

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(1)$