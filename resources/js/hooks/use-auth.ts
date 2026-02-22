import { Auth } from '@/types';
import { usePage } from '@inertiajs/react';

export const useAuth = () => {
    const { auth } = usePage<Auth>().props;
    return auth.user ? auth.user : null;
};
