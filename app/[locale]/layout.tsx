import { notFound } from 'next/navigation';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';
import "./globals.css"

type Props = { children: React.ReactNode, params: { locale: string } }
export default function RootLayout({ children, params: { locale } }: Props) {
 const idiom = useLocale();
 if(locale != idiom) notFound();
 const messages = useMessages(); 
 return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html>
        <body>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
      </NextIntlClientProvider>
  );
}
