'use client'; // 客户端组件
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { dashboardLinkData } from '../constants/dashboardLinks'; // 导入 dashboardLinkData

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <div className="flex gap-4 font-bold text-lg mb-4">
      {dashboardLinkData.map((link) => (
        <Link
          key={link.path}
          className={
            pathName === link.path ? 'text-purple-500' : 'text-gray-400'
          }
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
