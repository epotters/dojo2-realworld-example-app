import { Store } from '@dojo/framework/stores/Store';
import { Article, ArticleProperties } from './../widgets/Article';
import {
	deleteCommentProcess,
	addCommentProcess,
	newCommentInputProcess,
	favoriteArticleProcess,
	followUserProcess,
	deleteArticleProcess
} from './../processes/articleProcesses';
import { State } from '../interfaces';
import { StoreContainer } from '@dojo/framework/stores/StoreInjector';

function getProperties(store: Store<State>, properties: ArticleProperties): ArticleProperties {
	const { get, path } = store;

	return {
		article: get(path('article', 'item')),
		authorProfile: get(path('article', 'item', 'author')),
		comments: get(path('article', 'comments')) || [],
		newComment: get(path('article', 'newComment')),
		loaded: get(path('article', 'loaded')),
		isAuthenticated: !!get(path('user', 'token')),
		loggedInUser: get(path('user', 'username')),
		username: get(path('user', 'username')),
		slug: properties.slug,
		deleteComment: deleteCommentProcess(store),
		addComment: addCommentProcess(store),
		onNewCommentInput: newCommentInputProcess(store),
		favoriteArticle: favoriteArticleProcess(store),
		followUser: followUserProcess(store),
		deleteArticle: deleteArticleProcess(store)
	};
}

export default StoreContainer(Article, 'state', { paths: [['user'], ['article']], getProperties });
