import { router } from '@inertiajs/vue3'

export function useAuth() {
    const logout = () => {
        // You can add a confirmation here if you want
        if (confirm('Are you sure you want to log out?')) {
            router.post('/logout')
        }
    }

    // You can add more auth-related functions here later, like 'login'
    return {
        logout
    }
}