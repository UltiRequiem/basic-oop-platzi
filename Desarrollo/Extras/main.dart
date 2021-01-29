void main() {
  
  Person person = new Person(1,1234,'pedro',4);
  print(person);
  
}

class Person{
  int id;
  int licence;
  String driver;
  int passenger;
  Person(this.id, this.licence, this.driver, this.passenger);
}```
