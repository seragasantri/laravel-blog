import { destroy, edit } from "@/routes/permissions";
import { Permission } from "@/types";
import { Link } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";

export const PermissionColumn: ColumnDef<Permission>[] = [
    {
        id: "index",
        header: "#",
        meta: { className: "text-center" },
        cell: ({ row }) => {
            return <div className="text-center">{row.index + 1}</div>;
        },
        enableSorting: false,
    },
    {
        accessorKey: "name",
        header: "Name",

    },
    {
        accessorKey: "permissions",
        header: "Permissions",
        enableSorting: false,
        cell: ({ row }) => {
            const roles = row.original.roles || [];
            return (
                <div className="flex flex-wrap gap-1">
                    {roles.map((role) => (
                        <span key={role.id} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {role.name}
                        </span>
                    ))}
                </div>
            );
        },
    }, {
        // action
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const user = row.original;

            return (
                <div className="flex gap-2">
                    <Link href={edit(user)} className="p-3 bg-yellow-500 text-white rounded-full"><Edit className="size-4" /></Link>
                    <Link href={destroy(user)} className="p-3 bg-red-500 text-white rounded-full"><Trash className="size-4" /></Link>

                </div>
            );
        }
    }
]