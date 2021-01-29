class Person
  attr_reader :name

  def initialize(name)
    @name = name
  end
end

person = Person.new('Ann Code')
puts person.name
