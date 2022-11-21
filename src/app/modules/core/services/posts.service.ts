import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CreatePost, PostInterface} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
apiPostsUrl = `${environment.apiUrl}/${environment.apiVersion}/posts`
  constructor(private readonly http: HttpClient) { }

  getPostList(){
    return this.http.get<PostInterface[]>(`${this.apiPostsUrl}`);
  }

  addNewPost(body: CreatePost){
    return this.http.post<PostInterface>(`${this.apiPostsUrl}`, body);
  }
}
