import { ref } from 'vue';
export default function usePost(baseURL) {

    //3. Necessitem una variable reactiva array ja que els posts que s'han de mostrar venen d'una API.
    const posts = ref([]);
    const post = ref(null);
    //2. Utilitzem la FETCH API de JavaScript per llegir les post de la placeholder API.
    //5. Una funció async és 
    const llegirPosts = async () => {
        try {
            const response = await fetch(baseURL);
            posts.value = await response.json();

        } catch (error) {
            console.error(error);
        }

    }

    const llegirPost = async (id) => {
        try {
            const response = await fetch(`${baseURL}/${id}`);
            post.value = await response.json();

        } catch (error) {
            console.error(error);
        }

    }

    return {
        posts,
        post,
        llegirPosts,
        llegirPost
    }
}