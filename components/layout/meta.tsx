import Head from "next/head";

const DOMAIN = "https://softech.services";

export default function Meta({
  title = "Softech",
  description = "Welcome to Softech! Here we make great products at a great price. We ensure every product is made with care ready to be put into your game. We have amazing prices!",
  image = `https://cdn.discordapp.com/attachments/908615799076450334/1073308430703534090/BA_1.png`,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>Softech || Home</title>
      <meta name="description" content={description} />
      <link rel="icon" href="https://media.discordapp.net/attachments/908615799076450334/1073309010423459930/logo_1.png" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
