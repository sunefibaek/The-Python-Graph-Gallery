import * as React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="robotoRegular"
    />,
    <link
      rel="preload"
      href="/fonts/roboto-v30-latin/roboto-v30-latin-italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="robotoItalic"
    />,
    <link
      rel="preload"
      href="/fonts/roboto-v30-latin/roboto-v30-latin-700.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="roboto700"
    />,
    <link
      rel="preload"
      href="/fonts/bitter-v33-latin/bitter-v33-latin-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="bitterRegular"
    />,
    <link
      rel="preload"
      href="/fonts/bitter-v33-latin/bitter-v33-latin-italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="bitterItalic"
    />,
    <link
      rel="preload"
      href="/fonts/bitter-v33-latin/bitter-v33-latin-700.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="bitter700"
    />,
  ]);
};
