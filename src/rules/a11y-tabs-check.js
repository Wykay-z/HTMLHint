HTMLHint.addRule({
  id: 'a11y-tabs-check',
  description: 'tabs should have role attr, tabindex and interaction...',
  init: function(parser, reporter){
      var self = this;
      parser.addListener('tagstart', function(event){
          var tagName = event.tagName.toLowerCase(),
              attrs = event.attrs,
              mapAttrs = parser.getMapAttrs(attrs),
              col = event.col + tagName.length + 1;
          
          if(tagName === 'div' && 'class' in mapAttrs){
              if (mapAttrs['class'] === 'tabs') {
                reporter.info('[A11y] 检查tabs是否实现无障碍，role,tabindex及交互等。', event.line, col, self, event.raw);
              }
          }
      });
  }
});
