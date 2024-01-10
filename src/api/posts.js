// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { posts } from './index';

// 학습노트 데이터 조회하는 API
function fetchPosts() {
	return posts.get('posts');
}

// 학습노트 데이터를 생성하는 API
function createPost(postData) {
	return posts.post('posts', postData);
}

export { fetchPosts, createPost };
