export const POST = async (request: Request) => {
  const token = await request.json()

  if (!token) {
    return Response.json(
      { message: 'Token is required.' },
      {
        status: 400
      }
    )
  }

  return Response.json(token, {
    status: 200,
    headers: {
      'Set-Cookie': `token=${JSON.stringify(
        token
      )}; Path=/; HttpOnly; SameSite=Lax; Secure`
    }
  })
}
