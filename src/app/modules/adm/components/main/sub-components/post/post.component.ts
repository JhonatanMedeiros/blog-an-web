import { Component, OnInit } from '@angular/core';
import { PostsModel } from '../../../../shared/models/posts';
import { PostService } from '../../../../shared/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  user: any;

  post: PostsModel = new PostsModel();

  postId: string;

  agendar: boolean = false;

  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


  public froalaEditorOptsTitle: Object = {
    // htmlRemoveTags: ['p'],
    placeholderText: 'Escreva o titulo aqui!',
    editInPopup: true,
    language: 'pt_br',
    charCounterMax: 60,
    inlineMode: false
  };

  public froalaEditorOpts: Object = {
    placeholderText: 'Escreva o conteúdo aqui!',
    charCounterCount: true,
    language: 'pt_br',
    heightMin: 550,
    pastePlain: true,
    theme: 'gray',
    zIndex: 2001
    // toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'strikeThrough', 'underline', '|', 'paragraphFormat', 'paragraphStyle', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', '|', 'insertImage', 'insertLink', 'insertVideo', 'insertFile', 'html']
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {

    if (localStorage.getItem('user') != undefined) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }

  }

  ngOnInit() {

    this.route.params.subscribe( params => {
      this.postId = params['id']

      if (this.postId) {
        this.getPost(this.postId);
      }

    });

  }



  /* Services */
  postPublish(): void {

    const str = this.post.title;
    const replaced = str.split(' ').join('-');
    this.post.titleUrl = replaced.toLowerCase();


    this.post.author = this.user.firstName;
    this.post.authorId = this.user._id;

    this.postService.savePost(this.post)
      .subscribe(
        response => {

          // this.post = new PostsModel();

        },
        error => {
          console.log(error);
          this.post = new PostsModel();

        }
      );

  }

  getPost(id: any): void {

    this.postService.getPost(id)
      .subscribe(
        response => {
          console.log(response);
          this.post = response;
        },
        error => {
          console.log(error);
        }
      );
  }

  postEdit(): void {

    this.post.author = this.user.firstName;
    this.post.authorId = this.user._id;

    this.postService.editPost(this.post)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  deletePost(): void {

    this.postService.deletePost(this.post._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/adm/posts'])
        },
        error => {
          console.log(error);
        }
      );
  }

  /* Functions */


}
