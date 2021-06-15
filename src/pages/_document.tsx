import Document, { Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
    
        try {
            ctx.renderPage = () => 
                originalRenderPage({
                    enhanceApp: (App) => (props) => 
                        sheet.collectStyles(<App { ...props } />)
                })
    
            const initialProps = await Document.getInitialProps(ctx)
    
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head lang="pt">
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                    <link rel='manifest' href='/manifest.json' />  
                    <link rel="shortcut icon" href="/images/icon.png" type="image/png"/>

                    <meta name='theme-color' content='#E935C5' />
                    <meta name='application-name' content='RocketCast' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='RocketCast' />
                    <meta name='description' content='Ouça todos os episódios do podcast da Rocketseat' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-TileColor' content='#E935C5' />
                    <meta name='msapplication-tap-highlight' content='no' />
                            
                    <link rel='apple-touch-icon' href='/images/icon.png' />

                    <meta name="twitter:title" content="RocketCast - Podcasts da Rocketseat" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:image" content="/images/thumbnail.png" />
                    <meta name="twitter:image:src" content="/images/thumbnail.png" />
                    <meta name="twitter:image:alt" content="Thumbnail" />
                    <meta name="twitter:image:width" content="1200" />
                    <meta name="twitter:image:height" content="600" />

                    <meta property="og:title" content="RocketCast - Os melhores podcasts sobre desenvolvimento você encontra aqui." />
                    <meta property="og:description" content="Plataforma de podcasts direcionados a desenvolvedores que procuram conhecimento!" />
                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="RocketCast - Podcasts para DEV's" />
                    <meta property="og:image" content="/images/thumbnail.png" />
                    <meta property="og:image:secure_url" content="/images/thumbnail.png" />
                    <meta property="og:image:alt" content="Thumbnail" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="600" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}