import './main-layout.module.scss'
import Head from 'next/head'
import Header from './components/navbar/navbar.component'
import  Footer from './components/footer/footer.component'

const LayoutComponent = ({children}:any) => {

    return (
        <>
            <Head>
                <title>NTF</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default LayoutComponent;