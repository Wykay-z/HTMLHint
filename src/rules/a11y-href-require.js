HTMLHint.addRule({
  id: 'a11y-href-require',
  description: 'The <a> element must have href attr to get tab focus.',
  init: function(parser, reporter){
      var self = this;
      parser.addListener('tagstart', function(event){
          var tagName = event.tagName.toLowerCase(),
              mapAttrs = parser.getMapAttrs(event.attrs),
              col = event.col + tagName.length + 1;
          if(tagName === 'a' && !('href' in mapAttrs)){
              reporter.error('[A11y] <a>标签需要有href属性才可获取焦点，可使用`javascript:;`为值。', event.line, col, self, event.raw);
          }
      });
  }
});
