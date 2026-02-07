// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', alignItems: 'center', borderBottom: '1px solid #eee' }}>
      <h2 style={{ fontWeight: 'bold' }}>Portfolio</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blogs">Blogs</Link>
      </div>
      <button style={{ backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '5px' }}>
        Contact
      </button>
    </nav>
  );
}