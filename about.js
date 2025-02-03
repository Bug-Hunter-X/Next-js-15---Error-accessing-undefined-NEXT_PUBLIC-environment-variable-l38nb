```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if you try to access a property from the context
  // that does not exist
  console.log(process.env.NEXT_PUBLIC_MY_VAR);
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```