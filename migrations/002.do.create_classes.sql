CREATE TABLE classes (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  class_name TEXT NOT NULL,
  date_created TIMESTAMP DEFAULT now() NOT NULL,
  teacher_id INTEGER REFERENCES teachers(id)
);