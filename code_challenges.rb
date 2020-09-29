# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

# declare method only_odd_low_to_high that takes in one argument array
def only_odd_low_to_high array
    # select only values that are of class integer
    only_ints = array.select do |num|
        num.class == Integer
    # now select only odd numbers
    end.select do |num|
        num.odd?
    # use sort method to sort from low to high
    end.sort
    # return only the ints that are odd in ascending order
    only_ints
end 

# p only_odd_low_to_high fullArr1
# p only_odd_low_to_high fullArr2


# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

# create class called Bike
class Bike
    # define the initialize with model, wheels, and frame size where default of wheels is 2
    def initialize (model, frame_size)
        @model = model
        @wheels = 2
        @frame_size = frame_size
        # (3) add a bell and don't sent to anything
        @bell = nil
        # (4) add a speedometer
        @speedometer = 0
    end
    # make a get_info method that prints a sentence with all the data of bike using string interpolation
    def get_info
        p "The #{@model} bike has #{@wheels} wheels and a #{@frame_size} cm frame."
    end
    # (3) create method that prints 'Beep! Beep!' when bell rings
    def ring_bell
        p @bell = 'Beep! Beep!'
    end
    # (4) get the current speedmeter reading
    def speed
        p @speedometer
    end
    # (5) create method to pedal faster that takes number as argument (which is the speed)
    def pedal_faster speed
        p @speedometer += speed
    end
    # (5) create method to brake BUT speed cannot be negative
    def brake speed
        @speedometer -= speed
        # if speed is negative, set speed to zero regardless
        if @speedometer < 0
            p @speedometer = 0
        else
            p @speedometer
        end
    end
end


my_generic_bike = Bike.new('generic_bike', 'average_size')
my_generic_bike.get_info
my_cool_bike = Bike.new('Trek',163)
my_cool_bike.get_info

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

my_cool_bike.ring_bell



# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

my_cool_bike.speed



# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

my_cool_bike.pedal_faster 10
my_cool_bike.brake 15


# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
