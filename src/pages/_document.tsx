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
                    <meta charSet="UTF-8" />
                    <link rel="icon" href="/icons/logo.svg" type="image/svg" />
                    <link rel="shortcut icon" href="/icons/logo.svg" type="image/svg" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                    <link rel="manifest" href="/manifest.json" />

                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='RocketCast' />

                    <meta name='application-name' content='RocketCast' />
                    <meta name='description' content='Ouça todos os episódios do podcast da Rocketseat' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
                    <meta name="HandheldFriendly" content="True" />
                    <meta name="referrer" content="no-referrer-when-downgrade" />
                    <meta name="google" content="notranslate" />
                    <meta name='msapplication-TileColor' content='#E935C5' />
                    <meta name='msapplication-tap-highlight' content='no' />

                    <link rel='mask-icon' href='/icons/logo.svg' color='#E935C5' />

                    <meta property='og:title' content='RocketCast' />
                    <meta property='og:description' content='Ouça todos os episódios do podcast da Rocketseat' />
                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:type" content="website" />
                    <meta property='og:site_name' content='RocketCast' />
                    
                    <meta name="twitter:title" content="RocketCast - Podcasts da Rocketseat" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}