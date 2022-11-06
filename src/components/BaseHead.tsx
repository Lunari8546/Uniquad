interface BaseHeadProps {
  pageName: string;
}

export default function BaseHead(props: BaseHeadProps) {
  const pageTitle = `${props.pageName} | JA Website`;

  return (
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="STGSS JA2223 Website" />
      <title>{pageTitle}</title>
    </head>
  );
}
