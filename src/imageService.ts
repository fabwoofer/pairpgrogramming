import axios, { AxiosResponse } from 'axios'

type ImageData = {
  url: string
  copyright: string
}

export const fetchImage = async (): Promise<ImageData | undefined> => {
  try {
    const response: AxiosResponse = await axios.get(
      'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
    )
    return { url: response.data.url, copyright: response.data.copyright }
  } catch (error) {
    console.log(error)
  }
}
