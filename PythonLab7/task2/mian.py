

from models import Animal, Dog, Cat

def demonstrate_polymorphism(animals):
    """
    Demonstrate polymorphism by calling same method on different objects
    Args:
        animals (list): List of Animal objects
    """
    print("\n" + "=" * 60)
    print("POLYMORPHISM DEMONSTRATION")
    print("=" * 60)
    
    for animal in animals:
        print(f"{animal}:")
        print(f"  Sound: {animal.speak()}")  
        print(f"  Info: {animal.info()}")

def demonstrate_unique_methods(animals):
    """
    Demonstrate unique methods of each class
    Args:
        animals (list): List of Animal objects
    """
    print("\n" + "=" * 60)
    print("UNIQUE METHODS DEMONSTRATION")
    print("=" * 60)
    
    for animal in animals:
        if isinstance(animal, Dog):
            print(f"\n{animal.name} (Dog):")
            print(f"  {animal.fetch()}")
            print(f"  {animal.guard()}")
        
        elif isinstance(animal, Cat):
            print(f"\n{animal.name} (Cat):")
            print(f"  {animal.scratch()}")
            print(f"  {animal.play()}")

def demonstrate_inheritance():
    """
    Demonstrate inheritance by creating objects of different classes
    """
    print("\n" + "=" * 60)
    print("INHERITANCE DEMONSTRATION")
    print("=" * 60)
    
    # Creating objects of each class
    generic_animal = Animal("Generic", 1, "Unknown")
    dog = Dog("Rex", 3, "Brown", "German Shepherd", True)
    cat = Cat("Whiskers", 2, "Gray", True, "mouse")
    
    print(f"\nGeneric Animal (Base Class):")
    print(f"  {generic_animal}")
    print(f"  Sound: {generic_animal.speak()}")
    
    print(f"\nDog (Child Class):")
    print(f"  {dog}")
    print(f"  Sound: {dog.speak()}")
    print(f"  Inherited method: {dog.info()}")
    
    print(f"\nCat (Child Class):")
    print(f"  {cat}")
    print(f"  Sound: {cat.speak()}")
    print(f"  Inherited method: {cat.info()}")

def main():
    """Main function to run all demonstrations"""
    
    # Create a list of animals (demonstrates storing objects in a list)
    animals = [
        Dog("Rex", 3, "Brown", "German Shepherd", True),
        Dog("Buddy", 5, "Golden", "Golden Retriever", False),
        Cat("Whiskers", 2, "Gray", True, "mouse"),
        Cat("Felix", 4, "Black", False, "ball"),
        Cat("Luna", 1, "White", True, "feather"),
        Dog("Max", 2, "Black", "Labrador", True)
    ]
    
    print("=" * 60)
    print("ANIMAL KINGDOM - OOP DEMONSTRATION")
    print("=" * 60)
    print(f"\nTotal animals created: {len(animals)}")
    
    # Demonstrate iterating over list
    print("\n" + "=" * 60)
    print("ITERATING OVER ANIMALS LIST")
    print("=" * 60)
    for i, animal in enumerate(animals, 1):
        print(f"{i}. {animal}")
    
    # Demonstrate different OOP concepts
    demonstrate_inheritance()
    demonstrate_polymorphism(animals)
    demonstrate_unique_methods(animals)
    
    # Additional demonstrations
    print("\n" + "=" * 60)
    print("METHOD OVERRIDING DEMONSTRATION")
    print("=" * 60)
    
    # Show method overriding in action
    for animal in animals[:3]:  # Show first 3 animals
        print(f"\n{animal.name}:")
        print(f"  Parent class would say: Animal.speak() -> 'Some generic animal sound'")
        print(f"  Actual overridden method: {animal.speak()}")
    
    print("\n" + "=" * 60)
    print("PROGRAM COMPLETED SUCCESSFULLY")
    print("=" * 60)

if __name__ == "__main__":
    main()