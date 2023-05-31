import React, { useState } from 'react';
const CounterState = () => {
const [count, setCount] = useState(0);
return (
<div>
<h1>Contador com useState</h1>
<p>Count: {count}</p>
<div>
<button type="button"

onClick={() => {setCount(count => count + 1)}}>
+
</button>
<button type="button"

onClick={() => {setCount(count => count - 1)}}>
-
</button>
</div>

</div>
);
};
export default CounterState;