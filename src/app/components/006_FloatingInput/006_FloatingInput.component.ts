import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: './006_FloatingInput.component.html',
  styleUrls: [`./006_FloatingInput.component.scss`]
})

export class FloatingInputComponent implements OnInit {
  bg: any;
  bookmarkInput: any;
  bookmarksList: any;
  bookmarkForm: any;

  constructor() { }

  ngOnInit() {
    this.bg = document.querySelector('.background');;
    const input = document.querySelector('input[type=text]');
    this.bookmarksList = document.querySelector('.bookmarks-list');
    this.bookmarkForm = document.querySelector('.bookmark-form');
    this.bookmarkInput = document.querySelector('input[type=text]');

    input.addEventListener('focusin', this.showFloater);
    input.addEventListener('focusout', this.closeFloater);
    this.bookmarkForm.addEventListener('submit', this.createBookmark);
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

    const title = this.bookmarkInput.value;
    const bookmark = document.createElement('a');
    bookmark.className = 'bookmark';
    bookmark.innerText = title;
    bookmark.href = '#';
    bookmark.target = '_blank';

    this.bookmarksList.appendChild(bookmark);
    this.bookmarkForm.reset();
  }
}
