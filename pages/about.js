import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import {FaGithub, FaLinkedin, FaDev, FaTwitter, FaStackOverflow, FaYoutube} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import {
  colorBackgroundAndTransition,
  imageDarkModeSupport,
} from '@/components/GlobalStyle'
import { URLs } from '@/lib/constants'

const About = () => {
  return (
    <Container>
      <NextSeo
        title="About | RUSANOV"
        description="Привет! Я Дмитрий Русанов!"
      />
      <Title>About</Title>
      <Text>
        <p>
            Привет! Меня зовут Дмитрий Русанов, и это мой блог о технологиях и программировании.
        </p>
        <p>Я начинал как юрист, но последние 4 года я погружен в разработку программного обеспечения. Я работал над финтех-проектами и различными сервисами, используя Python, JavaScript и Go.</p>
        <p>Меня интересуют новые технологии, особенно искусственный интеллект и продукты на его основе, а также разработка бэкенда и фронтенда. В этом блоге я хочу поделиться своим опытом, дать полезные советы и обсудить, как технологии могут сделать нашу работу более эффективной, а нашу жизнь - лучше.</p>
      </Text>
      <SubTitle>I love to talk about tech, contact me on</SubTitle>
      <IconHolder>
        <a
            href={`maitlo:${URLs.MAIL}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <MdEmail fontSize="40px" />
        </a>
        <a href={URLs.GITHUB} target="_blank" rel="noopener noreferrer">
          <FaGithub fontSize="32px" />
        </a>
        <a href={URLs.LINKEDIN} target="_blank" rel="noopener noreferrer">
          <FaLinkedin fontSize="32" />
        </a>
      </IconHolder>
    </Container>
  )
}

export const Container = styled.div`
  padding: 1rem;
  font-size: 1.25rem;
  line-height: 1.55;
  ${({ theme }) => colorBackgroundAndTransition(theme)}
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${({ theme }) => theme.breakpoints.sm};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${({ theme }) => theme.breakpoints.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: ${({ theme }) => theme.breakpoints.rg};
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

export const Text = styled.div`
  p {
    margin: 1rem 0 1.55rem 0;
  }
`

export const SubTitle = styled.div`
  text-align: center;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const IconHolder = styled.div`
  ${({ theme }) => imageDarkModeSupport(theme.contentText)}

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    ${({ theme }) => colorBackgroundAndTransition(theme)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;

    a {
      margin-right: 1rem;
    }
  }
`

export default About
