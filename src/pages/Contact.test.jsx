import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Contact from "./Contact";

describe("Contact component", () => {
  it("renders contact info, accepts input and clears on submit", async () => {
    render(<Contact />);

    // Basic render checks
    const heading = screen.getByRole("heading", { name: /contact us/i });
    expect(heading).toBeTruthy();

    // Contact info text
    expect(screen.getByText(/Hyderabad/i)).toBeTruthy();

    // Inputs
    const nameInput = screen.getByPlaceholderText(/name \*/i);
    const emailInput = screen.getByPlaceholderText(/email \*/i);
    const phoneInput = screen.getByPlaceholderText(/phone \*/i);
    const subjectInput = screen.getByPlaceholderText(/subject \*/i);
    const messageInput = screen.getByPlaceholderText(/message \*/i);
    const sendButton = screen.getByRole("button", { name: /send message/i });

    const user = userEvent.setup();

    // Type values
    await user.type(nameInput, "Test User");
    await user.type(emailInput, "test@example.com");
    await user.type(phoneInput, "1234567890");
    await user.type(subjectInput, "Hello");
    await user.type(messageInput, "This is a test message.");

    // Verify values via element.value
    expect(nameInput.value).toBe("Test User");
    expect(emailInput.value).toBe("test@example.com");
    expect(phoneInput.value).toBe("1234567890");
    expect(subjectInput.value).toBe("Hello");
    expect(messageInput.value).toBe("This is a test message.");

    // Submit
    await user.click(sendButton);

    // After submit, form should be reset
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(phoneInput.value).toBe("");
    expect(subjectInput.value).toBe("");
    expect(messageInput.value).toBe("");
  });
});
