import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { Entry } from "../model/entry.model";

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class EntryService {
  baseUrl = "http://localhost:8080/entry";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  createEntry(Entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this.baseUrl, Entry).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getAllEntrys(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getFilterEntrys(dates: any): Observable<Entry[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("startDate", dates.startDate);
    queryParams = queryParams.append("endDate", dates.endDate);
    return this.http.get<Entry[]>(`${this.baseUrl}/filter`, { params: queryParams }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getEntryById(id: number): Observable<Entry> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Entry>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getSpend(year: number, month: number) {
    const url = `${this.baseUrl}?year=${year}&month=${month}`;
    return this.http.get(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateEntry(Entry: Entry): Observable<Entry> {
    const url = `${this.baseUrl}?id=${Entry.id}`;
    return this.http.put<Entry>(url, Entry).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteEntry(Entry: Entry): Observable<Entry> {
    const url = `${this.baseUrl}?id=${Entry.id}`;
    return this.http.delete<Entry>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
