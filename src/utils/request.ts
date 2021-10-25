import axios, { AxiosInstance, Method } from 'axios'







async function request<T>(url: string, method: Method, data = {}): Promise<T> {

  const res = await axios({ url, method, [method.toLocaleLowerCase() === 'get' ? 'params' : 'data']: data }).catch((error) => {
    console.log(error);
    return new Promise(() => { })
  }) as any
  return res.data
}

export default axios
export const Get = <T>(url: string, data?: Object | {}): Promise<T> => request<T>(url, "get", data)
export const Post = <T>(url: string, data?: Object | {}): Promise<T> => request<T>(url, "post", data)

