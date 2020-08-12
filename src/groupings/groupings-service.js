const GroupingsService = {
  getAllGroupings(knex) {
    return knex
      .from('groupings')
      .select('*')
  },
  getGroupingById(knex, id) {
    return knex
      .from('groupings')
      .select('*')
      .where('id', id)
      .first();
  },
  addGrouping(knex, newGrouping) {
    return knex
      .insert(newGrouping)
      .into('groupings')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  removeGrouping(knex, id) {
    return knex
      .from('groupings')
      .where('id', id)
      .delete();
  },
  updateGroupingName(knex, id, updatedName) {
    return knex
      .from('groupings')
      .where('id', id)
      .update(updatedName);
  }
}

module.exports = GroupingsService;