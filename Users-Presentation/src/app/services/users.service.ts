import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseAPIURL: string = 'http://localhost:64128/api/Users/';

  constructor(private httpClient: HttpClient) { }

  getUsers()
  {
    return this.httpClient.get(this.baseAPIURL);
  }

  addUser(newUser: User)
  {
    return this.httpClient.post(this.baseAPIURL, newUser);
  }

  updateUser(userID:number, newUser: User)
  {
    return this.httpClient.put(this.baseAPIURL+ userID, newUser );
  }

}
