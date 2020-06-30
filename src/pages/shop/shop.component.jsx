import React, { Component } from 'react'
import CollectionOverView from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class ShopPage extends Component {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionsRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async snapShot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      console.log("DATA", collectionsMap);
    })
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route component={CollectionOverView} exact path={`${match.path}`} />
        <Route component={CollectionPage} path={`${match.path}/:collectionId`} />
      </div>
    )
  }
}

export default ShopPage;