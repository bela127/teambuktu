import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BaseService {

  /**
   * URL to the REST service root.
   */
  baseUrl = "http://localhost:3000/";

  /**
   * Handle http operation that failed.
   * Lets the app continue with a default value.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleHttpError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // log error
      console.error(error);

      // give further information
      this.log(`${operation} failed: ${error.message}`);

      // return a default which won't break the app
      return of(result as T);
    }
  }

  /**
   * Log a Service message to the console.
   * @param message - message to log
   */
  log(message: string) {
    console.log(`Data service: ${message}`);
  }

}
