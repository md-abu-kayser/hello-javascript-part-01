var a = isNaN("11");
var a = isNaN(2 - 10);

// Explain my Answers:
// Here is the result:
var a = isNaN('11'); 
// false
Reason: `'11'` is a string, but it can be converted into a valid number, so it is not NaN.

---

```js
var a = isNaN(2 - 10);
```

This also returns **false**.

Reason: `2 - 10` gives `-8`, and `-8` is a valid number, so it is **not NaN**.

---

So both results are:

```js
false
false
```

A small rule to remember: `isNaN()` checks whether a value is **not a real number** after conversion.
For `'11'` and `2 - 10`, both become valid numbers, so the answer is `false`.
