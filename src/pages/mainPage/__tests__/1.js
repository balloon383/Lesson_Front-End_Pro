/* import { render, screen } from "@testing-library/react";
import Category from "../category/Category";

describe("Category", () => {
  const productsArr = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  test("renders category title correctly", () => {
    const title = "Category Title";
    render(<Category productsArr={productsArr} title={title} />);

    const categoryTitle = screen.getByText(title);

    expect(categoryTitle).toBeInTheDocument();
  });

  test("renders products correctly", () => {
    render(<Category productsArr={productsArr} title="Category" />);

    const product1 = screen.getByText("Product 1");
    const product2 = screen.getByText("Product 2");
    const product3 = screen.getByText("Product 3");

    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
    expect(product3).toBeInTheDocument();
  });
});
 */