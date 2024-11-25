import type { APIRoute } from 'astro'

export const GET: APIRoute = ctx => {
  const isGoGet = ctx.url.searchParams.get('go-get') == '1'
  if (!isGoGet) {
    return new Response(`not found`, {
      status: 404,
    })
  }
  return new Response(
    `
    <html>
    <head>
    <meta
      name="go-import"
      content="kapycluster.com git https://github.com/kapycluster/corp"
    />
    </head>
    <body>
    <h1>Hello, Go!</h1>
    </body>
    </html>`,
    {
      status: 200,
      headers: {
        'content-type': 'text/html',
      },
    }
  )
}

export const prerender = false
