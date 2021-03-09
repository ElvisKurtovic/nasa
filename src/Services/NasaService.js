/* eslint-disable space-before-function-paren */
import { AppState } from '../AppState'
import { nasaApi } from './AxiosService'

class NasaService {
  async searchNasas(query) {
    const res = await nasaApi.get('apod?api_key=WbrjbkQFIsO0ZV4ITbKfMmSwRy87XN1YTDLCosGg&date=' + query)
    AppState.nasas = res.data.url
    console.log(res)
  }

  setActive(nasa) {
    AppState.activeNasa = nasa
  }
}

export const nasaService = new NasaService()
