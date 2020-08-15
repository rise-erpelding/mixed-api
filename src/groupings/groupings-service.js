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
  getTeacherById(knex, teacherId) {
    return knex
      .from('teachers')
      .select('teachers.id')
      .where('id', teacherId)
      .first()
  },
  getGroupingByTeacherId(knex, teacherId) {
    return knex
      .from('groupings')
      .select('*')
      .where('teacher_id', teacherId)
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
  updateGrouping(knex, id, updatedGrouping) {
    return knex
      .from('groupings')
      .where('id', id)
      .update(updatedGrouping);
  }
}

module.exports = GroupingsService;