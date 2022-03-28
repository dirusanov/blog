import { HOMEPAGE, AUTHOR, TITLE, DESCRIPTION } from '@/lib/constants'

export default {
  title: TITLE,
  description: DESCRIPTION,
  canonical: HOMEPAGE,
  languageAlternates: [
    {
      hrefLang: 'en',
      href: HOMEPAGE,
    },
  ],
  openGraph: {
    profile: {
      username: AUTHOR,
    },
    type: 'blog',
    locale: 'en',
    url: HOMEPAGE,
    site_name: 'Rusanov Blog',
    images: [
      {
        url: 'https://blog.rusanov.com/icons/maskable_icon_x512.png',
        width: 200,
        height: 200,
        alt: "rusanov's Blog",
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
