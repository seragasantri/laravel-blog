import { Form, Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { dashboard } from '@/routes';
import { create, index } from '@/routes/users';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import RoleController from '@/actions/App/Http/Controllers/RoleController';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Roles',
        href: index().url,
    },
];

export default function RoleCreate() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Role" />
            <div className="flex h-full items-center flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Head title="Create Role" />
                <h2 className='font-bold text-2xl'>Create Role</h2>
                <div className="w-full md:w-[800px] mt-8 border p-8 rounded-2xl">
                    <Form
                        {...RoleController.store.form()}
                        resetOnSuccess={['password', 'password_confirmation']}
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Nama Role</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            name="name"
                                            placeholder="Role name"
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="mt-2 w-full"
                                        tabIndex={5}
                                        data-test="create-role-button"
                                    >
                                        {processing && <Spinner />}
                                        Create Role
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
