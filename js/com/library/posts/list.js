import { html } from '../../../../vendor/lit-element/lit-element.js'
import { List } from '../list.js'
import { shortDate } from '../../../time.js'

export class PostsList extends List {
  constructor () {
    super()
    this.sortColumn = 'createdAt'
  }

  get columns () {
    return [
      {id: 'body', label: 'Post', flex: 1, renderer: 'renderBody'},
      {id: 'createdAt', label: 'Date Published', width: 120, renderer: 'renderCreatedAt'},
      {id: 'author', label: 'Author', width: 120, renderer: 'renderAuthor'}
    ]
  }

  // rendering
  // =

  renderBody (row) {
    return row.content.body
  }

  renderCreatedAt (row) {
    return shortDate(row.createdAt)
  }

  renderAuthor (row) {
    return html`<div class="site">
      <img src="asset:thumb:${row.author.url}">
      <span>${row.author.title}</span>
    </div>`
  }

  // events
  // =

  onDblclickRow (e, row) {
    window.open(row.url)
  }
}

customElements.define('beaker-library-posts-list', PostsList)