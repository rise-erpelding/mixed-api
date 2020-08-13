function makeTeachersArray() {
  return [
    {
      id: 1,
      teacher_name: "msmith",
      email: "msmith@educate.me"
    },
    {
      id: 2,
      teacher_name: "kdavis",
      email: "kdavis@educate.me"
    }
  ];
}

function makeClassesArray() {
  return [
    {
      id: 1,
      class_name: "1st Period",
      date_created: "2020-08-12T20:17:37.935Z",
      teacher_id: 1
    },
    {
      id: 2,
      class_name: "2nd Period",
      date_created: "2020-08-12T20:17:37.935Z",
      teacher_id: 1
    },
    {
      id: 3,
      class_name: "3rd Period",
      date_created: "2020-08-12T20:17:37.935Z",
      teacher_id: 1
    },
  ]
}

function makeFixtures() {
  const testTeachers = makeTeachersArray();
  const testClasses = makeClassesArray();
  return { testTeachers, testClasses };
}

function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
        teachers,
        classes,
        groupings,
        generator_data
      `
    )
    .then(() =>
      Promise.all([
        trx.raw(`ALTER SEQUENCE teachers_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE classes_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE groupings_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE generator_data_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('teachers_id_seq', 0)`),
        trx.raw(`SELECT setval('classes_id_seq', 0)`),
        trx.raw(`SELECT setval('groupings_id_seq', 0)`),
        trx.raw(`SELECT setval('generator_data_id_seq', 0)`),
      ])
    )
  );
}

module.exports = {
  makeTeachersArray,
  makeClassesArray,
  makeFixtures,
  cleanTables
};