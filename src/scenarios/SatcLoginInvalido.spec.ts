import { test, expect } from "@playwright/test";
import { SatcLoginPage } from "../pages/SatcLoginPage";

test.describe("Login inválido - SATC", () => {
  test("Deve exibir erro ao tentar logar com credenciais inválidas", async ({ page }) => {
    const login = new SatcLoginPage(page);

    await login.goto();
    await login.preencherUsuario("usuario_incorreto");
    await login.preencherSenha("senha_errada");
    await login.clicarEntrar();

    await expect(page.getByText("Usuário ou senha inválidos")).toBeVisible();
  });
});
