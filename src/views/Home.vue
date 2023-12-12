<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import PostCard from "../components/PostCard.vue";
// import usePost from "../composables/usePost";
import usePostsUser from '../composables/usePostsUser';


const baseUrl = 'https://jsonplaceholder.typicode.com';
//Fent ús del composable dels post i el user.
const { posts, llegirPosts } = usePostsUser(baseUrl);


// Fent ús només del composable dels posts
//const { posts, llegirPosts } = usePost(baseUrl);

llegirPosts();

</script>
