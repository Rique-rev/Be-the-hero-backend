//Metodo up é responsavel pela criação da tabela
//O que acontece quando eu executo essa migration
exports.up = function(knex) {

  //Como criar uma tabela sqlite usando knex
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary()
    table.string('name').notNullable()  
    table.string('email').notNullable()  
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf',2).notNullable() //So tera 2 caracteres

  })
};

//O que eu preciso fazer de problema na tabela
//Vou deletar a tabela
exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
};
