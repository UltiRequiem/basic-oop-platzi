#ifndef PERSON_HPP
#define PERSON_HPP
    #include<string>
        using std::string;
    class Person
    {
    private:
        string name;
    public:
        Person(string);
    };
    
    Person::Person(string name)
    {
        this->name = name;
    }    
#endif```
