<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import usePost from '../composables/usePost';
import useUser from '../composables/useUser';

const props = defineProps({
  id: String,
});

const urlPost = 'https://jsonplaceholder.typicode.com/posts';
const urlUser = 'https://jsonplaceholder.typicode.com/users';


const { post, llegirPost } = usePost(urlPost);
const { user, llegirUser } = useUser(urlUser);

onMounted(() => {
  llegirPost(props.id);
  llegirUser(props.id);
})

// Post hardcodejat
// const post = {
//   title:
//     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
// };
// const user = {
//   name: "Leanne Graham",
// };
</script>
