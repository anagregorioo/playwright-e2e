import { Page } from "@playwright/test";
import { SatcLoginElements } from "../elements/SatcLoginElements";

export class SatcLoginPage {
  constructor(private page: Page) {}

  private el = new SatcLoginElements();

  async goto() {
    await this.page.goto("https://www1.satc.edu.br/portais/acesso/public/#/");
  }

  async preencherUsuario(usuario: string) {
    await this.page.fill(this.el.usuario, usuario);
  }

  async preencherSenha(senha: string) {
    await this.page.fill(this.el.senha, senha);
  }

  async clicarEntrar() {
    await this.page.click(this.el.botaoEntrar);
  }
}
