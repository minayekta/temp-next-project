import Head from 'next/head';
import React, { Fragment } from 'react';
import { assetPrefix, isRtl } from '../../../next.config';
const Layout = ({ children }) => {
    return (<Fragment>
        
        <Head>

            <link rel="icon" href={`${assetPrefix}/favicon.ico`} />
            <meta httpEquiv="Cache-control" content="no-store" />
            <link rel="stylesheet" href={`${assetPrefix}/assets/css/bootstrap-rtl.min.css`} />
            <link rel="stylesheet" href={`${assetPrefix}/assets/css/font-awesome.min.css`} />

            <link rel="stylesheet" href={`${assetPrefix}/assets/css/style.css`} />
        </Head>



        <div className={`container ${isRtl?'rtl':''}`} >

            <main className="wrapper">

                {children}
            </main>
        </div>







        <script src={`${assetPrefix}/assets/js/jquery-3.5.1.min.js`}></script>



    </Fragment>
    );
}

export default Layout;
