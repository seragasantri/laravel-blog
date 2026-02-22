import { Form, Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, User } from '@/types';
import { dashboard } from '@/routes';
import { index } from '@/routes/users';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import UserController from '@/actions/App/Http/Controllers/UserController';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Users',
        href: index().url,
    },
];

export default function UserEdit({ user }: { user: User }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit User" />
            <div className="flex h-full items-center flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Head title="Edit User" />
                <h2 className='font-bold text-2xl'>Edit User</h2>
                <div className="w-full md:w-[800px] mt-8 border p-8 rounded-2xl">
                    <Form
                        {...UserController.update.form(user)}
                        resetOnSuccess={['password', 'password_confirmation']}
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            name="name"
                                            placeholder="Full name"
                                            defaultValue={user.name}
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            tabIndex={2}
                                            autoComplete="email"
                                            name="email"
                                            placeholder="email@example.com"
                                            defaultValue={user.email}
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            tabIndex={3}
                                            autoComplete="new-password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                        <InputError message={errors.password} />
                                    </div>


                                    <Button
                                        type="submit"
                                        className="mt-2 w-full bg-yellow-500 hover:bg-yellow-600"
                                        tabIndex={5}
                                        data-test="update-user-button"
                                    >
                                        {processing && <Spinner />}
                                        Update account
                                    </Button>
                                </div>


                            </>
                        )}
                    </Form>
                </div>
            </div>
        </AppLayout>
    );
}
