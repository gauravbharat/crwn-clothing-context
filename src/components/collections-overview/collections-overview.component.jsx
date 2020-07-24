import React, { useContext } from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionsContext } from '../../providers/collections/collections.provider';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const { collections, getCollectionsArray } = useContext(CollectionsContext);
  const collectionsArray = getCollectionsArray(collections);

  return (
    <div className='collections-overview'>
      {collectionsArray.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
