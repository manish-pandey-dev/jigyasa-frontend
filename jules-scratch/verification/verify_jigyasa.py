from playwright.sync_api import sync_playwright, Page, expect

def test_jigyasa_homepage(page: Page):
    """
    This test verifies that the Jigyasa homepage loads correctly.
    """
    # 1. Arrange: Go to the homepage.
    page.goto("http://localhost:8888")

    # 2. Assert: Check for the main heading.
    expect(page.get_by_role("heading", name="🤔 Jigyasa")).to_be_visible()

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    try:
        test_jigyasa_homepage(page)
    finally:
        browser.close()
