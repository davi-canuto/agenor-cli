import axios, { AxiosInstance, AxiosResponse } from 'axios'

export default class Api {
  private static BASE_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3003'
      : 'sample_url'

  private static instance: AxiosInstance

  private static createInstance(): AxiosInstance {
    if (!this.instance) {
      this.instance = axios.create({
        baseURL: this.BASE_URL,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
    }

    return this.instance
  }

  static async get<T>(uri: string, headers: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.createInstance().get(uri, {
        headers,
      })
      return this.respondWith<T>(response)
    } catch (error) {
      console.log(error)
      throw new Error('error in request')
    }
  }

  static async post<T>(uri: string, data: any, headers: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.createInstance().post(
        uri,
        data,
        { headers },
      )
      return this.respondWith<T>(response)
    } catch (error) {
      console.log(error)
      throw new Error('error in request')
    }
  }

  static async put<T>(uri: string, data: any, headers: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.createInstance().put(
        uri,
        data,
        { headers },
      )
      return this.respondWith<T>(response)
    } catch (error) {
      console.log(error)
      throw new Error('error in request')
    }
  }

  static async delete<T>(uri: string, headers: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.createInstance().delete(
        uri,
        { headers },
      )
      return this.respondWith<T>(response)
    } catch (error) {
      console.log(error)
      throw new Error('error in request')
    }
  }

  private static respondWith<T>(response: AxiosResponse<T>): T {
    const data: T = response.data
    if (data && (data as any).errors) {
      throw new Error((data as any).errors)
    }

    return data
  }
}
