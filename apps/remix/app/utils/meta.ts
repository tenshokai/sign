import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';

export const appMetaTags = (title?: string) => {
  const description = 'いだてんクリニックの電子署名プラットフォーム';

  return [
    {
      title: title ? `${title} - IDATEN Sign` : 'IDATEN Sign',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: 'いだてんクリニックの電子署名プラットフォーム',
    },
    {
      name: 'author',
      content: '一般社団法人天照会',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'IDATEN Clinic',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@idaten_clinic',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
