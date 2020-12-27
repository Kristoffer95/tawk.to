import restoApp from "./settings";

class ModelCategory {

  constructor(resource) {
    this.resource = resource;
  }

  getAll() {
    return restoApp.get(`${this.resource}/`);
  }

  getId(id) {
    return restoApp.get(`${this.resource}/?id=${id}/`);
  }

  getParams(params) {
    return restoApp.get(`${this.resource}`, { params: params });
  }

  create(params) {
    return restoApp.post(`${this.resource}/`, params);
  }

  update(id, params) {
    return restoApp.patch(`${this.resource}/${id}/`, params);
  }

  delete(id) {
    return restoApp.delete(`${this.resource}/${id}/`);
  }

}

export default ModelCategory;