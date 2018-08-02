
HTMLHint.addRule({
  id: 'a11y-link-empty',
  description: 'The <a> element can\'t be empty.',
  init: function(parser, reporter){
    var self = this;
    function tagendHandle (event) {
      var tagName = event.tagName.toLowerCase();
      var lastEvent = event.lastEvent;
      if (tagName === 'a' && lastEvent.tagName === 'a') { 
        // console.log('=======> tabend:', event);
        if (lastEvent.raw.length + lastEvent.col === event.col) {
          // console.log('bingo');
          reporter.warn('[A11y] <a>标签的内容为空(可能为图片按钮)，检查是否需要添加aria-label属性说明。', event.line, event.col, self, event.raw);
        }
      }
    }
    parser.addListener('tagend', tagendHandle);
  }
});
