import { usePage, Head, Link } from "@inertiajs/inertia-react";
import React from "react";

export default function App({ children, title }) {
    const { users, auth } = usePage().props;
    // console.log(usePage());
    return (
        <div className="flex min-h-screen">
            <Head title={title} />
            <div className="w-1/3">
                <div className="w-1/3 flex flex-col fixed h-full px-6 py-4 text-right border-r space-y-3">
                    <div className="flex-1 overflow-y-auto">
                        {users.map((user) => (
                            <Link
                                key={user.id}
                                href={route("chats.show", user.username)}
                                className={`block py-2 ${
                                    route().current("chats.show", user.username)
                                        ? "text-black font-semibold"
                                        : "text-gray-600"
                                }`}
                            >
                                {user.name}
                            </Link>
                        ))}
                    </div>
                    <div className="bg-gray-100 rounded-xl p-4 space-y-3">
                        <div>{auth.user.name}</div>
                       <Link href={route('logout')} method="POST" as="button" className="border bg-red-400 text-black rounded-xl px-4 py-2">Logout</Link>
                    </div>
                </div>
            </div>
            <div className="w-2/3">{children}</div>
        </div>
    );
}
