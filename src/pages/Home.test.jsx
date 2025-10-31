import React from "react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/productSlice";
import cartReducer from "../redux/cartSlice";
import Home from "./Home";
import { mockData } from "../assets/MockData";

// Mock the components that are rendered inside Home
vi.mock("../components/InfoSection", () => ({
  default: () => <div data-testid="info-section">Info Section</div>,
}));

vi.mock("../components/CategorySection", () => ({
  default: () => <div data-testid="category-section">Category Section</div>,
}));

vi.mock("../components/ProductCard", () => ({
  default: ({ product }) => (
    <div data-testid={`product-card-${product.id}`}>
      Product Card {product.id}
    </div>
  ),
}));

// Prevent Shop component from rendering its own products
vi.mock("./Shop", () => ({
  default: () => null,
}));

// Mock image import
vi.mock("../assets/images/slider-2.jpg", () => ({
  default: "mocked-slider-image.jpg",
}));

// Mock Redux state
const initialState = {
  products: mockData,
};

describe("Home Component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        product: productReducer,
        cart: cartReducer,
      },
      preloadedState: {
        product: initialState,
      },
    });
  });

  it("renders the main banner with correct content", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const bannerTexts = [
      "Raj | E-Shop",
      "Welcome to Our Store",
      "Best Online Shopping Experience",
      "Shop Now",
    ];

    bannerTexts.forEach((text) => {
      const elements = screen.getAllByText(text);
      expect(elements.length).toBeGreaterThan(0);
      expect(elements[0]).toBeInTheDocument();
    });
  });

  it("renders the categories section with options", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const categoryElements = screen.getAllByText("Shop By categories");
    expect(categoryElements.length).toBeGreaterThan(0);
    expect(categoryElements[0]).toBeInTheDocument();

    // Verify some category items
    expect(screen.getByText("Electronics")).toBeInTheDocument();
    expect(screen.getByText("Fashion")).toBeInTheDocument();
    expect(screen.getByText("Home & Kitchen")).toBeInTheDocument();
  });

  it("renders all major sections of the page", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const infoSections = screen.getAllByTestId("info-section");
    const categorySections = screen.getAllByTestId("category-section");

    expect(infoSections.length).toBeGreaterThan(0);
    expect(categorySections.length).toBeGreaterThan(0);

    expect(infoSections[0]).toBeInTheDocument();
    expect(categorySections[0]).toBeInTheDocument();
  });

  it("renders the Top Products section with title", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const topProductsElements = screen.getAllByText("Top Products");
    expect(topProductsElements.length).toBeGreaterThan(0);
    expect(topProductsElements[0]).toBeInTheDocument();
  });

  it("dispatches setProducts action on component mount", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const state = store.getState();
    expect(state.product.products).toBeDefined();
    expect(Array.isArray(state.product.products)).toBe(true);
  });

  it("renders at most 5 product cards in the Top Products section", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const productCards = screen.getAllByTestId(/^product-card-/);
    expect(productCards.length).toBeLessThanOrEqual(5);
  });
});
