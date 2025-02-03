```javascript
// pages/about.js

export default function About() {
  // Check if the environment variable is defined before accessing it
  const myVar = process.env.NEXT_PUBLIC_MY_VAR || 'Default Value';
  console.log(myVar);
  return (
    <div>
      <h1>About Page</h1>
      <p>My Variable: {myVar}</p>
    </div>
  );
}
```
To completely avoid errors, define the variable in a `.env.local` file:
```
NEXT_PUBLIC_MY_VAR=MyValue
```