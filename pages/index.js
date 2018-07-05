import Link from 'next/link'
//import Link from 'next/prefetch'
const Index = () => (
  <div>
    <Link href="/about?id=111">
      <a>About Page</a>
    </Link>
    <p>Hello ssr+pwa</p>
  </div>
)

export default Index
