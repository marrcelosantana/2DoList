const connection = require('../database/connection');

module.exports = {
  async list(request, response){
    const tasks = await connection('tasks')
    .join('user', 'user.id', '=', 'tasks.user_id')
    .select(['tasks.*', 'user.name', 'user.age', 'user.city', 'user.uf']);

    response.json(tasks);
  },

  async create(request, response){
    const { title, description } = request.body;
    const user_id = request.headers.authorization;

    const [id] = await connection('tasks').insert({ title, description, user_id });

    return response.json({ id });
  },
  
  async delete(request, response){
    const { id } = request.params;
    const user_id = request.headers.authorization;

    const task = await connection('tasks').where('id', id).select('user_id').first();

    if(task.user_id !== user_id){
      return response.status(401).json({ error: 'Não autorizado!' });
    }

    await connection('tasks').where('id', id).delete();

    return response.status(204).send();
  }
}