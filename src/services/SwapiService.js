import axios from 'axios';

export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    try {
      const resp = await axios.get(`${this._apiBase}/${url}`);
      return resp.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const resp = await this.getResource(`/planets`);
    return resp.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getStarshipImage = ({ id }) => {
      return `${this._imageBase}/starships/${id}.jpg`;
  }

  getPlanetImage = ({ id }) => {
      return `${this._imageBase}/planets/${id}.jpg`;
  }

  _transformPlanet(planet) {
    return {
      id: SwapiService.prototype._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship(starship) {
    return {
      id: SwapiService.prototype._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transformPerson(person) {
    return {
      id: SwapiService.prototype._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

  _extractId(item) {
    return item.url.match(/\/([0-9]*)\/$/)[1];
  }
}
  