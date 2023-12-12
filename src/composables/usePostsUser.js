import { ref } from 'vue';
export default function usePost(baseURL) {

    const posts = ref([]);
    const post = ref(null);
    const user = ref(null);

    const llegirPosts = async () => {
        try {
            const response = await fetch(`${baseURL}/posts`);
            posts.value = await response.json();

        } catch (error) {
            console.error(error);
        }

    }

    const llegirPost = async (id) => {
        try {
            const response = await fetch(`${baseURL}/posts/${id}`);
            post.value = await response.json();

        } catch (error) {
            console.error(error);
        }

    }

    const llegirUser = async (userId) => {
        try {
            const response = await fetch(`${baseURL}/users/${userId}`);
            user.value = await response.json();

        } catch (error) {
            console.error(error);
        }

    }

    return {
        user,
        posts,
        post,
        llegirPosts,
        llegirPost,
        llegirUser,
    }
}