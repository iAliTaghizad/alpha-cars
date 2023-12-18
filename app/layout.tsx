import { Nunito, Lalezar } from 'next/font/google'
import './globals.css'
import getCurrentUser from './actions/getCurrentUser';
import ClientOnly from './components/clientOnly';
import ToasterProvider from './providers/toasterProvider';
import LoginModal from './components/modals/loginModal';
import RegisterModal from './components/modals/registerModal';
import Navbar from './components/navbar/navbar';
import RentModal from './components/modals/sellModal';
import SearchModal from './components/modals/searchModal';

export const metadata = {
  title: 'Alpha Cars',
  description: 'Auto Dealer & Car Showroom',
}

const font = Lalezar({
  subsets: ["arabic"],
  display: 'swap',
  adjustFontFallback: false,
  weight: '400'
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}