{
  // Type Alias
  type Text = string;
  const name: Text = "ellie";
  console.log(name);
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "hi",
    age: 123,
  };

  // String Literal Types
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  type JSON = "json";
  const json: JSON = "json";
}
