package Streams;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class StreamRealWorldPOC {

    public static void main(String[] args) throws IOException {

        List<String> products = Arrays.asList(
                "Laptop",
                "Mouse",
                "Keyboard",
                "Monitor",
                "Headphones"
        );


        // ==================================================
        // 1. peek() - Observe elements during processing
        // ==================================================

        System.out.println("peek() Example:");

        products.stream()
                .filter(product -> product.length() > 5)
                .peek(product ->
                        System.out.println(
                                "After filter: " + product
                        )
                )
                .map(String::toUpperCase)
                .forEach(System.out::println);


        // ==================================================
        // 2. parallelStream() - Parallel processing
        // ==================================================

        System.out.println("\nparallelStream() Example:");

        products.parallelStream()
                .forEach(product ->
                        System.out.println(
                                product
                                        + " | Thread: "
                                        + Thread.currentThread().getName()
                        )
                );


        // ==================================================
        // 3. generate() - Generate an infinite stream
        // ==================================================

        System.out.println("\ngenerate() Example:");

        Stream.generate(() -> "Product Created")
                .limit(3)
                .forEach(System.out::println);


        // ==================================================
        // 4. iterate() - Generate values based on previous value
        // ==================================================

        System.out.println("\niterate() Example:");

        Stream.iterate(1, number -> number * 2)
                .limit(6)
                .forEach(System.out::println);


        // ==================================================
        // 5. Files.lines() - Process file contents as a Stream
        // ==================================================

        System.out.println("\nFiles.lines() Example:");

        Path filePath = Path.of("products.txt");

        Files.write(
                filePath,
                Arrays.asList(
                        "Laptop",
                        "Mouse",
                        "Keyboard",
                        "Monitor",
                        "Headphones"
                )
        );

        try (Stream<String> lines =
                     Files.lines(filePath)) {

            lines.filter(product -> product.length() > 5)
                    .forEach(System.out::println);
        }


        // ==================================================
        // 6. takeWhile() - Take elements while condition is true
        // ==================================================

        System.out.println("\ntakeWhile() Example:");

        Stream.of(1, 2, 3, 4, 5, 7, 2, 3)
                .takeWhile(number -> number <= 5)
                .forEach(System.out::println);


        // ==================================================
        // 7. dropWhile() - Drop elements while condition is true
        // ==================================================

        System.out.println("\ndropWhile() Example:");

        Stream.of(1, 2, 3, 4, 6, 7, 8)
                .dropWhile(number -> number <= 4)
                .forEach(System.out::println);


        // ==================================================
        // 8. Enhanced iterate() - Java 9
        // ==================================================

        System.out.println("\nEnhanced iterate() Example:");

        Stream.iterate(
                        1,
                        number -> number < 100,
                        number -> number * 2
                )
                .forEach(System.out::println);


        // ==================================================
        // 9. ofNullable() - Handle nullable values
        // ==================================================

        System.out.println("\nofNullable() Example:");

        String product = null;

        Stream.ofNullable(product)
                .forEach(System.out::println);


        // ==================================================
        // 10. concat() - Combine two Streams
        // ==================================================

        System.out.println("\nconcat() Example:");

        Stream<String> firstStream =
                Stream.of("Laptop", "Mouse");

        Stream<String> secondStream =
                Stream.of("Keyboard", "Monitor");

        Stream.concat(firstStream, secondStream)
                .forEach(System.out::println);
    }
}