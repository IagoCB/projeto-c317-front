import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { Type } from "../model/type.model";

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TypeService {
  baseUrl = "http://localhost:8080/type";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  createType(Type: Type): Observable<Type> {

    const headers = new HttpHeaders().set("Content-Type", "application/json; charset=utf-8");

    return this.http.post<Type>(this.baseUrl, JSON.stringify(Type), { headers: headers }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getAllTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getTypeById(id: number): Observable<Type> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Type>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateType(Type: Type): Observable<Type> {
    const url = `${this.baseUrl}?id=${Type.id}`;
    return this.http.put<Type>(url, Type).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteType(Type: Type): Observable<Type> {
    const url = `${this.baseUrl}?id=${Type.id}`;
    return this.http.delete<Type>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
