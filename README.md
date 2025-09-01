# NextJS101
Putting my stuff while learning NextJS

- [all_12_concepts](https://youtu.be/vwSlYG7hFk0?si=ofPJOSyASerIv5lc)
- [nextjs_15_yt](https://www.youtube.com/watch?v=6jQdZcYY8OY)

#### Server Components (default):
- Fetch data securely (DB queries, API calls with secrets)
- Access server-side env vars (process.env)
- Heavy computation (offloaded to server)
- Render static + dynamic HTML (streaming, SSR, SSG)
- Compose other Server + Client components
- Reduce client bundle size

#### Client Components ("use client"):
- Use React state & lifecycle hooks (useState, useEffect, useRef)
- Handle interactivity (onClick, forms, inputs, animations)
- Access browser APIs (localStorage, window, document)
- Subscribe to real-time updates via sockets/WS in browser
- Manage UI state & client-side routing transitions
- Compose only Client components (cannot directly include Server components)
- Client Components can never be async

**Note**: If you use a normal component in the client component then by default that componenet will become client component (without specifying 'use client' on top)

```js
// normal component
export function Counter() {
	const [count, setCound] = useState();
	return (
		<button>click<button>
	)
}

// client component
"use client";
import { Counter } from './Coutner'
export defualt function comp() {
	return (
		<Counter /> // this automatically becomes client component, 'coz called in side a client component
	)
}
```

#### Metadata and SEO
- Metadata are always written on server components and layout.tsx
- Metadata in layout.tsx will be global for that perticular route