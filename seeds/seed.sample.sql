BEGIN;

TRUNCATE
  teachers,
  classes,
  groupings,
  generator_data
RESTART IDENTITY CASCADE;

INSERT INTO teachers (teacher_name, email, password)
  VALUES
  ('msmith', 'msmith@educate.me', 'password'),
  ('kdavis', 'kdavis@educate.me', 'password123');

INSERT INTO classes (class_name, teacher_id)
  VALUES
  ('1st Period', 1),
  ('2nd Period', 1),
  ('3rd Period', 1),
  ('4th Period', 1),
  ('5th Period', 1),
  ('Intensive Reading', 2),
  ('Honors English 8', 2),
  ('Critical Thinking', 2),
  ('English 8', 2);

INSERT INTO groupings (grouping_name, groupings, teacher_id, class_id)
  VALUES
  (
    'Buzz Groups (Myers-Briggs)', 
    '[{"alias":"Rose","Energy":"Introversion","Information":"Intuition","Decisions":"Thinking","Organization":"Perceiving","groupNum":3},{"alias":"Ellie","Energy":"Introversion","Information":"Sensing","Decisions":"Feeling","Organization":"Perceiving","groupNum":3},{"alias":"Kiefer","Energy":"Extroversion","Information":"Sensing","Decisions":"Thinking","Organization":"Perceiving","groupNum":4},{"alias":"Tomas","Energy":"Introversion","Information":"Intuition","Decisions":"Thinking","Organization":"Perceiving","groupNum":2},{"alias":"Pollyanna","Energy":"Extroversion","Information":"Intuition","Decisions":"Feeling","Organization":"Judging","groupNum":1},{"alias":"Roberto","Energy":"Introversion","Information":"Intuition","Decisions":"Thinking","Organization":"Judging","groupNum":1},{"alias":"Allen","Energy":"Extroversion","Information":"Sensing","Decisions":"Thinking","Organization":"Perceiving","groupNum":2},{"alias":"George","Energy":"Extroversion","Information":"Intuition","Decisions":"Thinking","Organization":"Judging","groupNum":2},{"alias":"Carol","Energy":"Extroversion","Information":"Intuition","Decisions":"Feeling","Organization":"Perceiving","groupNum":1},{"alias":"Henrietta","Energy":"Extroversion","Information":"Sensing","Decisions":"Feeling","Organization":"Judging","groupNum":3},{"alias":"Marie","Energy":"Introversion","Information":"Sensing","Decisions":"Thinking","Organization":"Judging","groupNum":1},{"alias":"John","Energy":"Extroversion","Information":"Sensing","Decisions":"Feeling","Organization":"Perceiving","groupNum":2},{"alias":"Jules","Energy":"Introversion","Information":"Intuition","Decisions":"Thinking","Organization":"Judging","groupNum":4},{"alias":"Jennifer","Energy":"Extroversion","Information":"Sensing","Decisions":"Thinking","Organization":"Judging","groupNum":4},{"alias":"Garrett","Energy":"Introversion","Information":"Sensing","Decisions":"Thinking","Organization":"Judging","groupNum":1},{"alias":"Javier","Energy":"Extroversion","Information":"Intuition","Decisions":"Feeling","Organization":"Perceiving","groupNum":3},{"alias":"Kayle","Energy":"Introversion","Information":"Sensing","Decisions":"Feeling","Organization":"Judging","groupNum":4},{"alias":"Dawn","Energy":"Extroversion","Information":"Intuition","Decisions":"Feeling","Organization":"Perceiving","groupNum":4},{"alias":"Cat","Energy":"Introversion","Information":"Intuition","Decisions":"Thinking","Organization":"Judging","groupNum":2},{"alias":"Greg","Energy":"Extroversion","Information":"Sensing","Decisions":"Thinking","Organization":"Judging","groupNum":3},{"alias":"Anneliese","Energy":"Extroversion","Information":"Intuition","Decisions":"Thinking","Organization":"Perceiving","groupNum":4},{"alias":"Lillian","Energy":"Introversion","Information":"Sensing","Decisions":"Feeling","Organization":"Judging","groupNum":3},{"alias":"Miles","Energy":"Extroversion","Information":"Sensing","Decisions":"Thinking","Organization":"Perceiving","groupNum":2}]',
    1,
    5
  );

INSERT INTO generator_data (data, grouping_id)
  VALUES
  (
    '{"error":null,"groupSize":5,"groupingType":"mixed","aliases":"Rose\nEllie\nKiefer\nTomas\nPollyanna\nRoberto\nAllen\nGeorge\nCarol\nHenrietta\nMarie\nJohn\nJules\nJennifer\nGarrett\nJavier\nKayle\nDawn\nCat\nGreg\nAnneliese\nLillian\nMiles","categoriesLength":4,"categoryTypes":["qualitative","qualitative","qualitative","qualitative"],"categoryNames":["Energy","Information","Decisions","Organization"],"categoryVals":["Introversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nExtroversion\nExtroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nIntroversion\nExtroversion\nExtroversion\nIntroversion\nExtroversion","Intuition\nSensing\nSensing\nIntuition\nIntuition\nIntuition\nSensing\nIntuition\nIntuition\nSensing\nSensing\nSensing\nIntuition\nSensing\nSensing\nIntuition\nSensing\nIntuition\nIntuition\nSensing\nIntuition\nSensing\nSensing","Thinking\nFeeling\nThinking\nThinking\nFeeling\nThinking\nThinking\nThinking\nFeeling\nFeeling\nThinking\nFeeling\nThinking\nThinking\nThinking\nFeeling\nFeeling\nFeeling\nThinking\nThinking\nThinking\nFeeling\nThinking","Perceiving\nPerceiving\nPerceiving\nPerceiving\nJudging\nJudging\nPerceiving\nJudging\nPerceiving\nJudging\nJudging\nPerceiving\nJudging\nJudging\nJudging\nPerceiving\nJudging\nPerceiving\nJudging\nJudging\nPerceiving\nJudging\nPerceiving"],"savedData":""}',
  1
  );

COMMIT;