import type { Metadata } from 'next';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Head from 'next/head'

export default function Layout({
    children,
}: Readonly <{
    children: React.ReactNode;
}>) {
    return (
        <html lang='pt-BR'>
            <Head>
                <link rel="icon" href="/public/static/logo.png" sizes="any" />
            </Head>
            <body>
                    <Header />
                    {children}
                    <Footer />
            </body>
        </html>
    )
};