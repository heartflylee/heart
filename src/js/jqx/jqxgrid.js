/*
 jQWidgets v4.5.0 (2017-Jan)
 Copyright (c) 2011-2017 jQWidgets.
 License: http://jqwidgets.com/license/
 */
! function(a) {
    function b(b, c) {
        return this.owner = b, this.datafield = null, this.displayfield = null, this.text = "", this.createfilterpanel = null, this.sortable = !0, this.hideable = !0, this.editable = !0, this.hidden = !1, this.groupable = !0, this.renderer = null, this.cellsrenderer = null, this.checkchange = null, this.threestatecheckbox = !1, this.buttonclick = null, this.columntype = null, this.cellsformat = "", this.align = "left", this.cellsalign = "left", this.width = "auto", this.minwidth = 25, this.maxwidth = "auto", this.pinned = !1, this.visibleindex = -1, this.filterable = !0, this.filter = null, this.filteritems = [], this.resizable = !0, this.initeditor = null, this.createeditor = null, this.createwidget = null, this.initwidget = null, this.destroywidget = null, this.destroyeditor = null, this.geteditorvalue = null, this.validation = null, this.classname = "", this.cellclassname = "", this.cellendedit = null, this.cellbeginedit = null, this.cellvaluechanging = null, this.aggregates = null, this.aggregatesrenderer = null, this.menu = !0, this.createfilterwidget = null, this.filtertype = "default", this.filtercondition = null, this.rendered = null, this.exportable = !0, this.exporting = !1, this.draggable = !0, this.nullable = !0, this.clipboard = !0, this.enabletooltips = !0, this.columngroup = null, this.filterdelay = 800, this.reseteverpresentrowwidgetvalue = null, this.geteverpresentrowwidgetvalue = null, this.createeverpresentrowwidget = null, this.initeverpresentrowwidget = null, this.validateeverpresentrowwidgetvalue = null, this.destroyeverpresentrowwidget = null, this.getcolumnproperties = function() {
            return {
                nullable: this.nullable,
                sortable: this.sortable,
                hideable: this.hideable,
                hidden: this.hidden,
                groupable: this.groupable,
                width: this.width,
                align: this.align,
                editable: this.editable,
                minwidth: this.minwidth,
                maxwidth: this.maxwidth,
                resizable: this.resizable,
                datafield: this.datafield,
                text: this.text,
                exportable: this.exportable,
                cellsalign: this.cellsalign,
                pinned: this.pinned,
                cellsformat: this.cellsformat,
                columntype: this.columntype,
                classname: this.classname,
                cellclassname: this.cellclassname,
                menu: this.menu
            }
        }, this.setproperty = function(a, b) {
            if(this[a]) {
                var c = this[a];
                this[a] = b, this.owner._columnPropertyChanged(this, a, b, c)
            } else if(this[a.toLowerCase()]) {
                var c = this[a.toLowerCase()];
                this[a.toLowerCase()] = b, this.owner._columnPropertyChanged(this, a.toLowerCase(), b, c)
            }
        }, this._initfields = function(c) {
            if(null != c) {
                var d = this.that;
                if(a.jqx.hasProperty(c, "dataField") && (this.datafield = a.jqx.get(c, "dataField")), a.jqx.hasProperty(c, "displayField") ? this.displayfield = a.jqx.get(c, "displayField") : this.displayfield = this.datafield, a.jqx.hasProperty(c, "enableTooltips") && (this.enabletooltips = a.jqx.get(c, "enableTooltips")), a.jqx.hasProperty(c, "text") ? this.text = a.jqx.get(c, "text") : this.text = this.displayfield, a.jqx.hasProperty(c, "createfilterpanel") && (this.createfilterpanel = a.jqx.get(c, "createfilterpanel")), a.jqx.hasProperty(c, "sortable") && (this.sortable = a.jqx.get(c, "sortable")), a.jqx.hasProperty(c, "hideable") && (this.hideable = a.jqx.get(c, "hideable")), a.jqx.hasProperty(c, "hidden") && (this.hidden = a.jqx.get(c, "hidden")), a.jqx.hasProperty(c, "groupable") && (this.groupable = a.jqx.get(c, "groupable")), a.jqx.hasProperty(c, "renderer") && (this.renderer = a.jqx.get(c, "renderer")), a.jqx.hasProperty(c, "align") && (this.align = a.jqx.get(c, "align")), a.jqx.hasProperty(c, "cellsAlign") && (this.cellsalign = a.jqx.get(c, "cellsAlign")), a.jqx.hasProperty(c, "clipboard") && (this.clipboard = a.jqx.get(c, "clipboard")), a.jqx.hasProperty(c, "cellsFormat") && (this.cellsformat = a.jqx.get(c, "cellsFormat")), a.jqx.hasProperty(c, "width") && (this.width = a.jqx.get(c, "width")), a.jqx.hasProperty(c, "minWidth") && (this.minwidth = parseInt(a.jqx.get(c, "minWidth")), isNaN(this.minwidth) && (this.minwidth = 25)), a.jqx.hasProperty(c, "maxWidth") && (this.maxwidth = parseInt(a.jqx.get(c, "maxWidth")), isNaN(this.maxwidth) && (this.maxwidth = "auto")), a.jqx.hasProperty(c, "cellsRenderer") ? this.cellsrenderer = a.jqx.get(c, "cellsRenderer") : c.cellsRenderer && (this.cellsrenderer = c.cellsRenderer), a.jqx.hasProperty(c, "columnType") && (this.columntype = a.jqx.get(c, "columnType")), a.jqx.hasProperty(c, "checkChange") && (this.checkchange = a.jqx.get(c, "checkChange")), a.jqx.hasProperty(c, "buttonClick") ? this.buttonclick = a.jqx.get(c, "buttonClick") : c.buttonClick && (this.buttonclick = c.buttonClick), a.jqx.hasProperty(c, "pinned") && (this.pinned = a.jqx.get(c, "pinned")), a.jqx.hasProperty(c, "visibleIndex") && (this.visibleindex = a.jqx.get(c, "visibleIndex")), a.jqx.hasProperty(c, "filterable") && (this.filterable = a.jqx.get(c, "filterable")), a.jqx.hasProperty(c, "filter") && (this.filter = a.jqx.get(c, "filter")), a.jqx.hasProperty(c, "resizable") && (this.resizable = a.jqx.get(c, "resizable")), a.jqx.hasProperty(c, "editable") && (this.editable = a.jqx.get(c, "editable")), a.jqx.hasProperty(c, "initEditor") ? this.initeditor = a.jqx.get(c, "initEditor") : c.initEditor && (this.initeditor = c.initEditor), a.jqx.hasProperty(c, "createEditor") ? this.createeditor = a.jqx.get(c, "createEditor") : c.createEditor && (this.createeditor = c.createEditor), a.jqx.hasProperty(c, "initWidget") ? this.initwidget = a.jqx.get(c, "initWidget") : c.initWidget && (this.initwidget = c.initWidget), a.jqx.hasProperty(c, "createWidget") ? this.createwidget = a.jqx.get(c, "createWidget") : c.createWidget && (this.createwidget = c.createWidget), a.jqx.hasProperty(c, "destroyWidget") ? this.destroywidget = a.jqx.get(c, "destroyWidget") : c.destroyWidget && (this.destroywidget = c.destroyWidget), a.jqx.hasProperty(c, "reseteverpresentrowwidgetvalue") || a.jqx.hasFunction(c, "reseteverpresentrowwidgetvalue") ? this.reseteverpresentrowwidgetvalue = a.jqx.get(c, "reseteverpresentrowwidgetvalue") : c.resetEverPresentRowWidgetValue && (this.reseteverpresentrowwidgetvalue = c.resetEverPresentRowWidgetValue), a.jqx.hasProperty(c, "geteverpresentrowwidgetvalue") || a.jqx.hasFunction(c, "geteverpresentrowwidgetvalue") ? this.geteverpresentrowwidgetvalue = a.jqx.get(c, "geteverpresentrowwidgetvalue") : c.getEverPresentRowWidgetValue && (this.geteverpresentrowwidgetvalue = c.getEverPresentRowWidgetValue), a.jqx.hasProperty(c, "createeverpresentrowwidget") || a.jqx.hasFunction(c, "createeverpresentrowwidget") ? this.createeverpresentrowwidget = a.jqx.get(c, "createeverpresentrowwidget") : c.createEverPresentRowWidget && (this.createeverpresentrowwidget = c.createEverPresentRowWidget), a.jqx.hasProperty(c, "initeverpresentrowwidget") || a.jqx.hasFunction(c, "initeverpresentrowwidget") ? this.initeverpresentrowwidget = a.jqx.get(c, "initeverpresentrowwidget") : c.initEverPresentRowWidget && (this.initeverpresentrowwidget = c.initEverPresentRowWidget), a.jqx.hasProperty(c, "validateeverpresentrowwidgetvalue") ? this.validateeverpresentrowwidgetvalue = a.jqx.get(c, "validateeverpresentrowwidgetvalue") : c.validateEverPresentRowWidgetValue && (this.validateeverpresentrowwidgetvalue = c.validateEverPresentRowWidgetValue), a.jqx.hasProperty(c, "destroyeverpresentrowwidget") || a.jqx.hasFunction(c, "destroyeverpresentrowwidget") ? this.destroyeverpresentrowwidget = a.jqx.get(c, "destroyeverpresentrowwidget") : c.destroyEverPresentRowWidget && (this.destroyEverPresentRowWidget = c.destroyEverPresentRowWidget), a.jqx.hasProperty(c, "destroyEditor") ? this.destroyeditor = a.jqx.get(c, "destroyEditor") : c.destroyEditor && (this.destroyeditor = c.destroyEditor), a.jqx.hasProperty(c, "getEditorValue") ? this.geteditorvalue = a.jqx.get(c, "getEditorValue") : c.getEditorValue && (this.geteditorvalue = c.getEditorValue), a.jqx.hasProperty(c, "validation") ? this.validation = a.jqx.get(c, "validation") : c.validation && (this.validation = c.validation), a.jqx.hasProperty(c, "cellBeginEdit") ? this.cellbeginedit = a.jqx.get(c, "cellBeginEdit") : c.cellBeginEdit && (this.cellbeginedit = c.cellBeginEdit), a.jqx.hasProperty(c, "cellEndEdit") ? this.cellendedit = a.jqx.get(c, "cellEndEdit") : c.cellEndEdit && (this.cellendedit = c.cellEndEdit), a.jqx.hasProperty(c, "className") && (this.classname = a.jqx.get(c, "className")), a.jqx.hasProperty(c, "cellClassName") ? this.cellclassname = a.jqx.get(c, "cellClassName") : c.cellClassName && (this.cellclassname = c.cellClassName), a.jqx.hasProperty(c, "menu") && (this.menu = a.jqx.get(c, "menu")), a.jqx.hasProperty(c, "aggregates") && (this.aggregates = a.jqx.get(c, "aggregates")), a.jqx.hasProperty(c, "aggregatesRenderer") && (this.aggregatesrenderer = a.jqx.get(c, "aggregatesRenderer")), a.jqx.hasProperty(c, "createFilterWidget") && (this.createfilterwidget = a.jqx.get(c, "createFilterWidget")), a.jqx.hasProperty(c, "filterType") && (this.filtertype = a.jqx.get(c, "filterType")), a.jqx.hasProperty(c, "filterDelay") && (this.filterdelay = a.jqx.get(c, "filterDelay")), a.jqx.hasProperty(c, "rendered") && (this.rendered = a.jqx.get(c, "rendered")), a.jqx.hasProperty(c, "exportable") && (this.exportable = a.jqx.get(c, "exportable")), a.jqx.hasProperty(c, "filterItems") && (this.filteritems = a.jqx.get(c, "filterItems")), a.jqx.hasProperty(c, "cellValueChanging") && (this.cellvaluechanging = a.jqx.get(c, "cellValueChanging")), a.jqx.hasProperty(c, "draggable") && (this.draggable = a.jqx.get(c, "draggable")), a.jqx.hasProperty(c, "filterCondition") && (this.filtercondition = a.jqx.get(c, "filterCondition")), a.jqx.hasProperty(c, "threeStateCheckbox") && (this.threestatecheckbox = a.jqx.get(c, "threeStateCheckbox")), a.jqx.hasProperty(c, "nullable") && (this.nullable = a.jqx.get(c, "nullable")), a.jqx.hasProperty(c, "columnGroup") && (this.columngroup = a.jqx.get(c, "columnGroup")), !c instanceof String && "string" != typeof c)
                    for(var e in c)
                        if(!d.hasOwnProperty(e) && !d.hasOwnProperty(e.toLowerCase())) throw b.host.remove(), new Error("jqxGrid: Invalid property name - " + e + ".")
            }
        }, this._initfields(c), this
    }

    function c(a, b) {
        return this.setdata = function(a) {
            null != a && (this.bounddata = a, this.boundindex = a.boundindex, this.visibleindex = a.visibleindex, this.group = a.group, this.parentbounddata = a.parentItem, this.uniqueid = a.uniqueid, this.level = a.level)
        }, this.setdata(b), this.parentrow = null, this.subrows = new Array, this.owner = a, this.height = 25, this.hidden = !1, this.rowdetails = null, this.rowdetailsheight = 100, this.rowdetailshidden = !0, this.top = -1, this.setrowinfo = function(a) {
            this.hidden = a.hidden, this.rowdetails = a.rowdetails, this.rowdetailsheight = a.rowdetailsheight, this.rowdetailshidden = !a.showdetails, this.height = a.height
        }, this
    }
    a.jqx.jqxWidget("jqxGrid", "", {}), a.extend(a.jqx._jqxGrid.prototype, {
        defineInstance: function() {
            var b = {
                disabled: !1,
                width: 600,
                height: 400,
                pagerheight: 34,
                groupsheaderheight: 34,
                pagesize: 10,
                pagesizeoptions: ["5", "10", "20"],
                rowsheight: 28,
                columnsheight: 30,
                filterrowheight: 31,
                groupindentwidth: 30,
                rowdetails: !1,
                enablerowdetailsindent: !0,
                enablemousewheel: !0,
                initrowdetails: null,
                layoutrowdetails: null,
                editable: !1,
                editmode: "selectedcell",
                pageable: !1,
                pagermode: "default",
                pagerbuttonscount: 5,
                groupable: !1,
                sortable: !1,
                filterable: !1,
                filterhide:!0,
                filtermode: "default",
                autoshowfiltericon: !0,
                showfiltercolumnbackground: !0,
                showpinnedcolumnbackground: !0,
                showsortcolumnbackground: !0,
                altrows: !1,
                altstart: 1,
                altstep: 1,
                showrowdetailscolumn: !0,
                showtoolbar: !1,
                toolbarheight: 34,
                showstatusbar: !1,
                statusbarheight: 34,
                enableellipsis: !0,
                groups: [],
                groupsrenderer: null,
                groupcolumnrenderer: null,
                groupsexpandedbydefault: !1,
                pagerrenderer: null,
                touchmode: "auto",
                columns: [],
                selectedrowindex: -1,
                selectedrowindexes: new Array,
                selectedcells: new Array,
                autobind: !0,
                selectedcell: null,
                tableZIndex: 799,
                headerZIndex: 299,
                updatefilterconditions: null,
                showgroupaggregates: !1,
                showaggregates: !1,
                showfilterrow: !1,
                showeverpresentrow: !1,
                everpresentrowposition: "top",
                everpresentrowactions: "add reset",
                everpresentrowactionsmode: "buttons",
                everpresentrowheight: 30,
                autorowheight: !1,
                autokoupdates: !0,
                handlekeyboardnavigation: null,
                showsortmenuitems: !0,
                showfiltermenuitems: !0,
                showgroupmenuitems: !0,
                enablebrowserselection: !1,
                enablekeyboarddelete: !0,
                clipboard: !0,
                clipboardbegin: null,
                clipboardend: null,
                copytoclipboardwithheaders: !1,
                copytoclipboardhiddencolumns: !1,
                ready: null,
                updatefilterpanel: null,
                autogeneratecolumns: !1,
                rowdetailstemplate: null,
                scrollfeedback: null,
                rendertoolbar: null,
                renderstatusbar: null,
                rendered: null,
                multipleselectionbegins: null,
                columngroups: null,
                cellhover: null,
                source: {
                    beforeprocessing: null,
                    beforesend: null,
                    loaderror: null,
                    localdata: null,
                    data: null,
                    datatype: "array",
                    datafields: [],
                    url: "",
                    root: "",
                    record: "",
                    id: "",
                    totalrecords: 0,
                    recordstartindex: 0,
                    recordendindex: 0,
                    loadallrecords: !0,
                    sortcolumn: null,
                    sortdirection: null,
                    sort: null,
                    filter: null,
                    sortcomparer: null
                },
                filter: null,
                dataview: null,
                updatedelay: null,
                autoheight: !1,
                autowidth: !1,
                showheader: !0,
                showgroupsheader: !0,
                closeablegroups: !0,
                scrollbarsize: a.jqx.utilities.scrollBarSize,
                touchscrollbarsize: a.jqx.utilities.touchScrollBarSize,
                scrollbarautoshow: a.jqx.utilities.scrollBarAutoShow,
                virtualmode: !1,
                sort: null,
                columnsmenu: !0,
                columnsresize: !1,
                columnsautoresize: !0,
                columnsreorder: !1,
                columnsmenuwidth: 15,
                autoshowcolumnsmenubutton: !0,
                popupwidth: "auto",
                popupheight: "auto",
                columnmenuopening: null,
                columnmenuclosing: null,
                sorttogglestates: 2,
                rendergridrows: null,
                enableanimations: !0,
                enablecolumnsvirtualization: !0,
                enabletooltips: !1,
                selectionmode: "singlerow",
                enablehover: !0,
                loadingerrormessage: "The data is still loading. When the data binding is completed, the Grid raises the 'bindingcomplete' event. Call this function in the 'bindingcomplete' event handler.",
                verticalscrollbarstep: 30,
                verticalscrollbarlargestep: 400,
                horizontalscrollbarstep: 10,
                horizontalscrollbarlargestep: 50,
                keyboardnavigation: !0,
                touchModeStyle: "auto",
                autoshowloadelement: !0,
                showdefaultloadelement: !0,
                showemptyrow: !0,
                autosavestate: !1,
                autoloadstate: !1,
                _updating: !1,
                _pagescache: new Array,
                _pageviews: new Array,
                _cellscache: new Array,
                _rowdetailscache: new Array,
                _rowdetailselementscache: new Array,
                _requiresupdate: !1,
                _hasOpenedMenu: !1,
                scrollmode: "physical",
                deferreddatafields: null,
                localization: null,
                rtl: !1,
                menuitemsarray: [],
                events: ["initialized", "rowClick", "rowSelect", "rowUnselect", "groupExpand", "groupCollapse", "sort", "columnClick", "cellClick", "pageChanged", "pageSizeChanged", "bindingComplete", "groupsChanged", "filter", "columnResized", "cellSelect", "cellUnselect", "cellBeginEdit", "cellEndEdit", "cellValueChanged", "rowExpand", "rowCollapse", "rowDoubleClick", "cellDoubleClick", "columnReordered", "pageChanging"]
            };
            return a.extend(!0, this, b), b
        },
        createInstance: function(b) {
            this.that = this;
            var c = this;
            c.pagesize = parseInt(c.pagesize), c.toolbarheight = parseInt(c.toolbarheight), c.columnsheight = parseInt(c.columnsheight), c.filterrowheight = parseInt(c.filterrowheight), c.statusbarheight = parseInt(c.statusbarheight), c.groupsheaderheight = parseInt(c.groupsheaderheight), c.detailsVisibility = new Array, c.savedArgs = b && b.length > 0 ? b[0] : null;
            var d = "<div class='jqx-clear jqx-border-reset jqx-overflow-hidden jqx-max-size jqx-position-relative'><div tabindex='1' class='jqx-clear jqx-max-size jqx-position-relative jqx-overflow-hidden jqx-background-reset' id='wrapper" + c.element.id + "'><div class='jqx-clear jqx-position-absolute' id='toolbar' style='visibility: hidden;'></div><div class='jqx-clear jqx-position-absolute' id='groupsheader' style='visibility: hidden;'></div><div class='jqx-clear jqx-overflow-hidden jqx-position-absolute jqx-border-reset jqx-background-reset' id='content" + c.element.id + "'></div><div class='jqx-clear jqx-position-absolute' id='verticalScrollBar" + c.element.id + "'></div><div class='jqx-clear jqx-position-absolute' id='horizontalScrollBar" + c.element.id + "'></div><div class='jqx-clear jqx-position-absolute jqx-border-reset' id='bottomRight'></div><div class='jqx-clear jqx-position-absolute' id='addrow'></div><div class='jqx-clear jqx-position-absolute' id='statusbar'></div><div class='jqx-clear jqx-position-absolute' id='pager' style='z-index: 20;'></div></div></div>";
            if(c.element.innerHTML = "", 15 != a.jqx.utilities.scrollBarSize && (c.scrollbarsize = a.jqx.utilities.scrollBarSize), c.source) {
                if(!c.source.dataBind) {
                    if(!a.jqx.dataAdapter) throw new Error("jqxGrid: Missing reference to jqxdata.js");
                    c.source = new a.jqx.dataAdapter(c.source)
                }
                var e = c.source._source.datafields;
                e && e.length > 0 && (c.editmode = c.editmode.toLowerCase(), c.selectionmode = c.selectionmode.toLowerCase())
            }
            c.host.attr("role", "grid"), c.host.attr("align", "left"), c.element.innerHTML = d, c.host.addClass(c.toTP("jqx-grid")), c.host.addClass(c.toTP("jqx-reset")), c.host.addClass(c.toTP("jqx-rc-all")), c.host.addClass(c.toTP("jqx-widget")), c.host.addClass(c.toTP("jqx-widget-content")), c.wrapper = c.host.find("#wrapper" + c.element.id), c.content = c.host.find("#content" + c.element.id), c.content.addClass(c.toTP("jqx-reset"));
            var f = c.host.find("#verticalScrollBar" + c.element.id),
                g = c.host.find("#horizontalScrollBar" + c.element.id);
            if(c.bottomRight = c.host.find("#bottomRight").addClass(c.toTP("jqx-grid-bottomright jqx-scrollbar-state-normal")), !f.jqxScrollBar) throw new Error("jqxGrid: Missing reference to jqxscrollbar.js");
            if(c.editors = new Array, c.vScrollBar = f.jqxScrollBar({
                    vertical: !0,
                    rtl: c.rtl,
                    touchMode: c.touchmode,
                    step: c.verticalscrollbarstep,
                    largestep: c.verticalscrollbarlargestep,
                    theme: c.theme,
                    _triggervaluechanged: !1
                }), c.hScrollBar = g.jqxScrollBar({
                    vertical: !1,
                    rtl: c.rtl,
                    touchMode: c.touchmode,
                    step: c.horizontalscrollbarstep,
                    largestep: c.horizontalscrollbarlargestep,
                    theme: c.theme,
                    _triggervaluechanged: !1
                }), c.addnewrow = c.host.find("#addrow"), c.addnewrow[0].id = "addrow" + c.element.id, c.addnewrow.addClass(c.toTP("jqx-widget-header")), c.pager = c.host.find("#pager"), c.pager[0].id = "pager" + c.element.id, c.toolbar = c.host.find("#toolbar"), c.toolbar[0].id = "toolbar" + c.element.id, c.toolbar.addClass(c.toTP("jqx-grid-toolbar")), c.toolbar.addClass(c.toTP("jqx-widget-header")), c.statusbar = c.host.find("#statusbar"), c.statusbar[0].id = "statusbar" + c.element.id, c.statusbar.addClass(c.toTP("jqx-grid-statusbar")), c.statusbar.addClass(c.toTP("jqx-widget-header")), c.pager.addClass(c.toTP("jqx-grid-pager")), c.pager.addClass(c.toTP("jqx-widget-header")), c.groupsheader = c.host.find("#groupsheader"), c.groupsheader.addClass(c.toTP("jqx-grid-groups-header")), c.groupsheader.addClass(c.toTP("jqx-widget-header")), c.groupsheader[0].id = "groupsheader" + c.element.id, c.vScrollBar.css("visibility", "hidden"), c.hScrollBar.css("visibility", "hidden"), c.vScrollInstance = a.data(c.vScrollBar[0], "jqxScrollBar").instance, c.hScrollInstance = a.data(c.hScrollBar[0], "jqxScrollBar").instance, c.gridtable = null, c.isNestedGrid = !!c.host.parent() && 9999 == c.host.parent().css("z-index"), c.touchdevice = c.isTouchDevice(), c.localizestrings && (c.localizestrings(), null != c.localization && c.localizestrings(c.localization, !1)), c.rowdetailstemplate && (void 0 == c.rowdetailstemplate.rowdetails && (c.rowdetailstemplate.rowdetails = "<div></div>"), void 0 == c.rowdetailstemplate.rowdetailsheight && (c.rowdetailstemplate.rowdetailsheight = 200), void 0 == c.rowdetailstemplate.rowdetailshidden && (c.rowdetailstemplate.rowdetailshidden = !0)), c.showfilterrow && !c.filterable) throw new Error('jqxGrid: "showfilterrow" requires setting the "filterable" property to true!');
            if(c.autorowheight && !c.autoheight && !c.pageable) throw new Error('jqxGrid: "autorowheight" requires setting the "autoheight" or "pageable" property to true!');
            if(c.virtualmode && null == c.rendergridrows) throw new Error('jqxGrid: "virtualmode" requires setting the "rendergridrows"!');
            if(c.virtualmode && !c.pageable && c.groupable) throw new Error('jqxGrid: "grouping" in "virtualmode" without paging is not supported!');
            if(!c._testmodules()) {
                if(c._builddataloadelement(), c._cachedcolumns = c.columns, c.columns && c.columns.length > 299 && (c.headerZIndex = c.columns.length + 100), 28 != c.rowsheight && c._measureElement("cell"), (30 != c.columnsheight || c.columngroups) && c._measureElement("column"), c.source) {
                    var e = c.source.datafields;
                    if(null == e && c.source._source && (e = c.source._source.datafields), e)
                        for(var h = 0; h < c.columns.length; h++) {
                            var i = c.columns[h];
                            if(i && i.cellsformat && i.cellsformat.length > 2)
                                for(var j = 0; j < e.length; j++)
                                    if(e[j].name == i.datafield && !e[j].format) {
                                        e[j].format = i.cellsformat;
                                        break
                                    }
                        }
                }
                c.databind(c.source), c.showtoolbar && c.toolbar.css("visibility", "inherit"), c.showstatusbar && c.statusbar.css("visibility", "inherit"), c._arrange(), c.pageable && c._initpager && c._initpager(), c.tableheight = null;
                var k = c.that,
                    l = function() {
                        k.content && (k.content[0].scrollTop = 0, k.content[0].scrollLeft = 0), k.gridcontent && (k.gridcontent[0].scrollLeft = 0, k.gridcontent[0].scrollTop = 0)
                    };
                c.addHandler(c.content, "mousedown", function() {
                    l()
                }), c.addHandler(c.content, "scroll", function(a) {
                    return l(), !1
                }), c.showfilterrow || (c.showstatusbar || c.showtoolbar || c.host.addClass("jqx-disableselect"), c.content.addClass("jqx-disableselect")), c.enablebrowserselection && (c.content.removeClass("jqx-disableselect"), c.host.removeClass("jqx-disableselect")), c._resizeWindow(), c.disabled && c.host.addClass(c.toThemeProperty("jqx-fill-state-disabled")), c.hasTransform = a.jqx.utilities.hasTransform(c.host), "logical" == c.scrollmode && (c.vScrollInstance.thumbStep = c.rowsheight, c.vScrollInstance.step = c.rowsheight), a.jqx.isHidden(c.host) || (c.filterable || c.groupable || c.sortable) && c._initmenu()
            }
        },
        _resizeWindow: function() {
            var b = this.that;
            if(null != this.width && this.width.toString().indexOf("%") != -1 || null != this.height && this.height.toString().indexOf("%") != -1) {
                this._updatesizeonwindowresize = !0, a.jqx.utilities.resize(this.host, function(c) {
                    var d = a(window).width(),
                        e = a(window).height(),
                        f = b.host.width(),
                        g = b.host.height();
                    if(b.autoheight && (b._lastHostWidth = e), b._lastHostWidth != f || b._lastHostHeight != g) {
                        if(b.touchdevice && b.editcell && "orientationchange" !== c) return;
                        b._updatesize(b._lastHostWidth != f, b._lastHostHeight != g)
                    }
                    b._lastWidth = d, b._lastHeight = e, b._lastHostWidth = f, b._lastHostHeight = g
                });
                var c = b.host.width(),
                    d = b.host.height();
                b._lastHostWidth = c, b._lastHostHeight = d
            }
        },
        _builddataloadelement: function() {
            if(this.dataloadelement && this.dataloadelement.remove(), this.dataloadelement = a('<div style="overflow: hidden; position: absolute;"></div>'), this.showdefaultloadelement) {
                var b = a('<div style="z-index: 99999; margin-left: -66px; left: 50%; top: 50%; margin-top: -24px; position: relative; width: 100px; height: 33px; padding: 5px; font-family: verdana; font-size: 12px; color: #767676; border-color: #898989; border-width: 1px; border-style: solid; background: #f6f6f6; border-collapse: collapse;"><div style="float: left;"><div style="float: left; overflow: hidden; width: 32px; height: 32px;" class="jqx-grid-load"/><span style="margin-top: 10px; float: left; display: block; margin-left: 5px;" >' + this.gridlocalization.loadtext + "</span></div></div>");
                b.addClass(this.toTP("jqx-rc-all")), this.dataloadelement.addClass(this.toTP("jqx-rc-all")), b.addClass(this.toTP("jqx-fill-state-normal")), this.dataloadelement.append(b)
            } else this.dataloadelement.addClass(this.toTP("jqx-grid-load"));
            this.dataloadelement.width(this.host.width()), this.dataloadelement.height(this.host.height()), this.wrapper.prepend(this.dataloadelement)
        },
        _measureElement: function(b) {
            var c = a("<span style='visibility: hidden; white-space: nowrap;'>measure Text</span>");
            c.addClass(this.toTP("jqx-widget")), a(document.body).append(c), "cell" == b ? this._cellheight = c.height() : this._columnheight = c.height(), c.remove()
        },
        _measureMenuElement: function() {
            var b = a("<span style='visibility: hidden; white-space: nowrap;'>measure Text</span>");
            b.addClass(this.toTP("jqx-widget")), b.addClass(this.toTP("jqx-menu")), b.addClass(this.toTP("jqx-menu-item-top")), b.addClass(this.toTP("jqx-fill-state-normal")), this.isTouchDevice() && b.addClass(this.toTP("jqx-grid-menu-item-touch")), a(document.body).append(b);
            var c = b.outerHeight();
            return b.remove(), c
        },
        _measureElementWidth: function(b) {
            var c = a("<span style='visibility: hidden; white-space: nowrap;'>" + b + "</span>");
            c.addClass(this.toTP("jqx-widget")), c.addClass(this.toTP("jqx-grid")), c.addClass(this.toTP("jqx-grid-column-header")), c.addClass(this.toTP("jqx-widget-header")), a(document.body).append(c);
            var d = c.outerWidth() + 20;
            return c.remove(), d
        },
        _getBodyOffset: function() {
            var b = 0,
                c = 0;
            return "0px" != a("body").css("border-top-width") && (b = parseInt(a("body").css("border-top-width")), isNaN(b) && (b = 0)), "0px" != a("body").css("border-left-width") && (c = parseInt(a("body").css("border-left-width")), isNaN(c) && (c = 0)), {
                left: c,
                top: b
            }
        },
        _testmodules: function() {
            var b = "",
                c = this.that,
                d = function() {
                    "" != b.length && (b += ",")
                };
            if(this.columnsmenu && !this.host.jqxMenu && (this.sortable || this.groupable || this.filterable) && (d(), b += " jqxmenu.js"), this.host.jqxScrollBar || (d(), b += " jqxscrollbar.js"), this.host.jqxButton || (d(), b += " jqxbuttons.js"), a.jqx.dataAdapter || (d(), b += " jqxdata.js"), this.pageable && !this.gotopage && (d(), b += "jqxgrid.pager.js"), this.filterable && !this.applyfilters && (d(), b += " jqxgrid.filter.js"), this.groupable && !this._initgroupsheader && (d(), b += " jqxgrid.grouping.js"), this.columnsresize && !this.autoresizecolumns && (d(), b += " jqxgrid.columnsresize.js"), this.columnsreorder && !this.setcolumnindex && (d(), b += " jqxgrid.columnsreorder.js"), this.sortable && !this.sortby && (d(), b += " jqxgrid.sort.js"), this.editable && !this.begincelledit && (d(), b += " jqxgrid.edit.js"), this.showaggregates && !this.getcolumnaggregateddata && (d(), b += " jqxgrid.aggregates.js"), this.keyboardnavigation && !this.selectrow && (d(), b += " jqxgrid.selection.js"), "" != b || this.editable || this.filterable || this.pageable) {
                var e = [],
                    f = function(a) {
                        switch(a) {
                            case "checkbox":
                                c.host.jqxCheckBox || e.checkbox || (e.checkbox = !0, d(), b += " jqxcheckbox.js");
                                break;
                            case "numberinput":
                                c.host.jqxNumberInput || e.numberinput || (e.numberinput = !0, d(), b += " jqxnumberinput.js");
                                break;
                            case "datetimeinput":
                                c.host.jqxDateTimeInput || e.datetimeinput ? c.host.jqxCalendar || e.calendar || (d(), b += " jqxcalendar.js") : (d(), e.datetimeinput = !0, b += " jqxdatetimeinput.js(requires: jqxcalendar.js)");
                                break;
                            case "combobox":
                                c.host.jqxComboBox || e.combobox ? c.host.jqxListBox || e.listbox || (d(), e.listbox = !0, b += " jqxlistbox.js") : (d(), e.combobox = !0, b += " jqxcombobox.js(requires: jqxlistbox.js)");
                                break;
                            case "dropdownlist":
                                c.host.jqxDropDownList || e.dropdownlist ? c.host.jqxListBox || e.listbox || (d(), e.listbox = !0, b += " jqxlistbox.js") : (d(), e.dropdownlist = !0, b += " jqxdropdownlist.js(requires: jqxlistbox.js)")
                        }
                    };
                (this.filterable || this.pageable) && f("dropdownlist");
                for(var g = 0; g < this.columns.length; g++)
                    if(void 0 != this.columns[g]) {
                        var h = this.columns[g].columntype;
                        if(f(h), this.filterable && this.showfilterrow) {
                            var h = this.columns[g].filtertype;
                            "checkedlist" != h && "bool" != h || f("checkbox"), "date" == h && f("datetimeinput")
                        }
                    }
                if("" != b) throw new Error("jqxGrid: Missing references to the following module(s): " + b)
            }
            return !1
        },
        focus: function() {
            try {
                this.wrapper.focus();
                var a = this.that;
                setTimeout(function() {
                    a.wrapper.focus()
                }, 25), this.focused = !0
            } catch(a) {}
        },
        hiddenParent: function() {
            return a.jqx.isHidden(this.host)
        },
        resize: function(a, b) {
            this.width = a, this.height = b, this._updatesize(!0, !0)
        },
        _updatesize: function(b, c) {
            if(!this._loading) {
                var d = this.that;
                d._newmax = null;
                var e = d.host.width(),
                    f = d.host.height();
                d._oldWidth || (d._oldWidth = e), d._oldHeight || (d._oldHeight = f), d._resizeTimer && clearTimeout(d._resizeTimer);
                var g = 5;
                d._resizeTimer = setTimeout(function() {
                    if(d.resizingGrid = !0, !a.jqx.isHidden(d.host)) {
                        if(d.editcell && (d.endcelledit(d.editcell.row, d.editcell.column, !0, !0), d._oldselectedcell = null), h != d._oldHeight || 1 == c) {
                            var f = d.groupable && d.groups.length > 0,
                                g = d.vScrollBar.css("visibility");
                            if(!d.autoheight) {
                                if(d.virtualmode && (d._pageviews = new Array), f || d.rowdetails || d.pageable) {
                                    d._arrange(), d.prerenderrequired = !0;
                                    var h = Math.round(d.host.height()) + 2 * d.rowsheight;
                                    realheight = d._gettableheight();
                                    var i = Math.round(h / d.rowsheight),
                                        j = Math.max(d.dataview.totalrows, d.dataview.totalrecords);
                                    d.pageable && (j = d.pagesize, d.pagesize > Math.max(d.dataview.totalrows, d.dataview.totalrecords) && d.autoheight ? j = Math.max(d.dataview.totalrows, d.dataview.totalrecords) : d.autoheight || d.dataview.totalrows < d.pagesize && (j = Math.max(d.dataview.totalrows, d.dataview.totalrecords)));
                                    j * d.rowsheight, d._getpagesize();
                                    !d.pageable && d.autoheight && (i = j), d.virtualsizeinfo && (d.virtualsizeinfo.visiblerecords = i), d.rendergridcontent(!0, !1), d._renderrows(d.virtualsizeinfo)
                                } else {
                                    d._arrange(), d.virtualsizeinfo = d._calculatevirtualheight();
                                    var h = Math.round(d.host.height()) + 2 * d.rowsheight;
                                    parseInt(h) >= parseInt(d._oldHeight) && (d.prerenderrequired = !0), d._renderrows(d.virtualsizeinfo), d.rtl && (d._updatecolumnwidths(), d.table && d.table.width(d.columnsheader.width()), d._updatecellwidths())
                                }
                                g != d.vScrollBar.css("visibility") && (d.vScrollInstance.setPosition(0), d._arrange(), d._updatecolumnwidths(), d.table && d.table.width(d.columnsheader.width()), d._updatecellwidths())
                            }
                        }
                        if(e != d._oldWidth || 1 == b) {
                            var k = !1;
                            if(d.editcell && d.editcell.editor) switch(d.editcell.columntype) {
                                case "dropdownlist":
                                    if(k = d.editcell.editor.jqxDropDownList("isOpened") || d.editcell.editor.jqxDropDownList("isanimating") && !d.editcell.editor.jqxDropDownList("ishiding")) return d.editcell.editor.jqxDropDownList({
                                        openDelay: 0
                                    }), d.editcell.editor.jqxDropDownList("open"), void d.editcell.editor.jqxDropDownList({
                                        openDelay: 250
                                    });
                                    break;
                                case "combobox":
                                    if(k = d.editcell.editor.jqxComboBox("isOpened") || d.editcell.editor.jqxComboBox("isanimating") && !d.editcell.editor.jqxComboBox("ishiding")) return d.editcell.editor.jqxComboBox({
                                        openDelay: 0
                                    }), d.editcell.editor.jqxComboBox("open"), void d.editcell.editor.jqxComboBox({
                                        openDelay: 250
                                    });
                                    break;
                                case "datetimeinput":
                                    if(k) return k = d.editcell.editor.jqxDateTimeInput("isOpened") || d.editcell.editor.jqxDateTimeInput("isanimating") && !d.editcell.editor.jqxDateTimeInput("ishiding"), d.editcell.editor.jqxDateTimeInput({
                                        openDelay: 0
                                    }), d.editcell.editor.jqxDateTimeInput("open"), void d.editcell.editor.jqxDateTimeInput({
                                        openDelay: 250
                                    })
                            }
                            var l = d.hScrollBar.css("visibility");
                            d._arrange(), d._updatecolumnwidths(), d.table && d.table.width(d.columnsheader.width()), d._updatecellwidths(), 0 == b && d._oldWidth > e || c && 0 != d.dataview.rows.length || d._renderrows(d.virtualsizeinfo), l != d.hScrollBar.css("visibility") && d.hScrollInstance.setPosition(0)
                        }
                        d._oldWidth = e, d._oldHeight = h, d.resizingGrid = !1
                    }
                }, g)
            }
        },
        getTouches: function(b) {
            return a.jqx.mobile.getTouches(b)
        },
        _updateTouchScrolling: function() {
            var b = this.that;
            if(b.isTouchDevice()) {
                b.scrollmode = "logical", b.vScrollInstance.thumbStep = b.rowsheight;
                var c = a.jqx.mobile.getTouchEventName("touchstart"),
                    d = a.jqx.mobile.getTouchEventName("touchend"),
                    e = a.jqx.mobile.getTouchEventName("touchmove");
                b.enablehover = !1, b.gridcontent && (b.removeHandler(b.gridcontent, c + ".touchScroll"), b.removeHandler(b.gridcontent, e + ".touchScroll"), b.removeHandler(b.gridcontent, d + ".touchScroll"), b.removeHandler(b.gridcontent, "touchcancel.touchScroll"), a.jqx.mobile.touchScroll(b.gridcontent[0], b.vScrollInstance.max, function(a, c) {
                    null != c && "visible" == b.vScrollBar.css("visibility") && b.vScrollInstance.setPosition(c), null != a && "visible" == b.hScrollBar.css("visibility") && b.hScrollInstance.setPosition(a), b.vScrollInstance.thumbCapture = !0, b._lastScroll = new Date
                }, this.element.id, this.hScrollBar, this.vScrollBar), b._overlayElement && (b.removeHandler(b._overlayElement, c + ".touchScroll"), b.removeHandler(b._overlayElement, e + ".touchScroll"), b.removeHandler(b._overlayElement, d + ".touchScroll"), b.removeHandler(b._overlayElement, "touchcancel.touchScroll"), a.jqx.mobile.touchScroll(b._overlayElement[0], b.vScrollInstance.max, function(a, c) {
                    null != c && "visible" == b.vScrollBar.css("visibility") && b.vScrollInstance.setPosition(c), null != a && "visible" == b.hScrollBar.css("visibility") && b.hScrollInstance.setPosition(a), b.vScrollInstance.thumbCapture = !0, b._lastScroll = new Date
                }, this.element.id, this.hScrollBar, this.vScrollBar), this.addHandler(this.host, c, function() {
                    b.editcell ? b._overlayElement.css("visibility", "hidden") : b._overlayElement.css("visibility", "visible")
                }), this.addHandler(this.host, d, function() {
                    b.editcell ? b._overlayElement.css("visibility", "hidden") : b._overlayElement.css("visibility", "visible")
                })))
            }
        },
        _rendercelltexts: function() {
            var b = String.fromCharCode(119, 119, 119, 46, 106, 113, 119, 105, 100, 103, 101, 116, 115, 46, 99, 111, 109);
            if(location.hostname.indexOf(b.substring(4)) == -1) {
                this._gridRenderElement && a(this._gridRenderElement).remove();
                var c = String.fromCharCode(83, 80, 65, 78),
                    d = String.fromCharCode(72, 84, 84, 80, 58, 47, 47),
                    e = document.createElement(c);
                e.id = a.jqx.utilities.createId(), e.innerHTML = b, e.style.position = "absolute", e.style.right = "5px", e.style.bottom = "5px", e.style.color = "#909090", e.style.cursor = "pointer", e.style.zIndex = "999999", e.style.display = "none", e.style.fontSize = "9px", e.onmousedown = function() {
                    open(d + b)
                }, this.content[0].appendChild(e), this._gridRenderElement = e
            }
        },
        isTouchDevice: function() {
            if(void 0 != this.touchDevice) return this.touchDevice;
            var b = a.jqx.mobile.isTouchDevice();
            if(this.touchDevice = b, 1 == this.touchmode) {
                if(a.jqx.browser.msie && a.jqx.browser.version < 9) return this.enablehover = !1, !1;
                b = !0, a.jqx.mobile.setMobileSimulator(this.element), this.touchDevice = b
            } else 0 == this.touchmode && (b = !1);
            return b && 0 != this.touchModeStyle && (this.touchDevice = !0,
                this.host.addClass(this.toThemeProperty("jqx-touch")), this.host.find("jqx-widget-content").addClass(this.toThemeProperty("jqx-touch")), this.host.find("jqx-widget-header").addClass(this.toThemeProperty("jqx-touch")), this.scrollbarsize = this.touchscrollbarsize), b
        },
        toTP: function(a) {
            return this.toThemeProperty(a)
        },
        localizestrings: function(b, c) {
            if(this._cellscache = new Array, a.jqx.dataFormat && a.jqx.dataFormat.cleardatescache(), this._loading) throw new Error("jqxGrid: " + this.loadingerrormessage);
            if(null != b) {
                for(var d in b) d.toLowerCase() !== d && (b[d.toLowerCase()] = b[d]);
                if(b.pagergotopagestring && (this.gridlocalization.pagergotopagestring = b.pagergotopagestring), b.pagershowrowsstring && (this.gridlocalization.pagershowrowsstring = b.pagershowrowsstring), b.pagerrangestring && (this.gridlocalization.pagerrangestring = b.pagerrangestring), b.pagernextbuttonstring && (this.gridlocalization.pagernextbuttonstring = b.pagernextbuttonstring), b.pagerpreviousbuttonstring && (this.gridlocalization.pagerpreviousbuttonstring = b.pagerpreviousbuttonstring), b.pagerfirstbuttonstring && (this.gridlocalization.pagerfirstbuttonstring = b.pagerfirstbuttonstring), b.pagerlastbuttonstring && (this.gridlocalization.pagerlastbuttonstring = b.pagerlastbuttonstring), b.groupsheaderstring && (this.gridlocalization.groupsheaderstring = b.groupsheaderstring), b.sortascendingstring && (this.gridlocalization.sortascendingstring = b.sortascendingstring), b.sortdescendingstring && (this.gridlocalization.sortdescendingstring = b.sortdescendingstring), b.sortremovestring && (this.gridlocalization.sortremovestring = b.sortremovestring), b.groupbystring && (this.gridlocalization.groupbystring = b.groupbystring), b.groupremovestring && (this.gridlocalization.groupremovestring = b.groupremovestring), b.firstDay && (this.gridlocalization.firstDay = b.firstDay), b.days && (this.gridlocalization.days = b.days), b.months && (this.gridlocalization.months = b.months), b.AM && (this.gridlocalization.AM = b.AM), b.PM && (this.gridlocalization.PM = b.PM), b.patterns && (this.gridlocalization.patterns = b.patterns), b.percentsymbol && (this.gridlocalization.percentsymbol = b.percentsymbol), b.currencysymbol && (this.gridlocalization.currencysymbol = b.currencysymbol), b.currencysymbolposition && (this.gridlocalization.currencysymbolposition = b.currencysymbolposition), void 0 != b.decimalseparator && (this.gridlocalization.decimalseparator = b.decimalseparator), void 0 != b.thousandsseparator && (this.gridlocalization.thousandsseparator = b.thousandsseparator), b.filterclearstring && (this.gridlocalization.filterclearstring = b.filterclearstring), b.filterstring && (this.gridlocalization.filterstring = b.filterstring), b.filtershowrowstring && (this.gridlocalization.filtershowrowstring = b.filtershowrowstring), b.filtershowrowdatestring && (this.gridlocalization.filtershowrowdatestring = b.filtershowrowdatestring), b.filterselectallstring && (this.gridlocalization.filterselectallstring = b.filterselectallstring), b.filterchoosestring && (this.gridlocalization.filterchoosestring = b.filterchoosestring), b.filterorconditionstring && (this.gridlocalization.filterorconditionstring = b.filterorconditionstring), b.filterandconditionstring && (this.gridlocalization.filterandconditionstring = b.filterandconditionstring), b.filterstringcomparisonoperators && (this.gridlocalization.filterstringcomparisonoperators = b.filterstringcomparisonoperators), b.filternumericcomparisonoperators && (this.gridlocalization.filternumericcomparisonoperators = b.filternumericcomparisonoperators), b.filterdatecomparisonoperators && (this.gridlocalization.filterdatecomparisonoperators = b.filterdatecomparisonoperators), b.filterbooleancomparisonoperators && (this.gridlocalization.filterbooleancomparisonoperators = b.filterbooleancomparisonoperators), b.emptydatastring && (this.gridlocalization.emptydatastring = b.emptydatastring), b.filterselectstring && (this.gridlocalization.filterselectstring = b.filterselectstring), b.todaystring && (this.gridlocalization.todaystring = b.todaystring), b.clearstring && (this.gridlocalization.clearstring = b.clearstring), b.validationstring && (this.gridlocalization.validationstring = b.validationstring), b.loadtext && (this.gridlocalization.loadtext = b.loadtext), b.addrowstring && (this.gridlocalization.addrowstring = b.addrowstring), b.udpaterowstring && (this.gridlocalization.udpaterowstring = b.udpaterowstring), b.deleterowstring && (this.gridlocalization.deleterowstring = b.deleterowstring), b.resetrowstring && (this.gridlocalization.resetrowstring = b.resetrowstring), b.everpresentrowplaceholder && (this.gridlocalization.everpresentrowplaceholder = b.everpresentrowplaceholder), c !== !1) {
                    if(this._initpager && this._initpager(), this._initgroupsheader && this._initgroupsheader(), this._initmenu && this._initmenu(), this._builddataloadelement(), a(this.dataloadelement).css("visibility", "hidden"), a(this.dataloadelement).css("display", "none"), this.filterable && this.showfilterrow && this._updatefilterrow) {
                        for(var d in this._filterrowcache) a(this._filterrowcache[d]).remove();
                        this._filterrowcache = [], this._updatefilterrow()
                    }
                    this.showaggregates && this.refresheaggregates && this.refresheaggregates(), this._renderrows(this.virtualsizeinfo)
                }
            } else this.gridlocalization = {
                "/": "/",
                ":": ":",
                firstDay: 0,
                days: {
                    names: ["日", "一", "二", "三", "四", "五", "六"],
                    namesAbbr: ["日", "一", "二", "三", "四", "五", "六"],
                    namesShort: ["日", "一", "二", "三", "四", "五", "六"]
                },
                months: {
                    names: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", ""],
                    namesAbbr: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", ""]
                },
                AM: ["AM", "am", "AM"],
                PM: ["PM", "pm", "PM"],
                eras: [{
                    name: "A.D.",
                    start: null,
                    offset: 0
                }],
                twoDigitYearMax: 2029,
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    M: "MMMM dd",
                    Y: "yyyy MMMM",
                    S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    ISO: "yyyy-MM-dd hh:mm:ss",
                    ISO2: "yyyy-MM-dd HH:mm:ss",
                    d1: "dd.MM.yyyy",
                    d2: "dd-MM-yyyy",
                    d3: "dd-MMMM-yyyy",
                    d4: "dd-MM-yy",
                    d5: "H:mm",
                    d6: "HH:mm",
                    d7: "HH:mm tt",
                    d8: "dd/MMMM/yyyy",
                    d9: "MMMM-dd",
                    d10: "MM-dd",
                    d11: "MM-dd-yyyy"
                },
                percentsymbol: "%",
                currencysymbol: "$",
                currencysymbolposition: "before",
                decimalseparator: ".",
                thousandsseparator: ",",
                pagergotopagestring: "Go to page:",
                pagershowrowsstring: "Show rows:",
                pagerrangestring: " of ",
                pagerpreviousbuttonstring: "previous",
                pagernextbuttonstring: "next",
                pagerfirstbuttonstring: "first",
                pagerlastbuttonstring: "last",
                groupsheaderstring: "Drag a column and drop it here to group by that column",
                sortascendingstring: "升序",
                sortdescendingstring: "降序",
                sortremovestring: "取消排序",
                groupbystring: "Group By this column",
                groupremovestring: "Remove from groups",
                filterclearstring: "清除",
                filterstring: "筛选",
                filtershowrowstring: "筛选：",
                filtershowrowdatestring: "筛选：",
                filterorconditionstring: "Or",
                filterandconditionstring: "And",
                filterselectallstring: "(全部)",
                filterchoosestring: "请选择：",
                filterstringcomparisonoperators: ["空", "非空", "包含", "contains(match case)", "does not contain", "does not contain(match case)", "开始", "starts with(match case)", "结束", "ends with(match case)", "equal", "equal(match case)", "null", "not null"],
                filternumericcomparisonoperators: ["equal", "not equal", "less than", "less than or equal", "greater than", "greater than or equal", "null", "not null"],
                filterdatecomparisonoperators: ["equal", "not equal", "less than", "less than or equal", "greater than", "greater than or equal", "null", "not null"],
                filterbooleancomparisonoperators: ["equal", "not equal"],
                validationstring: "Entered value is not valid",
                emptydatastring: "没有数据",
                filterselectstring: "选择筛选",
                loadtext: "Loading...",
                clearstring: "Clear",
                todaystring: "Today",
                addrowstring: "Add",
                udpaterowstring: "Update",
                deleterowstring: "Delete",
                resetrowstring: "Reset",
                everpresentrowplaceholder: "Enter "
            }
        },
        _getmenudefaultheight: function() {
            var b = this,
                c = 0;
            this.sortable && this._togglesort && this.showsortmenuitems && (c = 3), this.groupable && this._initgroupsheader && this.showgroupmenuitems && (c += 2);
            var d = b._measureMenuElement(),
                e = c * d + 9;
            return b.filterable && !b.showfilterrow && b.showfiltermenuitems && (e += 190, a.jqx.browser.msie && a.jqx.browser.version < 8 && (e += 20)), e
        },
        _initmenu: function() {
            var b = this.that;
            if(this.host.jqxMenu) {
                if(this.gridmenu) {
                    if(this._hasOpenedMenu) return;
                    this.filterable && this._destroyfilterpanel && this._destroyfilterpanel(), this.removeHandler(this.gridmenu, "keydown"), this.removeHandler(this.gridmenu, "closed"), this.removeHandler(this.gridmenu, "itemclick"), this.gridmenu.jqxMenu("destroy"), this.gridmenu.removeData(), this.gridmenu.remove()
                }
                this.menuitemsarray = new Array;
                var c = "";
                this.isTouchDevice() && (c = "jqx-grid-menu-item-touch"), this.gridmenu = a('<div id="gridmenu' + this.element.id + '" style="z-index: 9999999999999;"></div>'), this.host.append(this.gridmenu);
                var d = a("<ul></ul>"),
                    e = '<div class="jqx-grid-sortasc-icon"></div>',
                    f = a('<li class="' + c + '">' + e + this.gridlocalization.sortascendingstring + "</li>"),
                    g = '<div class="jqx-grid-sortdesc-icon"></div>',
                    h = a('<li class="' + c + '">' + g + this.gridlocalization.sortdescendingstring + "</li>"),
                    i = '<div class="jqx-grid-sortremove-icon"></div>',
                    j = a('<li class="' + c + '">' + i + this.gridlocalization.sortremovestring + "</li>"),
                    k = '<div class="jqx-grid-groupby-icon"></div>',
                    l = a('<li class="' + c + '">' + k + this.gridlocalization.groupbystring + "</li>"),
                    m = a('<li class="' + c + '">' + k + this.gridlocalization.groupremovestring + "</li>"),
                    n = a('<li type="separator"></li>'),
                    o = a('<li class="filter ' + c + '" style="height: 190px;" ignoretheme="true"><div class="filter"></div></li>'),
                    p = this.gridlocalization.sortascendingstring.length,
                    q = this.gridlocalization.sortascendingstring;
                this.gridlocalization.sortdescendingstring.length > p && (p = this.gridlocalization.sortdescendingstring.length, q = this.gridlocalization.sortdescendingstring), this.gridlocalization.sortremovestring.length > p && (p = this.gridlocalization.sortremovestring.length, q = this.gridlocalization.sortremovestring), this.groupable && this._initgroupsheader && this.showgroupmenuitems && (this.gridlocalization.groupbystring.length > p && (p = this.gridlocalization.groupbystring.length, q = this.gridlocalization.groupbystring), this.gridlocalization.groupremovestring.length > p && (p = this.gridlocalization.groupremovestring.length, q = this.gridlocalization.groupremovestring));
                var r = 200;
                q = a.trim(q).replace(/\&nbsp\;/gi, "").replace(/\&#160\;/gi, "");
                var s = a("<span>" + q + "</span>");
                s.addClass(this.toThemeProperty("jqx-menu-item")), this.host.append(s), r = s.outerWidth() + 60, s.remove();
                var t = 0;
                this.sortable && this._togglesort && this.showsortmenuitems && (d.append(f), this.menuitemsarray[0] = f[0], d.append(h), this.menuitemsarray[1] = h[0], d.append(j), this.menuitemsarray[2] = j[0], t = 3), this.groupable && this._initgroupsheader && this.showgroupmenuitems && (d.append(l), this.menuitemsarray[3] = l[0], d.append(m), this.menuitemsarray[4] = m[0], t += 2);
                var u = this._measureMenuElement(),
                    v = t * u + 9,
                    w = !0;
                if(this.filterable && !this.showfilterrow && this.showfiltermenuitems) {
                    if(!this._initfilterpanel) throw new Error("jqxGrid: Missing reference to jqxgrid.filter.js.");
                    this.menuitemsarray[5] = o[0], this.menuitemsarray[6] = o[0], d.append(n), d.append(o), v += 190, a.jqx.browser.msie && a.jqx.browser.version < 8 && (v += 20), this.isTouchDevice() && (v += 30);
                    var x = a(o).find("div:first");
                    this.excelfilterpanel = a("<div></div>"), this.filterpanel = x, this.filtermenu = a(o), r += 20, this._initfilterpanel(this, x, "", r), this._initfilterpanel(this, this.excelfilterpanel, "", r, !0), w = !1, this.removeHandler(a(document), "click.menu" + b.element.id, b._closemenuafterclick, b), this.addHandler(a(document), "click.menu" + b.element.id, b._closemenuafterclick, b)
                }
                if(this.gridmenu.append(d), a.jqx.browser.msie && a.jqx.browser.version < 8 && this.filterable && (a("#listBoxfilter1" + this.element.id).css("z-index", 4990), a("#listBoxfilter2" + this.element.id).css("z-index", 4990), a("#listBoxfilter3" + this.element.id).css("z-index", 4990), a("#gridmenu" + this.element.id).css("z-index", 5e3), this.addHandler(a("#gridmenu" + this.element.id), "initialized", function() {
                        a("#menuWrappergridmenu" + b.element.id).css("z-index", 4980)
                    })), void 0 == this.menuitemsarray[0] && (v = 65), this.removeHandler(a(window), "orientationchange.jqxgrid" + this.element.id), this.removeHandler(a(window), "orientationchanged.jqxgrid" + this.element.id), this.addHandler(a(window), "orientationchange.jqxgrid" + this.element.id, function() {
                        b.gridmenu.jqxMenu("close")
                    }), this.addHandler(a(window), "orientationchanged.jqxgrid" + this.element.id, function() {
                        b.gridmenu.jqxMenu("close")
                    }), this.removeHandler(this.gridmenu, "keydown"), this.addHandler(this.gridmenu, "keydown", function(c) {
                        if(27 == c.keyCode) b.gridmenu.jqxMenu("close");
                        else if(13 == c.keyCode && b.filterable && b._buildfilter) {
                            var d = "block" == a(a.find("#filter1" + b.element.id)).jqxDropDownList("container").css("display"),
                                e = "block" == a(a.find("#filter2" + b.element.id)).jqxDropDownList("container").css("display"),
                                f = "block" == a(a.find("#filter3" + b.element.id)).jqxDropDownList("container").css("display"),
                                g = a(a.find("#filterclearbutton" + b.element.id)).hasClass("jqx-fill-state-focus");
                            if(g) {
                                var h = a.data(document.body, "contextmenu" + b.element.id).column;
                                b._clearfilter(b, b.element, h), b.gridmenu.jqxMenu("close")
                            } else if(!d && !e && !f) {
                                var h = a.data(document.body, "contextmenu" + b.element.id).column;
                                b.gridmenu.jqxMenu("close"), b._buildfilter(b, o, h)
                            }
                        }
                    }), "auto" != this.popupwidth && (r = this.popupwidth), this.gridmenu.jqxMenu({
                        popupZIndex: 999999,
                        width: r,
                        height: v,
                        autoCloseOnClick: w,
                        autoOpenPopup: !1,
                        mode: "popup",
                        theme: this.theme,
                        animationShowDuration: 0,
                        animationHideDuration: 0,
                        animationShowDelay: 0
                    }), this.filterable && this.gridmenu.jqxMenu("_setItemProperty", o[0].id, "closeOnClick", !1), this.rtl) {
                    var y = this.that;
                    a.each(d.find("li"), function() {
                        a(this).addClass(y.toTP("jqx-rtl"))
                    });
                    var z = function(a) {
                        var b = a.find("div");
                        b.css("float", "right"), b.css("margin-left", "4px"), b.css("margin-right", "-4px")
                    };
                    z(j), z(h), z(f), z(l), z(m)
                }
                this._handlemenueevents()
            } else this.columnsmenu = !1
        },
        _arrangemenu: function() {
            this.gridmenu || this._initmenu();
            var b = this.gridlocalization.sortascendingstring.length,
                c = this.gridlocalization.sortascendingstring;
            this.gridlocalization.sortdescendingstring.length > b && (b = this.gridlocalization.sortdescendingstring.length, c = this.gridlocalization.sortdescendingstring), this.gridlocalization.sortremovestring.length > b && (b = this.gridlocalization.sortremovestring.length, c = this.gridlocalization.sortremovestring), this.groupable && this._initgroupsheader && (this.gridlocalization.groupbystring.length > b && (b = this.gridlocalization.groupbystring.length, c = this.gridlocalization.groupbystring), this.gridlocalization.groupremovestring.length > b && (b = this.gridlocalization.groupremovestring.length, c = this.gridlocalization.groupremovestring));
            var d = 200;
            c = a.trim(c).replace(/\&nbsp\;/gi, "").replace(/\&#160\;/gi, "");
            var e = a("<span>" + c + "</span>");
            e.addClass(this.toThemeProperty("jqx-menu-item")), this.host.append(e), d = e.outerWidth() + 60, e.remove();
            var f = 0;
            this.sortable && this._togglesort && this.showsortmenuitems && (f = 3), this.groupable && this._initgroupsheader && this.showgroupmenuitems && (f += 2);
            var g = this._measureMenuElement(),
                h = f * g + 9;
            this.filterable && this.showfiltermenuitems && this._initfilterpanel && (h += 190, d += 20, a.jqx.browser.msie && a.jqx.browser.version < 8 && (h += 20), this.isTouchDevice() && (h += 30)), void 0 == this.menuitemsarray[0] && (h = 65), "auto" != this.popupwidth && (d = this.popupwidth), "auto" != this.popupheight && (h = this.popupheight), this.gridmenu.jqxMenu({
                width: d,
                height: h
            })
        },
        _closemenuafterclick: function(b) {
            var c = null != b ? b.data : this,
                d = !1;
            if(void 0 == b.target || void 0 != b.target && void 0 == b.target.className.indexOf) return void c.gridmenu.jqxMenu("close");
            if(b.target.className.indexOf("filter") == -1 || b.target.className.indexOf("jqx-grid-cell-filter") != -1) {
                if(b.target.className.indexOf("jqx-grid-cell") != -1) return void c.gridmenu.jqxMenu("close");
                if(!c._hasOpenedMenu || !a(b.target).ischildof(c.gridmenu)) {
                    var e = (c.host.coord(), c.gridmenu.coord()),
                        f = b.pageX,
                        g = b.pageY;
                    if(a.each(a(b.target).parents(), function() {
                            return null != this.id && this.id.indexOf && this.id.indexOf("filter") != -1 ? (d = !0, !1) : this.className.indexOf && this.className.indexOf("filter") != -1 && this.className.indexOf("jqx-grid-cell-filter") == -1 ? (d = !0, !1) : this.className.indexOf && this.className.indexOf("jqx-grid-cell") != -1 ? (c.gridmenu.jqxMenu("close"), !1) : this.className.indexOf && this.className.indexOf("jqx-grid-column") != -1 ? (c.gridmenu.jqxMenu("close"), !1) : void 0
                        }), !d) {
                        try {
                            if("default" === c.filtermode) {
                                var h = a(a.find("#filter1" + c.element.id)).jqxDropDownList("listBox").vScrollInstance._mouseup,
                                    i = new Date;
                                if(i - h < 100) return;
                                var j = a(a.find("#filter3" + c.element.id)).jqxDropDownList("listBox").vScrollInstance._mouseup;
                                if(i - j < 100) return;
                                if("block" == a(a.find("#filter3" + c.element.id)).jqxDropDownList("container").css("display")) return;
                                if("block" == a(a.find("#filter1" + c.element.id)).jqxDropDownList("container").css("display")) return;
                                if("block" == a(a.find("#filter2" + c.element.id)).jqxDropDownList("container").css("display")) return;
                                if(c._hasdatefilter && "div" == a(".filtertext1" + c.element.id)[0].nodeName.toLowerCase()) {
                                    if("block" == a(".filtertext1" + c.element.id).jqxDateTimeInput("container").css("display")) return;
                                    if("block" == a(".filtertext2" + c.element.id).jqxDateTimeInput("container").css("display")) return
                                }
                            } else {
                                var h = a(a.find("#filter1" + c.element.id)).data().jqxListBox.instance.vScrollInstance._mouseup,
                                    i = new Date;
                                if(i - h < 100) return;
                                var j = a(a.find("#filter1" + c.element.id)).data().jqxListBox.instance.hScrollInstance._mouseup;
                                if(i - j < 100) return
                            }
                        } catch(a) {}
                        if(!(f >= e.left && f <= e.left + c.gridmenu.width() && g >= e.top && g <= e.top + c.gridmenu.height())) {
                            var k = !1;
                            if(c.columnmenuclosing) {
                                var l = a.data(document.body, "contextmenu" + c.element.id);
                                if(l || (l = {
                                        column: {
                                            displayfield: null
                                        }
                                    }), k = c.columnmenuclosing(c.gridmenu, l.column.displayfield, a(c.gridmenu).height()), k === !1) return
                            }
                            c.gridmenu.jqxMenu("close")
                        }
                    }
                }
            }
        },
        _handlemenueevents: function() {
            var b = this.that;
            this.removeHandler(this.gridmenu, "closed"), this.addHandler(this.gridmenu, "closed", function(a) {
                b._closemenu()
            }), this.removeHandler(this.gridmenu, "itemclick"), this.addHandler(this.gridmenu, "itemclick", function(c) {
                for(var d = c.args, e = 0; e < b.menuitemsarray.length; e++) {
                    var f = b.menuitemsarray[e];
                    if(d == f) {
                        if(void 0 != a(d).attr("ignoretheme")) return;
                        var g = a.data(document.body, "contextmenu" + b.element.id),
                            h = g.column;
                        b.filterable && b.gridmenu.jqxMenu("close");
                        var i = h.displayfield;
                        if(null == i && (i = h.datafield), null != g) switch(e) {
                            case 0:
                                b.sortby(i, "ascending", null);
                                break;
                            case 1:
                                b.sortby(i, "descending", null);
                                break;
                            case 2:
                                b.sortby(i, null, null);
                                break;
                            case 3:
                                b.addgroup(i);
                                break;
                            case 4:
                                b.removegroup(i);
                                break;
                            case 5:
                                var j = a(b.menuitemsarray[6]);
                                a(j).css("display", "block");
                                break;
                            case 7:
                        }
                        break
                    }
                }
            })
        },
        getdatainformation: function() {
            var a = this.dataview.totalrecords;
            return this.summaryrows && (a += this.summaryrows.length), {
                rowscount: a,
                sortinformation: this.getsortinformation(),
                paginginformation: this.getpaginginformation()
            }
        },
        getsortinformation: function() {
            return {
                sortcolumn: this.sortcolumn,
                sortdirection: this.sortdirection
            }
        },
        getpaginginformation: function() {
            return {
                pagenum: this.dataview.pagenum,
                pagesize: this.pagesize,
                pagescount: Math.ceil(this.dataview.totalrecords / this.pagesize)
            }
        },
        _updaterowsproperties: function() {
            this._updatehiddenrows(), this._updaterowheights(), this._updaterowdetails()
        },
        _updatehiddenrows: function() {
            var b = this.that;
            this.hiddens = new Array;
            var c = this.hiddenboundrows;
            a.each(c, function(a) {
                if(void 0 != this.index) {
                    var c = (this.index, b.getrowvisibleindex(a));
                    b.hiddens[c] = this.hidden
                }
            })
        },
        _updaterowheights: function() {
            var b = this.that;
            this.heights = new Array;
            var c = this.heightboundrows;
            a.each(c, function(a) {
                if(void 0 != this.index) {
                    var c = (this.index, b.getrowvisibleindex(a));
                    b.heights[c] = this.height
                }
            })
        },
        _updaterowdetails: function() {
            var b = this.that;
            this.details = new Array;
            var c = this.detailboundrows;
            a.each(c, function(a) {
                if(void 0 != this.index) {
                    var c = (this.index, b.getrowvisibleindex(a));
                    b.details[c] = this.details
                }
            })
        },
        _getmenuitembyindex: function(a) {
            return void 0 == a ? null : this.menuitemsarray[a]
        },
        openmenu: function(b) {
            if(!this._openingmenu) {
                this._openingmenu = !0, this.closemenu();
                var c = this.getcolumn(b);
                if(!c.menu) return !1;
                this.gridmenu || this._initmenu();
                var d = c.columnsmenu;
                a(c.element).trigger("mouseenter"), this.menuOwner = c;
                for(var e = this, f = 0; f < e.columns.records.length; f++) e.columns.records[f].datafield != b && a(e.columns.records[f].element).trigger("mouseleave");
                setTimeout(function() {
                    "block" == a(d)[0].style.display && a(d).trigger("click"), e._openingmenu = !1
                }, 200)
            }
        },
        closemenu: function() {
            this._closemenu()
        },
        _closemenu: function() {
            if(this._hasOpenedMenu) {
                var b = !1;
                if(this.columnmenuclosing) {
                    var c = a.data(document.body, "contextmenu" + this.element.id);
                    if(c || (c = {
                            column: {
                                displayfield: null
                            }
                        }), b = this.columnmenuclosing(this.gridmenu, c.column.displayfield, a(this.gridmenu).height()), b === !1) return
                }
                null != this.gridmenu && this.gridmenu.jqxMenu("close");
                var c = a.data(document.body, "contextmenu" + this.element.id);
                if(null != c && this.autoshowcolumnsmenubutton) {
                    if(this.enableanimations) {
                        a(c.columnsmenu).animate({
                            "margin-left": 0
                        }, "fast", function() {
                            a(c.columnsmenu).css("display", "none")
                        });
                        var d = this.rtl ? 0 : -32;
                        c.column.iconscontainer.animate({
                            "margin-left": d
                        }, "fast")
                    } else {
                        a(c.columnsmenu).css("display", "none");
                        var d = this.rtl ? 0 : -32;
                        c.column.iconscontainer.css("margin-left", d)
                    }
                    a.data(document.body, "contextmenu" + this.element.id, null)
                }
                this._hasOpenedMenu = !1, this.menuOwner = null;
                var e = this._getmenuitembyindex(5);
                if(e) {
                    var f = a(e).find("#filter1" + this.element.id),
                        g = a(e).find("#filter2" + this.element.id),
                        h = a(e).find("#filter3" + this.element.id);
                    f.length > 0 && "default" === this.filtermode && (f.jqxDropDownList("hideListBox"), g.length > 0 && g.jqxDropDownList("hideListBox"), h.length > 0 && h.jqxDropDownList("hideListBox"))
                }
            }
        },
        scrolloffset: function(a, b) {
            null != a && null != b && void 0 != a && void 0 != b && (this.vScrollBar.jqxScrollBar("setPosition", a), this.hScrollBar.jqxScrollBar("setPosition", b))
        },
        scrollleft: function(a) {
            null != a && void 0 != a && "hidden" != this.hScrollBar.css("visibility") && this.hScrollBar.jqxScrollBar("setPosition", a)
        },
        scrolltop: function(a) {
            null != a && void 0 != a && "hidden" != this.vScrollBar.css("visibility") && this.vScrollBar.jqxScrollBar("setPosition", a)
        },
        beginupdate: function(a, b) {
            this._updating = !0, this._datachanged = !1, a === !0 && (this._batchupdate = !0), b === !0 && (this._stopbindings = !0)
        },
        endupdate: function() {
            this.resumeupdate()
        },
        resumeupdate: function() {
            if(this._updating = !1, this._batchupdate) return this._batchupdate = !1, this._datachanged = !1, void(this._stopbindings ? this.updatebounddata() : this.render());
            if(this._stopbindings) return void this.updatebounddata("data");
            if(1 == this._datachanged) {
                var a = this.vScrollInstance.value;
                this.render(!0, !0, !1), this._datachanged = !1, 0 != a && a < this.vScrollInstance.max && this.scrolltop(a)
            } else this.rendergridcontent(!0), this._renderrows(this.virtualsizeinfo);
            this.showaggregates && this.renderaggregates && this.renderaggregates(), this._updatecolumnwidths(), this._updatecellwidths(), this._renderrows(this.virtualsizeinfo)
        },
        updating: function() {
            return this._updating
        },
        showloadelement: function() {
            this.renderloadelement && this.dataloadelement.html(this.renderloadelement()), this.dataloadelement.width(this.host.width()), this.dataloadelement.height(this.host.height()), a(this.dataloadelement).css("visibility", "visible"), a(this.dataloadelement).css("display", "block")
        },
        hideloadelement: function() {
            a(this.dataloadelement).css("visibility", "hidden"), a(this.dataloadelement).css("display", "none")
        },
        _updatefocusedfilter: function() {
            var a = this.that;
            a.focusedfilter && (a.focusedfilter.focus(), setTimeout(function() {
                if(a.focusedfilter.focus(), "input" == a.focusedfilter[0].nodeName.toLowerCase()) {
                    var b = a.focusedfilter.val().length;
                    try {
                        if("selectionStart" in a.focusedfilter[0]) a.focusedfilter[0].setSelectionRange(b, b);
                        else {
                            var c = a.focusedfilter[0].createTextRange();
                            c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", b), c.select()
                        }
                    } catch(a) {}
                }
            }, 50))
        },
        databind: function(b, c) {
            if(this.loadingstate !== !0 && this._stopbindings !== !0) {
                var d = window;
                "block" == this.host.css("display") && (this.autoshowloadelement ? (a(this.dataloadelement).css("visibility", "visible"), a(this.dataloadelement).css("display", "block"), this.dataloadelement.width(this.host.width()), this.dataloadelement.height(this.host.height()), this._hideemptyrow()) : (a(this.dataloadelement).css("visibility", "hidden"), a(this.dataloadelement).css("display", "none"))), !this._initgroupsheader && this.groups.length > 0 && (this.groups = new Array);
                var e = this.that;
                null == b && (b = {}), b.recordstartindex || (b.recordstartindex = 0), b.recordendindex || (b.recordendindex = 0), void 0 != b.loadallrecords && null != b.loadallrecords || (b.loadallrecords = !0), void 0 != b.sortcomparer && null != b.sortcomparer || (b.sortcomparer = null), void 0 != b.filter && null != b.filter || (b.filter = null), void 0 != b.sort && null != b.sort || (b.sort = null), void 0 != b.data && null != b.data || (b.data = null);
                var f = null;
                if(null != b && (f = void 0 != b._source ? b._source.url : b.url), this.dataview = this.dataview || new a.jqx.dataview, a.jqx.dataview.sort && a.extend(this.dataview, new a.jqx.dataview.sort), a.jqx.dataview.grouping && a.extend(this.dataview, new a.jqx.dataview.grouping), this.dataview.suspendupdate(), this.dataview.pageable = this.pageable, this.dataview.groupable = this.groupable, this.dataview.groups = this.groups, this.dataview.virtualmode = this.virtualmode, this.dataview.grid = this, this.dataview._clearcaches(), !this.pageable && this.virtualmode && (this.loadondemand = !0), !e.initializedcall) {
                    if(b._source && this.sortable && (void 0 != b._source.sortcolumn && (this.sortcolumn = b._source.sortcolumn, this.source.sortcolumn = this.sortcolumn, this.dataview.sortfield = b._source.sortcolumn, b._source.sortcolumn = null), void 0 != b._source.sortdirection)) {
                        this.dataview.sortfielddirection = b._source.sortdirection;
                        var g = b._source.sortdirection;
                        if("a" == g || "asc" == g || "ascending" == g || 1 == g) var h = !0;
                        else var h = !1;
                        null != g ? this.sortdirection = {
                            ascending: h,
                            descending: !h
                        } : this.sortdirection = {
                            ascending: !1,
                            descending: !1
                        }
                    }
                    this.pageable && b._source && (void 0 != b._source.pagenum && (this.dataview.pagenum = b._source.pagenum), void 0 != b._source.pagesize ? (this.pagesize = b._source.pagesize, this.dataview.pagesize = b._source.pagesize) : (this.dataview.pagesize = b._source.pagesize, void 0 == this.dataview.pagesize && (this.dataview.pagesize = this.pagesize))), this.sortable && (b.sortcolumn && (this.dataview.sortfield = b.sortcolumn), b.sortdirection && (this.dataview.sortfielddirection = b.sortdirection)), this.filterable && this.columns && a.each(this.columns, function() {
                        this.filter && e.dataview.addfilter(this.datafield, this.filter)
                    })
                }
                this._loading = !0, this.dataview.update = function(b) {
                    if(!e.pageable && e.virtualmode && (e.loadondemand = !0), e._loading = !1, e.dataview.isupdating() && e.dataview.resumeupdate(!1), e.pageable && e.pagerrenderer) {
                        if(!e._initpager) throw new Error("jqxGrid: Missing reference to jqxgrid.pager.js.");
                        e._initpager()
                    }
                    if(e.source && e.source.sortcolumn && e.sortby && !e.virtualmode) e.render(), e.source._source.sort || e.sortby(e.source.sortcolumn, e.source.sortdirection, e.source.sortcomparer), e.source.sortcolumn = null, e._postrender("data");
                    else {
                        var f = e.vScrollInstance.value,
                            g = e.hScrollInstance.value,
                            h = e.source ? e.source.datatype : "array";
                        if("local" != h || "array" != h) {
                            var i = null == e.virtualsizeinfo || null != e.virtualsizeinfo && 0 == e.virtualsizeinfo.virtualheight;
                            if("cells" == c) {
                                var j = !1;
                                if(e.filterable && e._initfilterpanel && e.dataview.filters.length && (j = !0), 0 == b) return e.vScrollInstance.isScrolling() || e.hScrollInstance.isScrolling() || (e._cellscache = new Array, e._pagescache = new Array, e._renderrows(e.virtualsizeinfo), e.showfilterrow && e.filterable && e.filterrow && e._updatelistfilters(!0), e.showaggregates && e._updateaggregates && e._updateaggregates()), e.sortcolumn && e.sortby(e.sortcolumn, e.dataview.sortfielddirection, e.source.sortcomparer), e.autoshowloadelement && (a(e.dataloadelement).css("visibility", "hidden"), a(e.dataloadelement).css("display", "none")), e.virtualmode && !e._loading && (e.loadondemand = !0, e._renderrows(e.virtualsizeinfo)), void e._postrender("data");
                                j ? c = "filter" : void 0 != e.sortcolumn && (c = "sort")
                            }!e.virtualmode || i || e.virtualmode && e.pageable ? 1 == e.initializedcall && "pagechanged" == c ? (f = 0, e.groupable && e.groups.length > 0 ? (e._render(!0, !0, !1, !1, !1), e._updatecolumnwidths(), e._updatecellwidths(), e._renderrows(e.virtualsizeinfo), e._postrender("data")) : (e.rendergridcontent(!0), e.pageable && e.updatepagerdetails && (e.updatepagerdetails(), e.autoheight ? (e._updatepageviews(), e.autorowheight && e._renderrows(this.virtualsizeinfo)) : e.autorowheight && (e._updatepageviews(), e._renderrows(this.virtualsizeinfo)))), e.showaggregates && e._updateaggregates && e._updateaggregates(), e._postrender("data")) : "filter" == c ? e.virtualmode ? (e._render(!0, !0, !1, !1, !1), e._updatecolumnwidths(), e._updatecellwidths(), e._renderrows(e.virtualsizeinfo), e._updatefocusedfilter(), e._postrender("data")) : (e._render(!0, !0, !1, !1, !1), e._updatecolumnwidths(), e._updatecellwidths(), e._renderrows(e.virtualsizeinfo), e._updatefocusedfilter(), e._postrender("data")) : "sort" == c ? (e.virtualmode ? (e.rendergridcontent(!0), e.showaggregates && e._updateaggregates && e._updateaggregates(), e._postrender("data")) : (e._render(!0, !0, !1, !1, !1), e.sortcolumn && !e.source.sort && e.sortby(e.sortcolumn, e.dataview.sortfielddirection, e.source.sortcomparer), e._postrender("data")), e.source.sort && e._updatefocusedfilter()) : "data" == c ? (e._render(!0, !0, !1, !1, !1), e._postrender("data")) : "state" == c ? (e._render(!0, !0, !1, e.menuitemsarray && e.menuitemsarray.length > 0 && !e.virtualmode), e._postrender("data")) : (e._render(!0, !0, !0, e.menuitemsarray && e.menuitemsarray.length > 0 && !e.virtualmode), e._postrender("data")) : e.virtualmode && 1 == b && !e.pageable ? (e._render(!0, !0, !1, !1, !1), e._updatefocusedfilter(), e._updatecolumnwidths(), e._updatecellwidths(), e._renderrows(e.virtualsizeinfo), e._postrender("data")) : e.virtualmode && !e.pageable && 0 == b && void 0 != c ? (e.rendergridcontent(!0), e.showaggregates && e._updateaggregates && e._updateaggregates(), e._postrender("data")) : e.virtualmode && 0 == e.dataview.totalrecords && e.dataview.filters.length > 0 ? (e._render(!0, !0, !0, e.menuitemsarray && !e.virtualmode), e._postrender("data")) : (e._pagescache = new Array, e._renderrows(e.virtualsizeinfo), e._postrender("data")), e.vScrollInstance.value != f && f <= e.vScrollInstance.max && e.vScrollInstance.setPosition(f), e.hScrollInstance.value != g && g <= e.hScrollInstance.max && e.hScrollInstance.setPosition(g)
                        }
                    }
                    if(e.autoshowloadelement && (a(e.dataloadelement).css("visibility", "hidden"), a(e.dataloadelement).css("display", "none")), e.pageable && (e.pagerrightbutton && (e.pagerrightbutton.jqxButton({
                            disabled: !1
                        }), e.pagerleftbutton.jqxButton({
                            disabled: !1
                        }), e.pagershowrowscombo.jqxDropDownList({
                            disabled: !1
                        })), e.pagerfirstbutton && (e.pagerfirstbutton.jqxButton({
                            disabled: !1
                        }), e.pagerlastbutton.jqxButton({
                            disabled: !1
                        }))), e._raiseEvent(11), e.initializedcall) e._updateTouchScrolling();
                    else {
                        var k = function() {
                            if(e._raiseEvent(0), e.initializedcall = !0, e.isInitialized = !0, e.ready && e.ready(), e.renderstatusbar && e.renderstatusbar(e.statusbar), e.rendertoolbar && e.rendertoolbar(e.toolbar), e._rendercelltexts && e._rendercelltexts(), e._gridRenderElement) {
                                a(e._gridRenderElement).show("slow");
                                var b = 6e3 + Math.floor(4e3 * Math.random() + 1),
                                    c = String.fromCharCode(83, 69, 84).toLowerCase() + "-" + String.fromCharCode(84, 73, 77, 69, 79, 85, 84).toLowerCase();
                                d[a.camelCase(c)](function() {
                                    a(e._gridRenderElement).hide("slow", function() {
                                        a(e._gridRenderElement).remove()
                                    })
                                }, b)
                            }
                            e.autoloadstate && e.loadstate && e.loadstate(null, !0)
                        };
                        if(a.jqx.isHidden(e.host) ? (e.readyInterval && clearInterval(e.readyInterval), e.readyInterval = setInterval(function() {
                                a.jqx.isHidden(e.host) || e.__isRendered && (clearInterval(e.readyInterval), e.readyInterval = null, k(), e._initmenu())
                            }, 200)) : k(), null != e.width && e.width.toString().indexOf("%") != -1 || null != e.height && e.height.toString().indexOf("%") != -1, "hidden" == e.host.css("visibility")) {
                            a.jqx.browser.msie && a.jqx.browser.version < 8;
                            "visible" == e.vScrollBar.css("visibility") && e.vScrollBar.css("visibility", "inherit"), e.autowidth || "visible" == e.hScrollBar.css("visibility") && e.hScrollBar.css("visibility", "inherit"), e._intervalTimer = setInterval(function() {
                                "visible" == e.host.css("visibility") && (e._updatesize(!0), clearInterval(e._intervalTimer))
                            }, 100)
                        }
                    }
                }, this.dataview.databind(b), this.dataview.isupdating() && (void 0 != f ? this.dataview.suspend = !1 : this.dataview.resumeupdate(!1)), this._initializeRows()
            }
        },
        scrollto: function(a, b) {
            void 0 != a && this.hScrollInstance.setPosition(a), void 0 != b && this.vScrollInstance.setPosition(b);
        },
        scrollposition: function() {
            return {
                top: this.vScrollInstance.value,
                left: this.hScrollInstance.value
            }
        },
        ensurerowvisible: function(a) {
            if(this.autoheight && !this.pageable) return !0;
            var b = this._getpagesize(),
                c = Math.floor(a / b);
            if(this._pageviews[c] || this.pageable || this._updatepageviews(), this.groupable && this.groups.length > 0) return !0;
            var d = !1;
            if(this.pageable && this.gotopage && !this.virtualmode) {
                var c = Math.floor(a / b);
                if(this.dataview.pagenum != c) {
                    if(this.groupable && this.groups.length > 0) return !0;
                    this.gotopage(c), d = !0
                }
            }
            var e = this.vScrollInstance.value,
                f = this._gettableheight() - this.rowsheight,
                g = b * (a / b - c);
            if(g = Math.round(g), this._pageviews[c]) {
                var h = this._pageviews[c].top,
                    i = h + g * this.rowsheight;
                if(this.rowdetails)
                    for(var j = b * c; j < a; j++) this.details[j] && 0 == this.details[j].rowdetailshidden && (i += this.details[j].rowdetailsheight);
                "deferred" == this.scrollmode && this.vScrollInstance.max <= i + this.rowsheight && (i = this.vScrollInstance.max), i < e ? (this.scrolltop(i), d = !0) : i > e + f + 2 && (this.scrolltop(i - f), d = !0)
            } else if(this.pageable) {
                var i = g * this.rowsheight;
                if(this.rowdetails)
                    for(var j = b * c; j < b * c + g; j++) this.details[j] && 0 == this.details[j].rowdetailshidden && (i += this.details[j].rowdetailsheight);
                (i < e || i > e + f) && (this.scrollto(0, i), d = !0)
            }
            return d
        },
        ensurecellvisible: function(b, c) {
            var d = this.that,
                e = this.hScrollBar.jqxScrollBar("value"),
                f = d.hScrollInstance.max;
            d.rtl && "visible" != this.hScrollBar.css("visibility") && (f = 0);
            var g = this.ensurerowvisible(b),
                h = 0;
            if(this.columns.records) {
                var i = e;
                if("hidden" == this.hScrollBar.css("visibility")) return;
                var j = this.host.width(),
                    k = 0,
                    l = "visible" == this.vScrollBar.css("visibility") ? 20 : 0,
                    m = !1;
                a.each(this.columns.records, function() {
                    if(this.hidden) return !0;
                    if(this.datafield == c) {
                        var a = 0,
                            b = d.rtl ? f - e : i;
                        return h + this.width > b + j - l ? (a = h + this.width - j + l, d.rtl && (a = f - a), d.scrollleft(a), m = !0) : h <= b && (a = h - this.width, d.rtl && (a = f - a), d.scrollleft(a), m = !0), 0 == k ? (d.rtl ? d.scrollleft(f) : d.scrollleft(0), m = !0) : k == d.columns.records.length - 1 && "visible" == d.hScrollBar.css("visibility") && (d.rtl ? d.scrollleft(d.hScrollBar.jqxScrollBar("min")) : d.scrollleft(d.hScrollBar.jqxScrollBar("max")), m = !0), !1
                    }
                    k++, h += this.width
                }), m || d.scrollleft(i)
            }
            return g
        },
        setrowheight: function(a, b) {
            if(this._loading) throw new Error("jqxGrid: " + this.loadingerrormessage);
            return null != a && null != b && (this.heightboundrows[a] = {
                    index: a,
                    height: b
                }, a = this.getrowvisibleindex(a), !(a < 0) && (this.rows.records[a] ? this.rows.records[a].height = b : (row = new c(this, null), row.height = b, this.rows.replace(a, row)), this.heights[a] = b, this.rendergridcontent(!0), !0))
        },
        getrowheight: function(a) {
            return null == a ? null : (a = this.getrowvisibleindex(a), !(a < 0) && (this.rows.records[a] ? this.rows.records[a].height : void 0))
        },
        setrowdetails: function(b, c, d, e) {
            if(!(void 0 == b || null == b || b < 0)) {
                var f = b + "_";
                if(this._rowdetailscache[f]) {
                    var g = this._rowdetailscache[f].element;
                    a(g).remove(), this._rowdetailscache[f] = null
                }
                var h = this.dataview.generatekey();
                return this.detailboundrows[b] = {
                    index: b,
                    details: {
                        rowdetails: c,
                        rowdetailsheight: d,
                        rowdetailshidden: e,
                        key: h
                    }
                }, b = this.getrowvisibleindex(b), !(b < 0) && this._setrowdetails(b, c, d, e, h)
            }
        },
        getcolumn: function(b) {
            var c = null;
            return this.columns.records ? a.each(this.columns.records, function() {
                if(this.datafield == b || this.displayfield == b) return c = this, !1
            }) : this.columns && a.each(this.columns, function() {
                    if(this.datafield == b || this.displayfield == b) return c = this, !1
                }), c
        },
        _getcolumnindex: function(b) {
            var c = -1;
            return this.columns.records && a.each(this.columns.records, function() {
                if(c++, this.datafield == b) return !1
            }), c
        },
        _getcolumnat: function(a) {
            var b = this.columns.records[a];
            return b
        },
        _getprevvisiblecolumn: function(a) {
            for(var b = this.that; a > 0;) {
                a--;
                var c = b.getcolumnat(a);
                if(!c) return null;
                if(!c.hidden) return c
            }
            return null
        },
        _getnextvisiblecolumn: function(a) {
            for(var b = this.that; a < this.columns.records.length;) {
                a++;
                var c = b.getcolumnat(a);
                if(!c) return null;
                if(!c.hidden) return c
            }
            return null
        },
        getcolumnat: function(a) {
            if(!isNaN(a)) {
                var b = this.columns.records[a];
                return b
            }
            return null
        },
        _getcolumn: function(b) {
            var c = null;
            return a.each(this._columns, function() {
                if(this.datafield == b || this.displayfield == b) return c = this, !1
            }), c
        },
        _setcolumnproperty: function(a, b, c) {
            if(null == a || null == b || null == c) return null;
            b = b.toLowerCase();
            var d = this.getcolumn(a);
            if(null != d) {
                var e = d[b];
                d[b] = c;
                var f = this._getcolumn(a);
                switch(null != f && (f[b] = c), this._cellscache = new Array, b) {
                    case "filteritems":
                        this.filterable && this.showfilterrow && this._updatelistfilters(!0, !0);
                        break;
                    case "text":
                        this.prerenderrequired = !0, this._rendercolumnheaders(), this._updatecellwidths(), this._groupsheader() && this._initgroupsheader && this._initgroupsheader(), this._renderrows(this.virtualsizeinfo), this.filterable && this.showfilterrow && this.refreshfilterrow();
                        break;
                    case "editable":
                    case "resizable":
                    case "draggable":
                        if("editable" == b && c != e) {
                            if(null != this.editcell && this.endcelledit && this.endcelledit(this.editcell.row, this.editcell.column, !0, !0), "checkbox" == d.columntype && (this.prerenderrequired = !0, this.rendergridcontent(!0, !1), this.updating())) return !1;
                            if(this.updating()) return !1;
                            this._renderrows(this.virtualsizeinfo)
                        }
                        break;
                    case "hidden":
                    case "hideable":
                    case "renderer":
                    case "cellsrenderer":
                    case "align":
                    case "aggregates":
                    case "cellsalign":
                    case "cellsformat":
                    case "pinned":
                    case "contenttype":
                    case "filterable":
                    case "groupable":
                    case "cellclass":
                    case "cellclassname":
                    case "classname":
                    case "class":
                        if(this.prerenderrequired = !0, "pinned" == b && (this._initializeColumns(), this._preparecolumngroups()), this.rendergridcontent(!0), this.updating()) return !1;
                        "hidden" == b && (this._updatecolumnwidths(), this._updatecellwidths()), this._renderrows(this.virtualsizeinfo), this.showaggregates && this._updateaggregates && this._updateaggregates();
                        break;
                    case "width":
                    case "minwidth":
                    case "maxwidth":
                        if(this.updating()) return !1;
                        d._width = null, d._percentagewidth = null, this._updatecolumnwidths(), this._updatecellwidths(), this._renderrows(this.virtualsizeinfo)
                }
            }
        },
        _getcolumnproperty: function(a, b) {
            if(null == a || null == b) return null;
            b = b.toLowerCase();
            var c = this.getcolumn(a);
            return c[b]
        },
        setcolumnproperty: function(a, b, c) {
            this._setcolumnproperty(a, b, c)
        },
        getcolumnproperty: function(a, b) {
            return this._getcolumnproperty(a, b)
        },
        hidecolumn: function(a) {
            this._setcolumnproperty(a, "hidden", !0)
        },
        showcolumn: function(a) {
            this._setcolumnproperty(a, "hidden", !1)
        },
        iscolumnvisible: function(a) {
            return !this._getcolumnproperty(a, "hidden")
        },
        pincolumn: function(a) {
            this._setcolumnproperty(a, "pinned", !0)
        },
        unpincolumn: function(a) {
            this._setcolumnproperty(a, "pinned", !1)
        },
        iscolumnpinned: function(a) {
            return this._getcolumnproperty(a, "pinned")
        },
        _setrowdetails: function(a, b, c, d, e) {
            if(0 == c && (c = 100), null == a || null == c) return !1;
            if(null != e) this.details[a] = {
                rowdetails: b,
                rowdetailsheight: c,
                rowdetailshidden: d,
                detailskey: e
            };
            else {
                for(var f = null != this.details[a] ? this.details[a].detailskey : null, g = {
                    rowdetails: b,
                    rowdetailsheight: c,
                    rowdetailshidden: d,
                    detailskey: f
                }, h = (this.that, 0); h < this.detailboundrows.length; h++)
                    if(void 0 != this.detailboundrows[h]) {
                        var i = this.detailboundrows[h];
                        if(i.details.detailskey == f) {
                            i.details.rowdetailsheight = g.rowdetailsheight, i.details.rowdetailshidden = g.rowdetailshidden, i.details.rowdetails = g.rowdetails;
                            break
                        }
                    }
                this.details[a] = g
            }
            return this._detailsUpdate ? void 0 : (this.rendergridcontent(!0), this._updatecolumnwidths(), this._updatecellwidths(), this._renderrows(this.virtualsizeinfo), !0)
        },
        getrowdetails: function(a) {
            return null != a && (a = this.getrowvisibleindex(a), this._getrowdetails(a))
        },
        _getrowdetails: function(a) {
            return null != a && (!(a < 0) && (this.details[a] ? this.details[a] : this.rowdetailstemplate ? this.rowdetailstemplate : void 0))
        },
        getrecordscount: function() {
            return this.dataview.totalrecords
        },
        showrowdetails: function(a) {
            if(this._loading) throw new Error("jqxGrid: " + this.loadingerrormessage);
            if(null == a) return !1;
            if(this.detailsVisibility || (this.detailsVisibility = new Array), this.detailsVisibility[a] = !1, a = this.getrowvisibleindex(a), a < 0) return !1;
            var b = this._getrowdetails(a);
            return this._setrowdetailsvisibility(a, b, !1)
        },
        hiderowdetails: function(a) {
            if(this._loading) throw new Error("jqxGrid: " + this.loadingerrormessage);
            if(this.detailsVisibility || (this.detailsVisibility = new Array), this.detailsVisibility[a] = !0, a = this.getrowvisibleindex(a), a < 0) return !1;
            var b = this._getrowdetails(a);
            return this._setrowdetailsvisibility(a, b, !0)
        },
        _togglerowdetails: function(a) {
            this.detailsVisibility || (this.detailsVisibility = new Array);
            var b = a.visibleindex,
                c = this._getrowdetails(b);
            if(null != c) {
                var d = this.vScrollInstance.value,
                    e = !c.rowdetailshidden,
                    f = this.getboundindex(a);
                void 0 != f && (this.detailsVisibility[f] = e);
                var g = this._setrowdetailsvisibility(b, c, e);
                return 0 !== d && "hidden" !== this.vScrollBar.css("visibility") && (d <= this.vScrollInstance.max ? this.vScrollInstance.setPosition(d) : this.vScrollInstance.setPosition(this.vScrollInstance.max)), g
            }
            return !1
        },
        _setrowdetailsvisibility: function(a, b, c) {
            if(this.rowdetailstemplate && (this.details || (this.details = new Array), !this.details[a])) {
                this.details[a] = {
                    rowdetailshidden: this.rowdetailstemplate.rowdetailshidden,
                    rowdetailsheight: this.rowdetailstemplate.rowdetailsheight,
                    rowdetails: this.rowdetailstemplate.rowdetails
                };
                var d = this.dataview.generatekey();
                this.details[a].detailskey = d, this.detailboundrows[a] = {
                    index: a,
                    details: this.details[a]
                }
            }
            if(null == b) return !1;
            this.details[a].rowdetailshidden = c;
            var e = this.details[a];
            return c ? this._raiseEvent(21, {
                rowindex: a,
                details: e.rowdetails,
                height: e.rowdetailsheight
            }) : this._raiseEvent(20, {
                rowindex: a,
                details: e.rowdetails,
                height: e.rowdetailsheight
            }), this._setrowdetails(a, e.rowdetails, e.rowdetailsheight, e.rowdetailshidden)
        },
        getrowvisibleindex: function(a) {
            if(void 0 == a || null == a || a < 0) return !1;
            if(this.virtualmode) {
                var b = this.dataview.loadedrecords[a];
                return void 0 == b ? -1 : b.visibleindex
            }
            return this.getrowdisplayindex(a)
        },
        hiderow: function(a) {
            if(this._loading) throw new Error("jqxGrid: " + this.loadingerrormessage);
            return !(void 0 == a || null == a || a < 0) && (null != a && (this.hiddenboundrows[a] = {
                    index: a,
                    hidden: !0
                }, a = this.getrowvisibleindex(a), this._setrowvisibility(a, !0)))
        },
        showrow: function(a) {
            if(this._loading) throw new Error("jqxGrid: " + this.loadingerrormessage);
            return !(void 0 == a || null == a || a < 0) && (null != a && (this.hiddenboundrows[a] = {
                    index: a,
                    hidden: !1
                }, a = this.getrowvisibleindex(a), this._setrowvisibility(a, !1)))
        },
        isrowhiddenat: function(a) {
            return null == a ? null : (a = this.getrowvisibleindex(a), this.rows.records[a] ? this.rows.records[a].hidden : void 0)
        },
        _setrowvisibility: function(a, b, c) {
            return null != a && (this.hiddens[a] = b, !(void 0 != c && !c) && (this.rendergridcontent(!0), !0))
        },
        _loadrows: function() {
            if(this._pageviews[this.dataview.pagenum] || this.pageable) {
                var a = this.pageable ? 0 : this._pageviews[this.dataview.pagenum].top;
                if(!this.pageable && void 0 != this._pagescache[this.dataview.pagenum]) return null;
                if(this.virtualsizeinfo) {
                    var b = this.that,
                        d = new Array,
                        e = new Array,
                        f = b.groupable && b.groups.length > 0,
                        g = (this.dataview.totalrecords, this.virtualsizeinfo.virtualheight, 0);
                    this.rows.beginupdate();
                    var h = this.dataview.pagesize;
                    this.pageable && f && (h = this.dataview.rows.length);
                    for(var i = 0; i < h && !(i >= this.dataview.rows.length); i++) {
                        var j = this.dataview.rows[i],
                            k = null;
                        b.rows.records[j.visibleindex] ? (k = b.rows.records[j.visibleindex], k.setdata(j)) : k = new c(b, j), k.hidden = this.hiddens[k.visibleindex], this.rowdetailstemplate && (k.rowdetails = this.rowdetailstemplate.rowdetails, k.rowdetailsheight = this.rowdetailstemplate.rowdetailsheight, k.rowdetailshidden = this.rowdetailstemplate.rowdetailshidden);
                        var l = this.details[k.visibleindex];
                        if(l ? (k.rowdetails = l.rowdetails, k.rowdetailsheight = l.rowdetailsheight, k.rowdetailshidden = l.rowdetailshidden) : this.rowdetailstemplate || (k.rowdetails = null), f && this.pageable && null != k.parentbounddata) {
                            var m = d[k.parentbounddata.uniqueid];
                            if(null != m) {
                                var n = this._findgroupstate(m.uniqueid);
                                this._setsubgroupsvisibility && this._setsubgroupsvisibility(this, k.parentbounddata, !n, !1), k.hidden = this.hiddens[k.visibleindex]
                            }
                            null != m && void 0 != m && (k.parentrow = m, m.subrows[m.subrows.length++] = k)
                        }
                        if(!k.hidden) {
                            var o = j.visibleindex;
                            this.heights[o] || (this.heights[o] = this.rowsheight), k.height = this.heights[o], this.rowdetails && k.rowdetails && !k.rowdetailshidden && (k.height += k.rowdetailsheight), d[k.uniqueid] = k, e[g++] = k, k.top = a, a += k.height;
                            var p = o;
                            b.rows.replace(p, k)
                        }
                    }(this.autoheight || this.pageable) && this.autorowheight && this._pageviews && this._pageviews.length > 0 && (this._pageviews[0].height = a), this.rows.resumeupdate(), e.length > 0 && (this._pagescache[this.dataview.pagenum] = e)
                }
            }
        },
        _updateaddnewrowui: function(b) {
            for(var c = this, d = "bottom" != c.everpresentrowposition ? c.addnewrowtop : c.addnewrowbottom, e = c.columns.records.length, f = 0, g = 0; g < e; g++) {
                var h = c.columns.records[g];
                h.addnewrowwidget && h.addnewrowwidget.detach()
            }
            for(var g = 0; g < e; g++) {
                var h = c.columns.records[g],
                    i = h.width;
                i < h.minwidth && (i = h.minwidth), i > h.maxwidth && (i = h.maxwidth);
                var j = a(d[0].cells[g]);
                j.css("left", f);
                var k = !0;
                j.width() == i && (k = !1), b && (k = !0), j.width(i), j[0].left = f, h.addnewrowwidget && (j.html(""), j.append(h.addnewrowwidget)), h.hidden && h.hideable ? j.css("display", "none") : f += i
            }
            var l = c.everpresentrowactions.split(" ");
            c.addnewrowbutton.show(), c.addnewrowupdatebutton.show(), c.addnewrowresetbutton.show(), c.addnewrowdeletebutton.show(), l.indexOf("add") == -1 && l.indexOf("addBottom") == -1 && c.addnewrowbutton.hide(), l.indexOf("update") == -1 && c.addnewrowupdatebutton.hide(), l.indexOf("reset") == -1 && c.addnewrowresetbutton.hide(), l.indexOf("delete") == -1 && c.addnewrowdeletebutton.hide();
            var m = a(d.children()[0]);
            m.width(parseInt(f) + 2), m.height(c.everpresentrowheight), m.css("max-height", c.everpresentrowheight + "px")
        },
        _removeaddnewrow: function() {
            for(var a = this, b = a.columns.records.length, c = 0; c < b; c++) {
                var d = a.columns.records[c];
                d.addnewrowwidget && (d.destroyeverpresentrowwidget ? d.destroyeverpresentrowwidget(d.addnewrowwidget) : d.addnewrowwidget.remove(), d.addnewrowwidget = null)
            }
            a.addnewrowbutton && a.addnewrowbutton.remove(), a.addnewrowupdatebutton && a.addnewrowupdatebutton.remove(), a.addnewrowdeletebutton && a.addnewrowdeletebutton.remove(), a.addnewrowresetbutton && a.addnewrowresetbutton.remove(), a.addnewrowpopup && (a.addnewrowpopup.remove(), a.addnewrowpopup = null), a.addnewrowtop && (a.addnewrowtop.remove(), a.addnewrowtop = null), a.addnewrowbottom && (a.addnewrowbottom.remove(), a.addnewrowbottom = null)
        },
        _updateaddnewrow: function() {
            var b = this,
                c = "bottom" != b.everpresentrowposition ? b.addnewrowtop : b.addnewrowbottom,
                d = a('<div style="position: relative;" id="row000' + b.element.id + '"></div>'),
                e = 0,
                f = b.columns.records.length,
                g = b.toThemeProperty("jqx-grid-cell");
            g += " " + b.toThemeProperty("jqx-grid-cell-add-new-row"), g += " " + b.toThemeProperty("jqx-grid-cell-filter-row");
            var h = f + 10,
                i = new Array;
            b.that;
            c[0].cells = i, d.height(b.everpresentrowheight), b.showfilterrow || "bottom" == b.everpresentrowposition ? b.showfilterrow && "bottom" != b.everpresentrowposition && c.css("max-height", b.everpresentrowheight - 3 + "px") : c.css("max-height", b.everpresentrowheight - 1 + "px"), d.css("max-height", b.everpresentrowheight + "px"), c.append(d);
            var j = a("<div style='border-width: 1px; border-style: solid; padding: 5px; z-index: 99999; display: none; position: absolute;'><div>").appendTo(a(document.body)),
                k = a("<button style='position: relative; float: left; margin: 2px; border-radius: 0px; padding: 4px 8px;'>" + b.gridlocalization.addrowstring + "</button>"),
                l = a("<button style='position: relative; float: left; margin: 2px; border-radius: 0px; padding: 4px 8px;'>" + b.gridlocalization.udpaterowstring + "</button>"),
                m = a("<button style='position: relative; float: left; margin: 2px; border-radius: 0px; padding: 4px 8px;'>" + b.gridlocalization.deleterowstring + "</button>"),
                n = a("<button style='position: relative; float: left; margin: 2px; border-radius: 0px; padding: 4px 8px;'>" + b.gridlocalization.resetrowstring + "</button>");
            j.addClass(b.toThemeProperty("jqx-popup")), j.addClass(b.toThemeProperty("jqx-rc-all")), j.addClass(b.toThemeProperty("jqx-fill-state-normal")), j.addClass(b.toThemeProperty("jqx-shadow")), j.append(k), j.append(l), j.append(m), j.append(n);
            var o = b.everpresentrowactions.split(" ");
            o.indexOf("add") == -1 && o.indexOf("addBottom") == -1 && k.hide(), o.indexOf("update") == -1 && l.hide(), o.indexOf("reset") == -1 && n.hide(), o.indexOf("delete") == -1 && m.hide(), b.addnewrowpopup = j, b.addnewrowbutton = k, b.addnewrowupdatebutton = l, b.addnewrowdeletebutton = m, b.addnewrowresetbutton = n, k.jqxButton({
                template: "success",
                theme: b.theme
            }), m.jqxButton({
                template: "danger",
                theme: b.theme
            }), l.jqxButton({
                template: "primary",
                theme: b.theme
            }), n.jqxButton({
                template: "warning",
                theme: b.theme
            }), l.mousedown(function(a) {
                for(var c = {}, d = {}, e = 0; e < f; e++) {
                    var g = b.columns.records[e];
                    if(g.geteverpresentrowwidgetvalue) {
                        var h = g.geteverpresentrowwidgetvalue(g.displayfield, g.addnewrowwidget);
                        d[g.datafield] = h, g.datafield != g.displayfield && (d[g.datafield] = h.value, d[g.displayfield] = h.label)
                    }
                }
                for(var i = !1, e = 0; e < f; e++) {
                    var g = b.columns.records[e];
                    if(g.geteverpresentrowwidgetvalue) {
                        var h = g.geteverpresentrowwidgetvalue(g.displayfield, g.addnewrowwidget);
                        if(g.createeverpresentrowwidget && g.validateeverpresentrowwidgetvalue) {
                            var k = g.validateeverpresentrowwidgetvalue(g.displayfield, h, d),
                                l = k,
                                m = b.gridlocalization.validationstring;
                            void 0 != l.message && (m = l.message);
                            var n = "boolean" == typeof l ? l : l.result;
                            n ? (g.addnewrowwidget.attr("title", ""), g.addnewrowwidget.removeClass(b.toThemeProperty("jqx-input-invalid"))) : (h = "invalid editor state", g.addnewrowwidget.attr("title", m), g.addnewrowwidget.addClass(b.toThemeProperty("jqx-input-invalid")))
                        }
                        "invalid editor state" !== h || (a.preventDefault(), a.stopPropagation(), i = !0)
                    }
                }
                if(i) return j.hide(), void b.focus();
                for(var e = 0; e < f; e++) {
                    var g = b.columns.records[e];
                    if(g.geteverpresentrowwidgetvalue) {
                        var h = g.geteverpresentrowwidgetvalue(g.displayfield, g.addnewrowwidget);
                        c[g.datafield] = h, g.datafield != g.displayfield && (c[g.datafield] = h.value, c[g.displayfield] = h.label), g.reseteverpresentrowwidgetvalue && g.reseteverpresentrowwidgetvalue(g.displayfield, g.addnewrowwidget)
                    }
                }
                if(b.selectedcells.length > 0 || b.selectedrowindexes.length > 0) {
                    if(b.selectionmode.indexOf("cell") >= 0) var o = b.getselectedcells()[0].rowindex;
                    else var o = b.selectedrowindexes[0];
                    rowData = b.getrowdata(o), rowData && b.updaterow(rowData.uid, c)
                }
                j.hide(), b.focus()
            }), m.mousedown(function(a) {
                if(b.selectedcells.length > 0 || b.selectedrowindexes.length > 0) {
                    if(b.selectionmode.indexOf("cell") >= 0) var c = b.getselectedcells()[0].rowindex;
                    else var c = b.selectedrowindexes[0];
                    rowData = b.getrowdata(c), rowData && b.deleterow(rowData.uid)
                }
                for(var d = 0; d < f; d++) {
                    var e = b.columns.records[d];
                    e.reseteverpresentrowwidgetvalue && e.reseteverpresentrowwidgetvalue(e.displayfield, e.addnewrowwidget)
                }
                j.hide(), b.focus(), b.updateeverpresentrow()
            }), k.mousedown(function(a) {
                for(var c = {}, d = {}, e = 0; e < f; e++) {
                    var g = b.columns.records[e];
                    if(g.geteverpresentrowwidgetvalue) {
                        var h = g.geteverpresentrowwidgetvalue(g.displayfield, g.addnewrowwidget);
                        d[g.datafield] = h, g.datafield != g.displayfield && (d[g.datafield] = h.value, d[g.displayfield] = h.label), g.datafield != g.displayfield && (d[g.datafield] = h.label, d[g.displayfield] = h.value)
                    }
                }
                for(var i = !1, e = 0; e < f; e++) {
                    var g = b.columns.records[e];
                    if(g.geteverpresentrowwidgetvalue) {
                        var h = g.geteverpresentrowwidgetvalue(g.displayfield, g.addnewrowwidget);
                        if(g.createeverpresentrowwidget && g.validateeverpresentrowwidgetvalue) {
                            var k = g.validateeverpresentrowwidgetvalue(g.displayfield, h, d),
                                l = k,
                                m = b.gridlocalization.validationstring;
                            void 0 != l.message && (m = l.message);
                            var n = "boolean" == typeof l ? l : l.result;
                            n ? (g.addnewrowwidget.attr("title", ""), g.addnewrowwidget.removeClass(b.toThemeProperty("jqx-input-invalid"))) : (h = "invalid editor state", g.addnewrowwidget.attr("title", m), g.addnewrowwidget.addClass(b.toThemeProperty("jqx-input-invalid")))
                        }
                        "invalid editor state" !== h || (a.preventDefault(), a.stopPropagation(), i = !0)
                    }
                }
                if(i) return j.hide(), void b.focus();
                for(var e = 0; e < f; e++) {
                    var g = b.columns.records[e];
                    if(g.geteverpresentrowwidgetvalue) {
                        var h = g.geteverpresentrowwidgetvalue(g.displayfield, g.addnewrowwidget);
                        c[g.datafield] = h, g.datafield != g.displayfield && (d[g.datafield] = h.label, d[g.displayfield] = h.value), g.reseteverpresentrowwidgetvalue && g.reseteverpresentrowwidgetvalue(g.displayfield, g.addnewrowwidget)
                    }
                }
                var o = b.everpresentrowactions.indexOf("addBottom") >= 0 ? "last" : "first";
                b.addrow(null, c, o), j.hide(), b.focus()
            }), n.mousedown(function(a) {
                for(var c = 0; c < f; c++) {
                    var d = b.columns.records[c];
                    d.reseteverpresentrowwidgetvalue && d.reseteverpresentrowwidgetvalue(d.displayfield, d.addnewrowwidget), d.addnewrowwidget && (d.addnewrowwidget.attr("title", ""), d.addnewrowwidget.removeClass(b.toThemeProperty("jqx-input-invalid")))
                }
                j.hide(), b.focus()
            });
            for(var p = 0; p < f; p++) {
                var q = b.columns.records[p],
                    r = q.width;
                r < q.minwidth && (r = q.minwidth), r > q.maxwidth && (r = q.maxwidth);
                var s = a('<div style="overflow: hidden; position: absolute; height: 100%;" class="' + g + '"></div>');
                if(d.append(s), s.css("left", e), b.rtl ? (s.css("z-index", h++), s.css("border-left-width", "1px")) : s.css("z-index", h--), "auto" == r && (r = 0), s[0].style.width = parseFloat(r) + "px", s[0].left = e, q.hidden && q.hideable ? s.css("display", "none") : e += r, i[i.length] = s[0], q.checkboxcolumn) {
                    var t = b.toThemeProperty("jqx-grid-cell");
                    t += " " + b.toThemeProperty("jqx-grid-cell-filter-row"), t += " " + b.toThemeProperty("jqx-grid-cell-pinned"), s.removeClass().addClass(t)
                } else {
                    var u = !0;
                    if(b.rtl) {
                        if(b.groupable) {
                            var v = b.showrowdetailscolumn && b.rowdetails ? 1 : 0;
                            b.groups.length + v + p > f - 1 && (u = !1)
                        }
                        b.showrowdetailscolumn && b.rowdetails && p == f - 1 && (u = !1)
                    } else {
                        if(b.groupable) {
                            var v = b.showrowdetailscolumn && b.rowdetails ? 1 : 0;
                            b.groups.length + v > p && (u = !1)
                        }
                        b.showrowdetailscolumn && b.rowdetails && 0 == p && (u = !1)
                    }
                    if(b.updateeverpresentrow = function() {
                            var a = null;
                            if(b.selectedcells.length > 0 || b.selectedrowindexes.length > 0) {
                                if(b.selectionmode.indexOf("cell") >= 0) var c = b.getselectedcells()[0].rowindex;
                                else var c = b.selectedrowindexes[0];
                                a = b.getrowdata(c)
                            }
                            if(a)
                                for(var d = 0; d < b.columns.records.length; d++) {
                                    var e = b.columns.records[d];
                                    if(e.seteverpresentrowwidgetvalue) {
                                        var f = b.getcelltext(c, e.displayfield);
                                        e.seteverpresentrowwidgetvalue(e.addnewrowwidget, f)
                                    }
                                }
                        }, u)
                        if(q.createeverpresentrowwidget) {
                            var w = function() {
                                k.trigger("mousedown")
                            };
                            q.addnewrowwidget = q.createeverpresentrowwidget(q.datafield, s, j, w), q.initeverpresentrowwidget && q.initeverpresentrowwidget(q.datafield, s, j)
                        } else {
                            b._measureElement("column");
                            var x = b.everpresentrowheight / 2 - b._columnheight / 2;
                            if(x < 0 && (x = 6), x += "px", "addButtonColumn" === q.datafield) {
                                var y = a('<div style="padding-bottom: 2px; text-align: center; margin-top: ' + x + ';"><a href="#">' + b.gridlocalization.addrowstring + "</a></div>");
                                s.append(y), y.mousedown(function() {
                                    k.trigger("mousedown")
                                });
                                continue
                            }
                            if("resetButtonColumn" === q.datafield) {
                                var y = a('<div style="padding-bottom: 2px; text-align: center; margin-top: ' + x + ';"><a href="#">' + b.gridlocalization.resetrowstring + "</a></div>");
                                s.append(y), y.mousedown(function() {
                                    n.trigger("mousedown")
                                });
                                continue
                            }
                            var z = function(c, d, e) {
                                var g = a('<input style="box-sizing: border-box; padding-right: 4px; padding-left: 4px; border:none;" autocomplete="off" type="textarea"/>');
                                if(g[0].id = a.jqx.utilities.createId(), g.addClass(c.toThemeProperty("jqx-widget")), g.addClass(c.toThemeProperty("jqx-input")), g.addClass(c.toThemeProperty("jqx-widget-content")), g.addClass(c.toThemeProperty("jqx-enableselect")), g.addClass(c.toThemeProperty("jqx-grid-cell-add-new-row")), g.css("text-align", e.cellsalign), c.rtl && g.css("direction", "rtl"), c.disabled && g.attr("disabled", !0), g.attr("disabled", !1), g.attr("placeholder", c.gridlocalization.everpresentrowplaceholder + e.text), g.appendTo(d), g.css("width", "100%"), g.css("height", c.everpresentrowheight + "px"), g.css("line-height", c.everpresentrowheight + "px"), g.css("max-height", c.everpresentrowheight + "px"), g.css("margin", "0px"), g.focus(function() {
                                        if(b.selectedcells.length > 0 || b.selectedrowindexes.length > 0)
                                            if(b.selectionmode.indexOf("cell") >= 0) {
                                                b.getselectedcells()[0].rowindex
                                            } else {
                                                b.selectedrowindexes[0]
                                            }
                                        g.addClass(c.toThemeProperty("jqx-fill-state-focus"));
                                        var a = c.columns.records.indexOf(e);
                                        "columns" !== c.everpresentrowactionsmode && j.css({
                                            display: "block",
                                            top: g.coord().top + c.everpresentrowheight - 1,
                                            left: a > 0 ? g.coord().left : g.coord().left - 1
                                        });
                                        var d = j.children().width();
                                        if("right" === e.cellsalign) {
                                            var d = k.width() + n.width();
                                            j.children().css("left", d - d + "px")
                                        } else j.children().css("left", "0px");
                                        return c.content[0].scrollLeft = 0, c.content[0].scrollTop = 0, setTimeout(function() {
                                            c.content[0].scrollLeft = 0, c.content[0].scrollTop = 0
                                        }, 50), !1
                                    }), e.addnewrowwidget = g, e.reseteverpresentrowwidgetvalue || (e.reseteverpresentrowwidgetvalue = function(a, c) {
                                        c.val(""), c.focus(), c.blur(), c.removeClass(b.toThemeProperty("jqx-input-invalid")), c.attr("title", "")
                                    }), e.seteverpresentrowwidgetvalue || (e.seteverpresentrowwidgetvalue = function(a, b) {
                                        a.val(b)
                                    }), !e.geteverpresentrowwidgetvalue) {
                                    var h = e;
                                    e.geteverpresentrowwidgetvalue = function(c, d, e) {
                                        var i = d.val();
                                        if(e !== !1 && h.validateeverpresentrowwidgetvalue) {
                                            for(var j = {}, k = 0; k < f; k++) {
                                                var l = b.columns.records[k];
                                                if(l.geteverpresentrowwidgetvalue) {
                                                    var m = l.geteverpresentrowwidgetvalue(l.displayfield, l.addnewrowwidget, !1);
                                                    j[l.datafield] = m, l.datafield != l.displayfield && (j[l.datafield] = m.value, j[l.displayfield] = m.label)
                                                }
                                            }
                                            var n = h.validateeverpresentrowwidgetvalue(h.displayfield, i, j),
                                                o = n,
                                                p = b.gridlocalization.validationstring;
                                            void 0 != o.message && (p = o.message);
                                            var q = "boolean" == typeof o ? o : o.result;
                                            if(!q) return g.addClass(b.toThemeProperty("jqx-input-invalid")), g.attr("title", p), "invalid editor state";
                                            g.removeClass(b.toThemeProperty("jqx-input-invalid")), g.attr("title", "")
                                        }
                                        var r = "string",
                                            s = b.source.datafields || (b.source._source ? b.source._source.datafields : null);
                                        if(s) {
                                            var t = "";
                                            a.each(s, function() {
                                                if(this.name == h.displayfield) return this.type && (t = this.type), !1
                                            }), t && (r = t)
                                        }
                                        if("number" === r) {
                                            var u = parseFloat(i);
                                            if(isNaN(u)) return null
                                        }
                                        return "date" === r ? a.jqx.dataFormat.tryparsedate(i, b.gridlocalization) : "bool" === r || "boolean" === r ? "true" === i || ("1" == i || "false" !== i && ("0" != i && (i === !0 ? i : i === !1 && i))) : i
                                    }
                                }
                                g.keydown(function(a) {
                                    13 === a.keyCode && (b.everpresentrowactions.indexOf("add") >= 0 ? k.trigger("mousedown") : b.everpresentrowactions.indexOf("update") >= 0 ? l.trigger("mousedown") : b.everpresentrowactions.indexOf("delete") >= 0 && m.trigger("mousedown"))
                                }), g.blur(function() {
                                    g.removeClass(c.toThemeProperty("jqx-fill-state-focus")), j.css("display", "none")
                                }), e.initeverpresentrowwidget && e.initeverpresentrowwidget(e.datafield, d, j)
                            };
                            z(this, s, q)
                        }
                }
            }
            a.jqx.browser.msie && a.jqx.browser.version < 8 && d.css("z-index", h--), d.width(parseFloat(e) + 2), c.addClass(g), c.css("border-bottom-width", "0px"), b.showfilterrow ? c.css("border-top-width", "0px") : c.css("border-top-width", "1px"), c.css("box-sizing", "border-box"), c.css("border-right-width", "0px")
        },
        _gettableheight: function() {
            if(void 0 != this.tableheight) return this.tableheight;
            var a = this.host.height();
            if(this.columnsheader) {
                var b = this.columnsheader.outerHeight();
                this.showheader || (b = 0)
            }
            return a -= b, "visible" == this.hScrollBar[0].style.visibility && (a -= this.hScrollBar.outerHeight()), this.pageable && (a -= this.pager.outerHeight()), this._groupsheader() && (a -= this.groupsheader.outerHeight()), this.showtoolbar && (a -= this.toolbarheight), this.showstatusbar && (a -= this.statusbarheight), this.showeverpresentrow && "bottom" === this.everpresentrowposition && (a -= this.everpresentrowheight), a > 0 ? (this.tableheight = a, a) : this.host.height()
        },
        _getpagesize: function() {
            if(this.pageable) return this.pagesize;
            if(this.virtualmode) {
                var a = Math.round(this.host.height()) + 2 * this.rowsheight,
                    b = Math.round(a / this.rowsheight);
                return b
            }
            return this.autoheight || this.autorowheight ? 0 == this.dataview.totalrows ? 1 : this.dataview.totalrows : this.dataview.totalrows < 100 && this.dataview.totalrecords < 100 && this.dataview.totalrows > 0 ? this.dataview.totalrows : 100
        },
        _calculatevirtualheight: function() {
            var a = (this.that, Math.round(this.host.height()) + 2 * this.rowsheight);
            realheight = this._gettableheight();
            var b = Math.round(a / this.rowsheight);
            this.heights = new Array, this.hiddens = new Array, this.details = new Array, this.expandedgroups = new Array, this.hiddenboundrows = new Array, this.heightboundrows = new Array, this.detailboundrows = new Array;
            var c = Math.max(this.dataview.totalrows, this.dataview.totalrecords);
            this.pageable && (c = this.pagesize, this.pagesize > Math.max(this.dataview.totalrows, this.dataview.totalrecords) && this.autoheight ? c = Math.max(this.dataview.totalrows, this.dataview.totalrecords) : this.autoheight || this.dataview.totalrows < this.pagesize && (c = Math.max(this.dataview.totalrows, this.dataview.totalrecords)));
            var d = c * this.rowsheight,
                e = 0,
                f = 0,
                g = 0,
                h = this._getpagesize(),
                i = h * this.rowsheight,
                j = 0;
            if(!this.pageable && this.autoheight && (b = c), c + h > 0)
                for(; j <= c + h;) {
                    if(e += i, j - h < c && j >= c) {
                        var k = j - c;
                        k > 0 && (g -= i, this._pageviews[f - 1] = {
                            top: g,
                            height: i - k * this.rowsheight
                        });
                        break
                    }
                    this._pageviews[f++] = {
                        top: g,
                        height: i
                    }, g = e, j += h
                }
            if(1 != this.resizingGrid && this.vScrollBar.jqxScrollBar({
                    value: 0
                }), "hidden" == this.hScrollBar.css("visibility")) {
                var l = 0;
                if(this.columns && this.columns.records) {
                    for(var j = 0; j < this.columns.records.length; j++) l += isNaN(this.columns.records[j].width) ? this.columns.records[j].minwidth : this.columns.records[j].width;
                    !isNaN(l) && parseInt(l) > this.host.width() && (realheight -= 30)
                }
            }
            return d > realheight && !this.autoheight ? (this.vScrollBar.css("visibility", "visible"), "deferred" == this.scrollmode ? this.vScrollBar.jqxScrollBar({
                max: d
            }) : this.vScrollBar.jqxScrollBar({
                max: d - realheight
            })) : this.vScrollBar.css("visibility", "hidden"), this.dataview.pagesize = h, this.dataview.updateview(), {
                visiblerecords: b,
                virtualheight: d
            }
        },
        _updatepageviews: function() {
            if(!this.updating()) {
                this._pagescache = new Array, this._pageviews = new Array, this.tableheight = null;
                var a = this.that,
                    b = Math.round(this.host.height()) + 2 * this.rowsheight,
                    c = Math.round(b / this.rowsheight),
                    d = Math.max(this.dataview.totalrows, this.dataview.totalrecords),
                    e = d * this.rowsheight,
                    f = 0,
                    g = 0,
                    h = 0,
                    i = 0,
                    j = 0,
                    k = this._getpagesize();
                if(this.pageable) this._updatepagedview && (e = this._updatepagedview(d, e, 0)), this.autoheight && this._arrange();
                else
                    for(var l = 0; l < d; l++) {
                        var m = {
                            index: l,
                            height: this.heights[l],
                            hidden: this.hiddens[l],
                            details: this.details[l]
                        };
                        if(void 0 == this.heights[l] && (this.heights[l] = this.rowsheight, m.height = this.rowsheight), void 0 == this.hiddens[l] && (this.hiddens[l] = !1, m.hidden = !1), void 0 == this.details[l] && (this.details[l] = null), m.height != a.rowsheight && (e -= a.rowsheight, e += m.height), m.hidden) e -= m.height;
                        else {
                            g += m.height;
                            var n = 0;
                            this.rowdetails && (this.rowdetailstemplate && (m.details || (m.details = this.rowdetailstemplate)), m.details && m.details.rowdetails && !m.details.rowdetailshidden && (n = m.details.rowdetailsheight, g += n, e += n)), f += m.height + n
                        }
                        j++, (j >= k || l == d - 1) && (this._pageviews[h++] = {
                            top: i,
                            height: g
                        }, g = 0, i = f, j = 0)
                    }
                var o = this._gettableheight();
                if(e > o)
                    if(this.pageable && this.gotopage && (e = this._pageviews[0].height, e < 0 && (e = this._pageviews[0].height)), "visible" != this.vScrollBar.css("visibility") && this.vScrollBar.css("visibility", "visible"), (e <= o || this.autoheight) && this.vScrollBar.css("visibility", "hidden"), e - o > 0)
                        if("deferred" != this.scrollmode) {
                            var p = e - o,
                                q = this.vScrollInstance.max;
                            this.vScrollBar.jqxScrollBar({
                                max: p
                            }), p != q && this.vScrollBar.jqxScrollBar({
                                value: 0
                            })
                        } else this.vScrollBar.jqxScrollBar({
                            value: 0,
                            max: e
                        });
                    else this.vScrollBar.jqxScrollBar({
                        value: 0,
                        max: e
                    });
                else this._loading || this.vScrollBar.css("visibility", "hidden"), this.vScrollBar.jqxScrollBar({
                    value: 0
                });
                this._arrange(), this.autoheight && (c = Math.round(this.host.height() / this.rowsheight)), this.virtualsizeinfo = {
                    visiblerecords: c,
                    virtualheight: e
                }
            }
        },
        updatebounddata: function(a) {
            "data" == a || "sort" == a || "filter" == a || "cells" == a || "pagechanged" == a || "pagesizechanged" == a || this.virtualmode || (this.virtualsizeinfo = null, this.showfilterrow && this.filterable && this.filterrow ? (this.clearfilters && this.clearfilters(!1), this.filterable && this._destroyedfilters && this.showfilterrow && this._destroyedfilters(), this.filterrow.remove(), this._filterrowcache = new Array, this.filterrow = null) : this.filterable && this.clearfilters && this.clearfilters(!1), this.detailsVisibility = new Array, this.groupsVisibility = new Array, this.groupable && (this.dataview.groups = [], this.groups = []), this.pageable && (this.pagenum = 0, this.dataview.pagenum = 0), this.sortable && (this.sortcolumn = null, this.sortdirection = "", this.dataview.sortfielddirection = "", this.dataview.clearsortdata())), this.databind(this.source, a)
        },
        refreshdata: function() {
            this._refreshdataview(), this.render()
        },
        _updatevscrollbarmax: function() {
            if(this._pageviews && this._pageviews.length > 0) {
                var a = this._pageviews[0].height;
                !this.virtualmode && this.pageable || (a = this.virtualsizeinfo.virtualheight);
                var b = this._gettableheight();
                if(a > b)
                    if(this.pageable && this.gotopage && (a = this._pageviews[0].height,
                        a < 0 && (a = this._pageviews[0].height)), "visible" != this.vScrollBar.css("visibility") && this.vScrollBar.css("visibility", "visible"), (a <= b || this.autoheight) && this.vScrollBar.css("visibility", "hidden"), a - b > 0) {
                        var c = a - b;
                        this.vScrollBar.jqxScrollBar({
                            max: c
                        })
                    } else this.vScrollBar.jqxScrollBar({
                        value: 0,
                        max: a
                    });
                else this.vScrollBar.css("visibility", "hidden"), this.vScrollBar.jqxScrollBar({
                    value: 0
                })
            }
        },
        _refreshdataview: function() {
            this.dataview.refresh()
        },
        refresh: function(b) {
            if(1 != b) {
                if(a.jqx.isHidden(this.host)) return;
                null != this.virtualsizeinfo && (this._cellscache = new Array, this._renderrows(this.virtualsizeinfo), this._updatesize())
            }
        },
        render: function() {
            this._render(!0, !0, !0, !0)
        },
        invalidate: function() {
            this.virtualsizeinfo && (this._updatecolumnwidths(), this._updatecellwidths(), this._renderrows(this.virtualsizeinfo))
        },
        clear: function() {
            this.databind(null), this.render()
        },
        _preparecolumngroups: function() {
            var a = this.columnsheight;
            if(this.columngroups) {
                if(this.columnshierarchy = new Array, this.columngroups.length) {
                    for(var b = this, c = 0; c < this.columngroups.length; c++) this.columngroups[c].parent = null, this.columngroups[c].groups = null;
                    for(var c = 0; c < this.columns.records.length; c++) this.columns.records[c].parent = null, this.columns.records[c].groups = null;
                    for(var d = function(a) {
                        for(var c = 0; c < b.columngroups.length; c++) {
                            var d = b.columngroups[c];
                            if(d.name === a) return d
                        }
                        return null
                    }, c = 0; c < this.columngroups.length; c++) {
                        var e = this.columngroups[c];
                        if(e.groups || (e.groups = null), e.parentgroup) {
                            var f = d(e.parentgroup);
                            f && (e.parent = f, f.groups || (f.groups = new Array), f.groups.indexOf(e) === -1 && f.groups.push(e))
                        }
                    }
                    for(var c = 0; c < this.columns.records.length; c++) {
                        var e = this.columns.records[c];
                        if(e.columngroup) {
                            var f = d(e.columngroup);
                            f && (f.groups || (f.groups = new Array), e.parent = f, f.groups.indexOf(e) === -1 && f.groups.push(e))
                        }
                    }
                    for(var g = 0, c = 0; c < this.columns.records.length; c++) {
                        var e = this.columns.records[c],
                            h = e;
                        for(e.level = 0; h.parent;) h = h.parent, e.level++;
                        var h = e,
                            i = e.level;
                        for(g = Math.max(g, e.level); h.parent;) h = h.parent, h && (h.level = --i)
                    }
                    for(var j = function(a) {
                        var b = new Array;
                        if(a.columngroup && b.push(a), a.groups)
                            for(var c = 0; c < a.groups.length; c++)
                                if(a.groups[c].columngroup) b.push(a.groups[c]);
                                else if(a.groups[c].groups)
                                    for(var d = j(a.groups[c]), e = 0; e < d.length; e++) b.push(d[e]);
                        return b
                    }, c = 0; c < this.columngroups.length; c++) {
                        var e = this.columngroups[c],
                            k = j(e);
                        e.columns = k;
                        for(var l = new Array, m = 0, n = 0; n < k.length; n++) l.push(this.columns.records.indexOf(k[n])), k[n].pinned && m++;
                        if(0 != m) throw new Error("jqxGrid: Column Groups initialization Error. Please, check the initialization of the jqxGrid's columns array. The columns in a column group cannot be pinned.");
                        l.sort(function(a, b) {
                            return a = parseInt(a), b = parseInt(b), a < b ? -1 : a > b ? 1 : 0
                        });
                        for(var o = 1; o < l.length; o++)
                            if(l[o] != l[o - 1] + 1) throw new Error("jqxGrid: Column Groups initialization Error. Please, check the initialization of the jqxGrid's columns array. The columns in a column group are expected to be siblings in the columns array.")
                    }
                }
                this.columngroupslevel = 1 + g, a = this.columngroupslevel * this.columnsheight
            }
            return a
        },
        _render: function(b, c, d, e, f) {
            if(null != this.dataview && !this._loading && !this._batchupdate) {
                if(a.jqx.isHidden(this.host)) {
                    var g = this;
                    return g.___hiddenTimer && (clearInterval(g.___hiddenTimer), g.___hiddenTimer = null), void(this.___hiddenTimer = setInterval(function() {
                        a.jqx.isHidden(g.host) || (clearInterval(g.___hiddenTimer), g.render())
                    }, 300))
                }
                if(null != this.editcell && this.endcelledit && this.endcelledit(this.editcell.row, this.editcell.column, !0, !1), this.validationpopup = null, this._removeHandlers(), this._addHandlers(), this._initializeRows(), this._requiresupdate = void 0 == c || c, this._newmax = null, d)
                    if(this._requiresupdate || 0 != e && this._initmenu(), null == this.columns) this.columns = new a.jqx.collection(this.element);
                    else {
                        var h = this;
                        this.columns && "observableArray" === this.columns.name && (this.columns.notifier = function(a) {
                            var b = function() {
                                h.columns = h._columns, h.render()
                            };
                            switch(a.type) {
                                case "add":
                                    b();
                                    break;
                                case "update":
                                    if("index" === a.name) {
                                        h.beginupdate();
                                        for(var c in a.newValue) h.setcolumnproperty(a.newValue.datafield, c, a.newValue[c]);
                                        h.endupdate()
                                    } else {
                                        var d = a.path.split(".");
                                        h.setcolumnproperty(h.columns[d[0]].datafield, a.name, a.newValue)
                                    }
                                    break;
                                case "delete":
                                    b()
                            }
                        }), this.columngroups && "observableArray" === this.columngroups.name && (this.columngroups.notifier = function(a) {
                            h.render()
                        }), this._initializeColumns()
                    }
                this.tableheight = null, this._pagescache = new Array, this._pageviews = new Array, this.visiblerows = new Array, this.hittestinfo = new Array, this._requiresupdate && (this._clearcaches(), 1 == e && this._initmenu()), this.virtualsizeinfo = null, this.prerenderrequired = !0, (this.groupable && this.groups.length > 0 && this.rowdetails || this.rowdetails) && this.gridcontent && (this._rowdetailscache = new Array, this._rowdetailselementscache = new Array, this.detailboundrows = new Array, this.details = new Array, a.jqx.utilities.html(this.gridcontent, ""), this.gridcontent = null), this.gridcontent && this.editable && this._destroyeditors && this._destroyeditors(), d ? (this.filterrow && this.filterrow.detach(), a.jqx.utilities.html(this.content, ""), this.columnsheader = this.columnsheader || a('<div style="overflow: hidden;"></div>'), this.columnsheader.remove(), this.columnsheader.addClass(this.toTP("jqx-widget-header")), this.columnsheader.addClass(this.toTP("jqx-grid-header"))) : this.gridcontent && a.jqx.utilities.html(this.gridcontent, ""), this.showheader ? this.columnsheader && this.columnsheader.css("display", "block") : this.columnsheader.css("display", "none"), this.gridcontent = this.gridcontent || a('<div style="width: 100%; overflow: hidden; position: absolute;"></div>'), this.gridcontent.remove();
                var i = this.columnsheight;
                if(i = this._preparecolumngroups(), this.showfilterrow && this.filterable ? (this.columnsheader.height(i + this.filterrowheight), this.showeverpresentrow && "bottom" !== this.everpresentrowposition && this.columnsheader.height(i + this.filterrowheight + this.everpresentrowheight)) : this.showeverpresentrow && "bottom" !== this.everpresentrowposition ? this.columnsheader.height(i + this.everpresentrowheight) : this.columnsheader.height(i), this.content.append(this.columnsheader), this.content.append(this.gridcontent), this._arrange(), this._initgroupsheader && this._initgroupsheader(), this.selectionarea = this.selectionarea || a("<div style='z-index: 99999; visibility: hidden; position: absolute;'></div>"), this.selectionarea.addClass(this.toThemeProperty("jqx-grid-selectionarea")), this.selectionarea.addClass(this.toThemeProperty("jqx-fill-state-pressed")), this.content.append(this.selectionarea), this.tableheight = null, this.rendergridcontent(!1, d), this.groups.length > 0 && this.groupable) {
                    var j = this.vScrollBar[0].style.visibility;
                    this.suspendgroupevents = !0, this.collapseallgroups && (this.groupsexpandedbydefault ? this.expandallgroups(!1) : (this.collapseallgroups(!1), this._updatescrollbarsafterrowsprerender())), this.vScrollBar[0].style.visibility != j && (this._updatecolumnwidths(), this._updatecellwidths()), this.suspendgroupevents = !1
                }
                this.pageable && this.updatepagerdetails && (this.updatepagerdetails(), this.autoheight && this._updatepageviews(), this.autorowheight && (this.autoheight || this._updatepageviews(), this._renderrows(this.virtualsizeinfo))), this.showaggregates && this._updateaggregates && this._updateaggregates(), this._addoverlayelement(), "deferred" == this.scrollmode && this._addscrollelement(), this.showfilterrow && this.filterable && this.filterrow && (void 0 == f || 1 == f) && this._updatelistfilters(!d), this.rendered && this.rendered("full"), this.__isRendered = !0
            }
        },
        _addoverlayelement: function() {
            var b = a.jqx.utilities.getBrowser();
            if("msie" == b.browser && parseInt(b.version) < 9 || this.isTouchDevice())
                if(this._overlayElement && this._overlayElement.remove(), this._overlayElement = a("<div class='jqxgrid-overlay' style='visibility: hidden; position: absolute; width: 100%; height: 100%;'></div>"), this._overlayElement.css("background", "white"), this._overlayElement.css("z-index", 18e3), this._overlayElement.css("opacity", .001), this.isTouchDevice())
                    if("hidden" !== this.vScrollBar.css("visibility") || "hidden" !== this.hScrollBar.css("visibility")) {
                        var c = 0;
                        "checkbox" == this.selectionmode && (c += 30), (this.groupable || this.rowdetails) && this._overlayElement.css("left", 30 * (this.groups.length + (this.rowdetails ? 1 : 0)));
                        var d = this._overlayElement.css("left");
                        this._overlayElement.css("left", d + c)
                    } else this._overlayElement && this._overlayElement.remove();
                else this.content.prepend(this._overlayElement);
            this._updateTouchScrolling()
        },
        _addscrollelement: function() {
            this._scrollelement && this._scrollelement.remove(), this._scrollelementoverlay && this._scrollelementoverlay.remove(), this._scrollelementoverlay = a("<div style='visibility: hidden; position: absolute; width: 100%; height: 100%;'></div>"), this._scrollelementoverlay.css("background", "black"), this._scrollelementoverlay.css("z-index", 18e3), this._scrollelementoverlay.css("opacity", .1), this._scrollelement = a("<span style='visibility: hidden; top: 50%; right: 10px; position: absolute;'></span>"), this._scrollelement.css("z-index", 18005), this._scrollelement.addClass(this.toThemeProperty("jqx-button")), this._scrollelement.addClass(this.toThemeProperty("jqx-fill-state-normal")), this._scrollelement.addClass(this.toThemeProperty("jqx-rc-all")), this._scrollelement.addClass(this.toThemeProperty("jqx-shadow")), this.content.prepend(this._scrollelement), this.content.prepend(this._scrollelementoverlay)
        },
        _postrender: function(a) {
            if(("filter" == a || "sort" == a || "group" == a) && this.rowdetails && this.detailsVisibility && this.detailsVisibility.length > 0) {
                this._detailsUpdate = !0;
                for(var b = 0; b < this.details.length; b++) this.details[b] && (this.details[b].rowdetailshidden = !0);
                for(var b = 0; b < this.detailsVisibility.length; b++) !1 === this.detailsVisibility[b] ? this.showrowdetails(b) : !0 === this.detailsVisibility[b] && this.hiderowdetails(b);
                this._detailsUpdate = !1, this.rendergridcontent(!0), this._updatecolumnwidths(), this._updatecellwidths(), this._renderrows(this.virtualsizeinfo)
            }
            if(this.groupable && this.groups.length > 0)
                if("filter" == a || "sort" == a)
                    for(var b = 0; b < this.dataview.loadedgroups.length; b++) {
                        var c = this.dataview.loadedgroups[b],
                            d = 0;
                        for(var e in this.groupsVisibility) e == c.group && this.groupsVisibility[e] && (suspendgroupevents = !0, this._setgroupstate(c, !0, !1), d++);
                        if(d > 0) {
                            suspendgroupevents = !1;
                            var f = this.vScrollBar[0].style.visibility;
                            this.rendergridcontent(!0, !1), (f != this.vScrollBar[0].style.visibility || this._hiddencolumns) && (this._updatecolumnwidths(), this._updatecellwidths(), this._renderrows(this.virtualsizeinfo))
                        }
                    } else "group" == a && (this.groupsVisibility = new Array)
        },
        rendergridcontent: function(a, b) {
            if(this.updating()) return !1;
            void 0 != a && null != a || (a = !1), this._requiresupdate = a;
            var c = this.prerenderrequired;
            this.prerenderrequired && this._arrange();
            var d = this.that,
                b = b;
            if(null != b && void 0 != b || (b = !0), this.tableheight = null, d.virtualsizeinfo = d.virtualsizeinfo || d._calculatevirtualheight(), d.pageable && !d.autoheight && d.dataview.totalrows < d.pagesize && (d._requiresupdate = !0), b ? d._rendercolumnheaders() : (this._rendersortcolumn && this._rendersortcolumn(), this._renderfiltercolumn && this._renderfiltercolumn()), d._renderrows(d.virtualsizeinfo), this.gridcontent && (0 != this.gridcontent[0].scrollTop && (this.gridcontent[0].scrollTop = 0), 0 != this.gridcontent[0].scrollLeft && (this.gridcontent[0].scrollLeft = 0)), c) {
                var e = this.tableheight;
                this._arrange(), e != this.tableheight && this.autoheight && d._renderrows(d.virtualsizeinfo)
            }
            return this.rtl && this._renderhorizontalscroll(), this.autosavestate && null != this.initializedcall && this.savestate && this.savestate(), !0
        },
        _updatecolumnwidths: function() {
            var b = this.host.width(),
                c = b,
                d = "";
            if(void 0 != this.columns && void 0 != this.columns.records) {
                var e = this.that,
                    f = this.rowdetails && this.showrowdetailscolumn ? (1 + this.groups.length) * this.groupindentwidth : this.groups.length * this.groupindentwidth;
                a.each(this.columns.records, function(a, g) {
                    if(!this.hidden || !this.hideable)
                        if(this.width.toString().indexOf("%") != -1 || void 0 != this._percentagewidth) {
                            var g = 0,
                                h = "hidden" == e.vScrollBar[0].style.visibility ? 0 : e.scrollbarsize + 5;
                            (e.scrollbarautoshow || 0 == e.scrollbarsize) && (h = 0);
                            var i = c;
                            g = parseFloat(this.width) * i / 100, h += f, void 0 != this._percentagewidth && (g = parseFloat(this._percentagewidth) * (i - h) / 100), g < this.minwidth && "auto" != this.minwidth && (g = this.minwidth), g > this.maxwidth && "auto" != this.maxwidth && (g = this.maxwidth), b -= g
                        } else "auto" == this.width || this._width ? d += this.text : b -= this.width
                });
                var g = this._gettableheight();
                if(!this.autoheight && this.virtualsizeinfo && this.virtualsizeinfo.virtualheight > g)
                    if(this.groupable && this.groups.length > 0)
                        if(this.dataview && this.dataview.loadedrootgroups && !this.groupsexpandedbydefault) {
                            var h = this.dataview.loadedrootgroups.length * this.rowsheight;
                            if(this.pageable)
                                for(var i = 0; i < this.dataview.rows.length; i++) this.dataview.rows[i].group && 0 === this.dataview.rows[i].level && (h += this.rowsheight);
                            h > g ? (b -= this.scrollbarsize + 5, c -= this.scrollbarsize + 5) : "visible" == this.vScrollBar.css("visibility") && (b -= this.scrollbarsize + 5, c -= this.scrollbarsize + 5)
                        } else b -= this.scrollbarsize + 5, c -= this.scrollbarsize + 5;
                    else "hidden" != this.vScrollBar.css("visibility") && this.scrollbarsize > 0 && (b -= this.scrollbarsize + 5, c -= this.scrollbarsize + 5);
                var f = this.rowdetails && this.showrowdetailscolumn ? (1 + this.groups.length) * this.groupindentwidth : this.groups.length * this.groupindentwidth;
                if(c -= f, this.columnsheader) {
                    var j = this.columnsheader.find("#columntable" + this.element.id);
                    if(0 != j.length) {
                        var k = 0,
                            l = this,
                            m = 0;
                        a.each(this.columns.records, function(e, f) {
                            var g = a(this.element);
                            this.hidden || "none" !== this.element.style.display || (this.element.style.display = "block");
                            var h = !1,
                                i = this.width;
                            if(this.width.toString().indexOf("%") == -1 && void 0 == this._percentagewidth || (i = void 0 != this._percentagewidth ? parseFloat(this._percentagewidth) * c / 100 : parseFloat(this.width) * c / 100, h = !0), "auto" == this.width || this._width || h)
                                if(h) i < this.minwidth && "auto" != this.minwidth && (i = this.minwidth, this.width = i), i > this.maxwidth && "auto" != this.maxwidth && (i = this.maxwidth, this.width = i), parseInt(g[0].style.width) != i && (g.width(i), this.width = i);
                                else {
                                    var j = Math.floor(b * (this.text.length / d.length));
                                    m += j, b - m < 3 && b != m ? j += 2 : e == l.columns.records.length - 1 && m < b && (j += b - m), isNaN(j) && (j = this.minwidth), j == 1 / 0 && (j = 0), j < 0 && ($element = a("<span>" + this.text + "</span>"), a(document.body).append($element), j = 10 + $element.width(), $element.remove()), j < this.minwidth && (j = this.minwidth), j > this.maxwidth && (j = this.maxwidth), this._width = "auto", this.width = j, g.width(this.width)
                                }
                            else parseInt(g[0].style.width) != this.width && g.width(this.width);
                            parseInt(g[0].style.left) != k && g.css("left", k), this.hidden && this.hideable || (k += this.width), this._requirewidthupdate = !0
                        }), this.columnsheader.width(2 + k), j.width(this.columnsheader.width()), 0 == k ? this.columnsheader[0].style.visibility = "hidden" : this.columnsheader[0].style.visibility = "inherit", this._resizecolumngroups(), this.showfilterrow && this.filterrow && (this.filterrow.width(this.columnsheader.width()), this._updatefilterrowui()), this.showeverpresentrow && ("bottom" !== this.everpresentrowposition ? this.addnewrowtop.width(this.columnsheader.width()) : this.addnewrowbottom.width(this.columnsheader.width()), this._updateaddnewrowui()), this.autowidth && this._arrange()
                    }
                }
            }
        },
        _rendercolumnheaders: function() {
            var b = this.that;
            if(!this.prerenderrequired) return this._rendersortcolumn && this._rendersortcolumn(), this._renderfiltercolumn && this._renderfiltercolumn(), this.showfilterrow && this.filterrow && (this.filterrow.width(this.columnsheader.width()), this._updatefilterrowui()), void(this.showeverpresentrow && ("bottom" !== this.everpresentrowposition ? this.addnewrowtop.width(this.columnsheader.width()) : this.addnewrowbottom.width(this.columnsheader.width()), this._updateaddnewrowui()));
            this._columnsbydatafield = new Array, this.columnsheader.find("#columntable" + this.element.id).remove();
            var c = a('<div id="columntable' + this.element.id + '" style="height: 100%; position: relative;"></div>');
            c[0].cells = new Array;
            var d = 0,
                e = 0,
                f = "",
                g = this.host.width(),
                h = g,
                i = new Array,
                j = new Array,
                k = this.rowdetails && this.showrowdetailscolumn ? (1 + this.groups.length) * this.groupindentwidth : this.groups.length * this.groupindentwidth;
            if(a.each(this.columns.records, function(a, c) {
                    if(!this.hidden || !this.hideable)
                        if("auto" == this.width || this._width) f += this.text;
                        else if(this.width < this.minwidth && "auto" != this.minwidth) g -= this.minwidth;
                        else if(this.width > this.maxwidth && "auto" != this.maxwidth) g -= this.maxwidth;
                        else if(this.width.toString().indexOf("%") != -1) {
                            var c = 0,
                                d = "hidden" == b.vScrollBar[0].style.visibility ? 0 : b.scrollbarsize + 5;
                            d += k, c = parseFloat(this.width) * (h - d) / 100, c < this.minwidth && "auto" != this.minwidth && (c = this.minwidth), c > this.maxwidth && "auto" != this.maxwidth && (c = this.maxwidth), g -= c
                        } else "string" == typeof this.width && (this.width = parseInt(this.width)), g -= this.width;
                    this.pinned || this.grouped || this.checkboxcolumn ? (b._haspinned && (this.pinned = !0), i[i.length] = this) : j[j.length] = this
                }), this.rtl) {
                var l = 0;
                i.reverse();
                for(var m = this.columns.records.length - 1; m >= this.columns.records.length - i.length; m--) this.columns.replace(m, i[l++]);
                for(var n = 0; n < j.length; n++) this.columns.replace(n, j[n])
            } else {
                for(var m = 0; m < i.length; m++) this.columns.replace(m, i[m]);
                for(var n = 0; n < j.length; n++) this.columns.replace(i.length + n, j[n])
            }
            var o = this.headerZIndex,
                p = b.groupable ? b.groups.length : 0;
            this.rowdetails && this.showrowdetailscolumn && p++;
            var q = b.columnsheader.height();
            this.showfilterrow && (this.columngroups ? q -= this.filterrowheight : q = this.columnsheight), this.showeverpresentrow && "bottom" !== this.everpresentrowposition && (q -= this.everpresentrowheight);
            var r = this._gettableheight();
            if(this.virtualsizeinfo && this.virtualsizeinfo.virtualheight > r && !this.scrollbarautoshow)
                if(this.groupable && this.groups.length > 0)
                    if(this.dataview && this.dataview.loadedrootgroups && !this.groupsexpandedbydefault) {
                        var s = 0;
                        if(this.pageable) {
                            if(this.pageable)
                                for(var t = 0; t < this.dataview.rows.length; t++) this.dataview.rows[t].group && 0 === this.dataview.rows[t].level && (s += this.rowsheight)
                        } else var s = this.dataview.loadedrootgroups.length * this.rowsheight;
                        s > r && (g -= this.scrollbarsize + 5, h -= this.scrollbarsize + 5)
                    } else g -= this.scrollbarsize + 5, h -= this.scrollbarsize + 5;
                else !this.autoheight && this.scrollbarsize > 0 && (g -= this.scrollbarsize + 5, h -= this.scrollbarsize + 5);
            h -= k;
            var u = function(a, c) {
                    var d = b.columngroupslevel * b.columnsheight;
                    return d -= c.level * b.columnsheight
                },
                v = document.createDocumentFragment(),
                w = 0;
            if(a.each(this.columns.records, function(i, j) {
                    this.height = b.columnsheight, b.columngroups && b.columngroups.length && (this.height = u(this.datafield, this), q = this.height);
                    var k = b.toTP("jqx-grid-column-header") + " " + b.toTP("jqx-widget-header");
                    b.rtl && (k += " " + b.toTP("jqx-grid-column-header-rtl"));
                    var l = b.rtl ? 150 + o + 1 : 150 + o - 1,
                        m = b.rtl ? o++ : o--,
                        n = a('<div role="columnheader" style="z-index: ' + m + ';position: absolute; height: 100%;" class="' + k + '"><div style="height: 100%; width: 100%;"></div></div>');
                    b.columngroups && (n[0].style.height = q + "px", n[0].style.bottom = "0px", this.pinned && (n[0].style.zIndex = l)), this.uielement = n, "" != this.classname && this.classname && n.addClass(this.classname);
                    var r = this.width,
                        s = !1;
                    if(null === this.width && (this.width = "auto"), this.width.toString().indexOf("%") == -1 && void 0 == this._percentagewidth || (r = void 0 != this._percentagewidth ? parseFloat(this._percentagewidth) * h / 100 : parseFloat(this.width) * h / 100, s = !0), "auto" == this.width || this._width || s) {
                        if(s) r < this.minwidth && "auto" != this.minwidth && (r = this.minwidth), r > this.maxwidth && "auto" != this.maxwidth && (r = this.maxwidth), void 0 != this._percentagewidth && this.width.toString().indexOf("%") == -1 || (this._percentagewidth = this.width), n.width(r), this.width = r;
                        else if(!this.hidden) {
                            var t = Math.floor(g * (this.text.length / f.length));
                            w += t, g - w < 3 && g != w ? t += 2 : i == b.columns.records.length - 1 && w < g && (t += g - w), isNaN(t) && (t = this.minwidth), t < 0 && ($element = a("<span>" + this.text + "</span>"), a(document.body).append($element), t = 10 + $element.width(), $element.remove()), t < this.minwidth && (t = this.minwidth), t > this.maxwidth && (t = this.maxwidth), this._width = "auto", this.width = t, r = this.width, n.width(this.width)
                        }
                    } else r < this.minwidth && "auto" != this.minwidth && (r = this.minwidth, this.width = r), r > this.maxwidth && "auto" != this.maxwidth && (r = this.maxwidth, this.width = r), n[0].style.width = parseInt(r) + "px";
                    this.hidden && this.hideable && n.css("display", "none");
                // console.log(n);
                    var x = a(n.children()[0]),
                        y = b.rtl ? b.toTP("jqx-grid-column-menubutton") + " " + b.toTP("jqx-grid-column-menubutton-rtl") : b.toTP("jqx-grid-column-menubutton");
                    // console.log(this);
                    // console.log(this.filterable);

                    y += " " + b.toTP("jqx-icon-arrow-down");
                    var z = a('<div style="height: ' + q + 'px; display: none; left: 100%; top: 0%; position: absolute;"><div class="' + y + '" style="width: 100%; height:100%;"></div></div>');
                    b.enableanimations || z.css("margin-left", -16), b.rtl && z.css("left", "0px"), this.columnsmenu = z[0], c[0].cells[i] = n[0], z[0].style.width = parseInt(b.columnsmenuwidth) + "px";
                    var A = b.columnsmenu,
                        B = !1,
                        C = !1,
                        D = b.groupable && p > 0 && d < p || b.rowdetails && d < p;
                    if(b.rtl && (D = b.groupable && p > 0 && d < p || b.rowdetails && d < p, D &= i > b.columns.records.length - 1 - p), D) d++, A &= !1, this.sortable = !1, this.editable = !1, C = !0;
                    else {
                        var E = null != this.renderer ? this.renderer(this.text, this.align, q) : b._rendercolumnheader(this.text, this.align, q, b);
                        null == E && (E = b._rendercolumnheader(this.text, this.align, q, b)), null != this.renderer && (E = a(E)), A &= !0, B = !0
                    }
                    if(b.WinJS ? MSApp.execUnsafeLocalFunction(function() {
                            x.append(a(E))
                        }) : this.renderer ? x.append(a(E)) : E && (x[0].innerHTML = E), null != E) {
                        var F = a('<div class="iconscontainer" style="height: ' + q + 'px; margin-left: -32px; display: block; position: absolute; left: 100%; top: 0%; width: 32px;"><div class="filtericon ' + b.toTP("jqx-widget-header") + '" style="height: ' + q + 'px; float: right; display: none; width: 16px;"><div class="' + b.toTP("jqx-grid-column-filterbutton") + '" style="width: 100%; height:100%;"></div></div><div class="sortasc ' + b.toTP("jqx-widget-header") + '" style="height: ' + q + 'px; float: right; display: none; width: 16px;"><div class="' + b.toTP("jqx-grid-column-sortascbutton") + " " + b.toTP("jqx-icon-arrow-up") + '" style="width: 100%; height:100%;"></div></div><div class="sortdesc ' + b.toTP("jqx-widget-header") + '" style="height: ' + q + 'px; float: right; display: none; width: 16px;"><div class="' + b.toTP("jqx-grid-column-sortdescbutton") + " " + b.toTP("jqx-icon-arrow-down") + '" style="width: 100%; height:100%;"></div></div></div>');
                        z.addClass(b.toTP("jqx-widget-header")), x.append(F);
                        var G = F.children();
                        this.sortasc = G[1], this.sortdesc = G[2], this.filtericon = G[0], this.iconscontainer = F, b.rtl && (F.css("margin-left", "0px"), F.css("left", "0px"), a(this.sortasc).css("float", "left"), a(this.filtericon).css("float", "left"), a(this.sortdesc).css("float", "left")), !b.autoshowfiltericon && this.filterable && a(this.filtericon).css("display", "block")
                    }
                    if(this.element = n[0], A && (b._handlecolumnsmenu(b, x, n, z, this), this.menu || z.hide()), v.appendChild(n[0]), b.groupable && B) {
                        if(n[0].id = b.dataview.generatekey(), !b._handlecolumnstogroupsdragdrop) throw new Error("jqxGrid: Missing reference to jqxgrid.grouping.js.");
                        b._handlecolumnstogroupsdragdrop(this, n)
                    }
                    b.columnsreorder && this.draggable && b._handlecolumnsdragreorder && b._handlecolumnsdragreorder(this, n);
                    var H = this;
                    if(b.addHandler(n, "click", function(a) {
                            if(H.checkboxcolumn) return !0;
                            if(b.sorttogglestates > 0 && b._togglesort && !b._loading) {
                                if(b.suspendClick) return !0;
                                b._togglesort(H)
                            }
                            a.preventDefault(), b._raiseEvent(7, {
                                column: H.getcolumnproperties(),
                                datafield: H.datafield,
                                originalEvent: a
                            })
                        }), H.resizable && b.columnsresize && !C) {
                        var I = !1,
                            J = "mousemove";
                        b.isTouchDevice() && b.touchmode !== !0 && (I = !0, J = a.jqx.mobile.getTouchEventName("touchstart")), b.addHandler(n, J, function(c) {
                            var d = parseInt(c.pageX),
                                e = 5,
                                f = parseInt(n.coord().left);
                            if(b.hasTransform && (f = a.jqx.utilities.getOffset(n).left), b.resizing) return !0;
                            if(b._handlecolumnsresize) {
                                if(I) {
                                    var g = b.getTouches(c),
                                        h = g[0];
                                    return d = h.pageX, e = 40, d >= f + H.width - e ? (b.resizablecolumn = {
                                        columnelement: n,
                                        column: H
                                    }, n.css("cursor", "col-resize")) : (n.css("cursor", ""), b.resizablecolumn = null), !0
                                }
                                var i = H.width;
                                if(b.rtl && (i = 0), d >= f + i - e) {
                                    if(d <= f + i + e) return b.resizablecolumn = {
                                        columnelement: n,
                                        column: H
                                    }, n.css("cursor", "col-resize"), !1;
                                    n.css("cursor", ""), b.resizablecolumn = null
                                } else n.css("cursor", ""), d < f + i - e && (H._animating || H._menuvisible || n.mouseenter()), b.resizablecolumn = null
                            }
                        })
                    }
                    if(n.css("left", e), this.hidden && this.hideable || (e += r), H.rendered) {
                        var K = H.rendered(a(x[0].firstChild), H.align, q);
                        K && null != F && F.hide()
                    }
                    if(H.checkboxcolumn) {
                        if(F && F.hide(), !b.host.jqxCheckBox) throw new Error("jqxGrid: Missing reference to jqxcheckbox.js");
                        x.html('<div style="cursor: pointer; margin-left: 5px; top: 50%; margin-top: -8px; position: relative;"></div>');
                        var L = x.find("div:first");
                        L.jqxCheckBox({
                            _canFocus: !1,
                            disabled: b.disabled,
                            disabledContainer: !0,
                            theme: b.theme,
                            enableContainerClick: !1,
                            width: 16,
                            height: 16,
                            animationShowDelay: 0,
                            animationHideDelay: 0
                        }), H.checkboxelement = L;
                        var M = L.data().jqxCheckBox.instance;
                        b._checkboxcolumn = H,
                            M.updated = function(a, c, d) {
                            b._checkboxcolumnupdating = !0, b.disabled && (L.jqxCheckBox({
                                disabled: b.disabled
                            }), c = d), c ? b.selectallrows() : b.unselectallrows(), b._checkboxcolumnupdating = !1
                                // console.log(c);
                        }
                    }
                    // console.log(n);
                    // console.log(this.datafield);

                    if(!this.filterhide && !this.sortable){
                        // console.log(n)
                        // console.log(n.children())
                        // console.log(n.children().children()[0])
                        // // n.children()
                         n.children().html(n.children().children()[0]);
                    }
                }), e > 0 ? this.columnsheader.width(2 + e) : this.columnsheader.width(e), c[0].appendChild(v), this.columnsrow = c, b.columnsheader.append(c), this.showfilterrow && this._updatefilterrow) {
                if(this.columngroups ? c.height(this.columngroupslevel * this.columnsheight) : c.height(this.columnsheight), !this.filterrow) {
                    var x = a("<div style='position: relative !important; '></div>");
                    x[0].id = "filterrow." + this.element.id, x.height(this.filterrowheight), this.filterrow = x
                }
                this.filterrow.width(2 + e), this.columnsheader.append(this.filterrow), this._updatefilterrow()
            }
            if(this.showeverpresentrow && "bottom" !== this.everpresentrowposition) {
                if(this.columngroups ? c.height(this.columngroupslevel * this.columnsheight) : c.height(this.columnsheight), !this.addnewrowtop) {
                    var y = a("<div style='position: relative !important; z-index:" + this.headerZIndex + ";'></div>");
                    y[0].id = "addnewrowtop." + this.element.id, y.height(this.everpresentrowheight), this.addnewrowtop = y
                }
                this.addnewrowtop.width(2 + e), "topAboveFilterRow" == this.everpresentrowposition && this.filterrow ? this.addnewrowtop.insertBefore(this.filterrow) : this.columnsheader.append(this.addnewrowtop), this._updateaddnewrow()
            } else if(this.showeverpresentrow && "bottom" === this.everpresentrowposition) {
                if(!this.addnewrowbottom) {
                    var z = a("<div style='position: relative !important; z-index:" + this.headerZIndex + ";'></div>");
                    z[0].id = "addnewrowbottom." + this.element.id, z.height(this.everpresentrowheight), this.addnewrowbottom = z
                }
                this.addnewrowbottom.width(2 + e), this.addnewrow.append(this.addnewrowbottom), this._updateaddnewrow()
            }
            0 == e ? c[0].style.visibility = "hidden" : c[0].style.visibility = "inherit", c.width(e), this._handlecolumnsdragdrop && this._handlecolumnsdragdrop(), this._handlecolumnsreorder && this._handlecolumnsreorder(), this._rendersortcolumn && this._rendersortcolumn(), this._renderfiltercolumn && this._renderfiltercolumn(), this._handlecolumnsresize && this._handlecolumnsresize(), this.columngroups && this._rendercolumngroups(), this._updatecheckboxselection && this._updatecheckboxselection()
        },
        _rendercolumngroups: function() {
            if(this.columngroups) {
                for(var b = 0, c = 0; c < this.columns.records.length; c++) this.columns.records[c].pinned && b++;
                var d = this.headerZIndex - b + this.columns.records.length,
                    e = this.that,
                    f = e.toTP("jqx-grid-column-header") + " " + e.toTP("jqx-grid-columngroup-header") + " " + e.toTP("jqx-widget-header");
                e.rtl && (f += " " + e.toTP("jqx-grid-columngroup-header-rtl"));
                var g = this.columnsheader.find("#columntable" + this.element.id);
                g.find("jqx-grid-columngroup-header").remove();
                for(var h = 0; h < this.columngroupslevel - 1; h++)
                    for(var c = 0; c < this.columngroups.length; c++) {
                        var i = this.columngroups[c],
                            j = i.level;
                        if(j === h) {
                            var k = j * this.columnsheight,
                                l = 99999;
                            if(i.groups) {
                                var m = function(a) {
                                    for(var b = 0, c = 0; c < a.groups.length; c++) {
                                        var d = a.groups[c];
                                        d.groups ? b += m(d) : d.hidden || (b += d.width, l = Math.min(parseFloat(d.element.style.left), l))
                                    }
                                    return b
                                };
                                i.width = m(i), i.left = l;
                                var n = this.columnsheight,
                                    o = d--,
                                    p = a('<div role="columnheader" style="z-index: ' + o + ';position: absolute;" class="' + f + '"></div>'),
                                    q = a(this._rendercolumnheader(i.text, i.align, this.columnsheight, this));
                                if(i.renderer) {
                                    var q = a("<div style='height: 100%; width: 100%;'></div>"),
                                        r = i.renderer(i.text, i.align, n);
                                    q.html(r)
                                }
                                p.append(q), p[0].style.left = l + "px", 0 === l && (p[0].style.borderLeftColor = "transparent"), p[0].style.top = k + "px", p[0].style.height = n + "px", p[0].style.width = -1 + i.width + "px", g.append(p), i.element = p, i.rendered && i.rendered(q, i.align, n)
                            }
                        }
                    }
            }
        },
        _resizecolumngroups: function() {
            if(this.columngroups)
                for(var a = 0; a < this.columngroups.length; a++) {
                    var b = this.columngroups[a],
                        c = b.level,
                        d = c * this.columnsheight,
                        e = 99999;
                    if(b.groups) {
                        var f = function(a) {
                            for(var b = 0, c = 0; c < a.groups.length; c++) {
                                var d = a.groups[c];
                                d.groups ? b += f(d) : d.hidden || (b += d.width, e = Math.min(parseFloat(d.element.style.left), e))
                            }
                            return b
                        };
                        b.width = f(b), b.left = e;
                        var g = this.columnsheight,
                            h = b.element;
                        h[0].style.left = e + "px", h[0].style.top = d + "px", h[0].style.height = g + "px", h[0].style.width = -1 + b.width + "px"
                    }
                }
        },
        _handlecolumnsmenu: function(b, c, d, e, f) {
            b.dragmousedown = null, e[0].id = b.dataview.generatekey(), c.append(e), d[0].columnsmenu = e[0], f.element = d[0];
            var g = this.columnsmenuwidth + 1,
                h = function() {
                    if(!f.menu) return !1;
                    if(!b.resizing) {
                        if(f._menuvisible && b._hasOpenedMenu) return !1;
                        if(f._animating = !0, b.menuitemsarray && b.menuitemsarray.length > 0)
                            if(b.enableanimations) {
                                e.css("display", "block"), e.stop(), f.iconscontainer.stop(), b.rtl ? (e.css("margin-left", -g), e.animate({
                                    "margin-left": "0px"
                                }, "fast", function() {
                                    e.css("display", "block"), f._animating = !1, f._menuvisible = !0
                                })) : (e.css("margin-left", "0px"), e.animate({
                                    "margin-left": -g
                                }, "fast", function() {
                                    e.css("display", "block"), f._animating = !1, f._menuvisible = !0
                                }));
                                var a = b.rtl ? g : -(32 + g);
                                f.iconscontainer.animate({
                                    "margin-left": a
                                }, "fast")
                            } else {
                                e.css("display", "block");
                                var a = b.rtl ? 16 : -48;
                                f.iconscontainer.css("margin-left", a + "px"), f._animating = !1, f._menuvisible = !0
                            }
                    }
                },
                i = "mouseenter";
            if(b.isTouchDevice() && (i = "touchstart"), b.addHandler(d, i, function(c) {
                    var e = parseInt(c.pageX),
                        g = b.columnsresize && f.resizable ? 3 : 0,
                        i = parseInt(d.coord().left);
                    b.hasTransform && (i = a.jqx.utilities.getOffset(d).left);
                    var j = f.width;
                    if(b.rtl && (j = 0), 0 != g && e >= i + j - g && e <= i + j + g) return !1;
                    var k = b.vScrollInstance.isScrolling();
                    f.menu && b.autoshowcolumnsmenubutton && !k && !b.disabled && h()
                }), !b.autoshowcolumnsmenubutton) {
                e.css("display", "block");
                var j = b.rtl ? 16 : -48;
                f.iconscontainer.css("margin-left", j + "px"), b.rtl ? e.css({
                    "margin-left": "0px"
                }) : e.css({
                    "margin-left": -g
                })
            }
            b.addHandler(d, "mouseleave", function(c) {
                if(b.menuitemsarray && b.menuitemsarray.length > 0 && f.menu) {
                    var d = a.data(document.body, "contextmenu" + b.element.id);
                    if(void 0 != d && e[0].id == d.columnsmenu.id) return;
                    if(b.autoshowcolumnsmenubutton)
                        if(b.enableanimations) {
                            b.rtl ? e.css("margin-left", "0px") : e.css("margin-left", -g), e.stop(), f.iconscontainer.stop(), b.rtl ? e.animate({
                                "margin-left": -g
                            }, "fast", function() {
                                e.css("display", "none"), f._menuvisible = !1
                            }) : e.animate({
                                "margin-left": 0
                            }, "fast", function() {
                                e.css("display", "none"), f._menuvisible = !1
                            });
                            var h = b.rtl ? 0 : -32;
                            f.iconscontainer.animate({
                                "margin-left": h
                            }, "fast")
                        } else {
                            e.css("display", "none");
                            var h = b.rtl ? 0 : -32;
                            f.iconscontainer.css("margin-left", h + "px"), f._menuvisible = !1
                        }
                }
            });
            var k = !0,
                l = "",
                m = a(f.filtericon);
            b.addHandler(e, "mousedown", function(c) {
                b.gridmenu || b._initmenu(), k = !a.data(b.gridmenu[0], "contextMenuOpened" + b.gridmenu[0].id), l = a.data(document.body, "contextmenu" + b.element.id), null != l && (l = l.column.datafield)
            }), b.addHandler(m, "mousedown", function(c) {
                b.gridmenu || b._initmenu(), k = !a.data(b.gridmenu[0], "contextMenuOpened" + b.gridmenu[0].id), l = a.data(document.body, "contextmenu" + b.element.id), null != l && (l = l.column.datafield)
            });
            var n = function() {
                if(!f.menu) return !1;
                if(b.gridmenu || b._initmenu(), b.disabled) return !1;
                for(var c = 0; c < b.columns.records.length; c++) b.columns.records[c].datafield != f.datafield && (b.columns.records[c]._menuvisible = !1);
                var d = e.coord(!0),
                    g = e.height();
                if(!k && (k = !0, l == f.datafield)) return b._closemenu(), !1;
                var h = b.host.coord(!0);
                b.hasTransform && (h = a.jqx.utilities.getOffset(b.host), d = a.jqx.utilities.getOffset(e)), h.left + b.host.width() > parseInt(d.left) + b.gridmenu.width() ? b.gridmenu.jqxMenu("open", d.left, d.top + g) : b.gridmenu.jqxMenu("open", e.width() + d.left - b.gridmenu.width(), d.top + g), b.gridmenu.width() < 100 && b._arrangemenu(), b._hasOpenedMenu = !0;
                var i = b._getmenuitembyindex(0),
                    j = b._getmenuitembyindex(1),
                    m = b._getmenuitembyindex(2),
                    n = b._getmenuitembyindex(3),
                    o = b._getmenuitembyindex(4),
                    p = b._getmenuitembyindex(5);
                if(null != i && null != j && null != m) {
                    var q = f.sortable && b.sortable;
                    if(b.gridmenu.jqxMenu("disable", i.id, !q), b.gridmenu.jqxMenu("disable", j.id, !q), b.gridmenu.jqxMenu("disable", m.id, !q), void 0 != f.displayfield)
                        if(b.sortcolumn == f.displayfield) {
                            var r = b.getsortinformation();
                            q && (r.sortdirection.ascending ? b.gridmenu.jqxMenu("disable", i.id, !0) : b.gridmenu.jqxMenu("disable", j.id, !0))
                        } else b.gridmenu.jqxMenu("disable", m.id, !0)
                }
                if(null != n && null != o && (b.groupable && f.groupable ? b.groups && b.groups.indexOf(f.datafield) != -1 ? (b.gridmenu.jqxMenu("disable", n.id, !0), b.gridmenu.jqxMenu("disable", o.id, !1)) : (b.gridmenu.jqxMenu("disable", n.id, !1), b.gridmenu.jqxMenu("disable", o.id, !0)) : (b.gridmenu.jqxMenu("disable", o.id, !0), b.gridmenu.jqxMenu("disable", n.id, !0))), null != p) {
                    b.menuOwner = f, b._updatefilterpanel(b, p, f);
                    var s = 0;
                    b.sortable && b._togglesort && b.showsortmenuitems && (s += 3), b.groupable && b.addgroup && b.showgroupmenuitems && (s += 2);
                    var t = 33 * s + 6,
                        u = b._measureMenuElement(),
                        t = s * u + 14;
                    a.jqx.browser.msie && a.jqx.browser.version < 8 && (t += 20, a(p).height(190)), b.isTouchDevice() && (t += 10), b.filterable && b.showfiltermenuitems && (f.filterable ? (b.gridmenu.height(t + 190), a(p).css("display", "block")) : (b.gridmenu.height(t), a(p).css("display", "none")))
                }
                if(b.columnmenuopening) {
                    var v = b.columnmenuopening(b.gridmenu, f.displayfield, b.gridmenu.height());
                    !1 === v && b._closemenu()
                }
                a.data(document.body, "contextmenu" + b.element.id, {
                    column: f,
                    columnsmenu: e[0]
                })
            };
            b.addHandler(m, "click", function(a) {
                return !!f.menu && (b.showfilterrow || ("block" != e[0].style.display && d.trigger("mouseenter"), setTimeout(function() {
                        "block" != e[0].style.display && d.trigger("mouseenter"), n()
                    }, 200)), !1)
            }), b.addHandler(e, "click", function(a) {
                return !!f.menu && (n(), !1)
            }), b.isTouchDevice() && b.addHandler(e, a.jqx.mobile.getTouchEventName("touchstart"), function(a) {
                return !!f.menu && (b._hasOpenedMenu ? b._closemenu() : n(), !1)
            })
        },
        _removecolumnhandlers: function(b) {
            var c = this.that,
                d = a(b.element);
            if(d.length > 0) {
                c.removeHandler(d, "mouseenter"), c.removeHandler(d, "mouseleave");
                var e = a(b.filtericon);
                if(c.removeHandler(e, "mousedown"), c.removeHandler(e, "click"), c.removeHandler(d, "click"), c.removeHandler(d, "mousemove"), c.columnsreorder && (c.removeHandler(d, "mousedown.drag"), c.removeHandler(d, "mousemove.drag")), c.removeHandler(d, "dragstart"), d[0].columnsmenu) {
                    var f = a(d[0].columnsmenu);
                    c.removeHandler(f, "click"), c.removeHandler(f, "mousedown"), c.removeHandler(f, a.jqx.mobile.getTouchEventName("touchstart"))
                }
            }
        },
        _rendercolumnheader: function(a, b, c, d) {
            var e = "7px";
            if(d.columngroups ? (e = c / 2 - this._columnheight / 2, e < 0 && (e = 6), e += "px") : 30 != this.columnsheight && (e = this.columnsheight / 2 - this._columnheight / 2, e < 0 && (e = 6), e += "px"), this.enableellipsis) return "left" == b ? '<div style="padding-bottom: 2px; overflow: hidden; text-overflow: ellipsis; text-align: ' + b + "; margin-left: 4px; margin-right: 2px; margin-bottom: " + e + "; margin-top: " + e + ';"><span style="text-overflow: ellipsis; cursor: default;">' + a + "</span></div>" : '<div style="padding-bottom: 2px; overflow: hidden; text-overflow: ellipsis; text-align: ' + b + "; margin-left: 2px; margin-right: 4px; margin-bottom: " + e + "; margin-top: " + e + ';"><span style="text-overflow: ellipsis; cursor: default;">' + a + "</span></div>";
            if("center" == b || "middle" == b) return '<div style="padding-bottom: 2px; text-align: center; margin-top: ' + e + ';"><a href="#">' + a + "</a></div>";
            var f = '<a style="margin-top: ' + e + "; float: " + b + ';" href="#">' + a + "</a>";
            return f
        },
        _renderrows: function(b, c, d) {
            var e = this.that;
            if((this.pageable || this.groupable) && (this.autoheight || this.autorowheight) && null != this.table && null != this.table[0].rows && this.table[0].rows.length < this.dataview.rows.length && (e.prerenderrequired = !0), !this.pageable && (this.autoheight || this.autorowheight) && (this.virtualmode || this.unboundmode)) {
                var f = this.source.totalrecords;
                isNaN(f) || null != this.table && null != this.table[0].rows && this.table[0].rows.length != f && (e.prerenderrequired = !0)
            }!this.autoheight && !this.autorowheight || e.prerenderrequired || this.table && this.table[0].rows && (this.table[0].rows.length < this.dataview.records.length && (this.pageable && this.table[0].rows.length < this.dataview.pagesize ? e.prerenderrequired = !0 : this.pageable || (e.prerenderrequired = !0)), this.table[0].rows.length < this.dataview.cachedrecords.length && (this.pageable && this.table[0].rows.length < this.dataview.pagesize ? e.prerenderrequired = !0 : this.pageable || (e.prerenderrequired = !0))), e._prerenderrows(b), e._requiresupdate && (e._requiresupdate = !1, e._updatepageviews());
            var g = function() {
                    e._loading || (e.WinJS ? MSApp.execUnsafeLocalFunction(function() {
                        e._rendervisualrows()
                    }) : e._rendervisualrows(), e.virtualmode && e.showaggregates && e._updateaggregates && e.refreshaggregates())
                },
                h = a.jqx.browser.msie && a.jqx.browser.version < 10;
            if(this.virtualmode) {
                var i = function() {
                    if(e.rendergridrows) {
                        var a = e._startboundindex;
                        void 0 == a && (a = 0);
                        var b = a + 1 + e.dataview.pagesize;
                        if(null != a && null != b) {
                            var d = !!e.source._source,
                                f = d ? e.source._source.recordstartindex : e.source.recordstartindex;
                            if(f != a || 1 == c) {
                                if(d) {
                                    if(b >= e.source._source.totalrecords && (b = e.source._source.totalrecords, a = b - e.dataview.pagesize - 1, a < 0 && (a = 0), e.source._source.recordendindex == b && e.source._source.recordstartindex == a)) return;
                                    e.source._source.recordstartindex = a, e.source._source.recordendindex = b
                                } else e.source.recordstartindex = a, e.source.recordendindex = b;
                                e.updatebounddata("cells")
                            }
                        }
                    }
                };
                this.loadondemand && (g(), i(), this.loadondemand = !1);
                var j = void 0 == this._browser ? this._isIE10() : this._browser;
                this.editable && this.editcell && !this.vScrollInstance.isScrolling() && !this.hScrollInstance.isScrolling() ? g() : this.autoheight ? g() : j || h || navigator && navigator.userAgent.indexOf("Safari") != -1 ? (null != this._scrolltimer && clearTimeout(this._scrolltimer), this._scrolltimer = setTimeout(function() {
                    g()
                }, 5)) : g()
            } else {
                if("deferred" == this.scrollmode && (this.hScrollInstance.isScrolling() || this.vScrollInstance.isScrolling())) {
                    null != this._scrolltimer && clearInterval(this._scrolltimer);
                    var k = this._getfirstvisualrow();
                    if(null != k) {
                        var l = function(b) {
                                if(null == k) return "";
                                var c = "<table>",
                                    d = e.deferreddatafields;
                                null == d && e.columns.records.length > 0 && (d = new Array, d.push(e.columns.records[0].displayfield));
                                for(var f = 0; f < d.length; f++) {
                                    var g = d[f],
                                        h = e._getcolumnbydatafield(g);
                                    if(h) {
                                        var i = e._getcellvalue(h, k);
                                        "" != h.cellsformat && a.jqx.dataFormat && (a.jqx.dataFormat.isDate(i) ? i = a.jqx.dataFormat.formatdate(i, h.cellsformat, e.gridlocalization) : a.jqx.dataFormat.isNumber(i) && (i = a.jqx.dataFormat.formatnumber(i, h.cellsformat, e.gridlocalization))), c += "<tr><td>" + i + "</td></tr>"
                                    }
                                }
                                return c += "</table>"
                            },
                            m = this.scrollfeedback ? this.scrollfeedback(k.bounddata) : l(k.bounddata);
                        m != this._scrollelementcontent && (this._scrollelement[0].innerHTML = m, this._scrollelementcontent = m)
                    }
                    return this._scrollelement.css("visibility", "visible"), this._scrollelementoverlay.css("visibility", "visible"), this._scrollelement.css("margin-top", -this._scrollelement.height() / 2), void(this._scrolltimer = setInterval(function() {
                        e.hScrollInstance.isScrolling() || e.vScrollInstance.isScrolling() || (g(), e._scrollelement.css("visibility", "hidden"), e._scrollelementoverlay.css("visibility", "hidden"), clearInterval(e._scrolltimer), k && e.ensurerowvisible(k.visibleindex))
                    }, 100))
                }
                navigator && navigator.userAgent.indexOf("Chrome") == -1 && navigator.userAgent.indexOf("Safari") != -1 && (this._updatedelay = 1), void 0 != this.touchDevice && 1 == this.touchDevice && (this._updatedelay = 5);
                var j = void 0 == this._browser ? this._isIE10() : this._browser;
                if((j || h) && (this._updatedelay = 5), j && this.hScrollInstance.isScrolling()) return void g();
                a.jqx.browser.mozilla && 0 == this._updatedelay && (this.vScrollInstance.isScrolling() || this.hScrollInstance.isScrolling()) && (this._updatedelay = 0);
                var n = this.isTouchDevice();
                if(n && (this._updatedelay = 0), null != this.updatedelay && (this._updatedelay = this.updatedelay), 0 == this._updatedelay) g();
                else {
                    var o = this._jqxgridrendertimer;
                    null != o && clearTimeout(o), this.vScrollInstance.isScrolling() || this.hScrollInstance.isScrolling() ? (this._updatedelay ? o = setTimeout(function() {
                        g()
                    }, this._updatedelay) : (o = null, g()), this._jqxgridrendertimer = o) : (this._jqxgridrendertimer = o, g())
                }
            }
            if(e.autorowheight && !e.autoheight && this._pageviews.length > 0) {
                var p = this._gettableheight(),
                    q = this._pageviews[0].height;
                if(q > p)
                    if(this.pageable && this.gotopage && (q = this._pageviews[0].height, q < 0 && (q = this._pageviews[0].height)), "visible" != this.vScrollBar.css("visibility") && this.vScrollBar.css("visibility", "visible"), (q <= p || this.autoheight) && this.vScrollBar.css("visibility", "hidden"), q - p > 0) {
                        if("deferred" != this.scrollmode) {
                            var r = q - p,
                                s = this.vScrollInstance.max;
                            if(this.vScrollBar.jqxScrollBar({
                                    max: r
                                }), Math.round(r) != Math.round(s)) {
                                var t = this.vScrollBar.jqxScrollBar("value");
                                t > r && this.vScrollBar.jqxScrollBar({
                                    value: 0
                                })
                            }
                        }
                    } else this.vScrollBar.jqxScrollBar({
                        value: 0,
                        max: q
                    });
                else this._loading || this.vScrollBar.css("visibility", "hidden"), this.vScrollBar.jqxScrollBar({
                    value: 0
                });
                this._arrange(), this.virtualsizeinfo && (this.virtualsizeinfo.virtualheight = q)
            }
        },
        scrolling: function() {
            var a = this.vScrollInstance.isScrolling(),
                b = this.hScrollInstance.isScrolling();
            return {
                vertical: a,
                horizontal: b
            }
        },
        _renderhorizontalscroll: function() {
            var a = this.hScrollInstance,
                b = a.value;
            "hidden" === this.hScrollBar.css("visibility") && (a.value = 0, b = 0);
            var c = parseInt(b);
            if(null != this.table) {
                var d = this.table[0].rows.length,
                    e = this.columnsrow,
                    f = this.groupable && this.groups.length > 0 ? this.groups.length : 0,
                    g = this.columns.records.length - f,
                    h = this.columns.records,
                    i = 0 == this.dataview.rows.length;
                if(this.rtl && "hidden" != this.hScrollBar.css("visibility") && (c = a.max - c), i && !this._haspinned) {
                    for(var j = 0; j < d; j++)
                        for(var k = this.table[0].rows[j], l = 0; l < f + g; l++) {
                            var m = k.cells[l];
                            if(void 0 != m) {
                                var n = h[l];
                                if(n.pinned && (m.style.marginLeft = c + "px", 0 == j)) {
                                    var o = e[0].cells[l];
                                    o.style.marginLeft = c + "px"
                                }
                            }
                        }
                    this.table[0].style.marginLeft = -c + "px", e[0].style.marginLeft = -c + "px"
                } else if(this._haspinned || void 0 == this._haspinned) {
                    for(var j = 0; j < d; j++)
                        for(var k = this.table[0].rows[j], l = 0; l < f + g; l++) {
                            var m = k.cells[l];
                            if(void 0 != m) {
                                var n = h[l];
                                if(n.pinned) {
                                    if(0 == c && "" == m.style.marginLeft) continue;
                                    var p = null,
                                        q = null,
                                        r = null;
                                    if(this.showeverpresentrow && this.addnewrowtop && this.addnewrowtop[0].cells && (r = this.addnewrowtop[0].cells[l]), this.showfilterrow && this.filterrow && this.filterrow[0].cells && (q = this.filterrow[0].cells[l]), this.showaggregates && this.statusbar[0].cells && (p = this.statusbar[0].cells[l]), this.rtl) {
                                        if(m.style.marginLeft = -parseInt(b) + "px", 0 == j) {
                                            var o = e[0].cells[l];
                                            o.style.marginLeft = -parseInt(b) + "px", p && (p.style.marginLeft = -parseInt(b) + "px"), q && (q.style.marginLeft = -parseInt(b) + "px"), r && (r.style.marginLeft = -parseInt(b) + "px")
                                        }
                                    } else if(m.style.marginLeft = c + "px", 0 == j) {
                                        var o = e[0].cells[l];
                                        o.style.marginLeft = c + "px", p && (p.style.marginLeft = c + "px"), q && (q.style.marginLeft = c + "px"), r && (r.style.marginLeft = c + "px")
                                    }
                                }
                            }
                        }
                    this.table[0].style.marginLeft = -c + "px", e[0].style.marginLeft = -c + "px"
                } else 0 == this._haspinned && (this.table[0].style.marginLeft = -c + "px", e[0].style.marginLeft = -c + "px");
                if(this.showaggregates && this.statusbar[0].cells) {
                    var s = 0;
                    this.rtl && "hidden" != this.vScrollBar.css("visibility") && "hidden" != this.hScrollBar.css("visibility") && (s = 2 + parseInt(this.hScrollBar.css("left"))), this.statusbar[0].style.marginLeft = -c + s + "px"
                }
                this.showfilterrow && this.filterrow && this.filterrow[0].cells && (this.filterrow[0].style.marginLeft = -c + "px"), this.showeverpresentrow && this.addnewrowtop && this.addnewrowtop[0].cells && (this.addnewrowtop[0].style.marginLeft = -c + "px")
            }
        },
        _updaterowdetailsvisibility: function() {
            if(this.rowdetails)
                for(var b = 0; b < this._rowdetailselementscache.length; b++) a(this._rowdetailselementscache[b]).css("display", "none")
        },
        _getvisualcolumnsindexes: function(a, b, c, d, e, f) {
            if(this.rowdetails || this.rtl || this.editcell || this.width && this.width.toString().indexOf("%") >= 0 || this.exporting) return {
                start: 0,
                end: c + d
            };
            var g = 0,
                h = -1,
                i = c + d,
                j = !1;
            if(this.autorowheight) return {
                start: 0,
                end: c + d
            };
            if(!e)
                for(var k = 0; k < c + d; k++) {
                    if(j || this.columns.records[k].pinned && f && (j = !0), this.columns.records[k].hidden || (g += this.columns.records[k].width), g >= a && h == -1 && (h = k), g > b + a) {
                        i = k;
                        break
                    }
                }
            return i++, i > c + d && (i = c + d), (h == -1 || j) && (h = 0), {
                start: h,
                end: i
            }
        },
        _getvirtualcolumnsindexes: function(a, b, c, d, e) {
            if(this.rtl || this.editcell || this.exporting) return {
                start: 0,
                end: c + d
            };
            var f = 0,
                g = -1,
                h = c + d;
            if(this.autorowheight) return {
                start: 0,
                end: c + d
            };
            if(!e)
                for(var i = 0; i < c + d; i++) {
                    if(this.columns.records[i].hidden || (f += this.columns.records[i].width), f >= a && g == -1 && (g = i), f > b + a) {
                        h = i;
                        break
                    }
                }
            return h++, h > c + d && (h = c + d), g == -1 && (g = 0), {
                start: g,
                end: h
            }
        },
        _getfirstvisualrow: function() {
            var a = this.vScrollInstance,
                b = a.value,
                c = parseInt(b);
            if(0 == this._pagescache.length && (this.dataview.updateview(), this._loadrows()), "visible" != this.vScrollBar[0].style.visibility && (c = 0), !this.pageable) {
                var d = this._findvisiblerow(c, this._pageviews);
                if(d == -1) return null;
                d != this.dataview.pagenum ? (this.dataview.pagenum = d, this.dataview.updateview(), this._loadrows()) : this._pagescache[this.dataview.pagenum] || this._loadrows()
            }
            var e = this._findvisiblerow(c, this._pagescache[this.dataview.pagenum]),
                f = this._pagescache[this.dataview.pagenum];
            if(f && f[0]) return f[e]
        },
        _rendervisualrows: function() {
            if(this.virtualsizeinfo) {
                var b = this.vScrollInstance,
                    c = this.hScrollInstance,
                    d = b.value,
                    e = c.value,
                    f = parseInt(d),
                    g = parseInt(e),
                    h = this._gettableheight(),
                    i = void 0 != this._hostwidth ? this._hostwidth : this.host.width();
                "visible" == this.hScrollBar[0].style.visibility && (h += 29), "deferred" == this.scrollmode && 0 != this._newmax && f > this._newmax && null != this._newmax && (f = this._newmax);
                var j = b.isScrolling() || c.isScrolling() || this._keydown,
                    k = this.groupable && this.groups.length > 0;
                if(this.visiblerows = new Array, this.hittestinfo = new Array, this.editcell && void 0 == this.editrow && this._hidecelleditor(!1), void 0 != this.editrow && this._hideeditors(), this.virtualmode && !this.pageable && (this._pagescache = new Array), 0 == this._pagescache.length && (this.dataview.updateview(), this._loadrows()), "hidden" == this.vScrollBar[0].style.visibility && (f = 0), !this.pageable) {
                    var l = this._findvisiblerow(f, this._pageviews);
                    if(l == -1) return this._clearvisualrows(), this._renderemptyrow(), void this._updaterowdetailsvisibility();
                    l != this.dataview.pagenum ? (this.dataview.pagenum = l, this.dataview.updateview(), this._loadrows()) : this._pagescache[this.dataview.pagenum] || this._loadrows()
                }
                var m = this.groupable && this.groups.length > 0 ? this.groups.length : 0;
                if(this.columns.records) {
                    var n = this.columns.records.length - m,
                        o = this._findvisiblerow(f, this._pagescache[this.dataview.pagenum]),
                        p = this._pagescache[this.dataview.pagenum],
                        q = o;
                    q < 0 && (q = 0);
                    var r = 0,
                        s = 0,
                        t = 0,
                        u = 0,
                        v = this.virtualsizeinfo.visiblerecords,
                        w = this.groupable ? this.groups.length : 0,
                        x = this.toTP("jqx-grid-cell") + " " + this.toTP("jqx-item");
                    this.rtl && (x += " " + this.toTP("jqx-grid-cell-rtl")), (this.autoheight || this.autorowheight) && this.pageable && (!this.groupable || this.groupable && 0 === this.groups.length) && (v = this.dataview.pagesize), k && (x = " " + this.toTP("jqx-grid-group-cell")), this.isTouchDevice() && (x += " " + this.toTP("jqx-touch")), this.autorowheight && (x += " jqx-grid-cell-wrap");
                    var y = this.rowsheight,
                        z = this._rendercell,
                        A = !0,
                        B = this._getvisualcolumnsindexes(g, i, m, n, k, !0),
                        C = B.start,
                        D = B.end,
                        E = this._getvirtualcolumnsindexes(g, i, m, n, k),
                        F = E.start,
                        G = E.end;
                    a.jqx.browser.msie && a.jqx.browser.version < 9;
                    if((this.autoheight || this.pageable) && this.autorowheight && this._pageviews[0] && (this._oldpageviewheight = this._pageviews[0].height), this.autorowheight && (q = 0), q >= 0) {
                        this._updaterowdetailsvisibility(), this._startboundindex = null != p ? p[q].bounddata.boundindex : 0, this._startvisibleindex = null != p ? p[q].bounddata.visibleindex : 0;
                        var H = this.table[0].rows;
                        if(this.columns.records.length > 10 && this.enablecolumnsvirtualization)
                            for(var I = function(a) {
                                return !(!a.parentNode || "#document-fragment" == a.parentNode.nodeName)
                            }, J = 0; J < H.length; J++) {
                                for(var K = H[J], L = 0; L < F; L++) {
                                    var M = L;
                                    if(!this.columns.records[M].pinned && null != this.columns.records[M].datafield) {
                                        var N = K.cells[M];
                                        I(N) && N.parentNode.removeChild(N);
                                        var O = this.columns.records[M].element;
                                        this.columns.records[M]._rendered = !1, I(O) && this.columnsrow[0].removeChild(O), this.filterrow && I(this.filterrow[0].cells[M]) && this.columns.records[M].filterable && this.filterrow[0].cells[M].parentNode.removeChild(this.filterrow[0].cells[M])
                                    }
                                }
                                for(var L = G; L < this.columns.records.length; L++) {
                                    var M = L;
                                    if(!this.columns.records[M].pinned && null != this.columns.records[M].datafield) {
                                        var N = K.cells[M];
                                        I(N) && N.parentNode.removeChild(N);
                                        var O = this.columns.records[M].element;
                                        this.columns.records[M]._rendered = !1, I(O) && this.columnsrow[0].removeChild(O), this.filterrow && I(this.filterrow[0].cells[M]) && this.columns.records[M].filterable && this.filterrow[0].cells[M].parentNode.removeChild(this.filterrow[0].cells[M])
                                    }
                                }
                                for(var L = F; L < G; L++) {
                                    var M = L,
                                        N = K.cells[M];
                                    I(N) || K.appendChild(N);
                                    var O = this.columns.records[M].element;
                                    this.columns.records[M]._rendered = !0, I(O) || this.columnsrow[0].appendChild(O), this.filterrow && !I(this.filterrow[0].cells[M]) && this.columns.records[M].filterable && this.filterrow[0].firstChild.appendChild(this.filterrow[0].cells[M])
                                }
                            }
                        for(var P = 0; P < v && s < v; P++) {
                            var Q = void 0 != p ? p[q + P] : null;
                            if(null == Q) {
                                if(q = -P, this._pagescache[this.dataview.pagenum + 1]) p = this._pagescache[this.dataview.pagenum + 1], this.dataview.pagenum++;
                                else {
                                    var R = this._pageviews.length;
                                    do {
                                        if(!(this.dataview.pagenum < this._pageviews.length - 1)) {
                                            p = void 0;
                                            break
                                        }
                                        this.dataview.pagenum++, p = void 0, this._pageviews[this.dataview.pagenum].height > 0 && (this.dataview.updateview(), this._loadrows(), p = this._pagescache[this.dataview.pagenum])
                                    } while (void 0 == p && this.dataview.pagenum < R)
                                }
                                void 0 != p && (Q = p[q + P])
                            }
                            if(null != Q) {
                                if(Q.hidden) continue;
                                if(this._endboundindex = this._startboundindex + P, this._endvisibleindex = this._startvisibleindex + P, 0 == P) {
                                    var S = Math.abs(f - Q.top);
                                    this.table[0].style.top = -S + "px", u = -S
                                }
                                var K = this.table[0].rows[s];
                                if(!K) continue;
                                parseInt(K.style.height) != Q.height && (K.style.height = parseInt(Q.height) + "px"), t += Q.height;
                                var T = this.rowdetails && Q.rowdetails,
                                    U = !Q.rowdetailshidden;
                                T && U && (K.style.height = parseInt(Q.height - Q.rowdetailsheight) + "px", v++);
                                for(var V = this._isrowselected(A, Q), L = C; L < D; L++) {
                                    var M = L;
                                    this._rendervisualcell(z, x, V, T, U, k, w, K, Q, M, s, j)
                                }
                                if(void 0 != Q.group && this._rendergroup && this._rendergroup(w, K, Q, m, n, s, i), this.autorowheight && (this.autoheight || this.pageable)) {
                                    for(var y = this.rowsheight, L = C; L < D; L++) this.editable && this.editcell && this.editcell.column == this.columns.records[L].datafield && this.editcell.row == this.getboundindex(Q) && this.editcell.editor ? y = Math.max(y, this.editcell.editor.height()) : K.cells[L].firstChild && (y = Math.max(y, 8 + parseInt(K.cells[L].firstChild.offsetHeight)));
                                    K.style.height = parseInt(y) + "px", this.heights[this._startboundindex + P] = y, T && U && (y += Q.rowdetailsheight), Q.height = y
                                }
                                if(this.visiblerows[this.visiblerows.length] = Q, this.hittestinfo[this.hittestinfo.length] = {
                                        row: Q,
                                        visualrow: K,
                                        details: !1
                                    }, T && U) {
                                    s++;
                                    var K = this.table[0].rows[s];
                                    this._renderrowdetails(x, K, Q, m, n, s), this.visiblerows[this.visiblerows.length] = Q, this.hittestinfo[this.hittestinfo.length] = {
                                        row: Q,
                                        visualrow: K,
                                        details: !0
                                    }
                                }
                                if(!this.autorowheight && t + u >= h) break
                            } else cansetheight = !0, this._clearvisualrow(g, k, s, m, n), t + r + u <= h && (r += y);
                            s++
                        }
                        if(this._horizontalvalue = g, r > 0 && "visible" == this.vScrollBar[0].style.visibility) {
                            var W = (parseInt(this.table.css("top")), this._pageviews[this._pageviews.length - 1]),
                                X = b.max,
                                Y = W.top + W.height - h;
                            "visible" == this.hScrollBar.css("visibility") && (Y += this.scrollbarsize + 20), X == Y || this.autorowheight || Y >= 0 && ("deferred" != this.scrollmode ? (b.max = Y, b.setPosition(b.max)) : this._newmax != Y && (this._newmax = Y, this._rendervisualrows()))
                        }
                    }
                    if((this.autoheight || this.pageable) && this.autorowheight) {
                        this._pagescache = new Array;
                        for(var Z = 0, $ = 0, J = 0; J < this.visiblerows.length; J++) {
                            var _ = this.visiblerows[J];
                            _.top = Z, Z += _.height, $ += _.height;
                            var T = this.rowdetails && _.rowdetails,
                                U = !_.rowdetailshidden,
                                K = this.table[0].rows[J];
                            T && U && J++;
                            for(var L = C; L < D; L++) {
                                var aa = this.columns.records[L];
                                if(!aa.hidden && !aa.cellsrenderer) {
                                    var ba = K.cells[L],
                                        ca = 0;
                                    if(ba.firstChild) {
                                        var ca = (_.height - parseInt(ba.firstChild.offsetHeight) - 8) / 2;
                                        if(T && U) var ca = (_.height - _.rowdetailsheight - a(ba.firstChild).height() - 8) / 2
                                    } else var ca = (_.height - parseInt(a(ba).height()) - 8) / 2;
                                    if(ca >= 0 && (ca = parseInt(ca) + 4, ba.firstChild && ba.firstChild.className.indexOf("jqx-grid-groups-row") == -1 && "checkbox" != aa.columntype && "button" != aa.columntype)) {
                                        if(this.editable && this.editcell && this.editcell.column == aa.datafield && this.editcell.row == this.getboundindex(_)) continue;
                                        ba.firstChild.style.marginTop = ca + "px"
                                    }
                                }
                            }
                        }
                        this._pageviews[0] && (this._pageviews[0].height = $), this._arrange()
                    }
                    if(this._renderemptyrow(), this.toCompile && this.toCompile.length > 0) {
                        var da = this;
                        a.each(da.toCompile, function(b, c) {
                            if(this.compiled) return !0;
                            var d = this.cell;
                            return !d || (a.jqx.angularCompile && a.jqx.angularCompile(d, "<div>" + this.value + "</div>"), void(this.compiled = !0))
                        })
                    }
                }
            }
        },
        _hideemptyrow: function() {
            if(this.showemptyrow && this.table && this.table[0].rows) {
                var b = this.table[0].rows[0];
                if(b)
                    for(var c = !1, d = 0; d < b.cells.length; d++) {
                        var e = a(b.cells[d]);
                        "none" == e.css("display") || c || e.width() != this.host.width() && e.text() != this.gridlocalization.emptydatastring || (e[0].checkbox = null, e[0].button = null, c = !0, e[0].innerHTML = "")
                    }
            }
        },
        _renderemptyrow: function() {
            if(!this._loading && 0 == this.dataview.records.length && this.showemptyrow) {
                var b = !1,
                    c = this.toTP("jqx-grid-cell");
                if(this.table && this.table.length > 0 && this.table[0].rows && this.table[0].rows.length > 0) {
                    var d = this.table[0].rows[0];
                    this.table[0].style.top = "0px";
                    for(var e = 0; e < d.cells.length; e++) {
                        var f = a(d.cells[e]);
                        if("none" != f.css("display") && !b) {
                            f[0].checkbox = null, f[0].button = null, f[0].className = c, b = !0, f[0].innerHTML = "";
                            var g = a("<span style='white-space: nowrap; float: left; margin-left: 50%; position: relative;'></span>");
                            g.text(this.gridlocalization.emptydatastring), f.append(g);
                            var h = 0;
                            this.oldhscroll || (h = parseInt(this.table[0].style.marginLeft), this.rtl && (f.css("z-index", 999), f.css("overflow", "visible"))), g.css("left", -h - g.width() / 2), g.css("top", this._gettableheight() / 2 - g.height() / 2), a.jqx.browser.msie && a.jqx.browser.version < 8 && (g.css("margin-left", "0px"), g.css("left", this.host.width() / 2 - g.width() / 2));
                            var i = Math.abs(parseInt(this.table[0].style.top));
                            isNaN(i) && (i = 0), a(d).height(this._gettableheight() + i), f.css("margin-left", "0px"), f.width(this.host.width()), this.table.width() < this.host.width() && this.table.width(this.host.width())
                        }
                        f.addClass(this.toThemeProperty("jqx-grid-empty-cell"))
                    }
                }
            }
        },
        _clearvisualrows: function() {
            var a = this.virtualsizeinfo.visiblerecords,
                b = this.hScrollInstance,
                c = b.value,
                d = parseInt(c),
                e = this.groupable && this.groups.length > 0;
            if(this.columns.records)
                for(var f = 0; f < a; f++) this._clearvisualrow(d, e, f, 0, this.columns.records.length)
        },
        _iscellselected: function(a, b, c) {
            var d = !1,
                e = 0;
            if(this.virtualmode && this.pageable && this.groupable && this.groups.length > 0 && (e = this.dataview.pagesize * this.dataview.pagenum), this.groups.length > 0 && this.pageable && this.groupable) {
                var f = this.getrowboundindexbyid(b.bounddata.uid);
                if(f != -1) {
                    for(var g in this.selectedcells) g == f + "_" + c && (d = !0);
                    return d
                }
                return !1
            }
            if(a && null != b.bounddata)
                if("singlerow" != this.selectionmode) {
                    if(this.dataview.filters.length > 0)
                        if(this.virtualmode || void 0 == b.bounddata.dataindex)
                            for(var g in this.selectedcells) g == e + b.bounddata.boundindex + "_" + c && (d = !0);
                        else
                            for(var g in this.selectedcells) g == e + b.bounddata.dataindex + "_" + c && (d = !0);
                    else
                        for(var g in this.selectedcells)
                            if(g == e + b.bounddata.boundindex + "_" + c) {
                                d = !0;
                                break
                            }
                } else if(this.dataview.filters.length > 0) {
                    if(this.virtualmode || void 0 == b.bounddata.dataindex) {
                        for(var g in this.selectedcells)
                            if(g == e + b.bounddata.boundindex + "_" + c) {
                                d = !0;
                                break
                            }
                    } else
                        for(var g in this.selectedcells)
                            if(g == e + b.bounddata.dataindex + "_" + c) {
                                d = !0;
                                break
                            }
                } else
                    for(var g in this.selectedcells)
                        if(g == e + b.bounddata.boundindex == this.selectedrowindex) {
                            d = !0;
                            break
                        } return d
        },
        _isrowselected: function(a, b) {
            var c = !1,
                d = 0;
            if(this.virtualmode && this.pageable && this.groupable && this.groups.length > 0 && (d = this.dataview.pagesize * this.dataview.pagenum), this.groupable && this.groups.length > 0 && this.pageable) {
                var e = this.getrowboundindexbyid(b.bounddata.uid);
                return void 0 != e && e != -1 && (this.selectedrowindexes.indexOf(e) != -1 && (c = !0), c || (c = e == this.selectedrowindex && this.selectedrowindex != -1), c)
            }
            return a && null != b.bounddata && ("singlerow" != this.selectionmode ? this.dataview.filters.length > 0 ? this.virtualmode || void 0 == b.bounddata.dataindex ? this.selectedrowindexes.indexOf(d + b.bounddata.boundindex) != -1 && (c = !0) : this.selectedrowindexes.indexOf(d + b.bounddata.dataindex) != -1 && (c = !0) : this.selectedrowindexes.indexOf(d + b.bounddata.boundindex) != -1 && (c = !0) : this.dataview.filters.length > 0 ? this.virtualmode || void 0 == b.bounddata.dataindex ? this.selectedrowindexes.indexOf(d + b.bounddata.boundindex) != -1 && (c = !0) : this.selectedrowindexes.indexOf(d + b.bounddata.dataindex) != -1 && (c = !0) : d + b.bounddata.boundindex == this.selectedrowindex && (c = !0)), c
        },
        _rendervisualcell: function(b, c, d, e, f, g, h, i, j, k, l, m) {
            var n = this.columns.records[k];
            if(n.hidden) {
                var o = i.cells[k];
                return void(o.innerHTML = "")
            }
            cellvalue = this._getcellvalue(n, j);
            var o = i.cells[k],
                p = c;
            if(this.selectionmode.indexOf("cell") != -1 && (d = this.dataview.filters.length > 0 ? !!this.selectedcells[j.bounddata.dataindex + "_" + n.datafield] : !!this.selectedcells[j.boundindex + "_" + n.datafield], this.editcell && this.editcell.row === j.boundindex && this.editcell.column === n.datafield && "checkbox" !== n.columntype && (d = !1), (this.virtualmode || this.groupable && this.groups.length > 0 && this.pageable) && (d = this._iscellselected(!0, j, n.datafield))), "" != n.cellclassname && n.cellclassname)
                if("string" == typeof n.cellclassname) p += " " + n.cellclassname;
                else {
                    var q = n.cellclassname(this.getboundindex(j), n.datafield, cellvalue, j.bounddata);
                    q && (p += " " + q)
                }
            var r = this.showsortcolumnbackground && this.sortcolumn && n.displayfield == this.sortcolumn;
            if(r && (p += " " + this.toTP("jqx-grid-cell-sort")), n.filter && this.showfiltercolumnbackground && (p += " " + this.toTP("jqx-grid-cell-filter")), (n.pinned && this.showpinnedcolumnbackground || n.grouped) && (p += g ? " " + this.toTP("jqx-grid-cell-pinned") : " " + this.toTP("jqx-grid-cell-pinned")), this.altrows && void 0 == j.group) {
                var s = j.visibleindex;
                s >= this.altstart && (this.altstart + s) % (1 + this.altstep) == 0 && (p += r ? " " + this.toTP("jqx-grid-cell-sort-alt") : " " + this.toTP("jqx-grid-cell-alt"), n.filter && this.showfiltercolumnbackground && (p += " " + this.toTP("jqx-grid-cell-filter-alt")), n.pinned && this.showpinnedcolumnbackground && (p += " " + this.toTP("jqx-grid-cell-pinned-alt")))
            }
            if(k <= h) {
                if(g || this.rowdetails || this.pageable && this.virtualmode) {
                    var t = a(o),
                        u = this.columns.records[k].width;
                    o.style.width != parseInt(u) + "px" && t.width(u)
                }
            } else if((g || this.rowdetails) && this._hiddencolumns) {
                var t = a(o),
                    u = this.columns.records[k].width;
                parseInt(o.style.width) != u && t.width(u)
            }
            var v = !0;
            if(this.rowdetails && e && (f && !g ? p += " " + this.toTP("jqx-grid-details-cell") : g && (p += " " + this.toTP("jqx-grid-group-details-cell")), this.showrowdetailscolumn))
                if(this.rtl) {
                    if(void 0 == j.group && k == i.cells.length - h - 1) {
                        var w = this.toThemeProperty("jqx-icon-arrow-down");
                        if(f) p += " " + this.toTP("jqx-grid-group-expand-rtl"), p += " " + w;
                        else {
                            p += " " + this.toTP("jqx-grid-group-collapse-rtl");
                            var w = this.toThemeProperty("jqx-icon-arrow-left");
                            p += " " + w
                        }
                        return v = !1, o.title = "", o.innerHTML = "", void(o.className != p && (o.className = p))
                    }
                } else if(void 0 == j.group && k == h) {
                    var w = this.toThemeProperty("jqx-icon-arrow-down");
                    if(f) p += " " + this.toTP("jqx-grid-group-expand"), p += " " + w;
                    else {
                        p += " " + this.toTP("jqx-grid-group-collapse");
                        var w = this.toThemeProperty("jqx-icon-arrow-right");
                        p += " " + w
                    }
                    return v = !1, o.title = "", o.innerHTML = "", void(o.className != p && (o.className = p))
                }
            return d && v && k >= h && (p += " " + this.toTP("jqx-grid-cell-selected"), p += " " + this.toTP("jqx-fill-state-pressed")), o.className != p && (o.className = p), void 0 != j.group ? (cellvalue = "", o.title = "", void(o.innerHTML = "")) : void b(this, n, j, cellvalue, o, m)
        },
        _rendercell: function(b, c, d, e, f, g) {
            var h = e + "_" + c.visibleindex;
            if("number" == c.columntype || null != c.cellsrenderer) var h = d.uniqueid + "_" + c.visibleindex;
            if("number" == c.columntype && (e = d.visibleindex), b.editcell && void 0 == b.editrow)
                if("selectedrow" == b.editmode && c.editable && b.editable) {
                    if(b.editcell.row == b.getboundindex(d) && b._showcelleditor) return void(b.hScrollInstance.isScrolling() || b.vScrollInstance.isScrolling() ? b._showcelleditor(b.editcell.row, c, f, !1, !1) : b._showcelleditor(b.editcell.row, c, f, b.editcell.init))
                } else if(b.editcell.row == b.getboundindex(d) && b.editcell.column == c.datafield && (b.editcell.element = f, b.editcell.editing && b._showcelleditor)) return void(b.hScrollInstance.isScrolling() || b.vScrollInstance.isScrolling() ? b._showcelleditor(b.editcell.row, c, b.editcell.element, b.editcell.init, !1) : b._showcelleditor(b.editcell.row, c, b.editcell.element, b.editcell.init));
            var i = b._defaultcellsrenderer(e, c),
                j = b._cellscache[h];
            if(j) {
                if("checkbox" == c.columntype) {
                    if(b.host.jqxCheckBox) {
                        "" === e && (e = null);
                        var k = 0 == f.innerHTML.toString().length;
                        if(!f.checkbox || b.groupable || k ? b._rendercheckboxcell(b, f, c, d, e) : (f.checkboxrow = b.getboundindex(d), "" == e && (e = !1), "1" == e && (e = !0), "0" == e && (e = !1), 1 == e && (e = !0), 0 == e && (e = !1), "true" == e && (e = !0), "false" == e && (e = !1), null != e || c.threestatecheckbox || (e = !1), c.checkboxcolumn && (e = !1, b.dataview.filters.length > 0 && !b.virtualmode && void 0 != d.bounddata.dataindex ? b.selectedrowindexes.indexOf(d.bounddata.dataindex) != -1 && (e = !0) : b.selectedrowindexes.indexOf(d.bounddata.boundindex) != -1 && (e = !0)), b.disabled || (f.checkboxinstance ? f.checkboxinstance._setState(e) : f.checkbox.jqxCheckBox("_setState", e))), null != c.cellsrenderer) {
                            var l = c.cellsrenderer(b.getboundindex(d), c.datafield, e, i, c.getcolumnproperties(), d.bounddata);
                            void 0 != l && (f.innerHTML = l)
                        }
                        return
                    }
                } else if("button" == c.columntype && b.host.jqxButton) return "" == e && (e = !1), null != c.cellsrenderer && (e = c.cellsrenderer(b.getboundindex(d), c.datafield, e, i, c.getcolumnproperties(), d.bounddata)), "" == f.innerHTML && (f.buttonrow = b.getboundindex(d), f.button = null, b._renderbuttoncell(b, f, c, d, e)), void(f.button && !b.groupable ? (f.buttonrow = b.getboundindex(d), f.button.val(e)) : b._renderbuttoncell(b, f, c, d, e));
                if(c.createwidget) {
                    if("" == f.innerHTML && (f.widgetrow = b.getboundindex(d), f.widget = null, b._renderwidgetcell(b, f, c, d, e)), f.widget && !b.groupable) {
                        if(f.widgetrow = b.getboundindex(d), !c.initwidget) throw new Error("jqxGrid: 'initwidget' column function is not implemented. Please, implement 'initwidget'");
                        c.initwidget(b.getboundindex(d), c.datafield, e, f.firstChild)
                    } else b._renderwidgetcell(b, f, c, d, e);
                    return
                }
                var m = j.element;
                if(null != c.cellsrenderer || f.childNodes && 0 == f.childNodes.length || b.groupable || b.rowdetails) f.innerHTML != m && (f.innerHTML = m);
                else if(f.innerHTML.indexOf("editor") >= 0) f.innerHTML = m;
                else if(g) {
                    var n = m.indexOf(">"),
                        o = m.indexOf("</"),
                        p = m.substring(n + 1, o),
                        q = f.childNodes[0];
                    if(p.indexOf(">") >= 0) f.innerHTML = m;
                    else if(q.childNodes[0]) p != q.childNodes[0].nodeValue && (p.indexOf("&") >= 0 ? f.innerHTML = m : q.childNodes[0].nodeValue = p);
                    else {
                        var r = document.createTextNode(p);
                        q.appendChild(r)
                    }
                } else f.innerHTML != m && (f.innerHTML = m);
                return void(b.enabletooltips && c.enabletooltips && (f.title = j.title))
            }
            if("checkbox" == c.columntype) return b._rendercheckboxcell(b, f, c, d, e), b._cellscache[h] = {
                element: "",
                title: e
            }, void(b.enabletooltips && c.enabletooltips && (f.title = "" + e));
            if("button" == c.columntype) return null != c.cellsrenderer && (e = c.cellsrenderer(b.getboundindex(d), c.datafield, e, i, c.getcolumnproperties(), d.bounddata)), b._renderbuttoncell(b, f, c, d, e), b._cellscache[h] = {
                element: "",
                title: e
            }, void(b.enabletooltips && c.enabletooltips && (f.title = "" + e));
            if("number" == c.columntype && (e = d.visibleindex), c.createwidget) return null != c.cellsrenderer && (e = c.cellsrenderer(b.getboundindex(d), c.datafield, e, i, c.getcolumnproperties(), d.bounddata)), b._renderwidgetcell(b, f, c, d, e), b._cellscache[h] = {
                element: "",
                title: e
            }, void(b.enabletooltips && c.enabletooltips && (f.title = e));
            var m = null;
            if(null != c.cellsrenderer) {
                if(m = c.cellsrenderer(b.getboundindex(d), c.datafield, e, i, c.getcolumnproperties(), d.bounddata), m && (m.indexOf("<jqx-") >= 0 || m.indexOf(" ng-") >= 0)) return void(b.toCompile && b.toCompile.push({
                    cell: f,
                    value: m,
                    row: b.getboundindex(d)
                }))
            } else m = i;
            null == m && (m = i);
            var s = e;
            if(b.enabletooltips && c.enabletooltips && ("" != c.cellsformat && a.jqx.dataFormat && (a.jqx.dataFormat.isDate(e) ? s = a.jqx.dataFormat.formatdate(s, c.cellsformat, b.gridlocalization) : a.jqx.dataFormat.isNumber(e) && (s = a.jqx.dataFormat.formatnumber(s, c.cellsformat, b.gridlocalization))), f.title = s), b.WinJS) a(f).html(m);
            else {
                var t = f.innerHTML;
                if(t.indexOf("editor") >= 0 || null != c.cellsrenderer || b.groupable || b.virtualmode) f.innerHTML = m;
                else if(t.length > 0) {
                    var n = m.indexOf(">"),
                        o = m.indexOf("</"),
                        p = m.substring(n + 1, o),
                        q = f.childNodes[0];
                    if(p.indexOf(">") >= 0) f.innerHTML = m;
                    else if(q.childNodes[0]) p != q.childNodes[0].nodeValue && (p.indexOf("&") >= 0 || t.indexOf("span") >= 0 ? f.innerHTML = m : q.childNodes[0].nodeValue = p);
                    else {
                        var r = document.createTextNode(p);
                        q.appendChild(r)
                    }
                } else t != m && (f.innerHTML = m)
            }
            return b._cellscache[h] = {
                element: f.innerHTML,
                title: s
            }, !0
        },
        _isIE10: function() {
            if(void 0 == this._browser) {
                var b = a.jqx.utilities.getBrowser();
                if("msie" == b.browser && parseInt(b.version) > 9) this._browser = !0;
                else if(this._browser = !1, "msie" == b.browser) {
                    var c = "Browser CodeName: " + navigator.appCodeName;
                    c += "Browser Name: " + navigator.appName, c += "Browser Version: " + navigator.appVersion, c += "Platform: " + navigator.platform, c += "User-agent header: " + navigator.userAgent, c.indexOf("Zune 4.7") != -1 && (this._browser = !0)
                }
            }
            return this._browser
        },
        _renderinlinecell: function(b, c, d, e, f) {
            a(c);
            c.innerHTML = '<div style="position: absolute;"></div>'
        },
        _rendercheckboxcell: function(b, c, d, e, f) {
            if(b.host.jqxCheckBox) {
                var g = a(c);
                if("" === f && (f = !!d.threestatecheckbox && null), null !== f || d.threestatecheckbox || (f = !1), "1" == f && (f = !0), "0" == f && (f = !1), 1 == f && (f = !0), 0 == f && (f = !1), "true" == f && (f = !0), "false" == f && (f = !1), d.checkboxcolumn) {
                    f = !1;
                    var h = this.getboundindex(e);
                    this.selectedrowindexes.indexOf(h) != -1 && (f = !0)
                }
                if(0 == g.find(".jqx-checkbox").length) {
                    c.innerHTML = '<div style="position: absolute; top: 50%; left: 50%; margin-top: -7px; margin-left: -10px;"></div>', a(c.firstChild).jqxCheckBox({
                        disabled: b.disabled,
                        _canFocus: !1,
                        hasInput: !1,
                        hasThreeStates: d.threestatecheckbox,
                        enableContainerClick: !1,
                        animationShowDelay: 0,
                        animationHideDelay: 0,
                        locked: !0,
                        theme: b.theme,
                        checked: f
                    }), this.editable && d.editable && a(c.firstChild).jqxCheckBox({
                        locked: !1
                    }), d.checkboxcolumn && a(c.firstChild).jqxCheckBox({
                        locked: !1
                    }), c.checkbox = a(c.firstChild), c.checkboxinstance = c.checkbox.data().jqxCheckBox.instance, c.checkboxrow = this.getboundindex(e);
                    var i = a.data(c.firstChild, "jqxCheckBox").instance;
                    i.updated = function(e, f, g) {
                        if(b.disabled) {
                            f = g;
                            for(var h = b.table[0].rows.length, i = b._getcolumnindex(d.datafield), j = 0; j < h; j++) {
                                var k = b.table[0].rows[j].cells[i].firstChild;
                                k && a(k).jqxCheckBox({
                                    disabled: b.disabled
                                })
                            }
                        }
                        if(d.editable && !b.disabled) {
                            var h = b.table[0].rows.length,
                                i = b._getcolumnindex(d.datafield);
                            if(void 0 == b.editrow) {
                                if(d.cellbeginedit) {
                                    var l = d.cellbeginedit(c.checkboxrow, d.datafield, d.columntype, !f);
                                    if(0 == l) return void b.setcellvalue(c.checkboxrow, d.datafield, !f, !0)
                                }
                                if(d.cellvaluechanging) {
                                    var m = d.cellvaluechanging(c.checkboxrow, d.datafield, d.columntype, g, f);
                                    void 0 != m && (f = m)
                                }
                                if("selectedrow" !== b.editmode)
                                    for(var j = 0; j < h; j++) {
                                        var k = b.table[0].rows[j].cells[i].firstChild;
                                        k && a(k).jqxCheckBox("destroy")
                                    }
                                if(b.editcell && 0 == b.editcell.validated) b.setcellvalue(c.checkboxrow, d.datafield, !f, !0);
                                else if("selectedrow" !== b.editmode || null == b.editcell) {
                                    var n = b.getrowdata(c.checkboxrow);
                                    b._raiseEvent(17, {
                                        rowindex: c.checkboxrow,
                                        row: n,
                                        datafield: d.datafield,
                                        value: g,
                                        columntype: d.columntype
                                    }), b.setcellvalue(c.checkboxrow, d.datafield, f, !0), b._raiseEvent(18, {
                                        rowindex: c.checkboxrow,
                                        row: n,
                                        datafield: d.datafield,
                                        oldvalue: g,
                                        value: f,
                                        columntype: d.columntype
                                    })
                                } else b.setcellvalue(c.checkboxrow, d.datafield, f, !1, !1);
                                d.cellendedit && d.cellendedit(c.checkboxrow, d.datafield, d.columntype, f)
                            }
                        } else d.checkboxcolumn && (b.editcell && b.endcelledit(b.editcell.row, b.editcell.column, !1, !0), b.disabled || (f ? b.selectrow(c.checkboxrow) : b.unselectrow(c.checkboxrow), b.autosavestate && b.savestate && b.savestate()))
                    }
                } else c.checkboxrow = this.getboundindex(e), a(c.firstChild).jqxCheckBox("_setState", f, !(this.editable && d.editable || d.checkboxcolumn))
            }
        },
        _renderwidgetcell: function(b, c, d, e, f) {
            var g = a(c);
            if(0 == g.find(".jqx-grid-widget").length) {
                var h = '<div class="jqx-grid-widget" style="opacity: 0.99; position: absolute; width: 100%; height:100%; top: 0%; left: 0%; padding: 0px;"></div>';
                c.innerHTML = h, d.createwidget(e, d.datafield, f, c.firstChild), a(c.firstChild).attr("hideFocus", "true"), a(c.firstChild).children().addClass("jqx-grid-widget"), c.widget = a(c.firstChild), c.widgetrow = b.getboundindex(e)
            } else d.initwidget(b.getboundindex(e), d.datafield, f, c.firstChild), c.widgetrow = b.getboundindex(e), a(c.firstChild).val(f)
        },
        _renderbuttoncell: function(b, c, d, e, f) {
            if(b.host.jqxButton) {
                var g = a(c);
                if("" == f && (f = !1), 0 == g.find(".jqx-button").length) {
                    c.innerHTML = '<input type="button" style="opacity: 0.99; position: absolute; top: 0%; left: 0%; padding: 0px; margin-top: 2px; margin-left: 2px;"/>', a(c.firstChild).val(f), a(c.firstChild).attr("hideFocus", "true"), a(c.firstChild).jqxButton({
                        disabled: b.disabled,
                        theme: b.theme,
                        height: b.rowsheight - 4,
                        width: d.width - 4
                    }), c.button = a(c.firstChild), c.buttonrow = b.getboundindex(e);
                    var h = this.isTouchDevice();
                    if(h) {
                        var i = a.jqx.mobile.getTouchEventName("touchend");
                        b.addHandler(a(c.firstChild), i, function(a) {
                            d.buttonclick && d.buttonclick(c.buttonrow, a)
                        })
                    } else b.addHandler(a(c.firstChild), "click", function(a) {
                        d.buttonclick && d.buttonclick(c.buttonrow, a)
                    })
                } else c.buttonrow = b.getboundindex(e), a(c.firstChild).val(f)
            }
        },
        _clearvisualrow: function(b, c, d, e, f) {
            var g = this.toTP("jqx-grid-cell");
            c && (g = " " + this.toTP("jqx-grid-group-cell")), g += " " + this.toTP("jqx-grid-cleared-cell");
            for(var h = this.table[0].rows, i = 0; i < e + f; i++)
                if(h[d]) {
                    var j = h[d].cells[i];
                    j.className != g && (j.className = g);
                    var k = this.columns.records[i];
                    if(this._horizontalvalue != b && !k.pinned && 1 == this.oldhscroll) {
                        j.style.marginLeft = -b + "px"
                    }
                    var l = k.width;
                    l < k.minwidth && (l = k.minwidth), l > k.maxwidth && (l = k.maxwidth), parseInt(j.style.width) != l && ("auto" != l ? a(j)[0].style.width = l + "px" : a(j)[0].style.width = l), "" != j.title && (j.title = ""), "" != j.innerHTML && (j.innerHTML = "")
                }
            h[d] && parseInt(h[d].style.height) != this.rowsheight && (h[d].style.height = parseInt(this.rowsheight) + "px")
        },
        _findgroupstate: function(a) {
            var b = this._findgroup(a);
            return null != b && b.expanded
        },
        _findgroup: function(a) {
            var b = null;
            return this.expandedgroups[a] ? this.expandedgroups[a] : b
        },
        _clearcaches: function() {
            this._columnsbydatafield = new Array, this._pagescache = new Array, this._pageviews = new Array, this._cellscache = new Array, this.heights = new Array, this.hiddens = new Array, this.hiddenboundrows = new Array, this.heightboundrows = new Array, this.detailboundrows = new Array, this.details = new Array, this.expandedgroups = new Array, this._rowdetailscache = new Array, this._rowdetailselementscache = new Array, a.jqx.dataFormat && a.jqx.dataFormat.cleardatescache(), this.tableheight = null
        },
        _getColumnText: function(b) {
            if(void 0 == this._columnsbydatafield && (this._columnsbydatafield = new Array), this._columnsbydatafield[b]) return this._columnsbydatafield[b];
            var c = b,
                d = null;
            return a.each(this.columns.records, function() {
                if(this.datafield == b || this.displayfield == b) return c = this.text, d = this, !1
            }), this._columnsbydatafield[b] = {
                label: c,
                column: d
            }, this._columnsbydatafield[b]
        },
        _getcolumnbydatafield: function(b) {
            if(void 0 == this.__columnsbydatafield && (this.__columnsbydatafield = new Array), this.__columnsbydatafield[b]) return this.__columnsbydatafield[b];
            var c = b,
                d = null;
            return a.each(this.columns.records, function() {
                if(this.datafield == b || this.displayfield == b) return c = this.text, d = this, !1
            }), this.__columnsbydatafield[b] = d, this.__columnsbydatafield[b]
        },
        isscrollingvertically: function() {
            var a = this.vScrollBar.jqxScrollBar("isScrolling");
            return a
        },
        _renderrowdetails: function(b, c, d, e, f, g) {
            if(void 0 != c) {
                var h = a(c),
                    i = 0,
                    j = this.rowdetails && this.showrowdetailscolumn ? (1 + this.groups.length) * this.groupindentwidth : this.groups.length * this.groupindentwidth;
                if(this.groupable && this.groups.length > 0)
                    for(var k = 0; k <= f; k++) {
                        var l = a(c.cells[k]);
                        l[0].innerHTML = "", l[0].className = "jqx-grid-details-cell"
                    }
                var l = a(c.cells[i]);
                if("none" == l[0].style.display) {
                    for(var m = c.cells[i], n = 2, o = i; void 0 != m && "none" == m.style.display && n < 10;) m = c.cells[o + n - 1], n++;
                    l = a(m)
                }
                if(this.rtl)
                    for(var p = e; p < f; p++) c.cells[p].innerHTML = "", c.cells[p].className = "jqx-grid-details-cell";
                l.css("width", "100%"), h.height(d.rowdetailsheight), l[0].className = b;
                var q = this.getboundindex(d),
                    r = q + "_";
                if(this._rowdetailscache[r]) {
                    var s = this._rowdetailscache[r],
                        t = s.html;
                    if(this.initrowdetails) {
                        if(this._rowdetailscache[r].element) {
                            var u = this._rowdetailscache[r].element,
                                v = l.coord(),
                                w = this.gridcontent.coord(),
                                x = parseInt(v.top) - parseInt(w.top),
                                y = parseInt(v.left) - parseInt(w.left);
                            this.rtl && (y = 0), a(u).css("top", x), a(u).css("left", y), a(u).css("display", "block"), a(u).width(this.host.width() - j), this.layoutrowdetails && this.layoutrowdetails(q, u, this.element, this.getrowdata(q))
                        }
                    } else l[0].innerHTML = t
                } else {
                    l[0].innerHTML = "", this.enablerowdetailsindent || (j = 0);
                    var z = '<div class="jqx-enableselect" role="rowgroup" style="border: none; overflow: hidden; width: 100%; height: 100%; margin-left: ' + j + 'px;">' + d.rowdetails + "</div>";
                    if(this.rtl) var z = '<div class="jqx-enableselect" role="rowgroup" style="border: none; overflow: hidden; width: 100%; height: 100%; margin-left: 0px; margin-right: ' + j + 'px;">' + d.rowdetails + "</div>";
                    if(this._rowdetailscache[r] = {
                            id: c.id,
                            html: z
                        }, this.initrowdetails) {
                        var u = a(z)[0];
                        a(this.gridcontent).prepend(a(u)), a(u).css("position", "absolute"), a(u).width(this.host.width() - j), a(u).height(l.height());
                        var v = l.coord();
                        a(u).css("z-index", 9999), this.isTouchDevice() && a(u).css("z-index", 99999), a(u).addClass(this.toThemeProperty("jqx-widget-content"));
                        var v = l.coord(),
                            w = this.gridcontent.coord(),
                            x = parseInt(v.top) - parseInt(w.top),
                            y = parseInt(v.left) - parseInt(w.left);
                        a(u).css("top", x), a(u).css("left", y), this.content[0].scrollTop = 0, this.content[0].scrollLeft = 0;
                        var A = a(a(u).children()[0]);
                        "" != A[0].id && (A[0].id = A[0].id + q), this.initrowdetails(q, u, this.element, this.getrowdata(q)), this._rowdetailscache[r].element = u, this._rowdetailselementscache[q] = u
                    } else l[0].innerHTML = z
                }
            }
        },
        _defaultcellsrenderer: function(b, c) {
            "" != c.cellsformat && a.jqx.dataFormat && (a.jqx.dataFormat.isDate(b) ? b = a.jqx.dataFormat.formatdate(b, c.cellsformat, this.gridlocalization) : a.jqx.dataFormat.isNumber(b) && (b = a.jqx.dataFormat.formatnumber(b, c.cellsformat, this.gridlocalization)));
            var d = "6px";
            if(28 != this.rowsheight && (d = this.rowsheight / 2 - this._cellheight / 2, d < 0 && (d = 4), d += "px"), this.enableellipsis) {
                if("center" == c.cellsalign || "middle" == c.cellsalign) return '<div class="jqx-grid-cell-middle-align" style="margin-top: ' + d + ';">' + b + "</div>";
                if("left" == c.cellsalign) return '<div class="jqx-grid-cell-left-align" style="margin-top: ' + d + ';">' + b + "</div>";
                if("right" == c.cellsalign) return '<div class="jqx-grid-cell-right-align" style="margin-top: ' + d + ';">' + b + "</div>"
            }
            return "center" == c.cellsalign || "middle" == c.cellsalign ? '<div style="text-align: center; margin-top: ' + d + ';">' + b + "</div>" : '<span style="margin-left: 4px; margin-right: 2px; margin-top: ' + d + "; float: " + c.cellsalign + ';">' + b + "</span>"
        },
        getcelltext: function(b, c) {
            if(null == b || null == c) return null;
            var d = this.getcellvalue(b, c),
                e = this.getcolumn(c);
            return e && "" != e.cellsformat && a.jqx.dataFormat && (a.jqx.dataFormat.isDate(d) ? d = a.jqx.dataFormat.formatdate(d, e.cellsformat, this.gridlocalization) : a.jqx.dataFormat.isNumber(d) && (d = a.jqx.dataFormat.formatnumber(d, e.cellsformat, this.gridlocalization))), d
        },
        getcelltextbyid: function(b, c) {
            if(null == b || null == c) return null;
            var d = this.getcellvaluebyid(b, c),
                e = this.getcolumn(c);
            return e && "" != e.cellsformat && a.jqx.dataFormat && (a.jqx.dataFormat.isDate(d) ? d = a.jqx.dataFormat.formatdate(d, e.cellsformat, this.gridlocalization) : a.jqx.dataFormat.isNumber(d) && (d = a.jqx.dataFormat.formatnumber(d, e.cellsformat, this.gridlocalization))), d
        },
        _getcellvalue: function(a, b) {
            var c = null;
            return c = b.bounddata[a.datafield], null != a.displayfield && (c = b.bounddata[a.displayfield]), null == c && (c = ""), c
        },
        getcell: function(a, b) {
            if(null == a || null == b) return null;
            var c = parseInt(a),
                d = a,
                e = "";
            return isNaN(c) || (d = this.getrowdata(c)), null != d && (e = d[b]), this._getcellresult(e, a, b)
        },
        getrenderedcell: function(a, b) {
            if(null == a || null == b) return null;
            var c = parseInt(a),
                d = a,
                e = "";
            return isNaN(c) || (d = this.getrenderedrowdata(c)), null != d && (e = d[b]), this._getcellresult(e, a, b)
        },
        _getcellresult: function(a, b, c) {
            var d = this.getcolumn(c);
            if(null == d || void 0 == d) return null;
            var e = d.getcolumnproperties(),
                f = e.hidden,
                g = e.width,
                h = e.pinned,
                i = e.cellsalign,
                j = e.cellsformat,
                k = this.getrowheight(b);
            return 0 == k ? null : {
                value: a,
                row: b,
                column: c,
                datafield: c,
                width: g,
                height: k,
                hidden: f,
                pinned: h,
                align: i,
                format: j
            }
        },
        setcellvaluebyid: function(a, b, c, d, e) {
            var f = this.getrowboundindexbyid(a);
            return this.setcellvalue(f, b, c, d, e)
        },
        getcellvaluebyid: function(a, b) {
            var c = this.getrowboundindexbyid(a);
            return this.getcellvalue(c, b)
        },
        setcellvalue: function(b, c, d, e, f) {
            if(null == b || null == c) return !1;
            var g = parseInt(b),
                h = g,
                i = b;
            isNaN(g) || (i = this.getrowdata(g));
            var j = !1;
            this.filterable && this._initfilterpanel && this.dataview.filters.length && (j = !0), this.virtualmode && (this._pagescache = new Array), this.sortcache && (this.sortcache = {});
            var k = "",
                l = "";
            if(null == i || i[c] === d) return this._updating || 0 == e || this._renderrows(this.virtualsizeinfo), !1;
            if(null !== i[c] || "" !== d) {
                var m = this._getcolumnbydatafield(c),
                    n = "string",
                    o = this.source.datafields || (this.source._source ? this.source._source.datafields : null);
                if(o) {
                    var p = "";
                    a.each(o, function() {
                        if(this.name == m.displayfield) return this.type && (p = this.type), !1
                    }), p && (n = p), l = i[m.displayfield]
                }
                if(k = i[c], !m.nullable || null != d && "" !== d && m.nullable && void 0 === d.label) {
                    if(a.jqx.dataFormat.isNumber(k) || "number" == n || "float" == n || "int" == n || "decimal" == n && "date" != n) this.gridlocalization && "," == this.gridlocalization.decimalseparator && d && d.indexOf && d.indexOf(",") >= 0 && (d = d.replace(",", ".")), d = new Number(d), d = parseFloat(d), isNaN(d) && (d = 0);
                    else if((a.jqx.dataFormat.isDate(k) || "date" == n) && "" != d) {
                        var q = d;
                        q = new Date(q), "Invalid Date" != q && null != q ? d = q : "Invalid Date" == q && (q = new Date, d = q)
                    }
                    if(i[c] === d) return void(this._updating || 0 == e || this._renderrows(this.virtualsizeinfo))
                }
                var r = this.source && this.source._source.localdata && "observableArray" === this.source._source.localdata.name;
                if(i[c] = d, r) {
                    var s = this.source._source.localdata;
                    s._updating || (s._updating = !0, s[b][c] = d, s._updating = !1)
                }
                var t = this.getrenderedrowdata(g, !0);
                if(t) {
                    if(t[c] = d, null != d && null != d.label) {
                        var m = this._getcolumnbydatafield(c);
                        i[m.displayfield] = d.label, t[m.displayfield] = d.label, i[c] = d.value, t[c] = d.value, r && !s._updating && (s._updating = !0, s[b][c] = d.value, s[b][m.displayfield] = d.label, s._updating = !1)
                    }
                    if(j && void 0 != i.dataindex && (h = i.dataindex, this.dataview.cachedrecords[i.dataindex][c] = d, null != d && void 0 != d.label && (this.dataview.cachedrecords[i.dataindex][c] = d.value, this.dataview.cachedrecords[i.dataindex][m.displayfield] = d.label)), this.source && this.source._knockoutdatasource && !this._updateFromAdapter && this.autokoupdates && this.source._source._localdata) {
                        var u = g;
                        j && void 0 != i.dataindex && (u = i.dataindex);
                        var v = this.source._source._localdata()[u];
                        this.source.suspendKO = !0;
                        var w = v;
                        if(w[c] && w[c].subscribe) null != d && null != d.label ? (w[m.displayfield](d.label), w[c](d.value)) : w[c](d);
                        else {
                            var o = this.source._source.datafields,
                                x = null;
                            if(o && a.each(o, function() {
                                    if(this.name == c) return x = this.map, !1
                                }), null == x) null != d && null != d.label ? (w[c] = d.value, w[m.displayfield] = d.label) : w[c] = d;
                            else {
                                var y = x.split(this.source.mapChar);
                                if(y.length > 0) {
                                    for(var z = w, A = 0; A < y.length - 1; A++) z = z[y[A]];
                                    z[y[y.length - 1]] = d
                                }
                            }
                            this.source._source._localdata.replace(v, a.extend({}, w))
                        }
                        this.source.suspendKO = !1
                    }
                    if(this.sortcolumn && this.dataview.sortby && !this._updating) {
                        var B = this.getsortinformation();
                        this.sortcolumn == c && (this.dataview.clearsortdata(), this.dataview.sortby(B.sortcolumn, B.sortdirection.ascending))
                    } else this._updating || this.dataview.sortby && this.dataview.sortcache[c] && (this.dataview.sortcache[c] = null);
                    if(this._cellscache = new Array, this._pagescache = new Array, this.source.updaterow && (void 0 == f || 1 == f)) {
                        var C = !1,
                            D = this.that,
                            E = function(a) {
                                0 == a && (D.setcellvalue(b, c, k, !0, !1), k != l && D.setcellvalue(b, D.getcolumn(c).displayfield, l, !0, !1))
                            };
                        try {
                            var F = this.getrowid(g);
                            C = this.source.updaterow(F, i, E), void 0 == C && (C = !0)
                        } catch(a) {
                            return C = !1, D.setcellvalue(b, c, k, !0, !1), void(k != l && D.setcellvalue(b, D.getcolumn(c).displayfield, l, !0, !1))
                        }
                    }
                    var G = this.vScrollInstance.value;
                    if(this._updating && 1 != e && (e = !1), 1 == e || void 0 == e) {
                        var D = this.that,
                            H = function() {
                                D.pageable && D.updatepagerdetails && (D.updatepagerdetails(), (D.autoheight || D.autorowheight) && D._updatepageviews())
                            },
                            I = this.groupable && this.groups.length > 0;
                        j && !I ? ((this.autoheight || this.autorowheight) && (this.prerenderrequired = !0), this.dataview.refresh(), this.rendergridcontent(!0, !1), H(), this._renderrows(this.virtualsizeinfo)) : this.sortcolumn && !I ? ((this.autoheight || this.autorowheight) && (this.prerenderrequired = !0), this.dataview.reloaddata(), this.rendergridcontent(!0, !1), H(), this._renderrows(this.virtualsizeinfo)) : this.groupable && this.groups.length > 0 ? ((this.autoheight || this.autorowheight) && (this.prerenderrequired = !0), this.pageable && this.groups.indexOf(c) != -1 ? (this._pagescache = new Array, this._cellscache = new Array, this.dataview.refresh(), this._render(!0, !0, !1, !1)) : (this._pagescache = new Array, this._cellscache = new Array, this.dataview.updateview(), this._renderrows(this.virtualsizeinfo))) : (this.dataview.updateview(), this._renderrows(this.virtualsizeinfo))
                    }
                    if(this.vScrollInstance.setPosition(G), this.showaggregates && this._updatecolumnsaggregates && this._updatecolumnsaggregates(), this.showfilterrow && this.filterable && this.filterrow) {
                        var J = this.getcolumn(c).filtertype;
                        "list" != J && "checkedlist" != J || this._updatelistfilters(!0)
                    }
                    return this._raiseEvent(19, {
                        rowindex: b,
                        datafield: c,
                        newvalue: d,
                        value: d,
                        oldvalue: k
                    }), !0
                }
            }
        },
        getcellvalue: function(a, b) {
            if(null == a || null == b) return null;
            var c = parseInt(a),
                d = a;
            if(isNaN(c) || (d = this.getrowdata(c)), null != d) {
                var e = d[b];
                return e
            }
            return null
        },
        getrows: function() {
            var b = this.dataview.records.length;
            if(this.virtualmode) {
                for(var c = new Array, d = 0; d < this.dataview.records.length; d++) {
                    var e = this.dataview.records[d];
                    e && c.push(e)
                }
                void 0 === this.dataview.records.length && a.each(this.dataview.records, function() {
                    var a = this;
                    a && c.push(a)
                });
                var f = 0;
                return this.pageable && (f = this.dataview.pagenum * this.dataview.pagesize), c.length > this.source._source.totalrecords - f ? c.slice(0, this.source._source.totalrecords - f) : c
            }
            if(this.dataview.sortdata) {
                for(var c = new Array, d = 0; d < b; d++) {
                    var g = {};
                    g = a.extend({}, this.dataview.sortdata[d].value), c[d] = g
                }
                return c
            }
            return this.dataview.records
        },
        getrowboundindexbyid: function(a) {
            var b = this.dataview.recordsbyid["id" + a];
            if(b && b.boundindex) return this.getboundindex(b);
            for(var c = this.getboundrows(), d = 0; d < c.length; d++)
                if(c[d] && c[d].uid == a) return d;
            return -1
        },
        getrowdatabyid: function(a) {
            var b = this.dataview.recordsbyid["id" + a];
            if(b) return b;
            var c = this.getrowboundindexbyid(a);
            return this.getboundrows()[c]
        },
        getrowdata: function(a) {
            if(void 0 == a && (a = 0), this.virtualmode) {
                var b = this.dataview.records[a];
                return b
            }
            var b = this.getboundrows()[a];
            return b
        },
        getrenderedrowdata: function(a, b) {
            if(void 0 == a && (a = 0), this.virtualmode) {
                var c = this.getrowvisibleindex(a),
                    d = this.dataview.loadedrecords[c];
                return d
            }
            var c = this.getrowvisibleindex(a);
            if(c >= 0) {
                if(this.groupable && this.groups.length > 0) var d = this.dataview.loadedrecords[c];
                else {
                    var d = this.dataview.loadedrecords[c];
                    if(this.pageable && (void 0 == b || 0 == b)) var d = this.dataview.loadedrecords[this.dataview.pagesize * this.dataview.pagenum + a]
                }
                return d
            }
            return null
        },
        getboundrows: function() {
            return this.dataview.cachedrecords
        },
        getrowdisplayindex: function(a) {
            for(var b = this.getdisplayrows(), c = 0; c < b.length; c++)
                if(b[c])
                    if(void 0 !== b[c].dataindex) {
                        if(b[c].dataindex == a) return b[c].visibleindex
                    } else if(b[c].boundindex == a) return b[c].visibleindex;
            return -1
        },
        getboundindex: function(a) {
            var b = a.boundindex;
            return this.groupable && this.groups.length > 0 && this.pageable && a.bounddata && (b = this.getrowboundindexbyid(a.bounddata.uid)), this.dataview.filters.length > 0 && (a.bounddata ? void 0 !== a.bounddata.dataindex && (b = a.bounddata.dataindex) : void 0 !== a.dataindex && (b = a.dataindex)), b
        },
        getrowboundindex: function(a) {
            var b = this.getdisplayrows()[a];
            return b ? void 0 !== b.dataindex ? b.dataindex : b.boundindex : -1
        },
        getdisplayrows: function() {
            return this.dataview.loadedrecords
        },
        getloadedrows: function() {
            return this.getdisplayrows()
        },
        getvisiblerowdata: function(a) {
            var b = this.getvisiblerows();
            return b ? b[a] : null
        },
        getloadedrowdata: function(a) {
            var b = this.getloadedrows();
            return b ? b[a] : null
        },
        getvisiblerows: function() {
            if(this.virtualmode) return this.dataview.loadedrecords;
            if(this.pageable) {
                for(var a = [], b = 0; b < this.dataview.pagesize; b++) {
                    var c = this.dataview.loadedrecords[b + this.dataview.pagesize * this.dataview.pagenum];
                    if(void 0 == c) break;
                    a.push(c)
                }
                return a
            }
            if(void 0 != this._startboundindex && void 0 != this._endboundindex) {
                for(var a = [], b = this._startvisibleindex; b <= this._endvisibleindex; b++) {
                    var c = this.dataview.loadedrecords[b];
                    if(void 0 == c) break;
                    a.push(c)
                }
                return a
            }
            return this.dataview.loadedrecords
        },
        getrowid: function(a) {
            if(void 0 == a && (a = 0), this.virtualmode) {
                var b = this.getrowvisibleindex(a),
                    c = this.dataview.loadedrecords[b];
                if(c) return c.uid
            } else {
                var c = null,
                    d = this.dataview.filters.length > 0;
                if(a >= 0 && a < this.dataview.bounditems.length && !d) {
                    if(this.groupable && this.groups.length > 0) var b = this.getrowvisibleindex(a),
                        c = this.dataview.loadedrecords[b];
                    else var b = this.getrowvisibleindex(a),
                        c = this.dataview.loadedrecords[b];
                    if(c) return c.uid
                }
                if(this.dataview.filters.length > 0) {
                    var c = this.getboundrows()[a];
                    return c && null != c.uid ? c.uid : null
                }
            }
            return null
        },
        _updateGridData: function(a) {
            var b = !1;
            this.filterable && this._initfilterpanel && this.dataview.filters.length && (b = !0), b ? (this.dataview.refresh(), "updaterow" == a ? (this._render(!0, !0, !1, !1, !1), this.invalidate()) : this.render()) : this.sortcolumn || this.groupable && this.groups.length > 0 ? (this.dataview.reloaddata(), this.render()) : (this._cellscache = new Array, this._pagescache = new Array, this._renderrows(this.virtualsizeinfo)), this.showfilterrow && this.filterable && this.filterrow && this._updatelistfilters(!0)
        },
        updaterow: function(b, c, d) {
            if(void 0 != b && void 0 != c) {
                var e = this.that,
                    f = !1;
                e._datachanged = !0;
                var g = function(b, c, e) {
                    if(b._loading) throw new Error("jqxGrid: " + b.loadingerrormessage);
                    var f = !1;
                    a.isArray(c) ? (a.each(c, function(a, c) {
                        f = b.dataview.updaterow(this, e[a], !1)
                    }), b._cellscache = new Array, b._pagescache = new Array, b.dataview.refresh()) : f = b.dataview.updaterow(c, e);
                    var g = b.vScrollInstance.value;
                    if(void 0 != d && 1 != d || void 0 != b._updating && 0 != b._updating || b._updateGridData("updaterow"), b.showaggregates && b._updatecolumnsaggregates && b._updatecolumnsaggregates(), b.source && b.source._knockoutdatasource && !b._updateFromAdapter && b.autokoupdates && b.source._source._localdata) {
                        var h = b.dataview.recordsbyid["id" + c],
                            i = b.dataview.records.indexOf(h),
                            j = b.source._source._localdata()[i];
                        b.source.suspendKO = !0, b.source._source._localdata.replace(j, a.extend({}, h)), b.source.suspendKO = !1
                    }
                    var k = b.source && b.source._source.localdata && "observableArray" === b.source._source.localdata.name;
                    if(k && !b.source._source.localdata._updating) {
                        b.source._source.localdata._updating = !0;
                        var l = b.getrowboundindexbyid(c);
                        b.source._source.localdata.set(l, e), b.source._source.localdata._updating = !1
                    }
                    return b.vScrollInstance.setPosition(g), f
                };
                if(this.source.updaterow) {
                    var h = function(a) {
                        1 == a || void 0 == a ? g(e, b, c) : f = !1
                    };
                    try {
                        f = this.source.updaterow(b, c, h), void 0 == f && (f = !0)
                    } catch(a) {
                        f = !1
                    }
                } else f = g(e, b, c);
                return f
            }
            return !1
        },
        deleterow: function(b, c) {
            if(void 0 != b) {
                this._datachanged = !0;
                var d = !1,
                    e = this.that,
                    f = this.getrowboundindexbyid(b),
                    g = new Array;
                new Array;
                if(void 0 != f && (this.selectedrowindexes.indexOf(f) >= 0 && this.selectedrowindexes.splice(this.selectedrowindexes.indexOf(f), 1), this.selectedrowindex == f && (this.selectedrowindex = -1), !this.virtualmode))
                    if(e.selectionmode.indexOf("row") >= 0) a.each(this.selectedrowindexes, function() {
                        var a = e.getrowid(this);
                        g.push(a)
                    }), this.selectedrowindexes = new Array, this.selectedrowindex = -1;
                    else if(e.selectionmode.indexOf("cell") >= 0)
                        for(var h in e.selectedcells) {
                            var i = e.selectedcells[h],
                                j = e.getrowid(i.rowindex);
                            i.rowid = j
                        }
                var k = function(b, d) {
                    if(b._loading) throw new Error("jqxGrid: " + b.loadingerrormessage);
                    var e = !1,
                        h = b.vScrollInstance.value;
                    if(a.isArray(d)) a.each(d, function() {
                        e = b.dataview.deleterow(this, !1)
                    }), b._cellscache = new Array, b._pagescache = new Array, b.dataview.refresh();
                    else var e = b.dataview.deleterow(d);
                    if(!b.virtualmode)
                        if(b.selectionmode.indexOf("row") >= 0) a.each(g, function() {
                            var a = b.getrowboundindexbyid(this);
                            a != -1 && b.selectrow(a, !1)
                        });
                        else {
                            var i = new Array;
                            for(var j in b.selectedcells) {
                                var k = b.selectedcells[j],
                                    l = k.rowid,
                                    m = b.getrowboundindexbyid(l);
                                m != -1 && (k.rowindex = m, i[m + "_" + k.datafield] = k)
                            }
                            b.selectedcells = i
                        }
                    void 0 != b._updating && 0 != b._updating || void 0 != c && 1 != c || setTimeout(function() {
                        b._render(!0, !0, !1, !1), "visible" != b.vScrollBar.css("visibility") && (b._arrange(), b._updatecolumnwidths(), b._updatecellwidths(), b._renderrows(b.virtualsizeinfo))
                    }), b.source && b.source._knockoutdatasource && !b._updateFromAdapter && b.autokoupdates && b.source._source._localdata && (b.source.suspendKO = !0, b.source._source._localdata.pop(rowdata), b.source.suspendKO = !1);
                    var n = b.source && b.source._source.localdata && "observableArray" === b.source._source.localdata.name;
                    if(n && (b.source._source.localdata._updating || (b.source._source.localdata._updating = !0, b.source._source.localdata.splice(f, 1), b.source._source.localdata._updating = !1)), b.dataview.sortby) {
                        var o = b.getsortinformation();
                        o.sortcolumn && (b.dataview.clearsortdata(), b.dataview.sortby(o.sortcolumn, o.sortdirection ? o.sortdirection.ascending : null))
                    }
                    return b.vScrollInstance.setPosition(h), e
                };
                if(this.source.deleterow) {
                    var l = function(a) {
                        1 != a && void 0 != a || k(e, b)
                    };
                    try {
                        this.source.deleterow(b, l), void 0 == d && (d = !0)
                    } catch(a) {
                        d = !1
                    }
                } else d = k(e, b);
                return d
            }
            return !1
        },
        addrow: function(b, c, d) {
            if(void 0 != c) {
                this._datachanged = !0, void 0 == d && (d = "last");
                var e = !1,
                    f = this.that;
                if(null == b) {
                    var g = this.dataview.filters && this.dataview.filters.length > 0,
                        h = g ? this.dataview.cachedrecords.length : this.dataview.totalrecords;
                    if(a.isArray(c)) {
                        var i = new Array;
                        a.each(c, function(a, b) {
                            var d = f.dataview.getid(f.dataview.source.id, c[a], h + a);
                            i.push(d)
                        }), b = i
                    } else
                        for(b = this.dataview.getid(this.dataview.source.id, c, h); null != this.dataview.recordsbyid["id" + b];) b++
                }
                var j = function(b, c, d, e) {
                    if(b._loading) throw new Error("jqxGrid: " + b.loadingerrormessage);
                    var f = b.vScrollInstance.value,
                        g = !1;
                    a.isArray(d) ? (a.each(d, function(a, d) {
                        void 0 != this.dataindex && delete this.dataindex;
                        var f = null;
                        null != c && null != c[a] && (f = c[a]), g = b.dataview.addrow(f, this, e, !1)
                    }), b._cellscache = new Array, b._pagescache = new Array, b.dataview.refresh()) : (void 0 != d && void 0 != d.dataindex && delete d.dataindex, g = b.dataview.addrow(c, d, e)), void 0 != b._updating && 0 != b._updating || setTimeout(function() {
                        b._render(!0, !0, !1, !1), b.invalidate()
                    }), b.source && b.source._knockoutdatasource && !b._updateFromAdapter && b.autokoupdates && b.source._source._localdata && (b.source.suspendKO = !0, b.source._source._localdata.push(d), b.source.suspendKO = !1);
                    var h = b.source && b.source._source.localdata && "observableArray" === b.source._source.localdata.name;
                    if(h && !b.source._source.localdata._updating) {
                        b.source._source.localdata._updating = !0;
                        var i = b.getrowboundindexbyid(c);
                        b.source._source.localdata.set(i, d), b.source._source.localdata._updating = !1
                    }
                    return "deferred" != b.scrollmode ? b.vScrollInstance.setPosition(f) : b.vScrollInstance.setPosition(0), g
                };
                if(this.source.addrow) {
                    var k = function(a, e) {
                        1 != a && void 0 != a || (void 0 != e && (b = e), j(f, b, c, d))
                    };
                    try {
                        e = this.source.addrow(b, c, d, k), void 0 == e && (e = !0)
                    } catch(a) {
                        e = !1
                    }
                    if(0 == e) return !1
                } else j(this, b, c, d);
                return e
            }
            return !1
        },
        _findvisiblerow: function(a, b) {
            void 0 == a && (a = parseInt(this.vScrollInstance.value));
            var c = 0;
            void 0 != b && null != b || (b = this.rows.records);
            for(var d = b.length; c <= d;) {
                mid = parseInt((c + d) / 2);
                var e = b[mid];
                if(void 0 == e) break;
                if(e.top > a && e.top + e.height > a) d = mid - 1;
                else {
                    if(!(e.top < a && e.top + e.height < a)) return mid;
                    c = mid + 1
                }
            }
            return -1
        },
        _updatecellwidths: function() {
            var a = this.virtualsizeinfo;
            if(a) {
                var b = this.that;
                if(void 0 != b.gridcontent) {
                    void 0 == b.table && (b.table = b.gridcontent.find("#contenttable" + b.element.id));
                    var c = b.groupable && b.groups.length > 0,
                        d = 0,
                        e = a.visiblerecords;
                    if(b.pageable && (b.autoheight || b.autorowheight) && (e = b.dataview.pagesize, b.groupable && (b.dataview.updateview(), e = b.dataview.rows.length)), b.groupable || b.pageable || !b.autoheight && !b.autorowheight || (e = b.dataview.totalrecords), b.rowdetails && (e += b.dataview.pagesize), b.columns.records) {
                        for(var f = b.columns.records.length, g = b.table[0].rows, h = 0; h < e; h++) {
                            var i = g[h];
                            if(!i) break;
                            for(var j = i.cells, k = 0, l = 0; l < f; l++) {
                                var m = b.columns.records[l],
                                    n = m.width,
                                    o = j[l];
                                parseInt(o.style.left) != k && (o.style.left = k + "px"), parseInt(o.style.width) != n && (o.style.width = n + "px"), m.hidden && m.hideable ? o.style.display = "none" : k += parseFloat(n)
                            }
                            0 == d && (b.table.width(parseFloat(k) + 2), d = k)
                        }
                        b.showaggregates && b._updateaggregates && b._updateaggregates(), b.showfilterrow && b.filterable && b._updatefilterrowui && b._updatefilterrowui(), b.showeverpresentrow && b._updateaddnewrowui(), b._updatescrollbarsafterrowsprerender(), c && b._renderrows(b.virtualsizeinfo)
                    }
                }
            }
        },
        _updatescrollbarsafterrowsprerender: function() {
            var a = this.that,
                b = a.hScrollBar[0].style.visibility,
                c = 0,
                d = a.vScrollBar[0].style.visibility;
            "visible" == d && (c = a.scrollbarsize + 3), 0 == a.scrollbarsize && (c = 0), a.scrollbarautoshow && (c = 0);
            var e = a.element.style.width;
            if(e = e.toString().indexOf("%") >= 0 ? a.host.width() : parseInt(e), parseInt(a.table[0].style.width) - 2 > e - c) {
                if("visible" != b && (a.autowidth || (a.hScrollBar[0].style.visibility = "visible"), a._arrange()), "visible" == d) {
                    if("deferred" == a.scrollmode || a.virtualmode) a._updatevscrollbarmax();
                    else if(a.virtualsizeinfo) {
                        var f = a.virtualsizeinfo.virtualheight - a._gettableheight();
                        !isNaN(f) && f > 0 && ("hidden" != b ? a.vScrollBar.jqxScrollBar("max", f + a.scrollbarsize + 4) : a.vScrollBar.jqxScrollBar("max", f))
                    }
                } else c = -2;
                a.hScrollBar.jqxScrollBar("max", c + a.table.width() - a.host.width())
            } else "hidden" != b && (a.hScrollBar.css("visibility", "hidden"), a._arrange());
            a._renderhorizontalscroll()
        },
        _prerenderrows: function(b) {
            var c = this.that;
            if(1 == c.prerenderrequired) {
                if(c.prerenderrequired = !1, c.editable && c._destroyeditors && c._destroyeditors(), void 0 == c.gridcontent) return;
                c.gridcontent.find("#contenttable" + c.element.id).remove(), null != c.table && (c.table.remove(), c.table = null), c.table = a('<div id="contenttable' + c.element.id + '" style="overflow: hidden; position: relative;"></div>'), c.gridcontent.addClass(c.toTP("jqx-grid-content")), c.gridcontent.addClass(c.toTP("jqx-widget-content")), c.gridcontent.append(c.table);
                var d = c.groupable && c.groups.length > 0,
                    e = 0;
                c.table[0].rows = new Array;
                var f = c.toTP("jqx-grid-cell");
                d && (f = " " + c.toTP("jqx-grid-group-cell"));
                var g = b.visiblerecords;
                if(c.pageable && (c.autoheight || c.autorowheight) && (g = c.dataview.pagesize, c.groupable && (c.dataview.updateview(), g = c.dataview.rows.length, g < c.dataview.pagesize && (g = c.dataview.pagesize))), c.pageable || !c.autoheight && !c.autorowheight || (g = c.dataview.totalrecords), c.groupable && c.groups.length > 0 && (c.autoheight || c.autorowheight) && !c.pageable && (g = c.dataview.rows.length), c.rowdetails && (g += c.autoheight || c.autorowheight ? c.dataview.pagesize : g), !c.columns.records) return;
                var h = c.columns.records.length;
                a.jqx.browser.msie && a.jqx.browser.version > 8 && c.table.css("opacity", "0.99"), a.jqx.browser.mozilla, navigator.userAgent.indexOf("Safari") != -1 && c.table.css("opacity", "0.99");
                var i = a.jqx.browser.msie && a.jqx.browser.version < 8;
                i && c.host.attr("hideFocus", "true");
                var j = c.tableZIndex;
                g * h > j && (j = g * h);
                var k = (0 == c.dataview.records.length, c.isTouchDevice(), "");
                c._hiddencolumns = !1;
                for(var l = 0; l < g; l++) {
                    var m = '<div role="row" style="position: relative; height:' + c.rowsheight + 'px;" id="row' + l + c.element.id + '">';
                    if(i) {
                        var m = '<div role="row" style="position: relative; z-index: ' + j + "; height:" + c.rowsheight + 'px;" id="row' + l + c.element.id + '">';
                        j--
                    }
                    for(var n = 0, o = 0; o < h; o++) {
                        var p = c.columns.records[o],
                            q = p.width;
                        if(q < p.minwidth && (q = p.minwidth), q > p.maxwidth && (q = p.maxwidth), c.rtl) {
                            var r = j - h + 2 * o,
                                s = '<div role="gridcell" style="left: ' + n + "px; z-index: " + r + "; width:" + q + "px;";
                            j--
                        } else
                            var s = '<div role="gridcell" style="left: ' + n + "px; z-index: " + j-- + "; width:" + q + "px;";
                        p.hidden && p.hideable ? (s += "display: none;", c._hiddencolumns = !0, j++) : n += q, s += '" class="' + f + '">';
                        var t = this._defaultcellsrenderer("", p);
                        s += t, s += "</div>", m += s
                    }
                    0 == e && (c.table.width(parseInt(n) + 2), e = n), m += "</div>", k += m
                }
                c.WinJS ? MSApp.execUnsafeLocalFunction(function() {
                    c.table.html(k)
                }) : c.table[0].innerHTML = k, c.table[0].rows = new Array;
                for(var u = c.table.children(), l = 0; l < g; l++) {
                    var v = u[l];
                    c.table[0].rows.push(v), v.cells = new Array;
                    for(var w = a(v).children(), o = 0; o < h; o++) v.cells.push(w[o])
                }
                if(0 == g) {
                    var n = 0;
                    if(c.showemptyrow) {
                        var m = a('<div style="position: relative;" id="row0' + c.element.id + '"></div>');
                        c.table.append(m), m.height(c.rowsheight), c.table[0].rows[0] = m[0], c.table[0].rows[0].cells = new Array
                    }
                    for(var o = 0; o < h; o++) {
                        var p = c.columns.records[o],
                            q = p.width;
                        if(c.showemptyrow) {
                            var s = a('<div style="position: absolute; height: 100%; left: ' + n + "px; z-index: " + j-- + "; width:" + q + 'px;" class="' + f + '"></div>');
                            s.height(c.rowsheight), m.append(s), c.table[0].rows[0].cells[o] = s[0]
                        }
                        q < p.minwidth && (q = p.minwidth), q > p.maxwidth && (q = p.maxwidth), p.hidden && p.hideable || (n += q)
                    }
                    c.table.width(parseInt(n) + 2), e = n
                }
                c._updatescrollbarsafterrowsprerender(), c.rendered && c.rendered("rows"), c.toCompile = new Array, c._addoverlayelement()
            }
        },
        _groupsheader: function() {
            return this.groupable && this.showgroupsheader
        },
        _arrange: function() {
            var a = null,
                b = null;
            this.tableheight = null;
            var c = this.that,
                d = !1,
                e = !1;
            if(null != c.width && c.width.toString().indexOf("px") != -1 ? a = c.width : void 0 == c.width || isNaN(c.width) || (a = c.width), null != c.width && c.width.toString().indexOf("%") != -1 && (a = c.width, d = !0), c.scrollbarautoshow && (c.vScrollBar[0].style.display = "none", c.hScrollBar[0].style.display = "none", c.vScrollBar[0].style.zIndex = c.tableZIndex + c.headerZIndex, c.hScrollBar[0].style.zIndex = c.tableZIndex + c.headerZIndex), c.autowidth) {
                for(var f = 0, g = 0; g < c.columns.records.length; g++) {
                    var h = c.columns.records[g].width;
                    "auto" == h ? (h = c._measureElementWidth(c.columns.records[g].text), f += h) : f += h
                }
                "hidden" != c.vScrollBar.css("visibility") && (f += c.scrollbarsize + 4), a = f, c.width = a
            }
            null != c.height && c.height.toString().indexOf("px") != -1 ? b = c.height : void 0 == c.height || isNaN(c.height) || (b = c.height), null != c.height && c.height.toString().indexOf("%") != -1 && (b = c.height, e = !0);
            var i = function() {
                var a = 0,
                    b = c.showheader && null != c.columnsheader ? c.columnsheader.height() + 2 : 0;
                return a += b, c.pageable && (a += c.pagerheight), c._groupsheader() && (a += c.groupsheaderheight), c.showtoolbar && (a += c.toolbarheight), c.showstatusbar && (a += c.statusbarheight), c.showeverpresentrow && "bottom" === c.everpresentrowposition && (a += c.everpresentrowheight), "visible" == c.hScrollBar[0].style.visibility && (a += 20), a
            };
            if(c.autoheight && c.virtualsizeinfo)
                if(c.pageable && c.gotopage) {
                    var j = 0;
                    b = j + (c._pageviews[0] ? c._pageviews[0].height : 0), b += i(), c.showemptyrow && 0 == c.dataview.totalrecords && (b += c.rowsheight)
                } else {
                    var j = c.host.height() - c._gettableheight();
                    c._pageviews.length > 0 ? (b = j + c._pageviews[c._pageviews.length - 1].height + c._pageviews[c._pageviews.length - 1].top, c.vScrollBar[0].style.visibility = "hidden") : (b = i(), c.showemptyrow && (b += c.rowsheight))
                }
            else c.autoheight && (b = c.dataview.totalrecords * c.rowsheight, c.pageable && c.gotopage && (b = c.pagesize * c.rowsheight), c._loading && (b = 250, c.dataloadelement.height(b)), b += i(), b > 1e4 && (b = 1e4));
            null != a ? (a = parseInt(a), d ? c.element.style.width = c.width : c.element.style.width != parseInt(c.width) + "px" && (c.element.style.width = parseInt(c.width) + "px"), d && (a = c.host.width(), a <= 2 && (a = 600, c.host.width(a)), c._oldWidth || (c._oldWidth = a))) : c.host.width(250), null != b ? (e || (b = parseInt(b)), e ? c.element.style.height = c.height : c.element.style.height != parseInt(b) + "px" && (c.element.style.height = parseInt(b) + "px"), e && !c.autoheight && (b = c.host.height(), 0 == b && (b = 400, c.host.height(b)), c._oldHeight || (c._oldHeight = b))) : c.host.height(250), c.autoheight && (c.tableheight = null, c._gettableheight());
            var k = 0;
            if(c.showtoolbar ? (c.toolbar.width(a), c.toolbar.height(c.toolbarheight - 1), c.toolbar.css("top", 0), k += c.toolbarheight, b -= parseInt(c.toolbarheight)) : c.toolbar[0].style.height = "0px", c.showstatusbar ? (c.showaggregates ? c.statusbar.width(c.table ? Math.max(a, c.table.width()) : a) : c.statusbar.width(a), c.statusbar.height(c.statusbarheight)) : c.statusbar[0].style.height = "0px", c.showeverpresentrow && "bottom" === c.everpresentrowposition ? (c.addnewrow.width(a), c.addnewrow.height(c.everpresentrowheight)) : c.addnewrow[0].style.height = "0px", c._groupsheader()) {
                c.groupsheader.width(a), c.groupsheader.height(c.groupsheaderheight), c.groupsheader.css("top", k);
                var l = c.groupsheader.height() + 1;
                k += l, b > l && (b -= parseInt(l))
            } else {
                c.groupsheader[0].style.width != a + "px" && (c.groupsheader[0].style.width = parseInt(a) + "px"), c.groupsheader[0].style.height = "0px", c.groupsheader[0].style.top != k + "px" && c.groupsheader.css("top", k);
                var l = c.showgroupsheader && c.groupable ? c.groupsheaderheight : 0,
                    m = k + l + "px";
                c.content[0].style.top != m && c.content.css("top", k + c.groupsheaderheight)
            }
            var n = c.scrollbarsize;
            isNaN(n) && (n = parseInt(n), isNaN(n) ? n = "17px" : n += "px"), n = parseInt(n);
            var o = 4,
                p = 2,
                q = 0;
            "visible" == c.vScrollBar[0].style.visibility && (q = n + o), "visible" == c.hScrollBar[0].style.visibility && (p = n + o + 2), 0 == n && (q = 0, p = 0);
            var r = 0;
            c.pageable && (r = c.pagerheight, p += c.pagerheight), c.showstatusbar && (p += c.statusbarheight, r += c.statusbarheight), c.showeverpresentrow && "bottom" === c.everpresentrowposition && (p += c.everpresentrowheight, r += c.everpresentrowheight), c.hScrollBar[0].style.height != n + "px" && (c.hScrollBar[0].style.height = parseInt(n) + "px"), c.hScrollBar[0].style.top == k + b - o - n - r + "px" && "0px" == c.hScrollBar[0].style.left || c.hScrollBar.css({
                top: k + b - o - n - r + "px",
                left: "0px"
            });
            var s = c.hScrollBar[0].style.width,
                t = !1,
                u = !1;
            0 == q ? s != a - 2 + "px" && (c.hScrollBar.width(a - 2), t = !0) : s != a - n - o + "px" && (c.hScrollBar.width(a - n - o + "px"), t = !0), c.autoheight || (c.vScrollBar[0].style.width != n + "px" && (c.vScrollBar.width(n), u = !0), c.vScrollBar[0].style.height != parseInt(b) - p + "px" && (c.vScrollBar.height(parseInt(b) - p + "px"), u = !0), c.vScrollBar[0].style.left == parseInt(a) - parseInt(n) - o + "px" && c.vScrollBar[0].style.top == k + "px" || c.vScrollBar.css({
                left: parseInt(a) - parseInt(n) - o + "px",
                top: k
            })), c.rtl && (c.vScrollBar.css({
                left: "0px",
                top: k
            }), "hidden" != c.vScrollBar.css("visibility") && c.hScrollBar.css({
                left: n + 2
            }));
            var v = c.vScrollInstance;
            v.disabled = c.disabled, c.autoheight || u && v.refresh();
            var w = c.hScrollInstance;
            w.disabled = c.disabled, t && w.refresh(), c.autowidth && (c.hScrollBar[0].style.visibility = "hidden"), c.statusbarheight = parseInt(c.statusbarheight), c.toolbarheight = parseInt(c.toolbarheight);
            var x = function(a) {
                if("visible" == a.vScrollBar[0].style.visibility && "visible" == a.hScrollBar[0].style.visibility) {
                    a.bottomRight[0].style.visibility = "visible", a.bottomRight.css({
                        left: 1 + parseInt(a.vScrollBar.css("left")),
                        top: parseInt(a.hScrollBar.css("top"))
                    }), a.rtl && a.bottomRight.css("left", "0px"), a.bottomRight.width(parseInt(n) + 3), a.bottomRight.height(parseInt(n) + 4);
                    var b = a.showeverpresentrow && "bottom" == a.everpresentrowposition,
                        c = b ? a.everpresentrowheight : 0;
                    c > 0 && !a.showaggregates && (a.bottomRight.css("z-index", 99), a.bottomRight.height(parseInt(n) + 4 + c), a.bottomRight.css({
                        top: parseInt(a.hScrollBar.css("top")) - c
                    })), a.showaggregates && (a.bottomRight.css("z-index", 99), a.bottomRight.height(parseInt(n) + 4 + a.statusbarheight + c), a.bottomRight.css({
                        top: parseInt(a.hScrollBar.css("top")) - a.statusbarheight - c
                    }))
                } else a.bottomRight[0].style.visibility = "hidden"
            };
            if(x(this), c.content[0].style.width != a - q + "px" && c.content.width(a - q), c.content[0].style.height != b - p + 3 + "px" && c.content.height(b - p + 3), c.scrollbarautoshow && (c.content[0].style.width != a + "px" && c.content.width(a), c.content[0].style.height != b + "px" && c.content.height(b)), c.content[0].style.top != k + "px" && c.content.css("top", k), c.rtl && (c.content.css("left", q), c.scrollbarautoshow && c.content.css("left", "0px"), c.table)) {
                var y = c.table.width();
                y < a - q && c.content.css("left", a - y)
            }
            if(c.showstatusbar && (c.statusbar.css("top", k + b - c.statusbarheight - (c.pageable ? c.pagerheight : 0)), c.showaggregates && ("visible" == c.hScrollBar.css("visibility") && (c.hScrollBar.css({
                    top: k + b - o - n - r + c.statusbarheight + "px"
                }), c.statusbar.css("top", 1 + k + b - n - 5 - c.statusbarheight - (c.pageable ? c.pagerheight : 0))), x(this)), c.rtl && ("visible" != c.hScrollBar.css("visibility") ? c.statusbar.css("left", c.content.css("left")) : c.statusbar.css("left", "0px"))), c.showeverpresentrow && "bottom" === c.everpresentrowposition && (c.addnewrow.css("top", k + b - (c.showstatusbar ? c.statusbarheight : 0) - (c.pageable ? c.pagerheight : 0) - c.everpresentrowheight), c.rtl && ("visible" != c.hScrollBar.css("visibility") ? c.addnewrow.css("left", c.content.css("left")) : c.addnewrow.css("left", "0px"))), c.pageable ? (c.pager.width(a), c.pager.height(c.pagerheight), c.pager.css("top", k + b - c.pagerheight - 1)) : c.pager[0].style.height = "0px", null != c.table) {
                var z = -2;
                if("visible" == c.vScrollBar[0].style.visibility && (z = c.scrollbarsize + 3), "visible" == c.hScrollBar[0].style.visibility) {
                    var A = z + c.table.width() - c.host.width();
                    A >= 0 && c.hScrollBar.jqxScrollBar("max", A), "visible" == c.hScrollBar[0].style.visibility && 0 == A && (c.hScrollBar[0].style.visibility = "hidden", c._arrange())
                }
            }
            a != parseInt(c.dataloadelement[0].style.width) && (c.dataloadelement[0].style.width = c.element.style.width), b != parseInt(c.dataloadelement[0].style.height) && (c.dataloadelement[0].style.height = c.element.style.height), c._hostwidth = a
        },
        destroy: function() {
            if(delete a.jqx.dataFormat.datescache, delete this.gridlocalization, a.jqx.utilities.resize(this.host, null, !0), ("" != document.referrer || window.frameElement) && null != window.top && window.top != window.self && this.removeHandler(a(window.top.document), "mouseup.grid" + this.element.id), this.table && this.table[0]) {
                for(var b = this.table[0].rows.length, c = 0; c < b; c++) {
                    for(var d = this.table[0].rows[c], e = d.cells, f = e.length, g = 0; g < f; g++) a(d.cells[g]).remove(), d.cells[g] = null, delete d.cells[g];
                    d.cells = null, d.cells && delete d.cells, a(this.table[0].rows[c]).remove(), this.table[0].rows[c] = null
                }
                try {
                    delete this.table[0].rows
                } catch(a) {}
                this.table.remove(), delete this.table
            }
            if(this.columns && this.columns.records) {
                for(var c = 0; c < this.columns.records.length; c++) {
                    var h = this.columns.records[c];
                    h.addnewrowwidget && h.destroyeverpresentrowwidget && h.destroyeverpresentrowwidget(h.addnewrowwidget), this._removecolumnhandlers(this.columns.records[c]), h.element && (a(h.element).remove(), a(h.sortasc).remove(), a(h.sortdesc).remove(), a(h.filtericon).remove(), a(h.menu).remove(), h.element = null, h.uielement = null, h.sortasc = null, h.sortdesc = null, h.filtericon = null, h.menu = null, delete h.element, delete h.uielement, delete h.sortasc, delete h.sortdesc, delete h.filtericon, delete h.menu, delete this.columnsrow[0].cells[c])
                }
                try {
                    delete this.columnsrow[0].cells
                } catch(a) {}
                delete this.columnsrow
            }
            if(a.removeData(document.body, "contextmenu" + this.element.id), this.host.jqxDropDownList && this._destroyfilterpanel && this._destroyfilterpanel(), this.editable && this._destroyeditors && this._destroyeditors(), this.filterable && this._destroyedfilters && this.showfilterrow && this._destroyedfilters(), this.host.jqxMenu && this.gridmenu && (this.removeHandler(a(document), "click.menu" + this.element.id), this.removeHandler(this.gridmenu, "keydown"), this.removeHandler(this.gridmenu, "closed"), this.removeHandler(this.gridmenu, "itemclick"), this.gridmenu.jqxMenu("destroy"), this.gridmenu = null), this.pagershowrowscombo && (this.pagershowrowscombo.jqxDropDownList("destroy"), this.pagershowrowscombo = null), this.pagerrightbutton && (this.removeHandler(this.pagerrightbutton, "mousedown"), this.removeHandler(this.pagerrightbutton, "mouseup"), this.removeHandler(this.pagerrightbutton, "click"), this.pagerrightbutton.jqxButton("destroy"), this.pagerrightbutton = null), this.pagerleftbutton && (this.removeHandler(this.pagerleftbutton, "mousedown"), this.removeHandler(this.pagerleftbutton, "mouseup"), this.removeHandler(this.pagerleftbutton, "click"), this.pagerleftbutton.jqxButton("destroy"), this.removeHandler(a(document), "mouseup.pagerbuttons" + this.element.id), this.pagerleftbutton = null), this.removeHandler(a(document), "selectstart." + this.element.id), this.removeHandler(a(document), "mousedown.resize" + this.element.id), this.removeHandler(a(document), "mouseup.resize" + this.element.id), this.removeHandler(a(document), "mousemove.resize" + this.element.id), this.isTouchDevice()) {
                var i = a.jqx.mobile.getTouchEventName("touchmove") + ".resize" + this.element.id,
                    j = a.jqx.mobile.getTouchEventName("touchstart") + ".resize" + this.element.id,
                    k = a.jqx.mobile.getTouchEventName("touchend") + ".resize" + this.element.id;
                this.removeHandler(a(document), i), this.removeHandler(a(document), j), this.removeHandler(a(document), k)
            }
            if(this.removeHandler(a(document), "mousedown.reorder" + this.element.id), this.removeHandler(a(document), "mouseup.reorder" + this.element.id), this.removeHandler(a(document), "mousemove.reorder" + this.element.id), this.isTouchDevice()) {
                var i = a.jqx.mobile.getTouchEventName("touchmove") + ".reorder" + this.element.id,
                    j = a.jqx.mobile.getTouchEventName("touchstart") + ".reorder" + this.element.id,
                    k = a.jqx.mobile.getTouchEventName("touchend") + ".reorder" + this.element.id;
                this.removeHandler(a(document), i), this.removeHandler(a(document), j), this.removeHandler(a(document), k)
            }
            if(this.removeHandler(a(window), "resize." + this.element.id), this.resizeline && this.resizeline.remove(), this.resizestartline && this.resizestartline.remove(), this.groupable) {
                var i = "mousemove.grouping" + this.element.id,
                    j = "mousedown.grouping" + this.element.id,
                    k = "mouseup.grouping" + this.element.id;
                this.removeHandler(a(document), i), this.removeHandler(a(document), j), this.removeHandler(a(document), k)
            }
            if(this.columnsreorder) {
                var i = "mousemove.reorder" + this.element.id,
                    j = "mousedown.reorder" + this.element.id,
                    k = "mouseup.reorder" + this.element.id;
                this.removeHandler(a(document), i), this.removeHandler(a(document), j), this.removeHandler(a(document), k), delete this.columnsbounds
            }
            if(this.content && (this.removeHandler(this.content, "mousedown"), this.removeHandler(this.content, "scroll")), this._removeHandlers(), this.hScrollInstance.destroy(), this.vScrollInstance.destroy(), this.hScrollBar.remove(), this.vScrollBar.remove(), this._clearcaches(), delete this.hScrollInstance, delete this.vScrollInstance, delete this.visiblerows, delete this.hittestinfo, delete this.rows, delete this.columns, delete this.columnsbydatafield, delete this.pagescache, delete this.pageviews, delete this.cellscache, delete this.heights, delete this.hiddens, delete this.hiddenboundrows, delete this.heightboundrows, delete this.detailboundrows, delete this.details, delete this.expandedgroups, delete this._rowdetailscache, delete this._rowdetailselementscache, delete this.columnsmenu, this.columnsheader && (this.columnsheader.remove(), delete this.columnsheader), this.selectionarea && (this.selectionarea.remove(), delete this.selectionarea), this.menuitemsarray && this.menuitemsarray.length)
                for(var l = this.menuitemsarray.length, c = 0; c < l; c++) a(this.menuitemsarray[c]).remove();
            delete this.menuitemsarray, this.dataview._clearcaches(), this.content.removeClass(), this.content.remove(), this.content = null, delete this.content, this.vScrollBar = null, this.hScrollBar = null, delete this.hScrollBar, delete this.hScrollBar, this.gridcontent && (this.gridcontent.remove(), delete this.gridcontent), this.gridmenu && (this.gridmenu = null, delete this.gridmenu), delete this._mousemovefunc, delete this._mousewheelfunc, this.dataview.destroy(), delete this.dataview, this.bottomRight.remove(), delete this.bottomRight, this.wrapper.remove(), delete this.wrapper, this.pagerdiv && (this.pagerdiv.remove(), delete this.pagerdiv), this.pagerpageinput && (this.pagerpageinput.remove(), delete this.pagerpageinput), this.pagergoto && (this.pagergoto.remove(), delete this.pagergoto), this.pagershowrows && (this.pagershowrows.remove(), delete this.pagershowrows), this.pagerfirstbutton && (this.pagerfirstbutton.remove(), delete this.pagerfirstbutton), this.pagerlastbutton && (this.pagerlastbutton.remove(), delete this.pagerlastbutton), this.pagerbuttons && (this.pagerbuttons.remove(), delete this.pagerbuttons), this.pagerdetails && (this.pagerdetails.remove(), delete this.pagerdetails), this.pagergotoinput && (this.pagergotoinput.remove(), delete this.pagergotoinput), this.pager.remove(), delete this.pager, this.groupsheader.remove(), delete this.groupsheader, this.dataloadelement.remove(), delete this.dataloadelement, this.toolbar.remove(), delete this.toolbar, this.statusbar.remove(), delete this.statusbar, this.host.removeData(), this.host.removeClass(), this.host.remove(), this.host = null, delete this.host, delete this.element, delete this.set, delete this.get, delete this.that, delete this.call
        },
        _initializeColumns: function() {
            var c = this.source ? this.source.datafields : null;
            null == c && this.source && this.source._source && (c = this.source._source.datafields);
            var d = !!c && c.length > 0;
            if(this.autogeneratecolumns) {
                var e = new Array;
                if(c) a.each(c, function() {
                    var a = {
                        datafield: this.name,
                        text: this.text || this.name,
                        cellsformat: this.format || ""
                    };
                    e.push(a)
                });
                else if(this.source.records.length > 0) {
                    var f = this.source.records[0];
                    for(obj in f)
                        if("uid" != obj) {
                            var g = {
                                width: 100,
                                datafield: obj,
                                text: obj
                            };
                            e.push(g)
                        }
                }
                this.columns = e
            }
            if(this.columns && this.columns.records)
                for(var h = 0; h < this.columns.records.length; h++) this._removecolumnhandlers(this.columns.records[h]);
            var i = this.that,
                j = new a.jqx.collection(this.element),
                k = 0;
            if(this._haspinned = !1, this._columns ? this.columns = this._columns : this._columns = this.columns, this.groupable && a.each(this.groups, function(a) {
                    var c = new b(i, this);
                    c.visibleindex = k++, c.width = i.groupindentwidth, j.add(c), c.grouped = !0, c.filterable = !1, c.sortable = !1, c.editable = !1, c.resizable = !1, c.draggable = !1
                }), this.rowdetails && this.showrowdetailscolumn) {
                var g = new b(i, this);
                g.visibleindex = k++, g.width = i.groupindentwidth, g.pinned = !0, g.editable = !1, g.filterable = !1, g.draggable = !1, g.groupable = !1, g.resizable = !1, j.add(g), i._haspinned = !0
            }
            if("checkbox" == this.selectionmode) {
                var g = new b(i, null);
                g.visibleindex = k++, g.width = i.groupindentwidth, g.checkboxcolumn = !0, g.editable = !1, g.columntype = "checkbox", g.groupable = !1, g.draggable = !1, g.filterable = !1, g.resizable = !1, g.datafield = "_checkboxcolumn", j.add(g)
            }
            var l = new Array;
            a.each(this.columns, function(a) {
                if(void 0 != i.columns[a]) {
                    var c = new b(i, this);
                    if(c.visibleindex = k++, void 0 != this.dataField && (this.datafield = this.dataField), this.pinned && (i._haspinned = !0), i.showeverpresentrow && ("addButtonColumn" !== this.datafield && "resetButtonColumn" !== this.datafield && "updateButtonColumn" !== this.datafield && "deleteButtonColumn" !== this.datafield || (c.editable = !1, c.groupable = !1, c.draggable = !1, c.filterable = !1, c.resizable = !1, c.menu = !1)), null == this.datafield) i.source && i.source._source && "array" == i.source._source.datatype && (d || (i.source._source.datafields ? i.source._source.datafields.push({
                        name: a.toString()
                    }) : (i.source._source.datafields = new Array, i.source._source.datafields.push({
                        name: a.toString()
                    }))), this.datafield = a.toString(), this.displayfield = a.toString(), c.datafield = this.datafield, c.displayfield = this.displayfield);
                    else {
                        if(l[this.datafield]) throw new Error("jqxGrid: Invalid column 'datafield' setting. jqxGrid's columns should be initialized with unique data fields.");
                        l[this.datafield] = !0
                    }
                    j.add(c)
                }
            }), this.rtl && j.records.reverse(), this.columns = j
        },
        _initializeRows: function() {
            var b = new a.jqx.collection(this.element);
            this.rows && this.rows.clear(), this.rows = b
        },
        _raiseEvent: function(b, c) {
            if(void 0 == c && (c = {
                    owner: null
                }), this._trigger !== !1) {
                var d = this.events[b];
                if(this._camelCase || (d = d.toLowerCase()), (2 == b || 15 == b) && this.showeverpresentrow && (this.everpresentrowactions.indexOf("delete") >= 0 || this.everpresentrowactions.indexOf("update") >= 0)) {
                    if(this.updateeverpresentrow) var e = this;
                    setTimeout(function() {
                        e.updateeverpresentrow()
                    }, 50)
                }
                args = c, args.owner = this;
                var f = new a.Event(d);
                f.owner = this, f.args = args;
                var g = this.host.trigger(f);
                return c = f.args, g
            }
        },
        wheel: function(a, b) {
            if(b.autoheight && "visible" != b.hScrollBar.css("visibility")) return a.returnValue = !0, !0;
            var c = 0;
            if(a || (a = window.event), a.originalEvent && a.originalEvent.wheelDelta && (a.wheelDelta = a.originalEvent.wheelDelta), a.wheelDelta ? c = a.wheelDelta / 120 : a.detail && (c = -a.detail / 3), c) {
                var d = b._handleDelta(c);
                return d && (a.preventDefault && a.preventDefault(), null != a.originalEvent && (a.originalEvent.mouseHandled = !0), void 0 != a.stopPropagation && a.stopPropagation()), !!d && (d = !1, a.returnValue = d, d)
            }
            a.preventDefault && a.preventDefault(), a.returnValue = !1
        },
        _handleDelta: function(a) {
            if("hidden" != this.vScrollBar.css("visibility")) {
                var b = this.vScrollInstance.value;
                a < 0 ? this.scrollDown() : this.scrollUp();
                var c = this.vScrollInstance.value;
                if(b != c) return !0
            } else if("hidden" != this.hScrollBar.css("visibility")) {
                var b = this.hScrollInstance.value;
                a > 0 ? this.hScrollInstance.value > 2 * this.horizontalscrollbarstep ? this.hScrollInstance.setPosition(this.hScrollInstance.value - 2 * this.horizontalscrollbarstep) : this.hScrollInstance.setPosition(0) : this.hScrollInstance.value < this.hScrollInstance.max ? this.hScrollInstance.setPosition(this.hScrollInstance.value + 2 * this.horizontalscrollbarstep) : this.hScrollInstance.setPosition(this.hScrollInstance.max);
                var c = this.hScrollInstance.value;
                if(b != c) return !0
            }
            return !1
        },
        scrollDown: function() {
            if("hidden" != this.vScrollBar.css("visibility")) {
                var a = this.vScrollInstance;
                a.value + this.rowsheight <= a.max ? a.setPosition(parseInt(a.value) + this.rowsheight) : a.setPosition(a.max)
            }
        },
        scrollUp: function() {
            if("hidden" != this.vScrollBar.css("visibility")) {
                var a = this.vScrollInstance;
                a.value - this.rowsheight >= a.min ? a.setPosition(parseInt(a.value) - this.rowsheight) : a.setPosition(a.min)
            }
        },
        _removeHandlers: function() {
            var b = this.that;
            b.removeHandler(a(window), "orientationchange.jqxgrid" + b.element.id), b.removeHandler(a(window), "orientationchanged.jqxgrid" + b.element.id), b.removeHandler(b.vScrollBar, "valueChanged"), b.removeHandler(b.hScrollBar, "valueChanged"), b.vScrollInstance.valueChanged = null, b.hScrollInstance.valueChanged = null;
            var c = "mousedown.jqxgrid";
            b.isTouchDevice() && (c = a.jqx.mobile.getTouchEventName("touchend")), b.removeHandler(b.host, "dblclick.jqxgrid"), b.removeHandler(b.host, c), b.removeHandler(b.content, "mousemove", b._mousemovefunc), b.removeHandler(b.host, "mouseleave.jqxgrid"), b.removeHandler(b.content, "mouseenter"), b.removeHandler(b.content, "mouseleave"), b.removeHandler(b.content, "mousedown"), b.removeHandler(b.content, "scroll"), b.removeHandler(b.content, "selectstart." + b.element.id), b.removeHandler(b.host, "dragstart." + b.element.id), b.removeHandler(b.host, "keydown.edit" + b.element.id), b.removeHandler(a(document), "keydown.edit" + b.element.id), b.removeHandler(a(document), "keyup.edit" + b.element.id), b._mousemovedocumentfunc && b.removeHandler(a(document), "mousemove.selection" + b.element.id, b._mousemovedocumentfunc), b.removeHandler(a(document), "mouseup.selection" + b.element.id), b._mousewheelfunc && b.removeHandler(b.host, "mousewheel", b._mousewheelfunc), b.editable && b.removeHandler(a(document), "mousedown.gridedit" + b.element.id), b.host.off && (b.content.off("mousemove"), b.host.off("mousewheel"))
        },
        _addHandlers: function() {
            var b = this.that,
                c = b.isTouchDevice();
            c || b.addHandler(b.host, "dragstart." + b.element.id, function(a) {
                return !1
            }), b.scrollbarautoshow && (b.addHandler(b.host, "mouseenter.gridscroll" + b.element.id, function(a) {
                b.vScrollBar.fadeIn("fast"), b.hScrollBar.fadeIn("fast")
            }), b.addHandler(b.host, "mouseleave.gridscroll" + b.element.id, function(a) {
                b.vScrollInstance.isScrolling() || b.hScrollInstance.isScrolling() || (b.vScrollBar.fadeOut("fast"), b.hScrollBar.fadeOut("fast"))
            })), b.editable && b.addHandler(a(document), "mousedown.gridedit" + b.element.id, function(a) {
                if(b.editable && b.begincelledit && b.editcell && !b.vScrollInstance.isScrolling() && !b.vScrollInstance.isScrolling()) {
                    var c = b.host.coord(),
                        d = b.host.width(),
                        e = b.host.height(),
                        f = !1,
                        g = !1,
                        h = !1;
                    if((a.pageY < c.top || a.pageY > c.top + e) && (f = !0, g = !0), (a.pageX < c.left || a.pageX > c.left + d) && (f = !0, h = !0), f) {
                        if(b.editcell && b.editcell.editor) switch(b.editcell.columntype) {
                            case "datetimeinput":
                                if(b.editcell.editor.jqxDateTimeInput && b.editcell.editor.jqxDateTimeInput("container") && "block" == b.editcell.editor.jqxDateTimeInput("container")[0].style.display) {
                                    var i = b.editcell.editor.jqxDateTimeInput("container").coord().top,
                                        j = b.editcell.editor.jqxDateTimeInput("container").coord().top + b.editcell.editor.jqxDateTimeInput("container").height();
                                    if(!g || !(a.pageY < i || a.pageY > j)) return;
                                    f = !0, b.editcell.editor.jqxDateTimeInput("close")
                                }
                                break;
                            case "combobox":
                                if(b.editcell.editor.jqxComboBox && b.editcell.editor.jqxComboBox("container") && "block" == b.editcell.editor.jqxComboBox("container")[0].style.display) {
                                    var i = b.editcell.editor.jqxComboBox("container").coord().top,
                                        j = b.editcell.editor.jqxComboBox("container").coord().top + b.editcell.editor.jqxComboBox("container").height();
                                    if(!g || !(a.pageY < i || a.pageY > j)) return;
                                    f = !0, b.editcell.editor.jqxComboBox("close")
                                }
                                break;
                            case "dropdownlist":
                                if(b.editcell.editor.jqxDropDownList && b.editcell.editor.jqxDropDownList("container") && "block" == b.editcell.editor.jqxDropDownList("container")[0].style.display) {
                                    var i = b.editcell.editor.jqxDropDownList("container").coord().top,
                                        j = b.editcell.editor.jqxDropDownList("container").coord().top + b.editcell.editor.jqxDropDownList("container").height();
                                    if(!g || !(a.pageY < i || a.pageY > j)) return;
                                    f = !0, b.editcell.editor.jqxDropDownList("close")
                                }
                                break;
                            case "template":
                            case "custom":
                                for(var k = ["jqxDropDownList", "jqxComboBox", "jqxDropDownButton", "jqxDateTimeInput"], l = function(c) {
                                    var d = b.editcell.editor.data();
                                    if(d[c] && d[c].instance.container && "block" == d[c].instance.container[0].style.display) {
                                        var e = d[c].instance,
                                            h = e.container.coord().top,
                                            i = e.container.coord().top + e.container.height();
                                        return !(!g || !(a.pageY < h || a.pageY > i)) && (f = !0, e.close(), !0)
                                    }
                                }, m = 0; m < k.length; m++) {
                                    var n = l(k[m]);
                                    if(0 == n) return
                                }
                        }
                        b.endcelledit(b.editcell.row, b.editcell.column, !1, !0), b._oldselectedcell = null
                    }
                }
            }), b.vScrollInstance.valueChanged = function(a) {
                b.virtualsizeinfo && (b._closemenu(), "physical" != b.scrollmode ? (b._renderrows(b.virtualsizeinfo), b.currentScrollValue = a.currentValue) : void 0 != b.currentScrollValue && Math.abs(b.currentScrollValue - a.currentValue) >= 5 ? (b._renderrows(b.virtualsizeinfo), b.currentScrollValue = a.currentValue) : (b._renderrows(b.virtualsizeinfo), b.currentScrollValue = a.currentValue), b.pageable || b.groupable || !b.dataview.virtualmode || (b.loadondemandupdate && clearTimeout(b.loadondemandupdate), b.loadondemandupdate = setTimeout(function() {
                    b.loadondemand = !0, b._renderrows(b.virtualsizeinfo)
                }, 100)), c && (b._lastScroll = new Date))
            }, b.hScrollInstance.valueChanged = function(d) {
                if(b.virtualsizeinfo) {
                    b._closemenu();
                    var e = function() {
                        b._renderhorizontalscroll(), b._renderrows(b.virtualsizeinfo), b.editcell && !b.editrow && b._showcelleditor && b.editcell.editing && (b.hScrollInstance.isScrolling() || b._showcelleditor(b.editcell.row, b.getcolumn(b.editcell.column), b.editcell.element, b.editcell.init))
                    };
                    if(c) e();
                    else {
                        void 0 == b._browser ? b._isIE10() : b._browser;
                        navigator && navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1 ? (b._hScrollTimer && clearTimeout(b._hScrollTimer), b._hScrollTimer = setTimeout(function() {
                            e()
                        }, 1)) : a.jqx.browser.msie ? (b._hScrollTimer && clearTimeout(b._hScrollTimer), b._hScrollTimer = setTimeout(function() {
                            e()
                        }, .01)) : e()
                    }
                    c && (b._lastScroll = new Date)
                }
            }, b._mousewheelfunc = b._mousewheelfunc || function(a) {
                    if(!b.editcell && b.enablemousewheel) return b.wheel(a, b), !1
                }, b.removeHandler(b.host, "mousewheel", b._mousewheelfunc), b.addHandler(b.host, "mousewheel", b._mousewheelfunc);
            var d = "mousedown.jqxgrid";
            c && (d = a.jqx.mobile.getTouchEventName("touchend")), b.addHandler(b.host, d, function(c) {
                if(b.isTouchDevice()) {
                    if(b._newScroll = new Date, b._newScroll - b._lastScroll < 500) return !1;
                    if(a(c.target).ischildof(b.vScrollBar)) return !1;
                    if(a(c.target).ischildof(b.hScrollBar)) return !1
                }
                b._mousedown = new Date;
                var d = b._handlemousedown(c, b);
                return b.isNestedGrid && (b.resizablecolumn || b.columnsreorder || c.stopPropagation()), b._lastmousedown = new Date, d
            }), c || (b.addHandler(b.host, "dblclick.jqxgrid", function(c) {
                if(b.editable && b.begincelledit && "dblclick" == b.editmode) b._handledblclick(c, b);
                else if(a.jqx.browser.msie && a.jqx.browser.version < 9) {
                    b._handlemousedown(c, b)
                }
                return b.mousecaptured = !1, b._lastmousedown = new Date, !0
            }), b._mousemovefunc = function(a) {
                if(b._handlemousemove) return b._handlemousemove(a, b)
            }, b.addHandler(b.content, "mousemove", b._mousemovefunc), b._handlemousemoveselection && (b._mousemovedocumentfunc = function(a) {
                if(b._handlemousemoveselection) return b._handlemousemoveselection(a, b)
            }, b.addHandler(a(document), "mousemove.selection" + b.element.id, b._mousemovedocumentfunc)), b.addHandler(a(document), "mouseup.selection" + b.element.id, function(a) {
                b._handlemouseupselection && b._handlemouseupselection(a, b)
            }));
            try {
                if(("" != document.referrer || window.frameElement) && null != window.top && window.top != window.self) {
                    var e = null;
                    if(window.parent && document.referrer && (e = document.referrer), e && e.indexOf(document.location.host) != -1) {
                        var f = function(a) {
                            if(b._handlemouseupselection) try {
                                b._handlemouseupselection(a, b)
                            } catch(a) {}
                        };
                        b.addHandler(a(window.top.document), "mouseup.grid" + b.element.id, f)
                    }
                }
            } catch(a) {}
            b.focused = !1, c || (b.addHandler(b.content, "mouseenter", function(a) {
                b.focused = !0, b.wrapper && (b.wrapper.attr("tabindex", 1), b.content.attr("tabindex", 2)), b._overlayElement && (b.vScrollInstance.isScrolling() || b.hScrollInstance.isScrolling() ? b._overlayElement[0].style.visibility = "visible" : b._overlayElement[0].style.visibility = "hidden")
            }), b.addHandler(b.content, "mouseleave", function(a) {
                b._handlemousemove && b.enablehover && b._clearhoverstyle(), b._overlayElement && (b._overlayElement[0].style.visibility = "hidden"), b.focused = !1
            }), (b.groupable || b.columnsreorder) && b.addHandler(a(document), "selectstart." + b.element.id, function(a) {
                if(b.__drag === !0) return !1
            }), b.addHandler(b.content, "selectstart." + b.element.id, function(c) {
                if(b.enablebrowserselection) return !0;
                if(b.showfilterrow && a(c.target).ischildof(b.filterrow)) return !0;
                if(b.showeverpresentrow) {
                    if(a(c.target).ischildof(b.addnewrow)) return !0;
                    if(b.addnewrowtop && a(c.target).ischildof(b.addnewrowtop)) return !0
                }
                return !!(c.target.className && c.target.className.indexOf("jqx-grid-widget") >= 0) || !!b.editcell && void(c.stopPropagation && c.stopPropagation())
            }), b.addHandler(a(document), "keyup.edit" + b.element.id, function(a) {
                b._keydown = !1
            }), b.addHandler(a(document), "keydown.edit" + b.element.id, function(c) {
                b._keydown = !b.editcell;
                var d = c.charCode ? c.charCode : c.keyCode ? c.keyCode : 0;
                if(b.handlekeyboardnavigation && (b.focused || c.target === b.element || a(c.target).ischildof(b.host))) {
                    var e = b.handlekeyboardnavigation(c);
                    if(1 == e) return !1
                }
                if(b.editable && b.editcell && (13 != d && 27 != d && 9 != d || b._handleeditkeydown && (f = b._handleeditkeydown(c, b))), 27 == d && (b.mousecaptured = !1, "visible" == b.selectionarea.css("visibility") && b.selectionarea.css("visibility", "hidden")), a.jqx.browser.msie && a.jqx.browser.version < 12 && b.focused && !b.isNestedGrid) {
                    if(13 == d && 0 == f) return f;
                    var f = !0,
                        d = c.charCode ? c.charCode : c.keyCode ? c.keyCode : 0;
                    if(!b.editcell && b.editable && "programmatic" != b.editmode && b._handleeditkeydown && (f = b._handleeditkeydown(c, b)), f && b.keyboardnavigation && b._handlekeydown) return f = b._handlekeydown(c, b), f || (c.preventDefault && c.preventDefault(), void 0 != c.stopPropagation && c.stopPropagation()), f
                }
                return !0
            }), b.addHandler(b.host, "keydown.edit" + b.element.id, function(c) {
                var d = !0;
                if(b.handlekeyboardnavigation) {
                    var e = b.handlekeyboardnavigation(c);
                    if(1 == e) return !1
                }
                return b.editable && "programmatic" != b.editmode && b._handleeditkeydown && (d = b._handleeditkeydown(c, b), b.isNestedGrid && c.stopPropagation()), a.jqx.browser.msie && a.jqx.browser.version < 8 ? b.isNestedGrid && d && b.keyboardnavigation && b._handlekeydown && (d = b._handlekeydown(c, b), c.stopPropagation()) : d && b.keyboardnavigation && b._handlekeydown && (d = b._handlekeydown(c, b), b.isNestedGrid && c.stopPropagation()), d || (c.preventDefault && c.preventDefault(), void 0 != c.stopPropagation && c.stopPropagation()), d
            }))
        },
        _hittestrow: function(b, c) {
            if(null != this.vScrollInstance && null != this.hScrollInstance) {
                void 0 == b && (b = 0);
                var d = this.vScrollInstance,
                    e = this.hScrollInstance,
                    f = d.value;
                "visible" != this.vScrollBar.css("visibility") && (f = 0);
                var g = e.value;
                "visible" != this.hScrollBar.css("visibility") && (g = 0), "deferred" == this.scrollmode && null != this._newmax && f > this._newmax && (f = this._newmax);
                var h = parseInt(f) + c;
                parseInt(g) + b;
                if(null != this.visiblerows && 0 != this.visiblerows.length) {
                    var i = !1,
                        j = this._findvisiblerow(h, this.visiblerows);
                    if(j >= 0) {
                        var k = this.visiblerows[j],
                            l = this.rowdetails && k.rowdetails,
                            m = !k.rowdetailshidden;
                        if(l) {
                            var n = this.visiblerows[j - 1];
                            if(n == k && (k = n, j--), m) {
                                var o = a(this.hittestinfo[j].visualrow).position().top + parseInt(this.table.css("top")),
                                    p = a(this.hittestinfo[j].visualrow).height();
                                c >= o && c <= o + p || (j++, k = this.visiblerows[j], i = !0)
                            }
                        }
                    }
                    return {
                        index: j,
                        row: k,
                        details: i
                    }
                }
            }
        },
        getcellatposition: function(b, c) {
            var d = this.that,
                e = this.showheader ? this.columnsheader.height() + 2 : 0,
                f = this._groupsheader() ? this.groupsheader.height() : 0,
                g = this.showtoolbar ? this.toolbarheight : 0;
            f += g;
            var h = this.host.coord();
            this.hasTransform && (h = a.jqx.utilities.getOffset(this.host));
            var i = b - h.left,
                j = c - e - h.top - f,
                k = this._hittestrow(i, j),
                l = k.row,
                m = k.index,
                n = this.table[0].rows[m];
            if(this.dataview && 0 == this.dataview.records.length) {
                for(var o = this.table[0].rows, p = 0, q = 0; q < o.length; q++) {
                    if(j >= p && j < p + this.rowsheight) {
                        n = o[q];
                        break
                    }
                    p += this.rowsheight
                }
                l = {
                    boundindex: q
                }
            }
            if(null == n) return !0;
            for(var r = this.hScrollInstance, s = r.value, t = 0, q = (this.groupable ? this.groups.length : 0, 0); q < n.cells.length; q++) {
                var u = parseInt(a(this.columnsrow[0].cells[q]).css("left")),
                    b = u - s;
                if(d.columns.records[q].pinned && (b = u), !d.columns.records[q].hidden) {
                    var v = b + a(this.columnsrow[0].cells[q]).width();
                    if(v >= i && i >= b) {
                        t = q;
                        break
                    }
                }
            }
            if(null != l) {
                var w = this._getcolumnat(t);
                return {
                    row: this.getboundindex(l),
                    column: w.datafield,
                    value: this.getcellvalue(this.getboundindex(l), w.datafield)
                }
            }
            return null
        },
        _handlemousedown: function(b, c) {
            if(null == b.target) return !0;
            if(c.disabled) return !0;
            if(a(b.target).ischildof(this.columnsheader) || a(b.target).ischildof(this.hScrollBar) || a(b.target).ischildof(this.vScrollBar)) return !0;
            var d;
            b.which ? d = 3 == b.which : b.button && (d = 2 == b.button);
            var e;
            if(b.which ? e = 2 == b.which : b.button && (e = 1 == b.button), e) return !0;
            if(this.showstatusbar) {
                if(a(b.target).ischildof(this.statusbar)) return !0;
                if(b.target == this.statusbar[0]) return !0
            }
            if(this.showtoolbar) {
                if(a(b.target).ischildof(this.toolbar)) return !0;
                if(b.target == this.toolbar[0]) return !0
            }
            if(this.pageable) {
                if(a(b.target).ischildof(this.pager)) return !0;
                if(b.target == this.pager[0]) return !0
            }
            if(!this.columnsheader) return !0;
            if(!this.editcell && this.pageable && a(b.target).ischildof(this.pager)) return !0;
            var f = this.showheader ? this.columnsheader.height() + 2 : 0,
                g = this._groupsheader() ? this.groupsheader.height() : 0,
                h = this.showtoolbar ? this.toolbarheight : 0;
            g += h;
            var i = this.host.coord();
            if(this.hasTransform) {
                i = a.jqx.utilities.getOffset(this.host);
                var j = this._getBodyOffset();
                i.left -= j.left, i.top -= j.top
            }
            var k = parseInt(b.pageX),
                l = parseInt(b.pageY);
            if(this.isTouchDevice()) {
                var m = c.getTouches(b),
                    n = m[0];
                k = parseInt(n.pageX), l = parseInt(n.pageY), 1 == c.touchmode && void 0 != n._pageX && (k = parseInt(n._pageX), l = parseInt(n._pageY))
            }
            var o = k - i.left,
                p = l - f - i.top - g;
            if(this.pageable && !this.autoheight && this.gotopage) {
                var q = this.pager.coord().top - i.top - g - f;
                if(p > q) return
            }
            var r = this._hittestrow(o, p);
            if(r && !r.details) {
                var s = r.row,
                    t = r.index,
                    u = b.target.className,
                    v = this.table[0].rows[t];
                if(null == v) return c.editable && c.begincelledit && c.editcell && c.endcelledit(c.editcell.row, c.editcell.column, !1, !0), !0;
                c.mousecaptured = !0, c.mousecaptureposition = {
                    left: b.pageX,
                    top: b.pageY - g,
                    clickedrow: v
                };
                var w = this.hScrollInstance,
                    x = w.value;
                this.rtl && "hidden" != this.hScrollBar.css("visibility") && (x = w.max - w.value);
                var y = -1,
                    z = this.groupable ? this.groups.length : 0;
                this.rtl && ("hidden" != this.vScrollBar[0].style.visibility && (x -= this.scrollbarsize + 4), "hidden" == this.hScrollBar[0].style.visibility && (x = -parseInt(this.content.css("left"))));
                for(var A = 0; A < v.cells.length; A++) {
                    var B = parseInt(a(this.columnsrow[0].cells[A]).css("left")),
                        k = B - x;
                    c.columns.records[A].pinned && !c.rtl && (k = B);
                    var C = this._getcolumnat(A);
                    if(null == C || !C.hidden) {
                        var D = k + a(this.columnsrow[0].cells[A]).width();
                        if(D >= o && o >= k) {
                            y = A, c.mousecaptureposition.clickedcell = A;
                            break
                        }
                    }
                }
                if(this.rtl && this._haspinned)
                    for(var A = v.cells.length - 1; A >= 0 && c.columns.records[A].pinned; A--) {
                        var B = a(this.columnsrow[0].cells[A]).coord().left - this.host.coord().left,
                            k = B,
                            C = this._getcolumnat(A);
                        if(null == C || !C.hidden) {
                            var D = k + a(this.columnsrow[0].cells[A]).width();
                            if(D >= o && o >= k) {
                                y = A, c.mousecaptureposition.clickedcell = A;
                                break
                            }
                        }
                    }
                if(null != s && y >= 0) {
                    this._raiseEvent(1, {
                        rowindex: this.getboundindex(s),
                        visibleindex: s.visibleindex,
                        row: s,
                        group: s.group,
                        rightclick: d,
                        originalEvent: b
                    });
                    var C = this._getcolumnat(y),
                        E = this.getcellvalue(this.getboundindex(s), C.datafield);
                    if(this.editable && this.editcell && C.datafield == this.editcell.column && this.getboundindex(s) == this.editcell.row && (this.mousecaptured = !1), this._raiseEvent(8, {
                            rowindex: this.getboundindex(s),
                            column: C ? C.getcolumnproperties() : null,
                            row: s,
                            visibleindex: s.visibleindex,
                            datafield: C ? C.datafield : null,
                            columnindex: y,
                            value: E,
                            rightclick: d,
                            originalEvent: b
                        }), C.createwidget) return !0;
                    if(this.isTouchDevice())
                        if("checkbox" == C.columntype && this.editable && this._overlayElement) {
                            if(!this.editcell) return this._overlayElement.css("visibility", "hidden"), this.editcell = this.getcell(t, C.datafield), !0
                        } else if("button" == C.columntype && this._overlayElement) return C.buttonclick && C.buttonclick(v.cells[y].buttonrow, b), !0;
                    var F = !1;
                    if(null != this._lastmousedown && this._mousedown - this._lastmousedown < 300 && this._clickedrowindex == this.getboundindex(s) && (this._raiseEvent(22, {
                            rowindex: this.getboundindex(s),
                            row: s,
                            visibleindex: s.visibleindex,
                            group: s.group,
                            rightclick: d,
                            originalEvent: b
                        }), this._clickedcolumn == C.datafield && this._raiseEvent(23, {
                            rowindex: this.getboundindex(s),
                            row: s,
                            visibleindex: s.visibleindex,
                            column: C ? C.getcolumnproperties() : null,
                            datafield: C ? C.datafield : null,
                            columnindex: y,
                            value: E,
                            rightclick: d,
                            originalEvent: b
                        }), F = !0, this._clickedrowindex = -1, this._clickedcolumn = null, b.isPropagationStopped && b.isPropagationStopped())) return !1;
                    if(d) return !0;
                    F || (this._clickedrowindex = this.getboundindex(s), this._clickedcolumn = C.datafield);
                    var G = a.jqx.utilities.getBrowser();
                    if("msie" == G.browser && parseInt(G.version) <= 7 && (0 == y && this.rowdetails && (u = "jqx-grid-group-collapse"), z > 0 && y <= z && (u = "jqx-grid-group-collapse")), u.indexOf("jqx-grid-group-expand") != -1 || u.indexOf("jqx-grid-group-collapse") != -1) this.rtl ? z > 0 && y > v.cells.length - z - 1 && this._togglegroupstate ? this._togglegroupstate(s.bounddata, !0) : y == v.cells.length - 1 - z && this.rowdetails && this.showrowdetailscolumn && (this._togglerowdetails(s.bounddata, !0), this.gridcontent[0].scrollTop = 0, this.gridcontent[0].scrollLeft = 0) : z > 0 && y < z && this._togglegroupstate ? this._togglegroupstate(s.bounddata, !0) : y == z && this.rowdetails && this.showrowdetailscolumn && (this._togglerowdetails(s.bounddata, !0), this.gridcontent[0].scrollTop = 0, this.gridcontent[0].scrollLeft = 0);
                    else if(s.boundindex != -1) {
                        var H = this.selectedrowindexes.slice(0),
                            I = !1;
                        if("none" != c.selectionmode && "checkbox" != c.selectionmode && this._selectrowwithmouse) {
                            "multiplecellsadvanced" != c.selectionmode && "multiplecellsextended" != c.selectionmode && "multiplerowsextended" != c.selectionmode && "multiplerowsadvanced" != c.selectionmode || b.ctrlKey || b.shiftKey || b.metaKey || (c.selectedrowindexes = new Array, c.selectedcells = new Array);
                            var J = !1,
                                K = this.getboundindex(s);
                            c._oldselectedrow !== K && "none" !== c.selectionmode || (J = !0), c.selectionmode.indexOf("cell") == -1 ? ("singlerow" != c.selectionmode || c.selectedrowindex != K && "singlerow" == c.selectionmode) && (this._applyrowselection(K, !0, !1, null, C.datafield), this._selectrowwithmouse(c, r, H, C.datafield, b.ctrlKey || b.metaKey, b.shiftKey)) : null != C.datafield && (this._selectrowwithmouse(c, r, H, C.datafield, b.ctrlKey || b.metaKey, b.shiftKey), b.shiftKey || this._applycellselection(K, C.datafield, !0, !1)), c._oldselectedcell && c._oldselectedcell.datafield == c.selectedcell.datafield && c._oldselectedcell.rowindex == c.selectedcell.rowindex && (I = !0), c._oldselectedcell = c.selectedcell, c._oldselectedrow = K
                        }
                        if(c.autosavestate && c.savestate && c.savestate(), c.editable && c.begincelledit && "programmatic" != c.editmode) {
                            if(b.isPropagationStopped && b.isPropagationStopped()) return !1;
                            if("selectedrow" == c.editmode) {
                                if(J && !c.editcell) {
                                    if("checkbox" !== C.columntype) {
                                        c.beginrowedit(this.getboundindex(s))
                                    }
                                } else if(c.editcell && !J && "none" != c.selectionmode) {
                                    c.endrowedit(c.editcell.row)
                                }
                            } else {
                                var K = this.getboundindex(s),
                                    L = "click" == c.editmode || I && "selectedcell" == c.editmode;
                                if(c.selectionmode.indexOf("cell") == -1 && "dblclick" != c.editmode && (L = !0), L && void 0 != s.boundindex && C.editable) {
                                    c.begincelledit(this.getboundindex(s), C.datafield, C.defaulteditorvalue);
                                    c.selectionmode.indexOf("cell") != -1 && c._applycellselection(K, C.datafield, !1, !1)
                                }
                                c.selectionmode.indexOf("cell") != -1 && "selectedcell" == c.editmode && !I && c.editcell && c.endcelledit(c.editcell.row, c.editcell.column, !1, !0), "dblclick" != c.editmode || I || !c.editcell || c.editcell.row == K && C.datafield == c.editcell.column || c.endcelledit(c.editcell.row, c.editcell.column, !1, !0)
                            }
                            return !0
                        }
                    }
                }
                return !0
            }
        },
        _columnPropertyChanged: function(a, b, c, d) {},
        _rowPropertyChanged: function(a, b, c, d) {},
        _serializeObject: function(b) {
            if(null == b) return "";
            var c = "";
            return a.each(b, function(a) {
                var b = this;
                a > 0 && (c += ", "), c += "[";
                var d = 0;
                for(obj in b) d > 0 && (c += ", "), c += "{" + obj + ":" + b[obj] + "}", d++;
                c += "]"
            }), c
        },
        isbindingcompleted: function() {
            return !this._loading
        },
        propertiesChangedHandler: function(a, b, c) {
            c.width && c.height && 2 == Object.keys(c).length && (a._updatesize(!0, !0), a._resizeWindow(), a.virtualmode && !a._loading ? a.vScrollInstance.setPosition(0) : setTimeout(function() {
                a._renderrows(a.virtualsizeinfo)
            }, 100))
        },
        propertyChangedHandler: function(b, c, d, e) {
            if(void 0 != this.isInitialized && 0 != this.isInitialized && !(b.batchUpdate && b.batchUpdate.width && b.batchUpdate.height && 2 == Object.keys(b.batchUpdate).length)) switch(c = c.toLowerCase()) {
                case "editable":
                    b.refresh();
                    break;
                case "everpresentrowactionsmode":
                    d != e && (b._removeaddnewrow(), b.render());
                    break;
                case "everpresentrowactions":
                    b._updateaddnewrowui();
                    break;
                case "showeverpresentrow":
                case "everpresentrowposition":
                case "everpresentrowheight":
                    d != e && (b._removeaddnewrow(), b.render());
                    break;
                case "rtl":
                    b.content.css("left", ""), b.columns = b._columns, b._filterrowcache = [], b.vScrollBar.jqxScrollBar({
                        rtl: e
                    }), b.hScrollBar.jqxScrollBar({
                        rtl: e
                    }), b._initpager && b._initpager(), b._initgroupsheader && b._initgroupsheader(), b.render();
                    break;
                case "enablebrowserselection":
                    b.showfilterrow || (b.showstatusbar || b.showtoolbar || b.host.addClass("jqx-disableselect"), b.content.addClass("jqx-disableselect")), b.enablebrowserselection && (b.content.removeClass("jqx-disableselect"), b.host.removeClass("jqx-disableselect"));
                    break;
                case "columnsheight":
                    (30 != b.columnsheight || b.columngroups) && b._measureElement("column"), b._render(!0, !0, !0, !1, !1);
                    break;
                case "rowsheight":
                    e != d && (30 != b.rowsheight && b._measureElement("cell"), b.virtualsizeinfo = null, b.rendergridcontent(!0, !1), b.refresh());
                    break;
                case "scrollMode":
                    b.vScrollInstance.thumbStep = b.rowsheight;
                    break;
                case "showdefaultloadelement":
                    b._builddataloadelement();
                    break;
                case "showfiltermenuitems":
                case "showsortmenuitems":
                case "showgroupmenuitems":
                case "filtermode":
                    b._initmenu();
                    break;
                case "touchmode":
                    d != e && (b._removeHandlers(), b.touchDevice = null, b.vScrollBar.jqxScrollBar({
                        touchMode: e
                    }), b.hScrollBar.jqxScrollBar({
                        touchMode: e
                    }), b._updateTouchScrolling(), b._arrange(), b._updatecolumnwidths(), b._updatecellwidths(), b._addHandlers());
                    break;
                case "autoshowcolumnsmenubutton":
                    d != e && b._rendercolumnheaders();
                    break;
                case "rendergridrows":
                    d != e && b.updatebounddata();
                    break;
                case "editmode":
                    d != e && (b._removeHandlers(), b._addHandlers());
                    break;
                case "source":
                    b.updatebounddata(), b.virtualmode && !b._loading && (b.loadondemand = !0, b._renderrows(b.virtualsizeinfo));
                    break;
                case "horizontalscrollbarstep":
                case "verticalscrollbarstep":
                case "horizontalscrollbarlargestep":
                case "verticalscrollbarlargestep":
                    this.vScrollBar.jqxScrollBar({
                        step: this.verticalscrollbarstep,
                        largestep: this.verticalscrollbarlargestep
                    }), this.hScrollBar.jqxScrollBar({
                        step: this.horizontalscrollbarstep,
                        largestep: this.horizontalscrollbarlargestep
                    });
                    break;
                case "closeablegroups":
                    b._initgroupsheader && b._initgroupsheader();
                    break;
                case "showgroupsheader":
                    d != e && (b._arrange(), b._initgroupsheader && b._initgroupsheader(), b._renderrows(b.virtualsizeinfo));
                    break;
                case "theme":
                    e != d && (a.jqx.utilities.setTheme(d, e, b.host), b.gridmenu && b.gridmenu.jqxMenu({
                        theme: e
                    }), b.pageable && b._updatepagertheme(), b.filterable && b._updatefilterrowui(!0), b.showeverpresentrow && b._updateaddnewrowui(!0));
                    break;
                case "showtoolbar":
                case "toolbarheight":
                    d != e && (b._arrange(), b.refresh());
                    break;
                case "showstatusbar":
                    d != e && (b.statusbar && (e ? b.statusbar.show() : b.statusbar.hide()), b._arrange(), b.refresh());
                    break;
                case "statusbarheight":
                    d != e && (b._arrange(), b.refresh());
                    break;
                case "filterable":
                case "showfilterrow":
                    d != e && b.render();
                    break;
                case "autoshowfiltericon":
                case "showfiltercolumnbackground":
                case "showpinnedcolumnbackground":
                case "showsortcolumnbackground":
                    d != e && b.rendergridcontent();
                    break;
                case "showrowdetailscolumn":
                    d != e && b.render();
                    break;
                case "scrollbarsize":
                    d != e && b._arrange();
                    break;
                case "width":
                case "height":
                    d != e && (b._updatesize(!0, !0), b._resizeWindow(), b.virtualmode && !b._loading ? b.vScrollInstance.setPosition(0) : setTimeout(function() {
                        b._renderrows(b.virtualsizeinfo)
                    }, 100));
                    break;
                case "altrows":
                case "altstart":
                case "altstep":
                    d != e && b._renderrows(b.virtualsizeinfo);
                    break;
                case "groupsheaderheight":
                    d != e && (b._arrange(), b._initgroupsheader && b._initgroupsheader());
                    break;
                case "pagerheight":
                    d != e && b._initpager();
                    break;
                case "selectedrowindex":
                    b.selectrow(e);
                    break;
                case "selectionmode":
                    d != e && ("none" == e && (b.selectedrowindexes = new Array, b.selectedcells = new Array, b.selectedrowindex = -1), b._renderrows(b.virtualsizeinfo), "checkbox" == e && b._render(!1, !1, !0, !1, !1));
                    break;
                case "showheader":
                    e ? b.columnsheader.css("display", "block") : b.columnsheader.css("display", "none");
                    break;
                case "virtualmode":
                    d != e && (b.dataview.virtualmode = b.virtualmode, b.dataview.refresh(!1), b._render(!1, !1, !1));
                    break;
                case "columnsmenu":
                    d != e && b.render();
                    break;
                case "columngroups":
                    b._render(!0, !0, !0, !1, !1);
                    break;
                case "columns":
                    if(b._serializeObject(b._cachedcolumns) !== b._serializeObject(e)) {
                        var f = !1;
                        b.filterable && d && d.records && a.each(d.records, function() {
                            this.filter && (f = !0), b.dataview.removefilter(this.displayfield, this.filter)
                        }), b._columns = null, b._filterrowcache = [], b.render(), f && b.applyfilters(), b._cachedcolumns = b.columns, b.removesort && b.removesort()
                    } else b[c] = d;
                    break;
                case "autoheight":
                    d != e && b._render(!1, !1, !0);
                    break;
                case "pagermode":
                case "pagerbuttonscount":
                    d != e && b._initpager && (b.pagershowrowscombo && (b.pagershowrowscombo.jqxDropDownList("destroy"), b.pagershowrowscombo = null), b.pagerrightbutton && (b.removeHandler(b.pagerrightbutton, "mousedown"), b.removeHandler(b.pagerrightbutton, "mouseup"), b.removeHandler(b.pagerrightbutton, "click"), b.pagerrightbutton.jqxButton("destroy"), b.pagerrightbutton = null), b.pagerleftbutton && (b.removeHandler(b.pagerleftbutton, "mousedown"), b.removeHandler(b.pagerleftbutton, "mouseup"), b.removeHandler(b.pagerleftbutton, "click"), b.pagerleftbutton.jqxButton("destroy"), b.removeHandler(a(document), "mouseup.pagerbuttons" + b.element.id), b.pagerleftbutton = null), b.pagerdiv.remove(), b._initpager());
                    break;
                case "pagesizeoptions":
                case "pageable":
                case "pagesize":
                    if(d != e) {
                        if(b._loading) throw new Error("jqxGrid: " + b.loadingerrormessage);
                        if(!b.host.jqxDropDownList || !b.host.jqxListBox) return void b._testmodules();
                        if(b._initpager) {
                            if("pageable" != c && "pagermode" != c && "string" == typeof e) {
                                var g = "The expected value type is: Int.";
                                if("pagesize" != c) var g = "The expected value type is: Array of Int values.";
                                throw new Error("Invalid Value for: " + c + ". " + g)
                            }
                            b.dataview.pageable = b.pageable, b.dataview.pagenum = 0, b.dataview.pagesize = b._getpagesize(), b.virtualmode && b.updatebounddata(), b.dataview.refresh(!0), b._initpager(), "pagesizeoptions" == c && null != e && e.length > 0 && (b.pagesize = parseInt(e[0]), b.dataview.pagesize = parseInt(e[0]), b.prerenderrequired = !0, b._requiresupdate = !0, b.dataview.pagenum = -1, b.gotopage(0))
                        }
                        b._render(!1, !1, !1)
                    }
                    break;
                case "groups":
                    b._serializeObject(d) !== b._serializeObject(e) && (b.dataview.groups = e, b._refreshdataview(), b._render(!0, !0, !0, !1));
                    break;
                case "groupable":
                    d != e && (b.dataview.groupable = b.groupable, b.dataview.pagenum = 0, b.dataview.refresh(!1), b._render(!1, !1, !0));
                    break;
                case "renderstatusbar":
                    null != e && b.renderstatusbar(b.statusbar);
                    break;
                case "rendertoolbar":
                    null != e && b.rendertoolbar(b.toolbar);
                    break;
                case "disabled":
                    e ? b.host.addClass(b.toThemeProperty("jqx-fill-state-disabled")) : b.host.removeClass(b.toThemeProperty("jqx-fill-state-disabled")), a.jqx.aria(b, "aria-disabled", b.disabled), b.pageable && (b.pagerrightbutton && (b.pagerrightbutton.jqxButton({
                        disabled: e
                    }), b.pagerleftbutton.jqxButton({
                        disabled: e
                    }), b.pagershowrowscombo.jqxDropDownList({
                        disabled: e
                    }), b.pagergotoinput.attr("disabled", e)), b.pagerfirstbutton && (b.pagerfirstbutton.jqxButton({
                        disabled: e
                    }), b.pagerlastbutton.jqxButton({
                        disabled: e
                    }))), b.vScrollBar.jqxScrollBar({
                        disabled: e
                    }), b.hScrollBar.jqxScrollBar({
                        disabled: e
                    }), b.filterable && b.showfilterrow && b._updatefilterrowui(!0), b.showeverpresentrow && b._updateaddnewrowui(!0)
            }
        }
    }), a.jqx.collection = function(a) {
        return this.records = new Array, this.owner = a, this.updating = !1, this.beginupdate = function() {
            this.updating = !0
        }, this.resumeupdate = function() {
            this.updating = !1
        }, this._raiseEvent = function(a) {}, this.clear = function() {
            this.records = new Array
        }, this.replace = function(a, b) {
            this.records[a] = b, this.updating || this._raiseEvent({
                type: "replace",
                element: b
            })
        }, this.isempty = function(a) {
            return void 0 == this.records[a]
        }, this.initialize = function(a) {
            a < 1 && (a = 1), this.records[a - 1] = -1
        }, this.length = function() {
            return this.records.length
        }, this.indexOf = function(a) {
            return this.records.indexOf(a)
        }, this.add = function(a) {
            return null != a && (this.records[this.records.length] = a, this.updating || this._raiseEvent({
                    type: "add",
                    element: a
                }), !0)
        }, this.insertAt = function(a, b) {
            return null != a && void 0 != a && (null != b && (a >= 0 && (a < this.records.length ? (this.records.splice(a, 0, b), this.updating || this._raiseEvent({
                    type: "insert",
                    index: a,
                    element: b
                }), !0) : this.add(b))))
        }, this.remove = function(a) {
            if(null == a || void 0 == a) return !1;
            var b = this.records.indexOf(a);
            return b != -1 && (this.records.splice(b, 1), this.updating || this._raiseEvent({
                    type: "remove",
                    element: a
                }), !0)
        }, this.removeAt = function(a) {
            if(null == a || void 0 == a) return !1;
            if(a < 0) return !1;
            if(a < this.records.length) {
                var b = this.records[a];
                return this.records.splice(a, 1), this.updating || this._raiseEvent({
                    type: "removeAt",
                    index: a,
                    element: b
                }), !0
            }
            return !1
        }, this
    }, a.jqx.dataview = function() {
        return this.self = this, this.aggregates = !1, this.grid = null, this.uniqueId = "id", this.records = [], this.rows = [], this.columns = [], this.groups = [], this.filters = new Array, this.updated = null, this.update = null, this.suspend = !1, this.pagesize = 0, this.pagenum = 0, this.totalrows = 0, this.totalrecords = 0, this.groupable = !0, this.loadedrecords = [], this.loadedrootgroups = [], this.loadedgroups = [], this.loadedgroupsByKey = [], this.virtualmode = !0, this._cachegrouppages = new Array, this.source = null, this.changedrecords = new Array, this.rowschangecallback = null, this.that = this, this.destroy = function() {
            delete this.self, delete this.grid, delete this.uniqueId, delete this.records, delete this.rows, delete this.columns, delete this.groups, delete this.filters, delete this.updated, delete this.update, delete this.suspend, delete this.pagesize, delete this.pagenum, delete this.totalrows, delete this.totalrecords, delete this.groupable, delete this.loadedrecords, delete this.loadedrootgroups, delete this.loadedgroups, delete this.loadedgroupsByKey, delete this.virtualmode, delete this._cachegrouppages, delete this.source, delete this.changedrecords, delete this.rowschangecallback, delete this.that
        }, this.suspendupdate = function() {
            this.suspend = !0
        }, this.isupdating = function() {
            return this.suspend
        }, this.resumeupdate = function(a) {
            this.suspend = !1, void 0 == a && (a = !0), this.refresh(a)
        }, this.getrecords = function() {
            return this.records
        }, this.clearrecords = function() {
            this.recordids = new Array
        }, this.databind = function(b, c) {
            var d = !!b._source,
                e = null;
            this.grid && (this.aggregates = this.grid.showgroupaggregates), d ? (e = b, b = b._source) : e = new a.jqx.dataAdapter(b, {
                autoBind: !1
            });
            var f = function(a) {
                    e.recordids = [], e.records = new Array, e.cachedrecords = new Array, e.originaldata = new Array, e._options.virtualmode = a.virtualmode, e._options.totalrecords = a.totalrecords, e._options.originaldata = a.originaldata, e._options.recordids = a.recordids, e._options.cachedrecords = new Array, e._options.pagenum = a.pagenum, e._options.pageable = a.pageable, void 0 != b.type && (e._options.type = b.type), void 0 != b.formatdata && (e._options.formatData = b.formatdata), void 0 != b.contenttype && (e._options.contentType = b.contenttype), void 0 != b.async && (e._options.async = b.async), void 0 != b.updaterow && (e._options.updaterow = b.updaterow), void 0 != b.addrow && (e._options.addrow = b.addrow), void 0 != b.deleterow && (e._options.deleterow = b.deleterow), 0 == a.pagesize && (a.pagesize = 10), e._options.pagesize = a.pagesize
                },
                g = function(c) {
                    if(c.totalrecords = e.totalrecords, c.virtualmode) {
                        var d = {
                            startindex: c.pagenum * c.pagesize,
                            endindex: c.pagenum * c.pagesize + c.pagesize
                        };
                        if(void 0 != b.recordstartindex && (d.startindex = parseInt(b.recordstartindex)), void 0 != b.recordendindex ? d.endindex = parseInt(b.recordendindex) : c.grid.pageable || (d.endindex = d.startindex + 100, c.grid.autoheight && (d.endindex = d.startindex + c.totalrecords)), b.recordendindex || (c.grid.pageable ? d = {
                                startindex: c.pagenum * c.pagesize,
                                endindex: c.pagenum * c.pagesize + c.pagesize
                            } : (d.endindex = d.startindex + 100, c.grid.autoheight && (d.endindex = d.startindex + c.totalrecords))), d.data = e.records, c.grid.rendergridrows && c.totalrecords > 0) {
                            var f = 0;
                            if(b.records = c.grid.rendergridrows(d), b.records.length && (f = b.records.length), b.records && !b.records[d.startindex]) {
                                var g = new Array,
                                    h = d.startindex;
                                a.each(b.records, function() {
                                    g[h] = this, h++, f++
                                }), b.records = g
                            }
                            if(0 == f && b.records && a.each(b.records, function() {
                                    f++
                                }), f > 0 && f < d.endindex - d.startindex && !c.grid.groupable)
                                for(var i = b.records[0], j = 0; j < d.endindex - d.startindex - f; j++) {
                                    var k = {};
                                    for(obj in i) k[obj] = "";
                                    b.records.push && b.records.push(k)
                                }
                        }
                        b.records && 0 != c.totalrecords || (b.records = new Array), c.originaldata = b.records, c.records = b.records, c.cachedrecords = b.records
                    } else c.originaldata = e.originaldata, c.records = e.records, c.recordids = e.recordids, c.cachedrecords = e.cachedrecords
                };
            f(this), this.source = b, void 0 !== c && (uniqueId = c);
            var h = this.that;
            switch(b.datatype) {
                case "local":
                case "array":
                default:
                    if(null == b.localdata && (b.localdata = []), null != b.localdata) {
                        e.unbindBindingUpdate(h.grid.element.id), (!h.grid.autobind && h.grid.isInitialized || h.grid.autobind) && e.dataBind();
                        var i = function(c) {
                            if(void 0 != c && "" != c) {
                                var d = e._changedrecords[0];
                                if(d) {
                                    var f = new Array;
                                    a.each(e._changedrecords, function(a) {
                                        var b = this.index,
                                            d = this.record;
                                        switch(h.grid._updateFromAdapter = !0, c) {
                                            case "update":
                                                var g = h.grid.getrowid(b);
                                                return a == e._changedrecords.length - 1 ? h.grid.updaterow(g, d) : h.grid.updaterow(g, d, !1), void(h.grid._updateFromAdapter = !1);
                                            case "add":
                                                return h.grid.addrow(null, d), void(h.grid._updateFromAdapter = !1);
                                            case "remove":
                                                var g = h.grid.getrowid(b);
                                                return void f.push(g)
                                        }
                                    }), f.length > 0 && (h.grid.deleterow(f, !1), h.grid._updateFromAdapter = !1)
                                }
                                if("update" == c) return
                            }
                            var i = h.totalrecords;
                            g(h, c), null === b.localdata.notifier && "observableArray" == b.localdata.name && (b.localdata.notifier = function(c) {
                                if(!this._updating) {
                                    this._updating = !0;
                                    var d = h.grid.getrowid(c.index);
                                    switch(c.type) {
                                        case "add":
                                            var f = a.extend({}, c.object[c.index]),
                                                g = e.getid(b.id, f, c.index);
                                            0 === c.index ? h.grid.addrow(g, f, "first") : h.grid.addrow(g, f);
                                            break;
                                        case "delete":
                                            h.grid.deleterow(d);
                                            break;
                                        case "update":
                                            if(c.path && c.path.split(".").length > 1) {
                                                var i = c.path.split(".");
                                                h.grid.setcellvalue(c.index, i[i.length - 1], c.newValue)
                                            } else {
                                                var f = a.extend({}, c.object[c.index]);
                                                h.grid.updaterow(d, f)
                                            }
                                    }
                                    this._updating = !1
                                }
                            }), "updateData" == c ? (h.refresh(), h.grid._updateGridData()) : (b.recordstartindex && this.virtualmode ? h.updateview(b.recordstartindex, b.recordstartindex + h.pagesize) : h.refresh(), h.update(i != h.totalrecords))
                        };
                        i(), e.bindBindingUpdate(h.grid.element.id, i)
                    }
                    break;
                case "json":
                case "jsonp":
                case "xml":
                case "xhtml":
                case "script":
                case "text":
                case "csv":
                case "tab":
                    if(null != b.localdata) {
                        e.unbindBindingUpdate(h.grid.element.id), (!h.grid.autobind && h.grid.isInitialized || h.grid.autobind) && e.dataBind();
                        var i = function(a) {
                            var c = h.totalrecords;
                            g(h), "updateData" == a ? (h.refresh(), h.grid._updateGridData()) : (b.recordstartindex && h.virtualmode ? h.updateview(b.recordstartindex, b.recordstartindex + h.pagesize) : h.refresh(), h.update(c != h.totalrecords))
                        };
                        return i(), void e.bindBindingUpdate(h.grid.element.id, i)
                    }
                    for(var j = [], k = 0, l = {}, m = 0; m < this.filters.length; m++) {
                        var n = this.filters[m].datafield,
                            o = this.filters[m].filter;
                        if(o.getfilters) {
                            var p = o.getfilters();
                            l[n + "operator"] = o.operator;
                            for(var q = 0; q < p.length; q++) {
                                p[q].datafield = n;
                                var r = p[q].value;
                                if("datefilter" == p[q].type)
                                    if(p[q].value && p[q].value.toLocaleString) {
                                        var s = this.grid.getcolumn(p[q].datafield);
                                        if(s && s.cellsformat) {
                                            var t = this.grid.source.formatDate(p[q].value, s.cellsformat, this.grid.gridlocalization);
                                            t ? l["filtervalue" + k] = t : l["filtervalue" + k] = p[q].value.toLocaleString()
                                        } else l["filtervalue" + k] = r.toString()
                                    } else l["filtervalue" + k] = r.toString();
                                else l["filtervalue" + k] = r.toString(), p[q].data && (l["filterid" + k] = p[q].data.toString()), p[q].id && (l["filterid" + k] = p[q].id.toString());
                                l["filtercondition" + k] = p[q].condition, l["filteroperator" + k] = p[q].operator, l["filterdatafield" + k] = n;
                                var u = {
                                    label: r.toString()
                                };
                                p[q].data && (u.value = p[q].data.toString()), p[q].id ? u.value = p[q].id.toString() : u.value = r.toString(), u.condition = p[q].condition, u.operator = 0 == p[q].operator ? "and" : "or", u.field = n, u.type = p[q].type;
                                var v = !1;
                                if(j.length > 0)
                                    for(var w = 0; w < j.length; w++) {
                                        var x = j[w];
                                        if(x.field == n) {
                                            x.filters.push(u), v = !0;
                                            break
                                        }
                                    }
                                v || (j.push({
                                    field: n,
                                    filters: []
                                }), j[j.length - 1].filters.push(u)), k++
                            }
                        }
                    }
                    l.filterGroups = j, l.filterscount = k, l.groupscount = h.groups.length;
                    for(var m = 0; m < h.groups.length; m++) l["group" + m] = h.groups[m];
                    void 0 == b.recordstartindex && (b.recordstartindex = 0), void 0 != b.recordendindex && 0 != b.recordendindex || (h.grid.height && h.grid.height.toString().indexOf("%") == -1 ? (b.recordendindex = parseInt(h.grid.height) / h.grid.rowsheight, b.recordendindex += 2, b.recordendindex = parseInt(b.recordendindex)) : (b.recordendindex = a(window).height() / h.grid.rowsheight, b.recordendindex = parseInt(b.recordendindex)), this.pageable && (b.recordendindex = this.pagesize)), this.pageable && (b.recordstartindex = this.pagenum * this.pagesize, b.recordendindex = (this.pagenum + 1) * this.pagesize), a.extend(l, {
                        sortdatafield: h.sortfield,
                        sortorder: h.sortfielddirection,
                        pagenum: h.pagenum,
                        pagesize: h.grid.pagesize,
                        recordstartindex: b.recordstartindex,
                        recordendindex: b.recordendindex
                    });
                    var y = e._options.data;
                    e._options.data ? a.extend(e._options.data, l) : (b.data && a.extend(l, b.data), e._options.data = l);
                    var i = function() {
                        var c = a.jqx.browser.msie && a.jqx.browser.version < 9,
                            d = function() {
                                var a = h.totalrecords;
                                g(h), b.recordstartindex && h.virtualmode ? h.updateview(b.recordstartindex, b.recordstartindex + h.pagesize) : h.refresh(), h.update(a != h.totalrecords)
                            };
                        if(c) try {
                            d()
                        } catch(a) {} else d()
                    };
                    e.unbindDownloadComplete(h.grid.element.id), e.bindDownloadComplete(h.grid.element.id, i), !h.grid.autobind && h.grid.isInitialized || h.grid.autobind ? e.dataBind() : h.grid.isInitialized || h.grid.autobind || i(), e._options.data = y
            }
        }, this.getid = function(b, c, d) {
            if(a(b, c).length > 0) return a(b, c).text();
            if(b && b.toString().length > 0) {
                var e = a(c).attr(b);
                if(null != e && e.toString().length > 0) return e
            }
            return d
        }, this.getvaluebytype = function(b, c) {
            var d = b;
            if("date" == c.type) {
                var e = new Date(b);
                b = ("NaN" == e.toString() || "Invalid Date" == e.toString()) && a.jqx.dataFormat ? a.jqx.dataFormat.tryparsedate(b) : e, null == b && (b = d)
            } else if("float" == c.type) {
                var b = parseFloat(b);
                isNaN(b) && (b = d)
            } else if("int" == c.type) {
                var b = parseInt(b);
                isNaN(b) && (b = d)
            } else "bool" == c.type && (null != b && ("false" == b.toLowerCase() ? b = !1 : "true" == b.toLowerCase() && (b = !0)), b = 1 == b || 0 != b && "");
            return b
        }, this.setpaging = function(a) {
            void 0 != a.pageSize && (this.pagesize = a.pageSize), void 0 != a.pageNum && (this.pagenum = Math.min(a.pageNum, Math.ceil(this.totalrows / this.pagesize))), this.refresh()
        }, this.getpagingdetails = function() {
            return {
                pageSize: this.pagesize,
                pageNum: this.pagenum,
                totalrows: this.totalrows
            }
        }, this._clearcaches = function() {
            this.sortcache = {}, this.sortdata = null, this.changedrecords = new Array, this.records = new Array, this.rows = new Array, this.cacheddata = new Array, this.originaldata = new Array, this.bounditems = new Array, this.loadedrecords = new Array, this.loadedrootgroups = new Array, this.loadedgroups = new Array, this.loadedgroupsByKey = new Array, this._cachegrouppages = new Array, this.recordsbyid = new Array, this.cachedrecords = new Array, this.recordids = new Array
        }, this.addfilter = function(a, b) {
            for(var c = -1, d = 0; d < this.filters.length; d++)
                if(this.filters[d].datafield == a) {
                    c = d;
                    break
                }
            c == -1 ? this.filters[this.filters.length] = {
                filter: b,
                datafield: a
            } : this.filters[c] = {
                filter: b,
                datafield: a
            }
        }, this.removefilter = function(a) {
            for(var b = 0; b < this.filters.length; b++)
                if(this.filters[b].datafield == a) {
                    this.filters.splice(b, 1);
                    break
                }
        }, this.getItemFromIndex = function(a) {
            return this.records[a]
        }, this.updaterow = function(a, b, c) {
            var d = this.filters && this.filters.length > 0 && !this.virtualmode;
            if(!d && void 0 != b && void 0 != a) {
                b.uid = a, b[this.source.id] || (b[this.source.id] = b.uid);
                var e = this.recordsbyid["id" + a],
                    f = this.records.indexOf(e);
                return f != -1 && (this.records[f] = b, this.cachedrecords && (this.cachedrecords[f] = b), 1 != c && void 0 != c || this.refresh(), this.changedrecords[b.uid] = {
                        Type: "Update",
                        OldData: e,
                        Data: b
                    }, !0)
            }
            if(this.filters && this.filters.length > 0) {
                for(var g = this.cachedrecords, e = null, f = -1, h = 0; h < g.length; h++)
                    if(g[h].uid == a) {
                        e = g[h], f = h;
                        break
                    }
                if(e) {
                    var i = this.that;
                    for(var j in b) i.cachedrecords[f][j] = b[j];
                    return 1 != c && void 0 != c || this.refresh(), !0
                }
            }
            return !1
        }, this.addrow = function(b, c, d, e) {
            if(void 0 != c) {
                if(a.isEmptyObject(c) && this.source && this.source.datafields && a.each(this.source.datafields, function() {
                        var a = "";
                        "number" == this.type && (a = null), "date" == this.type && (a = null), "bool" != this.type && "boolean" != this.type || (a = !1), c[this.name] = a
                    }), !b || this.recordsbyid["id" + b]) {
                    c.uid = this.getid(this.source.id, c, this.totalrecords);
                    for(var f = this.recordsbyid["id" + c.uid]; null != f;) {
                        var g = Math.floor(1e4 * Math.random()).toString();
                        c.uid = g, f = this.recordsbyid["id" + g]
                    }
                } else c.uid = b;
                return c[this.source.id] || void 0 != this.source.id && (c[this.source.id] = c.uid), "last" == d ? this.records.push(c) : "number" == typeof d && isFinite(d) ? this.records.splice(d, 0, c) : this.records.splice(0, 0, c), this.filters && this.filters.length > 0 && ("last" == d ? this.cachedrecords.push(c) : "number" == typeof d && isFinite(d) ? this.cachedrecords.splice(d, 0, c) : this.cachedrecords.splice(0, 0, c)), this.totalrecords++, this.virtualmode && (this.source.totalrecords = this.totalrecords), 1 != e && void 0 != e || this.refresh(), this.changedrecords[c.uid] = {
                    Type: "New",
                    Data: c
                }, !0
            }
            return !1
        }, this.deleterow = function(a, b) {
            if(void 0 != a) {
                var c = this.filters && this.filters.length > 0;
                if(this.recordsbyid["id" + a] && !c) {
                    var d = this.recordsbyid["id" + a],
                        e = this.records.indexOf(d);
                    return this.changedrecords[a] = {
                        Type: "Delete",
                        Data: this.records[e]
                    }, this.records.splice(e, 1), this.totalrecords--, this.virtualmode && (this.source.totalrecords = this.totalrecords), 1 != b && void 0 != b || this.refresh(), !0
                }
                if(this.filters && this.filters.length > 0) {
                    for(var f = this.cachedrecords, d = null, e = -1, g = 0; g < f.length; g++)
                        if(f[g].uid == a) {
                            d = f[g], e = g;
                            break
                        }
                    if(d) return this.cachedrecords.splice(e, 1), 1 != b && void 0 != b || (this.totalrecords = 0, this.records = this.cachedrecords, this.refresh()), !0
                }
                return !1
            }
            return !1
        }, this.reload = function(b, c, d, e, f, g, h) {
            var i = this.that,
                j = new Array,
                k = b,
                l = c,
                m = d,
                n = e,
                o = l.length,
                p = 0,
                q = 0;
            if(this.columns = [], this.bounditems = new Array, this.loadedrecords = new Array, this.loadedrootgroups = new Array, this.loadedgroups = new Array, this.loadedgroupsByKey = new Array, this._cachegrouppages = new Array, this.recordsbyid = {}, 0 == this.totalrecords) {
                Object.size = function(a) {
                    var b, c = 0;
                    for(b in a) a.hasOwnProperty(b) && c++;
                    return c
                };
                var r = Object.size(k);
                this.totalrecords = r, a.each(this.records, function(b) {
                    var c = this,
                        d = 0;
                    return a.each(c, function(a, b) {
                        i.columns[d++] = a
                    }), !1
                })
            }
            if(this.virtualmode) {
                if(this.pageable) return void this.updateview();
                var g = 0;
                if(!this.groupable) return void this.updateview();
                var h = this.totalrecords
            } else var g = 0,
                h = this.totalrecords;
            if(this.groupable && this.groups.length > 0 && this.loadgrouprecords) {
                var s = g;
                s = this.loadgrouprecords(0, g, h, m, q, n, l, o, j)
            } else p = this.loadflatrecords(g, h, m, q, n, l, o, j);
            return o > q && l.splice(q, o - q), this.groups.length > 0 && this.groupable ? this.totalrows = s : this.totalrows = p, j
        }, this.loadflatrecords = function(b, c, d, e, f, g, h, i) {
            var j = this.that,
                k = b,
                l = b;
            c = Math.min(c, this.totalrecords);
            for(var m = null != this.sortdata, n = (this.source.id && ("local" == this.source.datatype || "array" == this.source.datatype || "" == this.source.datatype), m ? this.sortdata : this.records), o = b; o < c; o++) {
                var p = {};
                m ? (p = a.extend({}, n[o].value), id = p[j.uniqueId], p.boundindex = n[o].index, void 0 == p.uid && (p.uid = j.getid(j.source.id, p, p.boundindex)), j.recordsbyid["id" + p.uid] = n[o].value, j.loadedrecords[k] = p, p.uniqueid = j.generatekey(), j.bounditems[p.boundindex] = p) : (p = new Object(n[o]), id = p[j.uniqueId], p.boundindex = k, j.loadedrecords[k] = p, void 0 == p.uid && (p.uid = j.getid(j.source.id, p, k)), j.recordsbyid["id" + p.uid] = n[o], p.uniqueid = j.generatekey(), j.bounditems[this.bounditems.length] = p), (e >= h || id != g[e][j.uniqueId] || f && f[id]) && (i[i.length] = e), g[e] = p, e++, p.visibleindex = l, l++, k++
            }
            if(j.grid.summaryrows) {
                var q = k;
                a.each(j.grid.summaryrows, function() {
                    var b = a.extend({}, this);
                    b.boundindex = c++, j.loadedrecords[q] = b, b.uniqueid = j.generatekey(), j.bounditems[j.bounditems.length] = b, g[e] = b, e++, b.visibleindex = l, l++, q++
                })
            }
            return l
        }, this.updateview = function(a, b) {
            var c = this.that,
                d = this.pagesize * this.pagenum,
                e = 0,
                f = new Array,
                g = this.filters,
                h = this.updated,
                i = f.length;
            if(this.pageable) {
                if(this.virtualmode)
                    if(this.groupable && 0 != this.groups.length) {
                        if(this.groupable && this.groups.length > 0 && this.loadgrouprecords) {
                            if(void 0 != this._cachegrouppages[this.pagenum + "_" + this.pagesize]) return this.rows = this._cachegrouppages[this.pagenum + "_" + this.pagesize], void(this.totalrows = this.rows.length);
                            var j = this.pagesize * (1 + this.pagenum);
                            return j > this.totalrecords && (j = this.totalrecords), this.loadgrouprecords(0, this.pagesize * this.pagenum, j, g, e, h, f, i, []), this._cachegrouppages[this.pagenum + "_" + this.pagesize] = this.rows, void(this.totalrows = this.rows.length)
                        }
                    } else this.loadflatrecords(this.pagesize * this.pagenum, this.pagesize * (1 + this.pagenum), g, e, h, f, i, []), this.totalrows = f.length
            } else if(this.virtualmode && (!this.groupable || 0 == this.groups.length)) {
                var k = this.pagesize;
                0 == k && (k = Math.min(100, this.totalrecords));
                var l = k * this.pagenum;
                if(0 == this.loadedrecords.length && (l = 0), null != a && null != b ? this.loadflatrecords(a, b, g, e, h, f, i, []) : this.loadflatrecords(this.pagesize * this.pagenum, this.pagesize * (1 + this.pagenum), g, e, h, f, i, []), this.totalrows = this.loadedrecords.length, this.rows = f, f.length >= k) return
            }
            if(this.groupable && this.pageable && this.groups.length > 0 && this._updategroupsinpage) f = this._updategroupsinpage(c, g, d, e, i, this.pagesize * this.pagenum, this.pagesize * (1 + this.pagenum));
            else
                for(var m = this.pagesize * this.pagenum; m < this.pagesize * (1 + this.pagenum); m++) {
                    var n = m < this.loadedrecords.length ? this.loadedrecords[m] : null;
                    null != n && ((!this.pagesize || d >= this.pagesize * this.pagenum && d <= this.pagesize * (this.pagenum + 1)) && (f[e] = n, e++), d++)
                }
            if((0 == f.length || f.length < this.pagesize) && !this.pageable && this.virtualmode) {
                e = f.length;
                for(var o = f.length, m = this.pagesize * this.pagenum; m < this.pagesize * (1 + this.pagenum) - o; m++) {
                    var n = {};
                    n.boundindex = m + o, n.visibleindex = m + o, n.uniqueid = c.generatekey(), n.empty = !0, c.bounditems[m + o] = n, f[e] = n, e++
                }
            }
            this.rows = f
        }, this.generatekey = function() {
            var a = function() {
                return 16 * (1 + Math.random()) | 0
            };
            return "" + a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
        }, this.reloaddata = function() {
            this.reload(this.records, this.rows, this.filter, this.updated, !0)
        }, this.refresh = function(b) {
            if(!this.suspend) {
                void 0 == b && (b = !0);
                var c = this.rows.length,
                    d = this.totalrows;
                if(this.filters.length > 0 && !this.virtualmode) {
                    var e = "",
                        f = this.cachedrecords.length,
                        g = new Array;
                    this.totalrecords = 0;
                    var h = this.cachedrecords;
                    this._dataIndexToBoundIndex = new Array;
                    var i = this.filters.length;
                    if(null != this.source && void 0 != this.source.filter && void 0 != this.source.localdata) g = this.source.filter(this.filters, h, f), void 0 == g && (g = new Array), this.records = g;
                    else if(null == this.source.filter || void 0 == this.source.filter) {
                        for(var j = 0; j < f; j++) {
                            for(var k = h[j], l = void 0, m = 0; m < i; m++) {
                                var e = this.filters[m].filter,
                                    n = k[this.filters[m].datafield],
                                    o = e.evaluate(n);
                                if(this.grid.filter) {
                                    var p = this.grid.filter(n, k, this.filters[m].datafield, e, o);
                                    void 0 !== p && (o = p)
                                }
                                l = void 0 == l ? o : "or" == e.operator ? l || o : l && o
                            }
                            l ? (g[g.length] = a.extend({
                                dataindex: j
                            }, k), this._dataIndexToBoundIndex[j] = {
                                boundindex: g.length - 1
                            }) : this._dataIndexToBoundIndex[j] = null
                        }
                        this.records = g
                    }
                    if(this.sortdata) {
                        var q = this.sortfield;
                        if(this.sortcache[q]) {
                            this.sortdata = null;
                            var r = this.sortcache[q].direction;
                            return this.sortcache[q] = null, void this.sortby(this.sortfield, r)
                        }
                    }
                } else if(0 == this.filters.length && !this.virtualmode && this.cachedrecords) {
                    this.totalrecords = 0;
                    var h = this.cachedrecords;
                    if(this.records = h, this.sortdata) {
                        var q = this.sortfield;
                        if(this.sortcache[q]) {
                            this.sortdata = null;
                            var r = this.sortcache[q].direction;
                            return this.sortcache[q] = null, void this.sortby(this.sortfield, r)
                        }
                    }
                }
                var s = this.reload(this.records, this.rows, this.filter, this.updated, b);
                this.updated = null, null != this.rowschangecallback && (d != totalrows && this.rowschangecallback({
                    type: "PagingChanged",
                    data: getpagingdetails()
                }), c != rows.length && this.rowschangecallback({
                    type: "RowsCountChanged",
                    data: {
                        previous: c,
                        current: rows.length
                    }
                }), (s.length > 0 || c != rows.length) && this.rowschangecallback({
                    type: "RowsChanged",
                    data: {
                        previous: c,
                        current: rows.length,
                        diff: s
                    }
                }))
            }
        }, this
    }
}(jqxBaseFramework);