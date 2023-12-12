import { ref } from 'vue';
export default function useUser(baseURL) {

    const user = ref(null);

    const llegirUser = async (userId) => {
        try {
            const response = await fetch(`${baseURL}/${userId}`);
            user.value = await response.json();

        } catch (error) {
            console.error(error);
        }

    }

    return {
        user,
        llegirUser
    }
}