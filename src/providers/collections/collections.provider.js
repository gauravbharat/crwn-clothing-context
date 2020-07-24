import React, { createContext, useState } from 'react';
import SHOP_DATA from './shop.data';

import { getCollectionsForPreview } from './collections.utils';

export const CollectionsContext = createContext({
  collections: SHOP_DATA,
  getCollectionsArray: () => {},
});

const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState(SHOP_DATA);
  const getCollectionsArray = (collections) =>
    getCollectionsForPreview(collections);

  return (
    <CollectionsContext.Provider
      value={{
        collections,
        getCollectionsArray,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};

export default CollectionsProvider;
