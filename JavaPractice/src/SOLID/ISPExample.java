package SOLID;

/*
==========================================================
        INTERFACE SEGREGATION PRINCIPLE (ISP)
==========================================================

ISP says:

"A class should not be forced to implement methods
that it does not need."


==========================================================
                WITHOUT ISP
==========================================================



// interface Worker {
//
//     void work();
//
//     void eat();
//
//     void sleep();
// }
//
//
// class HumanWorker implements Worker {
//
//     @Override
//     public void work() {
//         System.out.println("Human is working");
//     }
//
//     @Override
//     public void eat() {
//         System.out.println("Human is eating");
//     }
//
//     @Override
//     public void sleep() {
//         System.out.println("Human is sleeping");
//     }
// }
//
//
// class RobotWorker implements Worker {
//
//     @Override
//     public void work() {
//         System.out.println("Robot is working");
//     }
//
//     @Override
//     public void eat() {
//
//         // Robot does not eat.
//         // Forced to implement this method.
//     }
//
//     @Override
//     public void sleep() {
//
//         // Robot does not sleep.
//         // Forced to implement this method.
//     }
// }


/*
==========================================================
                    WITH ISP
==========================================================

We split the large Worker interface into
smaller and focused interfaces.

*/


// Interface for working capability

interface Workable {

    void work();
}


// Interface for eating capability

interface Eatable {

    void eat();
}


// Interface for sleeping capability

interface Sleepable {

    void sleep();
}


/*
----------------------------------------------------------
HumanWorker
----------------------------------------------------------

A human can:

    work
    eat
    sleep

So HumanWorker implements all three interfaces.
*/

class HumanWorker
        implements Workable, Eatable, Sleepable {

    @Override
    public void work() {

        System.out.println("Human is working");
    }

    @Override
    public void eat() {

        System.out.println("Human is eating");
    }

    @Override
    public void sleep() {

        System.out.println("Human is sleeping");
    }
}


/*
----------------------------------------------------------
RobotWorker
----------------------------------------------------------

A robot can work.

But a robot does not need:

    eat()
    sleep()

Therefore, RobotWorker implements only Workable.
*/

class RobotWorker implements Workable {

    @Override
    public void work() {

        System.out.println("Robot is working");
    }
}


/*
==========================================================
                        MAIN
==========================================================
*/

public class ISPExample {

    public static void main(String[] args) {


        /*
        --------------------------------------------------
        Human Worker
        --------------------------------------------------
        */

        HumanWorker human =
                new HumanWorker();

        human.work();
        human.eat();
        human.sleep();


        System.out.println();


        /*
        --------------------------------------------------
        Robot Worker
        --------------------------------------------------
        */

        RobotWorker robot =
                new RobotWorker();

        robot.work();


        /*
        --------------------------------------------------
        Robot does not have:

            eat()
            sleep()

        because RobotWorker implements only Workable.
        --------------------------------------------------
        */
    }
}