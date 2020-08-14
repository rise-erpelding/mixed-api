function makeTeachersArray() {
  return [
    {
      id: 1,
      teacher_name: "msmith",
      email: "msmith@educate.me",
      password: 'password',
      date_created: "2020-08-10T20:17:37.935Z"
    },
    {
      id: 2,
      teacher_name: "kdavis",
      email: "kdavis@educate.me",
      password: 'password',
      date_created: "2020-08-10T20:17:37.935Z",
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
      class_name: "Reading",
      date_created: "2020-08-12T20:17:37.935Z",
      teacher_id: 2
    },
  ]
}

function makeMaliciousClassName() {
  const maliciousClass = {
    id: 911,
    class_name: `<strong>The Best</strong Class <script>alert("xss");</script> <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">`,
    date_created: "2020-08-13T06:17:37.935Z",
    teacher_id: 2
  };

  const sanitizedClass = {
    id: 911,
    class_name: `<strong>The Best&lt;/strong Class &lt;script&gt;alert("xss");&lt;/script&gt; <img src="https://url.to.file.which/does-not.exist">`,
    date_created: "2020-08-13T11:17:37.935Z",
    teacher_id: 2
  };

  return {
    maliciousClass,
    sanitizedClass
  };
}

function makeFixtures() {
  const testTeachers = makeTeachersArray();
  const testClasses = makeClassesArray();
  return { testTeachers, testClasses };
}


function seedTeachers(db, teachers) {
  return db.into('teachers').insert(teachers)
    // .then(() => 
    //   db.raw(
    //     `SELECT setval('teachers_id_seq', ?)`,
    //     [teachers[teachers.length - 1].id],
    //   )
    // )
}

function seedClasses(db, classes) {
  return db.into('classes').insert(classes);
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
  makeMaliciousClassName,
  makeFixtures,
  seedTeachers,
  seedClasses,
  cleanTables
};