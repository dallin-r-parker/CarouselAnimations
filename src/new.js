import { Observable } from 'rxjs/Observable';
import actionTypes from '../actionTypes';
import { loadData, fetchDataRejected, setIsFetching } from '../actions';
import createActionWithReducerKey from '../../../helpers/createActionWithReducerKey';
import { requestPageSize } from '../constants';

export default (action$, store) => {
  return action$.ofType(actionTypes.LISTING_FETCH_DATA).mergeMap(({ payload, reducerKey }) => {
    const { collectionName } = payload;
    const { pageCount, isFetching } = store.getState()[reducerKey].toJS();
    let totalCount;
    let collectionShortNames = [];

    return isFetching
      ? Observable.empty()
      : Observable.concat(
          Observable.of(createActionWithReducerKey(setIsFetching(true), reducerKey)),
          Observable.fromPromise(
            window.epxPassport.collections.getCollectionItems(collectionName, pageCount, requestPageSize)
          )
            .mergeMap(({ meta, items }) => {
              totalCount = meta.total_count;
              return Observable.forkJoin([
                items.map(({ content }) => {
                  collectionShortNames = [...collectionShortNames, content.short_name];
                  return window.epxPassport.collections.getCollectionItems(content.short_name, 1, 7);
                }),
                whatever
              ]);
            })
            .mergeMap((collections) =>
              Observable.of(
                createActionWithReducerKey(
                  loadData(collections, collectionName, pageCount, totalCount, collectionShortNames),
                  reducerKey
                ),
                createActionWithReducerKey(setIsFetching(false), reducerKey)
              )
            )
            .catch((error) => Observable.of(createActionWithReducerKey(fetchDataRejected(error), reducerKey)))
        );
  });
};
