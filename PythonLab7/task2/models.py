

class Animal:
    """Base class for all animals"""
    
    def __init__(self, name, age, color):
       
        self.name = name
        self.age = age
        self.color = color
    
    def speak(self):
        """Generic speak method - to be overridden by child classes"""
        return "Some generic animal sound"
    
    def info(self):
        """Return formatted information about the animal"""
        return f"Name: {self.name}, Age: {self.age}, Color: {self.color}"
    
    def __str__(self):
        """String representation of the animal"""
        return f"{self.name} ({self.__class__.__name__})"


class Dog(Animal):
    """Dog class inheriting from Animal"""
    
    def __init__(self, name, age, color, breed, is_trained=False):
       
        super().__init__(name, age, color)
        self.breed = breed
        self.is_trained = is_trained
    
    def speak(self):
        """Override parent's speak method"""
        return "Woof! Woof!"
    
    def fetch(self):
        """Unique method for Dog"""
        return f"{self.name} is fetching the ball!"
    
    def guard(self):
        """Another unique method"""
        if self.is_trained:
            return f"{self.name} is guarding the house!"
        return f"{self.name} needs training to guard."
    
    def info(self):
        """Override info to include breed and training status"""
        trained_status = "Trained" if self.is_trained else "Not trained"
        return f"{super().info()}, Breed: {self.breed}, Status: {trained_status}"


class Cat(Animal):
    """Cat class inheriting from Animal"""
    
    def __init__(self, name, age, color, is_indoor=True, favorite_toy="yarn"):
        
        super().__init__(name, age, color)
        self.is_indoor = is_indoor
        self.favorite_toy = favorite_toy
    
    def speak(self):
       
        return "Meow! Meow!"
    
    def scratch(self):
        
        return f"{self.name} is scratching the furniture!"
    
    def play(self):
       
        return f"{self.name} is playing with {self.favorite_toy}!"
    
    def info(self):
       
        indoor_status = "Indoor" if self.is_indoor else "Outdoor"
        return f"{super().info()}, Type: {indoor_status}, Favorite toy: {self.favorite_toy}"