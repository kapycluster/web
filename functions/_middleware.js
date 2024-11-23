export function onRequest({ request }) {
  const url = new URL(request.url);
  
  if (url.searchParams.get('go-get') === '1') {
    return new Response(`<!DOCTYPE html>
<html>
<head>
    <meta name="go-import" content="kapycluster.com/corp git github.com/kapycluster/corp">
    <meta name="go-source" content="kapycluster.com/corp github.com/kapycluster/corp github.com/kapycluster/corp/tree/master{/dir} github.com/kapycluster/corp/blob/master{/dir}/{file}#L{line}">
</head>
<body>
    <p>Are you Go?</p>
</body>
</html>`, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  }

  return new Response(null, {
    status: 404,
  });
}

