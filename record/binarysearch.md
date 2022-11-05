##

find a `value` that bigger than or equal to the target value in a sorted array

```python
mid = (left+right) >> 1

if target > arr[mid]:
  left = mid + 1
else :
  right = mid

return left
```

```python
mid = (left+right) >> 1

if target < arr[mid] :
    right = mid  
else :
    left = mid + 1

return left
```
