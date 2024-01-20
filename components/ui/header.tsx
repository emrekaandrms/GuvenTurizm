import Link from 'next/link'
import MobileMenu from './mobile-menu'
import kurumsal from '../zigzag'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Guventur">
              <img src='https://emrekaandurmus.s3.eu-central-1.amazonaws.com/IMG_6188.png' className="w-100 h-20 fill-current text-purple-600"></img>
              
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="#kurumsal"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Kurumsal
                </Link>
              </li>
              <li>
                <Link href="/Hizmetler" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/AracPersonel" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Araçlar Personeller
                </Link>
              </li>
              <li>
                <Link href="/İletişim" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
