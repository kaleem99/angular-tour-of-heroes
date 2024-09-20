import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { HEROES } from './mock-heroes';
import { Villain } from './villain';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VillainService {
  private villainsUrl = 'api/villains'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private log(message: string) {
    this.messageService.add(`VillainService: ${message}`);
  }
  getVillains(): Observable<Villain[]> {
    return this.http.get<Villain[]>(this.villainsUrl).pipe(
      tap((_) => this.log('fetched villains')),
      catchError(this.handleError<Villain[]>('getVillains', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  addVillain(villain: Villain): Observable<Villain> {
    return this.http
      .post<Villain>(this.villainsUrl, villain, this.httpOptions)
      .pipe(
        tap((newVillain: Villain) =>
          this.log(`added villain w/ id=${newVillain.id}`)
        ),
        catchError(this.handleError<Villain>('addVillain'))
      );
  }
  /** DELETE: delete the hero from the server */
  deleteVillain(id: number): Observable<Villain> {
    const url = `${this.villainsUrl}/${id}`;

    return this.http.delete<Villain>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted villain id=${id}`)),
      catchError(this.handleError<Villain>('deleteVillain'))
    );
  }
  /* GET heroes whose name contains search term */
  getVillain(id: number): Observable<Villain> {
    const url = `${this.villainsUrl}/${id}`;
    return this.http.get<Villain>(url).pipe(
      tap((_) => this.log(`fetched villain id=${id}`)),
      catchError(this.handleError<Villain>(`getVillain id=${id}`))
    );
  }
  updateVillain(villain: Villain): Observable<any> {
    return this.http.put(this.villainsUrl, villain, this.httpOptions).pipe(
      tap((_) => this.log(`updated villain id=${villain.id}`)),
      catchError(this.handleError<any>('updateVillain'))
    );
  }
  searchVillain(term: string): Observable<Villain[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Villain[]>(`${this.villainsUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found villains matching "${term}"`)
          : this.log(`no villains matching "${term}"`)
      ),
      catchError(this.handleError<Villain[]>('searchVillains', []))
    );
  }
}
