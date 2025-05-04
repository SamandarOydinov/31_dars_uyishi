// components/Sidebar.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/students', label: 'Students' },
    { href: '/teachers', label: 'Teachers' },
    { href: '/classes', label: 'Classes' },
    { href: '/school-info', label: 'School Info' },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
      <nav className="flex flex-col space-y-2">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`p-2 rounded ${
              pathname === href
                ? 'bg-gray-700 font-semibold'
                : 'hover:bg-gray-700'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
