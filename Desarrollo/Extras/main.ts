class Example {
  public name: string;
  private edad: number;

  constructor(nombre: string, age: number) {
    this.name = nombre;
    this.edad = age;
  }

  showMyName() {
    console.log(`Hola, me llamo ${this.name}`);
  }

  showMyAge() {
    console.log(`Tengo ${this.edad}`);
  }
}

let user = new Example("Ariel", 21);

user.showMyAge();
user.showMyName();
