import { FaGithub, FaLinkedin, FaYoutube, FaStackOverflow } from 'react-icons/fa'

import { URLs } from '@/lib/constants'

import { IconHolder } from './SocialNetworks.styles'

const SocialNetworks = () => {
  return (
    <IconHolder>
      <a href={URLs.GITHUB} target="_blank" rel="noopener noreferrer">
        <FaGithub fontSize="32px" />
      </a>
      <a href={URLs.LINKEDIN} target="_blank" rel="noopener noreferrer">
        <FaLinkedin fontSize="32" />
      </a>
      <a href={URLs.STACKOVERFLOW} target="_blank" rel="noopener noreferrer">
        <FaStackOverflow fontSize="32px" />
      </a>
      <a href={URLs.YOUTUBE} target="_blank" rel="noopener noreferrer">
        <FaYoutube fontSize="32px" />
      </a>
    </IconHolder>
  )
}

export default SocialNetworks
