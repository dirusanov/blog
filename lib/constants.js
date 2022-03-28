export const HOMEPAGE = 'https://d-rusanov.ru'
export const AUTHOR = 'Rusanov'
export const TITLE = 'Blog | RUSANOV'
export const DESCRIPTION =
  "Hi I'm rusanov, I love talking, learning and teaching about technology so, I write tutorials and guides about programming like JavaScript, React, Next.js, Node.js and many more."
export const GITHUB_REPO_EDIT =
  'https://github.com/dirusanov/blog/edit/master/_posts/'

export const URLs = Object.freeze({
  DISCORD: '',
  LINKEDIN: 'https://www.linkedin.com/in/dmitry-rusanov-926ba81b4/',
  MAIL: 'random1k11@gmail.com',
  GITHUB: 'https://github.com/dirusanov',
  RSS: 'https://d-rusanov.ru/rss/feed.xml',
  STACKOVERFLOW: 'https://stackoverflow.com/users/12097204/dmitry-rusanov',
  YOUTUBE: 'https://www.youtube.com/channel/UCjl1oFkCqlAXjqqSD_1oVGw',
})

export const ICON_SIZES = Object.freeze({
  width: 50,
  height: 50,
})

export const DEFAULT_IMAGE_SIZES = Object.freeze({
  width: 1920,
  height: 1080,
})

export const TAG_TYPES = Object.freeze({
  react: {
    color: '#61DAFB',
    background: '#333333',
  },
  javascript: {
    color: '#1a202c',
    background: '#E5CB3B',
  },
  beginners: {
    color: '#ededee',
    background: '#008335',
  },
  tutorial: {
    color: '#b30047',
    background: '#FEFFA5',
  },
  typescript: {
    color: '#ededee',
    background: '#3178c6',
  },
  mongoose: {
    color: '#ededee',
    background: '#800',
  },
})

export const SHARE_SNS = Object.freeze({
  twitter: {
    logo: '/assets/twitter-brands.svg',
    shareURL: 'https://twitter.com/intent/tweet?text={{TITLE}}{{URL}}',
    params: ['TITLE', 'URL'],
  },
  linkedin: {
    logo: '/assets/linkedin-brands.svg',
    shareURL:
      'https://www.linkedin.com/shareArticle?mini=true&url={{URL}}&title={{TITLE}}&summary={{SUMMARY}}&source={{SOURCE}}',
    params: ['URL', 'TITLE', 'SUMMARY', 'SOURCE'],
  },
  reddit: {
    logo: '/assets/reddit-brands.svg',
    shareURL: 'https://www.reddit.com/submit?url={{URL}}&title={{TITLE}}',
    params: ['URL', 'TITLE'],
  },
})
