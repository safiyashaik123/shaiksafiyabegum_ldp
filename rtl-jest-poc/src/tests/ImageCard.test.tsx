import { render, screen } from "@testing-library/react";
import ImageCard from "../components/ImageCard";

describe("ImageCard", () => {

  test("find image using alt text", () => {
    render(<ImageCard src="/profile.png" />);

    expect(
      screen.getByAltText("Employee Profile")
    ).toBeInTheDocument();
  });

  test("find image using title", () => {
    render(<ImageCard src="/profile.png" />);

    expect(
      screen.getByTitle("Profile Image")
    ).toBeInTheDocument();
  });

  test("find image using test id", () => {
    render(<ImageCard src="/profile.png" />);

    expect(
      screen.getByTestId("profile-image")
    ).toBeInTheDocument();
  });

  test("checks attributes", () => {
    render(<ImageCard src="/profile.png" />);

    const image = screen.getByAltText("Employee Profile");

    expect(image).toHaveAttribute(
      "src",
      "/profile.png"
    );
  });

  test("checks class", () => {
    render(<ImageCard src="/profile.png" />);

    expect(
      screen.getByAltText("Employee Profile")
    ).toHaveClass("profile");
  });

  test("checks style", () => {
    render(<ImageCard src="/profile.png" />);

    expect(
      screen.getByAltText("Employee Profile")
    ).toHaveStyle({
      width: "200px",
    });
  });

  test("image is visible", () => {
    render(<ImageCard src="/profile.png" />);

    expect(
      screen.getByAltText("Employee Profile")
    ).toBeVisible();
  });

});