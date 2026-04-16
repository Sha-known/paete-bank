import { router } from '@inertiajs/vue3'

export function useAuth() {
    // New Login Logic
    const login = (form: any) => {
        form.post('/login', {
            onFinish: () => form.reset('password'), // Clears password field if login fails
        })
    }

    // Existing Logout Logic
    const logout = () => {
        if (confirm('Are you sure you want to log out?')) {
            router.post('/logout')
        }
    }

    return {
        login,
        logout
    }
}