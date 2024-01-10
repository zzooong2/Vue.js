<template>
	<li>
		<div class="post-title">
			{{ postItem.title }}
		</div>
		<div class="post-contents">
			{{ postItem.contents }}
		</div>
		<div class="post-time">
			<!-- 날짜 & 시간 같은 것들을 보다 보기 편하게 필터링하는 방법 -->
			<!-- mustaches 표현 방식과 파이프로 구분하여 표기 -->
			{{ postItem.createdAt | formatDate }}
			<i class="icon ion-md-create" @click="routeEditPage"></i>
			<i class="icon ion-md-trash" @click="deleteItem"></i>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	// 날짜 & 시간 같은 것들을 보다 보기 편하게 필터링하는 방법
	// filters: {
	// 	formatDate(value) {
	// 		return new Date(value);
	// 	},
	// },
	// filters.js 파일을 생성하고 작성하여 main.js 에 전역 설정하였기에 주석처리.
	methods: {
		async deleteItem() {
			if (confirm('You want to delete it?')) {
				await deletePost(this.postItem._id);
				this.$emit('refresh');
			}
			// console.log('deleted');
		},
		routeEditPage() {
			const id = this.postItem._id;
			this.$router.push(`/post/${id}`);
		},
	},
};
</script>

<style></style>
