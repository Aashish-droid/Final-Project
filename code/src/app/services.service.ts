import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  httpOptions:any;
  status:boolean=false;
  constructor(private http:HttpClient) { }
  loginstatus():boolean{
    return this.status;
  }
  getUsersList():Observable<any>{
    return this.http.get("http://localhost:4500/UserData")
  }
  //To post user data while signing up...
  newuser(data:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
    return this.http.post("http://localhost:4500/UserData",data,this.httpOptions);
  }
  getLearnmoreById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/learnmore/"+id)
  }

  getExplore():Observable<any> {
    return this.http.get("http://localhost:4500/explore");
  }

  getExploremoreById(id:number):Observable<any> {
    return this.http.get("http://localhost:4500/explore/"+id);
  }

  postEnquiry(obj:any):Observable<any>{

    this.httpOptions =  new HttpHeaders({
    'Content-Type':  'application/json',
    })
    return this.http.post("http://localhost:4500/enquiries",obj,this.httpOptions);
  }
  getFeedbacks():Observable<any> {
    return this.http.get("http://localhost:4500/feedbacks")
  }

  postFeedback(obj:any):Observable<any>{

    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
  
  return this.http.post("http://localhost:4500/feedbacks",obj,this.httpOptions);
  }



  apiUrl = 'http://localhost:4500/chat';
  getChatHistory(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addMessage(message: string): Observable<any> {
    const timestamp = new Date().toISOString();
    const payload = { message: message, timestamp: timestamp };
    return this.http.post<any>(this.apiUrl,payload);
  }
  getDiseases():Observable<any> {
    return this.http.get("http://localhost:4500/diseases");
  }

  getDiseasesById(id:number):Observable<any> {
    return this.http.get("http://localhost:4500/diseases/"+id);
  }

  postDiseases(obj:any):Observable<any>{

    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
  
  return this.http.post("http://localhost:4500/diseases",obj,this.httpOptions);
  }
  getMessages():Observable<any> {
    return this.http.get("http://localhost:4500/messages");
  }

  sendMessage(message: string, sender: string, receiver: string) {
    const data = {
      message: message,
      sender: sender,
      receiver: receiver
    };
    return this.http.post("http://localhost:4500/messages", data,this.httpOptions);
  }
}
