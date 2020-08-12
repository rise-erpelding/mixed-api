const GeneratorDataService = {
  getAllGeneratorData(knex) {
    return knex
      .from('generator_data')
      .select('*')
  },
  getGeneratorDataById(knex, id) {
    return knex
      .from('generator_data')
      .select('*')
      .where('id', id)
      .first();
  },
  addGeneratorData(knex, newGeneratorData) {
    return knex
      .insert(newGeneratorData)
      .into('generator_data')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  removeGeneratorData(knex, id) {
    return knex
      .from('generator_data')
      .where('id', id)
      .delete();
  },
  updateGeneratorData(knex, id, updatedGeneratorData) {
    return knex
      .from('generator_data')
      .where('id', id)
      .update(updatedGeneratorData);
  }
}

module.exports = GeneratorDataService;