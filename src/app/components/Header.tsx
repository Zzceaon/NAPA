'use client';
import { linkData } from '@/constants/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8 items-center">
        <Link href="/" className="text-3xl font-bold">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkData.map((link) => (
            <Link
              key={link.name}
              className={pathName === link.herf ? 'text-purple-400' : ''}
              href={link.herf}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
