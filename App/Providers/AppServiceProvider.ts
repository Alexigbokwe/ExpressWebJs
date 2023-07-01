import { ServiceProvider } from "Elucidate/Support/ServiceProvider";
import { Authenticator } from "Elucidate/Auth/Authenticator";

export class AppServiceProvider extends ServiceProvider {
  /**
   * Register any application services.
   * @return void
   */
  public register() {
    this.singleton(Authenticator);
  }

  /**
   * Bootstrap any application services.
   * @return void
   */
  public async boot() {
    //
  }

  /**
   * Load any service after application boot stage
   * @return void
   */
  public async booted() {
    //
  }
}
