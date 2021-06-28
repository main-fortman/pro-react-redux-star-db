import axios from 'axios';


class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    try {
      const resp = await axios.get(`${this._apiBase}/${url}`);
      return resp.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getAllPeopple() {
    const resp = await this.getResource(`/people`);
    return resp.results;
  }

  async getPerson(id) {
    return await this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const resp = await this.getResource(`/planets`);
    return resp.results;
  }

  async getPlanet(id) {
    return await this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const resp = await this.getResource(`/starships`);
    return resp.results;
  }

  async getStarship(id) {
    return await this.getResource(`/starships/${id}/`);
  }

}

const serv = new SwapiService();
serv.getStarship(2).then(data => console.log(data.name));
