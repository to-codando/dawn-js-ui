const showImg = ({ html, props}) => html`
${
  props.img && props.img.src
  ? html`<img src="${props.img.src}" alt="${props.img.alt}">`
  : html`<span class="icon-area"><i class="material-symbols-rounded icon-user">wallpaper</i></span>`
}
`

const showNote = ({ html, props })=> html`
${
  props.note
  ? html`<i class="
  note status-${props.note.status ? props.note.status : 'off'}
  ${props.note.position ? props.note.position : 'bottom-right'}"></i>`
  : ''
}
`

export default ({ html, props }) => html`

  <div class="wrapper size-${props.size ? props.size : '1'} style-${props.style ? props.style : 'circle'}">
    ${showImg({html, props})}
  </div>

  ${showNote({html, props})}
`
