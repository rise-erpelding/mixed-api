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
  ('1st Period' 1),
  ('2nd Period', 1),
  ('3rd Period', 1),
  ('4th Period', 1),
  ('5th Period', 1),
  ('Intensive Reading', 2),
  ('Honors English 8', 2),
  ('Critical Thinking', 2),
  ('English 8', 2);

-- INSERT INTO groupings (grouping_name, groupings, teacher_id, class_id)
--   VALUES
--   ('')

COMMIT;