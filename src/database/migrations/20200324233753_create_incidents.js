//Metodo up é responsavel pela criação da tabela
//O que acontece quando eu executo essa migration
exports.up = function(knex) {

    //Como criar uma tabela sqlite usando knex
    return knex.schema.createTable('incidents', function(table) {
      table.increments()
      
      table.string('title').notNullable()  
      table.string('description').notNullable()  
      table.decimal('value').notNullable()
      
      table.string('ong_id').notNullable()

      //chave estrangeira
      table.foreign('ong_id').references('id').inTable('ongs')
    


    })
  };
  
  //O que eu preciso fazer de problema na tabela
  //Vou deletar a tabela
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
  };
  