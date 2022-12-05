export default ({ css }) => css`
  [ctx],
  [ctx] > .wrapper {
    display: inline-block;
    font-size: 12px;
    position: relative;
  }

  [ctx] > .wrapper {
    overflow: hidden;
  }

  [ctx] > .wrapper.style-square {
    border-radius: 8px;
  }
  [ctx] > .wrapper.style-circle {
    border-radius: 100px;
  }

  [ctx] > .wrapper.size-1 {
    width:2em;
    height:2em;
  }

  [ctx] > .wrapper.size-2 {
    width:2.5em;
    height:2.5em;
  }

  [ctx] > .wrapper.size-3 {
    width:3em;
    height:3em;
  }

  [ctx] > .wrapper.size-4 {
    width:3.5em;
    height:3.5em;
  }

  [ctx] > .wrapper.size-5 {
    width:4em;
    height:4em;
  }

  [ctx] > .wrapper.size-6 {
    width:4.5em;
    height:4.5em;
  }

  [ctx] > .size-1 .icon-area { font-size: 2em; }
  [ctx] > .size-2 .icon-area { font-size: 3em; }
  [ctx] > .size-3 .icon-area { font-size: 3.3em; }
  [ctx] > .size-4 .icon-area { font-size: 4em; }
  [ctx] > .size-5 .icon-area { font-size: 4.7em; }
  [ctx] > .size-6 .icon-area { font-size: 5.5em; }


  [ctx] > .wrapper > .icon-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #e5e5e5;
  }

  [ctx] > .wrapper > img {
    display: block;
    height: 100%;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
  }


  [ctx] > .wrapper .icon-user {
    font-size: 1em;
    color: #f9f9f9
  }

  [ctx] > .note {
    display: flex;
    justify-content: center;
    align-items: center;
    width:12px;
    height:12px;
    border-radius:100%;
    background: #d1d4db;
    border: 1px #fff solid;
    position: absolute;
    z-index: 5;

  }

  [ctx] > .note.status-success { background: #4fdd86}
  [ctx] > .note.status-warning { background: #ffb431}
  [ctx] > .note.status-danger { background: #f67073}

  [ctx] > .style-square + .note.top-right { top:-6px; right:-6px; }
  [ctx] > .style-square + .note.bottom-right { bottom:-6px; right:-6px; }
  [ctx] > .style-square + .note.top-left { top:-6px; left:-6px; }
  [ctx] > .style-square + .note.bottom-left { bottom:-6px; left:-6px; }

  [ctx] > .style-circle + .note.top-right { top: calc(15% - 6px); right: calc(10% - 6px); }
  [ctx] > .style-circle + .note.bottom-right { bottom: calc(15% - 6px); right: calc(15% - 6px); }
  [ctx] > .style-circle + .note.top-left { top: calc(15% - 6px); left: calc(10% - 6px); }
  [ctx] > .style-circle + .note.bottom-left { bottom: calc(15% - 6px); left: calc(15% - 6px);  }

  @media all and (min-width:641px) {
    [ctx] > .wrapper.size-2,
    [ctx] > .wrapper.size-3,
    [ctx] > .wrapper.size-4,
    [ctx] > .wrapper.size-5,
    [ctx] > .wrapper.size-6 {
      font-size: 16px
    }

    [ctx] > .note {
      font-size: 10px;
    }
  }
`
