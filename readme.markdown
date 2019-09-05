# @mcansh/next-now-base-url

> get the base url for your now.sh deployment in next.js

```tsx
import { getBaseURL } from '@mcansh/next-now-base-url';
import fetch from 'isomorphic-unfetch';

const Index: NextPage = () => <h1>Hello</h1>;

Index.getInitialProps = async ({ req }) => {
  const base = getBaseURL(req);
  const data = await fetch(`${base}/api/something`);
  return { data };
};

export default Index;
```
