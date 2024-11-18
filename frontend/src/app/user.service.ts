import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private apiUrl = 'http://localhost:3000/add';

  async add(numbers: string): Promise<number> {
    const response = await axios.post(this.apiUrl, { numbers });
    return response.data.result;
  }
}
