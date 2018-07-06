import { Observable } from 'rxjs';
import actionTypes from '../actionTypes';
import { loadData, fetchDataRejected, setIsFetching } from "../actions";
import createActionWithReducerKey from "../../../helpers/createActionWithReducerKey";
import { requestPageSize } from "../constants";

export default (action$, store) => {
    return action$.ofType(actionTypes.LISTING_FETCH_DATA)
        .flatMap(({payload, reducerKey}) => {
            const { collectionName } = payload;
            const { pageCount, isFetching } = store.getState()[reducerKey].toJS();
            let totalCount;

            if (isFetching) {
                return Observable.empty();
            }

            // create observable to prevent additional requests
            const setIsFetchingTrueObservable = Observable.of(createActionWithReducerKey(
                setIsFetching(true), reducerKey
            ));

            // create observable to fetch data / handle errors / allow additional requests upon completion
            const requestObservable = Observable.fromPromise(
                window.epxPassport.collections.getCollectionItems(collectionName, pageCount + 1, requestPageSize)
            )
            .mergeMap(response => {
                totalCount = response.meta.total_count;
                return Observable.fromPromise(
                    Promise.all(
                        response.items.map(
                            collection => {
                                return window.epxPassport.collections.getCollection(collection.content.short_name);
                            }
                        )
                    )
                );
            })
            .flatMap(collections => Observable.of(
                createActionWithReducerKey(
                    loadData(collections, collectionName, pageCount + 1, totalCount), reducerKey
                ),
                createActionWithReducerKey(
                    setIsFetching(false), reducerKey
                )
            ))
            .catch(error => Observable.of(
                createActionWithReducerKey(fetchDataRejected(error), reducerKey)
            ));

            // emit the observable to prevent additional requests first, then emit the request observable
            return Observable.concat(
                setIsFetchingTrueObservable,
                requestObservable
            );
        });
};