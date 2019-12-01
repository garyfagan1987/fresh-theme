import React from 'react';

import Link from '../src/components/link';
import { HorizontalMenu, VerticalMenu } from '../src/components/menu';

export default {
  title: 'Menu',
};

export const horizontalMenu = () => (
  <div style={{padding: '20px'}}>
    <HorizontalMenu>
      <li>
        <Link href="./" weight="semiBold">About</Link>
      </li>
      <li>
        <Link href="./" weight="semiBold">Contact</Link>
      </li>
      <li>
        <Link href="./" weight="semiBold">FAQ</Link>
      </li>
      <li>
        <Link href="./" weight="semiBold">Press</Link>
      </li>
    </HorizontalMenu>
  </div>
);

export const verticalMenu = () => (
  <div style={{padding: '20px'}}>
    <VerticalMenu>
      <li>
        <Link animate href="./" weight="semiBold">About</Link>
      </li>
      <li>
        <Link animate href="./" weight="semiBold">Contact</Link>
      </li>
      <li>
        <Link animate href="./" weight="semiBold">FAQ</Link>
      </li>
      <li>
        <Link animate href="./" weight="semiBold">Press</Link>
      </li>
    </VerticalMenu>
  </div>
);