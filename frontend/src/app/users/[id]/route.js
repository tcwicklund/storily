import { users } from "../route.js";

export async function GET(request, { params }) {
    const { id } = await params;
    if (!id) {
        return new Response("User ID is required", { status: 400 });
    }
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return new Response("User not found", { status: 404 });
    }
    return Response.json(user);
}

export async function PUT(request, { params }) {
    const { id } = await params;
    if (!id) {
        return new Response("User ID is required", { status: 400 });
    }
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return new Response("User not found", { status: 404 });
    }
    const { name, email } = await request.json();
    user.name = name;
    user.email = email;
    return Response.json(user);
}

export async function DELETE(request, { params }) {
    const { id } = await params;
    if (!id) {
        return new Response("User ID is required", { status: 400 });
    }
    const userIndex = users.findIndex((user) => user.id === parseInt(id));
    if (userIndex === -1) {
        return new Response("User not found", { status: 404 });
    }
    users.splice(userIndex, 1);
    return new Response(null, { status: 204 });
}