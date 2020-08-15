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

function makeGroupingsArray() {
  return [
    {
      id: 1,
      grouping_name: 'Writing Groups',
      groupings: `[{"alias":"Sven","Personality Type":"Introvert","VARK Learning Preference":"Visual","groupNum":1},{"alias":"Violet","Personality Type":"Extrovert","VARK Learning Preference":"Aural","groupNum":2},{"alias":"Ethan","Personality Type":"Introvert","VARK Learning Preference":"Read/Write","groupNum":3},{"alias":"Aidan","Personality Type":"Extrovert","VARK Learning Preference":"Kinesthetic","groupNum":4},{"alias":"Sofia","Personality Type":"Extrovert","VARK Learning Preference":"Kinesthetic","groupNum":4},{"alias":"Gabriel","Personality Type":"Extrovert","VARK Learning Preference":"Aural","groupNum":2},{"alias":"Astrid","Personality Type":"Introvert","VARK Learning Preference":"Visual","groupNum":1},{"alias":"Emilia","Personality Type":"Extrovert","VARK Learning Preference":"Read/Write","groupNum":5},{"alias":"Jasper","Personality Type":"Extrovert","VARK Learning Preference":"Kinesthetic","groupNum":4},{"alias":"Caleb","Personality Type":"Introvert","VARK Learning Preference":"Kinesthetic","groupNum":6},{"alias":"Olivia","Personality Type":"Introvert","VARK Learning Preference":"Kinesthetic","groupNum":6},{"alias":"Eli","Personality Type":"Extrovert","VARK Learning Preference":"Kinesthetic","groupNum":5},{"alias":"Ken","Personality Type":"Introvert","VARK Learning Preference":"Visual","groupNum":1},{"alias":"Aurora","Personality Type":"Extrovert","VARK Learning Preference":"Aural","groupNum":2},{"alias":"Felix","Personality Type":"Extrovert","VARK Learning Preference":"Kinesthetic","groupNum":5},{"alias":"Wyatt","Personality Type":"Introvert","VARK Learning Preference":"Kinesthetic","groupNum":6},{"alias":"Isabella","Personality Type":"Introvert","VARK Learning Preference":"Kinesthetic","groupNum":7},{"alias":"Jordan","Personality Type":"Extrovert","VARK Learning Preference":"Visual","groupNum":8},{"alias":"Ella","Personality Type":"Introvert","VARK Learning Preference":"Read/Write","groupNum":3},{"alias":"Jewel","Personality Type":"Introvert","VARK Learning Preference":"Kinesthetic","groupNum":7},{"alias":"Oliver","Personality Type":"Introvert","VARK Learning Preference":"Visual","groupNum":7},{"alias":"Charlotte","Personality Type":"Extrovert","VARK Learning Preference":"Visual","groupNum":8},{"alias":"Finn","Personality Type":"Introvert","VARK Learning Preference":"Aural","groupNum":8},{"alias":"Husdon","Personality Type":"Introvert","VARK Learning Preference":"Read/Write","groupNum":3},{"alias":"Liam","Personality Type":"Extrovert","VARK Learning Preference":"Aural","groupNum":8},{"alias":"Ava","Personality Type":"Introvert","VARK Learning Preference":"Kinesthetic","groupNum":7}]`,
      date_created: "2020-08-12T20:17:37.935Z",
      teacher_id: 1,
      class_id: 2
    },
    {
      id: 2,
      grouping_name: 'Buzz Groups',
      groupings: `[{"alias":"Sven","Reading Assessment Grade":82,"Vocabulary Assessment Grade":87,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":10},{"alias":"Violet","Reading Assessment Grade":85,"Vocabulary Assessment Grade":90,"Personality Type":"Extrovert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":8},{"alias":"Ethan","Reading Assessment Grade":77,"Vocabulary Assessment Grade":71,"Personality Type":"Introvert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":13},{"alias":"Aidan","Reading Assessment Grade":99,"Vocabulary Assessment Grade":100,"Personality Type":"Extrovert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":12},{"alias":"Sofia","Reading Assessment Grade":61,"Vocabulary Assessment Grade":60,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":6},{"alias":"Gabriel","Reading Assessment Grade":53,"Vocabulary Assessment Grade":60,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":10},{"alias":"Astrid","Reading Assessment Grade":86,"Vocabulary Assessment Grade":81,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":13},{"alias":"Emilia","Reading Assessment Grade":64,"Vocabulary Assessment Grade":67,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":7},{"alias":"Jasper","Reading Assessment Grade":78,"Vocabulary Assessment Grade":81,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":2,"groupNum":4},{"alias":"Caleb","Reading Assessment Grade":97,"Vocabulary Assessment Grade":92,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":9},{"alias":"Olivia","Reading Assessment Grade":88,"Vocabulary Assessment Grade":85,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":5},{"alias":"Eli","Reading Assessment Grade":62,"Vocabulary Assessment Grade":59,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":1},{"alias":"Ken","Reading Assessment Grade":40,"Vocabulary Assessment Grade":62,"Personality Type":"Introvert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":8},{"alias":"Aurora","Reading Assessment Grade":91,"Vocabulary Assessment Grade":93,"Personality Type":"Extrovert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":3},{"alias":"Felix","Reading Assessment Grade":64,"Vocabulary Assessment Grade":72,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":9},{"alias":"Wyatt","Reading Assessment Grade":76,"Vocabulary Assessment Grade":62,"Personality Type":"Introvert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":2},{"alias":"Isabella","Reading Assessment Grade":80,"Vocabulary Assessment Grade":71,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":1,"groupNum":4},{"alias":"Jordan","Reading Assessment Grade":88,"Vocabulary Assessment Grade":82,"Personality Type":"Extrovert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":2},{"alias":"Ella","Reading Assessment Grade":90,"Vocabulary Assessment Grade":95,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":1},{"alias":"Jewel","Reading Assessment Grade":85,"Vocabulary Assessment Grade":83,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":11},{"alias":"Oliver","Reading Assessment Grade":69,"Vocabulary Assessment Grade":70,"Personality Type":"Introvert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":3},{"alias":"Charlotte","Reading Assessment Grade":72,"Vocabulary Assessment Grade":78,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":11},{"alias":"Finn","Reading Assessment Grade":73,"Vocabulary Assessment Grade":70,"Personality Type":"Introvert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":12},{"alias":"Husdon","Reading Assessment Grade":86,"Vocabulary Assessment Grade":82,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":7},{"alias":"Liam","Reading Assessment Grade":74,"Vocabulary Assessment Grade":78,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":5},{"alias":"Ava","Reading Assessment Grade":88,"Vocabulary Assessment Grade":90,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":6}]`,
      date_created: "2020-08-12T20:17:37.935Z",
      teacher_id: 2,
      class_id: 3
    },
    
  ]
}

function makeAllExpectedGroupings() {
  return [
    {
      id: 1,
      grouping_name: 'Writing Groups',
      groupings: [{"alias":"Sven","Personality Type":"Introvert","VARK Learning Preference":"Visual","groupNum":1},{"alias":"Violet","Personality Type":"Extrovert","VARK Learning Preference":"Aural","groupNum":2},{"alias":"Ethan","Personality Type":"Introvert","VARK Learning Preference":"Read/Write","groupNum":3},{"alias":"Aidan","Personality Type":"Extrovert","VARK Learning Preference":"Kinesthetic","groupNum":4},{"alias":"Sofia","Personality Type":"Extrovert","VARK Learning Preference":"Kinesthetic","groupNum":4},{"alias":"Gabriel","Personality Type":"Extrovert","VARK Learning Preference":"Aural","groupNum":2},{"alias":"Astrid","Personality Type":"Introvert","VARK Learning Preference":"Visual","groupNum":1},{"alias":"Emilia","Personality Type":"Extrovert","VARK Learning Preference":"Read/Write","groupNum":5},{"alias":"Jasper","Personality Type":"Extrovert","VARK Learning Preference":"Kinesthetic","groupNum":4},{"alias":"Caleb","Personality Type":"Introvert","VARK Learning Preference":"Kinesthetic","groupNum":6},{"alias":"Olivia","Personality Type":"Introvert","VARK Learning Preference":"Kinesthetic","groupNum":6},{"alias":"Eli","Personality Type":"Extrovert","VARK Learning Preference":"Kinesthetic","groupNum":5},{"alias":"Ken","Personality Type":"Introvert","VARK Learning Preference":"Visual","groupNum":1},{"alias":"Aurora","Personality Type":"Extrovert","VARK Learning Preference":"Aural","groupNum":2},{"alias":"Felix","Personality Type":"Extrovert","VARK Learning Preference":"Kinesthetic","groupNum":5},{"alias":"Wyatt","Personality Type":"Introvert","VARK Learning Preference":"Kinesthetic","groupNum":6},{"alias":"Isabella","Personality Type":"Introvert","VARK Learning Preference":"Kinesthetic","groupNum":7},{"alias":"Jordan","Personality Type":"Extrovert","VARK Learning Preference":"Visual","groupNum":8},{"alias":"Ella","Personality Type":"Introvert","VARK Learning Preference":"Read/Write","groupNum":3},{"alias":"Jewel","Personality Type":"Introvert","VARK Learning Preference":"Kinesthetic","groupNum":7},{"alias":"Oliver","Personality Type":"Introvert","VARK Learning Preference":"Visual","groupNum":7},{"alias":"Charlotte","Personality Type":"Extrovert","VARK Learning Preference":"Visual","groupNum":8},{"alias":"Finn","Personality Type":"Introvert","VARK Learning Preference":"Aural","groupNum":8},{"alias":"Husdon","Personality Type":"Introvert","VARK Learning Preference":"Read/Write","groupNum":3},{"alias":"Liam","Personality Type":"Extrovert","VARK Learning Preference":"Aural","groupNum":8},{"alias":"Ava","Personality Type":"Introvert","VARK Learning Preference":"Kinesthetic","groupNum":7}],
      date_created: "2020-08-13T01:17:37.935Z",
      teacher_id: 1,
      class_id: 2
    },
    {
      id: 2,
      grouping_name: 'Buzz Groups',
      groupings: [{"alias":"Sven","Reading Assessment Grade":82,"Vocabulary Assessment Grade":87,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":10},{"alias":"Violet","Reading Assessment Grade":85,"Vocabulary Assessment Grade":90,"Personality Type":"Extrovert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":8},{"alias":"Ethan","Reading Assessment Grade":77,"Vocabulary Assessment Grade":71,"Personality Type":"Introvert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":13},{"alias":"Aidan","Reading Assessment Grade":99,"Vocabulary Assessment Grade":100,"Personality Type":"Extrovert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":12},{"alias":"Sofia","Reading Assessment Grade":61,"Vocabulary Assessment Grade":60,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":6},{"alias":"Gabriel","Reading Assessment Grade":53,"Vocabulary Assessment Grade":60,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":10},{"alias":"Astrid","Reading Assessment Grade":86,"Vocabulary Assessment Grade":81,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":13},{"alias":"Emilia","Reading Assessment Grade":64,"Vocabulary Assessment Grade":67,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":7},{"alias":"Jasper","Reading Assessment Grade":78,"Vocabulary Assessment Grade":81,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":2,"groupNum":4},{"alias":"Caleb","Reading Assessment Grade":97,"Vocabulary Assessment Grade":92,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":9},{"alias":"Olivia","Reading Assessment Grade":88,"Vocabulary Assessment Grade":85,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":5},{"alias":"Eli","Reading Assessment Grade":62,"Vocabulary Assessment Grade":59,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":1},{"alias":"Ken","Reading Assessment Grade":40,"Vocabulary Assessment Grade":62,"Personality Type":"Introvert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":8},{"alias":"Aurora","Reading Assessment Grade":91,"Vocabulary Assessment Grade":93,"Personality Type":"Extrovert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":3},{"alias":"Felix","Reading Assessment Grade":64,"Vocabulary Assessment Grade":72,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":9},{"alias":"Wyatt","Reading Assessment Grade":76,"Vocabulary Assessment Grade":62,"Personality Type":"Introvert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":2},{"alias":"Isabella","Reading Assessment Grade":80,"Vocabulary Assessment Grade":71,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":1,"groupNum":4},{"alias":"Jordan","Reading Assessment Grade":88,"Vocabulary Assessment Grade":82,"Personality Type":"Extrovert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":2},{"alias":"Ella","Reading Assessment Grade":90,"Vocabulary Assessment Grade":95,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":1},{"alias":"Jewel","Reading Assessment Grade":85,"Vocabulary Assessment Grade":83,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":11},{"alias":"Oliver","Reading Assessment Grade":69,"Vocabulary Assessment Grade":70,"Personality Type":"Introvert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":3},{"alias":"Charlotte","Reading Assessment Grade":72,"Vocabulary Assessment Grade":78,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":11},{"alias":"Finn","Reading Assessment Grade":73,"Vocabulary Assessment Grade":70,"Personality Type":"Introvert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":12},{"alias":"Husdon","Reading Assessment Grade":86,"Vocabulary Assessment Grade":82,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":7},{"alias":"Liam","Reading Assessment Grade":74,"Vocabulary Assessment Grade":78,"Personality Type":"Extrovert","Reading Assessment Grade Level":1,"Vocabulary Assessment Grade Level":1,"groupNum":5},{"alias":"Ava","Reading Assessment Grade":88,"Vocabulary Assessment Grade":90,"Personality Type":"Introvert","Reading Assessment Grade Level":2,"Vocabulary Assessment Grade Level":2,"groupNum":6}],
      date_created: "2020-08-13T01:17:37.935Z",
      teacher_id: 2,
      class_id: 3
    },
    
  ]
}

function makeGroupingToAdd() {
  const newGrouping = {
    id: 3,
    grouping_name: 'Book Study Teams',
    groupings: `[{"alias":"Sven","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Violet","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Ethan","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Aidan","Book Study Preference":"The Giver","Personality Type":"Extrovert","groupNum":4},{"alias":"Sofia","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":4},{"alias":"Gabriel","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Astrid","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Emilia","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Jasper","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Caleb","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":5},{"alias":"Olivia","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Eli","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Ken","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Aurora","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Felix","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":6},{"alias":"Wyatt","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Isabella","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Jordan","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Ella","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Jewel","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":4},{"alias":"Oliver","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Charlotte","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Finn","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Husdon","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":4},{"alias":"Liam","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":6},{"alias":"Ava","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3}]`,
    teacher_id: 1,
    class_id: 1
  }

  const expectedGrouping = {
    id: 1,
    grouping_name: 'Book Study Teams',
    groupings: [{"alias":"Sven","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Violet","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Ethan","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Aidan","Book Study Preference":"The Giver","Personality Type":"Extrovert","groupNum":4},{"alias":"Sofia","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":4},{"alias":"Gabriel","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Astrid","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Emilia","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Jasper","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Caleb","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":5},{"alias":"Olivia","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Eli","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Ken","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Aurora","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Felix","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":6},{"alias":"Wyatt","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Isabella","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Jordan","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Ella","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Jewel","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":4},{"alias":"Oliver","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Charlotte","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Finn","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Husdon","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":4},{"alias":"Liam","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":6},{"alias":"Ava","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3}],
    teacher_id: 1,
    class_id: 1
  }

  return {
    newGrouping,
    expectedGrouping
  }
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
  const testGroupings = makeGroupingsArray();
  return { testTeachers, testClasses, testGroupings };
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

// function cleanTables(db) {
//   return db.transaction(trx =>
//     trx.raw(
//       `TRUNCATE
//         teachers,
//         classes,
//         groupings,
//         generator_data
//       `
//     )
//     .then(() =>
//       Promise.all([
//         trx.raw(`ALTER SEQUENCE teachers_id_seq minvalue 0 START WITH 1`),
//         trx.raw(`ALTER SEQUENCE classes_id_seq minvalue 0 START WITH 1`),
//         trx.raw(`ALTER SEQUENCE groupings_id_seq minvalue 0 START WITH 1`),
//         trx.raw(`ALTER SEQUENCE generator_data_id_seq minvalue 0 START WITH 1`),
//         trx.raw(`SELECT setval('teachers_id_seq', 0)`),
//         trx.raw(`SELECT setval('classes_id_seq', 0)`),
//         trx.raw(`SELECT setval('groupings_id_seq', 0)`),
//         trx.raw(`SELECT setval('generator_data_id_seq', 0)`),
//       ])
//     )
//   );
// }

module.exports = {
  makeTeachersArray,
  makeClassesArray,
  makeGroupingsArray,
  makeAllExpectedGroupings,
  makeGroupingToAdd,
  makeMaliciousClassName,
  makeFixtures,
  seedTeachers,
  seedClasses,
  // cleanTables
};