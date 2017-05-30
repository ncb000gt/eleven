import $ from '../core';
import { addScript, document, documentFragments, each } from '../../common/helpers';

/**
 * DOM Maniuplation methods .before() .after()
 * @param {Mixed} selector The CSS selector or DOM element to insert before/after
 */
each(['before', 'after'], function(method, index){
  $.fn[method] = function(selector){
    selector = $(selector)[0];

    if(!this.length || !selector){
      return this;
    }

    var i = 0,
        k = this.length;

    for(; i < k; i++){
      var element = this[i];

      if(selector.nodeName.toLowerCase() === 'script'){
        selector = addScript(selector);
      }

      if(element.parentNode){
        element.parentNode.insertBefore(selector, method === 'before' ? element : element.nextSibling);
      }
    }

    return this;
  }
});

export default $;
