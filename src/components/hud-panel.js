import {Layout, Text} from 'uinix-ui';

import Experience from './experience.js';
import BrandIcon from './ui/brand-icon.js';
import Grid from './ui/grid.js';

const HudPanel = ({player, title}) => (
  <Layout align="center" direction="column" p="m" spacing="xs">
    <Experience experience={player.experience} />
    <Layout align="center" spacing="xs">
      <Grid size={[1, 9]}>
        <BrandIcon icon="nav.cube" href="/cube" tooltip="Cube" />
        <BrandIcon icon="nav.items" href="/items" tooltip="Items" />
        <BrandIcon icon="nav.sets" href="/sets" tooltip="Sets" />
        <BrandIcon icon="nav.runewords" href="/runewords" tooltip="Runewords" />
        <BrandIcon
          as="h1"
          icon="nav.home"
          href="/"
          size="icon.l"
          tooltip="Home"
        />
        <BrandIcon
          icon="nav.developers"
          href="/developers"
          tooltip="Developers"
        />
        <BrandIcon icon="nav.about" href="/about" tooltip="About" />
        <BrandIcon icon="nav.community" href="/community" tooltip="Community" />
        <BrandIcon icon="nav.support" href="/support" tooltip="Support" />
      </Grid>
    </Layout>
    <Text as="h2" fontSize="m">
      {title}
    </Text>
  </Layout>
);

export default HudPanel;
