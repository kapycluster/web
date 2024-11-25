export function onRequest({ request }) {
  const url = new URL(request.url)

  if (url.searchParams.get('go-get') === '1') {
    return new Response(
      `<html>
<head>
    <meta name="go-import" content="kapycluster.com/corp git https://github.com/kapycluster/corp">
</head>
<body>
    <p>Are you Go?</p>
</body>
</html>`,
      {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      }
    )
  }

  return Response.redirect('/', 302)
}
