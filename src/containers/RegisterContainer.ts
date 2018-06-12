import { Store } from '@dojo/stores/Store';
import { Register, RegisterProperties } from './../widgets/Register';
import {
	registerProcess,
	registerEmailInputProcess,
	registerPasswordInputProcess,
	registerUsernameInputProcess
} from './../processes/loginProcesses';
import { State } from '../interfaces';
import { StoreContainer } from '@dojo/stores/StoreInjector';

function getProperties(store: Store<State>): RegisterProperties {
	const { get, path } = store;

	return {
		email: get(path('register', 'email')),
		password: get(path('register', 'password')),
		username: get(path('register', 'username')),
		errors: get(path('errors')),
		inProgress: get(path('register', 'loading')),
		onEmailInput: registerEmailInputProcess(store),
		onPasswordInput: registerPasswordInputProcess(store),
		onUsernameInput: registerUsernameInputProcess(store),
		onRegister: registerProcess(store)
	};
}

export default StoreContainer(Register, 'state', { paths: [['register'], ['errors']], getProperties });
