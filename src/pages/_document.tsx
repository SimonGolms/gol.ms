import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white-image dark:bg-black-image">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
