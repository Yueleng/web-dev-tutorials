# 菜鸟教程 CSS

## background

- background-color
- background-color 覆盖
- background-image,
  - this attribute will overrite background-color, make the latter useless
- background-repeat
  - value: `['repeat-x', 'no-repeat', ...]`
  - be used with background-image together
- position your background
  - background-image: `url('https://static.runoob.com/images/mix/img_tree.png')`;
  - background-repeat: `no-repeat`;
  - background-position: `right top`;
  - margin-right: `200px`;
- fix your background-image
  - background-image:`url('https://static.runoob.com/images/mix/smiley.gif')`;
  - background-repeat:`no-repeat`;
  - background-attachment:`fixed`;
- body margin right
  - margin-right:`200px;`
  - a way to make your body having a margin on the right
- some advanced usage for background and div and body
  - https://www.runoob.com/try/try.php?filename=trycss_background_shorthand2
    - border:`1px solid gray;`
    - margin-left:`auto;`
    - margin-right:`auto;`
    - width:`90%;`
    - background-color:`#d0f0f6;`
    - text-align:`left;`
    - padding:`8px;`
- Summary
  - https://www.runoob.com/css/css-background.html
  - background is a combination attribute

## CSS Text

- color
  - three way to set color
  - body {color:red;}
  - h1 {color:#00ff00;}
  - p.ex {color:rgb(0,0,255);}
- text-align
  - center
  - right
  - justify
- text-decoration
  - none
  - overline
  - line-through
  - underline
- text-transform
  - uppercase
  - lowercase
  - capitalise
- text-indent
- letter-spacing
  - 2px, 3px, ...
- line-height
  - 70%
  - 200%
- direction
  - rtl;
- word-spacing
  - 30px
- white-space:no-wrap
  - disable new line in an element
- vertical-align
  - text-bottom
  - text-top
  - middle
- text-shadow
  - 2px 2px #FF0000

## CSS Font

- font-family
  - font-family:`"Times New Roman",Times,serif`;
  - font-family:`Arial,Helvetica,sans-serif`;
- font-size
  - 100%
  - 200%
  - 30px
  - 0.875em (14px/16=0.875em)
- font-style
  - normal
  - italic
  - oblique
- font-variant
  - normal
  - small-caps
- font-weight
  - normal
  - lighter
  - bold
  - 900
- font
  - a combination of font-\* attributes
