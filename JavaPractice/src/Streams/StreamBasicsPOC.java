package Streams;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

class Product {

    private int id;
    private String name;
    private double price;

    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
}


public class StreamBasicsPOC {

    public static void main(String[] args) {

        // Source: Collection
        List<Product> products = Arrays.asList(
                new Product(1, "Laptop", 60000),
                new Product(2, "Mouse", 500),
                new Product(3, "Keyboard", 1500),
                new Product(4, "Monitor", 12000),
                new Product(5, "Headphones", 2000),
                new Product(6, "Mouse Pad", 300),
                new Product(7, "Keyboard", 1500)
        );


        // ==================================================
        // STREAM PIPELINE
        // ==================================================

        List<String> selectedProducts =
                products.stream()

                        // Intermediate operation
                        .filter(product -> product.getPrice() >= 1000)

                        // Intermediate operation
                        .distinct()

                        // Intermediate operation
                        .sorted(Comparator.comparing(Product::getPrice))

                        // Intermediate operation
                        .map(Product::getName)

                        // Intermediate operation
                        .skip(1)

                        // Intermediate operation
                        .limit(2)

                        // Terminal operation
                        .collect(Collectors.toList());


        System.out.println("Selected Products:");
        System.out.println(selectedProducts);


        // ==================================================
        // forEach() - Terminal Operation
        // ==================================================

        System.out.println("\nAll Products:");

        products.stream()
                .forEach(System.out::println);

        // ==================================================
        // LAZY EVALUATION
        // ==================================================

        System.out.println("\nLazy Evaluation Demonstration:");

        products.stream()
                .filter(product -> {
                    System.out.println("Filtering: " + product.getName());
                    return product.getPrice() >= 1000;
                })
                .map(product -> {
                    System.out.println("Mapping: " + product.getName());
                    return product.getName();
                });

        System.out.println("No terminal operation - pipeline was not executed.");


        System.out.println("\nNow adding terminal operation:");

        products.stream()
                .filter(product -> {
                    System.out.println("Filtering: " + product.getName());
                    return product.getPrice() >= 1000;
                })
                .map(product -> {
                    System.out.println("Mapping: " + product.getName());
                    return product.getName();
                })
                .forEach(System.out::println);
    }
}