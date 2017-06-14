import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: './006_FloatingInput.component.html',
  styleUrls: [`./006_FloatingInput.component.scss`]
})

export class FloatingInputComponent implements OnInit {
  bg: Element;
  bookmarkInput: any;
  bookmarksList: any;
  bookmarkForm: any;
  bookmarks: any;

  constructor() { }

  ngOnInit() {
    this.bg = document.querySelector('.background');
    this.bookmarkInput = document.querySelector('input[type=text]');
    this.bookmarkForm = document.querySelector('.bookmark-form');
    this.bookmarksList = document.querySelector('.bookmarks-list');
    this.bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    this.bookmarkInput.addEventListener('focusin', this.showFloater);
    this.bookmarkInput.addEventListener('focusout', this.closeFloater);
    this.bookmarkForm.addEventListener('submit', this.createBookmark);
    this.bookmarksList.addEventListener('click', this.removeBookmark);

    this.fillBookmarksList(this.bookmarks);
  }

  showFloater = () => {
    this.bg.classList.add('show-floater');
  }

  closeFloater = () => {
    if (this.bg.classList.contains('show-floater')) {
      this.bg.classList.remove('show-floater');
    }
  }

  createBookmark = (e) => {
    e.preventDefault();

    const title = String(this.bookmarkInput.value);
    const bookmark = {
      title: title
    };

    this.bookmarks.push(bookmark);
    this.fillBookmarksList(this.bookmarks);
    this.storeBookmarks(this.bookmarks);
    this.bookmarkForm.reset();
  }

  removeBookmark = (e) => {
    if (!e.target.matches('.glyphicon-remove')) {
      return;
    }
    const index = e.target.parentNode.dataset.id;
    this.bookmarks.splice(index, 1);
    this.storeBookmarks(this.bookmarks);
  }

  fillBookmarksList = (bookmarks = []) => {
    const bookmarksHtml = bookmarks.map((bookmark, i) => {
      return `
        <a class="bookmark" data-id="${i}">
          <div class="img"> </div>
          <div class="title"> ${bookmark.title} </div>
          <span class="glyphicon glyphicon-remove"> </span>
        </a>
      `;
    }).join('');

    this.bookmarksList.innerHTML = bookmarksHtml;
  }

  storeBookmarks = (bookmarks = []) => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
}
