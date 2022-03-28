import { URLs } from '@/lib/constants'
import ELink from '@/components/EnhancedLink'

import { Container } from './Items.styles'

const MenuItems = () => {
  return (
    <Container>
      <ELink href="/" activeClassName="active">
        <a>Blog</a>
      </ELink>
      <ELink href="/about" activeClassName="active">
        <a>About</a>
      </ELink>
    </Container>
  )
}

export default MenuItems
