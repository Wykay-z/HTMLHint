HTMLHint.addRule({
  id: 'a11y-modal-check',
  description: 'modal should have role attr, tabindex and interaction...',
  init: function(parser, reporter){
      var self = this;
      parser.addListener('tagstart', function(event){
          var tagName = event.tagName.toLowerCase(),
              attrs = event.attrs,
              mapAttrs = parser.getMapAttrs(attrs),
              col = event.col + tagName.length + 1;
          
          if(tagName === 'div' && 'class' in mapAttrs){
              if (mapAttrs['class'] === 'modal-dialog') {
                reporter.info('[A11y] 检查modal是否实现无障碍，role,tabindex及交互等。', event.line, col, self, event.raw);
              }
          }
      });
  }
});
