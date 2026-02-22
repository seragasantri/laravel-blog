import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, Role, User } from '@/types';
import { dashboard } from '@/routes';
import { create, index } from '@/routes/roles';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/data-table';
import { RoleColumn } from './table/column';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Roles',
        href: index().url,
    },
];

export default function RoleIndex({ roles }: { roles: Role[] }) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">

                <div className="flex justify-end">
                    <Link href={create()} className='m-2 px-8 py-2 bg-blue-500 hover:bg-blue-600 duration-500 rounded-2xl flex'><Plus className='mr-2' /> Create Role</Link>
                </div>
                <DataTable columns={RoleColumn} data={roles} />
            </div>
        </AppLayout>
    );
}
