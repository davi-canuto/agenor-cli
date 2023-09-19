export default function getUrl(id: string, preview: boolean): any {
  const BASE_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3003'
      : 'https://regina-web.vercel.app/'

  try {
    const url = BASE_URL + `/${id}` + `?preview=${preview}`

    return url
  } catch {}
}
