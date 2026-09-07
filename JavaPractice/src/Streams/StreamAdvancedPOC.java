package Streams;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

class Order {

    private int id;
    private String customer;
    private String city;
    private double total;
    private List<String> products;

    public Order(
            int id,
            String customer,
            String city,
            double total,
            List<String> products
    ) {
        this.id = id;
        this.customer = customer;
        this.city = city;
        this.total = total;
        this.products = products;
    }

    public int getId() {
        return id;
    }

    public String getCustomer() {
        return customer;
    }

    public String getCity() {
        return city;
    }

    public double getTotal() {
        return total;
    }

    public List<String> getProducts() {
        return products;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", customer='" + customer + '\'' +
                ", city='" + city + '\'' +
                ", total=" + total +
                '}';
    }
}


public class StreamAdvancedPOC {

    public static void main(String[] args) {

        // ==================================================
        // SOURCE DATA
        // ==================================================

        List<Order> orders = Arrays.asList(

                new Order(
                        101,
                        "Rahul",
                        "Hyderabad",
                        25000,
                        Arrays.asList("Laptop", "Mouse")
                ),

                new Order(
                        102,
                        "Priya",
                        "Bangalore",
                        12000,
                        Arrays.asList("Keyboard", "Monitor")
                ),

                new Order(
                        103,
                        "Arjun",
                        "Hyderabad",
                        45000,
                        Arrays.asList("Laptop", "Headphones")
                ),

                new Order(
                        104,
                        "Sneha",
                        "Chennai",
                        8000,
                        Arrays.asList("Keyboard", "Mouse")
                ),

                new Order(
                        105,
                        "Kiran",
                        "Bangalore",
                        18000,
                        Arrays.asList("Monitor", "Mouse")
                )
        );


        // ==================================================
        // 1. flatMap()
        // ==================================================

        System.out.println("All Products:");

        List<String> allProducts =
                orders.stream()
                        .flatMap(order -> order.getProducts().stream())
                        .collect(Collectors.toList());

        System.out.println(allProducts);


        // ==================================================
        // 2. findFirst()
        // ==================================================

        System.out.println("\nFirst High-Value Order:");

        Optional<Order> firstHighValueOrder =
                orders.stream()
                        .filter(order -> order.getTotal() > 20000)
                        .findFirst();

        firstHighValueOrder.ifPresent(System.out::println);


        // ==================================================
        // 3. min() and max()
        // ==================================================

        Optional<Order> cheapestOrder =
                orders.stream()
                        .min(Comparator.comparing(Order::getTotal));

        Optional<Order> highestOrder =
                orders.stream()
                        .max(Comparator.comparing(Order::getTotal));

        System.out.println("\nCheapest Order:");

        cheapestOrder.ifPresent(System.out::println);

        System.out.println("\nHighest Order:");

        highestOrder.ifPresent(System.out::println);


        // ==================================================
        // 4. anyMatch(), allMatch(), noneMatch()
        // ==================================================

        boolean hasVeryHighOrder =
                orders.stream()
                        .anyMatch(order -> order.getTotal() > 40000);

        boolean allOrdersAbove5000 =
                orders.stream()
                        .allMatch(order -> order.getTotal() > 5000);

        boolean noOrderBelow500 =
                orders.stream()
                        .noneMatch(order -> order.getTotal() < 500);

        System.out.println("\nCondition Checks:");

        System.out.println(
                "Any order above 40000: "
                        + hasVeryHighOrder
        );

        System.out.println(
                "All orders above 5000: "
                        + allOrdersAbove5000
        );

        System.out.println(
                "No order below 500: "
                        + noOrderBelow500
        );


        // ==================================================
        // 5. reduce()
        // ==================================================

        double totalRevenue =
                orders.stream()
                        .map(Order::getTotal)
                        .reduce(0.0, (a, b) -> a + b);

        System.out.println("\nTotal Revenue:");

        System.out.println(totalRevenue);


        // ==================================================
        // 6. toList()
        // ==================================================

        List<Order> highValueOrders =
                orders.stream()
                        .filter(order -> order.getTotal() > 15000)
                        .collect(Collectors.toList());

        System.out.println("\nHigh-Value Orders:");

        System.out.println(highValueOrders);


        // ==================================================
        // 7. toSet()
        // ==================================================

        Set<String> cities =
                orders.stream()
                        .map(Order::getCity)
                        .collect(Collectors.toSet());

        System.out.println("\nUnique Cities:");

        System.out.println(cities);


        // ==================================================
        // 8. groupingBy()
        // ==================================================

        Map<String, List<Order>> ordersByCity =
                orders.stream()
                        .collect(
                                Collectors.groupingBy(
                                        Order::getCity
                                )
                        );

        System.out.println("\nOrders Grouped By City:");

        ordersByCity.forEach(
                (city, cityOrders) ->
                        System.out.println(
                                city + " -> " + cityOrders
                        )
        );


        // ==================================================
        // 9. partitioningBy()
        // ==================================================

        Map<Boolean, List<Order>> partitionedOrders =
                orders.stream()
                        .collect(
                                Collectors.partitioningBy(
                                        order -> order.getTotal() > 15000
                                )
                        );

        System.out.println("\nOrders Partitioned By 15000:");

        System.out.println(
                "Above 15000: "
                        + partitionedOrders.get(true)
        );

        System.out.println(
                "15000 or below: "
                        + partitionedOrders.get(false)
        );
    }
}