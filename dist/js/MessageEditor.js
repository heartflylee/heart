// +function ($) {
//     'use strict';
//
//     // MessageEditor CLASS DEFINITION
//     // ======================
//
// //     var toggle = '[data-toggle="MessageEditor"]'
// //
// //     var MessageEditor = function (element, options) {
// //         this.options = options;
// //         console.log(this);
// //         // $(element).on('click.bs.MessageEditor', this.toggle)
// //         this.toggle();
// //     };
// //     //
// //     // MessageEditor.VERSION = '3.3.7'
// //     //
// //     // MessageEditor.TRANSITION_DURATION = 300
// //     // MessageEditor.BACKDROP_TRANSITION_DURATION = 150
// //
// //     MessageEditor.DEFAULTS = {
// //         backdrop: true,
// //         keyboard: true,
// //         show: true
// //     };
// //
// //
// //     function RemoveEditor(e) {
// //         if (e && e.which === 3) return
// //         $(toggle).each(function () {
// //             var $this = $(this)
// //             var $parent = $this;
// //             var relatedTarget = {relatedTarget: this}
// //
// //             if (!$parent.hasClass('editor')) return
// //
// //             console.log(e);
// //
// //             if (e && e.type == 'click' && /input|textarea|select/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return
// //
// //             $parent.trigger(e = $.Event('hide.bs', relatedTarget))
// //
// //             if (e.isDefaultPrevented()) return
// //
// //             var value = $parent.find(".message-text").children()[0].value;
// //             $parent.find(".message-text").html("").append("<span>" + value + "</span>")
// //             $this.data().value = value;
// //
// // console.log($this.data().callback);
// //
// //             // $this.data().callback;
// //
// //             $this.attr('aria-expanded', 'false')
// //             $parent.removeClass('editor').trigger($.Event('hidden.bs', relatedTarget))
// //         })
// //     }
// //
// //     MessageEditor.prototype.toggle = function(e){
// //         console.log(e);
// //         // this.show();
// //         console.log(this);
// //         console.log($(this));
// //         var $this = $(this);
// //         console.log(MessageEditor)
// //         if($this.hasClass("editor")) {
// //             RemoveEditor(e);
// //         }
// //         else {
// //             MessageEditor.show;
// //         }
// //     }
// //
// //     MessageEditor.prototype.show = function (e) {
// //         // var that = this;
// //         var $this = $(this)
// //         var isActive = $this.hasClass("editor");
// //         RemoveEditor(e);
// //
// //         if (!isActive) {
// //             // var html = "";
// //             var $element = $this.find(".message-text");
// //             var data = $this.data();
// //             $element.html("");
// //             //
// //             if (data.type == "input") {
// //                 $(document.createElement(data.type))
// //                     .attr("value", data.value)
// //                     .appendTo($element).focus();
// //             }
// //             if (data.type == "select") {
// //                 $(document.createElement(data.type))
// //                     .addClass("selectpicker")
// //                     .append("<option>123</option><option>123123132</option>")
// //                     .appendTo($element);
// //             }
// //             // $(that).addClass("editor");
// //
// //             var relatedTarget = {relatedTarget: this}
// //             $this.trigger(e = $.Event('show.bs.MessageEditor', relatedTarget))
// //
// //             if (e.isDefaultPrevented()) return
// //             $this
// //                 .trigger('focus')
// //                 .attr('aria-expanded', 'true')
// //
// //                 // $parent
// //                 .addClass("editor")
// //                 .trigger($.Event('shown.bs.MessageEditor', relatedTarget))
// //         }
// //
// //         return false;
// //     };
// //
// //     MessageEditor.prototype.keydown = function (e) {
// //         if (!/(38|40|27|32)/.test(e.which) || /input|textarea|select/i.test(e.target.tagName)) return
// //
// //         var $this = $(this)
// //
// //         e.preventDefault()
// //         e.stopPropagation()
// //
// //         if ($this.is('.disabled, :disabled')) return
// //
// //         // var $parent = getParent($this)
// //         var $parent = $this
// //         var isActive = $parent.hasClass('editor')
// //
// //         if (!isActive && e.which != 27 || isActive && e.which == 27) {
// //             if (e.which == 27) $parent.trigger('focus')
// //             return $this.trigger('click')
// //         }
// //
// //     }
// //
// //
// //     // MessageEditor PLUGIN DEFINITION
// //     // =======================
// //
// //     function Plugin(option, _relatedTarget) {
// //         // console.log(option);
// //
// //         return this.each(function () {
// //
// //             var $this = $(this)
// //             var data = $this.data('bs.MessageEditor')
// //             console.log(data);
// //
// //             // if (typeof option == 'string') data[option].call($this)
// //
// //
// //             var options = $.extend({}, MessageEditor.DEFAULTS, $this.data(), typeof option == 'object' && option)
// //             if (!data) $this.data('bs.MessageEditor', (data = new MessageEditor(this,options)))
// //             // if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
// //             if (typeof option == 'string') data[option](_relatedTarget)
// //             else if (options.show) data.show(_relatedTarget)
// //
// //             // console.log(options)
// //         })
// //     }
// //
// //     var old = $.fn.MessageEditor
// //
// //     $.fn.MessageEditor = Plugin
// //     $.fn.MessageEditor.Constructor = MessageEditor
// //
// //
// //     // MessageEditor NO CONFLICT
// //     // =================
// //
// //     $.fn.MessageEditor.noConflict = function () {
// //         $.fn.MessageEditor = old
// //         return this
// //     }
//
//
//     // MessageEditor DATA-API
//     // ==============
//     //
//
//
//     // $(document)
//     //     .on('click.bs.MessageEditor.data-api', RemoveEditor)
//     //
//     //     .on('click.bs.MessageEditor.data-api', toggle, MessageEditor.prototype.show)
//     //     .on('keydown.bs.MessageEditor.data-api', toggle, MessageEditor.prototype.keydown)
//
//
//     $.fn.MessageEditor = function (option) {
//         this.options = $.extend({editor: ".message-text"}, typeof option == 'object' && option);
//
//         console.log(this.options);
//         // console.log(e);
//         init();
//
//     }
//
//
//     var init = function () {
//         var $this = $(this);
//         var obj = this;
//         console.log(this);
//         console.log($this);
//         // console.log($.contains(obj[0], e.target));
//         if (e && e.type == 'click' && /input|textarea|select/i.test(e.target.tagName) && $.contains(obj[0], e.target)) return
//
//         if ($this.hasClass("editor")) {
//             removeEditor();
//         }
//         else {
//             // editor(obj, e);
//         }
//
//     }
//
//
//     var editor = function (obj) {
//         var $this = $(obj);
//         var option = obj.options;
//         if ($this.hasClass('editor')) {
//             return false;
//         }
//
//         var $element = $this.find(option.editor);
//         var data = $this.data();
//         $element.html("");
//
//         if (data.type == "input") {
//             $(document.createElement(data.type))
//                 .attr("value", data.value)
//                 .appendTo($element).focus();
//         }
//         if (data.type == "select") {
//             $(document.createElement(data.type))
//                 .addClass("selectpicker")
//                 .append("<option>123</option><option>123123132</option>")
//                 .appendTo($element);
//         }
//
//         $this.addClass('editor');
//     }
//
//     var removeEditor = function () {
//
//         $(".message-li").each(function (e) {
//             var $this = $(this);
//             // if (!$this.hasClass('editor')) {
//             //     return false;
//             // }
//             var $element = $this.find(".message-text");
//             var value = $element.children()[0].value;
//             if (value == undefined) {
//                 return
//             }
//             $element.html("");
//             $element.append("<span>" + value + "</span>");
//             $this.data().value = value;
//             $this.removeClass('editor');
//         })
//     }
//
//     // $(".layer-detail-warp").click(function (e) {
//     //     console.log(e);
//     //     console.log($('.message-li')[0]);
//     //     console.log($.contains(e, $('.message-li')));
//     //     console.log($.contains($('.message-li'), e));
//     //     if (!$.contains(e, $('.message-li')) && $.contains($('.message-li'), e)) {
//     //         removeEditor();
//     //     }
//     //
//     //     // if($.Contains(this[0],))
//     // })
//
// }(jQuery);
