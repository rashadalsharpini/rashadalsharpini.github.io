---
title: CP/Phase 1/Chapter 1
feed: Post
date: 2025-08-21
---

#### run program
```bash
# compile code
g++ main.cpp -o main
# run code
./main
```

---

#### Input and Output
Input and Output is sometimes a bottleneck in the program. The following
lines at the beginning of the code make input and output more efficient.
```cpp
#define fastio                           \
	ios_base::sync_with_stdio(false);           \
	cin.tie(NULL);
```

---

Note that the newline "\n" works faster than endl, because endl always
causes a flush operation.

---

if the amount of date is unknown, the following loop could be useful
```cpp
while(cin >> x)
	//code
```
This loop reads elements from the input one after another, until there is no more date available in the input.
#### Integers
The most used integer type in competitive programming is int, which is a 32-bit
type with a value range of

{% raw %}
$$[-2^{31} to 2^{31}-1]or about[-2.10^9 to 2.10^9]$$
{% endraw %}


if the type int is not enough, the 64-bit type long long can be used it has a
value range of

{% raw %}
$$[-2^{63} to 2^{63} - 1] -1 or about [-9.10^{18} to 9.10^{18}]$$
{% endraw %}

g++ compiler also provides a 128-bit `__int128_t`
with a value range of

{% raw %}
$$[-2^{127} to 2^{127} - 1] or about [-10^{38} to 10^{38}]$$
{% endraw %}

However, this type is not available in all contest systems.

---
#### Modular arithmetic
```cpp
int MOD = 1e9 + 7;
```
Sometimes, the answer to a problem is a very large number but it is enough to output it "modulo m".

---

#### Mathematics
Sum formulas

{% raw %}
$$ \sum_{i=1}^{n} i^k $$
{% endraw %}


{% raw %}
$$\sum_{i=1}^n x = 1+2+3+....+n=n(n+1)/2$$
{% endraw %}


{% raw %}
$$\sum_{x=1}^n x^2 = 1^2+2^2+3^2+...+n^2 = n(n+1)(2n+1) / 6$$
{% endraw %}


#### logic
the value of a logical expression is either true or false. the most important operators are
negation(not), conjunction(and), disjunction(or), implication(IF...THEN) and equivalence(IF AND ONLY IF).
##### implication(IF...THEN):
p -> q
is false only if p is true and q is false. Otherwise, it is true
```cpp
bool implication(bool p, bool q) { return !p || q; }
```
##### equivalence(IF AND ONLY IF):
p <-> q
it's true if both of them are true or both of them or false
