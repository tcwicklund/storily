export const users = [
    {
        id: 1,
        name: "John Doe",
        email: "jdoe@example.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jsmith@example.com"
    }
]

export async function GET() {
    return Response.json(users);
}

export async function POST(request) {
    const { name, email } = await request.json();
    const newUser = {
        id: users.length + 1,
        name,
        email
    }
    users.push(newUser);
    return new Response(JSON.stringify(newUser),{
        status: 201,
        headers: {
            "Content-Type": "application/json"
        }
    });
}