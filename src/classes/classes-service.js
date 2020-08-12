const ClassesService = {
  getAllClasses(knex) {
    return knex
      .from('classes')
      .select('*')
  },
  getClassById(knex, id) {
    return knex
      .from('classes')
      .select('*')
      .where('id', id)
      .first();
  },
  addClass(knex, newClass) {
    return knex
      .insert(newClass)
      .into('classes')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  removeClass(knex, id) {
    return knex
      .from('classes')
      .where('id', id)
      .delete();
  },
  updateClassName(knex, id, updatedName) {
    return knex
      .from('classes')
      .where('id', id)
      .update(updatedName);
  }
}

module.exports = ClassesService;