exports.up = function(knex) {  // <- Método "up" responsável pela criação da tabela
  return knex.schema.createTable('user', function (table){
    table.string ('id').primary();
    table.string ('name').notNullable();
    table.decimal ('age').notNullable();
    table.string ('city').notNullable();
    table.string ('uf', 2).notNullable();
  });
};

exports.down = function(knex) {  // <- Método down responsável por desfazer coisas na tabela
  return knex.schema.dropTable('user');
  
};
