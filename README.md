
Pipe:

  pipe is generally used in template in an angular application

  Pipes are applied either on Scalar variable or Arrays

  1. Scalar variables [String, number, boolean]
     if applied on scalar variable usually it formats the target

     ex:
     uppercase pipe converts text to uppercase
     currency pipe converts number to currency format
     date pipe converts data to any required date format

     there are few inbuilt pipes supported by angular like uppercase,
     lowercase, currency, date, percent... we can also create
     our own pipes

  2. Pipes on arrays
     If applied on arrays generally it will filter the target array

     there are no inbuilt pipes to be applied array but we can create

     Pipes has three parts
     1. Target
           variable on which pipe is applied
     2. pipename
            name of the pipe
     3. parameters
            parameters are optional but we can have one or parameter

             {name | uppercase}
             name - target, uppercase - pipename, no parameter
             {price | currency:'INR'} 
              price -target ,currency - pipename, parameter - INR
              