import { test } from "@playwright/test";
import { ai } from "@zerostep/playwright";

test("Validar página inicial usando ZeroStep AI", async ({ page }) => {
  await page.goto("https://www1.satc.edu.br/portais/acesso/public/#/");

  const aiArgs = { page, test };

  await ai("verifique que a página possui o campo de usuário", aiArgs);
  await ai("verifique que a página possui o campo de senha", aiArgs);
  await ai("verifique que existe um botão para entrar", aiArgs);
});
