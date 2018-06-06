import { Component, Input, OnInit } from '@angular/core';
import { ArticlePreview } from 'src/app/elements/sdo/article-preview';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {
  @Input() articlePreview: ArticlePreview;

  constructor() { }

  ngOnInit() {
  }

}
