import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ params, request }) => {
  const sp = new URL(request.url).searchParams
  const isGoGet = sp.get('go-get') == '1'
  if (!isGoGet) {
    return new Response(`Page Not found`, {
      status: 404,
    })
  }
  return new Response(
    `<meta
      name="go-import"
      content="kapycluster.com git https://github.com/kapycluster/corp"
    />`,
    {
      status: 200,
      headers: {
        'content-type': 'text/html',
      },
    }
  )
}
