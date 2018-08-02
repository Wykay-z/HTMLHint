/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * Copyright (c) 2014, Takeshi Kurosawa <taken.spc@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'a11y-alt-require',
    description: 'The alt attribute of an <img> element must be present and alt attribute of area[href] and input[type=image] must have a value.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var tagName = event.tagName.toLowerCase(),
                mapAttrs = parser.getMapAttrs(event.attrs),
                col = event.col + tagName.length + 1,
                selector;
            if(tagName === 'img' && !('alt' in mapAttrs)){
                reporter.warn('[A11y] 非装饰性<img>需要有alt属性添加替代文字供屏幕阅读器读取', event.line, col, self, event.raw);
            }
            else if((tagName === 'area' && 'href' in mapAttrs) ||
                (tagName === 'input' && mapAttrs['type'] === 'image')){
                if(!('alt' in mapAttrs) || mapAttrs['alt'] === ''){
                    selector = tagName === 'area' ? 'area[href]' : 'input[type=image]';
                    reporter.warn('The alt attribute of ' + selector + ' must have a value.', event.line, col, self, event.raw);
                }
            }
        });
    }
});
