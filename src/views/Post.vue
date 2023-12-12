<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import usePostsUser from '../composables/usePostsUser';

const props = defineProps({
  id: String,
});

const baseUrl = 'https://jsonplaceholder.typicode.com';

//URL's dels composables individuals.
// const urlPost = 'https://jsonplaceholder.typicode.com/posts';
// const urlUser = 'https://jsonplaceholder.typicode.com/users';

//Fent ús del composable dels post i el user.
const { post, llegirPost, user, llegirUser } = usePostsUser(baseUrl);


onMounted(async () => {
  await llegirPost(props.id);
  //Hem d'esperar a llegir el post per tenir la id d'usuari que volem!
  await llegirUser(post.value.userId);
})

</script>
