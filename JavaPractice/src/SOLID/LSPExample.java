package SOLID;

/*
==========================================================
        LISKOV SUBSTITUTION PRINCIPLE (LSP)
==========================================================

LSP says:

"Objects of a child class should be able to replace
objects of the parent class without breaking the program."

==========================================================
                WITHOUT LSP
==========================================================

Problem:

We have created a fly() method inside Bird.

But not every bird can fly.

Penguin extends Bird, but Penguin cannot fly.

Therefore, Penguin cannot properly behave like Bird.



// class Bird {
//
//     void fly() {
//         System.out.println("Bird is flying");
//     }
// }
//
//
// class Sparrow extends Bird {
//
//     @Override
//     void fly() {
//         System.out.println("Sparrow is flying");
//     }
// }
//
//
// class Penguin extends Bird {
//
//     @Override
//     void fly() {
//
//         throw new UnsupportedOperationException(
//                 "Penguin cannot fly"
//         );
//     }
// }
//
//
// public class LSPExample {
//
//     public static void main(String[] args) {
//
//         Bird bird = new Penguin();
//
//         bird.fly();
//     }
// }


/*
==========================================================
                    WITH LSP
==========================================================

The problem was that Bird was forcing every child
to have fly().

We remove fly() from the general Bird class.

Bird contains only behavior that is common to all birds.

FlyingBird contains the flying behavior.

Now:

Sparrow
    -> Bird
    -> FlyingBird

Penguin
    -> Bird

Therefore, Penguin is not forced to implement fly().
*/


// Parent class

class Bird {

    void eat() {

        System.out.println("Bird is eating");
    }
}


// Separate abstraction for birds that can fly

interface FlyingBird {

    void fly();
}


// Sparrow is a Bird and can fly

class Sparrow extends Bird
        implements FlyingBird {

    @Override
    public void fly() {

        System.out.println("Sparrow is flying");
    }
}


// Penguin is a Bird but cannot fly

class Penguin extends Bird {

}


// Main class

public class LSPExample {

    public static void main(String[] args) {


        /*
        --------------------------------------------------
        Sparrow
        --------------------------------------------------
        */

        Bird bird1 = new Sparrow();

        bird1.eat();


        /*
        --------------------------------------------------
        Polymorphism

        The reference type is FlyingBird.

        The actual object is Sparrow.

        Therefore Sparrow's fly() executes.
        --------------------------------------------------
        */

        FlyingBird flyingBird =
                new Sparrow();

        flyingBird.fly();


        /*
        --------------------------------------------------
        Penguin
        --------------------------------------------------

        Penguin can be substituted for Bird because
        Penguin is a Bird.

        Penguin only uses behavior that every Bird
        is guaranteed to have.
        --------------------------------------------------
        */

        Bird bird2 = new Penguin();

        bird2.eat();


        /*
        Penguin is NOT assigned to FlyingBird because
        Penguin cannot fly.


        FlyingBird flyingBird2 = new Penguin();
        // ❌ Not allowed
        */
    }
}