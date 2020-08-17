const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

function makeHashedTeachersArray() {
  return [
    {
      id: 1,
      teacher_name: "msmith",
      email: "msmith@educate.me",
      password: '$2a$12$2G8esEvUZdLKJ4iIN.74E.wXofmdqxlWfVkjnfG.1GNFR5WEBQJdS',
      date_created: "2020-08-10T20:17:37.935Z"
    },
    {
      id: 2,
      teacher_name: "kdavis",
      email: "kdavis@educate.me",
      password: '$2a$12$2G8esEvUZdLKJ4iIN.74E.wXofmdqxlWfVkjnfG.1GNFR5WEBQJdS',
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
      groupings: JSON.stringify([{ "alias": "Blaise", "Hogwarts House": "Slytherin", "Assessment Grade": 81, "Assessment Grade Level": 2, "groupNum": 1 }, { "alias": "Cho", "Hogwarts House": "Ravenclaw", "Assessment Grade": 89, "Assessment Grade Level": 3, "groupNum": 1 }, { "alias": "Colin", "Hogwarts House": "Gryffindor", "Assessment Grade": 79, "Assessment Grade Level": 2, "groupNum": 2 }, { "alias": "Cormac", "Hogwarts House": "Gryffindor", "Assessment Grade": 81, "Assessment Grade Level": 2, "groupNum": 3 }, { "alias": "Crabbe", "Hogwarts House": "Slytherin", "Assessment Grade": 52, "Assessment Grade Level": 1, "groupNum": 2 }, { "alias": "Dean", "Hogwarts House": "Gryffindor", "Assessment Grade": 75, "Assessment Grade Level": 1, "groupNum": 1 }, { "alias": "Draco", "Hogwarts House": "Slytherin", "Assessment Grade": 82, "Assessment Grade Level": 2, "groupNum": 4 }, { "alias": "Ernie", "Hogwarts House": "Hufflepuff", "Assessment Grade": 83, "Assessment Grade Level": 2, "groupNum": 5 }, { "alias": "Ginny", "Hogwarts House": "Gryffindor", "Assessment Grade": 81, "Assessment Grade Level": 2, "groupNum": 6 }, { "alias": "Goyle", "Hogwarts House": "Slytherin", "Assessment Grade": 55, "Assessment Grade Level": 1, "groupNum": 3 }, { "alias": "Hannah", "Hogwarts House": "Hufflepuff", "Assessment Grade": 65, "Assessment Grade Level": 1, "groupNum": 4 }, { "alias": "Harry", "Hogwarts House": "Gryffindor", "Assessment Grade": 78, "Assessment Grade Level": 2, "groupNum": 7 }, { "alias": "Hermione", "Hogwarts House": "Gryffindor", "Assessment Grade": 100, "Assessment Grade Level": 3, "groupNum": 4 }, { "alias": "Justin", "Hogwarts House": "Hufflepuff", "Assessment Grade": 77, "Assessment Grade Level": 2, "groupNum": 7 }, { "alias": "Katie", "Hogwarts House": "Gryffindor", "Assessment Grade": 75, "Assessment Grade Level": 1, "groupNum": 5 }, { "alias": "Lavender", "Hogwarts House": "Gryffindor", "Assessment Grade": 84, "Assessment Grade Level": 3, "groupNum": 8 }, { "alias": "Luna", "Hogwarts House": "Ravenclaw", "Assessment Grade": 92, "Assessment Grade Level": 3, "groupNum": 2 }, { "alias": "Michael", "Hogwarts House": "Ravenclaw", "Assessment Grade": 68, "Assessment Grade Level": 1, "groupNum": 6 }, { "alias": "Neville", "Hogwarts House": "Gryffindor", "Assessment Grade": 65, "Assessment Grade Level": 1, "groupNum": 8 }, { "alias": "Pansy", "Hogwarts House": "Slytherin", "Assessment Grade": 84, "Assessment Grade Level": 3, "groupNum": 5 }, { "alias": "Padma", "Hogwarts House": "Ravenclaw", "Assessment Grade": 88, "Assessment Grade Level": 3, "groupNum": 3 }, { "alias": "Parvati", "Hogwarts House": "Gryffindor", "Assessment Grade": 90, "Assessment Grade Level": 3, "groupNum": 8 }, { "alias": "Ron", "Hogwarts House": "Gryffindor", "Assessment Grade": 68, "Assessment Grade Level": 1, "groupNum": 8 }, { "alias": "Seamus", "Hogwarts House": "Gryffindor", "Assessment Grade": 74, "Assessment Grade Level": 1, "groupNum": 7 }, { "alias": "Theodore", "Hogwarts House": "Slytherin", "Assessment Grade": 86, "Assessment Grade Level": 3, "groupNum": 6 }, { "alias": "Zacharias", "Hogwarts House": "Hufflepuff", "Assessment Grade": 95, "Assessment Grade Level": 3, "groupNum": 7 }]),

      data: {
        groupSize: 3,
        groupingType: 'mixed',
        categoriesLength: 2,
        categoryTypes: ['qualitative', 'quantitative'],
        categoryNames: ['Hogwarts House', 'Assessment Grade'],
        categoryVals: [`Slytherin\nRavenclaw\nGryffindor\nGryffindor\nSlytherin\nGryffindor\nSlytherin\nHufflepuff\nGryffindor\nSlytherin\nHufflepuff\nGryffindor\nGryffindor\nHufflepuff\nGryffindor\nGryffindor\nRavenclaw\nRavenclaw\nGryffindor\nSlytherin\nRavenclaw\nGryffindor\nGryffindor\nGryffindor\nSlytherin\nHufflepuff\n`, `81\n89\n79\n81\n52\n75\n82\n83\n81\n55\n65\n78\n100\n77\n75\n84\n92\n68\n65\n84\n88\n90\n68\n74\n86\n95\n`],
        aliases: `Blaise\nCho\nColin\nCormac\nCrabbe\nDean\nDraco\nErnie\nGinny\nGoyle\nHannah\nHarry\nHermione\nJustin\nKatie\nLavender\nLuna\nMichael\nNeville\nPansy\nPadma\nParvati\nRon\nSeamus\nTheodore\nZacharias\n`,
      },
      date_created: "2020-08-13T01:17:37.935Z",
      teacher_id: 1,
      class_id: 1
    },
    {
      id: 2,
      grouping_name: 'Buzz Groups',
      groupings: JSON.stringify([{ "alias": "Rose", "Energy": "Introversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Perceiving", "groupNum": 3 }, { "alias": "Ellie", "Energy": "Introversion", "Information": "Sensing", "Decisions": "Feeling", "Organization": "Perceiving", "groupNum": 3 }, { "alias": "Kiefer", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Perceiving", "groupNum": 4 }, { "alias": "Tomas", "Energy": "Introversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Perceiving", "groupNum": 2 }, { "alias": "Pollyanna", "Energy": "Extroversion", "Information": "Intuition", "Decisions": "Feeling", "Organization": "Judging", "groupNum": 1 }, { "alias": "Roberto", "Energy": "Introversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 1 }, { "alias": "Allen", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Perceiving", "groupNum": 2 }, { "alias": "George", "Energy": "Extroversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 2 }, { "alias": "Carol", "Energy": "Extroversion", "Information": "Intuition", "Decisions": "Feeling", "Organization": "Perceiving", "groupNum": 1 }, { "alias": "Henrietta", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Feeling", "Organization": "Judging", "groupNum": 3 }, { "alias": "Marie", "Energy": "Introversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 1 }, { "alias": "John", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Feeling", "Organization": "Perceiving", "groupNum": 2 }, { "alias": "Jules", "Energy": "Introversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 4 }, { "alias": "Jennifer", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 4 }, { "alias": "Garrett", "Energy": "Introversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 1 }, { "alias": "Javier", "Energy": "Extroversion", "Information": "Intuition", "Decisions": "Feeling", "Organization": "Perceiving", "groupNum": 3 }, { "alias": "Kayle", "Energy": "Introversion", "Information": "Sensing", "Decisions": "Feeling", "Organization": "Judging", "groupNum": 4 }, { "alias": "Dawn", "Energy": "Extroversion", "Information": "Intuition", "Decisions": "Feeling", "Organization": "Perceiving", "groupNum": 4 }, { "alias": "Cat", "Energy": "Introversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 2 }, { "alias": "Greg", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 3 }, { "alias": "Anneliese", "Energy": "Extroversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Perceiving", "groupNum": 4 }, { "alias": "Lillian", "Energy": "Introversion", "Information": "Sensing", "Decisions": "Feeling", "Organization": "Judging", "groupNum": 3 }, { "alias": "Miles", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Perceiving", "groupNum": 2 }]),

      data: {
        groupSize: 5,
        groupingType: 'mixed',
        categoriesLength: 4,
        categoryTypes: ["qualitative", "qualitative", "qualitative", "qualitative"],
        categoryNames: ["Energy", "Information", "Decisions", "Organization"],
        categoryVals: [`Introversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nExtroversion\nExtroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nExtroversion\nIntroversion\nExtroversion`, `Intuition\nSensing\nSensing\nIntuition\nIntuition\nIntuition\nSensing\nIntuition\nIntuition\nSensing\nSensing\nSensing\nIntuition\nSensing\nSensing\nIntuition\nSensing\nIntuition\nIntuition\nSensing\nIntuition\nSensing\nSensing`, `Thinking\nFeeling\nThinking\nThinking\nFeeling\nThinking\nThinking\nThinking\nFeeling\nFeeling\nThinking\nFeeling\nThinking\nThinking\nThinking\nFeeling\nFeeling\nFeeling\nThinking\nThinking\nThinking\nFeeling\nThinking`, `Perceiving\nPerceiving\nPerceiving\nPerceiving\nJudging\nJudging\nPerceiving\nJudging\nPerceiving\nJudging\nJudging\nPerceiving\nJudging\nJudging\nJudging\nPerceiving\nJudging\nPerceiving\nJudging\nJudging\nPerceiving\nJudging\nPerceiving`],
        aliases: `Rose\nEllie\nKiefer\nTomas\nPollyanna\nRoberto\nAllen\nGeorge\nCarol\nHenrietta\nMarie\nJohn\nJules\nJennifer\nGarrett\nJavier\nKayle\nDawn\nCat\nGreg\nAnneliese\nLillian\nMiles`,
      },
      date_created: "2020-08-13T01:17:37.935Z",
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
      groupings: [{ "alias": "Blaise", "Hogwarts House": "Slytherin", "Assessment Grade": 81, "Assessment Grade Level": 2, "groupNum": 1 }, { "alias": "Cho", "Hogwarts House": "Ravenclaw", "Assessment Grade": 89, "Assessment Grade Level": 3, "groupNum": 1 }, { "alias": "Colin", "Hogwarts House": "Gryffindor", "Assessment Grade": 79, "Assessment Grade Level": 2, "groupNum": 2 }, { "alias": "Cormac", "Hogwarts House": "Gryffindor", "Assessment Grade": 81, "Assessment Grade Level": 2, "groupNum": 3 }, { "alias": "Crabbe", "Hogwarts House": "Slytherin", "Assessment Grade": 52, "Assessment Grade Level": 1, "groupNum": 2 }, { "alias": "Dean", "Hogwarts House": "Gryffindor", "Assessment Grade": 75, "Assessment Grade Level": 1, "groupNum": 1 }, { "alias": "Draco", "Hogwarts House": "Slytherin", "Assessment Grade": 82, "Assessment Grade Level": 2, "groupNum": 4 }, { "alias": "Ernie", "Hogwarts House": "Hufflepuff", "Assessment Grade": 83, "Assessment Grade Level": 2, "groupNum": 5 }, { "alias": "Ginny", "Hogwarts House": "Gryffindor", "Assessment Grade": 81, "Assessment Grade Level": 2, "groupNum": 6 }, { "alias": "Goyle", "Hogwarts House": "Slytherin", "Assessment Grade": 55, "Assessment Grade Level": 1, "groupNum": 3 }, { "alias": "Hannah", "Hogwarts House": "Hufflepuff", "Assessment Grade": 65, "Assessment Grade Level": 1, "groupNum": 4 }, { "alias": "Harry", "Hogwarts House": "Gryffindor", "Assessment Grade": 78, "Assessment Grade Level": 2, "groupNum": 7 }, { "alias": "Hermione", "Hogwarts House": "Gryffindor", "Assessment Grade": 100, "Assessment Grade Level": 3, "groupNum": 4 }, { "alias": "Justin", "Hogwarts House": "Hufflepuff", "Assessment Grade": 77, "Assessment Grade Level": 2, "groupNum": 7 }, { "alias": "Katie", "Hogwarts House": "Gryffindor", "Assessment Grade": 75, "Assessment Grade Level": 1, "groupNum": 5 }, { "alias": "Lavender", "Hogwarts House": "Gryffindor", "Assessment Grade": 84, "Assessment Grade Level": 3, "groupNum": 8 }, { "alias": "Luna", "Hogwarts House": "Ravenclaw", "Assessment Grade": 92, "Assessment Grade Level": 3, "groupNum": 2 }, { "alias": "Michael", "Hogwarts House": "Ravenclaw", "Assessment Grade": 68, "Assessment Grade Level": 1, "groupNum": 6 }, { "alias": "Neville", "Hogwarts House": "Gryffindor", "Assessment Grade": 65, "Assessment Grade Level": 1, "groupNum": 8 }, { "alias": "Pansy", "Hogwarts House": "Slytherin", "Assessment Grade": 84, "Assessment Grade Level": 3, "groupNum": 5 }, { "alias": "Padma", "Hogwarts House": "Ravenclaw", "Assessment Grade": 88, "Assessment Grade Level": 3, "groupNum": 3 }, { "alias": "Parvati", "Hogwarts House": "Gryffindor", "Assessment Grade": 90, "Assessment Grade Level": 3, "groupNum": 8 }, { "alias": "Ron", "Hogwarts House": "Gryffindor", "Assessment Grade": 68, "Assessment Grade Level": 1, "groupNum": 8 }, { "alias": "Seamus", "Hogwarts House": "Gryffindor", "Assessment Grade": 74, "Assessment Grade Level": 1, "groupNum": 7 }, { "alias": "Theodore", "Hogwarts House": "Slytherin", "Assessment Grade": 86, "Assessment Grade Level": 3, "groupNum": 6 }, { "alias": "Zacharias", "Hogwarts House": "Hufflepuff", "Assessment Grade": 95, "Assessment Grade Level": 3, "groupNum": 7 }],

      data: {
        groupSize: 3,
        groupingType: 'mixed',
        categoriesLength: 2,
        categoryTypes: ['qualitative', 'quantitative'],
        categoryNames: ['Hogwarts House', 'Assessment Grade'],
        categoryVals: [`Slytherin\nRavenclaw\nGryffindor\nGryffindor\nSlytherin\nGryffindor\nSlytherin\nHufflepuff\nGryffindor\nSlytherin\nHufflepuff\nGryffindor\nGryffindor\nHufflepuff\nGryffindor\nGryffindor\nRavenclaw\nRavenclaw\nGryffindor\nSlytherin\nRavenclaw\nGryffindor\nGryffindor\nGryffindor\nSlytherin\nHufflepuff\n`, `81\n89\n79\n81\n52\n75\n82\n83\n81\n55\n65\n78\n100\n77\n75\n84\n92\n68\n65\n84\n88\n90\n68\n74\n86\n95\n`],
        aliases: `Blaise\nCho\nColin\nCormac\nCrabbe\nDean\nDraco\nErnie\nGinny\nGoyle\nHannah\nHarry\nHermione\nJustin\nKatie\nLavender\nLuna\nMichael\nNeville\nPansy\nPadma\nParvati\nRon\nSeamus\nTheodore\nZacharias\n`,
      },
      date_created: "2020-08-13T06:17:37.935Z",
      teacher_id: 1,
      class_id: 1
    },
    {
      id: 2,
      grouping_name: 'Buzz Groups',
      groupings: [{ "alias": "Rose", "Energy": "Introversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Perceiving", "groupNum": 3 }, { "alias": "Ellie", "Energy": "Introversion", "Information": "Sensing", "Decisions": "Feeling", "Organization": "Perceiving", "groupNum": 3 }, { "alias": "Kiefer", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Perceiving", "groupNum": 4 }, { "alias": "Tomas", "Energy": "Introversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Perceiving", "groupNum": 2 }, { "alias": "Pollyanna", "Energy": "Extroversion", "Information": "Intuition", "Decisions": "Feeling", "Organization": "Judging", "groupNum": 1 }, { "alias": "Roberto", "Energy": "Introversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 1 }, { "alias": "Allen", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Perceiving", "groupNum": 2 }, { "alias": "George", "Energy": "Extroversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 2 }, { "alias": "Carol", "Energy": "Extroversion", "Information": "Intuition", "Decisions": "Feeling", "Organization": "Perceiving", "groupNum": 1 }, { "alias": "Henrietta", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Feeling", "Organization": "Judging", "groupNum": 3 }, { "alias": "Marie", "Energy": "Introversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 1 }, { "alias": "John", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Feeling", "Organization": "Perceiving", "groupNum": 2 }, { "alias": "Jules", "Energy": "Introversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 4 }, { "alias": "Jennifer", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 4 }, { "alias": "Garrett", "Energy": "Introversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 1 }, { "alias": "Javier", "Energy": "Extroversion", "Information": "Intuition", "Decisions": "Feeling", "Organization": "Perceiving", "groupNum": 3 }, { "alias": "Kayle", "Energy": "Introversion", "Information": "Sensing", "Decisions": "Feeling", "Organization": "Judging", "groupNum": 4 }, { "alias": "Dawn", "Energy": "Extroversion", "Information": "Intuition", "Decisions": "Feeling", "Organization": "Perceiving", "groupNum": 4 }, { "alias": "Cat", "Energy": "Introversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 2 }, { "alias": "Greg", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Judging", "groupNum": 3 }, { "alias": "Anneliese", "Energy": "Extroversion", "Information": "Intuition", "Decisions": "Thinking", "Organization": "Perceiving", "groupNum": 4 }, { "alias": "Lillian", "Energy": "Introversion", "Information": "Sensing", "Decisions": "Feeling", "Organization": "Judging", "groupNum": 3 }, { "alias": "Miles", "Energy": "Extroversion", "Information": "Sensing", "Decisions": "Thinking", "Organization": "Perceiving", "groupNum": 2 }],

      data: {
        groupSize: 5,
        groupingType: 'mixed',
        categoriesLength: 4,
        categoryTypes: ["qualitative", "qualitative", "qualitative", "qualitative"],
        categoryNames: ["Energy", "Information", "Decisions", "Organization"],
        categoryVals: [`Introversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nExtroversion\nExtroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nExtroversion\nIntroversion\nExtroversion`, `Intuition\nSensing\nSensing\nIntuition\nIntuition\nIntuition\nSensing\nIntuition\nIntuition\nSensing\nSensing\nSensing\nIntuition\nSensing\nSensing\nIntuition\nSensing\nIntuition\nIntuition\nSensing\nIntuition\nSensing\nSensing`, `Thinking\nFeeling\nThinking\nThinking\nFeeling\nThinking\nThinking\nThinking\nFeeling\nFeeling\nThinking\nFeeling\nThinking\nThinking\nThinking\nFeeling\nFeeling\nFeeling\nThinking\nThinking\nThinking\nFeeling\nThinking`, `Perceiving\nPerceiving\nPerceiving\nPerceiving\nJudging\nJudging\nPerceiving\nJudging\nPerceiving\nJudging\nJudging\nPerceiving\nJudging\nJudging\nJudging\nPerceiving\nJudging\nPerceiving\nJudging\nJudging\nPerceiving\nJudging\nPerceiving`],
        aliases: `Rose\nEllie\nKiefer\nTomas\nPollyanna\nRoberto\nAllen\nGeorge\nCarol\nHenrietta\nMarie\nJohn\nJules\nJennifer\nGarrett\nJavier\nKayle\nDawn\nCat\nGreg\nAnneliese\nLillian\nMiles`,
      },
      date_created: "2020-08-13T06:17:37.935Z",
      teacher_id: 2,
      class_id: 3
    },
    
  ]
}

function makeGroupingToAdd() {
  const newGrouping = {
    id: 3,
    grouping_name: 'Book Study Teams',
    groupings: [{"alias":"Sven","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Violet","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Ethan","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Aidan","Book Study Preference":"The Giver","Personality Type":"Extrovert","groupNum":4},{"alias":"Sofia","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":4},{"alias":"Gabriel","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Astrid","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Emilia","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Jasper","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Caleb","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":5},{"alias":"Olivia","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Eli","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Ken","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Aurora","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Felix","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":6},{"alias":"Wyatt","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Isabella","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Jordan","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Ella","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Jewel","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":4},{"alias":"Oliver","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Charlotte","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Finn","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Husdon","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":4},{"alias":"Liam","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":6},{"alias":"Ava","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3}],
    data: {
      groupSize: 4,
      groupingType: 'similar',
      categoriesLength: 2,
      categoryTypes: ['qualitative', 'qualitative'],
      categoryNames: ["Book Study Preference", "Personality Type"],
      categoryVals: [`The Giver\nWatership Down\nTuck Everlasting\nThe Giver\nTuck Everlasting\nTuck Everlasting\nThe Giver\nWatership Down\nTuck Everlasting\nWatership Down\nThe Giver\nWatership Down\nTuck Everlasting\nWatership Down\nWatership Down\nThe Giver\nTuck Everlasting\nTuck Everlasting\nWatership Down\nThe Giver\nWatership Down\nTuck Everlasting\nWatership Down\nThe Giver\nWatership Down\nTuck Everlasting`, `Introvert\nExtrovert\nIntrovert\nExtrovert\nExtrovert\nExtrovert\nIntrovert\nExtrovert\nExtrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\nExtrovert\nExtrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\n`],
      aliases: `Sven\nViolet\nEthan\nAidan\nSofia\nGabriel\nAstrid\nEmilia\nJasper\nCaleb\nOlivia\nEli\nKen\nAurora\nFelix\nWyatt\nIsabella\nJordan\nElla\nJewel\nOliver\nCharlotte\nFinn\nHusdon\nLiam\nAva`,
    },
    teacher_id: 1,
    class_id: 1
  }

  const expectedGrouping = {
    id: 1,
    grouping_name: 'Book Study Teams',
    groupings: [{"alias":"Sven","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Violet","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Ethan","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Aidan","Book Study Preference":"The Giver","Personality Type":"Extrovert","groupNum":4},{"alias":"Sofia","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":4},{"alias":"Gabriel","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Astrid","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Emilia","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Jasper","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Caleb","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":5},{"alias":"Olivia","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Eli","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Ken","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Aurora","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Felix","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":6},{"alias":"Wyatt","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Isabella","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Jordan","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Ella","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Jewel","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":4},{"alias":"Oliver","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Charlotte","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Finn","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Husdon","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":4},{"alias":"Liam","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":6},{"alias":"Ava","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3}],
    data: {
      groupSize: 4,
      groupingType: 'similar',
      categoriesLength: 2,
      categoryTypes: ['qualitative', 'qualitative'],
      categoryNames: ["Book Study Preference", "Personality Type"],
      categoryVals: [`The Giver\nWatership Down\nTuck Everlasting\nThe Giver\nTuck Everlasting\nTuck Everlasting\nThe Giver\nWatership Down\nTuck Everlasting\nWatership Down\nThe Giver\nWatership Down\nTuck Everlasting\nWatership Down\nWatership Down\nThe Giver\nTuck Everlasting\nTuck Everlasting\nWatership Down\nThe Giver\nWatership Down\nTuck Everlasting\nWatership Down\nThe Giver\nWatership Down\nTuck Everlasting`, `Introvert\nExtrovert\nIntrovert\nExtrovert\nExtrovert\nExtrovert\nIntrovert\nExtrovert\nExtrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\nExtrovert\nExtrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\n`],
      aliases: `Sven\nViolet\nEthan\nAidan\nSofia\nGabriel\nAstrid\nEmilia\nJasper\nCaleb\nOlivia\nEli\nKen\nAurora\nFelix\nWyatt\nIsabella\nJordan\nElla\nJewel\nOliver\nCharlotte\nFinn\nHusdon\nLiam\nAva`,
    },
    teacher_id: 1,
    class_id: 1
  }

  return {
    newGrouping,
    expectedGrouping
  }
}

function makeGroupingToPatch() {
  return {
    grouping_name: 'Patched Writing Groups',
    groupings: [{ "alias": "Zabini", "Hogwarts House": "Slytherin", "Assessment Grade": 81, "Assessment Grade Level": 2, "groupNum": 2 }, { "alias": "Cho", "Hogwarts House": "Ravenclaw", "Assessment Grade": 89, "Assessment Grade Level": 3, "groupNum": 2 }, { "alias": "Colin", "Hogwarts House": "Gryffindor", "Assessment Grade": 79, "Assessment Grade Level": 2, "groupNum": 3 }, { "alias": "Cormac", "Hogwarts House": "Gryffindor", "Assessment Grade": 81, "Assessment Grade Level": 2, "groupNum": 4 }, { "alias": "Crabbe", "Hogwarts House": "Slytherin", "Assessment Grade": 52, "Assessment Grade Level": 1, "groupNum": 3 }, { "alias": "Dean", "Hogwarts House": "Gryffindor", "Assessment Grade": 75, "Assessment Grade Level": 1, "groupNum": 2 }, { "alias": "Draco", "Hogwarts House": "Slytherin", "Assessment Grade": 82, "Assessment Grade Level": 2, "groupNum": 5 }, { "alias": "Ernie", "Hogwarts House": "Hufflepuff", "Assessment Grade": 83, "Assessment Grade Level": 2, "groupNum": 6 }, { "alias": "Ginny", "Hogwarts House": "Gryffindor", "Assessment Grade": 81, "Assessment Grade Level": 2, "groupNum": 7 }, { "alias": "Goyle", "Hogwarts House": "Slytherin", "Assessment Grade": 55, "Assessment Grade Level": 1, "groupNum": 4 }, { "alias": "Hannah", "Hogwarts House": "Hufflepuff", "Assessment Grade": 65, "Assessment Grade Level": 1, "groupNum": 5 }, { "alias": "Harry", "Hogwarts House": "Gryffindor", "Assessment Grade": 78, "Assessment Grade Level": 2, "groupNum": 8 }, { "alias": "Hermione", "Hogwarts House": "Gryffindor", "Assessment Grade": 100, "Assessment Grade Level": 3, "groupNum": 5 }, { "alias": "Justin", "Hogwarts House": "Hufflepuff", "Assessment Grade": 77, "Assessment Grade Level": 2, "groupNum": 8 }, { "alias": "Katie", "Hogwarts House": "Gryffindor", "Assessment Grade": 75, "Assessment Grade Level": 1, "groupNum": 6 }, { "alias": "Lavender", "Hogwarts House": "Gryffindor", "Assessment Grade": 84, "Assessment Grade Level": 3, "groupNum": 1 }, { "alias": "Luna", "Hogwarts House": "Ravenclaw", "Assessment Grade": 92, "Assessment Grade Level": 3, "groupNum": 3 }, { "alias": "Michael", "Hogwarts House": "Ravenclaw", "Assessment Grade": 68, "Assessment Grade Level": 1, "groupNum": 7 }, { "alias": "Neville", "Hogwarts House": "Gryffindor", "Assessment Grade": 65, "Assessment Grade Level": 1, "groupNum": 1 }, { "alias": "Pansy", "Hogwarts House": "Slytherin", "Assessment Grade": 84, "Assessment Grade Level": 3, "groupNum": 6 }, { "alias": "Padma", "Hogwarts House": "Ravenclaw", "Assessment Grade": 88, "Assessment Grade Level": 3, "groupNum": 4 }, { "alias": "Parvati", "Hogwarts House": "Gryffindor", "Assessment Grade": 90, "Assessment Grade Level": 3, "groupNum": 1 }, { "alias": "Ron", "Hogwarts House": "Gryffindor", "Assessment Grade": 68, "Assessment Grade Level": 1, "groupNum": 1 }, { "alias": "Seamus", "Hogwarts House": "Gryffindor", "Assessment Grade": 74, "Assessment Grade Level": 1, "groupNum": 8 }, { "alias": "Theodore", "Hogwarts House": "Slytherin", "Assessment Grade": 86, "Assessment Grade Level": 3, "groupNum": 7 }, { "alias": "Zacharias", "Hogwarts House": "Hufflepuff", "Assessment Grade": 95, "Assessment Grade Level": 3, "groupNum": 8 }],
    data: {
      groupSize: 3,
      groupingType: 'mixed',
      categoriesLength: 2,
      categoryTypes: ['qualitative', 'quantitative'],
      categoryNames: ['Hogwarts House', 'Assessment Grade'],
      categoryVals: [`Slytherin\nRavenclaw\nGryffindor\nGryffindor\nSlytherin\nGryffindor\nSlytherin\nHufflepuff\nGryffindor\nSlytherin\nHufflepuff\nGryffindor\nGryffindor\nHufflepuff\nGryffindor\nGryffindor\nRavenclaw\nRavenclaw\nGryffindor\nSlytherin\nRavenclaw\nGryffindor\nGryffindor\nGryffindor\nSlytherin\nHufflepuff\n`, `81\n89\n79\n81\n52\n75\n82\n83\n81\n55\n65\n78\n100\n77\n75\n84\n92\n68\n65\n84\n88\n90\n68\n74\n86\n95\n`],
      aliases: `Zabini\nCho\nColin\nCormac\nCrabbe\nDean\nDraco\nErnie\nGinny\nGoyle\nHannah\nHarry\nHermione\nJustin\nKatie\nLavender\nLuna\nMichael\nNeville\nPansy\nPadma\nParvati\nRon\nSeamus\nTheodore\nZacharias\n`,
    },
    class_id: 1
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

function makeMaliciousGrouping() {
  const maliciousGrouping = {
    id: 911,
    grouping_name: `I am a bad grouping <script>alert("xss");</script>`,
    groupings: [{"alias":`Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,"Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Violet","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Ethan","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Aidan","Book Study Preference":"The Giver","Personality Type":"Extrovert","groupNum":4},{"alias":"Sofia","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":4},{"alias":"Gabriel","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Astrid","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Emilia","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Jasper","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Caleb","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":5},{"alias":"Olivia","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Eli","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Ken","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Aurora","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Felix","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":6},{"alias":"Wyatt","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Isabella","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Jordan","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Ella","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Jewel","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":4},{"alias":"Oliver","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Charlotte","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Finn","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Husdon","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":4},{"alias":"Liam","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":6},{"alias":"Ava","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3}],
    data: {
      groupSize: 4,
      groupingType: 'similar',
      categoriesLength: 2,
      categoryTypes: ['qualitative', 'qualitative'],
      categoryNames: ["Book Study Preference", "Personality Type"],
      categoryVals: [`The Giver\nWatership Down\nTuck Everlasting\nThe Giver\nTuck Everlasting\nTuck Everlasting\nThe Giver\nWatership Down\nTuck Everlasting\nWatership Down\nThe Giver\nWatership Down\nTuck Everlasting\nWatership Down\nWatership Down\nThe Giver\nTuck Everlasting\nTuck Everlasting\nWatership Down\nThe Giver\nWatership Down\nTuck Everlasting\nWatership Down\nThe Giver\nWatership Down\nTuck Everlasting`, `Introvert\nExtrovert\nIntrovert\nExtrovert\nExtrovert\nExtrovert\nIntrovert\nExtrovert\nExtrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\nExtrovert\nExtrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\n`],
      aliases: `Sven\nViolet\nEthan\nAidan\nSofia\nGabriel\nAstrid\nEmilia\nJasper\nCaleb\nOlivia\nEli\nKen\nAurora\nFelix\nWyatt\nIsabella\nJordan\nElla\nJewel\nOliver\nCharlotte\nFinn\nHusdon\nLiam\nAva`,
    },
    teacher_id: 1,
    class_id: 1
  }

  const sanitizedGrouping = {
    id: 911,
    grouping_name: `I am a bad grouping &lt;script&gt;alert(\"xss\");&lt;/script&gt;`,
    groupings: [{"alias":`Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`,"Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Violet","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Ethan","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Aidan","Book Study Preference":"The Giver","Personality Type":"Extrovert","groupNum":4},{"alias":"Sofia","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":4},{"alias":"Gabriel","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Astrid","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Emilia","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Jasper","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Caleb","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":5},{"alias":"Olivia","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Eli","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Ken","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Aurora","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":2},{"alias":"Felix","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":6},{"alias":"Wyatt","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":1},{"alias":"Isabella","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3},{"alias":"Jordan","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Ella","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Jewel","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":4},{"alias":"Oliver","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Charlotte","Book Study Preference":"Tuck Everlasting","Personality Type":"Extrovert","groupNum":5},{"alias":"Finn","Book Study Preference":"Watership Down","Personality Type":"Introvert","groupNum":6},{"alias":"Husdon","Book Study Preference":"The Giver","Personality Type":"Introvert","groupNum":4},{"alias":"Liam","Book Study Preference":"Watership Down","Personality Type":"Extrovert","groupNum":6},{"alias":"Ava","Book Study Preference":"Tuck Everlasting","Personality Type":"Introvert","groupNum":3}],
    data: {
      groupSize: 4,
      groupingType: 'similar',
      categoriesLength: 2,
      categoryTypes: ['qualitative', 'qualitative'],
      categoryNames: ["Book Study Preference", "Personality Type"],
      categoryVals: [`The Giver\nWatership Down\nTuck Everlasting\nThe Giver\nTuck Everlasting\nTuck Everlasting\nThe Giver\nWatership Down\nTuck Everlasting\nWatership Down\nThe Giver\nWatership Down\nTuck Everlasting\nWatership Down\nWatership Down\nThe Giver\nTuck Everlasting\nTuck Everlasting\nWatership Down\nThe Giver\nWatership Down\nTuck Everlasting\nWatership Down\nThe Giver\nWatership Down\nTuck Everlasting`, `Introvert\nExtrovert\nIntrovert\nExtrovert\nExtrovert\nExtrovert\nIntrovert\nExtrovert\nExtrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\nExtrovert\nExtrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\nIntrovert\nExtrovert\nIntrovert\n`],
      aliases: `Sven\nViolet\nEthan\nAidan\nSofia\nGabriel\nAstrid\nEmilia\nJasper\nCaleb\nOlivia\nEli\nKen\nAurora\nFelix\nWyatt\nIsabella\nJordan\nElla\nJewel\nOliver\nCharlotte\nFinn\nHusdon\nLiam\nAva`,
    },
    teacher_id: 1,
    class_id: 1
  }

  return {
    maliciousGrouping,
    sanitizedGrouping
  }
}

function makeFixtures() {
  const testTeachers = makeTeachersArray();
  const testClasses = makeClassesArray();
  const testGroupings = makeGroupingsArray();
  const hashedTeachers = makeHashedTeachersArray();
  return { testTeachers, testClasses, testGroupings, hashedTeachers };
}

function createJwt(subject, payload, secret = process.env.JWT_SECRET) {
  return jwt.sign(payload, secret, {
    subject,
    algorithm: 'HS256',
  });
}

function makeAuthHeader(teacher, secret = process.env.JWT_SECRET) {
  const subject = teacher.teacher_name;
  const payload = {  teacher_id: teacher.id };
  const token = createJwt(subject, payload, secret);
  return `Bearer ${token}`;
}

module.exports = {
  makeTeachersArray,
  makeHashedTeachersArray,
  makeClassesArray,
  makeGroupingsArray,
  makeAllExpectedGroupings,
  makeGroupingToAdd,
  makeGroupingToPatch,
  makeMaliciousClassName,
  makeMaliciousGrouping,
  makeFixtures,
  createJwt,
  makeAuthHeader
};