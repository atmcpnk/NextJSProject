import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main className='text-black'>
      <h1>Hello World</h1>
      <Link href='/users' className='text-black'>Users</Link>
      < ProductCard />
    </main>
  )
}
