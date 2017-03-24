import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubService} from '../github/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[GithubService]
})
export class SearchComponent implements OnInit {

  public searchText ;
  public searchResult;
  public searchCount;

  constructor(private router: Router, private githubService: GithubService) { }

  ngOnInit() {
    
  }

  showUserDetail(user){
    this.router.navigate(['user', user.login]);
  }

  onKeyup(event){
    this.searchText = event.target.value;
  }

  getUsers(){
    this.githubService.getUser(this.searchText).subscribe(
      res => {
        this.searchResult = res;
        this.searchCount = res.total_count;
      }
    );
  }

}
