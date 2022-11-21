import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PostsService} from "../../../core/services/posts.service";
import {DynamicPost} from "../../../core/interfaces/post.interface";
import {PostHostDirective} from "../../../core/directives/post-host.directive";
import {NormalPostComponent} from "../../../core/shared/components/normal-post/normal-post.component";
import {SlideshowPostComponent} from "../../../core/shared/components/slideshow-post/slideshow-post.component";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, AfterViewInit, OnDestroy {

  postList: DynamicPost[] = [];
  startId: number = 0;
  @ViewChild(PostHostDirective, {static: true}) postHost!: PostHostDirective;
  postInterval!: NodeJS.Timer;

  constructor(private readonly postsService: PostsService,
  ) {  }


  ngOnInit(): void {
    this.getPosts();

  }

  getPosts(){
    this.postsService.getPostList().subscribe({
      'next': response => {
        if (response ) {
          this.postList = response.map((post)=>{
            let newPost: DynamicPost = {
              data: post,
              component: null,
            }
            if(post.images.length>1){
              newPost['component'] = SlideshowPostComponent
            }else{
              newPost['component'] = NormalPostComponent
            }
            return newPost
          })
          console.log(this.postList)
          this.postGenerate()
        }
      },
      'error': error => console.log(error),
    })
  }

  ngAfterViewInit(): void {
    this.postInterval = setInterval( ()=>this.postGenerate(), 7000)

  }

  postGenerate(): void {
    if (this.postList.length !== 0 && this.postList.length>this.startId){
      console.log('Generated = ', this.startId)
      const viewContainerRef = this.postHost.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent<DynamicPost>(this.postList[this.startId].component);
      componentRef.instance.data = this.postList[this.startId].data
      this.startId++
    }else{
      this.startId = 0;
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.postInterval);
  }

  refreshList(e: boolean){
    if(e) alert('New post added.')
    this.getPosts();
  }

}
