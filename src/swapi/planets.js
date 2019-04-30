import api from './api';

class Planets {
  static all() {
    return api.get('/planets').then(resp => resp.data);
  }

  static get(id) {
    return api.get(`/planets/${id}`).then(resp => resp.data);
  }
}

export default Planets;
