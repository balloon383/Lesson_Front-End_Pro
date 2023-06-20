import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MainPage } from "../MainPage";

const mockStore = configureStore([]);

describe("MainPage", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      products: [
        { id: 1, category: "Category 1" },
        { id: 2, category: "Category 1" },
        { id: 3, category: "Category 2" },
      ],
    });
  });

  test("renders categories", () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    const category1Title = screen.getByText("Category 1");
    const category2Title = screen.getByText("Category 2");

    expect(category1Title).toBeInTheDocument();
    expect(category2Title).toBeInTheDocument();
  });

  test("renders products for each category", () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    const category1Products = screen.getAllByTestId(
      "category-products-Category 1"
    );
    const category2Products = screen.getAllByTestId(
      "category-products-Category 2"
    );

    expect(category1Products).toHaveLength(2);
    expect(category2Products).toHaveLength(1);
  });
});
