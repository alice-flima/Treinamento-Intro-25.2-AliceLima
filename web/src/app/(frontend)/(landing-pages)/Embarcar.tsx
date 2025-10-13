'use client';

import Link from 'next/link';

function Embarcar({ isLogged }: { isLogged: boolean }) {
  return (
    <Link
      href={isLogged ? '/aprender' : '/layoutbasico/aprender'}
      className="text-orange-50 text-4xl button-lg border-orange-200 bg-orange-500 colorTransition hover:bg-pink-400"
    >
      {isLogged ? 'Continue Aprendendo' : 'Monte o seu Dogão'}
    </Link>
  );
}

export default Embarcar;
