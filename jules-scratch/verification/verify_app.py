from playwright.sync_api import Page, expect

def test_app_loads(page: Page):
    # The server is running on port 3000 by default
    page.goto("http://localhost:3000")

    # Check that the header is visible
    expect(page.get_by_role("heading", name="🤔 Jigyasa")).to_be_visible()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")
