import { test, expect } from "@playwright/test";

test("Deve abrir a página de recuperação de senha", async ({ page }) => {
  await page.goto("https://www1.satc.edu.br/portais/acesso/public/#/");

  await page.getByText("Esqueci minha senha").click();

  await expect(page.getByRole("heading", { name: "Recuperação de Senha" })).toBeVisible();
});
