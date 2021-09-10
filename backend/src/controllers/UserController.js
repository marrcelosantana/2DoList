const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async list(request, response){
    const user = await connection('user').select('*');
    return response.json(user);
  },
  
  async create(request, response){
    const { name, age, city, uf } = request.body;
    const id = crypto.randomBytes(3).toString('HEX');

    await connection('user').insert({ id, name, age, city, uf });
    return response.json({ id });
  },

  async delete(request, response){
    const { id } = request.params;

    await connection('user').where('id', id).delete();
    return response.status(204).send();
  }
}