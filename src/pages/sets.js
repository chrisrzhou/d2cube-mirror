import {useState} from 'react';
import {Layout} from 'uinix-ui';

import {getSet} from '../api/index.js';
import Inventory from '../components/inventory.js';
import PageLayout from '../components/page-layout.js';
import SetPreview from '../components/set-preview.js';
import SetSelect from '../components/set-select.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';
import {PREVIEWS} from '../constants/index.js';
import {getValidEquipSlot} from '../utils/get-valid-equip-slot.js';
import {rollItem} from '../utils/roll-item.js';

const Page = () => {
  const [setId, setSetId] = useState(null);
  const set = getSet(setId);

  const left = (
    <Frame
      isFixedHeight
      help="Search for sets and preview them in the Inventory."
      preview={PREVIEWS.sets}
      size="s"
      title="Item Sets"
    >
      <SetSelect isMenuOpen={!setId} value={setId} onChange={setSetId} />
      {set && (
        <Layout justify="center" overflow="auto">
          <SetPreview set={set} />
        </Layout>
      )}
    </Frame>
  );

  const right = <Inventory help={null} items={getSetItems(set)} />;

  return (
    <PageLayout title="Sets">
      <Interface left={left} right={right} />
    </PageLayout>
  );
};

const rollEquippedItem = (reservedSlotsSet) => (id) => {
  const item = rollItem({id});
  const equipSlot = getValidEquipSlot(reservedSlotsSet)(item);
  reservedSlotsSet.add(equipSlot);
  return {...item, equipSlot};
};

const getSetItems = (set) => {
  const reservedSlotsSet = new Set();
  return set ? set.items.map(rollEquippedItem(reservedSlotsSet)) : [];
};

export default Page;
