import Link from 'next/link'
import Productcard from './components/Productcard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
      <Link href='/users'>Users</Link>
      <Productcard />
    </main>
  )
}
