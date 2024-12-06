'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb';
import { hasEnvVars } from '@/utils/supabase/check-env-vars';
import { EnvVarWarning } from '../env-var-warning';
import HeaderAuth from '../header-auth';

const Header = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  return (
    <div className="sticky top-0 z-10 flex h-[57px] w-full items-center justify-between border-b bg-background px-4">
      <Breadcrumb>
        <BreadcrumbList>
          {pathSegments.map((segment, index) => (
            <React.Fragment key={segment}>
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < pathSegments.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Header;