import { useAuth } from "@/hooks/use-auth";
import { destroy, edit } from "@/routes/users";
import { User } from "@/types";
import { Link } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";

export const UserColumns: ColumnDef<User>[] = [
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
        accessorKey: "email",
        header: "Email",

    }, {
        accessorKey: "roles",
        header: "Roles",
        enableSorting: false,
        cell: ({ row }) => {
            const roles = row.original.roles || [];
            return roles.map(role => role.name).join(", ");
        },
    }, {
        // action
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const user = row.original;
            const auth = useAuth();

            return (
                <div className="flex gap-2">
                    <Link href={edit(user)} className="p-3 bg-yellow-500 text-white rounded-full"><Edit className="size-4" /></Link>
                    {auth?.id !== user.id ? (

                        <Link href={destroy(user)} className="p-3 bg-red-500 text-white rounded-full"><Trash className="size-4" /></Link>
                    ) : null}
                </div>
            );
        }
    }
]