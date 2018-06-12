import { Store } from '@dojo/stores/Store';
import { Header, HeaderProperties } from './../widgets/Header';
import { State } from '../interfaces';
import { StoreContainer } from '@dojo/stores/StoreInjector';

function getProperties(store: Store<State>): HeaderProperties {
	const { get, path } = store;

	return {
		route: get(path('routing', 'outlet')),
		isAuthenticated: !!get(path('user', 'token')),
		loggedInUser: get(path('user', 'username'))
	};
}

export default StoreContainer(Header, 'state', { paths: [['routing'], ['user']], getProperties });
