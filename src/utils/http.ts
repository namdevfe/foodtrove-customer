type CustomOptions = RequestInit & {
  baseURL?: string | undefined
}

const request = async <Response>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  options?: CustomOptions | undefined
) => {
  const baseURL =
    options?.baseURL === undefined
      ? process.env.NEXT_PUBLIC_API_ENDPOINT
      : options.baseURL
  const fullURL = url.startsWith('/') ? `${baseURL}${url}` : `${baseURL}/${url}`
  const body = options?.body ? JSON.stringify(options.body) : undefined
  const baseHeaders = {
    'Content-Type': 'application/json'
  }

  const res = await fetch(fullURL, {
    method,
    body,
    headers: {
      ...baseHeaders,
      ...options?.headers
    }
  })

  const data: Response = await res.json()

  if (!res.ok) {
    throw res
  }

  return data
}

const http = {
  get<Response>(url: string, options?: Omit<CustomOptions, 'body'>) {
    return request<Response>('GET', url, options)
  },
  post<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, 'body'>
  ) {
    return request<Response>('POST', url, { ...options, body })
  },
  put<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'>) {
    return request<Response>('PUT', url, { ...options, body })
  },
  delete<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, 'body'>
  ) {
    return request<Response>('DELETE', url, { ...options, body })
  }
}

export default http
