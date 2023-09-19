export default function getUrl(id: string, preview: boolean): any {
  const BASE_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3003'
      : 'https://regina-web.vercel.app/'

  try {
    let url = BASE_URL + `/${id}`

    if (preview) {
      url += '?preview=true'
    }

    return url
  } catch {}
}
