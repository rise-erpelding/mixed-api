const TeachersService = {
  getAllTeachers(knex) { // only using this one at the moment
    return knex
      .select(
        'teachers.id',
        'teachers.teacher_name',
        'teachers.email'
      )
      .from('teachers');
  },
  getTeacherById(knex, teacherId) {
    return knex
      .select(
        'teachers.id',
        'teachers.teacher_name',
        'teachers.email'
      )
      .from('teachers')
      .where('teachers.id', teacherId);
  },
  addTeacher(knex, newTeacher) {
    return knex
      .insert(newTeacher)
      .into('teachers')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  removeTeacher(knex, id) {
    return knex
      .from('teachers')
      .where('id', id)
      .delete();
  },
  updateTeacher(knex, id, updatedTeacherInfo) {
    return knex
      .from('teachers')
      .where('id', id)
      .update(updatedTeacherInfo);
  }
};

module.exports = TeachersService;
