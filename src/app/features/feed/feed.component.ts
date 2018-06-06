import { Component, OnInit } from '@angular/core';
import { ArticlePreview } from '../../elements/sdo/article-preview';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  articlePreviewList: ArticlePreview[];

  constructor() {
    this.articlePreviewList = [
      // tslint:disable-next-line:max-line-length
      { id: 1, title: 'Ngày xưa có một con gà', content: 'abc 1', publishTime: '20180720', primaryImage: 'https://adventures.is/wp-content/uploads/2015/11/Crystal-Ice-Cave-Skaftafell-Vatnajokull-Iceland-3-1200x630.jpg'},
      // tslint:disable-next-line:max-line-length
      { id: 2, title: 'Post 2', content: 'abc 2', publishTime: '20180721', primaryImage: 'https://media.gettyimages.com/photos/looking-up-at-wild-flowers-picture-id585174289?k=6&m=585174289&s=612x612&w=0&h=Wqaq9VSwywTAbXMHE-SgpmMV-YSLpot1s_muHzMuhwA='}
    ];
  }

  ngOnInit() {
  }

}
