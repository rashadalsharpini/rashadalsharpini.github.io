---
title: CP/Phase 1/Chapter 2
feed: show
date: 2025-08-21
---

assuming that a time limit is 1 second

| input size | required time complexity |
| ---------- | ------------------------ |
| n <= 10    | O($n!$)                  |
| n <= 20    | O($2^n$)                 |
| n <= 500   | O($n^3$)                 |
| n <= 5000  | O($n^2$)                 |
| n <= 10^6  | O($nlogn$) or O(n)       |
| n is large | O(1) or O($logn$)        |
### Maximum sub-array problem
#### algorithm 1 $n^3$
```cpp
int best = 0;
for(int i = 0;i<n;++i){
	for(int j = i;j<n;++j){
		int sum = 0;
		for(int k = a; k < b; ++k){
			sum += array[k];
		}
		best = max(best, sum);
	}
}
cout<<best<<endl;
```
#### algorithm 2 $n^2$
```cpp
int best = 0;
for(int i = 0;i<n;++i){
	for(int j = i;j<n;++j){
		int sum = 0;
		sum += array[b];
		best = max(best, sum);
	}
}
cout<<best<<endl;
```
#### algorithm 3 n
```cpp
int best = 0, sum = 0;
for(int i = 0;i < n; ++i){
	sum = max(array[k], sum+array[k]);
	best = max(best, sum);
}
cout<<best<<endl;
```

| array size n | algo 1 | algo 2 | algo 3 |
| ------------ | ------ | ------ | ------ |
| 10^2         | 0.0    | 0.0    | 0      |
| 10^3         | 0.1    | 0.0    | 0      |
| 10^4         | >10    | 0.1    | 0      |
| 10^5         | >10    | 5.3    | 0      |
| 10^6         | >10    | >10    | 0      |
| 10^7         | >10    | >10    | 0      |
The comparison shows that all algorithms are efficient when the input size is small, but larger inputs bring out remarkable difference in the running tims
of the algorithm.
