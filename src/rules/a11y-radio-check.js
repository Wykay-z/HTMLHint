HTMLHint.addRule({
  id: 'a11y-radio-check',
  description: 'Simulated radio should have role attr, tabindex and interaction...',
  init: function(parser, reporter){
      var self = this;
      parser.addListener('tagstart', function(event){
          var tagName = event.tagName.toLowerCase(),
              attrs = event.attrs,
              mapAttrs = parser.getMapAttrs(attrs),
              col = event.col + tagName.length + 1;
          
          if(tagName === 'input' && 'type' in mapAttrs){
              if (mapAttrs['type'] === 'radio') {
                reporter.warn('[A11y] 检查radio是否为原生实现，否则需要添加对应的无障碍属性及交互。', event.line, col, self, event.raw);
              }
          }
      });
  }
});
