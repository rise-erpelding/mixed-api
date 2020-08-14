const ClassesService = {
  getAllClasses(knex) {
    return knex
      .from('classes')
      .select('*')
  },
  getTeacherById(knex, teacherId) {
    return knex
      .from('teachers')
      .select('teachers.id')
      .where('id', teacherId)
      .first()
  },
  getClassByTeacherId(knex, teacherId) {
    return knex
      .from('classes')
      .select('*')
      .where('teacher_id', teacherId)
  },
  getClassByClassId(knex, id) {
    return knex
      .from('classes')
      .select('*')
      .where('id', id)
  },
  insertClass(knex, newClass) {
    return knex
      .insert(newClass)
      .into('classes')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  deleteClass(knex, id) {
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