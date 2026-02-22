import { Form, Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, Role } from '@/types';
import { dashboard } from '@/routes';
import { create, index } from '@/routes/users';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import UserController from '@/actions/App/Http/Controllers/UserController';
import { Checkbox } from '@/components/ui/checkbox';

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

export default function UserCreate({ roles }: { roles: Role[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create User" />
            <div className="flex h-full items-center flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Head title="Create User" />
                <h2 className='font-bold text-2xl'>Create User</h2>
                <div className="w-full md:w-[800px] mt-8 border p-8 rounded-2xl">
                    <Form
                        {...UserController.store.form()}
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

                                    <div className="grid gap-2">
                                        <Label htmlFor="password_confirmation">
                                            Confirm password
                                        </Label>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            tabIndex={4}
                                            autoComplete="new-password"
                                            name="password_confirmation"
                                            placeholder="Confirm password"
                                        />
                                        <InputError
                                            message={errors.password_confirmation}
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="roles">Role</Label>
                                        {roles.map((role) => (
                                            <div className="flex items-center gap-2" key={role.id}>
                                                <Checkbox
                                                    id={`roles-${role.id}`}
                                                    name='roles[]'
                                                    value={role.name}
                                                />
                                                <span>{role.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="mt-2 w-full"
                                        tabIndex={5}
                                        data-test="register-user-button"
                                    >
                                        {processing && <Spinner />}
                                        Create account
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
