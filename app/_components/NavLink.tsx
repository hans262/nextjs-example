"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const NavLink: React.FC<{
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  /** active匹配采用完全匹配 */
  end?: boolean;
}> = ({ activeClassName = "", children, to, className, end }) => {
  const pathname = usePathname();
  const active = useMemo(() => {
    if (!pathname) return false;
    if (end) return pathname === to;
    return pathname.startsWith(to);
  }, [pathname, end]);
  return (
    <Link
      href={to}
      className={clsx(className, {
        [activeClassName]: active,
      })}
    >
      {children}
    </Link>
  );
};
